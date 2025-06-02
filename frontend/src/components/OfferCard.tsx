'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface OfferCardProps {
  title: string;
  features: string[];
  price: {
    monthly: number;
    yearly: number;
  };
  isYearly: boolean;
  isPrimary?: boolean;
  delay?: number;
}

const OfferCard = ({
  title,
  features,
  price,
  isYearly,
  isPrimary = false,
  delay = 0,
}: OfferCardProps) => {
  const currentPrice = isYearly ? price.yearly : price.monthly;

  return (
    <motion.div
      className={`border rounded-2xl shadow-lg flex flex-col overflow-hidden ${
        isPrimary ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
    >
      {/* Header Section (Title + Price) */}
      <div className="border-b border-gray-300 rounded-t-2xl px-6 sm:px-8 py-4">
        <h3 className="text-2xl lg:text-3xl font-bold text-center text-primary mb-4 sm:mb-6">
          {title}
        </h3>
        <div className="text-center">
          <span className="text-3xl sm:text-4xl font-bold text-gray-800">{currentPrice} PLN</span>
          <span className="text-xs sm:text-sm text-gray-500 ml-1">{isYearly ? '/ rocznie' : '/ miesięcznie'}</span>
        </div>
      </div>
      
      {/* Features Section */}
      <ul className="flex-1 space-y-3 sm:space-y-4 px-6 sm:px-8 py-6 sm:py-8">
        {features.map((feature, index) => {
          const isHighlighted = feature.includes('Wszystko z planu TRANSPORT');
          
          return (
            <li key={index} className={`flex items-start text-sm sm:text-base ${isHighlighted ? 'font-bold' : ''}`}>
              <Image 
                src="/icons/check.svg" 
                alt="check" 
                width={20} 
                height={20} 
                className="mr-3 mt-0.5 sm:mt-1 min-w-[20px]"
              />
              <span className={isHighlighted ? 'border-b-2 border-primary pb-0.5' : ''}>
                {feature}
              </span>
            </li>
          );
        })}
      </ul>
      {/* Można tu dodać przycisk CTA, jeśli potrzebny */}
      {/* <button className="btn-primary w-full mt-auto px-6 sm:px-8 py-3 text-lg">Wybierz Plan</button> */}
    </motion.div>
  );
};

export default OfferCard;