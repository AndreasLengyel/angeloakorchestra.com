'use client';

import { useEffect, useRef } from 'react';

export default function Shows() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.fade-in').forEach((el) => {
              el.classList.add('visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="shows"
      ref={sectionRef}
      className="py-24 md:py-32 bg-forest-deep texture-overlay"
    >
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Header */}
        <div className="fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">
            Our Story
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-cream mb-8">
            How We Got Here
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
        </div>

        {/* Narrative */}
        <div className="fade-in stagger-1 space-y-6 text-cream/85 leading-relaxed text-left md:text-lg">
          <p>
            The story of a band is usually the story of long hours in small rooms. Six
            friends from Oskarshamn &mdash; a small coastal town on the Swedish Baltic
            &mdash; finding common ground in songs from a continent away.
          </p>
          <p>
            What pulled us in wasn&apos;t geography. It was the feeling: folk and
            Americana have always understood that a melody can carry weight that words
            alone can&apos;t. That a chord change can mean longing, or homecoming, or
            something in between.
          </p>
          <p>
            We started by playing each other&apos;s favourites and ended up writing our
            own. Songs about love, doubt, the people we miss, the places we keep coming
            back to. Songs that needed room to breathe &mdash; and a band that knew when
            to give it.
          </p>
        </div>

        {/* Pull quote */}
        <div className="fade-in stagger-2 my-14">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-[1px] bg-amber/60" />
          </div>
          <blockquote className="font-[family-name:var(--font-playfair)] italic text-cream/90 text-2xl md:text-3xl leading-snug">
            &ldquo;Folk &amp; Americana from a place no one expects it &mdash;
            and that&apos;s exactly the point.&rdquo;
          </blockquote>
          <div className="flex justify-center mt-6">
            <div className="w-12 h-[1px] bg-amber/60" />
          </div>
        </div>

        {/* Closing */}
        <div className="fade-in stagger-3 space-y-6 text-cream/85 leading-relaxed text-left md:text-lg">
          <p>
            This site marks the beginning. Our debut single,{' '}
            <em>I Think I Love You</em>, arrives June 6. A first record is taking shape.
            And somewhere down the road, the live dates we&apos;ll list here in earnest.
          </p>
          <p className="text-amber italic text-center pt-4">
            For now &mdash; thank you for listening.
          </p>
        </div>
      </div>
    </section>
  );
}
