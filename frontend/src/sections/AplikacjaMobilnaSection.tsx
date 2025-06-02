'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AplikacjaMobilnaSection: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>('assigned-tasks');

  // Toggle accordion function
  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    }
  };

  const scaleVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        ease: "easeOut" 
      } 
    }
  };

  const highlightedTextVariants = {
    initial: { backgroundPosition: "0% 50%" },
    animate: { 
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: { 
        duration: 5, 
        ease: "linear", 
        repeat: Infinity 
      }
    }
  };

  // Accordion data
  const accordionItems = [
    {
      id: 'assigned-tasks',
      title: 'Wyświetlanie Przydzielonych Zleceń',
      content: 'Aplikacja umożliwia kierowcom łatwy dostęp do przydzielonych zleceń. Wszystkie informacje o zleceniu, dane kontaktowe i szczegóły dostawy są dostępne na wyciągnięcie ręki.'
    },
    {
      id: 'personalization',
      title: 'Personalizacja Danych Użytkownika',
      content: 'Użytkownicy mogą dostosować swój profil, dodając niezbędne informacje, które ułatwiają pracę i komunikację z dyspozytorem.'
    },
    {
      id: 'theme-modes',
      title: 'Tryb Jasny i Ciemny',
      content: 'Aplikacja oferuje możliwość przełączania między jasnym a ciemnym motywem, co zapewnia komfort użytkowania zarówno w dzień, jak i w nocy.'
    },
    {
      id: 'scalable-interface',
      title: 'Skalowalny Interfejs',
      content: 'Interfejs aplikacji automatycznie dostosowuje się do różnych rozmiarów ekranu, zapewniając optymalną użyteczność zarówno na telefonach, jak i na tabletach.'
    },
    {
      id: 'multilingual',
      title: 'Wsparcie wielojęzykowe',
      content: 'Aplikacja jest dostępna w wielu językach, co umożliwia korzystanie z niej przez kierowców z różnych krajów i ułatwia międzynarodową współpracę.'
    }
  ];

  return (
    <section id="aplikacja-mobilna" className="py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Lewa kolumna - Nagłówek, wideo, opis */}
          <div className="mt-3 md:mt-0">
            <motion.h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-8 mx-2 md:mx-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              Aplikacja mobilna<br/> brainTMS dla Twoich <br/>pracowników
            </motion.h2>
            
            <motion.div 
              className="w-full flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <div className="w-full md:w-2/5 relative aspect-[9/16] bg-gray-200 rounded-lg overflow-hidden">
                <video 
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/filmik_mobile.mp4" type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzania wideo.
                </video>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-6 mx-2 md:mx-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h3 className="text-xl font-semibold mb-3">
                <motion.span 
                  className="inline-block border-b-[6px] border-primary"
                  variants={highlightedTextVariants}
                  initial="initial"
                  animate="animate"
                  style={{
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(to right, #0e766d, #00abac, #5fa05a, #00b3ac, #0e766d)',
                    backgroundSize: '200% 100%'
                  }}
                >
                  brainTMS Mobile
                </motion.span>
              </h3>
              <p className="text-gray-600">
                Aplikacja dla firm logistycznych zapewnia efektywną komunikację między kierowcami a dyspozytorami oraz umożliwia śledzenie zleceń. 
                Umożliwia szybką wymianę informacji, ciągłe monitorowanie procesu przewozu oraz przekazywanie dokumentów do działu finansów. 
                Dzięki brainTMS Mobile, kierowcy mają możliwość łatwego dostępu do swoich zleceń i realizacji dostaw.
              </p>
            </motion.div>
          </div>
          
          {/* Prawa kolumna - Obraz, opis, accordion */}
          <div className="md:mt-0">
            <motion.div 
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <div className="relative h-[300px] md:h-[500px]">
                <Image
                  src="/mobile1-small.png"
                  alt="Interfejs aplikacji mobilnej brainTMS"
                  fill
                  style={{ objectFit: 'contain' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  quality={90}
                  className="rounded-xl"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-4 mx-2 md:mx-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <p className="text-gray-600 mb-4">
                <span className="border-b-[3px] border-primary">brainTMS Mobile</span> to narzędzie, które maksymalizuje efektywność i kontrolę w branży transportowej. 
                Niezależnie od tego, czy jesteś kierowcą czy dyspozytorem, nasza aplikacja zapewnia narzędzia do sprawnego zarządzania i monitorowania procesów przewozowych. 
                Dołącz do nas już dziś i doświadcz rewolucji w zarządzaniu transportem i logistyką.
              </p>
              
              <motion.h3 
                className="text-2xl font-semibold my-8 text-gray-700"
                variants={scaleVariants}
              >
                Co możesz znaleźć w naszej aplikacji?
              </motion.h3>
              
              {/* Accordion items */}
              <div className="space-y-3">
                {accordionItems.map((item) => (
                  <div key={item.id} className="border border-primary rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(item.id)}
                      className={`w-full flex items-center justify-between p-4 text-left transition-colors duration-200 ${
                        activeAccordion === item.id 
                          ? 'bg-primary text-white font-semibold mb-3' 
                          : 'hover:bg-gray-100'
                      }`}
                      aria-expanded={activeAccordion === item.id}
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
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item.title}</span>
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
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                    <div className={`px-4 pb-4 ${activeAccordion === item.id ? 'block' : 'hidden'}`}>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AplikacjaMobilnaSection; 