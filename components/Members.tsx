'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { MemberKey } from './MemberPortrait';

type Member = {
  key: MemberKey;
  name: string;
  role: string;
};

const members: Member[] = [
  { key: 'andreas-petersson', name: 'Andreas Petersson', role: 'Vocals, Lead Guitar' },
  { key: 'fideli-jonsson',    name: 'Fideli Jonson',     role: 'Vocals, Lead' },
  { key: 'magnus-petersson',  name: 'Magnus Petersson',  role: 'Vocals, Keys, Hammond, Piano, Acoustic Guitar' },
  { key: 'andreas-lengyel',   name: 'Andreas Lengyel',   role: 'Vocals, Lead, Keys, Acoustic Guitar' },
  { key: 'vlado-markovic',    name: 'Vlado Markovic',    role: 'Bass' },
  { key: 'robin-averling',    name: 'Robin Åverling',    role: 'Vocals, Drums' },
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
            Five voices. Keys that range from intimate piano to the warm swell of Hammond organ.
            Guitars acoustic and electric. A rhythm section that knows when to drive and when to breathe.
            This is a band built for texture and dynamics.
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div
              key={member.key}
              className={`fade-in stagger-${(index % 3) + 1} member-card group`}
            >
              {/* Comic-book framed portrait */}
              <div className="portrait-frame relative aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl">
                <Image
                  src={`/images/members/${member.key}.jpg`}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover portrait-img"
                />
                {/* Halftone dot overlay — comic-book texture */}
                <div className="portrait-halftone" aria-hidden="true" />
                {/* Color wash that ties into site palette */}
                <div
                  className="absolute inset-0 mix-blend-multiply pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(212,165,116,0.0) 30%, rgba(45,74,45,0.55) 100%)',
                  }}
                  aria-hidden="true"
                />
                {/* Bold comic-panel border */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    boxShadow:
                      'inset 0 0 0 3px var(--forest-deep), inset 0 0 0 6px rgba(212,165,116,0.4)',
                  }}
                  aria-hidden="true"
                />
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
