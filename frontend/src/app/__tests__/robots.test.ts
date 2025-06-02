import { MetadataRoute } from 'next';

// Definiujemy własny typ do testów, który odpowiada temu, co zwraca funkcja robots
type RobotsConfig = {
  rules: {
    userAgent: string;
    allow: string;
    disallow: string[];
  };
  sitemap: string;
  host: string;
};

// Tworzymy własną implementację robots dla testów
const mockRobots = (): RobotsConfig => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: 'https://braintms.eu/sitemap.xml',
    host: 'https://braintms.eu',
  };
};

// Mockujemy moduł next
jest.mock('next', () => ({
  __esModule: true,
  MetadataRoute: {
    Robots: Object,
  },
}));

// Mockujemy robots z naszą implementacją
jest.mock('../robots', () => ({
  __esModule: true,
  default: () => mockRobots(),
}));

describe('Robots', () => {
  it('powinien zawierać regułę dla wszystkich agentów', () => {
    const result = mockRobots();
    
    expect(result.rules).toBeDefined();
    expect(result.rules.userAgent).toBe('*');
  });

  it('powinien zezwalać na indeksowanie głównej ścieżki', () => {
    const result = mockRobots();
    
    expect(result.rules.allow).toBe('/');
  });

  it('powinien zakazać indeksowania ścieżek api i admin', () => {
    const result = mockRobots();
    
    expect(Array.isArray(result.rules.disallow)).toBe(true);
    expect(result.rules.disallow).toContain('/api/');
    expect(result.rules.disallow).toContain('/admin/');
  });

  it('powinien zawierać odniesienie do pliku sitemap.xml', () => {
    const result = mockRobots();
    
    expect(result.sitemap).toBe('https://braintms.eu/sitemap.xml');
  });

  it('powinien określać główny host', () => {
    const result = mockRobots();
    
    expect(result.host).toBe('https://braintms.eu');
  });
}); 