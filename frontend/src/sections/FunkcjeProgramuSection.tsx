'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Inline SVG Icon Components
const SpedycjaIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" viewBox="0 0 16 16" className={className}>
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
  </svg>
);

const TransportIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" viewBox="0 0 16 16" className={className}>
    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
  </svg>
);

const KsiegowoscIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" viewBox="0 0 16 16" className={className}>
    <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
    <path d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z"/>
  </svg>
);

const KomunikacjaIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" viewBox="0 0 16 16" className={className}>
    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
);

const NarzedziaIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="80" fill="currentColor" viewBox="0 0 16 16" className={className}>
    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z"/>
  </svg>
);

// Tab data
interface TabData {
  id: string;
  icon: JSX.Element; // Type remains JSX.Element
  label: JSX.Element | string;
  features: string[];
}

const tabs: TabData[] = [
  {
    id: 'spedycja',
    icon: <SpedycjaIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    label: 'Funkcje dla spedycji',
    features: [
      'Przeładunki w magazynach i na trasie',
      'Plan załadunków i rozładunków',
      'Zarządzanie flotą podwykonawców',
      'Szablony zleceń spedycyjnych',
      'Panel przewoźnika',
      'Przypomnienia o OCP przewoźnika',
      'Przypomnienie o badaniach technicznych i kart kierowców',
      'Zlecenia spedycyjne'
    ]
  },
  {
    id: 'transport',
    icon: <TransportIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    label: 'Funkcje dla transportu',
    features: [
      'Zarządzanie flotą własną',
      'Monitoring realizacji zleceń',
      'Harmonogram kierowców',
      'Rentowność zleceń',
      'Komunikacja z kierowcą',
      'Analiza kosztów floty',
      'Szablony zleceń transportowych',
      'Zlecenia transportowe',
      'Harmonogram pojazdów'
    ]
  },
  {
    id: 'ksiegowosc',
    icon: <KsiegowoscIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    label: <>Funkcje księgowe <br className="hidden sm:inline"/> i finansowe</>,
    features: [
      'Samodzielne fakturowanie',
      'Przeterminowane płatności',
      'Automatyczne fakturowanie',
      'Monitorowanie płatności',
      'Automatyczne kursy walut'
    ]
  },
  {
    id: 'komunikacja',
    icon: <KomunikacjaIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    label: <>Funkcje ułatwiające <br className="hidden sm:inline"/> komunikację</>,
    features: [
      'Aplikacja mobilna dla kierowców brainTMS Mobile',
      'Czat',
      
      'Przesyłanie dokumentów',
      'Odbieranie dokumentów',
      'Drukowanie dokumentów',
      'Informacje o czasie załadunku i rozładunku',
      'Mapa - szybkie i sprawne wytyczanie tras z uwzględnieniem warunków na drodze'
    ]
  },
  {
    id: 'narzedzia',
    icon: <NarzedziaIcon className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" />,
    label: 'Narzędzia',
    features: [
      'Panel administratora, spedytora, kierowcy',
      'Przechowywanie dokumentów w chmurze',
      'API do integracji',
      'Aplikacja mobilna dla kierowców brainTMS Mobile',
      'Pobieranie, drukowanie i edytowanie dokumentów',
      'Zautomatyzowany obieg dokumentów',
      'Aplikacja dostępna on-line przez przeglądarkę internetową'
    ]
  }
];

const FunkcjeProgramuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  const animatedText = {
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
    <section id="funkcje-programu">
      {/* Intro Section */}
      <div className="bg-background w-full py-12 md:py-12">
        <div className="container mx-auto px-4 mb-10 md:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left text column */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-700 mb-4">
                Poznaj funkcje programu{' '}
                <motion.span
                  className="inline-block font-bold"
                  variants={animatedText}
                  initial="initial"
                  animate="animate"
                  style={{
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    backgroundImage: 'linear-gradient(to right, #0e766d, #00abac, #5fa05a, #00b3ac, #0e766d)',
                    backgroundSize: '200% 100%'
                  }}
                >
                  BRAINTMS
                </motion.span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                To zaawansowany program umożliwiający kompleksowe zarządzanie zleceniami w branży transportowej. 
                Umożliwia śledzenie dostaw, rozliczanie i raportowanie, usprawniając pracę przewoźników, 
                spedytorów, dyspozytorów i księgowych.
              </p>
            </div>
            
            {/* Right illustration column */}
            <div className="flex justify-center items-center">
              <Image 
                src="/Funkcje.png" 
                alt="Ilustracja programu BrainTMS - funkcje" 
                width={500} 
                height={350} 
                className="rounded-lg object-contain"
                priority // Added priority for LCP improvement
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs Section */}
      <div className="w-full flex justify-center bg-white py-8">
        <div className="w-full max-w-6xl px-2 sm:px-4">
          {/* Tab navigation */}
          <div className="flex flex-wrap justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex flex-col items-center justify-center text-center mb-2 sm:mb-4 px-3 py-3 sm:px-4 sm:py-3 transition-all duration-300 min-w-[100px] sm:min-w-[120px] md:min-w-[140px] ${
                  activeTab === tab.id
                    ? 'bg-gray-50 text-primary shadow-lg rounded-t-lg border-2 border-b-0 border-primary'
                    : 'text-gray-500 hover:text-primary rounded-lg border-2 border-b-0 border-transparent'
                }`}
                data-testid={`tab-${tab.id}`}
              >
                <div className="mb-2 sm:mb-2.5">{tab.icon}</div>
                <div className="text-xs sm:text-sm font-medium leading-tight">{tab.label}</div>
              </button>
            ))}
          </div>
          
          {/* Tab content */}
          <div className="bg-background rounded-lg p-4 md:px-12 md:py-6 w-full">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
                data-testid={`tab-content-${tab.id}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3 md:gap-x-6 md:gap-y-4"
                >
                  {tab.features.map((feature, index) => (
                    <div key={index} className="flex items-start text-sm md:text-base">
                      <span className="text-primary mr-2 font-semibold">✓</span>
                      <p className="text-gray-800">{feature}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunkcjeProgramuSection; 