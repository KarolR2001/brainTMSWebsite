'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const underlineRef = useRef<HTMLHeadingElement>(null);
  const underlineTextRef = useRef<HTMLSpanElement>(null);
  const [underlineWidth, setUnderlineWidth] = useState<number | null>(null);

  // Animacja podkreślenia od lewej do prawej
  useEffect(() => {
    function updateUnderlineWidth() {
      if (underlineTextRef.current) {
        setUnderlineWidth(underlineTextRef.current.offsetWidth);
      }
    }
    updateUnderlineWidth();
    window.addEventListener('resize', updateUnderlineWidth);
    return () => window.removeEventListener('resize', updateUnderlineWidth);
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center relative" id="hero">
      {/* Tło obrazka z next/image */}
      <Image
        src="/loginBackground.webp"
        alt="Tło sekcji Hero przedstawiające nowoczesne biuro"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        className="z-0"
      />
      {/* Przyciemnione, zaokrąglone tło tylko na 80% */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[65vh] md:w-[80vw] md:h-[80vh] bg-dark bg-opacity-55 rounded-[4rem] shadow-2xl flex items-center justify-center z-10 overflow-hidden"
      >
        {/* Zawartość */}
        <div className="w-full h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            ref={underlineRef}
            className="text-5xl xs:text-6xl sm:text-6xl md:text-6xl lg:text-[5.5rem] font-bold mb-4 sm:mb-6 tracking-[.25em] lg:tracking-[.4em] relative break-words text-balance"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <span
              ref={underlineTextRef}
              style={{
                background: 'linear-gradient(90deg, #0e766d, #85c55b, #0e766d)',
                backgroundSize: '200% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-move 8s linear infinite',
                display: 'inline-block',
              }}
            >
              BRAIN TMS
            </span>
          </motion.h1>

          {/* Animowane podkreślenie gradientowe - efekt spadającej gwiazdy */}
          <div
            className="relative mx-auto mb-6 sm:mb-10 flex items-center justify-center h-2"
            style={{ width: underlineWidth ? `${underlineWidth}px` : 'auto' }}
          >
            <span className="block h-1 bg-transparent overflow-hidden relative" style={{ width: '100%' }}>
              <motion.span
                className="block h-full rounded-full"
                style={{
                  width: underlineWidth ? underlineWidth * 0.6 : 120,
                  minWidth: 32,
                  maxWidth: '100%',
                  background: 'linear-gradient(90deg, #0e766d, #85c55b, #0e766d)',
                  backgroundSize: '200% 100%',
                }}
                initial={{ x: 0, width: 0, opacity: 0 }}
                animate={{
                  x: underlineWidth ? underlineWidth : 200,
                  width: [0, underlineWidth ? underlineWidth * 0.6 : 120, underlineWidth ? underlineWidth * 0.6 : 120],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 3.5,
                  ease: 'linear',
                  times: [0, 0.3, 1],
                }}
              />
            </span>
          </div>

          <motion.p
            className="text-light text-base xs:text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 max-w-xs xs:max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto tracking-wide text-balance leading-relaxed lg:leading-[2.0]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Nowoczesny program do zarządzania transportem, stworzony specjalnie dla
            przewoźników i firm spedycyjnych.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="#oferta"
              className="border border-light text-light px-2 py-2 xs:px-3 xs:py-2.5 sm:px-4 sm:py-3 rounded-lg hover:bg-light hover:text-dark transition-colors inline-block text-base xs:text-lg tracking-widest font-light shadow-lg"
            >
              SKORZYSTAJ TERAZ
            </Link>
          </motion.div>
        </div>
      </div>
      {/* Gradient animation keyframes */}
      <style jsx global>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 40%;
          }
          50% {
            background-position: 200% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 