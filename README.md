# BrainTMS - Strona Internetowa Systemu Zarządzania Transportem

## Spis Treści
1.  [Opis Projektu](#opis-projektu)
2.  [Główne Funkcjonalności Strony](#główne-funkcjonalności-strony)
3.  [Stos Technologiczny](#stos-technologiczny)
4.  [Struktura Projektu](#struktura-projektu)
5.  [Wymagania Wstępne](#wymagania-wstępne)
6.  [Uruchomienie Lokalnego Środowiska Deweloperskiego](#uruchomienie-lokalnego-środowiska-deweloperskiego)
7.  [Budowanie Wersji Produkcyjnej](#budowanie-wersji-produkcyjnej)
8.  [Testowanie](#testowanie)
9.  [Wdrażanie (Deployment)](#wdrażanie-deployment)
10. [Dostępne Skrypty](#dostępne-skrypty)
11. [Konwencje Kodowania](#konwencje-kodowania)
12. [Optymalizacje SEO i Wydajności](#optymalizacje-seo-i-wydajności)

## Opis Projektu
**BrainTMS** to nowoczesny System Zarządzania Transportem (TMS) zaprojektowany, aby usprawnić operacje dla przewoźników i firm spedycyjnych.

Niniejsze repozytorium zawiera kod źródłowy **responsywnej strony internetowej typu "one-page"** dla systemu BrainTMS. Strona prezentuje kluczowe funkcje systemu, ofertę, informacje o firmie oraz umożliwia kontakt. Została zbudowana z naciskiem na nowoczesny design, interaktywność, optymalizację pod kątem wyszukiwarek (SEO) oraz wysoką wydajność.

## Główne Funkcjonalności Strony
*   **Responsywny Design:** Strona w pełni dostosowuje się do różnych rozmiarów ekranu (desktop, tablet, mobile).
*   **Nawigacja Kotwicowa:** Płynne przewijanie do poszczególnych sekcji strony.
*   **Interaktywne Sekcje:** Prezentacja oferty, funkcji systemu, opinii klientów, FAQ w angażujący sposób.
*   **Animacje:** Subtelne animacje poprawiające doświadczenie użytkownika, zaimplementowane przy użyciu Framer Motion.
*   **Formularz Kontaktowy:** Umożliwia łatwy kontakt z firmą, z walidacją po stronie klienta.
*   **Optymalizacje SEO:** Wdrożone liczne techniki SEO (meta tagi, dane strukturalne JSON-LD, sitemap, robots.txt, przyjazne URL-e, optymalizacja obrazów, semantyczna struktura HTML).
*   **Optymalizacja Wydajności:** Wykorzystanie Next.js (SSG, optymalizacja obrazów, code splitting), minifikacja zasobów.
*   **Powiadomienie o Cookies:** Zgodne z RODO.
*   **Breadcrumbs:** Dla podstron (`/polityka-prywatnosci`, `/regulamin`).
*   **Skip Link:** Dla lepszej dostępności.

## Stos Technologiczny
*   **Framework:** [Next.js](https://nextjs.org/) (React Framework)
*   **Język:** [TypeScript](https://www.typescriptlang.org/)
*   **Stylizacja:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS framework)
*   **Animacje:** [Framer Motion](https://www.framer.com/motion/)
*   **Obsługa Formularzy:** [React Hook Form](https://react-hook-form.com/) (dla formularza kontaktowego i newslettera)
*   **Testowanie:** [Jest](https://jestjs.io/) oraz [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
*   **Linting/Formatting:** ESLint, Prettier (konfiguracja domyślna Next.js)

## Struktura Projektu
Repozytorium jest zorganizowane w następujący sposób:
```
brainTMSWebsite/
├── frontend/                  # Główny katalog aplikacji Next.js
│   ├── public/                # Zasoby statyczne serwowane bezpośrednio (obrazy, fonty, favicon)
│   ├── src/                   # Kod źródłowy aplikacji
│   │   ├── app/               # Główny routing aplikacji (App Router), layouty, strony
│   │   ├── assets/            # Zasoby używane w kodzie (np. animacje Lottie, mniejsze ikony SVG)
│   │   ├── components/        # Komponenty React wielokrotnego użytku
│   │   ├── hooks/             # Niestandardowe hooki React
│   │   ├── sections/          # Główne sekcje strony głównej (np. HeroSection, OfferSection)
│   │   ├── styles/            # Globalne style CSS (np. globals.css)
│   │   ├── types/             # Definicje typów TypeScript
│   │   └── utils/             # Funkcje pomocnicze
│   ├── .env.local.example     # Przykładowy plik zmiennych środowiskowych
│   ├── next.config.js         # Konfiguracja Next.js
│   ├── package.json           # Zależności i skrypty projektu frontendowego
│   ├── tailwind.config.js     # Konfiguracja Tailwind CSS
│   └── tsconfig.json          # Konfiguracja TypeScript
├── .git/                      # Katalog Git
├── .gitignore                 # Pliki i katalogi ignorowane przez Git
├── README.md                  # Ten plik
└── ... (inne pliki konfiguracyjne lub dokumentacja na poziomie głównym)
```

## Wymagania Wstępne
Przed uruchomieniem projektu upewnij się, że masz zainstalowane:
*   [Node.js](https://nodejs.org/) (zalecana wersja LTS, np. 18.x lub nowsza)
*   [npm](https://www.npmjs.com/) (zazwyczaj instalowany z Node.js) lub [Yarn](https://yarnpkg.com/)

## Uruchomienie Lokalnego Środowiska Deweloperskiego
1.  **Sklonuj repozytorium (jeśli jeszcze tego nie zrobiłeś):**
    ```bash
    git clone https://github.com/KarolR2001/brainTMSWebsite.git
    cd brainTMSWebsite
    ```
2.  **Przejdź do katalogu frontendowego:**
    ```bash
    cd frontend
    ```
3.  **Zainstaluj zależności:**
    Używając npm:
    ```bash
    npm install
    ```
    Lub używając Yarn:
    ```bash
    yarn install
    ```
4.  **(Opcjonalnie) Skonfiguruj zmienne środowiskowe:**
    Skopiuj `frontend/.env.local.example` (jeśli istnieje) do `frontend/.env.local` i uzupełnij potrzebne wartości.
5.  **Uruchom serwer deweloperski:**
    Używając npm:
    ```bash
    npm run dev
    ```
    Lub używając Yarn:
    ```bash
    yarn dev
    ```
6.  **Otwórz aplikację w przeglądarce:**
    Przejdź pod adres [http://localhost:3000](http://localhost:3000).

## Budowanie Wersji Produkcyjnej
Aby zbudować aplikację do wdrożenia produkcyjnego, wykonaj w katalogu `frontend/`:
Używając npm:
```bash
npm run build
```
Lub używając Yarn:
```bash
yarn build
```
Zoptymalizowane pliki produkcyjne znajdą się w katalogu `frontend/.next/`.

## Testowanie
Aby uruchomić testy jednostkowe i integracyjne (zdefiniowane w plikach `*.test.tsx` lub `*.test.ts`), wykonaj w katalogu `frontend/`:
Używając npm:
```bash
npm test
```
Lub używając Yarn:
```bash
yarn test
```

## Wdrażanie (Deployment)
Projekt jest skonfigurowany do łatwego wdrażania na platformach takich jak [Vercel](https://vercel.com/) (zalecane dla Next.js) lub Netlify.
Po połączeniu repozytorium GitHub z Vercel:
1.  Vercel automatycznie wykryje, że jest to projekt Next.js.
2.  **Ważne:** W ustawieniach projektu na Vercel, upewnij się, że **Root Directory** jest ustawione na `frontend`.
3.  Każde wypchnięcie (`git push`) do głównej gałęzi (np. `main`) automatycznie uruchomi nowy build i wdrożenie na Vercel.

## Dostępne Skrypty
W pliku `frontend/package.json` zdefiniowane są następujące główne skrypty:
*   `dev`: Uruchamia aplikację w trybie deweloperskim (`next dev`).
*   `build`: Buduje aplikację do wersji produkcyjnej (`next build`).
*   `start`: Uruchamia serwer produkcyjny po zbudowaniu aplikacji (`next start`).
*   `lint`: Uruchamia ESLint do analizy kodu (`next lint`).
*   `test`: Uruchamia testy jednostkowe i integracyjne za pomocą Jest.

## Konwencje Kodowania
*   **Nazwy komponentów:** PascalCase (np. `HeroSection.tsx`).
*   **Nazwy zmiennych i funkcji:** camelCase.
*   **Wcięcia:** 2 spacje.
*   **Style:** Tailwind CSS (utility-first).
*   **Kolory i motywy:** Definiowane w `frontend/tailwind.config.js`.
*   **Formatowanie kodu:** Prettier (zintegrowany, uruchamiany np. przy commitach jeśli skonfigurowano hooki, lub manualnie).

## Optymalizacje SEO i Wydajności
Projekt został zoptymalizowany pod kątem SEO i wydajności poprzez:
*   **Meta Tagi:** Dynamiczne i statyczne meta tagi (`title`, `description`, `keywords`, `canonical`).
*   **Open Graph & Twitter Cards:** Dla lepszej prezentacji w mediach społecznościowych.
*   **JSON-LD Structured Data:** Schematy `Organization`, `SoftwareApplication`, `WebPage`, `FAQPage`.
*   **Sitemap.xml & Robots.txt:** Dynamicznie generowane.
*   **Przyjazne URL-e:** Spójne, małe litery, przekierowania.
*   **Optymalizacja Obrazów:** Wykorzystanie komponentu `next/image` (automatyczna zmiana rozmiaru, format WebP, lazy loading, priorytetyzacja LCP).
*   **Semantyczna Struktura HTML:** Poprawne użycie tagów H1-H6, `<nav>`, `<footer>`, `<main>` etc.
*   **Dostępność (A11y):** `SkipLink`, atrybuty ARIA, kontrast (do dalszej weryfikacji manualnej).
*   **Strategie Renderowania Next.js:** Wykorzystanie SSG (Static Site Generation) dla stron statycznych.
*   **Minifikacja Zasobów:** Automatyczna minifikacja JS/CSS przez Next.js.
*   **CDN:** Wykorzystanie CDN przy wdrażaniu na platformach takich jak Vercel.

---
Zachęcamy do zgłaszania błędów lub sugestii poprzez Issues w tym repozytorium. 