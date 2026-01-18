'use client';

import { useEffect, useRef } from 'react';
import { Play, ExternalLink } from 'lucide-react';

const albums = [
  {
    title: 'Beneath the Canopy',
    year: '2024',
    type: 'Full Album',
    tracks: [
      'Morning Mist',
      'Lowcountry Lullaby',
      'Roots Run Deep',
      'The Witness Tree',
      'Golden Hour',
      'Spanish Moss',
      'Coming Home',
      'Ancient Arms',
    ],
  },
  {
    title: 'First Light',
    year: '2023',
    type: 'EP',
    tracks: [
      'Dawn Breaking',
      'Marsh Song',
      'Old Stories',
      'Salt Air',
    ],
  },
  {
    title: 'Live at the Dock Street',
    year: '2023',
    type: 'Live Album',
    tracks: [
      'Intro / The Gathering',
      'Lowcountry Lullaby (Live)',
      'Improvisation in E',
      'Coming Home (Live)',
      'Encore: Morning Mist',
    ],
  },
];

export default function Music() {
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
      id="music"
      ref={sectionRef}
      className="py-24 md:py-32 bg-forest-deep texture-overlay"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">Listen</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-cream mb-6">
            Our Music
          </h2>
          <p className="text-gray-moss max-w-2xl mx-auto">
            Explore our recordings — from studio albums to live performances.
            Each collection captures a different facet of our sound.
          </p>
        </div>

        {/* Albums Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {albums.map((album, index) => (
            <div
              key={album.title}
              className={`fade-in stagger-${index + 1} album-card bg-forest/50 rounded-xl overflow-hidden border border-moss/30`}
            >
              {/* Album Cover Placeholder */}
              <div className="aspect-square bg-gradient-to-br from-moss/40 to-forest relative group cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-cream/40">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-lg border border-cream/20 flex items-center justify-center bg-forest-deep/50">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                    </div>
                    <p className="text-xs uppercase tracking-wider">Album Art</p>
                  </div>
                </div>
                {/* Play overlay */}
                <div className="absolute inset-0 bg-forest-deep/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-amber flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-8 h-8 text-forest-deep ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Album Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-1">
                      {album.title}
                    </h3>
                    <p className="text-gray-moss text-sm">
                      {album.year} &bull; {album.type}
                    </p>
                  </div>
                </div>

                {/* Track List */}
                <div className="mt-4 space-y-2">
                  {album.tracks.slice(0, 4).map((track, i) => (
                    <div key={track} className="flex items-center text-sm text-cream/60 hover:text-cream transition-colors cursor-pointer">
                      <span className="w-5 text-moss">{i + 1}.</span>
                      <span>{track}</span>
                    </div>
                  ))}
                  {album.tracks.length > 4 && (
                    <p className="text-sm text-amber/70 mt-2">
                      +{album.tracks.length - 4} more tracks
                    </p>
                  )}
                </div>

                {/* Streaming Links */}
                <div className="mt-6 pt-4 border-t border-moss/30 flex gap-3">
                  <a
                    href="#"
                    className="text-xs uppercase tracking-wider text-gray-moss hover:text-amber transition-colors flex items-center gap-1"
                  >
                    Spotify <ExternalLink size={12} />
                  </a>
                  <a
                    href="#"
                    className="text-xs uppercase tracking-wider text-gray-moss hover:text-amber transition-colors flex items-center gap-1"
                  >
                    Apple Music <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Music CTA */}
        <div className="mt-12 text-center fade-in">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-amber hover:text-gold transition-colors"
          >
            <span className="uppercase tracking-wider text-sm">View All Releases</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
