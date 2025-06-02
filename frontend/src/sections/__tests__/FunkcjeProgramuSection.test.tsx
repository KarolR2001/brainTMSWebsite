import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FunkcjeProgramuSection from '../FunkcjeProgramuSection';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} priority={undefined} />
  },
}));

// Mock framer-motion to avoid animation-related issues in tests
jest.mock('framer-motion', () => {
  const actual = jest.requireActual('framer-motion');
  return {
    __esModule: true,
    ...actual,
    motion: {
      div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
      span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    },
  };
});

describe('FunkcjeProgramuSection', () => {
  test('renders the section with heading and description', () => {
    render(<FunkcjeProgramuSection />);
    
    // Check main heading with new font-semibold class
    const heading = screen.getByText(/Poznaj funkcje programu/i);
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveClass('text-gray-700');
    expect(heading).toHaveClass('font-semibold');
    
    // Check BRAINTMS text with new font-bold class
    const brandText = screen.getByText('BRAINTMS');
    expect(brandText).toBeInTheDocument();
    expect(brandText).toHaveClass('font-bold');
    
    // Check description
    expect(screen.getByText(/To zaawansowany program umożliwiający kompleksowe zarządzanie/i)).toBeInTheDocument();
  });
  
  test('renders tab navigation and content in one bg-background container', () => {
    render(<FunkcjeProgramuSection />);
    const tabContainer = screen.getByTestId('tab-content-spedycja').closest('.bg-background');
    expect(tabContainer).not.toBeNull();
    if (tabContainer) {
      // Sprawdź, czy kontener ma odpowiednie klasy szerokości i zaokrągleń
      expect(tabContainer).toHaveClass('rounded-lg');
      // Sprawdź padding bezpośrednio na kontenerze
      expect(tabContainer).toHaveClass('p-4');
      expect(tabContainer).toHaveClass('md:px-12');
    }
  });
  
  test('renders all tabs with correct styling', () => {
    render(<FunkcjeProgramuSection />);
    
    // Check that all tab buttons are rendered with correct text and styling
    const tabs = [
      { text: 'Funkcje dla spedycji', isActive: true },
      { text: 'Funkcje dla transportu', isActive: false },
      { text: 'Narzędzia', isActive: false }
    ];
    
    tabs.forEach(({ text, isActive }) => {
      const tab = screen.getByText(text);
      expect(tab).toBeInTheDocument();
      
      // Get the parent button element
      const button = tab.closest('button');
      expect(button).toHaveClass('transition-all');
      expect(button).toHaveClass('duration-300');
      
      if (isActive) {
        expect(button).toHaveClass('bg-gray-50');
        expect(button).toHaveClass('text-primary');
        expect(button).toHaveClass('border-primary');
      } else {
        expect(button).toHaveClass('text-gray-500');
        expect(button).toHaveClass('border-transparent');
      }
    });
    
    // Check for tabs with line breaks
    expect(screen.getByText(/Funkcje księgowe/i)).toBeInTheDocument();
    expect(screen.getByText(/komunikację/i)).toBeInTheDocument();
  });
  
  test('shows spedycja tab content by default', () => {
    render(<FunkcjeProgramuSection />);
    
    // First tab (spedycja) should be active by default
    const spedycjaTab = screen.getByTestId('tab-content-spedycja');
    expect(spedycjaTab).not.toHaveClass('hidden');
    
    // Check for some features from the spedycja tab
    expect(screen.getByText('Przeładunki w magazynach i na trasie')).toBeInTheDocument();
    expect(screen.getByText('Zlecenia spedycyjne')).toBeInTheDocument();
  });
  
  test('switches between tabs when clicked', () => {
    render(<FunkcjeProgramuSection />);
    
    // Initially, spedycja tab should be active
    const spedycjaTab = screen.getByTestId('tab-content-spedycja');
    expect(spedycjaTab).not.toHaveClass('hidden');
    
    // Click on transport tab
    const transportButton = screen.getByTestId('tab-transport');
    fireEvent.click(transportButton);
    
    // Check transport tab styling after click
    expect(transportButton).toHaveClass('bg-gray-50');
    expect(transportButton).toHaveClass('text-primary');
    expect(transportButton).toHaveClass('border-primary');
    
    // Now transport tab should be active and spedycja tab should be hidden
    expect(screen.getByTestId('tab-content-transport')).not.toHaveClass('hidden');
    expect(screen.getByTestId('tab-content-spedycja')).toHaveClass('hidden');
    
    // Check for content specific to transport tab
    expect(screen.getByText('Zarządzanie flotą własną')).toBeInTheDocument();
  });
  
  test('renders correct number of features for each tab', () => {
    render(<FunkcjeProgramuSection />);
    
    // Helper function to count visible features
    const countVisibleFeatures = () => {
      const features = screen.getAllByText(/✓/);
      return features.filter(feature => {
        const tabContent = feature.closest('[data-testid^="tab-content-"]');
        return tabContent && !tabContent.classList.contains('hidden');
      }).length;
    };
    
    // Check spedycja tab (default active)
    expect(countVisibleFeatures()).toBe(8); // 8 features in spedycja tab
    
    // Switch to transport tab
    fireEvent.click(screen.getByTestId('tab-transport'));
    expect(countVisibleFeatures()).toBe(9); // 9 features in transport tab
    
    // Switch to ksiegowosc tab
    fireEvent.click(screen.getByTestId('tab-ksiegowosc'));
    expect(countVisibleFeatures()).toBe(5); // 5 features in ksiegowosc tab
    
    // Switch to komunikacja tab
    fireEvent.click(screen.getByTestId('tab-komunikacja'));
    expect(countVisibleFeatures()).toBe(7); // 7 features in komunikacja tab
    
    // Switch to narzedzia tab
    fireEvent.click(screen.getByTestId('tab-narzedzia'));
    expect(countVisibleFeatures()).toBe(7); // 7 features in narzedzia tab
  });
}); 