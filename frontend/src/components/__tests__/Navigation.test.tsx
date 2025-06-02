import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';

// Mocking Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname() {
    return '/';
  },
}));

// Mocking Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />;
  },
}));

describe('Navigation', () => {
  it('renders the logo', () => {
    render(<Navigation />);
    const logoImage = screen.getByAltText('BrainTMS Logo');
    expect(logoImage).toBeInTheDocument();
  });

  it('renders desktop navigation links', () => {
    render(<Navigation />);
    const links = ['Aplikacja', 'Funkcje', 'Oferta', 'FAQ', 'Kontakt'];
    
    links.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument();
    });
  });

  it('renders login dropdown button', () => {
    render(<Navigation />);
    expect(screen.getByText('Zaloguj się')).toBeInTheDocument();
  });

  it('toggles mobile menu when hamburger is clicked', () => {
    render(<Navigation />);
    const mobileMenuContainer = screen.getByTestId('mobile-menu-container');
    const hamburgerButton = mobileMenuContainer.querySelector('button');
    
    // Mobile menu should not be visible initially
    expect(screen.queryByTestId('mobile-menu-content')).not.toBeInTheDocument();
    
    // Click hamburger to open menu
    if (hamburgerButton) {
      fireEvent.click(hamburgerButton);
    }
    
    // Mobile menu should now be visible
    expect(screen.getByTestId('mobile-menu-content')).toBeInTheDocument();
    
    // Mobile menu should have all required links
    const mobileLinks = ['Aplikacja', 'Funkcje', 'Oferta', 'FAQ', 'Kontakt'];
    mobileLinks.forEach(link => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('closes mobile menu when close button is clicked', () => {
    render(<Navigation />);
    const mobileMenuContainer = screen.getByTestId('mobile-menu-container');
    const hamburgerButton = mobileMenuContainer.querySelector('button');
    
    // Open mobile menu
    if (hamburgerButton) {
      fireEvent.click(hamburgerButton);
    }
    
    // Mobile menu should be visible
    expect(screen.getByTestId('mobile-menu-content')).toBeInTheDocument();
    
    // Click close button
    const closeButton = screen.getByTestId('mobile-menu-close');
    fireEvent.click(closeButton);
    
    // Mobile menu should be closed
    expect(screen.queryByTestId('mobile-menu-content')).not.toBeInTheDocument();
  });
}); 