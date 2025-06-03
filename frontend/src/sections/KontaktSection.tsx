'use client'
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Lottie from 'lottie-react';
import locationAnimation from '../assets/animations/location-pulse.json';

const KontaktSection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!name.trim()) {
      errors.name = 'Imię i nazwisko jest wymagane';
    }
    
    if (!email.trim()) {
      errors.email = 'Email jest wymagany';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Nieprawidłowy format adresu email';
    }
    
    if (!phone.trim()) {
      errors.phone = 'Numer telefonu jest wymagany';
    } else if (!/^\+?[0-9\s-]{9,}$/i.test(phone)) {
      errors.phone = 'Nieprawidłowy format numeru telefonu';
    }
    
    if (!message.trim()) {
      errors.message = 'Wiadomość jest wymagana';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // W rzeczywistym projekcie tutaj byłoby wysłanie danych do API
      // Symulacja opóźnienia sieciowego
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Symulacja sukcesu
      setSubmitStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset statusu po 5 sekundach
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  // Animacje
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const rodoText = `
    Informujemy, że zgodnie z RODO (Rozporządzeniem Ogólnym o Ochronie Danych Osobowych) przetwarzamy Twoje dane osobowe w celu obsługi zgłoszenia lub zapytania, które przesłałeś(aś) za pośrednictwem tego formularza. Dane te będą przetwarzane wyłącznie w celu udzielenia odpowiedzi na Twoje zapytanie lub podjęcia działań zgodnych z przesłanym zgłoszeniem. Szczegóły dotyczące przetwarzania Twoich danych osobowych oraz Twoje prawa związane z ochroną danych osobowych znajdziesz w naszej Polityce Prywatności.
  `;

  return (
    <section 
      id="kontakt" 
      data-testid="kontakt-section"
      className="relative w-full py-12 lg:py-20 overflow-hidden"
      style={{ 
        backgroundImage: 'url(/loginBackground.webp)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
        <motion.div 
          className="w-full flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto rounded-[25px] overflow-hidden p-6 lg:p-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Lewa kolumna - informacje kontaktowe i mapa */}
          <motion.div 
            className="w-full lg:w-1/2 space-y-6"
            variants={itemVariants}
          >
            {/* Informacje kontaktowe */}
            <div className="bg-white p-6 lg:p-8 rounded-[15px] shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Informacje kontaktowe:</h2>
              <hr className="border-t border-primary W-full mb-6" />
              
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4">
                  <Lottie
                    animationData={locationAnimation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
                <p className="text-center pt-2">
                  Łącko 712<br />
                  33-390 Łącko
                </p>
              </div>

              <div className="flex items-center justify-center mb-6">
                <a href="tel:+48606544635" className="flex items-center text-gray-700 hover:text-primary transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+48 606 - 544 - 635</span>
                </a>
              </div>

              <div className="text-center text-gray-600">
                <p>
                  NIP: 7343564384 <br />
                  REGON: 381492522
                </p>
              </div>
            </div>

            {/* Mapa - widoczna tylko na większych ekranach */}
            <div className="w-full h-64 lg:h-80 rounded-[15px] overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.5766809362713!2d20.441233615478326!3d49.735867779384514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716086b96c8b5ab%3A0xb6d7c3bbebd7fa8d!2s33-390%20%C5%81%C4%85cko%20712!5e0!3m2!1spl!2spl!4v1657101549321!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Mapa lokalizacji firmy"
              ></iframe>
            </div>
          </motion.div>
          
          {/* Prawa kolumna - formularz kontaktowy */}
          <motion.div 
            className="w-full lg:w-1/2 bg-white p-6 lg:p-8 rounded-[15px] shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Wypełnij formularz</h2>
            <hr className="border-t border-primary W-full mb-6" />
            
            {submitStatus === 'success' && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Wiadomość została wysłana.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <span>Nie udało się wysłać wiadomości. Spróbuj ponownie później.</span>
              </div>
            )}
            
            <form ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between" data-testid="contact-form">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Imię i Nazwisko</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Jan Kowalski"
                  />
                  {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Wpisz swój adres e-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="jan.kowalski@example.com"
                  />
                  {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Numer telefonu</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`w-full px-3 py-2 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="+48 123 456 789"
                  />
                  {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Wiadomość</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full px-3 py-2 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                    placeholder="Twoja wiadomość..."
                  ></textarea>
                  {formErrors.message && <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>}
                </div>
              </div>
              
              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="submit-button"
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij'}
                </button>
              </div>
              
              <div className="mt-4 flex items-start text-xs text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p
                  id="rodo-info"
                  className="cursor-help"
                  data-tooltip-id="rodo-tooltip"
                  data-tooltip-content={rodoText}
                  data-tooltip-place="top"
                >
                  Administratorem danych osobowych jest BrainTMS Sp. z o.o. Dane będą przetwarzane w celu obsługi zapytania. Więcej informacji znajdziesz w Polityce Prywatności.
                </p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>

      <Tooltip
        id="rodo-tooltip"
        className="z-50 max-w-md !bg-white p-4 rounded-lg shadow-lg border-2 border-primary"
        style={{ 
          whiteSpace: 'pre-line',
          zIndex: 9999,
          opacity: 1,
          backgroundColor: 'white'
        }}
        opacity={1}
        render={({ content }) => (
          <div className="text-sm text-gray-700">{content}</div>
        )}
        classNameArrow="!bg-white"
        data-tooltip-variant="light"
      />
    </section>
  );
};

export default KontaktSection; 