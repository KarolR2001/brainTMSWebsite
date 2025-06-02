import { render, screen } from '@testing-library/react';
import AplikacjaSection from '../AplikacjaSection';

// Mock dla framer-motion, aby nie było problemu z testowaniem animacji
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { whileInView, variants, viewport, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    span: ({ children, ...props }: any) => {
      const { variants, initial, animate, style, ...rest } = props;
      return (
        <span
          {...rest}
          style={style}
        >
          {children}
        </span>
      );
    },
  },
}));

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} />
  },
}));

describe('AplikacjaSection Component', () => {
  it('renders section with correct id', () => {
    render(<AplikacjaSection />);
    
    const section = screen.getByText(/Redukuje koszty/i).closest('section');
    expect(section).toHaveAttribute('id', 'aplikacja');
  });

  it('renders the first part with video and heading', () => {
    render(<AplikacjaSection />);
    
    // Sprawdź, czy element wideo jest obecny
    const videoElement = screen.getByText('Twoja przeglądarka nie obsługuje odtwarzania wideo.').closest('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('autoPlay');
    expect(videoElement).toHaveAttribute('loop');
    expect(videoElement).toHaveAttribute('playsInline');
    
    // Sprawdź, czy nagłówek pierwszej części jest poprawny
    const heading = screen.getByText(/Redukuje koszty, Optymalizuje pracę i Organizuje transport/i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the animated BRAINTMS text', () => {
    render(<AplikacjaSection />);
    
    const brainTmsText = screen.getByText('BRAINTMS');
    expect(brainTmsText).toBeInTheDocument();
    expect(brainTmsText.tagName.toLowerCase()).toBe('span');
    expect(brainTmsText).toHaveAttribute('style');
  });

  it('renders the separator between sections', () => {
    render(<AplikacjaSection />);
    
    // Znajdź separator (hr)
    const separators = document.querySelectorAll('hr');
    expect(separators.length).toBeGreaterThan(0);
    expect(separators[0]).toHaveClass('border-primary', 'border-t-2');
  });

  it('renders the second part with image and text', () => {
    render(<AplikacjaSection />);
    
    // Sprawdź, czy obraz jest obecny
    const image = screen.getByAltText('Interfejs aplikacji - zlecenia');
    expect(image).toBeInTheDocument();
    expect(image).toHaveClass('rounded-lg');
    
    // Sprawdź, czy nagłówek drugiej części jest poprawny
    const heading = screen.getByText(/Przyjmuj/i);
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain('Zlecenia');
  });

  it('renders the animated Zlecenia text', () => {
    render(<AplikacjaSection />);
    
    const zleceniaText = screen.getByText('Zlecenia');
    expect(zleceniaText).toBeInTheDocument();
    expect(zleceniaText.tagName.toLowerCase()).toBe('span');
    expect(zleceniaText).toHaveAttribute('style');
  });

  it('applies proper grid classes for responsiveness', () => {
    render(<AplikacjaSection />);
    
    // Sprawdź, czy kolumny mają odpowiednie klasy responsywności
    const videoColumn = screen.getByText('Twoja przeglądarka nie obsługuje odtwarzania wideo.')
      .closest('div')?.parentElement?.parentElement;
    expect(videoColumn).toHaveClass('col-span-1', 'md:col-span-8');
    
    const textColumn = screen.getByText(/Redukuje koszty/i).closest('div');
    expect(textColumn).toHaveClass('col-span-1', 'md:col-span-4');
  });
}); 