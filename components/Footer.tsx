'use client';

import { useState, type ComponentType, type SVGProps } from 'react';
import { ArrowUp, Instagram, Youtube } from 'lucide-react';
import Image from 'next/image';

// X (formerly Twitter) — lucide doesn't ship the rebranded glyph yet
function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// SoundCloud — simplified waveform mark
function SoundCloudIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M1.5 14.5v-2a.5.5 0 011 0v2a.5.5 0 01-1 0zm2 1.5v-5a.5.5 0 011 0v5a.5.5 0 01-1 0zm2 1V9a.5.5 0 011 0v8a.5.5 0 01-1 0zm2 .5V7a.5.5 0 011 0v10.5a.5.5 0 01-1 0zM10 18V6.5a.5.5 0 011 0V18a.5.5 0 01-1 0zm2.5.5V8a4.5 4.5 0 018.972-.514A3.5 3.5 0 0120.5 18.5h-7.5a.5.5 0 01-.5-.5z" />
    </svg>
  );
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#members', label: 'Band' },
  { href: '#shows', label: 'Shows' },
  { href: '#contact', label: 'Contact' },
];

type SocialLink = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  { icon: Instagram,      label: 'Instagram',  href: 'https://www.instagram.com/theangeloakorchestra' },
  { icon: Youtube,        label: 'YouTube',    href: 'https://www.youtube.com/@AngelOakOrchestra' },
  { icon: SoundCloudIcon, label: 'SoundCloud', href: 'https://soundcloud.com/angel-oak-orchestra' },
  { icon: XIcon,          label: 'X',          href: 'https://x.com/oak_angel16177' },
];

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

export default function Footer() {
  const [email, setEmail] = useState('');
  const [botField, setBotField] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'newsletter',
          email,
          'bot-field': botField,
          source: 'footer',
          subscribed_at: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status})`);
      }

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
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
          <form
            name="newsletter"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            {/* Netlify form metadata */}
            <input type="hidden" name="form-name" value="newsletter" />
            <input type="hidden" name="source" value="footer" />
            {/* Honeypot — hidden from real users */}
            <p className="hidden">
              <label>
                Don&apos;t fill this out:{' '}
                <input
                  name="bot-field"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                />
              </label>
            </p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === 'submitting' || status === 'success'}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 bg-forest border border-moss/30 rounded-full text-cream placeholder-gray-moss/60 focus:border-amber focus:outline-none transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'submitting' || status === 'success'}
              className="btn-primary px-6 py-3 rounded-full font-medium whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting'
                ? 'Subscribing…'
                : status === 'success'
                ? 'Subscribed ✓'
                : 'Subscribe'}
            </button>
          </form>
          {status === 'success' && (
            <p className="text-amber text-sm mt-4">
              Thanks for joining — we&apos;ll be in touch when there&apos;s news worth sharing.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-300 text-sm mt-4">
              Sorry — {errorMessage || 'something went wrong.'} Please try again.
            </p>
          )}
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
              Folk & Americana from Oskarshamn, Sweden.
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
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Angel Oak Orchestra on ${social.label}`}
                  className="w-10 h-10 rounded-full border border-moss/30 flex items-center justify-center text-gray-moss hover:text-amber hover:border-amber transition-colors"
                >
                  <social.icon width={18} height={18} />
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
