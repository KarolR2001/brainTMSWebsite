import '@/styles/globals.css';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import SkipLink from '@/components/SkipLink';

export const metadata: Metadata = {
  title: 'BrainTMS - System zarządzania transportem',
  description: 'Nowoczesny program do zarządzania transportem, stworzony specjalnie dla przewoźników i firm spedycyjnych.',
  keywords: 'TMS, zarządzanie transportem, oprogramowanie dla firm spedycyjnych, system transportowy, logistyka, spedycja, zarządzanie flotą, brainTMS',
  applicationName: 'BrainTMS',
  authors: [
    { name: 'BrainTMS Sp. z o.o.', url: 'https://braintms.eu' }
  ],
  creator: 'BrainTMS Sp. z o.o.',
  publisher: 'BrainTMS Sp. z o.o.',
  alternates: {
    canonical: 'https://braintms.eu',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://braintms.eu'),
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'software',
  verification: {
    google: 'verification_token',
  },
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://braintms.eu',
    siteName: 'BrainTMS',
    title: 'BrainTMS - System zarządzania transportem',
    description: 'Nowoczesny program do zarządzania transportem, stworzony specjalnie dla przewoźników i firm spedycyjnych.',
    images: [
      {
        url: '/images/braintms-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BrainTMS - System zarządzania transportem',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@braintms',
    creator: '@braintms',
    title: 'BrainTMS - System zarządzania transportem',
    description: 'Nowoczesny program do zarządzania transportem, stworzony specjalnie dla przewoźników i firm spedycyjnych.',
    images: ['/images/braintms-twitter-image.jpg'],
  },
};

// Dane JSON-LD dla organizacji
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrainTMS",
  "url": "https://braintms.eu",
  "logo": "https://braintms.eu/logo.webp",
  "description": "Nowoczesny program do zarządzania transportem, stworzony specjalnie dla przewoźników i firm spedycyjnych.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Łącko",
    "postalCode": "33-390",
    "streetAddress": "Łącko 712",
    "addressCountry": "PL"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+48 606 544 635",
    "contactType": "customer service",
    "email": "kontakt@braintms.com",
    "availableLanguage": ["Polish", "English"]
  },
  "sameAs": [
    "https://www.facebook.com/braintms",
    "https://www.linkedin.com/company/braintms",
    "https://twitter.com/braintms"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <SkipLink targetId="main-content" />
        <JsonLd data={organizationJsonLd} />
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  );
} 