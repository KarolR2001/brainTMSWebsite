'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navigation = ({ forceBackground = false }: { forceBackground?: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Obsługa efektu scrollowania - zmiana koloru tła
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (isDropdownOpen && target && !target.closest('.dropdown-container')) {
          setIsDropdownOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isDropdownOpen]);

  // Funkcja pomocnicza do generowania linków
  const getHref = (section: string) => {
    if (pathname === '/') {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  return (
    <nav 
      aria-label="Główna nawigacja"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        forceBackground || isScrolled ? 'bg-[#161717]' : 'bg-transparent'
      }`}
    >
      <div className={`container-section transition-all duration-300 ${
        isScrolled ? 'py-1' : 'py-4'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.webp" 
                alt="BrainTMS Logo" 
                width={200} 
                height={150} 
                className={`transition-all duration-300 ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}
                priority={true}
              />
            </Link>
          </div>

          {/* Menu Desktop - teraz wycentrowane */}
          <div className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-8">
              <Link href={getHref('aplikacja')} className="text-light hover:text-primary text-xl transition-colors relative group">
                Aplikacja
                <span className="block h-0.5 bg-secondary absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href={getHref('funkcje-programu')} className="text-light hover:text-primary text-xl transition-colors relative group">
                Funkcje
                <span className="block h-0.5 bg-secondary absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href={getHref('oferta')} className="text-light hover:text-primary text-xl transition-colors relative group">
                Oferta
                <span className="block h-0.5 bg-secondary absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href={getHref('faq')} className="text-light hover:text-primary text-xl transition-colors relative group">
                FAQ
                <span className="block h-0.5 bg-secondary absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
              <Link href={getHref('kontakt')} className="text-light hover:text-primary text-xl transition-colors relative group">
                Kontakt
                <span className="block h-0.5 bg-secondary absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </Link>
            </div>
          </div>

          {/* Dropdown - teraz z kolorem primary i ikoną dropdown */}
          <div className="hidden md:block dropdown-container">
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-primary text-light border border-primary px-4 py-2 rounded hover:bg-opacity-90 transition-colors flex items-center space-x-2"
                aria-expanded={isDropdownOpen}
                aria-controls="login-dropdown-content"
              >
                <span>Zaloguj się</span>
                <svg 
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 9l-7 7-7-7" 
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <motion.div
                  id="login-dropdown-content"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-1 w-38 bg-[#161717] border border-gray-700 rounded shadow-lg"
                >
                  <a
                    href="https://kierowca.braintms.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-light hover:bg-primary transition-colors"
                  >
                    Kierowca
                  </a>
                  <a
                    href="https://spedytor.braintms.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-light hover:bg-primary transition-colors"
                  >
                    Spedytor
                  </a>
                </motion.div>
              )}
            </div>
          </div>

          {/* Hamburger Menu dla Mobile */}
          <div className="md:hidden" data-testid="mobile-menu-container">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu-content"
              aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - zajmujące pełny ekran */}
      {isMenuOpen && (
        <motion.div
          id="mobile-menu-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#161717] z-40 flex items-center justify-center"
          data-testid="mobile-menu-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="mobile-menu-heading"
        >
          <h2 id="mobile-menu-heading" className="sr-only">Menu główne mobilne</h2>
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-light focus:outline-none"
              data-testid="mobile-menu-close"
              aria-label="Zamknij menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center space-y-8 p-8">
            <Link 
              href={getHref('aplikacja')}
              className="text-light text-2xl hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Aplikacja
            </Link>
            <Link 
              href={getHref('funkcje-programu')}
              className="text-light text-2xl hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Funkcje
            </Link>
            <Link 
              href={getHref('oferta')}
              className="text-light text-2xl hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Oferta
            </Link>
            <Link 
              href={getHref('faq')}
              className="text-light text-2xl hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              href={getHref('kontakt')}
              className="text-light text-2xl hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>

            <div className="pt-8 border-t border-gray-700 w-64 text-center">
              <div className="text-light text-2xl mb-6">Zaloguj się</div>
              <div className="flex flex-col space-y-4">
                <a
                  href="https://kierowca.braintms.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-light px-6 py-3 rounded text-xl"
                >
                  Kierowca
                </a>
                <a
                  href="https://spedytor.braintms.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-100 text-light px-6 py-3 rounded text-xl"
                >
                  Spedytor
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation; 