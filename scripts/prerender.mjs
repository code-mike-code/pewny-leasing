/**
 * Prerender SEO head per route (bez przeglądarki, bez SSR).
 *
 * Problem: to jest SPA — surowy HTML każdej podstrony (zanim wykona się JS)
 * dziedziczy <title> i <link canonical> strony głównej. Roboty, które nie
 * renderują JS, widzą wszystkie podstrony jako duplikat strony głównej i mogą
 * ich nie zaindeksować osobno.
 *
 * Rozwiązanie: po `vite build` bierzemy zbudowany dist/index.html jako szablon
 * i dla każdej trasy zapisujemy osobny plik <slug>.html z poprawnym title,
 * description, canonical oraz tagami Open Graph / Twitter. Ten sam bundle JS
 * nadal się ładuje, więc React Router + Helmet przejmują stronę po hydracji.
 *
 * .htaccess mapuje czysty URL (/faq) na plik statyczny (faq.html) — bez zmiany
 * adresu w pasku i bez przekierowania na ukośnik, więc canonical się zgadza.
 *
 * Wartości meta są skopiowane 1:1 z <Helmet> odpowiednich stron i z pl.ts,
 * żeby statyczny head zgadzał się z tym, co ustawia klient.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const DOMAIN = 'https://pewnyleasing24.pl';

const template = readFileSync(join(DIST, 'index.html'), 'utf8');

/** @type {{slug:string,title:string,description?:string,ogTitle?:string,robots?:string}[]} */
const routes = [
  {
    slug: 'faq',
    title: 'FAQ – Najczęstsze pytania o leasing | Pewny Leasing',
    description:
      'Odpowiedzi na najczęstsze pytania o leasing operacyjny, wynajem długoterminowy, finansowanie flot i sprzętu specjalistycznego. Pewny Leasing – broker B2B, Warszawa.',
  },
  {
    slug: 'cashback',
    title: 'Program Cash Back – zwrot gotówki za leasing | Pewny Leasing',
    description:
      'Odzyskaj część środków przy każdej transakcji leasingowej. Transparentny program Cash Back dla klientów indywidualnych i firmowych Pewny Leasing.',
  },
  {
    slug: 'discounts',
    title: 'Pojazdy z Rabatem – Ekskluzywne Rabaty Flotowe | Pewny Leasing',
    description:
      'Uzyskaj ekskluzywne rabaty flotowe na pojazdy Mercedes, BMW, Toyota i BYD. Rabat wyliczany na podstawie marki, modelu i dostępności. Sprawdź ofertę Pewny Leasing.',
  },
  {
    slug: 'finansowanie-sprzetu',
    title: 'Finansowanie Sprzętu Specjalistycznego dla Firm | Pewny Leasing',
    description:
      'Leasing i finansowanie sprzętu specjalistycznego dla medycyny, budownictwa, IT, transportu, produkcji i rolnictwa. Wspieramy rozwój biznesu w każdej branży.',
  },
  {
    slug: 'privacy-policy',
    title: 'Polityka prywatności i cookies – Pewny Leasing',
    description:
      'Polityka prywatności i cookies serwisu Pewny Leasing — jakie dane zbieramy, w jakim celu i jak je chronimy.',
    robots: 'noindex, follow',
  },
  {
    slug: 'terms-of-service',
    title: 'Regulamin – Pewny Leasing',
    description:
      'Regulamin świadczenia usług Pewny Leasing — zasady współpracy, prawa i obowiązki stron.',
    robots: 'noindex, follow',
  },
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

function replaceOnce(html, re, replacement, label, slug) {
  if (!re.test(html)) {
    throw new Error(`prerender: nie znaleziono "${label}" w szablonie (trasa ${slug})`);
  }
  return html.replace(re, replacement);
}

function buildPage(r) {
  const canonical = `${DOMAIN}/${r.slug}`;
  const ogTitle = r.ogTitle || r.title;
  const desc = r.description || '';
  let html = template;

  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${esc(r.title)}</title>`, 'title', r.slug);
  html = replaceOnce(html, /(<meta name="description" content=")[\s\S]*?("\s*\/>)/, `$1${esc(desc)}$2`, 'description', r.slug);
  html = replaceOnce(html, /(<link rel="canonical" href=")[^"]*("\s*\/>)/, `$1${canonical}$2`, 'canonical', r.slug);
  html = replaceOnce(html, /(<meta property="og:url" content=")[^"]*("\s*\/>)/, `$1${canonical}$2`, 'og:url', r.slug);
  html = replaceOnce(html, /(<meta property="og:title" content=")[^"]*("\s*\/>)/, `$1${esc(ogTitle)}$2`, 'og:title', r.slug);
  html = replaceOnce(html, /(<meta property="og:description" content=")[\s\S]*?("\s*\/>)/, `$1${esc(desc)}$2`, 'og:description', r.slug);
  html = replaceOnce(html, /(<meta name="twitter:url" content=")[^"]*("\s*\/>)/, `$1${canonical}$2`, 'twitter:url', r.slug);
  html = replaceOnce(html, /(<meta name="twitter:title" content=")[^"]*("\s*\/>)/, `$1${esc(ogTitle)}$2`, 'twitter:title', r.slug);
  html = replaceOnce(html, /(<meta name="twitter:description" content=")[\s\S]*?("\s*\/>)/, `$1${esc(desc)}$2`, 'twitter:description', r.slug);

  if (r.robots) {
    html = replaceOnce(html, /(<meta name="robots" content=")[^"]*("\s*\/>)/, `$1${r.robots}$2`, 'robots', r.slug);
  }
  return html;
}

let ok = 0;
for (const r of routes) {
  const out = join(DIST, `${r.slug}.html`);
  writeFileSync(out, buildPage(r), 'utf8');
  console.log(`prerender ✓ ${r.slug}.html  →  ${DOMAIN}/${r.slug}`);
  ok++;
}
console.log(`prerender: gotowe ${ok}/${routes.length} stron`);
