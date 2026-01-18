'use client';

import { useEffect, useRef } from 'react';

const members = [
  {
    name: 'Andreas Petersson',
    role: 'Vocals, Lead Guitar',
  },
  {
    name: 'Fideli Jonsson',
    role: 'Vocals, Lead',
  },
  {
    name: 'Magnus Petersson',
    role: 'Vocals, Keys, Hammond, Piano, Acoustic Guitar',
  },
  {
    name: 'Andreas Lengyel',
    role: 'Vocals, Lead, Keys, Acoustic Guitar',
  },
  {
    name: 'Vlado Markovic',
    role: 'Bass',
  },
  {
    name: 'Robin Åverling',
    role: 'Vocals, Drums',
  },
];

export default function Members() {
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
      id="members"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">The Band</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-forest-deep mb-6">
            The Musicians
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            Six voices. Keys that range from intimate piano to the warm swell of Hammond organ.
            Guitars acoustic and electric. A rhythm section that knows when to drive and when to breathe.
            This is a band built for texture and dynamics.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={member.name}
              className={`fade-in stagger-${(index % 3) + 1} member-card group`}
            >
              {/* Photo Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-forest to-moss rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-shadow">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center text-cream/40 p-6">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-cream/20 flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-wider">Photo</p>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="text-center">
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-forest-deep mb-1">
                  {member.name}
                </h3>
                <p className="text-moss text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
