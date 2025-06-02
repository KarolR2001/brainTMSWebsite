import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

// Mock dla localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => {
      return store[key] || null;
    },
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    }
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
});

// Mock dla next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

// Mock dla next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
});

// Mock dla Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { variants, initial, whileInView, viewport, animate, ...rest } = props;
      return <div {...rest}>{children}</div>;
    }
  }
}));

// Mock dla komponentu Newsletter
jest.mock('../Newsletter', () => {
  return function MockNewsletter() {
    return <div data-testid="newsletter-component">Newsletter Component</div>;
  };
});

describe('Footer Component', () => {
  beforeEach(() => {
    localStorageMock.clear();
    // Resetujemy mocks przed każdym testem
    jest.clearAllMocks();
  });

  it('renders the Newsletter component', () => {
    render(<Footer />);
    expect(screen.getByTestId('newsletter-component')).toBeInTheDocument();
  });

  it('renders footer with logo and navigation links', () => {
    render(<Footer />);
    
    // Sprawdź logo
    expect(screen.getByAltText('BrainTMS Logo')).toBeInTheDocument();
    
    // Sprawdź linki nawigacyjne
    const navLinks = screen.getAllByRole('link');
    const navigationLinks = ['Aplikacja', 'Funkcje', 'Oferta', 'Kontakt'].map(text => 
      navLinks.find(link => link.textContent === text)
    );
    
    navigationLinks.forEach((link, index) => {
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute('href', `#${['aplikacja', 'funkcje', 'oferta', 'kontakt'][index]}`);
    });
  });

  it('displays contact information correctly', () => {
    render(<Footer />);
    
    // Sprawdź adres
    expect(screen.getByText('Łącko 712')).toBeInTheDocument();
    expect(screen.getByText('33-390 Łącko')).toBeInTheDocument();
    
    // Sprawdź numer telefonu
    const phoneLink = screen.getByText(/606 - 544 - 635/);
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+48606544635');
    
    // Sprawdź email
    const emailLink = screen.getByText('info@braintms.eu');
    expect(emailLink).toBeInTheDocument();
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:info@braintms.eu');
    
    // Sprawdź dane firmowe
    expect(screen.getByText('NIP: 7343564384')).toBeInTheDocument();
    expect(screen.getByText('REGON: 381492522')).toBeInTheDocument();
  });

  it('displays social media links with correct attributes', () => {
    render(<Footer />);
    
    // Sprawdź ikony mediów społecznościowych
    const socialLinks = [
      { href: 'https://facebook.com', label: 'Facebook' },
      { href: 'https://twitter.com', label: 'Twitter' },
      { href: 'https://instagram.com', label: 'Instagram' },
      { href: 'https://linkedin.com', label: 'LinkedIn' }
    ];
    
    socialLinks.forEach(({ href, label }) => {
      const link = screen.getByLabelText(label);
      expect(link).toHaveAttribute('href', href);
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  it('shows cookie notification when cookies not accepted', () => {
    render(<Footer />);
    
    // Sprawdź, czy powiadomienie jest widoczne
    const notification = screen.getByTestId('cookie-notification');
    expect(notification).toBeInTheDocument();
    expect(screen.getByText('Polityka Cookies')).toBeInTheDocument();
    expect(screen.getByTestId('accept-cookies')).toBeInTheDocument();
    
    // Sprawdź linki w powiadomieniu
    const privacyLink = screen.getByText('Polityce Prywatności');
    expect(privacyLink).toHaveAttribute('href', '/polityka-prywatnosci');
    
    const detailsLink = screen.getByText('Szczegóły');
    expect(detailsLink).toHaveAttribute('href', '/polityka-prywatnosci');
  });

  it('hides cookie notification when cookies already accepted', () => {
    localStorageMock.setItem('cookiesAccepted', 'true');
    render(<Footer />);
    expect(screen.queryByTestId('cookie-notification')).not.toBeInTheDocument();
  });

  it('hides cookie notification after accepting cookies', () => {
    render(<Footer />);
    
    const notification = screen.getByTestId('cookie-notification');
    expect(notification).toBeInTheDocument();
    
    fireEvent.click(screen.getByTestId('accept-cookies'));
    
    expect(screen.queryByTestId('cookie-notification')).not.toBeInTheDocument();
    expect(localStorageMock.getItem('cookiesAccepted')).toBe('true');
  });

  it('has a responsive design with proper layout and styling', () => {
    render(<Footer />);
    
    // Sprawdź główny element footer
    const footer = screen.getByTestId('footer');
    expect(footer).toHaveClass('bg-[#161717]', 'text-white');
    
    // Sprawdź główny kontener
    const container = footer.querySelector('.container');
    expect(container).toHaveClass('mx-auto', 'p-6');
    
    // Sprawdź grid layout
    const grid = container?.querySelector('.grid');
    expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4', 'gap-8');
    
    // Sprawdź sekcje
    const sections = [
      { title: 'Nawigacja', type: 'nav' },
      { title: 'Kontakt', type: 'contact' },
      { title: 'Obserwuj nas', type: 'social' }
    ];

    sections.forEach(({ title }) => {
      const section = screen.getAllByRole('heading', { name: title })[0].closest('div');
      expect(section).toHaveClass('flex', 'flex-col', 'items-center', 'md:items-start');
    });

    // Sprawdź sekcję praw autorskich
    const copyrightSection = footer.querySelector('.bg-\\[\\#161717\\]');
    expect(copyrightSection).toHaveClass('bg-opacity-20', 'py-4');

    // Sprawdź powiadomienie o ciasteczkach
    const cookieNotification = screen.getByTestId('cookie-notification');
    expect(cookieNotification).toHaveClass('fixed', 'bottom-0', 'left-0', 'right-0', 'bg-dark', 'bg-opacity-95', 'p-4', 'shadow-lg', 'z-50');
  });
}); 