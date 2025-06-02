'use client';

import { useState, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  
  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, id: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleAccordion(id);
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div key={item.id} className="border border-primary rounded-lg overflow-hidden">
          <button
            onClick={() => toggleAccordion(item.id)}
            onKeyDown={(e) => handleKeyDown(e, item.id)}
            className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
              activeAccordion === item.id 
                ? 'bg-primary text-white font-semibold mb-3' 
                : 'hover:bg-gray-100'
            }`}
            aria-expanded={activeAccordion === item.id}
            role="button"
            tabIndex={0}
          >
            <div className="flex items-center">
              <span className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                activeAccordion === item.id 
                  ? 'bg-white' 
                  : 'bg-primary'
              }`}>
                <svg xmlns="http://www.w3.org/2000/svg" 
                     className={`h-3 w-3 ${
                       activeAccordion === item.id 
                         ? 'text-primary' 
                         : 'text-white'
                     }`} 
                     fill="none" 
                     viewBox="0 0 24 24" 
                     stroke="currentColor"
                     aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{item.question}</span>
            </div>
            <svg
              className={`w-5 h-5 transition-transform ${
                activeAccordion === item.id 
                  ? 'rotate-180 text-white' 
                  : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <AnimatePresence>
            {activeAccordion === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="px-4 pb-4"
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
} 