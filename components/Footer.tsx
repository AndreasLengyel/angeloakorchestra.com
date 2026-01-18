'use client';

import { useState } from 'react';
import { ArrowUp, Instagram, Facebook, Youtube, Music } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#members', label: 'Band' },
  { href: '#shows', label: 'Shows' },
  { href: '#contact', label: 'Contact' },
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Music, label: 'Spotify', href: '#' },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing! (This is a demo - form is not connected)');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      {/* Background Image with heavy overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/angel-oak.jpg"
          alt=""
          fill
          className="object-cover object-top opacity-20"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-forest-deep/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="text-center mb-16">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl text-cream mb-4">
            Stay Connected
          </h3>
          <p className="text-gray-moss mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for tour updates, new releases, and stories from the road.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-forest border border-moss/30 rounded-full text-cream placeholder-gray-moss/60 focus:border-amber focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="btn-primary px-6 py-3 rounded-full font-medium whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Divider */}
        <div className="section-divider mb-12"></div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h4 className="font-[family-name:var(--font-playfair)] text-xl text-cream mb-4">
              Angel Oak Orchestra
            </h4>
            <p className="text-gray-moss text-sm leading-relaxed">
              Folk & Americana from Charleston, South Carolina.
              Rooted in tradition. Reaching toward something new.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h4 className="text-amber uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <nav className="flex flex-wrap md:justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-moss hover:text-cream text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:text-right">
            <h4 className="text-amber uppercase tracking-wider text-sm mb-4">Follow Along</h4>
            <div className="flex md:justify-end gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-moss/30 flex items-center justify-center text-gray-moss hover:text-amber hover:border-amber transition-colors"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-moss/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-moss text-sm">
            &copy; {new Date().getFullYear()} Angel Oak Orchestra. All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-moss hover:text-amber transition-colors text-sm"
          >
            Back to top
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
