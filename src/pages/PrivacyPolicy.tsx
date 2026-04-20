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

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Polityka prywatności i cookies – Pewny Leasing</title>
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
              <h1 className="text-4xl font-black text-dark">Polityka prywatności i cookies</h1>
              <p className="text-sm text-grey-mid">Obowiązuje od: 16 kwietnia 2026 r.</p>
            </div>

            <Section title="§1 Administrator danych osobowych">
              <p>
                Administratorem Twoich danych osobowych jest{' '}
                <strong className="text-dark">Pewny Leasing Spółka z ograniczoną odpowiedzialnością</strong> z siedzibą
                przy ul. Książkowej 9F/405, 03-134 Warszawa (dalej: „Administrator").
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <tbody>
                    <tr className="border-b border-gray-100"><td className="py-1.5 pr-4 font-semibold text-dark w-32">NIP</td><td className="py-1.5">5242973163</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-1.5 pr-4 font-semibold text-dark">REGON</td><td className="py-1.5">525374889</td></tr>
                    <tr className="border-b border-gray-100"><td className="py-1.5 pr-4 font-semibold text-dark">KRS</td><td className="py-1.5">0001037592</td></tr>
                    <tr><td className="py-1.5 pr-4 font-semibold text-dark">Kapitał zakładowy</td><td className="py-1.5">50 000,00 zł</td></tr>
                  </tbody>
                </table>
              </div>
              <p>
                Pewny Leasing Sp. z o.o. jest niezależnym pośrednikiem finansowym i leasingowym działającym
                na polskim rynku B2B. W ramach swojej działalności pośredniczymy pomiędzy
                klientami biznesowymi a instytucjami finansowymi (bankami i firmami leasingowymi)
                w zakresie pozyskania finansowania: leasingu operacyjnego, leasingu finansowego,
                wynajmu długoterminowego (LTR), wynajmu krótkoterminowego, finansowania flot
                oraz leasingu sprzętu specjalistycznego.
              </p>
              <p>Kontakt z Administratorem w sprawach dotyczących danych osobowych:</p>
              <ul className="list-none space-y-1">
                <li>
                  E-mail:{' '}
                  <a href="mailto:kontakt@pewnyleasing24.pl" className="text-dark hover:underline">
                    kontakt@pewnyleasing24.pl
                  </a>
                </li>
                <li>
                  Tel.:{' '}
                  <a href="tel:+48530181372" className="text-dark hover:underline">
                    +48 530 181 372
                  </a>
                </li>
                <li>Adres: ul. Książkowa 9F/405, 03-134 Warszawa</li>
              </ul>
            </Section>

            <Section title="§2 Jakie dane zbieramy i w jakim celu">
              <p>Zbieramy i przetwarzamy dane osobowe w następujących celach:</p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-dark">a) Formularz zapytania leasingowego</p>
                  <p>
                    Gdy wypełniasz formularz kontaktowy lub zapytania ofertowego, zbieramy: imię,
                    adres e-mail, numer telefonu oraz treść wiadomości (temat zapytania,
                    rodzaj finansowania, opis potrzeb). Dane są przetwarzane w celu
                    nawiązania kontaktu i przygotowania spersonalizowanej oferty
                    finansowania (art. 6 ust. 1 lit. b RODO – niezbędność do podjęcia
                    działań na żądanie osoby przed zawarciem umowy; art. 6 ust. 1 lit. a
                    RODO – zgoda wyrażona przy wysyłaniu formularza).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">b) Kalkulator leasingowy</p>
                  <p>
                    Kalkulator leasingowy dostępny w serwisie przetwarza wprowadzone parametry
                    (wartość pojazdu lub sprzętu, okres finansowania, wpłata własna, wartość
                    wykupu) wyłącznie lokalnie w przeglądarce użytkownika w celu obliczenia
                    orientacyjnej raty. Dane te nie są przesyłane do Administratora ani
                    przechowywane na serwerze.
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">c) Umówienie konsultacji</p>
                  <p>
                    Rezerwacja spotkania z doradcą odbywa się za pośrednictwem systemu CRM
                    Administratora. Dane wprowadzone przy rezerwacji (imię, numer telefonu
                    lub adres e-mail, preferowany termin) są przetwarzane wyłącznie przez
                    Administratora w celu potwierdzenia i obsługi spotkania
                    (art. 6 ust. 1 lit. b RODO – niezbędność do wykonania umowy lub
                    podjęcia działań przed jej zawarciem).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">d) Analityka serwisu – Google Analytics 4</p>
                  <p>
                    Używamy Google Analytics 4 do anonimowej analizy ruchu na stronie
                    (np. liczba odwiedzin, czas spędzony na stronie, źródła wejść, przeglądane
                    podstrony). Dane są gromadzone z anonimizacją adresu IP i nie pozwalają
                    na bezpośrednią identyfikację osoby. Przetwarzanie odbywa się wyłącznie
                    na podstawie Twojej zgody udzielonej za pomocą baneru cookies
                    (art. 6 ust. 1 lit. a RODO).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">e) Kontakt bezpośredni (telefon, e-mail, WhatsApp)</p>
                  <p>
                    Gdy kontaktujesz się z nami telefonicznie, e-mailem lub przez WhatsApp,
                    przetwarzamy dane podane w treści wiadomości (imię, numer telefonu, adres
                    e-mail, opis zapytania) w celu udzielenia odpowiedzi i obsługi Twojego
                    zapytania (art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
                    Administratora polegający na obsłudze klientów i potencjalnych klientów).
                  </p>
                </div>
              </div>
            </Section>

            <Section title="§3 Okres przechowywania danych">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Dane z formularza zapytania leasingowego przechowujemy przez okres niezbędny
                  do obsługi zapytania i – w przypadku zawarcia umowy pośrednictwa finansowego
                  – przez czas trwania współpracy oraz przez 3 lata po jej zakończeniu
                  (dla celów dochodzenia ewentualnych roszczeń cywilnych).
                </li>
                <li>
                  Dane z rezerwacji konsultacji przechowujemy do czasu odbycia spotkania,
                  a następnie przez 6 miesięcy, po czym są usuwane.
                </li>
                <li>
                  Dane z kontaktu bezpośredniego (e-mail, WhatsApp, telefon) przechowujemy
                  przez okres niezbędny do obsługi sprawy, nie dłużej niż 2 lata od
                  ostatniego kontaktu.
                </li>
                <li>
                  Dane analityczne (Google Analytics 4) są przechowywane przez 14 miesięcy
                  zgodnie z domyślnymi ustawieniami usługi.
                </li>
              </ul>
            </Section>

            <Section title="§4 Odbiorcy danych">
              <p>
                Twoje dane osobowe możemy przekazywać następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-dark">Instytucje finansowe — banki i firmy leasingowe</strong>{' '}
                  współpracujące z Pewny Leasing (ponad 12 partnerów finansowych) — wyłącznie
                  w zakresie niezbędnym do przygotowania i złożenia wniosku o finansowanie
                  (leasing, wynajem, kredyt), po wyrażeniu przez Ciebie odrębnej zgody na
                  przekazanie danych konkretnemu podmiotowi finansowemu.
                </li>
                <li>
                  <strong className="text-dark">Google LLC</strong> – w zakresie usług Google
                  Analytics 4. Google LLC jest certyfikowanym uczestnikiem programu Data Privacy
                  Framework (UE–USA), co zapewnia odpowiedni poziom ochrony danych przekazywanych
                  do USA. Dane są anonimizowane przed przesłaniem.
                </li>
                <li>
                  <strong className="text-dark">Dostawcy usług IT</strong> – hostingu, poczty
                  elektronicznej i wsparcia technicznego serwisu, którzy przetwarzają dane
                  wyłącznie na podstawie umowy powierzenia przetwarzania danych zawartej
                  z Administratorem.
                </li>
                <li>
                  <strong className="text-dark">System CRM Administratora</strong> – wewnętrzny
                  system zarządzania relacjami z klientami, w którym przechowywane są dane
                  kontaktowe i historia korespondencji.
                </li>
              </ul>
              <p>
                Administrator nie sprzedaje danych osobowych ani nie udostępnia ich podmiotom
                trzecim w celach marketingowych bez wyraźnej zgody osoby, której dane dotyczą.
              </p>
            </Section>

            <Section title="§5 Twoje prawa (RODO)">
              <p>
                Na podstawie Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679
                (RODO) przysługują Ci następujące prawa:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-dark">Prawo dostępu</strong> – możesz zażądać
                  informacji o tym, jakie Twoje dane przetwarzamy, w jakim celu i komu
                  je przekazujemy.
                </li>
                <li>
                  <strong className="text-dark">Prawo do sprostowania</strong> – możesz żądać
                  poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.
                </li>
                <li>
                  <strong className="text-dark">Prawo do usunięcia</strong> („prawo do bycia
                  zapomnianym") – możesz żądać usunięcia danych, gdy nie są już niezbędne
                  do celów, w których były zbierane, lub gdy cofnąłeś/-aś zgodę.
                </li>
                <li>
                  <strong className="text-dark">Prawo do ograniczenia przetwarzania</strong> –
                  możesz żądać wstrzymania przetwarzania danych w określonych przypadkach
                  (np. gdy kwestionujesz prawidłowość danych).
                </li>
                <li>
                  <strong className="text-dark">Prawo do przenoszenia danych</strong> – możesz
                  otrzymać dane dostarczone na podstawie zgody lub umowy w ustrukturyzowanym
                  formacie nadającym się do odczytu maszynowego.
                </li>
                <li>
                  <strong className="text-dark">Prawo do sprzeciwu</strong> – możesz sprzeciwić
                  się przetwarzaniu danych opartemu na prawnie uzasadnionym interesie
                  Administratora, w tym profilowaniu w celach marketingowych.
                </li>
                <li>
                  <strong className="text-dark">Prawo do cofnięcia zgody</strong> – jeśli
                  przetwarzanie odbywa się na podstawie zgody (np. cookies analityczne),
                  możesz ją cofnąć w dowolnym momencie bez wpływu na zgodność z prawem
                  przetwarzania dokonanego przed jej cofnięciem.
                </li>
                <li>
                  <strong className="text-dark">Prawo do skargi</strong> – przysługuje Ci prawo
                  wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO),
                  ul. Stawki 2, 00-193 Warszawa,{' '}
                  <a
                    href="https://uodo.gov.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-dark hover:underline"
                  >
                    uodo.gov.pl
                  </a>.
                </li>
              </ul>
              <p>
                Aby skorzystać z powyższych praw, skontaktuj się z nami pod adresem:{' '}
                <a href="mailto:kontakt@pewnyleasing24.pl" className="text-dark hover:underline">
                  kontakt@pewnyleasing24.pl
                </a>.
                Odpowiemy w ciągu 30 dni od otrzymania żądania.
              </p>
            </Section>

            <Section title="§6 Pliki cookies">
              <p>
                Serwis korzysta z plików cookies (ciasteczek) — małych plików tekstowych
                zapisywanych na Twoim urządzeniu. Cookies nie służą do bezpośredniej
                identyfikacji użytkownika.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-dark">Cookies niezbędne (techniczne)</p>
                  <p>
                    Wymagane do prawidłowego działania serwisu — przechowują m.in. Twoje
                    preferencje dotyczące zgody na cookies. Nie wymagają Twojej zgody
                    i są zawsze aktywne.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Nazwa</th>
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Cel</th>
                          <th className="text-left py-2 font-semibold text-dark">Ważność</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono">cookie_consent</td>
                          <td className="py-2 pr-4">Zapis decyzji w sprawie cookies</td>
                          <td className="py-2">12 miesięcy</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <p className="font-semibold text-dark">Cookies analityczne (opcjonalne)</p>
                  <p>
                    Pomagają nam analizować ruch w serwisie i poprawiać jego funkcjonowanie.
                    Dane są anonimizowane. Aktywowane wyłącznie po wyrażeniu przez Ciebie zgody.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Nazwa</th>
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Dostawca</th>
                          <th className="text-left py-2 font-semibold text-dark">Ważność</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono">_ga</td>
                          <td className="py-2 pr-4">Google Analytics 4</td>
                          <td className="py-2">2 lata</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono">_ga_*</td>
                          <td className="py-2 pr-4">Google Analytics 4</td>
                          <td className="py-2">2 lata</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <p>
                Możesz w dowolnym momencie zmienić swoje preferencje dotyczące cookies,
                konfigurując ustawienia swojej przeglądarki. Wyłączenie cookies analitycznych
                nie wpłynie na możliwość korzystania z serwisu ani z kalkulatora leasingowego.
              </p>
              <p>Zarządzanie cookies w popularnych przeglądarkach:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Chrome: Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie</li>
                <li>Firefox: Opcje → Prywatność i bezpieczeństwo → Cookies</li>
                <li>Safari: Preferencje → Prywatność</li>
                <li>Edge: Ustawienia → Prywatność, wyszukiwanie i usługi</li>
              </ul>
            </Section>

            <Section title="§7 Google Analytics 4">
              <p>
                Serwis korzysta z usługi Google Analytics 4 dostarczanej przez Google LLC,
                1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.
              </p>
              <p>
                Google Analytics 4 używa plików cookies do analizy sposobu korzystania
                z serwisu. Dane generowane przez cookies (w tym zanonimizowany adres IP)
                są przekazywane na serwery Google. Anonimizacja IP jest włączona — pełny
                adres IP nie jest rejestrowany ani przechowywany.
              </p>
              <p>
                Google Analytics 4 jest skonfigurowany z wyłączeniem funkcji sygnałów
                Google (Google Signals) i nie służy do śledzenia użytkowników pomiędzy
                urządzeniami ani do personalizacji reklam.
              </p>
              <p>
                Możesz zapobiec zbieraniu danych przez Google Analytics, instalując wtyczkę
                do przeglądarki:{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:underline"
                >
                  tools.google.com/dlpage/gaoptout
                </a>
                .
              </p>
              <p>
                Polityka prywatności Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:underline"
                >
                  policies.google.com/privacy
                </a>
                .
              </p>
            </Section>

            <Section title="§8 Bezpieczeństwo danych">
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony
                danych osobowych przed nieuprawnionym dostępem, utratą, zniszczeniem
                lub ujawnieniem. Serwis jest szyfrowany za pomocą protokołu SSL/TLS.
              </p>
              <p>
                Dostęp do danych osobowych mają wyłącznie upoważnione osoby po stronie
                Administratora oraz podmioty przetwarzające działające na podstawie
                pisemnej umowy powierzenia przetwarzania danych.
              </p>
              <p>
                W przypadku przekazywania danych instytucjom finansowym (bankom, firmom
                leasingowym) w celu przygotowania oferty, odbywa się to wyłącznie
                kanałami zabezpieczonymi, na podstawie odrębnej zgody klienta i zgodnie
                z przepisami prawa bankowego i finansowego.
              </p>
            </Section>

            <Section title="§9 Zmiany polityki prywatności">
              <p>
                Administrator zastrzega sobie prawo do aktualizacji niniejszej Polityki
                Prywatności, w szczególności w przypadku zmian w przepisach prawa,
                wprowadzenia nowych usług lub narzędzi analitycznych. Aktualna wersja
                jest zawsze dostępna pod adresem{' '}
                <strong className="text-dark">pewnyleasing24.pl/privacy-policy</strong>.
                O istotnych zmianach poinformujemy za pośrednictwem baneru informacyjnego
                na stronie.
              </p>
            </Section>

            <Section title="§10 Kontakt">
              <p>
                W sprawach dotyczących ochrony danych osobowych, plików cookies lub
                realizacji praw przysługujących na podstawie RODO, prosimy o kontakt:
              </p>
              <ul className="list-none space-y-1">
                <li><strong className="text-dark">Pewny Leasing Sp. z o.o.</strong></li>
                <li>ul. Książkowa 9F/405, 03-134 Warszawa</li>
                <li>
                  E-mail:{' '}
                  <a href="mailto:kontakt@pewnyleasing24.pl" className="text-dark hover:underline">
                    kontakt@pewnyleasing24.pl
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
              Niniejsza Polityka Prywatności i Cookies obowiązuje od dnia 16 kwietnia 2026 r.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
