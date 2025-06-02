'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Newsletter from './Newsletter';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const [showCookieNotification, setShowCookieNotification] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Sprawdź, czy użytkownik już zaakceptował pliki cookie
    if (typeof window !== 'undefined') {
      const cookiesAccepted = localStorage.getItem('cookiesAccepted');
      if (!cookiesAccepted) {
        setShowCookieNotification(true);
      }
    }
  }, []);

  const acceptCookies = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiesAccepted', 'true');
    }
    setShowCookieNotification(false);
  };

  // Animacje
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Funkcja pomocnicza do generowania linków w stopce
  const getFooterHref = (section: string) => {
    if (pathname === '/') {
      return `#${section}`;
    }
    return `/#${section}`;
  };

  return (
    <footer 
      data-testid="footer" 
      className="bg-[#161717] text-white"
      aria-label="Stopka strony"
    >
      {/* Główna część stopki */}
      <div className="container mx-auto p-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {/* Logo i opis */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4 inline-block">
              <Image 
                src="/logo.webp" 
                alt="BrainTMS Logo" 
                width={150} 
                height={50} 
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4">
              Nowoczesny program do zarządzania transportem, stworzony specjalnie dla przewoźników i firm spedycyjnych.
            </p>
          </motion.div>

          {/* Linki nawigacyjne */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Nawigacja</h3>
            <ul className="space-y-2">
              <li>
                <Link href={getFooterHref('aplikacja')} className="text-gray-300 hover:text-white transition-colors">
                  Aplikacja
                </Link>
              </li>
              <li>
                <Link href={getFooterHref('funkcje-programu')} className="text-gray-300 hover:text-white transition-colors">
                  Funkcje
                </Link>
              </li>
              <li>
                <Link href={getFooterHref('oferta')} className="text-gray-300 hover:text-white transition-colors">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href={getFooterHref('kontakt')} className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Dane kontaktowe */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Kontakt</h3>
            <address className="not-italic text-sm text-gray-300 mb-4">
              <p className="mb-2">Łącko 712</p>
              <p className="mb-2">33-390 Łącko</p>
              <p className="mb-2">
                <a href="tel:+48606544635" className="hover:text-white transition-colors">
                  +48 606 - 544 - 635
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:info@braintms.eu" className="hover:text-white transition-colors">
                  info@braintms.eu
                </a>
              </p>
              <p className="mb-2">NIP: 7343564384</p>
              <p>REGON: 381492522</p>
            </address>
          </motion.div>

          {/* Media społecznościowe i Newsletter */}
          <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4 border-b-2 border-primary pb-2">Obserwuj nas</h3>
            <div className="flex space-x-3 mb-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#3b5998] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#55acee] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#ac2bac] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#0082ca] w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/>
                </svg>
              </a>
            </div>
            
            {/* Newsletter */}
            <div className="w-full">
              <Newsletter />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Prawa autorskie i prawne */}
      <div className="bg-[#161717] bg-opacity-20 py-4">
        <div className="container mx-auto text-center text-sm">
          <p className="mb-2">© {new Date().getFullYear()} BrainTMS. Wszelkie prawa zastrzeżone.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/polityka-prywatnosci" className="text-gray-300 hover:text-white transition-colors">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="text-gray-300 hover:text-white transition-colors">
              Regulamin
            </Link>
            <span className="text-gray-300">
              Icons by <a href="https://unicornicons.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">unicornicons.com</a>
            </span>
          </div>
        </div>
      </div>

      {/* Powiadomienie o plikach cookie */}
      {showCookieNotification && (
        <div 
          className="fixed bottom-0 left-0 right-0 bg-dark bg-opacity-95 p-4 shadow-lg z-50"
          data-testid="cookie-notification"
          role="region"
          aria-labelledby="cookie-notification-heading"
          aria-live="polite"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 md:mr-8">
              <h3 id="cookie-notification-heading" className="font-bold text-lg mb-2">Polityka Cookies</h3>
              <p className="text-sm">
                Strona brainTMS.eu wykorzystuje pliki cookie do prawidłowego działania, analizy ruchu oraz dostarczania funkcjonalności z mediów społecznościowych. 
                Więcej informacji znajdziesz w naszej <Link href="/polityka-prywatnosci" className="text-primary hover:underline">Polityce Prywatności</Link>.
              </p>
            </div>
            <div className="flex gap-3">
              <button 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
                onClick={acceptCookies}
                data-testid="accept-cookies"
              >
                Akceptuję
              </button>
              <Link 
                href="/polityka-prywatnosci" 
                className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors"
              >
                Szczegóły
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Powiadomienia alertów (ukryte) */}
      <div id="successAlertContainer" className="fixed top-5 right-5 p-3 bg-green-500 text-white rounded-md shadow-lg z-50 hidden">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Wiadomość została wysłana.
        </span>
      </div>
      
      <div id="dangerAlertContainer" className="fixed top-5 right-5 p-3 bg-red-500 text-white rounded-md shadow-lg z-50 hidden">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Wiadomość nie została wysłana.
        </span>
      </div>
      
      <div id="dangerAlertContainerPusty" className="fixed top-5 right-5 p-3 bg-red-500 text-white rounded-md shadow-lg z-50 hidden">
        <span className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          Wypełnij wszystkie pola formularza.
        </span>
      </div>
    </footer>
  );
};

export default Footer; 