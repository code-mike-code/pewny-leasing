import { Helmet } from 'react-helmet-async'
import logoDark from '@/assets/logo/logo-inline-dark.webp'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold text-dark uppercase tracking-wide">{title}</h2>
      <div className="space-y-3 text-sm text-grey-mid leading-relaxed">{children}</div>
    </section>
  )
}

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Regulamin – Drago Partner</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="inline-block">
            <img src={logoDark} alt="Drago Partner" className="h-12 w-auto object-contain" />
          </a>
        </header>

        <main>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

            <div className="space-y-2">
              <div className="w-12 h-1 bg-illuminating mb-6" />
              <h1 className="text-4xl font-black text-dark">Regulamin serwisu</h1>
              <p className="text-sm text-grey-mid">Obowiązuje od: 25 marca 2026 r.</p>
            </div>

            <Section title="§1 Postanowienia ogólne">
              <p>
                Niniejszy Regulamin określa zasady korzystania z serwisu internetowego dostępnego pod adresem{' '}
                <strong className="text-dark">dragopartner.pl</strong> (dalej: „Serwis"), prowadzonego przez
                GB+ Spółka z ograniczoną odpowiedzialnością z siedzibą przy ul. Książkowej 9F/405,
                03-134 Warszawa, NIP: 5242881811 (dalej: „Operator").
              </p>
              <p>
                Korzystanie z Serwisu jest dobrowolne i oznacza akceptację niniejszego Regulaminu w całości.
                Jeśli nie zgadzasz się z jego treścią, prosimy o opuszczenie Serwisu.
              </p>
              <p>
                Operator zastrzega sobie prawo do zmiany Regulaminu. Aktualna wersja jest zawsze dostępna
                pod adresem <strong className="text-dark">dragopartner.pl/terms-of-service</strong>.
              </p>
            </Section>

            <Section title="§2 Definicje">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-dark">Operator</strong> – GB+ Spółka z ograniczoną odpowiedzialnością,
                  ul. Książkowa 9F/405, 03-134 Warszawa, NIP: 5242881811, e-mail: biuro@dragopartner.pl.
                </li>
                <li>
                  <strong className="text-dark">Serwis</strong> – strona internetowa dragopartner.pl wraz
                  ze wszystkimi podstronami i funkcjonalnościami.
                </li>
                <li>
                  <strong className="text-dark">Użytkownik</strong> – każda osoba fizyczna, która korzysta
                  z Serwisu lub wypełnia Formularz zgłoszeniowy.
                </li>
                <li>
                  <strong className="text-dark">Formularz</strong> – elektroniczny formularz rekrutacyjny
                  dostępny w Serwisie, służący do zgłoszenia chęci podjęcia współpracy z Operatorem.
                </li>
                <li>
                  <strong className="text-dark">Platformy</strong> – zewnętrzne aplikacje do zamawiania
                  przejazdów i dostaw, tj. Uber, Bolt, FreeNow, Uber Eats, Bolt Food.
                </li>
              </ul>
            </Section>

            <Section title="§3 Charakter serwisu">
              <p>
                Serwis pełni funkcję informacyjno-rekrutacyjną. Prezentowane treści dotyczące wynagrodzeń,
                warunków współpracy oraz oferty mają charakter wyłącznie informacyjny i nie stanowią oferty
                handlowej w rozumieniu art. 66 §1 Kodeksu cywilnego. Są zaproszeniem do zawarcia umowy
                zgodnie z art. 71 k.c.
              </p>
              <p>
                Podane orientacyjne zarobki (np. „od 9 000 zł" dla kierowcy taxi, „od 6 000 zł" dla kuriera)
                są wartościami przykładowymi i zależą od indywidualnych czynników, takich jak liczba
                przepracowanych godzin, platforma współpracy, lokalizacja czy sezonowość. Operator nie
                gwarantuje osiągnięcia określonego poziomu zarobków.
              </p>
            </Section>

            <Section title="§4 Formularz zgłoszeniowy">
              <p>
                Wypełnienie Formularza jest dobrowolne i stanowi wyraz zainteresowania podjęciem
                współpracy z Operatorem jako kierowca lub kurier. Przesłanie Formularza nie jest równoznaczne
                z zawarciem umowy o współpracę.
              </p>
              <p>
                Użytkownik wypełniając Formularz zobowiązuje się podać prawdziwe i aktualne dane. Operator
                skontaktuje się z Użytkownikiem w ciągu 24 godzin roboczych od przesłania zgłoszenia.
              </p>
              <p>
                Przesłanie Formularza jest jednocześnie wyrażeniem zgody na przetwarzanie danych osobowych
                podanych w Formularzu w celach rekrutacyjnych, zgodnie z Polityką Prywatności Operatora.
              </p>
              <p>
                Operator zastrzega sobie prawo do odmowy nawiązania współpracy bez podania przyczyny.
              </p>
            </Section>

            <Section title="§5 Rezerwacja wizyty">
              <p>
                Serwis umożliwia rezerwację wizyty w biurze Operatora za pośrednictwem systemu
                CRM Operatora. Rezerwacja wizyty powinna być poprzedzona wypełnieniem Formularza
                zgłoszeniowego i posiadaniem kompletu wymaganych dokumentów.
              </p>
              <p>
                Niestawienie się na zarezerwowaną wizytę bez wcześniejszego odwołania może skutkować
                odmową przyjęcia kolejnej rezerwacji.
              </p>
            </Section>

            <Section title="§6 Zasady korzystania z serwisu">
              <p>Użytkownik zobowiązuje się do:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>korzystania z Serwisu zgodnie z jego przeznaczeniem oraz obowiązującym prawem,</li>
                <li>niepodejmowania działań, które mogłyby zakłócić funkcjonowanie Serwisu,</li>
                <li>
                  nieprzekazywania treści o charakterze bezprawnym, obraźliwym lub naruszającym
                  prawa osób trzecich,
                </li>
                <li>nieprofilowania, scraping'u ani automatycznego pozyskiwania danych z Serwisu.</li>
              </ul>
            </Section>

            <Section title="§7 Własność intelektualna">
              <p>
                Wszelkie elementy Serwisu – w tym logo, grafiki, teksty, układ oraz kod źródłowy – są
                własnością Operatora lub podmiotów, które udzieliły Operatorowi odpowiedniej licencji.
                Kopiowanie, modyfikowanie lub rozpowszechnianie jakichkolwiek elementów Serwisu bez
                pisemnej zgody Operatora jest zabronione.
              </p>
            </Section>

            <Section title="§8 Ograniczenie odpowiedzialności">
              <p>
                Operator dokłada wszelkich starań, aby informacje zamieszczone w Serwisie były aktualne
                i rzetelne, jednak nie ponosi odpowiedzialności za ewentualne błędy, nieaktualność treści
                ani szkody wynikające z korzystania z Serwisu.
              </p>
              <p>
                Operator nie ponosi odpowiedzialności za działania i politykę zewnętrznych platform
                (Uber, Bolt, FreeNow i in.), w szczególności za zmiany warunków współpracy, prowizji,
                wymogów technicznych czy statusu konta kierowcy/kuriera na tych platformach.
              </p>
              <p>
                Serwis może zawierać linki do zewnętrznych stron internetowych. Operator nie ponosi
                odpowiedzialności za treść, bezpieczeństwo ani politykę prywatności tych serwisów.
              </p>
            </Section>

            <Section title="§9 Dostępność serwisu">
              <p>
                Operator zastrzega sobie prawo do czasowego ograniczenia dostępu do Serwisu lub jego
                wybranych funkcji w celach technicznych i konserwacyjnych. Operator nie gwarantuje
                nieprzerwanego działania Serwisu.
              </p>
            </Section>

            <Section title="§10 Prawo właściwe i rozwiązywanie sporów">
              <p>
                Niniejszy Regulamin podlega prawu polskiemu. Wszelkie spory wynikające z korzystania
                z Serwisu będą rozstrzygane przez właściwy sąd powszechny w Polsce.
              </p>
              <p>
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy Kodeksu
                cywilnego oraz innych aktów prawnych obowiązujących w Polsce.
              </p>
            </Section>

            <Section title="§11 Kontakt">
              <p>
                W przypadku pytań dotyczących Regulaminu prosimy o kontakt:
              </p>
              <ul className="list-none space-y-1">
                <li><strong className="text-dark">GB+ Spółka z ograniczoną odpowiedzialnością</strong></li>
                <li>ul. Książkowa 9F/405, 03-134 Warszawa</li>
                <li>NIP: 5242881811</li>
                <li>
                  E-mail:{' '}
                  <a
                    href="mailto:biuro@dragopartner.pl"
                    className="text-dark hover:underline"
                  >
                    biuro@dragopartner.pl
                  </a>
                </li>
                <li>
                  Tel.:{' '}
                  <a href="tel:+48530181372" className="text-dark hover:underline">
                    +48 530 181 372
                  </a>
                </li>
              </ul>
            </Section>

            <p className="text-xs text-grey-mid border-t border-gray-100 pt-8">
              Niniejszy Regulamin obowiązuje od dnia 25 marca 2026 r.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
