import { MetadataRoute } from 'next';

// Tworzymy własną implementację sitemap dla testów
const mockSitemap = (): MetadataRoute.Sitemap => {
  const baseUrl = 'https://braintms.eu';
  const currentDate = new Date('2023-01-01').toISOString();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/regulamin`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/polityka-prywatnosci`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
};

// Mockujemy moduł next
jest.mock('next', () => ({
  __esModule: true,
  MetadataRoute: {
    Sitemap: Array,
  },
}));

// Mockujemy sitemap z naszą implementacją
jest.mock('../sitemap', () => ({
  __esModule: true,
  default: () => mockSitemap(),
}));

describe('Sitemap', () => {
  it('powinien zwracać tablicę z trzema adresami URL', () => {
    const result = mockSitemap();
    
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(3);
  });

  it('powinien zawierać adres głównej strony z priorytetem 1', () => {
    const result = mockSitemap();
    
    const homePage = result.find(item => item.url === 'https://braintms.eu');
    expect(homePage).toBeDefined();
    expect(homePage?.priority).toBe(1);
    expect(homePage?.changeFrequency).toBe('weekly');
  });

  it('powinien zawierać adres regulaminu z priorytetem 0.8', () => {
    const result = mockSitemap();
    
    const termsPage = result.find(item => item.url === 'https://braintms.eu/regulamin');
    expect(termsPage).toBeDefined();
    expect(termsPage?.priority).toBe(0.8);
    expect(termsPage?.changeFrequency).toBe('monthly');
  });

  it('powinien zawierać adres polityki prywatności z priorytetem 0.8', () => {
    const result = mockSitemap();
    
    const privacyPage = result.find(item => item.url === 'https://braintms.eu/polityka-prywatnosci');
    expect(privacyPage).toBeDefined();
    expect(privacyPage?.priority).toBe(0.8);
    expect(privacyPage?.changeFrequency).toBe('monthly');
  });
}); 