'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ToggleSwitch from '@/components/ToggleSwitch';
import OfferCard from '@/components/OfferCard';

// Data for offer cards
const offerData = [
  {
    title: 'Transport',
    price: {
      monthly: 150,
      yearly: 1500,
    },
    features: [
      'Tworzenie i edycja zleceń transportowych',
      'Automatyczne tworzenie faktur',
      'Przypomnienie o płatnościach',
      'Szczegółowe raporty',
      'Przypomnienie o upływie terminu polisy',
      'Tworzenie kont dla pracowników',
      'Archiwizacja dokumentów',
    ],
  },
  {
    title: 'Spedycja',
    price: {
      monthly: 250,
      yearly: 2500,
    },
    features: [
      'Wszystko z planu TRANSPORT',
      'Przegląd statusu realizacji zleceń',
      'Przydzielanie roli użytkownikom',
      'Harmonogram pojazdów',
      'Monitorowanie płatności',
      'Automatyczne obliczanie prowizji',
      'Możliwość dodania własnych spedytorów',
    ],
    isPrimary: true,
  },
];

const OfferSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="oferta" className="py-10 bg-white" data-testid="offer-section">
      <div className="container mx-auto px-4">
        <div className="w-[12rem] h-2 bg-primary mx-auto mb-6 rounded-full" />
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-testid="animated-heading"
        >
          Zobacz ofertę
        </motion.h2>

        <ToggleSwitch onChange={(yearly) => setIsYearly(yearly)} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerData.map((offer, index) => (
            <OfferCard
              key={offer.title}
              title={offer.title}
              features={offer.features}
              price={offer.price}
              isYearly={isYearly}
              isPrimary={offer.isPrimary}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection; 