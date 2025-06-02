'use client';

import React from 'react';
import FAQAccordion, { FAQItem } from '../components/FAQAccordion';
import { motion } from 'framer-motion';
import JsonLd from '@/components/JsonLd';

const faqItems: FAQItem[] = [
  {
    id: 'manage-fleet',
    question: "Jak zarządzać flotą usługodawców w brainTMS?",
    answer: "System brainTMS umożliwia kompleksowe zarządzanie flotą usługodawców. Możesz dodawać nowych przewoźników, zarządzać ich dokumentami (polisy OCP, badania techniczne pojazdów), monitorować ich dostępność oraz śledzić historię współpracy. Funkcja przypomnienia o upływających terminach dokumentów pozwala na bieżąco monitorować zgodność usługodawców z wymogami prawnymi."
  },
  {
    id: 'invoicing',
    question: "W jaki sposób zautomatyzować proces fakturowania?",
    answer: "brainTMS oferuje zaawansowane funkcje automatycznego fakturowania. System umożliwia generowanie faktur na podstawie zakończonych zleceń, dodawanie własnych szablonów dokumentów oraz automatyczne przypomnienia o płatnościach. Dodatkowo moduł finansowy pozwala na monitorowanie przeterminowanych płatności i korzystanie z automatycznych kursów walut, co znacząco usprawnia procesy księgowe."
  },
  {
    id: 'mobile-app',
    question: "Jakie korzyści daje kierowcom aplikacja mobilna brainTMS?",
    answer: "Aplikacja mobilna brainTMS Mobile umożliwia kierowcom łatwy dostęp do przydzielonych zleceń wraz z wszystkimi niezbędnymi informacjami. Oferuje również funkcje personalizacji profilu, dostosowany interfejs z trybem jasnym i ciemnym, oraz wsparcie wielojęzykowe. Kierowcy mogą przesyłać dokumenty, potwierdzać statusy zleceń oraz komunikować się z dyspozytorami bezpośrednio przez aplikację."
  },
  {
    id: 'integration',
    question: "Czy brainTMS można zintegrować z innymi systemami?",
    answer: "Tak, brainTMS posiada API do integracji, które umożliwia połączenie z innymi systemami wykorzystywanymi w firmie, takimi jak systemy księgowe, magazynowe czy CRM. Dzięki temu można stworzyć spójny ekosystem informatyczny, eliminując konieczność wielokrotnego wprowadzania tych samych danych do różnych systemów i zapewniając płynny przepływ informacji."
  },
  {
    id: 'reports',
    question: "Jakie raporty i analizy oferuje brainTMS?",
    answer: "System brainTMS udostępnia rozbudowane narzędzia analityczne, które umożliwiają generowanie szczegółowych raportów dotyczących rentowności zleceń, wydajności poszczególnych usługodawców, kosztów floty oraz efektywności spedytorów. Możesz monitorować kluczowe wskaźniki efektywności (KPI) i podejmować strategiczne decyzje biznesowe w oparciu o wiarygodne dane."
  },
  {
    id: 'security',
    question: "Jak zabezpieczone są dane w systemie brainTMS?",
    answer: "brainTMS zapewnia najwyższy poziom bezpieczeństwa danych poprzez szyfrowanie SSL, regularne kopie zapasowe oraz zabezpieczenia przed nieautoryzowanym dostępem. System przechowuje dane w chmurze z zachowaniem najwyższych standardów ochrony. Dodatkowo, funkcja przydzielania ról użytkownikom pozwala na precyzyjne zarządzanie dostępem do poszczególnych modułów systemu, zgodnie z zasadą minimalnych uprawnień."
  },
  {
    id: 'commission',
    question: "Czy można obliczać prowizje dla spedytorów?",
    answer: "Tak, brainTMS posiada funkcję automatycznego obliczania prowizji dla spedytorów na podstawie zrealizowanych zleceń. System uwzględnia indywidualne stawki, wartość zlecenia oraz dodatkowe parametry, które można dostosować do polityki wynagradzania w firmie. To znacznie upraszcza rozliczenia z pracownikami i motywuje ich do efektywniejszej pracy."
  }
];

const FAQSection = () => {
  // Animation variants
  const fadeInUp = {
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

  // Przygotowanie danych dla JSON-LD
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-16 ">
      <JsonLd data={faqJsonLd} />
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-12"
        >
            <div className="w-[12rem] h-2 bg-primary mx-auto mb-6 rounded-full" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            Najczęściej Zadawane Pytania
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dowiedz się więcej o systemie brainTMS i jego funkcjach związanych z zarządzaniem usługodawcami.
            Znajdź odpowiedzi na najczęściej zadawane pytania.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Potrzebujesz więcej informacji? Nasz zespół jest gotowy, aby pomóc.
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Skontaktuj się z nami
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection; 