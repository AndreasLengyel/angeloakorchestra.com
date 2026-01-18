'use client';

import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form - just log for now
    console.log('Form submitted:', formData);
    alert('Thank you for your message! (This is a demo - form is not connected to a backend)');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-24 md:py-32 bg-cream"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <p className="text-amber uppercase tracking-[0.2em] text-sm mb-4">Get in Touch</p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl text-forest-deep mb-6">
            Contact Us
          </h2>
          <p className="text-bark max-w-2xl mx-auto">
            For booking inquiries, press requests, or just to say hello — we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="fade-in stagger-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-forest-deep mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-moss/30 rounded-lg text-forest-deep placeholder-gray-moss/60 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-forest-deep mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-moss/30 rounded-lg text-forest-deep placeholder-gray-moss/60 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-forest-deep mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-moss/30 rounded-lg text-forest-deep transition-colors"
                >
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Request</option>
                  <option value="press">Press / Media</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-forest-deep mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white border border-moss/30 rounded-lg text-forest-deep placeholder-gray-moss/60 transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary px-8 py-4 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="fade-in stagger-2">
            <div className="bg-forest-deep rounded-xl p-8 md:p-10 h-full">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-cream mb-6">
                Direct Contact
              </h3>

              <div className="space-y-8">
                {/* Booking */}
                <div>
                  <h4 className="text-amber uppercase tracking-wider text-sm mb-3">Booking</h4>
                  <div className="flex items-center gap-3 text-cream/80">
                    <Mail size={18} className="text-moss" />
                    <a href="mailto:booking@angeloakorchestra.com" className="hover:text-amber transition-colors">
                      booking@angeloakorchestra.com
                    </a>
                  </div>
                </div>

                {/* Press */}
                <div>
                  <h4 className="text-amber uppercase tracking-wider text-sm mb-3">Press & Media</h4>
                  <div className="flex items-center gap-3 text-cream/80">
                    <Mail size={18} className="text-moss" />
                    <a href="mailto:press@angeloakorchestra.com" className="hover:text-amber transition-colors">
                      press@angeloakorchestra.com
                    </a>
                  </div>
                </div>

                {/* General */}
                <div>
                  <h4 className="text-amber uppercase tracking-wider text-sm mb-3">General Inquiries</h4>
                  <div className="flex items-center gap-3 text-cream/80">
                    <Mail size={18} className="text-moss" />
                    <a href="mailto:hello@angeloakorchestra.com" className="hover:text-amber transition-colors">
                      hello@angeloakorchestra.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-cream/80 mt-2">
                    <Phone size={18} className="text-moss" />
                    <span>+1(619) 751-3333</span>
                  </div>
                </div>

                {/* Social */}
                <div>
                  <h4 className="text-amber uppercase tracking-wider text-sm mb-3">Follow Us</h4>
                  <div className="flex gap-4">
                    {['Instagram', 'Facebook', 'YouTube', 'Spotify'].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-gray-moss hover:text-amber transition-colors text-sm"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mt-10 pt-8 border-t border-moss/30">
                <p className="text-gray-moss text-sm">
                  Based in Charleston, South Carolina<br />
                  Available for touring nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
