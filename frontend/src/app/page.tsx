import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/sections/HeroSection';
import DlaczegoMySection from '@/sections/DlaczegoMySection';
import OfferSection from '@/sections/OfferSection';
import FunkcjeProgramuSection from '@/sections/FunkcjeProgramuSection';
import PrzecinekSection from '@/sections/PrzecinekSection';
import AplikacjaSection from '@/sections/AplikacjaSection';
import AplikacjaMobilnaSection from '@/sections/AplikacjaMobilnaSection';
import OpinieSection from '@/sections/OpinieSection';
import KontaktSection from '@/sections/KontaktSection';
import FAQSection from '@/sections/FAQSection';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'BrainTMS - Nowoczesny System Zarządzania Transportem',
  description: 'BrainTMS to kompleksowe rozwiązanie dla firm transportowych i spedycyjnych. Zarządzaj flotą, zleceniami i dokumentacją w jednym miejscu.',
  keywords: 'TMS, zarządzanie transportem, spedycja, logistyka, monitoring floty, zarządzanie zleceniami, oprogramowanie transportowe, BrainTMS',
  alternates: {
    canonical: 'https://braintms.eu',
  },
  openGraph: {
    type: 'website',
    url: 'https://braintms.eu',
    title: 'BrainTMS - Nowoczesny System Zarządzania Transportem',
    description: 'BrainTMS to kompleksowe rozwiązanie dla firm transportowych i spedycyjnych. Zarządzaj flotą, zleceniami i dokumentacją w jednym miejscu.',
    images: [
      {
        url: '/images/braintms-home-og.jpg',
        width: 1200,
        height: 630,
        alt: 'BrainTMS - Nowoczesny System Zarządzania Transportem',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BrainTMS - Nowoczesny System Zarządzania Transportem',
    description: 'BrainTMS to kompleksowe rozwiązanie dla firm transportowych i spedycyjnych. Zarządzaj flotą, zleceniami i dokumentacją w jednym miejscu.',
    images: ['/images/braintms-home-twitter.jpg'],
  },
};

// Dane JSON-LD dla oprogramowania
const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BrainTMS",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "TransportManagementSystem",
  "operatingSystem": "Web, Android, iOS",
  "offers": {
    "@type": "Offer",
    "price": "150.00",
    "priceCurrency": "PLN",
    "priceValidUntil": "2024-12-31",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  },
  "featureList": [
    "Zarządzanie zleceniami transportowymi",
    "Monitoring floty w czasie rzeczywistym",
    "Optymalizacja tras",
    "Zarządzanie kierowcami i pojazdami",
    "Raportowanie i analityka"
  ],
  "screenshot": [
    "https://braintms.eu/images/braintms-screenshot1.jpg",
    "https://braintms.eu/images/braintms-screenshot2.jpg"
  ],
  "softwareVersion": "3.5",
  "author": {
    "@type": "Organization",
    "name": "BrainTMS Sp. z o.o.",
    "url": "https://braintms.eu"
  }
};

export default function Home() {
  return (
    <main>
      <JsonLd data={softwareApplicationJsonLd} />
      <Navigation />
      <HeroSection />
      <DlaczegoMySection />
      <OfferSection />
      <FunkcjeProgramuSection />
      
      <PrzecinekSection />
      <AplikacjaSection />
      <AplikacjaMobilnaSection />
      <OpinieSection />
      <FAQSection />
      <KontaktSection />
      <Footer />
      
      {/* Tutaj będą dodawane kolejne sekcje podczas implementacji */}
    </main>
  );
} 