import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Regulamin - BrainTMS',
  description: 'Regulamin korzystania z systemu BrainTMS - kompleksowego rozwiązania dla firm transportowych i spedycyjnych.',
  keywords: 'regulamin, warunki korzystania, zasady, BrainTMS, system TMS, oprogramowanie transportowe',
  alternates: {
    canonical: 'https://braintms.eu/regulamin',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'article',
    url: 'https://braintms.eu/regulamin',
    title: 'Regulamin - BrainTMS',
    description: 'Regulamin korzystania z systemu BrainTMS - kompleksowego rozwiązania dla firm transportowych i spedycyjnych.',
    images: [
      {
        url: '/images/braintms-regulamin-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Regulamin BrainTMS',
      }
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Regulamin - BrainTMS',
    description: 'Regulamin korzystania z systemu BrainTMS - kompleksowego rozwiązania dla firm transportowych i spedycyjnych.',
    images: ['/images/braintms-regulamin-twitter.jpg'],
  },
};

// Dane JSON-LD dla strony regulaminu
const regulaminJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": ["article", ".regulamin-content"]
  },
  "name": "Regulamin korzystania z systemu BrainTMS",
  "description": "Regulamin korzystania z systemu BrainTMS - kompleksowego rozwiązania dla firm transportowych i spedycyjnych.",
  "datePublished": "2023-01-01T00:00:00+01:00",
  "dateModified": "2023-01-01T00:00:00+01:00",
  "inLanguage": "pl-PL",
  "mainContentOfPage": {
    "@type": "WebPageElement",
    "cssSelector": ".regulamin-content"
  },
  "specialty": "Legal Information",
  "about": {
    "@type": "SoftwareApplication",
    "name": "BrainTMS",
    "applicationCategory": "BusinessApplication"
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

export default function Regulamin() {
  const breadcrumbItems = [
    { label: 'Strona główna', href: '/' },
    { label: 'Regulamin', href: '/regulamin', isCurrent: true },
  ];

  return (
    <main>
      <JsonLd data={regulaminJsonLd} />
      <Navigation forceBackground={true} />
      
      <div className="container pt-20 md:pt-24">
        <Breadcrumbs items={breadcrumbItems} className="mb-4" />
        <div className="row bg-gray-100 bg-opacity-10 my-5 p-5 rounded-lg regulamin-content">
            <div className="col-12 mb-3">
                <h1 className="font-bold text-3xl md:text-4xl mb-6 text-center">REGULAMIN SERWISU brainTMS</h1>
                <p className="mb-4">
                    Niniejszy regulamin określa zasady korzystania z serwisu internetowego BrainTMS oraz aplikacji mobilnej BrainTMS Mobile.
                    Prosimy o uważne zapoznanie się z poniższymi postanowieniami przed rozpoczęciem korzystania z naszych usług.
                </p>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§1. Definicje</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li><strong>Serwis</strong> - strona internetowa dostępna pod adresem braintms.eu oraz powiązane z nią subdomeny.</li>
                    <li><strong>Aplikacja</strong> - oprogramowanie BrainTMS oraz aplikacja mobilna BrainTMS Mobile dostępna dla użytkowników.</li>
                    <li><strong>Operator</strong> - BrainTMS Sp. z o.o. z siedzibą w Łącku, 33-390 Łącko 712, NIP: 7343564384, REGON: 381492522.</li>
                    <li><strong>Użytkownik</strong> - osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z Serwisu lub Aplikacji.</li>
                    <li><strong>Konto</strong> - indywidualny dostęp do Aplikacji umożliwiający Użytkownikowi korzystanie z jej funkcjonalności.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§2. Postanowienia ogólne</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu.</li>
                    <li>Operator zastrzega sobie prawo do wprowadzania zmian w Regulaminie. Zmiany wchodzą w życie po 14 dniach od ich opublikowania w Serwisie.</li>
                    <li>Użytkownik jest zobowiązany do korzystania z Serwisu i Aplikacji zgodnie z obowiązującymi przepisami prawa oraz postanowieniami Regulaminu.</li>
                    <li>Operator nie ponosi odpowiedzialności za przerwy w dostępie do Serwisu wynikające z przyczyn technicznych, konserwacji systemu lub innych okoliczności niezależnych od Operatora.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§3. Warunki korzystania z Aplikacji</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Korzystanie z Aplikacji wymaga utworzenia Konta.</li>
                    <li>Użytkownik zobowiązany jest do podania prawdziwych danych podczas rejestracji Konta.</li>
                    <li>Użytkownik jest odpowiedzialny za zachowanie poufności swoich danych logowania oraz za wszystkie działania wykonywane przy użyciu jego Konta.</li>
                    <li>Operator zastrzega sobie prawo do blokady Konta w przypadku naruszenia Regulaminu przez Użytkownika.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§4. Zasady płatności</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Korzystanie z pełnej funkcjonalności Aplikacji może być odpłatne zgodnie z cennikiem dostępnym w Serwisie.</li>
                    <li>Płatności za korzystanie z Aplikacji są realizowane zgodnie z wybranym planem abonamentowym (miesięcznym lub rocznym).</li>
                    <li>Operator zastrzega sobie prawo do zmiany cen i planów abonamentowych. O zmianach Użytkownicy będą informowani z 30-dniowym wyprzedzeniem.</li>
                    <li>W przypadku wyboru planu rocznego, Użytkownik otrzymuje rabat zgodnie z aktualną ofertą.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§5. Prawa autorskie</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Wszelkie prawa do Serwisu i Aplikacji, w tym prawa autorskie, znaki towarowe, elementy graficzne, oprogramowanie oraz bazy danych, przysługują Operatorowi.</li>
                    <li>Użytkownik nie jest uprawniony do kopiowania, modyfikowania, rozpowszechniania, przesyłania, publicznego odtwarzania lub wykorzystywania w inny sposób zawartości Serwisu i Aplikacji bez uprzedniej zgody Operatora.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§6. Odpowiedzialność</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Operator nie ponosi odpowiedzialności za szkody wynikłe z niewłaściwego korzystania z Serwisu lub Aplikacji, a także za szkody powstałe w wyniku przerw w dostępie do Serwisu.</li>
                    <li>Użytkownik ponosi pełną odpowiedzialność za treści i dane wprowadzane przez niego w Aplikacji.</li>
                    <li>Operator dokłada wszelkich starań, aby dane przechowywane w Aplikacji były bezpieczne, jednak nie ponosi odpowiedzialności za ich utratę spowodowaną awarią systemu, działaniami osób trzecich lub siłą wyższą.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§7. Reklamacje</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>Użytkownik ma prawo do składania reklamacji dotyczących działania Serwisu lub Aplikacji.</li>
                    <li>Reklamacje należy zgłaszać drogą elektroniczną na adres: kontakt@braintms.com.</li>
                    <li>Reklamacja powinna zawierać dane Użytkownika oraz opis problemu.</li>
                    <li>Operator rozpatruje reklamacje w terminie 14 dni od daty ich otrzymania.</li>
                </ol>
            </div>

            <div className="col-12 my-3">
                <h2 className="font-bold text-2xl mb-4">§8. Postanowienia końcowe</h2>
                <ol className="list-decimal pl-8 space-y-2">
                    <li>W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają przepisy prawa polskiego.</li>
                    <li>Wszelkie spory wynikające z korzystania z Serwisu lub Aplikacji będą rozstrzygane przez sąd właściwy dla siedziby Operatora.</li>
                    <li>Regulamin wchodzi w życie z dniem 01.01.2023 r.</li>
                </ol>
            </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
} 