import { render, screen } from '@testing-library/react';
import HeroSection from '../HeroSection';

// Mock dla framer-motion, aby nie było problemu z testowaniem animacji
jest.mock('framer-motion', () => {
  return {
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
      p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
      span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    },
  };
});

describe('HeroSection Component', () => {
  it('renders hero section with correct content', () => {
    render(<HeroSection />);
    
    // Sprawdź, czy tytuł jest widoczny
    expect(screen.getByText('BRAIN TMS')).toBeInTheDocument();
    
    // Sprawdź, czy opis jest widoczny
    expect(
      screen.getByText(/Nowoczesny program do zarządzania transportem/i)
    ).toBeInTheDocument();
    
    // Sprawdź, czy przycisk CTA jest widoczny
    expect(screen.getByText('SKORZYSTAJ TERAZ')).toBeInTheDocument();
    
    // Sprawdź, czy link kieruje do sekcji oferta
    const ctaLink = screen.getByText('SKORZYSTAJ TERAZ').closest('a');
    expect(ctaLink).toHaveAttribute('href', '#oferta');
  });

  it('renders responsive heading and underline', () => {
    render(<HeroSection />);
    const heading = screen.getByText('BRAIN TMS');
    expect(heading).toBeInTheDocument();
    // Sprawdź, czy heading ma odpowiednie klasy responsywne
    expect(heading.parentElement).toHaveClass('text-5xl');
    // Sprawdź, czy podkreślenie istnieje
    const underline = heading.parentElement?.parentElement?.querySelector('span.block.h-1');
    expect(underline).toBeInTheDocument();
  });

  it('renders responsive CTA button', () => {
    render(<HeroSection />);
    const cta = screen.getByText('SKORZYSTAJ TERAZ');
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveClass('px-2');
    expect(cta).toHaveClass('py-2');
    expect(cta).toHaveClass('rounded-lg');
  });
}); 