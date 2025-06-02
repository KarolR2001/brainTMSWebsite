'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AplikacjaSection: React.FC = () => {
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

  return (
    <section id="aplikacja" className="pb-16 md:pb-24 bg-white">
      {/* Pierwsza część: wideo + tekst */}
      <div className="pt-16 md:pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-4">
            {/* Lewa kolumna z wideo */}
            <motion.div 
              className="col-span-1 md:col-span-8 overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <div className="max-w-4xl mx-auto">
                <video 
                  className="w-full border-2 border-gray-300s h-auto rounded-lg"
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                >
                  <source src="/STATYSTYKI.mp4" type="video/mp4" />
                  Twoja przeglądarka nie obsługuje odtwarzania wideo.
                </video>
              </div>
            </motion.div>
            
            {/* Prawa kolumna z tekstem */}
            <motion.div 
              className="col-span-1 md:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={textVariants}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
                Redukuje koszty, Optymalizuje pracę i Organizuje transport
              </h2>
              <p className="text-gray-600">
                <motion.span 
                  className="font-semibold"
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
                  BRAINTMS
                </motion.span> to nowoczesna aplikacja spedycyjno-transportowa, redefiniująca standardy w świadczeniu usług na całym świecie. 
                BRAINTMS oferuje szerokie możliwości, które ułatwiają i automatyzują procesy. System doskonale radzi sobie 
                z różnorodnymi uprawnieniami i funkcjonalnościami, dostosowując się do potrzeb spedytorów, zarządu, 
                pracowników administracyjnych oraz przewoźników. Przyjemność pracy zapewnia dostęp online i działanie w chmurze, 
                dzięki czemu wystarczy urządzenie z dostępem do Internetu i przeglądarka. Aplikacja BRAINTMS w pełni odzwierciedla 
                procesy spedycyjne i transportowe, dając przewagę nad konkurencją.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
        
      {/* Separator */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="w-full mb-16">
          <hr className="border-primary border-t-2" />
        </div>
        
        {/* Druga część: obraz + tekst */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4">
          {/* Lewa kolumna z obrazem */}
          <motion.div 
            className="col-span-1 md:col-span-8 overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <div className="relative aspect-video w-full max-w-4xl mx-auto">
              <Image
                src="/zlecenia.png"
                alt="Interfejs aplikacji - zlecenia"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 66vw"
                quality={90}
                className="rounded-lg"
              />
            </div>
          </motion.div>
          
          {/* Prawa kolumna z tekstem */}
          <motion.div 
            className="col-span-1 md:col-span-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              Przyjmuj{' '}
              <motion.span
                className="inline-block"
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
                Zlecenia
              </motion.span>,
              nadzoruj płatności
            </h2>
            <p className="text-gray-600">
              Odbieraj zlecenia od swoich kontrahentów i twórz automatyczne zlecenia spedycyjne, 
              które możesz łatwo i sprawnie przekazać przewoźnikowi. Śledź płatności oraz monitoruj 
              rentowność wszystkich zleceń.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AplikacjaSection; 