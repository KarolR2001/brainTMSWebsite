import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import KontaktSection from '../KontaktSection';

// Mock dla Framer Motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { variants, initial, whileInView, viewport, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
  },
}));

// Mock dla Lottie
jest.mock('lottie-react', () => ({
  __esModule: true,
  default: () => <div data-testid="location-animation" className="w-16 h-16">Location Animation</div>
}));

// Mock dla react-tooltip
jest.mock('react-tooltip', () => ({
  Tooltip: ({ children, render, ...props }: any) => {
    const { 'data-tooltip-variant': variant, classNameArrow, opacity, ...safeProps } = props;
    return (
      <div 
        data-testid="tooltip"
        {...safeProps}
        className={`${safeProps.className || ''} tooltip-mock`}
      >
        {render ? render({ content: safeProps['data-tooltip-content'] }) : children}
      </div>
    );
  }
}));

describe('KontaktSection Component', () => {
  it('renders section with correct id and styling', () => {
    render(<KontaktSection />);
    const section = screen.getByTestId('kontakt-section');
    expect(section).toHaveAttribute('id', 'kontakt');
    expect(section).toHaveClass('relative', 'min-h-screen');
  });

  it('displays contact information correctly in the left column', () => {
    render(<KontaktSection />);
    
    // Check headings
    expect(screen.getByText('Informacje kontaktowe:')).toBeInTheDocument();
    
    // Check Lottie animation
    const animation = screen.getByTestId('location-animation');
    expect(animation).toBeInTheDocument();
    expect(animation).toHaveClass('w-16', 'h-16');
    
    // Check address
    expect(screen.getByText(/Łącko 712/)).toBeInTheDocument();
    expect(screen.getByText(/33-390 Łącko/)).toBeInTheDocument();
    
    // Check phone number
    const phoneLink = screen.getByText(/606 - 544 - 635/);
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+48606544635');
    
    // Check company details
    expect(screen.getByText(/NIP: 7343564384/)).toBeInTheDocument();
    expect(screen.getByText(/REGON: 381492522/)).toBeInTheDocument();
  });

  it('renders map in the left column', () => {
    render(<KontaktSection />);
    
    const iframe = screen.getByTitle('Mapa lokalizacji firmy');
    const mapContainer = iframe.closest('div');
    expect(mapContainer).toHaveClass('w-full', 'h-64', 'lg:h-80', 'overflow-hidden', 'shadow-lg', 'rounded-[15px]');
  });

  it('renders contact form in the right column', () => {
    render(<KontaktSection />);
    
    const form = screen.getByTestId('contact-form');
    const formContainer = form.closest('.bg-white');
    expect(formContainer).toHaveClass('w-full', 'lg:w-1/2', 'rounded-[15px]', 'shadow-lg');
    
    // Check form fields
    expect(screen.getByLabelText(/Imię i Nazwisko/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Wpisz swój adres e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Numer telefonu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Wiadomość/i)).toBeInTheDocument();
  });

  it('displays RODO information with tooltip functionality', () => {
    render(<KontaktSection />);
    
    const rodoInfo = screen.getByText(/Administratorem danych osobowych/);
    expect(rodoInfo).toHaveAttribute('data-tooltip-id', 'rodo-tooltip');
    expect(rodoInfo).toHaveClass('cursor-help');
    
    // Check if tooltip component is rendered
    const tooltip = screen.getByTestId('tooltip');
    expect(tooltip).toHaveAttribute('id', 'rodo-tooltip');
  });

  it('displays validation errors when submitting empty form', async () => {
    render(<KontaktSection />);
    
    const submitButton = screen.getByTestId('submit-button');
    
    // Submit form with empty fields
    fireEvent.click(submitButton);
    
    // Check for validation error messages
    await waitFor(() => {
      expect(screen.getByText('Imię i nazwisko jest wymagane')).toBeInTheDocument();
      expect(screen.getByText('Email jest wymagany')).toBeInTheDocument();
      expect(screen.getByText('Numer telefonu jest wymagany')).toBeInTheDocument();
      expect(screen.getByText('Wiadomość jest wymagana')).toBeInTheDocument();
    });
  });

  it('validates phone number format', async () => {
    render(<KontaktSection />);
    
    // Fill in invalid phone
    const phoneInput = screen.getByLabelText(/Numer telefonu/i);
    fireEvent.change(phoneInput, { target: { value: 'abc' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    // Check for phone format error
    await waitFor(() => {
      expect(screen.getByText('Nieprawidłowy format numeru telefonu')).toBeInTheDocument();
    });
  });

  it('shows success message after successful form submission', async () => {
    render(<KontaktSection />);
    
    // Fill in all required fields
    const nameInput = screen.getByLabelText(/Imię i Nazwisko/i);
    const emailInput = screen.getByLabelText(/Wpisz swój adres e-mail/i);
    const phoneInput = screen.getByLabelText(/Numer telefonu/i);
    const messageInput = screen.getByLabelText(/Wiadomość/i);
    
    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(emailInput, { target: { value: 'jan.kowalski@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '+48 123 456 789' } });
    fireEvent.change(messageInput, { target: { value: 'To jest testowa wiadomość' } });
    
    const submitButton = screen.getByTestId('submit-button');
    fireEvent.click(submitButton);
    
    // Check for loading state
    await waitFor(() => {
      expect(submitButton).toBeDisabled();
      expect(submitButton.textContent).toBe('Wysyłanie...');
    });
    
    // Check for success message
    await waitFor(() => {
      expect(screen.getByText('Wiadomość została wysłana.')).toBeInTheDocument();
    }, { timeout: 2000 });
  });

  it('has a responsive design with two columns on desktop', () => {
    render(<KontaktSection />);
    
    // Check flex column on mobile and row on desktop
    const container = screen.getByTestId('kontakt-section').querySelector('.flex-col');
    expect(container).toHaveClass('lg:flex-row');
    
    // Check that the section has proper rounded corners
    expect(container).toHaveClass('rounded-[25px]');
  });
}); 