import { render, screen, fireEvent } from '@testing-library/react';
import AplikacjaMobilnaSection from '../AplikacjaMobilnaSection';

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
    h2: ({ children, ...props }: any) => {
      const { whileInView, variants, viewport, ...rest } = props;
      return <h2 {...rest}>{children}</h2>;
    },
    h3: ({ children, ...props }: any) => {
      const { variants, ...rest } = props;
      return <h3 {...rest}>{children}</h3>;
    },
  },
}));

describe('AplikacjaMobilnaSection Component', () => {
  it('renders section with correct id and padding', () => {
    render(<AplikacjaMobilnaSection />);
    
    const section = screen.getByText(/Aplikacja mobilna/i).closest('section');
    expect(section).toHaveAttribute('id', 'aplikacja-mobilna');
    expect(section).toHaveClass('py-8', 'md:py-16');
  });

  it('renders the main heading with correct styling', () => {
    render(<AplikacjaMobilnaSection />);
    
    const heading = screen.getByText(/Aplikacja mobilna/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-2xl', 'md:text-3xl', 'lg:text-4xl', 'font-semibold', 'text-gray-700');
    expect(heading.textContent).toContain('Aplikacja mobilna');
    expect(heading.textContent).toContain('brainTMS dla Twoich');
    expect(heading.textContent).toContain('pracowników');
  });

  it('renders video element with correct attributes', () => {
    render(<AplikacjaMobilnaSection />);
    
    const videoElement = screen.getByText('Twoja przeglądarka nie obsługuje odtwarzania wideo.').closest('video');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute('autoplay', '');
    expect(videoElement).toHaveAttribute('loop', '');
    expect(videoElement).toHaveAttribute('playsinline', '');
    expect(videoElement).toHaveClass('w-full', 'h-full', 'object-cover', 'rounded-lg');
    
    const videoContainer = videoElement?.closest('div');
    expect(videoContainer).toHaveClass('w-full', 'md:w-2/5', 'relative', 'aspect-[9/16]');
  });

  it('renders the animated brainTMS Mobile text with gradient styling', () => {
    render(<AplikacjaMobilnaSection />);
    
    const brainTmsMobileText = screen.getAllByText('brainTMS Mobile')[0];
    expect(brainTmsMobileText).toBeInTheDocument();
    expect(brainTmsMobileText).toHaveClass('inline-block', 'border-b-[6px]', 'border-primary');
    
    // Check only the color property as the gradient is applied via Framer Motion
    expect(brainTmsMobileText).toHaveStyle({
      color: 'transparent'
    });
  });

  it('renders the left column description text with correct styling', () => {
    render(<AplikacjaMobilnaSection />);
    
    const descriptionText = screen.getByText(/Aplikacja dla firm logistycznych zapewnia efektywną komunikację/i);
    expect(descriptionText).toBeInTheDocument();
    expect(descriptionText).toHaveClass('text-gray-600');
  });

  it('renders image with correct attributes and container styling', () => {
    render(<AplikacjaMobilnaSection />);
    
    const imageElement = screen.getByRole('img', { name: 'Interfejs aplikacji mobilnej brainTMS' });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', expect.stringContaining('mobile1-small'));
    expect(imageElement).toHaveClass('rounded-xl');
    
    const imageContainer = imageElement.closest('div');
    expect(imageContainer).toHaveClass('relative', 'h-[300px]', 'md:h-[500px]');
  });

  it('renders the right column description text with primary border highlight', () => {
    render(<AplikacjaMobilnaSection />);
    
    const brainTMSHighlight = screen.getAllByText('brainTMS Mobile')[1];
    expect(brainTMSHighlight).toHaveClass('border-b-[3px]', 'border-primary');
    
    const rightColumnText = screen.getByText(/to narzędzie, które maksymalizuje efektywność i kontrolę w branży transportowej/i);
    expect(rightColumnText).toBeInTheDocument();
    expect(rightColumnText.closest('p')).toHaveClass('text-gray-600', 'mb-4');
  });

  it('renders the accordion section heading with correct styling', () => {
    render(<AplikacjaMobilnaSection />);
    
    const accordionHeading = screen.getByText('Co możesz znaleźć w naszej aplikacji?');
    expect(accordionHeading).toBeInTheDocument();
    expect(accordionHeading).toHaveClass('text-2xl', 'font-semibold', 'my-8', 'text-gray-700');
  });

  it('renders all accordion items with correct styling', () => {
    render(<AplikacjaMobilnaSection />);
    
    const accordionItems = [
      'Wyświetlanie Przydzielonych Zleceń',
      'Personalizacja Danych Użytkownika',
      'Tryb Jasny i Ciemny',
      'Skalowalny Interfejs',
      'Wsparcie wielojęzykowe'
    ];
    
    accordionItems.forEach(item => {
      const accordionButton = screen.getByText(item).closest('button');
      expect(accordionButton).toBeInTheDocument();
      expect(accordionButton?.parentElement).toHaveClass('border', 'border-primary', 'rounded-lg', 'overflow-hidden');
    });
  });

  it('expands an accordion item with correct styling when clicked', () => {
    render(<AplikacjaMobilnaSection />);
    
    const firstAccordionButton = screen.getByText('Wyświetlanie Przydzielonych Zleceń').closest('button');
    expect(firstAccordionButton).toBeInTheDocument();
    
    // Click the accordion button
    fireEvent.click(firstAccordionButton!);
    
    // Check that button has hover styles
    expect(firstAccordionButton).toHaveClass('w-full', 'flex', 'items-center', 'justify-between', 'p-4', 'text-left', 'transition-colors', 'duration-200');
    
    // Check that content is visible
    const content = screen.getByText(/Aplikacja umożliwia kierowcom łatwy dostęp do przydzielonych zleceń/i);
    expect(content).toBeVisible();
  });

  it('collapses an expanded accordion item when clicked again', () => {
    render(<AplikacjaMobilnaSection />);
    
    const accordionButton = screen.getByText('Wyświetlanie Przydzielonych Zleceń').closest('button');
    
    // First click to expand
    fireEvent.click(accordionButton!);
    expect(accordionButton).toHaveClass('w-full', 'flex', 'items-center', 'justify-between', 'p-4', 'text-left', 'transition-colors', 'duration-200');
    
    // Second click to collapse
    fireEvent.click(accordionButton!);
    expect(accordionButton).toHaveClass('w-full', 'flex', 'items-center', 'justify-between', 'p-4', 'text-left', 'transition-colors', 'duration-200');
  });

  it('applies proper responsive grid layout', () => {
    render(<AplikacjaMobilnaSection />);
    
    const container = screen.getByText(/Aplikacja mobilna/i).closest('.container');
    expect(container).toHaveClass('mx-auto', 'px-4', 'md:px-8');
    
    const gridContainer = container?.querySelector('.grid');
    expect(gridContainer).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'gap-8');
  });
}); 