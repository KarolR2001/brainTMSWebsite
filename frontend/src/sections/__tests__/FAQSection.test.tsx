import { render, screen } from '@testing-library/react';
import FAQSection from '../FAQSection';

describe('FAQSection', () => {
  it('renders the section title', () => {
    render(<FAQSection />);
    expect(screen.getByText('Najczęściej Zadawane Pytania')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<FAQSection />);
    expect(screen.getByText(/Dowiedz się więcej o systemie brainTMS/)).toBeInTheDocument();
  });

  it('renders all FAQ items', () => {
    render(<FAQSection />);
    expect(screen.getByText('Jak zarządzać flotą usługodawców w brainTMS?')).toBeInTheDocument();
    expect(screen.getByText('W jaki sposób zautomatyzować proces fakturowania?')).toBeInTheDocument();
    expect(screen.getByText('Jakie korzyści daje kierowcom aplikacja mobilna brainTMS?')).toBeInTheDocument();
  });

  it('renders the contact section', () => {
    render(<FAQSection />);
    expect(screen.getByText(/Potrzebujesz więcej informacji/)).toBeInTheDocument();
    expect(screen.getByText('Skontaktuj się z nami')).toBeInTheDocument();
  });

  it('has correct link to contact section', () => {
    render(<FAQSection />);
    const contactLink = screen.getByText('Skontaktuj się z nami');
    expect(contactLink.closest('a')).toHaveAttribute('href', '#kontakt');
  });
  
  it('has decorative bar above the title', () => {
    render(<FAQSection />);
    const decorativeLine = document.querySelector('.w-\\[12rem\\].h-2.bg-primary');
    expect(decorativeLine).toBeInTheDocument();
  });
}); 