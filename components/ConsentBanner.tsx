'use client';

import { useState, useSyncExternalStore } from 'react';
import { X } from 'lucide-react';

const STORAGE_KEY = 'aoo-consent-v1';

type Choice = 'granted' | 'denied' | null;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// External-store helpers — let React subscribe to client-only state
// (localStorage) without triggering the "setState in effect" rule.
const subscribe = () => () => {};
const getServerSnapshot = (): boolean => false;
const getClientSnapshot = (): boolean => true;

function readStoredChoice(): Choice {
  if (typeof window === 'undefined') return null;
  try {
    return (localStorage.getItem(STORAGE_KEY) as Choice) ?? null;
  } catch {
    return null;
  }
}

export default function ConsentBanner() {
  // Gate render on hydration so SSR + first paint never flashes the banner
  // for returning visitors who already chose.
  const isClient = useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);

  // In-session override: once the user clicks, this hides the banner
  // without waiting on a storage-event subscription.
  const [sessionChoice, setSessionChoice] = useState<Choice>(null);

  const record = (next: 'granted' | 'denied') => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked (private mode etc.) — banner will reappear next visit.
    }
    window.gtag?.('consent', 'update', {
      analytics_storage: next === 'granted' ? 'granted' : 'denied',
    });
    setSessionChoice(next);
  };

  if (!isClient) return null;
  const choice = sessionChoice ?? readStoredChoice();
  if (choice !== null) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 sm:px-6 sm:pb-6 pointer-events-none"
    >
      <div className="pointer-events-auto max-w-3xl mx-auto bg-ink/95 backdrop-blur-md border border-brass/30 rounded-xl shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 relative">
        <div className="flex-1 text-cream/85 text-sm leading-relaxed pr-6 sm:pr-0">
          <p>
            We use a single analytics cookie (Google Analytics) to understand
            how visitors find the music. Nothing is shared with advertisers.
            See our{' '}
            <a
              href="/privacy"
              className="text-brass-bright hover:underline"
            >
              privacy notice
            </a>
            .
          </p>
        </div>
        <div className="flex gap-3 sm:shrink-0">
          <button
            type="button"
            onClick={() => record('denied')}
            className="btn-secondary px-5 py-2 rounded-full text-sm tracking-wide"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => record('granted')}
            className="btn-primary px-5 py-2 rounded-full text-sm tracking-wide"
          >
            Accept
          </button>
        </div>
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => record('denied')}
          className="absolute top-2 right-2 sm:hidden text-cream/60 hover:text-brass-bright p-1"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
