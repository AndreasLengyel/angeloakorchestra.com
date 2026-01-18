'use client';

import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const handleScrollClick = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/angel-oak.jpg"
          alt="Angel Oak Tree"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-forest-deep/70"></div>
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/40 via-transparent to-forest-deep/60"></div>
        {/* Golden light accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Decorative element */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber to-transparent"></div>
        </div>

        {/* Band name */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream mb-6 tracking-tight drop-shadow-lg">
          Angel Oak
          <span className="block text-amber mt-2 drop-shadow-lg">Orchestra</span>
        </h1>

        {/* Tagline */}
        <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-cream/90 italic mb-4 drop-shadow-md">
          Rooted in tradition.
        </p>
        <p className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl md:text-3xl text-cream/90 italic mb-12 drop-shadow-md">
          Reaching toward something new.
        </p>

        {/* Genre tag */}
        <p className="text-cream/70 uppercase tracking-[0.3em] text-sm mb-16">
          Folk &bull; Americana
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#music"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#music')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary px-8 py-3 rounded-full font-medium tracking-wide"
          >
            Listen Now
          </a>
          <a
            href="#shows"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#shows')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-secondary px-8 py-3 rounded-full font-medium tracking-wide"
          >
            Upcoming Shows
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollClick}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/60 hover:text-amber transition-colors cursor-pointer z-10"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} className="scroll-indicator" />
      </button>

      {/* Decorative gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-10"></div>
    </section>
  );
}
