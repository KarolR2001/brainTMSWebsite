'use client';

import { useState } from 'react';

interface ToggleSwitchProps {
  onChange: (isYearly: boolean) => void;
}

const ToggleSwitch = ({ onChange }: ToggleSwitchProps) => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    const newValue = !isYearly;
    setIsYearly(newValue);
    onChange(newValue);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-0 mb-10">
      <button
        onClick={() => {
          if (isYearly) handleToggle();
        }}
        className={`py-2 px-3 sm:px-4 text-xs sm:text-sm md:text-base rounded-l-full font-semibold transition-colors duration-150 ${
          !isYearly
            ? 'bg-primary text-white'
            : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
        }`}
      >
        MIESIĘCZNIE
      </button>
      <button
        onClick={() => {
          if (!isYearly) handleToggle();
        }}
        className={`py-2 px-3 sm:px-4 text-xs sm:text-sm md:text-base rounded-r-full font-semibold transition-colors duration-150 ${
          isYearly
            ? 'bg-primary text-white'
            : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-100'
        }`}
      >
        ROCZNIE (2 MIESIĄCE GRATIS)
      </button>
    </div>
  );
};

export default ToggleSwitch; 