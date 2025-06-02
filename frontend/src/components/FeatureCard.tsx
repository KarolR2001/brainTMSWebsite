'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  delay?: number;
}

const FeatureCard = ({ title, items, imageSrc, imageAlt, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col overflow-hidden"
    >
      <div className="w-full">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={250}
          className="w-full h-auto rounded-t-xl"
          priority
        />
      </div>
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-xl font-bold mb-4 text-primary text-center">{title}</h3>
        <ul className="space-y-4 text-left w-full">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <Image src="/icons/check.svg" alt="" width={20} height={20} className="mr-3 mt-1 min-w-[20px]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default FeatureCard;