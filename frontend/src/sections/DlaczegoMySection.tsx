'use client';

import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    title: 'Organizacja transportu',
    items: [
      'harmonogram pojazdów i kierowców',
      'obliczanie rentowności trasy',
      'narzędzia wspierające optymalne wykorzystanie floty'
    ],
    imageSrc: '/org-transp-small.webp',
    imageAlt: 'Organizacja transportu'
  },
  {
    title: 'Efektywne zarządzanie zleceniami',
    items: [
      'zlecenia transportowe i spedycyjne',
      'monitoring etapów realizacji zlecenia',
      'komunikacja z kierowcą przez aplikację mobilną'
    ],
    imageSrc: '/efek-zarz-small.webp',
    imageAlt: 'Efektywne zarządzanie zleceniami'
  },
  {
    title: 'Kontrola finansowa i rachunkowość',
    items: [
      'automatyczne tworzenie faktur',
      'tworzenie samodzielnych faktur',
      'analiza kosztów floty'
    ],
    imageSrc: '/kontr-fin-small.webp',
    imageAlt: 'Kontrola finansowa i rachunkowość'
  },
  {
    title: 'Optymalizacja czasu',
    items: [
      'łatwy dostęp do dokumentów',
      'błyskawiczne wyszukiwanie danych',
      'panel dla klienta i przewoźnika'
    ],
    imageSrc: '/optymal-czasu-small.webp',
    imageAlt: 'Optymalizacja czasu'
  }
];

const DlaczegoMySection = () => {
  return (
    <section id="dlaczego-my" className="py-16 bg-light" data-testid="dlaczego-my">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 text-center mb-12">
          Dlaczego <span className="border-b-[7px] border-primary pb-1 inline-block">My</span> ?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              items={feature.items}
              imageSrc={feature.imageSrc}
              imageAlt={feature.imageAlt}
              delay={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DlaczegoMySection; 