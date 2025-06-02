# BrainTMS Website

## Opis projektu
Responsywna strona typu *onepage* dla systemu BrainTMS (Transport Management System), zaimplementowana w Next.js. Strona zawiera nawigację kotwicową, animacje i interaktywne elementy.

## Wymagania
- Node.js w wersji 14.x lub wyższej
- NPM w wersji 6.x lub wyższej

## Technologie
- **Framework**: Next.js
- **Język**: TypeScript
- **Stylizacja**: TailwindCSS
- **Animacje**: Framer Motion

## Instrukcja uruchomienia
1. Zainstaluj zależności: `npm install`
2. Uruchom serwer deweloperski: `npm run dev`
3. Otwórz http://localhost:3000 w przeglądarce

## Struktura projektu
```
frontend/
├── src/
│   ├── components/    # Komponenty wielokrotnego użytku
│   ├── sections/      # Sekcje strony (np. Hero, Oferta)
│   ├── styles/        # Style globalne
│   └── assets/        # Zasoby statyczne
│       ├── images/    # Obrazy
│       ├── icons/     # Ikony
│       └── videos/    # Pliki wideo
├── public/            # Zasoby publiczne
└── ... (standardowe pliki Next.js)
```

## Konwencje kodowania
- Nazwy komponentów: PascalCase (np. `HeroSection.tsx`)
- Nazwy zmiennych: camelCase
- Wcięcia: 2 spacje
- Style: Tailwind CSS classes (utility-first)
- Kolory: definiowane w pliku tailwind.config.js 