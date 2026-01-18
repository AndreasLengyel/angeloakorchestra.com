# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

Single-page website for Angel Oak Orchestra built with Next.js 14 (App Router) and Tailwind CSS v4.

### Page Structure

`app/page.tsx` composes all sections in order:
- Navigation (fixed header)
- Hero (full-screen with Angel Oak tree background)
- About (band story)
- Music (album cards)
- Members (6 band members grid)
- Shows (tour dates)
- Contact (static form)
- Footer (newsletter signup)

### Design System

Custom color palette defined in `app/globals.css` via CSS variables and Tailwind's `@theme inline`:
- `forest-deep`, `forest`, `moss` - greens for backgrounds/accents
- `amber`, `gold` - warm highlights and CTAs
- `cream` - light backgrounds and text on dark
- `bark`, `gray-moss` - secondary text colors

Typography:
- Headlines: Playfair Display (`font-[family-name:var(--font-playfair)]`)
- Body: Inter (default)

### Animation Pattern

Scroll-triggered fade-in animations using Intersection Observer. Components use:
```tsx
const sectionRef = useRef<HTMLElement>(null);
useEffect(() => {
  const observer = new IntersectionObserver(...);
  // Add 'visible' class to '.fade-in' elements when section enters viewport
}, []);
```

Apply `fade-in` class with optional `stagger-1` through `stagger-4` for delayed animations.

### Key CSS Classes

- `.btn-primary`, `.btn-secondary` - button styles
- `.fade-in` / `.visible` - scroll animations
- `.album-card`, `.member-card` - card hover effects
- `.section-divider` - decorative gradient line

### Assets

Background image at `public/images/angel-oak.jpg` - used in Hero, About, and Footer sections.
