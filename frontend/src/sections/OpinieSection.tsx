'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReviewCard from '@/components/ReviewCard';

// Define the review data
const reviews = [
  {
    id: 1,
    logoUrl: '/logos/company1.png',
    companyName: 'TransLog Sp. z o.o.',
    industry: 'Transport i logistyka',
    quote: 'Wasza aplikacja to prawdziwy Game Changer w branży transportowej. Dzięki niej zarządzanie flotą stało się proste i intuicyjne.',
    rating: 5
  },
  {
    id: 2,
    logoUrl: '/logos/company2.png',
    companyName: 'SpeedCargo',
    industry: 'Spedycja międzynarodowa',
    quote: 'brainTMS umożliwił nam zwiększenie wydajności o 40% w ciągu pierwszych trzech miesięcy. Polecamy każdej firmie spedycyjnej!',
    rating: 5
  },
  {
    id: 3,
    logoUrl: '/logos/company3.png',
    companyName: 'LogiFreight',
    industry: 'Transport drogowy',
    quote: 'Dzięki aplikacji mobilnej brainTMS nasi kierowcy mają stały dostęp do zleceń. Komunikacja stała się znacznie prostsza i bardziej efektywna.',
    rating: 4
  },
  {
    id: 4,
    logoUrl: '/logos/company4.png',
    companyName: 'ExpressDelivery',
    industry: 'Dostawy ekspresowe',
    quote: 'System zautomatyzował nasz proces fakturowania, co pozwoliło zaoszczędzić wiele godzin pracy tygodniowo. Świetne narzędzie!',
    rating: 5
  },
  {
    id: 5,
    logoUrl: '/logos/company5.png',
    companyName: 'EuroTrans',
    industry: 'Transport międzynarodowy',
    quote: 'Interfejs brainTMS jest intuicyjny i przyjazny dla użytkownika. Każdy nowy pracownik szybko uczy się obsługi systemu.',
    rating: 4
  },
  {
    id: 6,
    logoUrl: '/logos/company6.png',
    companyName: 'CargoMaster',
    industry: 'Logistyka magazynowa',
    quote: 'Moduł analityczny pozwala nam na bieżąco monitorować rentowność zleceń. To bezcenne przy podejmowaniu strategicznych decyzji.',
    rating: 5
  }
];

const OpinieSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const slidesPerView = isMobile ? 1 : (typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 3);
  const totalSlides = Math.ceil(reviews.length / slidesPerView);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const visibleReviews = () => {
    const start = activeSlide * slidesPerView;
    return reviews.slice(start, start + slidesPerView);
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        duration: 0.5, 
        staggerChildren: 0.2 
      } 
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section
      id="opinie"
      data-testid="opinie-section"
      className="py-12 md:py-10 bg-white"
    >
        <div className="w-[12rem] h-2 bg-primary mx-auto mb-6 rounded-full" />
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="text-center mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4"
            variants={titleVariants}
          >
            Co mówią nasi klienci
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={titleVariants}
          >
            Poznaj opinie firm, które zaufały naszemu systemowi i osiągnęły sukces w zarządzaniu transportem
          </motion.p>
        </motion.div>

        {/* Desktop and tablet view: Grid layout */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review) => (
            <ReviewCard 
              key={review.id}
              logoUrl={review.logoUrl}
              companyName={review.companyName}
              industry={review.industry}
              quote={review.quote}
              rating={review.rating}
            />
          ))}
        </div>

        {/* Mobile view: Carousel */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out" 
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0 px-1">
                  <ReviewCard 
                    logoUrl={review.logoUrl}
                    companyName={review.companyName}
                    industry={review.industry}
                    quote={review.quote}
                    rating={review.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 transform -translate-x-1/2"
            onClick={handlePrev}
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-2 z-10 transform translate-x-1/2"
            onClick={handleNext}
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Pagination indicators */}
          <div className="flex justify-center mt-4">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${index === activeSlide ? 'bg-primary' : 'bg-gray-300'}`}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default OpinieSection; 