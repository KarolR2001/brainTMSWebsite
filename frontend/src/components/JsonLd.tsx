import React from 'react';

interface JsonLdProps {
  data: Record<string, any>;
}

/**
 * Komponent do renderowania strukturyzowanych danych JSON-LD (Schema.org)
 * @param data - Obiekt zawierający dane JSON-LD zgodne ze standardem Schema.org
 */
export default function JsonLd({ data }: JsonLdProps) {
  const jsonLdString = JSON.stringify(data, null, 0);
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLdString }}
    />
  );
} 