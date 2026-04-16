import { Helmet } from 'react-helmet-async'
import logoDark from '@/assets/logo/logo-dark-removebg.webp'

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
        <title>Regulamin – Pewny Leasing</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-4">
          <a href="/" className="inline-block">
            <img src={logoDark} alt="Pewny Leasing" className="h-12 w-auto object-contain" />
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
                <strong className="text-dark">pewnyleasing24.pl</strong> (dalej: „Serwis"), prowadzonego przez{' '}
                <strong className="text-dark">[PEŁNA NAZWA FIRMY]</strong> z siedzibą przy ul.{' '}
                <strong className="text-dark">[ADRES]</strong>, NIP:{' '}
                <strong className="text-dark">[NIP]</strong>, KRS:{' '}
                <strong className="text-dark">[KRS]</strong> (dalej: „Operator").
              </p>
              <p>
                Korzystanie z Serwisu jest dobrowolne i oznacza akceptację niniejszego Regulaminu w całości.
                Jeśli nie zgadzasz się z jego treścią, prosimy o opuszczenie Serwisu.
              </p>
              <p>
                Operator zastrzega sobie prawo do zmiany Regulaminu. Aktualna wersja jest zawsze dostępna
                pod adresem <strong className="text-dark">pewnyleasing24.pl/terms-of-service</strong>.
              </p>
            </Section>

            <Section title="§2 Definicje">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-dark">Operator</strong> – Pewny Leasing,
                  ul. Modlińska 310/312 lok. 2, 03-152 Warszawa, e-mail: kontakt@pewnyleasing.pl.
                </li>
                <li>
                  <strong className="text-dark">Serwis</strong> – strona internetowa pewnyleasing.pl wraz
                  ze wszystkimi podstronami i funkcjonalnościami.
                </li>
                <li>
                  <strong className="text-dark">Użytkownik</strong> – każda osoba fizyczna, która korzysta
                  z Serwisu lub wypełnia Formularz zgłoszeniowy.
                </li>
                <li>
                  <strong className="text-dark">Formularz</strong> – elektroniczny formularz zapytania
                  dostępny w Serwisie, służący do złożenia zapytania leasingowego lub kontaktowego.
                </li>
                <li>
                  <strong className="text-dark">Partnerzy finansowi</strong> – banki i firmy leasingowe
                  współpracujące z Operatorem przy przygotowaniu ofert finansowania.
                </li>
              </ul>
            </Section>

            <Section title="§3 Charakter serwisu">
              <p>
                Serwis pełni funkcję informacyjno-handlową. Prezentowane treści dotyczące warunków
                finansowania oraz oferty leasingowej mają charakter wyłącznie informacyjny i nie stanowią oferty
                handlowej w rozumieniu art. 66 §1 Kodeksu cywilnego. Są zaproszeniem do zawarcia umowy
                zgodnie z art. 71 k.c.
              </p>
              <p>
                Podane orientacyjne wartości rat leasingowych są wyliczeniami szacunkowymi i zależą
                od indywidualnych parametrów oferty, zdolności kredytowej i aktualnych warunków rynkowych.
                Operator nie gwarantuje udzielenia finansowania.
              </p>
            </Section>

            <Section title="§4 Formularz zapytania">
              <p>
                Wypełnienie Formularza jest dobrowolne i stanowi wyraz zainteresowania usługami leasingowymi
                Operatora. Przesłanie Formularza nie jest równoznaczne z zawarciem umowy leasingowej.
              </p>
              <p>
                Użytkownik wypełniając Formularz zobowiązuje się podać prawdziwe i aktualne dane. Operator
                skontaktuje się z Użytkownikiem w ciągu 24 godzin roboczych od przesłania zapytania.
              </p>
              <p>
                Przesłanie Formularza jest jednocześnie wyrażeniem zgody na przetwarzanie danych osobowych
                podanych w Formularzu w celach obsługi zapytania, zgodnie z Polityką Prywatności Operatora.
              </p>
            </Section>

            <Section title="§5 Rezerwacja spotkania">
              <p>
                Serwis umożliwia rezerwację spotkania (online lub osobistego) z doradcą Operatora
                za pośrednictwem systemu CRM Operatora.
              </p>
              <p>
                Niestawienie się na zarezerwowane spotkanie bez wcześniejszego odwołania może skutkować
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
                Operator nie ponosi odpowiedzialności za decyzje kredytowe banków i firm leasingowych,
                w szczególności za odmowę udzielenia finansowania lub zmiany warunków oferty przez
                te podmioty.
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
                <li><strong className="text-dark">Pewny Leasing</strong></li>
                <li>ul. Modlińska 310/312 lok. 2, 03-152 Warszawa</li>
                <li>
                  E-mail:{' '}
                  <a
                    href="mailto:kontakt@pewnyleasing.pl"
                    className="text-dark hover:underline"
                  >
                    kontakt@pewnyleasing.pl
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
