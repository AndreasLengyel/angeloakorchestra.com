'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <div className="fade-in stagger-1">
              <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">Our Story</p>
              <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-forest-deep mb-6">
                Named for Something<br />
                <span className="text-moss italic">Ancient & Alive</span>
              </h2>
            </div>

            <div className="fade-in stagger-2 space-y-6 text-bark leading-relaxed">
              <p>
                Angel Oak Orchestra takes its name from the legendary Angel Oak tree on Johns Island,
                South Carolina — a Southern live oak believed to be 400-500 years old. Its massive
                branches sprawl outward, some dipping down to touch the earth before rising again
                toward the sky.
              </p>
              <p>
                Like that tree, our music is rooted in something old but very much alive. We draw
                from the deep well of traditional American sounds — folk ballads, bluegrass rhythms,
                the soul of the Delta — while reaching toward something new and expansive.
              </p>
              <p>
                Our sound is layered and atmospheric. This isn&apos;t stripped-down acoustic folk.
                It&apos;s something fuller, more orchestral in its ambition — blending storytelling with
                sweeping arrangements that feel like standing beneath a centuries-old canopy,
                watching light filter through the leaves.
              </p>
            </div>

            <div className="fade-in stagger-3 mt-8">
              <div className="section-divider"></div>
            </div>
          </div>

          {/* Angel Oak Image */}
          <div className="order-1 md:order-2 fade-in stagger-2">
            <div className="relative">
              {/* Main image */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/angel-oak.jpg"
                  alt="The Angel Oak Tree - a 400-500 year old Southern live oak"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Subtle overlay for cohesion */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/30 to-transparent"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber/20 rounded-full blur-2xl -z-10"></div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-moss/30 rounded-full blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
