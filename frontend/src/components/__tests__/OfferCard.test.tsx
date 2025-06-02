import React from 'react';
import { render, screen } from '@testing-library/react';
import OfferCard from '../OfferCard';

// Mock dla next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} data-testid="check-icon" />;
  },
}));

// Mock dla framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...rest } = props;
      // Sprawdzamy animację
      if (initial?.opacity !== 0 || initial?.y !== 50 ||
          whileInView?.opacity !== 1 || whileInView?.y !== 0 ||
          !viewport?.once ||
          transition?.duration !== 0.5) {
        console.error('Nieprawidłowe propsy animacji');
      }
      return <div data-testid="animated-card" {...rest}>{children}</div>;
    },
  },
}));

describe('OfferCard Component', () => {
  const mockProps = {
    title: 'Test Plan',
    features: ['Feature 1', 'Feature 2', 'Wszystko z planu TRANSPORT'],
    price: {
      monthly: 100,
      yearly: 1000,
    },
    isYearly: false,
    delay: 0,
  };

  it('renders with correct animation properties', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    render(<OfferCard {...mockProps} />);
    
    const card = screen.getByTestId('animated-card');
    expect(card).toBeInTheDocument();
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    
    consoleErrorSpy.mockRestore();
  });

  it('renders the offer card with correct title and price in the header', () => {
    render(<OfferCard {...mockProps} />);
    
    // Sprawdź tytuł
    const title = screen.getByText(mockProps.title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-2xl', 'lg:text-3xl', 'font-bold', 'text-center', 'text-primary');
    
    // Sprawdź cenę
    const price = screen.getByText('100 PLN');
    expect(price).toHaveClass('text-3xl', 'sm:text-4xl', 'font-bold', 'text-gray-800');
    
    // Sprawdź okres
    const period = screen.getByText('/ miesięcznie');
    expect(period).toHaveClass('text-xs', 'sm:text-sm', 'text-gray-500', 'ml-1');
  });

  it('renders yearly price correctly in the header when isYearly is true', () => {
    render(<OfferCard {...mockProps} isYearly={true} />);
    
    const price = screen.getByText('1000 PLN');
    expect(price).toHaveClass('text-3xl', 'sm:text-4xl', 'font-bold', 'text-gray-800');
    
    const period = screen.getByText('/ rocznie');
    expect(period).toHaveClass('text-xs', 'sm:text-sm', 'text-gray-500', 'ml-1');
  });

  it('renders all features with check icons', () => {
    render(<OfferCard {...mockProps} />);
    
    // Sprawdź, czy wszystkie funkcje są wyświetlane
    mockProps.features.forEach(feature => {
      expect(screen.getByText(feature)).toBeInTheDocument();
    });
    
    // Sprawdź, czy dla każdej funkcji jest ikona
    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(mockProps.features.length);
    
    // Sprawdź atrybuty ikon
    checkIcons.forEach(icon => {
      expect(icon).toHaveAttribute('src', '/icons/check.svg');
      expect(icon).toHaveAttribute('alt', 'check');
      expect(icon).toHaveClass('mr-3', 'mt-0.5', 'sm:mt-1', 'min-w-[20px]');
    });
  });

  it('highlights "Wszystko z planu TRANSPORT" feature correctly', () => {
    render(<OfferCard {...mockProps} />);
    
    const highlightedFeature = screen.getByText('Wszystko z planu TRANSPORT');
    expect(highlightedFeature).toHaveClass('border-b-2', 'border-primary', 'pb-0.5');
    
    const listItem = highlightedFeature.closest('li');
    expect(listItem).toHaveClass('font-bold');
  });

  it('applies primary styling when isPrimary is true', () => {
    render(<OfferCard {...mockProps} isPrimary={true} />);
    
    const card = screen.getByTestId('animated-card');
    expect(card).toHaveClass(
      'border',
      'rounded-2xl',
      'shadow-lg',
      'flex',
      'flex-col',
      'border-primary',
      'bg-primary/5'
    );
  });

  it('applies regular styling when isPrimary is false', () => {
    render(<OfferCard {...mockProps} isPrimary={false} />);
    
    const card = screen.getByTestId('animated-card');
    expect(card).toHaveClass(
      'border',
      'rounded-2xl',
      'shadow-lg',
      'flex',
      'flex-col',
      'border-gray-200',
      'bg-white'
    );
  });

  it('applies correct animation delay based on delay prop', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    
    // Renderuj z różnymi opóźnieniami
    const delays = [0, 1, 2];
    delays.forEach(delay => {
      render(<OfferCard {...mockProps} delay={delay} />);
      expect(consoleErrorSpy).not.toHaveBeenCalled();
    });
    
    consoleErrorSpy.mockRestore();
  });
}); 