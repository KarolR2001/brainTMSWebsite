import { render, screen } from '@testing-library/react';
import PrzecinekSection from '../PrzecinekSection';

// Mock dla framer-motion, aby nie było problemu z testowaniem animacji
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { whileInView, variants, viewport, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    span: ({ children, ...props }: any) => {
      const { variants, initial, animate, style, ...rest } = props;
      // Zachowaj wszystkie style z komponentu
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

describe('PrzecinekSection Component', () => {
  it('renders section with correct heading text', () => {
    render(<PrzecinekSection />);
    
    // Sprawdź, czy główny tekst jest obecny
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toContain('Transport TSL zarządzany');
    expect(heading.textContent).toContain('Doskonale');
    expect(heading.textContent).toContain('W małych, średnich i dużych firmach zajmujących się TSL.');
  });

  it('renders the gradient word "Doskonale"', () => {
    render(<PrzecinekSection />);
    
    const gradientWord = screen.getByText('Doskonale');
    expect(gradientWord).toBeInTheDocument();
    expect(gradientWord.tagName.toLowerCase()).toBe('span');
    expect(gradientWord).toHaveAttribute('style');
  });

  it('renders the right column text', () => {
    render(<PrzecinekSection />);
    
    // Sprawdź, czy tekst z prawej kolumny jest obecny
    const rightColumnText = screen.getByText(
      /brainTMS - maksymalna efektywność i automatyzacja realizacji zleceń, minimalizacja ryzyka błędów./i
    );
    expect(rightColumnText).toBeInTheDocument();
  });

  it('applies proper grid classes for responsiveness', () => {
    render(<PrzecinekSection />);
    
    // Sprawdź, czy lewy div ma odpowiednie klasy responsywności
    const leftColumn = screen.getByText(/Transport TSL zarządzany/i).closest('div');
    expect(leftColumn).toHaveClass('col-span-1');
    expect(leftColumn).toHaveClass('md:col-span-7');
    
    // Sprawdź, czy prawy div ma odpowiednie klasy responsywności i jest ukryty na mobile
    const rightColumn = screen.getByText(/brainTMS - maksymalna efektywność/i).closest('div');
    expect(rightColumn).toHaveClass('hidden');
    expect(rightColumn).toHaveClass('md:block');
    expect(rightColumn).toHaveClass('col-span-1');
    expect(rightColumn).toHaveClass('md:col-span-5');
  });

  it('has proper section id and background gradient', () => {
    render(<PrzecinekSection />);
    
    // Sprawdź, czy sekcja ma id dla nawigacji kotwicowej i odpowiedni gradient tła
    const section = screen.getByText(/Transport TSL zarządzany/i).closest('section');
    expect(section).toHaveAttribute('id', 'przecinek');
    expect(section).toHaveStyle({
      background: 'linear-gradient(to right, rgba(14, 118, 109, 0.05), rgba(0, 171, 172, 0.05))'
    });
  });
}); 