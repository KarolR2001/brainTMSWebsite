import { render } from '@testing-library/react';
import JsonLd from '@/components/JsonLd';

describe('JsonLd Component', () => {
  it('renders JSON-LD script tag correctly', () => {
    const testData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Test Organization",
      "url": "https://example.com"
    };

    const { container } = render(<JsonLd data={testData} />);
    
    // Sprawdź, czy skrypt został wyrenderowany
    const scriptElement = container.querySelector('script[type="application/ld+json"]');
    expect(scriptElement).toBeInTheDocument();
    
    // Sprawdź, czy zawartość JSON jest poprawna
    const scriptContent = scriptElement?.innerHTML;
    const parsedContent = JSON.parse(scriptContent || '{}');
    
    expect(parsedContent).toEqual(testData);
  });

  it('renders complex nested JSON-LD correctly', () => {
    const complexData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Test Question 1",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Test Answer 1"
          }
        },
        {
          "@type": "Question",
          "name": "Test Question 2",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Test Answer 2"
          }
        }
      ]
    };

    const { container } = render(<JsonLd data={complexData} />);
    
    const scriptElement = container.querySelector('script[type="application/ld+json"]');
    expect(scriptElement).toBeInTheDocument();
    
    const scriptContent = scriptElement?.innerHTML;
    const parsedContent = JSON.parse(scriptContent || '{}');
    
    expect(parsedContent).toEqual(complexData);
    expect(parsedContent.mainEntity).toHaveLength(2);
    expect(parsedContent.mainEntity[0].name).toBe("Test Question 1");
    expect(parsedContent.mainEntity[1].acceptedAnswer.text).toBe("Test Answer 2");
  });

  it('handles empty data gracefully', () => {
    const emptyData = {};
    
    const { container } = render(<JsonLd data={emptyData} />);
    
    const scriptElement = container.querySelector('script[type="application/ld+json"]');
    expect(scriptElement).toBeInTheDocument();
    
    const scriptContent = scriptElement?.innerHTML;
    expect(scriptContent).toBe("{}");
  });
}); 