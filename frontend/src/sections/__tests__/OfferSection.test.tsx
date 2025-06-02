import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OfferSection from '../OfferSection';

// Mock dla ToggleSwitch
jest.mock('@/components/ToggleSwitch', () => {
  return ({ onChange }: { onChange: (isYearly: boolean) => void }) => (
    <div data-testid="toggle-switch">
      <button onClick={() => onChange(false)}>MIESIĘCZNIE</button>
      <button onClick={() => onChange(true)}>ROCZNIE</button>
    </div>
  );
});

// Mock dla OfferCard
jest.mock('@/components/OfferCard', () => {
  return ({ title, features, price, isYearly, isPrimary, delay }: { 
    title: string;
    features: string[];
    price: { monthly: number; yearly: number };
    isYearly: boolean;
    isPrimary?: boolean;
    delay: number;
  }) => (
    <div 
      data-testid={`offer-card-${title}`}
      className={isPrimary ? 'primary' : ''}
    >
      <h3>{title}</h3>
      <p>Price: {isYearly ? price.yearly : price.monthly}</p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
});

// Mock dla framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { variants, initial, whileInView, viewport, animate, transition, ...rest } = props;
      return <div {...rest}>{children}</div>;
    },
    h2: ({ children, ...props }: any) => {
      const { initial, whileInView, viewport, transition, ...rest } = props;
      // Sprawdzamy animację nagłówka
      if (initial?.opacity !== 0 || initial?.y !== -20 ||
          whileInView?.opacity !== 1 || whileInView?.y !== 0 ||
          !viewport?.once ||
          transition?.duration !== 0.5) {
        console.error('Nieprawidłowe propsy animacji nagłówka');
      }
      return <h2 data-testid="animated-heading" {...rest}>{children}</h2>;
    },
  },
}));

describe('OfferSection Component', () => {
  it('renders section with correct structure and styling', () => {
    const { container } = render(<OfferSection />);
    
    // Sprawdź sekcję
    const section = container.querySelector('section');
    expect(section).toHaveAttribute('id', 'oferta');
    expect(section).toHaveClass('py-10', 'bg-white');
    
    // Sprawdź container
    const mainContainer = container.querySelector('.container');
    expect(mainContainer).toHaveClass('mx-auto', 'px-4');
    
    // Sprawdź dekoracyjny pasek
    const decorativeLine = container.querySelector('.bg-primary');
    expect(decorativeLine).toHaveClass('w-[12rem]', 'h-2', 'mx-auto', 'mb-6', 'rounded-full');
  });

  it('renders heading with correct animation properties', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    render(<OfferSection />);
    
    const heading = screen.getByTestId('animated-heading');
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'font-bold', 'text-gray-700', 'text-center', 'mb-6');
    expect(heading).toHaveTextContent('Zobacz ofertę');
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    
    consoleErrorSpy.mockRestore();
  });

  it('renders toggle switch and responds to changes', () => {
    render(<OfferSection />);
    
    const toggleSwitch = screen.getByTestId('toggle-switch');
    expect(toggleSwitch).toBeInTheDocument();
    
    // Test przełączania
    const yearlyButton = screen.getByText('ROCZNIE');
    fireEvent.click(yearlyButton);
    
    // Sprawdź, czy karty zostały zaktualizowane
    const transportCard = screen.getByTestId('offer-card-Transport');
    expect(transportCard).toHaveTextContent('Price: 1500');
    
    const spedycjaCard = screen.getByTestId('offer-card-Spedycja');
    expect(spedycjaCard).toHaveTextContent('Price: 2500');
  });

  it('renders offer cards with correct data and layout', () => {
    render(<OfferSection />);
    
    const expectedOffers = [
      {
        title: 'Transport',
        price: { monthly: 150, yearly: 1500 },
        features: [
          'Tworzenie i edycja zleceń transportowych',
          'Automatyczne tworzenie faktur',
          'Przypomnienie o płatnościach',
          'Szczegółowe raporty',
          'Przypomnienie o upływie terminu polisy',
          'Tworzenie kont dla pracowników',
          'Archiwizacja dokumentów',
        ],
      },
      {
        title: 'Spedycja',
        price: { monthly: 250, yearly: 2500 },
        features: [
          'Wszystko z planu TRANSPORT',
          'Przegląd statusu realizacji zleceń',
          'Przydzielanie roli użytkownikom',
          'Harmonogram pojazdów',
          'Monitorowanie płatności',
          'Automatyczne obliczanie prowizji',
          'Możliwość dodania własnych spedytorów',
        ],
        isPrimary: true,
      },
    ];
    
    // Sprawdź karty
    expectedOffers.forEach((offer) => {
      const card = screen.getByTestId(`offer-card-${offer.title}`);
      expect(card).toBeInTheDocument();
      
      // Sprawdź tytuł
      expect(card).toHaveTextContent(offer.title);
      
      // Sprawdź cenę (domyślnie miesięczna)
      expect(card).toHaveTextContent(`Price: ${offer.price.monthly}`);
      
      // Sprawdź funkcje
      offer.features.forEach((feature) => {
        expect(card).toHaveTextContent(feature);
      });
      
      // Sprawdź, czy karta premium ma odpowiednią klasę
      if (offer.isPrimary) {
        expect(card).toHaveClass('primary');
      }
    });
  });

  it('renders responsive grid layout', () => {
    const { container } = render(<OfferSection />);
    
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'gap-8'
    );
  });
}); 