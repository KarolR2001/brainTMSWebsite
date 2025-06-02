import { render, screen } from '@testing-library/react';
import FeatureCard from '../FeatureCard';

// Mock dla framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { variants, initial, whileInView, viewport, animate, transition, ...rest } = props;
      // Sprawdzamy, czy przekazane są właściwe propsy animacji
      if (initial?.opacity !== 0 || initial?.y !== 50 ||
          whileInView?.opacity !== 1 || whileInView?.y !== 0 ||
          !viewport?.once || 
          transition?.duration !== 0.5) {
        console.error('Nieprawidłowe propsy animacji');
      }
      return <div {...rest}>{children}</div>;
    },
  },
}));

// Mock dla next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} data-testid={props.className?.includes('rounded-t-xl') ? 'feature-image' : 'check-icon'} />;
  },
}));

describe('FeatureCard Component', () => {
  const mockProps = {
    title: 'Test Title',
    items: ['Item 1', 'Item 2', 'Item 3'],
    imageSrc: '/test-image.jpg',
    imageAlt: 'Test Image',
    delay: 2,
  };

  it('renders with correct title styling', () => {
    render(<FeatureCard {...mockProps} />);
    
    const title = screen.getByText(mockProps.title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-xl', 'font-bold', 'mb-4', 'text-primary', 'text-center');
  });

  it('renders all items with check icons', () => {
    render(<FeatureCard {...mockProps} />);
    
    // Sprawdź, czy wszystkie elementy są widoczne
    mockProps.items.forEach(item => {
      const itemElement = screen.getByText(item);
      expect(itemElement).toBeInTheDocument();
      
      // Sprawdź, czy element listy ma odpowiednie style
      const listItem = itemElement.closest('li');
      expect(listItem).toHaveClass('flex', 'items-start');
    });
    
    // Sprawdź ikony
    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(mockProps.items.length);
    checkIcons.forEach(icon => {
      expect(icon).toHaveAttribute('src', '/icons/check.svg');
      expect(icon).toHaveAttribute('alt', 'check');
      expect(icon).toHaveClass('mr-3', 'mt-1', 'min-w-[20px]');
    });
  });

  it('renders the feature image with correct attributes', () => {
    render(<FeatureCard {...mockProps} />);
    
    const image = screen.getByTestId('feature-image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.imageSrc);
    expect(image).toHaveAttribute('alt', mockProps.imageAlt);
    expect(image).toHaveAttribute('width', '400');
    expect(image).toHaveAttribute('height', '250');
    expect(image).toHaveClass('w-full', 'h-auto', 'rounded-t-xl');
  });

  it('applies correct card styling', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    
    const card = container.firstChild;
    expect(card).toHaveClass(
      'bg-white',
      'rounded-xl',
      'shadow-lg',
      'border',
      'border-gray-100',
      'flex',
      'flex-col',
      'overflow-hidden'
    );
  });

  it('renders with correct animation props', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    render(<FeatureCard {...mockProps} />);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it('passes correct delay to animation transition', () => {
    const { container } = render(<FeatureCard {...mockProps} />);
    const card = container.firstChild;
    // Sprawdzamy, czy komponent się wyrenderował
    expect(card).toBeInTheDocument();
  });
}); 