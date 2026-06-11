'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Bell } from 'lucide-react';

const RELEASE_DATE = new Date('2026-06-12T00:00:00');

export default function Music() {
  const sectionRef = useRef<HTMLElement>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const ms = RELEASE_DATE.getTime() - Date.now();
      setDaysLeft(Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24))));
    };
    update();
    const id = setInterval(update, 1000 * 60 * 60);
    return () => clearInterval(id);
  }, []);

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
      id="music"
      ref={sectionRef}
      className="py-24 md:py-32 bg-forest-deep texture-overlay"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">
            Debut Single &middot; June 12, 2026
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-cream mb-4 italic">
            I Think I Love You
          </h2>
          <p className="text-gray-moss max-w-xl mx-auto">
            Our first release. A quiet admission, written with reverence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Artwork */}
          <div className="fade-in stagger-1">
            <div className="relative">
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl border border-moss/30 relative">
                <Image
                  src="/images/AOO_i-think-i-love-you_cover_1254.png"
                  alt="I Think I Love You — Angel Oak Orchestra single artwork"
                  width={1254}
                  height={1254}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Countdown badge */}
              {daysLeft !== null && daysLeft > 0 && (
                <div className="absolute -top-5 -right-5 bg-amber text-forest-deep rounded-full w-24 h-24 flex flex-col items-center justify-center shadow-xl">
                  <p className="font-[family-name:var(--font-display)] text-3xl leading-none">
                    {daysLeft}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider mt-1">
                    {daysLeft === 1 ? 'day to go' : 'days to go'}
                  </p>
                </div>
              )}

              {/* Decorative glows */}
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-amber/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-moss/30 rounded-full blur-2xl -z-10" />
            </div>
          </div>

          {/* Story */}
          <div className="fade-in stagger-2 space-y-5 text-cream/85 leading-relaxed">
            <p>
              <em>I Think I Love You</em> is the first piece of music we&apos;re sharing
              with the world &mdash; a song about the moment a feeling becomes
              undeniable.
            </p>
            <p>
              It opens with a smile bright as summer in the dead of winter, a flower
              blooming out of season, a full moon undimmed by clouds. Each verse
              holds up a small impossibility, the kind only love can explain. The
              hesitation in the title isn&apos;t doubt &mdash; it&apos;s reverence,
              the careful weight of a thing too large to say all at once.
            </p>
            <p>
              The bridge is where the song stops looking outward and turns inward:
              <em> &ldquo;All the times I wondered why I took a fall &mdash; no wonder
              at all.&rdquo;</em> Every detour, every disappointment, every long way
              around finally makes sense.
            </p>
            <p>
              We built the arrangement to mirror that journey. Strings rise like a
              held breath. A lone guitar carries the verses the way a hand carries
              something fragile. By the final chorus, the pad swells into something
              whole and certain.
            </p>
            <p className="text-amber italic pt-2">
              Out everywhere June 12, 2026.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                <Bell size={16} /> Get a Release Reminder
              </a>
              <a
                href="#about"
                className="text-amber hover:text-gold transition-colors uppercase tracking-wider text-sm"
              >
                More about the band &rarr;
              </a>
            </div>
          </div>
        </div>

        {/* Spotify player */}
        <div className="mt-16 max-w-3xl mx-auto fade-in stagger-3">
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/track/2mNjpBUr0n6NYiKDbsJl5U?utm_source=generator"
            width="100%"
            height={352}
            frameBorder={0}
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="I Think I Love You on Spotify"
            style={{ borderRadius: 12 }}
          />
        </div>
      </div>
    </section>
  );
}
