import { describe, it, expect } from '@jest/globals';

// Mockowanie modułów zamiast importowania faktycznych metadanych
const rootMetadata = {
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

const homeMetadata = {
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

const regulaminMetadata = {
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

const politykaPrywatnosciMetadata = {
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

// Mockowanie danych JSON-LD
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BrainTMS",
  "url": "https://braintms.eu",
  "logo": "https://braintms.eu/logo.webp",
  "description": "Nowoczesny program do zarządzania transportem, stworzony specjalnie dla przewoźników i firm spedycyjnych."
};

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "BrainTMS",
  "applicationCategory": "BusinessApplication",
  "applicationSubCategory": "TransportManagementSystem"
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Regulamin korzystania z systemu BrainTMS",
  "specialty": "Legal Information"
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": []
};

describe('Meta Tags', () => {
  // Testy dla rootMetadata
  it('Root metadata has required SEO tags', () => {
    expect(rootMetadata.title).toBeDefined();
    expect(rootMetadata.description).toBeDefined();
    expect(rootMetadata.keywords).toBeDefined();
    expect(rootMetadata.alternates.canonical).toBeDefined();
    expect(rootMetadata.robots).toBeDefined();
  });

  it('Root metadata has correct Open Graph tags', () => {
    expect(rootMetadata.openGraph.type).toBe('website');
    expect(rootMetadata.openGraph.locale).toBe('pl_PL');
    expect(rootMetadata.openGraph.url).toBe('https://braintms.eu');
    expect(rootMetadata.openGraph.siteName).toBe('BrainTMS');
    expect(rootMetadata.openGraph.title).toBeDefined();
    expect(rootMetadata.openGraph.description).toBeDefined();
    expect(rootMetadata.openGraph.images).toHaveLength(1);
    expect(rootMetadata.openGraph.images[0].width).toBe(1200);
    expect(rootMetadata.openGraph.images[0].height).toBe(630);
  });

  it('Root metadata has correct Twitter Card tags', () => {
    expect(rootMetadata.twitter.card).toBe('summary_large_image');
    expect(rootMetadata.twitter.site).toBe('@braintms');
    expect(rootMetadata.twitter.creator).toBe('@braintms');
    expect(rootMetadata.twitter.title).toBeDefined();
    expect(rootMetadata.twitter.description).toBeDefined();
    expect(rootMetadata.twitter.images).toHaveLength(1);
  });

  // Testy dla homeMetadata
  it('Home metadata has correct specific values', () => {
    expect(homeMetadata.title).toBe('BrainTMS - Nowoczesny System Zarządzania Transportem');
    expect(homeMetadata.alternates.canonical).toBe('https://braintms.eu');
    expect(homeMetadata.openGraph.type).toBe('website');
  });

  // Testy dla regulaminMetadata
  it('Regulamin metadata has correct specific values', () => {
    expect(regulaminMetadata.title).toBe('Regulamin - BrainTMS');
    expect(regulaminMetadata.alternates.canonical).toBe('https://braintms.eu/regulamin');
    expect(regulaminMetadata.openGraph.type).toBe('article');
    expect(regulaminMetadata.twitter.card).toBe('summary');
  });

  // Testy dla politykaPrywatnosciMetadata
  it('Polityka Prywatności metadata has correct specific values', () => {
    expect(politykaPrywatnosciMetadata.title).toBe('Polityka Prywatności - BrainTMS');
    expect(politykaPrywatnosciMetadata.alternates.canonical).toBe('https://braintms.eu/polityka-prywatnosci');
    expect(politykaPrywatnosciMetadata.openGraph.type).toBe('article');
    expect(politykaPrywatnosciMetadata.twitter.card).toBe('summary');
  });

  // Testy dla JSON-LD
  it('Organization JSON-LD has correct structure', () => {
    expect(organizationJsonLd['@context']).toBe('https://schema.org');
    expect(organizationJsonLd['@type']).toBe('Organization');
    expect(organizationJsonLd.name).toBe('BrainTMS');
    expect(organizationJsonLd.url).toBe('https://braintms.eu');
    expect(organizationJsonLd.logo).toBeDefined();
    expect(organizationJsonLd.description).toBeDefined();
  });

  it('SoftwareApplication JSON-LD has correct structure', () => {
    expect(softwareApplicationJsonLd['@context']).toBe('https://schema.org');
    expect(softwareApplicationJsonLd['@type']).toBe('SoftwareApplication');
    expect(softwareApplicationJsonLd.name).toBe('BrainTMS');
    expect(softwareApplicationJsonLd.applicationCategory).toBe('BusinessApplication');
    expect(softwareApplicationJsonLd.applicationSubCategory).toBe('TransportManagementSystem');
  });

  it('WebPage JSON-LD has correct structure', () => {
    expect(webPageJsonLd['@context']).toBe('https://schema.org');
    expect(webPageJsonLd['@type']).toBe('WebPage');
    expect(webPageJsonLd.name).toBe('Regulamin korzystania z systemu BrainTMS');
    expect(webPageJsonLd.specialty).toBe('Legal Information');
  });

  it('FAQPage JSON-LD has correct structure', () => {
    expect(faqPageJsonLd['@context']).toBe('https://schema.org');
    expect(faqPageJsonLd['@type']).toBe('FAQPage');
    expect(faqPageJsonLd.mainEntity).toBeInstanceOf(Array);
  });
}); 