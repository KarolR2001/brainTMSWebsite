'use client'
import React from 'react';
import { motion } from 'framer-motion';

const PrzecinekSection: React.FC = () => {
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

  const gradientTextVariants = {
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
    <section 
      id="przecinek" 
      className="py-12 md:py-16 relative"
      style={{
        background: 'linear-gradient(to right, rgba(14, 118, 109, 0.05), rgba(0, 171, 172, 0.05))'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {/* Left column - larger text, visible on all screen sizes */}
          <motion.div 
            className="col-span-1 md:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-700 leading-tight">
              Transport TSL zarządzany{' '}
              <motion.span
                className="inline-block"
                variants={gradientTextVariants}
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
                Doskonale
              </motion.span>.
              <br className="hidden sm:block" />
              W małych, średnich i dużych firmach zajmujących się TSL.
            </h2>
          </motion.div>
          
          {/* Right column - smaller text, hidden on mobile */}
          <motion.div 
            className="col-span-1 md:col-span-5 hidden md:block"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <p className="text-base md:text-xl text-gray-600">
              brainTMS - maksymalna efektywność i automatyzacja realizacji zleceń, minimalizacja ryzyka błędów. 
              Ten wszechstronny system pozwala wyprzedzić konkurencję, niezależnie od rozmiaru firmy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrzecinekSection; 