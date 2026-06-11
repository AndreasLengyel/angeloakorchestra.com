import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lost in the woods · Angel Oak Orchestra',
  description:
    'This page wandered off the path. The oak is still standing — let us walk you back home.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-deep">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/angel-oak.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/75 to-forest-deep" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-amber/10" />
      </div>

      {/* Top wordmark — discreet, doubles as a way home */}
      <Link
        href="/"
        className="absolute top-8 left-1/2 -translate-x-1/2 z-20 font-[family-name:var(--font-display)] text-cream/70 hover:text-amber transition-colors text-xs uppercase tracking-[0.35em]"
      >
        Angel Oak Orchestra
      </Link>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* Divider */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber to-transparent" />
        </div>

        {/* Eyebrow */}
        <p className="text-amber uppercase tracking-[0.3em] text-xs mb-6 drop-shadow">
          Off the trail
        </p>

        {/* Big 404 — the 0 floats as a knothole in the woods */}
        <h1
          className="font-[family-name:var(--font-display)] text-[7rem] sm:text-[11rem] md:text-[15rem] text-cream leading-[0.85] mb-2 drop-shadow-lg select-none"
          aria-label="404 — Page not found"
        >
          <span>4</span>
          <span className="text-amber italic inline-block notfound-zero">0</span>
          <span>4</span>
        </h1>

        {/* Poetic line */}
        <p className="font-[family-name:var(--font-display)] italic text-cream/90 text-xl sm:text-2xl md:text-3xl mt-6 mb-4 drop-shadow">
          This page wandered off the path.
        </p>
        <p className="text-gray-moss text-base sm:text-lg max-w-md mx-auto">
          The oak is still standing. Let&apos;s walk you back.
        </p>

        {/* Decorative divider */}
        <div className="my-10 flex justify-center">
          <div className="w-12 h-[1px] bg-amber/60" />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary px-8 py-3 rounded-full font-medium tracking-wide inline-flex items-center justify-center gap-2"
          >
            <span aria-hidden="true">←</span> Back to the porch
          </Link>
          <Link
            href="/#music"
            className="btn-secondary px-8 py-3 rounded-full font-medium tracking-wide inline-flex items-center justify-center"
          >
            Hear the debut single
          </Link>
        </div>
      </div>

      {/* Soft bottom fade so the page sits inside a "clearing" */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-forest-deep via-forest-deep/60 to-transparent z-[5] pointer-events-none" />
    </main>
  );
}
