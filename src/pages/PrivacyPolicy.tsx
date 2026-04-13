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
              <p className="text-sm text-grey-mid">Obowiązuje od: 25 marca 2026 r.</p>
            </div>

            <Section title="§1 Administrator danych osobowych">
              <p>
                Administratorem Twoich danych osobowych jest{' '}
                <strong className="text-dark">Pewny Leasing</strong> z siedzibą
                przy ul. Modlińskiej 310/312 lok. 2, 03-152 Warszawa (dalej: „Administrator").
              </p>
              <p>Kontakt z Administratorem w sprawach dotyczących danych osobowych:</p>
              <ul className="list-none space-y-1">
                <li>
                  E-mail:{' '}
                  <a href="mailto:kontakt@pewnyleasing.pl" className="text-dark hover:underline">
                    kontakt@pewnyleasing.pl
                  </a>
                </li>
                <li>
                  Tel.:{' '}
                  <a href="tel:+48530181372" className="text-dark hover:underline">
                    +48 530 181 372
                  </a>
                </li>
                <li>Adres: ul. Modlińska 310/312 lok. 2, 03-152 Warszawa</li>
              </ul>
            </Section>

            <Section title="§2 Jakie dane zbieramy i w jakim celu">
              <p>Zbieramy i przetwarzamy dane osobowe w następujących celach:</p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-dark">a) Rekrutacja – Formularz zgłoszeniowy</p>
                  <p>
                    Gdy wypełniasz Formularz zgłoszeniowy, zbieramy: imię i nazwisko, adres e-mail,
                    numer telefonu, miasto oraz informację o posiadaniu lub braku własnego pojazdu.
                  </p>
                  <p>
                    Dane są przetwarzane w celu nawiązania kontaktu i przeprowadzenia procesu
                    rekrutacyjnego (art. 6 ust. 1 lit. a RODO – zgoda; art. 6 ust. 1 lit. b RODO –
                    niezbędność do zawarcia umowy).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">b) Rezerwacja wizyty w biurze</p>
                  <p>
                    Rezerwacja spotkania odbywa się za pośrednictwem wewnętrznego systemu CRM
                    Administratora. Dane wprowadzone przy rezerwacji (imię, numer telefonu lub
                    e-mail) są przetwarzane wyłącznie przez Administratora w celu potwierdzenia
                    i obsługi wizyty (art. 6 ust. 1 lit. b RODO – niezbędność do zawarcia umowy).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">c) Analityka serwisu</p>
                  <p>
                    Używamy Google Analytics 4 do anonimowej analizy ruchu na stronie
                    (np. liczba odwiedzin, czas spędzony na stronie, źródła wejść). Dane są
                    gromadzone z anonimizacją adresu IP i nie pozwalają na bezpośrednią
                    identyfikację osoby. Przetwarzanie odbywa się na podstawie Twojej zgody
                    udzielonej za pomocą baneru cookies (art. 6 ust. 1 lit. a RODO).
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-dark">d) Kontakt bezpośredni</p>
                  <p>
                    Gdy kontaktujesz się z nami telefonicznie lub e-mailem, przetwarzamy dane
                    podane w treści wiadomości w celu udzielenia odpowiedzi (art. 6 ust. 1 lit. f
                    RODO – prawnie uzasadniony interes Administratora).
                  </p>
                </div>
              </div>
            </Section>

            <Section title="§3 Okres przechowywania danych">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Dane z Formularza rekrutacyjnego przechowujemy przez okres trwania procesu
                  rekrutacyjnego i – w przypadku nawiązania współpracy – przez czas jej trwania
                  oraz przez 3 lata po jej zakończeniu (dla celów ewentualnych roszczeń).
                </li>
                <li>
                  Dane kandydatów, z którymi nie nawiązano współpracy, usuwamy po 6 miesiącach
                  od zakończenia procesu rekrutacyjnego, chyba że wyraziłeś/-aś zgodę na dłuższe
                  przechowywanie.
                </li>
                <li>
                  Dane analityczne (Google Analytics) są przechowywane przez 14 miesięcy zgodnie
                  z ustawieniami domyślnymi usługi.
                </li>
                <li>
                  Dane z kontaktu bezpośredniego są przechowywane przez okres niezbędny do
                  obsługi sprawy, nie dłużej jednak niż 2 lata.
                </li>
              </ul>
            </Section>

            <Section title="§4 Odbiorcy danych">
              <p>
                Twoje dane osobowe możemy przekazywać następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-dark">Google LLC</strong> – w zakresie usług Google
                  Analytics 4. Google LLC jest certyfikowanym uczestnikiem programu Data Privacy
                  Framework (UE–USA), co zapewnia odpowiedni poziom ochrony danych przekazywanych
                  do USA.
                </li>
                <li>
                  <strong className="text-dark">Dostawcy usług IT</strong> – hostingu i wsparcia
                  technicznego, którzy przetwarzają dane wyłącznie na podstawie umowy powierzenia
                  z Administratorem.
                </li>
                <li>
                  <strong className="text-dark">Partnerzy finansowi</strong> (banki i firmy leasingowe)
                  – wyłącznie w zakresie niezbędnym do przygotowania oferty leasingowej,
                  po wyrażeniu odrębnej zgody.
                </li>
              </ul>
              <p>
                Nie sprzedajemy Twoich danych osobowych osobom trzecim ani nie udostępniamy ich
                w celach marketingowych podmiotom zewnętrznym.
              </p>
            </Section>

            <Section title="§5 Twoje prawa (RODO)">
              <p>
                Na podstawie Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 (RODO)
                przysługują Ci następujące prawa:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong className="text-dark">Prawo dostępu</strong> – możesz zażądać
                  informacji o tym, jakie dane przechowujemy.
                </li>
                <li>
                  <strong className="text-dark">Prawo do sprostowania</strong> – możesz żądać
                  poprawienia nieprawidłowych lub uzupełnienia niekompletnych danych.
                </li>
                <li>
                  <strong className="text-dark">Prawo do usunięcia</strong> („prawo do bycia
                  zapomnianym") – możesz żądać usunięcia danych, gdy nie są już niezbędne do
                  celów, w których były zbierane.
                </li>
                <li>
                  <strong className="text-dark">Prawo do ograniczenia przetwarzania</strong> –
                  możesz żądać wstrzymania przetwarzania danych w określonych przypadkach.
                </li>
                <li>
                  <strong className="text-dark">Prawo do przenoszenia danych</strong> – możesz
                  otrzymać swoje dane w formacie nadającym się do odczytu maszynowego.
                </li>
                <li>
                  <strong className="text-dark">Prawo do sprzeciwu</strong> – możesz sprzeciwić
                  się przetwarzaniu danych opartemu na prawnie uzasadnionym interesie Administratora.
                </li>
                <li>
                  <strong className="text-dark">Prawo do cofnięcia zgody</strong> – jeśli
                  przetwarzanie odbywa się na podstawie zgody, możesz ją cofnąć w dowolnym
                  momencie bez wpływu na zgodność z prawem przetwarzania przed jej cofnięciem.
                </li>
                <li>
                  <strong className="text-dark">Prawo do skargi</strong> – przysługuje Ci prawo
                  wniesienia skargi do organu nadzorczego – Prezesa Urzędu Ochrony Danych
                  Osobowych (PUODO), ul. Stawki 2, 00-193 Warszawa,{' '}
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
                <a href="mailto:kontakt@pewnyleasing.pl" className="text-dark hover:underline">
                  kontakt@pewnyleasing.pl
                </a>.
                Odpowiemy w ciągu 30 dni.
              </p>
            </Section>

            <Section title="§6 Pliki cookies">
              <p>
                Serwis korzysta z plików cookies (ciasteczek) – małych plików tekstowych
                przechowywanych na Twoim urządzeniu. Cookies nie służą do identyfikacji
                użytkownika i nie zbierają danych osobowych bez Twojej wiedzy.
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-dark">Cookies niezbędne (techniczne)</p>
                  <p>
                    Niezbędne do prawidłowego działania serwisu. Przechowują preferencje dotyczące
                    zgody na cookies. Nie wymagają Twojej zgody – są aktywne zawsze.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Nazwa</th>
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Cel</th>
                          <th className="text-left py-2 font-semibold text-dark">Okres ważności</th>
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
                    Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z serwisu.
                    Dane są anonimizowane. Aktywowane wyłącznie po wyrażeniu przez Ciebie zgody.
                  </p>
                  <div className="mt-2 overflow-x-auto">
                    <table className="w-full text-xs border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Nazwa</th>
                          <th className="text-left py-2 pr-4 font-semibold text-dark">Dostawca</th>
                          <th className="text-left py-2 font-semibold text-dark">Okres ważności</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono">_ga</td>
                          <td className="py-2 pr-4">Google Analytics</td>
                          <td className="py-2">2 lata</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 pr-4 font-mono">_ga_*</td>
                          <td className="py-2 pr-4">Google Analytics</td>
                          <td className="py-2">2 lata</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <p>
                Zarządzanie cookies: możesz w dowolnym momencie zmienić swoje preferencje, klikając
                „Zmień preferencje cookies" (jeśli dostępne) lub konfigurując ustawienia swojej
                przeglądarki. Wyłączenie cookies analitycznych nie wpłynie na korzystanie z serwisu.
              </p>
              <p>
                Instrukcje zarządzania cookies w popularnych przeglądarkach:
              </p>
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
                Google Analytics używa plików cookies do analizy sposobu korzystania z serwisu.
                Dane generowane przez cookies (w tym zanonimizowany adres IP) są przekazywane
                do serwera Google i tam przechowywane. Anonimizacja IP jest włączona – Twój pełny
                adres IP nie jest rejestrowany.
              </p>
              <p>
                Możesz zapobiec zbieraniu i przetwarzaniu danych przez Google Analytics, instalując
                wtyczkę do przeglądarki dostępną pod adresem:{' '}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:underline"
                >
                  tools.google.com/dlpage/gaoptout
                </a>.
              </p>
              <p>
                Więcej informacji o zasadach prywatności Google:{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark hover:underline"
                >
                  policies.google.com/privacy
                </a>.
              </p>
            </Section>

            <Section title="§8 Bezpieczeństwo danych">
              <p>
                Stosujemy odpowiednie środki techniczne i organizacyjne, aby chronić Twoje dane
                osobowe przed nieuprawnionym dostępem, utratą lub zniszczeniem. Serwis jest
                szyfrowany za pomocą protokołu SSL/TLS.
              </p>
              <p>
                Dostęp do danych osobowych mają wyłącznie upoważnieni pracownicy Administratora
                oraz podmioty przetwarzające działające na podstawie umowy powierzenia danych.
              </p>
            </Section>

            <Section title="§9 Zmiany polityki prywatności">
              <p>
                Administrator zastrzega sobie prawo do zmiany niniejszej Polityki Prywatności.
                Aktualna wersja jest zawsze dostępna pod adresem{' '}
                <strong className="text-dark">pewnyleasing.pl/privacy-policy</strong>. O istotnych
                zmianach poinformujemy za pośrednictwem baneru informacyjnego na stronie.
              </p>
            </Section>

            <Section title="§10 Kontakt">
              <p>
                W sprawach dotyczących ochrony danych osobowych lub cookies prosimy o kontakt:
              </p>
              <ul className="list-none space-y-1">
                <li><strong className="text-dark">Pewny Leasing</strong></li>
                <li>ul. Modlińska 310/312 lok. 2, 03-152 Warszawa</li>
                <li>
                  E-mail:{' '}
                  <a href="mailto:kontakt@pewnyleasing.pl" className="text-dark hover:underline">
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
              Niniejsza Polityka Prywatności i Cookies obowiązuje od dnia 25 marca 2026 r.
            </p>
          </div>
        </main>
      </div>
    </>
  )
}
