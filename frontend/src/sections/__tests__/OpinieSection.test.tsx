import { render, screen, fireEvent } from '@testing-library/react';
import OpinieSection from '../OpinieSection';

// Mock the ReviewCard component
jest.mock('@/components/ReviewCard', () => {
  return function MockReviewCard({ companyName, industry, quote, rating }: any) {
    return (
      <div data-testid="review-card" className="mock-review-card">
        <h3>{companyName}</h3>
        <p>{industry}</p>
        <p>"{quote}"</p>
        <div data-testid="rating">{rating}</div>
      </div>
    );
  };
});

// Mock the framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { whileInView, variants, viewport, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    h2: ({ children, ...props }: any) => {
      const { variants, ...rest } = props;
      return <h2 {...rest}>{children}</h2>;
    },
    p: ({ children, ...props }: any) => {
      const { variants, ...rest } = props;
      return <p {...rest}>{children}</p>;
    },
  },
}));

// Mock the window resize event
const originalInnerWidth = window.innerWidth;
const resizeWindow = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('OpinieSection Component', () => {
  // Reset the window innerWidth after each test
  afterEach(() => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  it('renders section with correct id and styling', () => {
    render(<OpinieSection />);
    
    const section = screen.getByTestId('opinie-section');
    expect(section).toHaveAttribute('id', 'opinie');
    expect(section).toHaveClass('py-12', 'md:py-10', 'bg-white');
  });

  it('displays the correct heading and subheading', () => {
    render(<OpinieSection />);
    
    expect(screen.getByRole('heading', { name: /Co mówią nasi klienci/i })).toBeInTheDocument();
    expect(screen.getByText(/Poznaj opinie firm, które zaufały naszemu systemowi/i)).toBeInTheDocument();
  });

  it('renders decorative line element', () => {
    render(<OpinieSection />);
    
    const decorativeLine = document.querySelector('.w-\\[12rem\\].h-2.bg-primary');
    expect(decorativeLine).toBeInTheDocument();
  });

  describe('Desktop View', () => {
    beforeEach(() => {
      resizeWindow(1200);
    });

    it('renders grid layout with all review cards', () => {
      render(<OpinieSection />);
      
      const desktopGrid = document.querySelector('.sm\\:grid');
      const reviewCardsInGrid = desktopGrid?.querySelectorAll('[data-testid="review-card"]');
      expect(reviewCardsInGrid).toHaveLength(6);
    });

    it('does not show carousel navigation in desktop view', () => {
      render(<OpinieSection />);
      
      const desktopGrid = document.querySelector('.sm\\:grid');
      const mobileCarousel = document.querySelector('.sm\\:hidden');
      
      expect(desktopGrid).toBeInTheDocument();
      expect(desktopGrid).toHaveClass('sm:grid-cols-2', 'lg:grid-cols-3');
      expect(mobileCarousel).toHaveClass('sm:hidden');
    });
  });

  describe('Mobile View', () => {
    beforeEach(() => {
      resizeWindow(500);
    });

    it('renders carousel with navigation buttons', () => {
      render(<OpinieSection />);
      
      expect(screen.getByLabelText('Previous review')).toBeInTheDocument();
      expect(screen.getByLabelText('Next review')).toBeInTheDocument();
    });

    it('shows correct number of pagination indicators', () => {
      render(<OpinieSection />);
      
      const paginationDots = screen.getAllByLabelText(/Go to slide/i);
      expect(paginationDots.length).toBe(6); // 6 reviews = 6 dots on mobile
    });

    it('navigates through carousel when clicking buttons', () => {
      render(<OpinieSection />);
      
      const nextButton = screen.getByLabelText('Next review');
      const prevButton = screen.getByLabelText('Previous review');
      const paginationDots = screen.getAllByLabelText(/Go to slide/i);
      
      // Initial state
      expect(paginationDots[0]).toHaveClass('bg-primary');
      expect(paginationDots[1]).toHaveClass('bg-gray-300');
      
      // Click next
      fireEvent.click(nextButton);
      expect(paginationDots[0]).toHaveClass('bg-gray-300');
      expect(paginationDots[1]).toHaveClass('bg-primary');
      
      // Click prev
      fireEvent.click(prevButton);
      expect(paginationDots[0]).toHaveClass('bg-primary');
      expect(paginationDots[1]).toHaveClass('bg-gray-300');
    });

    it('updates active pagination indicator', () => {
      render(<OpinieSection />);
      
      const paginationDots = screen.getAllByLabelText(/Go to slide/i);
      
      // Click second dot
      fireEvent.click(paginationDots[1]);
      expect(paginationDots[1]).toHaveClass('bg-primary');
      expect(paginationDots[0]).toHaveClass('bg-gray-300');
    });
  });

  it('renders review cards with correct content', () => {
    render(<OpinieSection />);
    
    // Check first review in desktop view
    const desktopGrid = document.querySelector('.sm\\:grid');
    const firstDesktopCard = desktopGrid?.querySelector('[data-testid="review-card"]');
    
    expect(firstDesktopCard?.querySelector('h3')?.textContent).toBe('TransLog Sp. z o.o.');
    expect(firstDesktopCard?.querySelector('p')?.textContent).toBe('Transport i logistyka');
    expect(firstDesktopCard?.querySelectorAll('p')[1]?.textContent).toMatch(/Wasza aplikacja to prawdziwy Game Changer/i);
    
    // Check rating
    const rating = firstDesktopCard?.querySelector('[data-testid="rating"]');
    expect(rating?.textContent).toBe('5');
  });
}); 