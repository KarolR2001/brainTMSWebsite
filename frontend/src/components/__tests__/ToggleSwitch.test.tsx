import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleSwitch from '../ToggleSwitch';

describe('ToggleSwitch', () => {
  test('renders monthly and yearly options with correct styling', () => {
    const mockOnChange = jest.fn();
    render(<ToggleSwitch onChange={mockOnChange} />);
    
    const monthlyButton = screen.getByText('MIESIĘCZNIE');
    const yearlyButton = screen.getByText('ROCZNIE (2 MIESIĄCE GRATIS)');
    
    // Sprawdź, czy przyciski są widoczne
    expect(monthlyButton).toBeInTheDocument();
    expect(yearlyButton).toBeInTheDocument();
    
    // Sprawdź style przycisków
    expect(monthlyButton).toHaveClass(
      'py-2',
      'px-3',
      'sm:px-4',
      'text-xs',
      'sm:text-sm',
      'md:text-base',
      'rounded-l-full',
      'font-semibold',
      'transition-colors',
      'duration-150'
    );
    
    expect(yearlyButton).toHaveClass(
      'py-2',
      'px-3',
      'sm:px-4',
      'text-xs',
      'sm:text-sm',
      'md:text-base',
      'rounded-r-full',
      'font-semibold',
      'transition-colors',
      'duration-150'
    );
  });

  test('starts with monthly selected by default', () => {
    const mockOnChange = jest.fn();
    render(<ToggleSwitch onChange={mockOnChange} />);
    
    const monthlyButton = screen.getByText('MIESIĘCZNIE');
    const yearlyButton = screen.getByText('ROCZNIE (2 MIESIĄCE GRATIS)');
    
    // Sprawdź aktywny stan miesięczny
    expect(monthlyButton).toHaveClass('bg-primary', 'text-white');
    expect(yearlyButton).toHaveClass('bg-white', 'text-gray-600', 'border', 'border-gray-300');
  });

  test('switches to yearly when yearly button is clicked', () => {
    const mockOnChange = jest.fn();
    render(<ToggleSwitch onChange={mockOnChange} />);
    
    const yearlyButton = screen.getByText('ROCZNIE (2 MIESIĄCE GRATIS)');
    fireEvent.click(yearlyButton);
    
    // Sprawdź, czy przycisk roczny jest aktywny
    expect(yearlyButton).toHaveClass('bg-primary', 'text-white');
    expect(screen.getByText('MIESIĘCZNIE')).toHaveClass('bg-white', 'text-gray-600');
    
    // Sprawdź, czy callback został wywołany z odpowiednim argumentem
    expect(mockOnChange).toHaveBeenCalledWith(true);
  });

  test('switches back to monthly when monthly button is clicked', () => {
    const mockOnChange = jest.fn();
    render(<ToggleSwitch onChange={mockOnChange} />);
    
    // Najpierw przełącz na roczny
    const yearlyButton = screen.getByText('ROCZNIE (2 MIESIĄCE GRATIS)');
    fireEvent.click(yearlyButton);
    
    // Następnie przełącz z powrotem na miesięczny
    const monthlyButton = screen.getByText('MIESIĘCZNIE');
    fireEvent.click(monthlyButton);
    
    // Sprawdź, czy przycisk miesięczny jest aktywny
    expect(monthlyButton).toHaveClass('bg-primary', 'text-white');
    expect(yearlyButton).toHaveClass('bg-white', 'text-gray-600');
    
    // Sprawdź kolejność wywołań callbacka
    expect(mockOnChange).toHaveBeenCalledTimes(2);
    expect(mockOnChange).toHaveBeenNthCalledWith(1, true);
    expect(mockOnChange).toHaveBeenNthCalledWith(2, false);
  });

  test('does not trigger onChange when clicking already active button', () => {
    const mockOnChange = jest.fn();
    render(<ToggleSwitch onChange={mockOnChange} />);
    
    // Kliknij aktywny przycisk miesięczny
    const monthlyButton = screen.getByText('MIESIĘCZNIE');
    fireEvent.click(monthlyButton);
    
    // Sprawdź, czy callback nie został wywołany
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('has hover effect on inactive buttons', () => {
    const mockOnChange = jest.fn();
    render(<ToggleSwitch onChange={mockOnChange} />);
    
    const yearlyButton = screen.getByText('ROCZNIE (2 MIESIĄCE GRATIS)');
    expect(yearlyButton).toHaveClass('hover:bg-gray-100');
  });
}); 