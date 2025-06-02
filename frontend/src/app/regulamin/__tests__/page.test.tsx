import { render, screen } from '@testing-library/react';
import Regulamin from '../page';

// Mock komponentów
jest.mock('@/components/Navigation', () => {
  return jest.fn(({ forceBackground }) => (
    <div data-testid="navigation-mock" data-force-background={forceBackground} />
  ));
});
jest.mock('@/components/Footer', () => () => <div data-testid="footer-mock" />);

describe('Regulamin Page', () => {
  it('renders page with correct sections', () => {
    render(<Regulamin />);
    
    // Sprawdź czy są zamockowane komponenty
    const navigationMock = screen.getByTestId('navigation-mock');
    expect(navigationMock).toBeInTheDocument();
    expect(navigationMock).toHaveAttribute('data-force-background', 'true');
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
    
    // Sprawdź główne nagłówki sekcji
    expect(screen.getByText('REGULAMIN SERWISU brainTMS')).toBeInTheDocument();
    expect(screen.getByText('§1. Definicje')).toBeInTheDocument();
    expect(screen.getByText('§2. Postanowienia ogólne')).toBeInTheDocument();
    expect(screen.getByText('§3. Warunki korzystania z Aplikacji')).toBeInTheDocument();
    expect(screen.getByText('§4. Zasady płatności')).toBeInTheDocument();
    expect(screen.getByText('§5. Prawa autorskie')).toBeInTheDocument();
    expect(screen.getByText('§6. Odpowiedzialność')).toBeInTheDocument();
    expect(screen.getByText('§7. Reklamacje')).toBeInTheDocument();
    expect(screen.getByText('§8. Postanowienia końcowe')).toBeInTheDocument();
    
    // Sprawdź definicje
    expect(screen.getByText(/Serwis - strona internetowa/i)).toBeInTheDocument();
    expect(screen.getByText(/Operator - BrainTMS Sp\. z o\.o/i)).toBeInTheDocument();
    
    // Sprawdź istotne informacje
    expect(screen.getByText(/Korzystanie z Serwisu oznacza akceptację niniejszego Regulaminu/i)).toBeInTheDocument();
    expect(screen.getByText(/Reklamacje należy zgłaszać/i)).toBeInTheDocument();
    expect(screen.getByText(/W sprawach nieuregulowanych/i)).toBeInTheDocument();
  });

  it('renders navigation with correct padding', () => {
    render(<Regulamin />);
    const mainContent = document.querySelector('main > div');
    expect(mainContent).toHaveClass('pt-20', 'md:pt-24');
  });
}); 