import { render, screen } from '@testing-library/react';
import PolitykaPrywatnosci from '../page';

// Mock komponentów
jest.mock('@/components/Navigation', () => {
  return jest.fn(({ forceBackground }) => (
    <div data-testid="navigation-mock" data-force-background={forceBackground} />
  ));
});
jest.mock('@/components/Footer', () => () => <div data-testid="footer-mock" />);

describe('PolitykaPrywatnosci Page', () => {
  it('renders page with correct sections', () => {
    render(<PolitykaPrywatnosci />);
    
    // Sprawdź czy są zamockowane komponenty
    const navigationMock = screen.getByTestId('navigation-mock');
    expect(navigationMock).toBeInTheDocument();
    expect(navigationMock).toHaveAttribute('data-force-background', 'true');
    expect(screen.getByTestId('footer-mock')).toBeInTheDocument();
    
    // Sprawdź główne nagłówki sekcji
    expect(screen.getByText('ZASADY PRYWATNOŚCI brainTMS')).toBeInTheDocument();
    expect(screen.getByText('Dzięki informacjom przekazywanym przez Ciebie, możemy być dla Ciebie pomocni.')).toBeInTheDocument();
    expect(screen.getByText('Chcemy lepiej zrozumieć Twoje potrzeby.')).toBeInTheDocument();
    expect(screen.getByText('Pragniemy bliżej poznać Ciebie, dlatego:')).toBeInTheDocument();
    expect(screen.getByText('Twoje Dane Osobowe są przetwarzane w różnych celach, obejmujących:')).toBeInTheDocument();
    expect(screen.getByText('Ciasteczka')).toBeInTheDocument();
    
    // Sprawdź przykładową listę
    expect(screen.getByText('Zapewnianie funkcjonowania i utrzymanie Platformy oraz Twojego Konta.')).toBeInTheDocument();
    
    // Sprawdź przykładowe informacje o cookies
    expect(screen.getByText(/Serwisowe:/i)).toBeInTheDocument();
    expect(screen.getByText(/Marketingowe:/i)).toBeInTheDocument();
    
    // Sprawdź czy zawiera istotne informacje dot. RODO
    expect(screen.getByText(/dane osobowe/i)).toBeInTheDocument();
    expect(screen.getByText(/art\. 6 ust\. 1 lit\. a\) RODO/i)).toBeInTheDocument();
  });

  it('renders navigation with correct padding', () => {
    render(<PolitykaPrywatnosci />);
    const mainContent = document.querySelector('main > div');
    expect(mainContent).toHaveClass('pt-20', 'md:pt-24');
  });
}); 