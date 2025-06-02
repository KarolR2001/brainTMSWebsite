import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Polityka Prywatności - BrainTMS',
  description: 'Zasady przetwarzania danych osobowych i polityka prywatności systemu BrainTMS dla firm transportowych i spedycyjnych.',
  keywords: 'polityka prywatności, RODO, ochrona danych, prywatność, BrainTMS, dane osobowe, cookies',
  alternates: {
    canonical: 'https://braintms.eu/polityka-prywatnosci',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'article',
    url: 'https://braintms.eu/polityka-prywatnosci',
    title: 'Polityka Prywatności - BrainTMS',
    description: 'Zasady przetwarzania danych osobowych i polityka prywatności systemu BrainTMS dla firm transportowych i spedycyjnych.',
    images: [
      {
        url: '/images/braintms-privacy-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Polityka Prywatności BrainTMS',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Polityka Prywatności - BrainTMS',
    description: 'Zasady przetwarzania danych osobowych i polityka prywatności systemu BrainTMS dla firm transportowych i spedycyjnych.',
    images: ['/images/braintms-privacy-twitter.jpg'],
  },
};

// Dane JSON-LD dla strony polityki prywatności
const privacyPolicyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["article", ".privacy-content"]
  },
  "name": "Polityka Prywatności BrainTMS",
  "description": "Zasady przetwarzania danych osobowych i polityka prywatności systemu BrainTMS dla firm transportowych i spedycyjnych.",
  "datePublished": "2023-01-01T00:00:00+01:00",
  "dateModified": "2023-01-01T00:00:00+01:00",
  "inLanguage": "pl-PL",
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "cssSelector": ".privacy-content"
  },
  "specialty": "Privacy Policy",
  "about": {
    "@type": "Thing",
    "name": "Ochrona danych osobowych",
    "description": "Polityka dotycząca przetwarzania danych osobowych użytkowników systemu BrainTMS zgodna z RODO"
  },
  "isPartOf": {
    "@type": "WebSite",
    "name": "BrainTMS",
    "url": "https://braintms.eu"
  },
  "publisher": {
    "@type": "Organization",
    "name": "BrainTMS Sp. z o.o.",
    "url": "https://braintms.eu"
  }
};

export default function PolitykaPrywatnosci() {
  const breadcrumbItems = [
    { label: 'Strona główna', href: '/' },
    { label: 'Polityka Prywatności', href: '/polityka-prywatnosci', isCurrent: true },
  ];

  return (
    <main>
      <JsonLd data={privacyPolicyJsonLd} />
      <Navigation forceBackground={true} />
      
      <div className="container pt-20 md:pt-24">
        <Breadcrumbs items={breadcrumbItems} className="mb-4" />
        <div className="row bg-gray-100 bg-opacity-10 my-5 p-5 rounded-lg privacy-content">
            <div className="col-12 mb-3">
                <h1 className="font-bold text-3xl md:text-4xl mb-6 text-center">POLITYKA PRYWATNOŚCI</h1>
                <p className="mb-4">
                    W BrainTMS wiemy, jak ważna jest prywatność Twoich danych. Poniżej przedstawiamy zasady przetwarzania danych osobowych oraz wykorzystywania plików cookies w związku z korzystaniem ze strony internetowej www.braintms.eu oraz jej subdomen (łącznie nazywanych dalej "Stroną www").
                </p>
                
                <p className="mb-4">
                    Korzystając ze Strony www, wyrażasz zgodę na przetwarzanie Twoich danych osobowych na zasadach opisanych w niniejszej Polityce Prywatności. Jeśli nie zgadzasz się z którymkolwiek z postanowień niniejszej Polityki, proszę nie korzystaj ze Strony www.
                </p>
            </div>

            <div className="col-12 mb-3">
                <h2 className="font-bold text-2xl mb-4">ZASADY PRYWATNOŚCI brainTMS</h2>
                <p className="mb-4">W branży TLS, bezpieczeństwo danych stanowi kluczową wartość, dlatego aktywnie dbamy o to, aby prywatność naszych klientów i użytkowników strony internetowej była traktowana z pełnym szacunkiem i chroniona zgodnie z obowiązującymi standardami. Poniżej przedstawiamy zasady, którymi się kierujemy.</p>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Ponieważ nasi klienci pokładają w nas pełne zaufanie, zawsze przetwarzamy ich dane w sposób uczciwy i transparentny.</li>
                    <li>Każda osoba, która przekazała nam swoje dane osobowe, ma prawo uzyskać pełne informacje dotyczące sposobu ich wykorzystania. Z przyjemnością udzielamy informacji na temat gromadzonych danych, ich celu, odbiorców oraz udostępniamy dane kontaktowe do osób, z którymi można się skontaktować w przypadku dodatkowych pytań.</li>
                    <li>W przypadku pytań dotyczących wykorzystania przez nas danych osobowych, prosimy o niezwłoczny kontakt mailowy pod adresem: kontakt@braintms.com.</li>
                    <li>Podjęliśmy wszelkie uzasadnione środki, aby zabezpieczyć dane osobowe przed nieuprawnionym dostępem i niewłaściwym wykorzystaniem.</li>
                    <li>Stosujemy się do wszystkich obowiązujących przepisów prawa oraz standardów dotyczących ochrony danych osobowych, deklarując jednocześnie naszą gotowość do współpracy z organami ds. ochrony danych osobowych.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">Dzięki informacjom przekazywanym przez Ciebie, możemy być dla Ciebie pomocni.</h2>
                <p className="mb-4">
                    Podczas korzystania z naszej Strony www, nasze serwery automatycznie zbierają informacje wysyłane przez Twoją przeglądarkę oraz zawarte w logach systemowych. Te dane mogą obejmować adresy e-mail, adresy IP, typ przeglądarki, stronę internetową odwiedzaną bezpośrednio przed wejściem na Stronę www lub do Programu, a także inne istotne informacje. <br/><br/>
                    Administrator wykorzystuje te dane wyłącznie w celu dostosowywania wyświetlanych treści, zapewnienia najwyższej jakości świadczonych usług oraz w celach statystycznych, technicznych, reklamowych i funkcjonalnych. Dzięki temu mamy możliwość spersonalizowania Strony www zgodnie z Twoimi potrzebami.<br/><br/>
                    Jednocześnie nieustannie doskonalimy Stronę www i Program, co może skutkować automatycznym gromadzeniem różnych informacji o osobach przeglądających, w tym o Tobie. W tym kontekście możemy również korzystać z plików cookie (ciasteczek).<br/><br/>
                    Warto zauważyć, że Strona www nie zawsze automatycznie gromadzi informacje o Tobie, jednakże w przypadku takiego zbierania zawsze informujemy Cię o tym fakcie.
                </p>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">Chcemy lepiej zrozumieć Twoje potrzeby.</h2>
                <p className="mb-4">
                    Aby nasza współpraca przebiegała sprawnie, konieczne jest nawzajem się poznanie. My już udostępniliśmy Ci wszelkie informacje o nas, ale jeśli chciałbyś dowiedzieć się więcej, skontaktuj się z nami, korzystając z danych kontaktowych dostępnych na końcu naszej Polityki Prywatności.
                </p>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">Pragniemy bliżej poznać Ciebie, dlatego:</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Podczas korzystania ze Strony www gromadzimy pewne informacje na Twój temat: (a) adres IP, (b) domenę, (c) dane identyfikacyjne przeglądarki, (d) typ systemu operacyjnego i (e) lokalizację.</li>
                    <li>Podczas kontaktowania się z nami za pośrednictwem formularzy dostępnych na Stronie www możemy poprosić Cię o podanie danych takich jak: (a) adres e-mail, (b) dane zawarte w treści wiadomości w celu obsługi Twojego pytania.</li>
                    <li>Podczas korzystania z Programu automatycznie zbierane są informacje dotyczące działań użytkownika Programu w celu utworzenia historii, zapewnienia wsparcia technicznego i analizy statystycznej.</li>
                    <li>Korzystając z naszych serwisów społecznościowych (Linkedin, Facebook, Instagram), dane takie jak lokalizacja, adres IP i system operacyjny są zbierane automatycznie w celach statystycznych i reklamowych, głównie dla wyświetlania treści i reklam dostosowanych do Twoich zainteresowań.</li>
                    <li>W przypadku wypełnienia formularza kontaktowego w reklamie na Facebooku, Linkedin prosimy o podanie danych takich jak: (a) imię, (b) nazwisko, (c) adres e-mail, (d) numer telefonu, (e) nazwa firmy w celu obsługi Twojego pytania lub odpowiedzi na reklamację.</li>
                    <li>Podczas rejestracji konta prosimy o podanie danych osobowych takich jak: (a) e-mail, (b) kraj, (c) nazwa firmy, (d) telefon. Po rejestracji konta możesz dodawać do systemu inne dane (w tym dane osobowe), także te, którymi jesteś administratorem (np. dane Twoich klientów, kierowców): (a) imię, (b) nazwisko, (c) nazwa firmy, (d) adres, (e) dane identyfikujące Twoją firmę tj. NIP, REGON, KRS, (f) e-mail, (g) numer telefonu.</li>
                    <li>Aby otrzymywać newsletter, potrzebujemy Twego adresu e-mail.</li>
                    <li>Podczas korzystania z aplikacji fireTMS Driver zbieramy informacje takie jak: (a) numer telefonu, (b) lokalizacja.</li>
                    <li>Dodatkowo, Twoje dane osobowe mogą być udostępniane naszym partnerom biznesowym na podstawie wyrażonej przez Ciebie zgody w celach handlowo-marketingowych oraz w przypadku konieczności realizacji umów i obsługi klienta na podstawie prawnie uzasadnionego interesu realizowanego przez Administratora danych.</li>
                </ol>
                <p className="mt-4 mb-4">
                    Podanie Danych Osobowych jest dobrowolne. To Ty decydujesz, czy chcesz skontaktować się z nami za pośrednictwem formularza na Stronie www, korzystać z serwisów społecznościowych, czy otrzymywać newsletter. Jednak pamiętaj, że podanie Danych Osobowych jest niezbędne do udzielenia odpowiedzi na Twoje pytanie, prowadzenia Twojego konta w Programie czy wysyłania do Ciebie newslettera. <br/><br/>
                    Gdy przekazujesz nam Dane Osobowe, stajemy się ich administratorem zgodnie z art. 4 pkt. 7 RODO.
                </p>
                
                <h3 className="font-bold text-xl mt-8 mb-4">Twoje Dane Osobowe są przez nas przetwarzane:</h3>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Na podstawie art. 6 ust. 1 lit. a) RODO – gdy udzielasz dobrowolnej zgody na przetwarzanie danych osobowych.</li>
                    <li>Na podstawie art. 6 ust. 1 lit. b) RODO – w celu wykonania umowy lub przed zawarciem umowy na Twoje żądanie.</li>
                    <li>Na podstawie art. 6 ust. 1 lit. c) RODO – zgodnie z przepisami prawa, zwłaszcza w celu spełnienia obowiązków wynikających z przepisów skarbowych oraz odpowiedzi na reklamacje.</li>
                    <li>Na podstawie art. 6 ust. 1 lit. f) RODO – na podstawie prawnie uzasadnionego interesu Administratora, takiego jak marketing bezpośredni, obsługa zapytań oraz ochrona przed roszczeniami.</li>
                </ol>
                <p className="mt-4 mb-4">
                    Dane Osobowe klientów są przetwarzane do czasu wygaśnięcia umowy, z zastrzeżeniem możliwości dalszego wykorzystania danych niezbędnych do dochodzenia roszczeń wynikających z wykonania umowy, do celów reklamy, badań rynku, zachowań i preferencji klientów/użytkowników Strony www za ich zgodą oraz do przetwarzania na podstawie innych przepisów ustawowych.<br/><br/>
                    W przypadku przetwarzania danych osobowych na podstawie zgody, dane są przetwarzane do czasu jej wycofania. Wycofanie zgody nie wpływa jednak na legalność przetwarzania danych osobowych przed jej wycofaniem.
                </p>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">Twoje Dane Osobowe są przetwarzane w różnych celach, obejmujących:</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Zapewnianie funkcjonowania i utrzymanie Platformy oraz Twojego Konta.</li>
                    <li>Nawiązywanie kontaktu w celu świadczenia usług i obsługi.</li>
                    <li>Udzielanie odpowiedzi na Twoje zapytania lub zgłoszenia reklamacyjne</li>
                    <li>Przesyłanie informacji dotyczących ewentualnych zmian w Warunkach Korzystania i innych istotnych aspektach.</li>
                    <li>Dostosowywanie Strony internetowej z myślą o Twoich indywidualnych potrzebach.</li>
                    <li>Realizacja działań marketingowych, obejmujących przekazywanie informacji handlowych dotyczących naszych produktów i usług. Przed wysłaniem takich informacji zawsze pytamy o Twoją zgodę, którą możesz udzielić, zaznaczając odpowiednie pole w formularzach kontaktowych.</li>
                    <li>Wykorzystywanie danych w celach statystycznych fireTMS, służących analizie i doskonaleniu naszych świadczeń usługowych.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">Ciasteczka</h2>
                <p className="mb-4">
                    Dążymy do doskonalenia naszej Strony www, aby ułatwić Ci korzystanie z niej oraz jak najlepiej dopasować ją do Twoich potrzeb. Dlatego, oprócz dobrowolnie podanych przez Ciebie informacji, korzystamy z ciasteczek (plików cookies), czyli plików zawierających dane informatyczne, które są zapisywane na Twoim urządzeniu końcowym. Dzięki nim możliwe jest odczytanie tych informacji przy kolejnych wizytach na Stronie www. <br/><br/>
                    Ciasteczka mają służyć Tobie i nam. Ich celem to dostosowanie zawartości Strony www do Twoich indywidualnych preferencji, optymalizacja korzystania ze Strony www oraz jej personalizacja. Dodatkowo, dzięki nim możemy tworzyć statystyki dotyczące korzystania ze Strony www, co umożliwia jej ciągłe ulepszanie.<br/><br/>
                    Ciasteczka nie wpływają na konfigurację Twojego urządzenia końcowego. Informacje te są wykorzystywane jedynie do tworzenia statystyk funkcjonowania Strony www. Mogą być także udostępniane podmiotom zewnętrznym, jedynie w przypadku, gdy wymagają tego przepisy prawa lub w sytuacji powierzenia przetwarzania informacji o ciasteczkach podmiotom zewnętrznym.
                </p>
                
                <h3 className="font-bold text-xl mt-4 mb-4">Na naszej Stronie wykorzystujemy kilka rodzajów ciasteczek:</h3>
                <ol className="list-decimal pl-8">
                    <li className="font-bold mb-2">Serwisowe:
                        <ul className="list-disc pl-8 mt-1 space-y-1">
                            <li>Niezbędne: pliki cookies umożliwiające poprawne funkcjonowanie Strony www i jej podstawowych funkcji. Bez tych plików Strona www nie może działać.</li>
                            <li>Preferencyjne: pliki cookies dotyczące preferencji użytkownika, umożliwiające zapamiętanie informacji takich jak język czy region, w jakim znajduje się użytkownik.</li>
                            <li>Statystyczne: pliki cookies zbierające dane, które pomagają właścicielowi strony internetowej zrozumieć, jak użytkownicy korzystają z niej, co ułatwia doskonalenie treści na stronie.</li>
                        </ul>
                    </li>
                    <li className="font-bold mt-3 mb-2">Marketingowe:
                        <p className="font-normal pl-8 mt-1">Pliki cookies stosowane przez właściciela strony internetowej i jego partnerów w celu wyświetlania oraz dostosowywania treści reklam do preferencji użytkowników.</p>
                    </li>
                </ol>
                <p className="mt-4 mb-4">
                    Pamiętaj, że zawsze masz możliwość rezygnacji z ciasteczek. Bez względu na używaną przeglądarkę internetową, możesz skorzystać z opcji wyłączenia ciasteczek zarówno dla konkretnej witryny, jak i wszystkich odwiedzanych stron internetowych. Instrukcje dotyczące wyłączania ciasteczek znajdziesz u producenta używanej przez Ciebie przeglądarki. Jeśli jednak zdecydujesz się pozostać na Stronie bez wyłączania ciasteczek, wyrażasz zgodę na ich pobieranie.<br/><br/>
                    W przypadku jakichkolwiek pytań dotyczących ciasteczek, znajdziesz odpowiedzi w sekcji "Pomoc" stosowanej przez Ciebie przeglądarki internetowej.
                </p>
            </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 