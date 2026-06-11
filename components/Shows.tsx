'use client';

import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';

type Show = {
  date: Date;
  title: string;
  venue: string;
  city: string;
  timeLabel: string;   // human-readable, e.g. "19:00 – 20:30"
  url: string;
  blurb?: string;
};

const shows: Show[] = [
  {
    date: new Date('2026-08-06T19:00:00+02:00'),
    title: 'Music on a Summer Evening',
    venue: 'Påskallavik Church',
    city: 'Påskallavik, Sweden',
    timeLabel: '19:00 – 20:30',
    url: 'https://www.svenskakyrkan.se/kalender?eventId=dda7323e27ab4078a3a0c36dc2c7c946&webId=1337786',
    blurb: 'An evening in Nashville-Country style.',
  },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

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

  const upcoming = shows;

  return (
    <section
      id="shows"
      ref={sectionRef}
      className="py-24 md:py-32 bg-forest-deep texture-overlay"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">
            On Stage
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-cream mb-6">
            Live Dates
          </h2>
          <div className="flex justify-center mb-14">
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber to-transparent" />
          </div>
        </div>

        {upcoming.length === 0 ? (
          <p className="fade-in stagger-1 text-center text-cream/70 italic">
            No dates on the books right now &mdash; check back soon.
          </p>
        ) : (
          <ul className="space-y-5">
            {upcoming.map((show, i) => {
              const month = MONTHS[show.date.getMonth()];
              const day = show.date.getDate();
              const year = show.date.getFullYear();
              const weekday = WEEKDAYS[show.date.getDay()];

              return (
                <li
                  key={show.url}
                  className={`fade-in stagger-${Math.min(i + 1, 4)}`}
                >
                  <a
                    href={show.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-xl border border-moss/30 bg-forest/40 hover:bg-forest/60 hover:border-amber/50 transition-colors p-6 md:p-7"
                  >
                    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[7rem_1fr_auto] gap-x-6 gap-y-3 items-center">
                      {/* Date block */}
                      <div className="text-center md:text-left">
                        <p className="text-amber font-[family-name:var(--font-display)] text-3xl md:text-4xl leading-none">
                          {day}
                        </p>
                        <p className="text-cream/70 uppercase tracking-widest text-xs mt-1">
                          {month} {year}
                        </p>
                      </div>

                      {/* Details */}
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-display)] text-cream text-xl md:text-2xl italic mb-2">
                          {show.title}
                        </h3>
                        <div className="space-y-1.5 text-cream/80 text-sm">
                          <p className="flex items-center gap-2">
                            <MapPin size={14} className="text-moss shrink-0" />
                            <span>{show.venue} &middot; {show.city}</span>
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock size={14} className="text-moss shrink-0" />
                            <span>{weekday} &middot; {show.timeLabel}</span>
                          </p>
                          {show.blurb && (
                            <p className="flex items-center gap-2 text-cream/65 italic">
                              <Calendar size={14} className="text-moss shrink-0" />
                              <span>{show.blurb}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="col-span-2 md:col-span-1 md:justify-self-end">
                        <span className="inline-flex items-center gap-2 text-amber group-hover:text-gold uppercase tracking-wider text-sm">
                          Event Details
                          <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        )}

        <p className="fade-in stagger-4 text-center text-cream/60 italic mt-14">
          More dates coming &mdash; sign up below to hear about them first.
        </p>
      </div>
    </section>
  );
}
