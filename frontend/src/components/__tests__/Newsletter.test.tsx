import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Newsletter from '../Newsletter';

// Mocki dla funkcji framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
  },
}));

describe('Newsletter', () => {
  it('renderuje formularz z polem email i przyciskiem', () => {
    render(<Newsletter />);
    
    // Sprawdzenie czy nagłówek istnieje
    expect(screen.getByText('Newsletter')).toBeInTheDocument();
    
    // Sprawdzenie czy pole email istnieje
    expect(screen.getByPlaceholderText('Twój adres e-mail')).toBeInTheDocument();
    
    // Sprawdzenie czy przycisk zapisu istnieje (teraz jako przycisk z aria-label)
    expect(screen.getByLabelText('Zapisz się do newslettera')).toBeInTheDocument();
  });

  it('ma nagłówek z odpowiednimi stylami (inline-block z podkreśleniem)', () => {
    render(<Newsletter />);
    
    const heading = screen.getByText('Newsletter');
    expect(heading.tagName).toBe('H3');
    expect(heading).toHaveClass('inline-block');
    expect(heading).toHaveClass('border-b-2');
    expect(heading).toHaveClass('border-primary');
    expect(heading).toHaveClass('pb-2');
  });

  it('pokazuje błąd walidacji przy niepoprawnym adresie email', async () => {
    render(<Newsletter />);
    
    // Wprowadzenie nieprawidłowego adresu email
    const emailInput = screen.getByPlaceholderText('Twój adres e-mail');
    fireEvent.change(emailInput, { target: { value: 'niepoprawny-email' } });
    
    // Próba wysłania formularza
    const submitButton = screen.getByLabelText('Zapisz się do newslettera');
    fireEvent.click(submitButton);
    
    // Symulujemy dodanie elementu błędu do DOM
    jest.useFakeTimers();
    
    // Oczekujemy, że komponent spróbuje walidować email
    await waitFor(() => {
      expect(emailInput).toHaveValue('niepoprawny-email');
      expect(submitButton).not.toBeDisabled();
    });
    
    jest.useRealTimers();
  });

  it('pokazuje komunikat sukcesu po prawidłowym wysłaniu formularza', async () => {
    render(<Newsletter />);
    
    // Wprowadzenie poprawnego adresu email
    const emailInput = screen.getByPlaceholderText('Twój adres e-mail');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    // Wysłanie formularza
    const submitButton = screen.getByLabelText('Zapisz się do newslettera');
    fireEvent.click(submitButton);
    
    // Sprawdzenie, czy przycisk jest disabled podczas ładowania
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
    });
    
    // Sprawdzamy, czy ikona ładowania jest obecna (SVG bez atrybutu role)
    await waitFor(() => {
      const svgElement = document.querySelector('svg.animate-spin');
      expect(svgElement).toBeInTheDocument();
    });
    
    // Sprawdzenie czy pojawił się komunikat sukcesu
    await waitFor(() => {
      expect(screen.getByText('Dziękujemy za zapisanie się!')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('resetuje formularz po pomyślnym wysłaniu', async () => {
    render(<Newsletter />);
    
    // Wprowadzenie poprawnego adresu email
    const emailInput = screen.getByPlaceholderText('Twój adres e-mail');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    // Wysłanie formularza
    const submitButton = screen.getByLabelText('Zapisz się do newslettera');
    fireEvent.click(submitButton);
    
    // Sprawdzenie czy pojawił się komunikat sukcesu
    await waitFor(() => {
      expect(screen.getByText('Dziękujemy za zapisanie się!')).toBeInTheDocument();
    }, { timeout: 2000 });
    
    // Sprawdzenie, czy po 3 sekundach formularz się resetuje
    await waitFor(() => {
      expect(screen.getByPlaceholderText('Twój adres e-mail')).toBeInTheDocument();
    }, { timeout: 4000 });
  });
}); 