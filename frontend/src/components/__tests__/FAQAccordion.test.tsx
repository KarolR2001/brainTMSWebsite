import { render, screen, fireEvent } from '@testing-library/react';
import FAQAccordion, { FAQItem } from '../FAQAccordion';

const mockItems: FAQItem[] = [
  {
    id: 'question-1',
    question: "Test Question 1",
    answer: "Test Answer 1"
  },
  {
    id: 'question-2',
    question: "Test Question 2",
    answer: "Test Answer 2"
  }
];

describe('FAQAccordion', () => {
  it('renders all questions', () => {
    render(<FAQAccordion items={mockItems} />);
    
    mockItems.forEach(item => {
      expect(screen.getByText(item.question)).toBeInTheDocument();
    });
  });

  it('shows answer when question is clicked', () => {
    render(<FAQAccordion items={mockItems} />);
    
    const firstQuestion = screen.getByText(mockItems[0].question);
    fireEvent.click(firstQuestion);
    
    expect(screen.getByText(mockItems[0].answer)).toBeInTheDocument();
  });

  it('hides answer when question is clicked again', () => {
    render(<FAQAccordion items={mockItems} />);
    
    const firstQuestion = screen.getByText(mockItems[0].question).closest('button');
    fireEvent.click(firstQuestion!);
    
    const answer = screen.getByText(mockItems[0].answer);
    expect(answer).toBeInTheDocument();
    
    fireEvent.click(firstQuestion!);
    
    // AnimatePresence i framer-motion obsługują wyjście elementu,
    // w teście sprawdzamy czy aria-expanded zostało zmienione na false
    expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  });

  it('handles multiple questions independently', () => {
    render(<FAQAccordion items={mockItems} />);
    
    // Find all buttons containing the questions
    const firstQuestion = screen.getByText(mockItems[0].question).closest('button');
    const secondQuestion = screen.getByText(mockItems[1].question).closest('button');
    
    // Open first question
    fireEvent.click(firstQuestion!);
    expect(screen.getByText(mockItems[0].answer)).toBeInTheDocument();
    
    // Open second question
    fireEvent.click(secondQuestion!);
    expect(screen.getByText(mockItems[1].answer)).toBeInTheDocument();
  });

  it('is accessible using keyboard', () => {
    render(<FAQAccordion items={mockItems} />);
    
    const firstQuestion = screen.getByText(mockItems[0].question).closest('button');
    
    // Check if the button is focusable
    if (firstQuestion) {
      firstQuestion.focus();
      expect(document.activeElement).toBe(firstQuestion);
      
      // Check if Enter key works
      fireEvent.keyDown(firstQuestion, { key: 'Enter' });
      expect(screen.getByText(mockItems[0].answer)).toBeInTheDocument();
    }
  });
  
  it('has the correct styling and icons', () => {
    render(<FAQAccordion items={mockItems} />);
    
    // Check if checkmark icons exist
    const checkmarkIcons = document.querySelectorAll('svg path[d="M5 13l4 4L19 7"]');
    expect(checkmarkIcons.length).toBe(mockItems.length);
    
    // Check if the border is present
    const accordionItems = document.querySelectorAll('.border.border-primary.rounded-lg');
    expect(accordionItems.length).toBe(mockItems.length);
  });
}); 