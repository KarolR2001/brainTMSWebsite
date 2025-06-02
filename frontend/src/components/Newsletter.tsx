'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type SubscriptionStatus = 'idle' | 'submitting' | 'success' | 'error';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubscriptionStatus>('idle');
  const [error, setError] = useState<string | null>(null);

  // Walidacja adresu email
  const validateEmail = (email: string): boolean => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Resetowanie stanu błędów
    setError(null);
    
    // Walidacja pola email
    if (!email) {
      setError('Wprowadź adres e-mail');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Wprowadź poprawny adres e-mail');
      return;
    }
    
    // Symulacja wysyłki
    setStatus('submitting');
    
    try {
      // Symulacja opóźnienia sieciowego
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setStatus('success');
      setEmail('');
      
      // Reset formularza po 3 sekundach
      setTimeout(() => {
        setStatus('idle');
      }, 3000);
    } catch (error) {
      setStatus('error');
      setError('Wystąpił błąd. Spróbuj ponownie.');
    }
  };

  return (
    <div className="text-center md:text-left">
      <h3 className="text-lg font-bold mb-4 inline-block border-b-2 border-primary pb-2">Newsletter</h3>
      
      {status === 'success' ? (
        <motion.p
          className="text-green-400 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Dziękujemy za zapisanie się!
        </motion.p>
      ) : (
        <>
          <p className="text-gray-300 text-sm mb-2">
            Bądź na bieżąco z nowościami.
          </p>
          
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <div className="relative flex-grow mr-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={`w-full px-3 py-1.5 text-sm rounded-md bg-gray-700 text-white border ${
                    error ? 'border-red-500' : 'border-gray-600'
                  } focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-colors`}
                  placeholder="Twój adres e-mail"
                  value={email}
                  onChange={handleEmailChange}
                  aria-invalid={error ? 'true' : 'false'}
                  disabled={status === 'submitting'}
                />
              </div>
              
              <button
                type="submit"
                className="px-3 py-1.5 text-sm bg-primary hover:bg-primary/90 text-white rounded-md transition-colors flex items-center justify-center"
                disabled={status === 'submitting'}
                aria-label="Zapisz się do newslettera"
              >
                {status === 'submitting' ? (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
            {error && (
              <motion.p
                className="text-red-500 text-xs mt-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {error}
              </motion.p>
            )}
          </form>
        </>
      )}
    </div>
  );
};

export default Newsletter; 