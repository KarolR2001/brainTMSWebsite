import { render, screen } from '@testing-library/react';
import DlaczegoMySection from '../DlaczegoMySection';

// Mock dla framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => {
      const { variants, initial, whileInView, viewport, animate, transition, ...rest } = props;
      // Sprawdzamy, czy przekazane są właściwe propsy animacji
      if (props.className?.includes('grid')) {
        return <div {...rest}>{children}</div>;
      }
      // Sprawdzamy animację dla FeatureCard
      if (initial?.opacity !== 0 || initial?.y !== 50 ||
          whileInView?.opacity !== 1 || whileInView?.y !== 0 ||
          !viewport?.once || 
          transition?.duration !== 0.5) {
        console.error('Nieprawidłowe propsy animacji');
      }
      return <div data-testid="animated-feature-card" {...rest}>{children}</div>;
    },
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
  },
}));

// Mock dla next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} data-testid={props.className?.includes('rounded-t-xl') ? 'feature-image' : 'check-icon'} />;
  },
}));

describe('DlaczegoMySection Component', () => {
  it('renders section with correct heading and styling', () => {
    render(<DlaczegoMySection />);
    
    // Sprawdź sekcję
    const section = screen.getByTestId('dlaczego-my');
    expect(section).toHaveAttribute('id', 'dlaczego-my');
    expect(section).toHaveClass('py-16', 'bg-light');
    
    // Sprawdź container
    const container = section.firstElementChild;
    expect(container).toHaveClass('container', 'mx-auto', 'px-4');
    
    // Sprawdź nagłówek
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveClass('text-4xl', 'md:text-5xl', 'font-bold', 'text-gray-700', 'text-center', 'mb-12');
    
    // Sprawdź podkreślenie "My"
    const mySpan = screen.getByText('My');
    expect(mySpan).toHaveClass('border-b-[7px]', 'border-primary', 'pb-1', 'inline-block');
  });

  it('renders grid with correct responsive layout', () => {
    const { container } = render(<DlaczegoMySection />);
    
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass(
      'grid',
      'grid-cols-1',
      'md:grid-cols-2',
      'xl:grid-cols-4',
      'gap-8'
    );
  });

  it('renders all feature cards with correct data', () => {
    render(<DlaczegoMySection />);
    
    const expectedFeatures = [
      {
        title: 'Organizacja transportu',
        imageSrc: '/org-transp-small.webp',
        items: [
          'harmonogram pojazdów i kierowców',
          'obliczanie rentowności trasy',
          'narzędzia wspierające optymalne wykorzystanie floty'
        ]
      },
      {
        title: 'Efektywne zarządzanie zleceniami',
        imageSrc: '/efek-zarz-small.webp',
        items: [
          'zlecenia transportowe i spedycyjne',
          'monitoring etapów realizacji zlecenia',
          'komunikacja z kierowcą przez aplikację mobilną'
        ]
      },
      {
        title: 'Kontrola finansowa i rachunkowość',
        imageSrc: '/kontr-fin-small.webp',
        items: [
          'automatyczne tworzenie faktur',
          'tworzenie samodzielnych faktur',
          'analiza kosztów floty'
        ]
      },
      {
        title: 'Optymalizacja czasu',
        imageSrc: '/optymal-czasu-small.webp',
        items: [
          'łatwy dostęp do dokumentów',
          'błyskawiczne wyszukiwanie danych',
          'panel dla klienta i przewoźnika'
        ]
      }
    ];

    // Sprawdź, czy wszystkie karty są wyrenderowane
    const cards = screen.getAllByTestId('animated-feature-card');
    expect(cards).toHaveLength(expectedFeatures.length);

    // Sprawdź tytuły
    expectedFeatures.forEach(feature => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
    });

    // Sprawdź elementy listy
    expectedFeatures.forEach(feature => {
      feature.items.forEach(item => {
        expect(screen.getByText(item)).toBeInTheDocument();
      });
    });

    // Sprawdź obrazy
    const mainImages = screen.getAllByTestId('feature-image');
    expectedFeatures.forEach((feature, index) => {
      expect(mainImages[index]).toHaveAttribute('src', feature.imageSrc);
    });
  });

  it('renders feature cards with correct animation delay', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    render(<DlaczegoMySection />);
    
    const cards = screen.getAllByTestId('animated-feature-card');
    expect(cards).toHaveLength(4);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    
    consoleErrorSpy.mockRestore();
  });

  it('renders check icons for all list items', () => {
    render(<DlaczegoMySection />);
    
    // Każda karta ma 3 elementy listy, więc powinno być 12 ikon
    const checkIcons = screen.getAllByTestId('check-icon');
    expect(checkIcons).toHaveLength(12);
    
    checkIcons.forEach(icon => {
      expect(icon).toHaveAttribute('src', '/icons/check.svg');
      expect(icon).toHaveAttribute('alt', 'check');
      expect(icon).toHaveClass('mr-3', 'mt-1', 'min-w-[20px]');
    });
  });
}); 