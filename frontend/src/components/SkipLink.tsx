'use client';

import React from 'react';

interface SkipLinkProps {
  targetId: string;
  label?: string;
  className?: string;
}

const SkipLink: React.FC<SkipLinkProps> = ({ 
  targetId, 
  label = 'Przejdź do głównej treści', 
  className = '' 
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.setAttribute('tabindex', '-1'); // Umożliwia fokusowanie na elemencie, który normalnie nie jest focusable
      targetElement.focus();
      // Można usunąć tabindex po chwili, jeśli jest taka potrzeba, aby nie zaśmiecać DOM
      // setTimeout(() => targetElement.removeAttribute('tabindex'), 1000);
    }
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={handleClick}
      className={`sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:p-3 focus:bg-primary focus:text-white focus:rounded-md focus:shadow-lg transition-all duration-150 ${className}`}
    >
      {label}
    </a>
  );
};

export default SkipLink; 