'use client';

import { useEffect, useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const upcomingShows = [
  {
    date: 'Feb 14, 2025',
    day: 'Friday',
    venue: 'The Pour House',
    city: 'Charleston, SC',
    time: '8:00 PM',
    ticketLink: '#',
  },
  {
    date: 'Feb 22, 2025',
    day: 'Saturday',
    venue: 'Eddie\'s Attic',
    city: 'Decatur, GA',
    time: '9:00 PM',
    ticketLink: '#',
  },
  {
    date: 'Mar 7, 2025',
    day: 'Friday',
    venue: 'The Grey Eagle',
    city: 'Asheville, NC',
    time: '8:30 PM',
    ticketLink: '#',
  },
  {
    date: 'Mar 15, 2025',
    day: 'Saturday',
    venue: 'Cat\'s Cradle',
    city: 'Carrboro, NC',
    time: '9:00 PM',
    ticketLink: '#',
  },
  {
    date: 'Apr 5, 2025',
    day: 'Saturday',
    venue: 'Station Inn',
    city: 'Nashville, TN',
    time: '8:00 PM',
    ticketLink: '#',
  },
];

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
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">Live</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-cream mb-6">
            Upcoming Shows
          </h2>
          <p className="text-gray-moss max-w-2xl mx-auto">
            Join us on the road. Nothing compares to experiencing our music live.
          </p>
        </div>

        {/* Shows List */}
        <div className="space-y-4">
          {upcomingShows.map((show, index) => (
            <div
              key={`${show.date}-${show.venue}`}
              className={`fade-in stagger-${Math.min(index + 1, 4)} bg-forest/40 rounded-lg p-6 border border-moss/30 hover:border-amber/50 transition-colors`}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                {/* Date */}
                <div className="md:w-32 flex-shrink-0">
                  <div className="flex items-center gap-2 text-amber">
                    <Calendar size={16} />
                    <span className="font-[family-name:var(--font-playfair)] text-lg">{show.date}</span>
                  </div>
                  <p className="text-gray-moss text-sm mt-1">{show.day} &bull; {show.time}</p>
                </div>

                {/* Venue & City */}
                <div className="flex-grow">
                  <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream">
                    {show.venue}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-moss text-sm mt-1">
                    <MapPin size={14} />
                    <span>{show.city}</span>
                  </div>
                </div>

                {/* Ticket Button */}
                <div className="flex-shrink-0">
                  <a
                    href={show.ticketLink}
                    className="inline-flex items-center gap-2 btn-primary px-6 py-2 rounded-full text-sm font-medium"
                  >
                    Tickets
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Shows Message */}
        <div className="mt-12 text-center fade-in">
          <div className="inline-block bg-moss/30 rounded-full px-6 py-3">
            <p className="text-cream/80 text-sm">
              More dates coming soon. Sign up for our newsletter to be the first to know.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
