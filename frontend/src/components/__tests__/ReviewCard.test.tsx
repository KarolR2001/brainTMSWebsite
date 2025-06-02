import { render, screen } from '@testing-library/react';
import ReviewCard from '../ReviewCard';

// Mock dla framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { whileHover, whileInView, variants, viewport, animate, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
  },
}));

// Mock dla next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, onError, ...props }: any) => {
    return (
      <img
        src={src}
        alt={alt}
        {...props}
        data-testid="review-logo"
        onError={() => onError && onError()}
      />
    );
  },
}));

// Sample review data for testing
const testReview = {
  logoUrl: '/logos/company1.png',
  companyName: 'Test Company',
  industry: 'Test Industry',
  quote: 'This is a test quote',
  rating: 4
};

describe('ReviewCard Component', () => {
  it('displays company initial instead of logo', () => {
    render(<ReviewCard {...testReview} />);
    
    // Sprawdź, czy wyświetla się pierwsza litera nazwy firmy
    const initial = screen.getByText('T');
    expect(initial).toHaveClass('text-xl', 'font-bold', 'text-primary');
  });

  it('displays company name and industry with correct styling', () => {
    render(<ReviewCard {...testReview} />);
    
    const companyName = screen.getByText(testReview.companyName);
    expect(companyName).toHaveClass('font-semibold', 'text-lg', 'text-gray-800');
    
    const industry = screen.getByText(testReview.industry);
    expect(industry).toHaveClass('text-sm', 'text-gray-500');
  });

  it('displays the quote with correct formatting', () => {
    render(<ReviewCard {...testReview} />);
    
    const quote = screen.getByText(`"${testReview.quote}"`);
    expect(quote).toHaveClass('text-gray-600', 'italic', 'mb-4');
  });

  it('renders the correct number of stars based on rating', () => {
    const { container } = render(<ReviewCard {...testReview} />);
    
    const stars = container.querySelectorAll('svg');
    expect(stars).toHaveLength(5);
    
    // Sprawdź wypełnione gwiazdki (powinny być text-primary)
    for (let i = 0; i < testReview.rating; i++) {
      expect(stars[i]).toHaveClass('text-primary');
    }
    
    // Sprawdź puste gwiazdki (powinny być text-gray-300)
    for (let i = testReview.rating; i < 5; i++) {
      expect(stars[i]).toHaveClass('text-gray-300');
    }
  });

  it('applies proper styling and animation classes to the card', () => {
    const { container } = render(<ReviewCard {...testReview} />);
    
    const card = container.firstChild;
    expect(card).toHaveClass(
      'bg-white',
      'rounded-xl',
      'shadow-md',
      'overflow-hidden',
      'p-6',
      'h-full',
      'flex',
      'flex-col'
    );
  });

  it('has proper initial container styling', () => {
    render(<ReviewCard {...testReview} />);
    
    const initialContainer = screen.getByText('T').closest('div');
    expect(initialContainer).toHaveClass(
      'w-16',
      'h-16',
      'mr-4',
      'rounded-full',
      'border-2',
      'border-gray-200',
      'bg-gray-100',
      'flex',
      'items-center',
      'justify-center'
    );
  });

  it('displays correct initial for different company names', () => {
    const reviewWithDifferentName = {
      ...testReview,
      companyName: 'Acme Corporation'
    };
    
    render(<ReviewCard {...reviewWithDifferentName} />);
    
    const initial = screen.getByText('A');
    expect(initial).toHaveClass('text-xl', 'font-bold', 'text-primary');
  });
}); 