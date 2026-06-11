import type { Metadata } from 'next';
import Link from 'next/link';

const LAST_UPDATED = 'June 11, 2026';

export const metadata: Metadata = {
  title: 'Privacy & Cookies',
  description:
    'How Angel Oak Orchestra handles the small amount of data the website touches — analytics, newsletter sign-ups, and embedded media.',
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy & Cookies · Angel Oak Orchestra',
    description:
      'How Angel Oak Orchestra handles the small amount of data the website touches.',
    type: 'article',
    url: '/privacy',
  },
};

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl text-ink mb-4">
        {title}
      </h2>
      <div className="text-bark/85 leading-relaxed space-y-4">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-parchment min-h-screen">
      {/* Top bar — quick way home */}
      <div className="border-b border-bark/10 bg-parchment/95 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="brand-wordmark text-xs sm:text-sm text-ink hover:text-brass transition-colors"
          >
            Angel Oak Orchestra
          </Link>
          <Link
            href="/"
            className="text-bark/70 hover:text-brass text-sm transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12">
          <p className="text-brass uppercase tracking-[0.25em] text-sm mb-4">
            The fine print
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl text-ink mb-4">
            Privacy &amp; Cookies
          </h1>
          <p className="text-bark/70 text-sm">Last updated {LAST_UPDATED}</p>
        </header>

        {/* TL;DR */}
        <div className="bg-ink/5 border-l-4 border-brass rounded-r-lg p-6 mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-xl text-ink mb-3">
            The short version
          </h2>
          <p className="text-bark/85 leading-relaxed">
            We&apos;re a band, not a data company. This site uses{' '}
            <strong>one analytics cookie</strong> (only if you accept), keeps the
            email you give us for the newsletter, and embeds a Spotify player.
            We don&apos;t sell or share anything. If you&apos;d rather we forget
            you, email{' '}
            <a
              href="mailto:hello@angeloakorchestra.com"
              className="text-brass hover:text-brass-bright underline"
            >
              hello@angeloakorchestra.com
            </a>{' '}
            and we will.
          </p>
        </div>

        {/* Table of contents */}
        <nav aria-label="On this page" className="mb-12">
          <p className="text-brass uppercase tracking-wider text-xs mb-3">
            On this page
          </p>
          <ul className="space-y-1.5 text-sm">
            {[
              ['who', 'Who we are'],
              ['analytics', 'Analytics &amp; cookies'],
              ['newsletter', 'Newsletter sign-ups'],
              ['forms', 'Contact form &amp; spam protection'],
              ['embeds', 'Embedded media (Spotify, etc.)'],
              ['rights', 'Your rights (GDPR)'],
              ['changes', 'Changes to this policy'],
              ['contact', 'Contact'],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="text-bark/70 hover:text-brass transition-colors"
                  dangerouslySetInnerHTML={{ __html: `→ ${label}` }}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12">
          <Section id="who" title="Who we are">
            <p>
              Angel Oak Orchestra is a folk and Americana band based in
              Oskarshamn, Sweden. The data controller for this website is the
              band collectively, reachable at{' '}
              <a
                href="mailto:hello@angeloakorchestra.com"
                className="text-brass hover:text-brass-bright underline"
              >
                hello@angeloakorchestra.com
              </a>
              .
            </p>
            <p>
              The website lives at{' '}
              <a
                href="https://angeloakorchestra.com"
                className="text-brass hover:text-brass-bright underline"
              >
                angeloakorchestra.com
              </a>{' '}
              and is hosted by{' '}
              <a
                href="https://www.netlify.com/gdpr-ccpa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass hover:text-brass-bright underline"
              >
                Netlify
              </a>
              , who process basic request logs on our behalf.
            </p>
          </Section>

          <Section id="analytics" title="Analytics & cookies">
            <p>
              We use <strong>Google Analytics 4</strong> to understand how
              visitors find the music — roughly: which pages get read, what
              countries readers come from, and whether the site loads quickly.
              We don&apos;t use any advertising features, and we don&apos;t
              share data with any other Google product.
            </p>

            <p>
              On your first visit you&apos;ll see a banner asking permission. We
              run Google&apos;s{' '}
              <a
                href="https://support.google.com/analytics/answer/9976101"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass hover:text-brass-bright underline"
              >
                Consent Mode v2
              </a>{' '}
              with everything denied by default, which means:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Before you click anything, no cookies are written to your
                browser. Google receives only anonymous, cookieless pings used
                for aggregate trend modelling.
              </li>
              <li>
                If you click <em>Accept</em>, Google Analytics writes its
                standard cookies (<code>_ga</code>, <code>_ga_*</code>) to your
                browser — they last up to two years and let GA recognise
                returning visitors so the counts aren&apos;t inflated.
              </li>
              <li>
                If you click <em>Decline</em>, no cookies are written. Ever.
              </li>
            </ul>
            <p>
              Your choice is stored locally as{' '}
              <code>aoo-consent-v1</code> in your browser&apos;s localStorage so
              we don&apos;t pester you on every visit. To change your mind:
              clear that key (DevTools → Application → Local Storage) and reload
              — the banner will return. Or just email us and we&apos;ll explain
              it over coffee.
            </p>
            <p>
              Full Google documentation:{' '}
              <a
                href="https://policies.google.com/technologies/cookies"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass hover:text-brass-bright underline"
              >
                How Google uses cookies
              </a>
              .
            </p>
          </Section>

          <Section id="newsletter" title="Newsletter sign-ups">
            <p>
              If you subscribe to the newsletter via the footer form, we store
              your email address (and the timestamp you signed up) so we can
              email you when there&apos;s new music, a show, or a story worth
              sharing.
            </p>
            <p>
              Sign-ups are processed through{' '}
              <a
                href="https://www.netlify.com/products/forms/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass hover:text-brass-bright underline"
              >
                Netlify Forms
              </a>
              . We don&apos;t share the list with anyone, ever. Every email we
              send includes a one-click unsubscribe link, and you can also ask
              us to delete you outright by replying to any message.
            </p>
          </Section>

          <Section id="forms" title="Contact form & spam protection">
            <p>
              Forms submitted through this site are routed via Netlify Forms.
              The visible fields (email, anything you type) reach our inbox.
              A hidden honeypot field protects against automated spam — bots
              fill it in and get silently dropped; humans never see it.
            </p>
          </Section>

          <Section id="embeds" title="Embedded media (Spotify, etc.)">
            <p>
              The Music section embeds a Spotify player so you can listen
              without leaving the page. When that player loads, Spotify may set
              its own cookies under their own privacy policy — we have no
              control over what they collect.
            </p>
            <p>
              If you&apos;d rather not load the embed, you can listen directly
              on{' '}
              <a
                href="https://open.spotify.com/artist/2cOQ17w2fRbsxAumPfa57d"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass hover:text-brass-bright underline"
              >
                our Spotify profile
              </a>{' '}
              instead.
            </p>
          </Section>

          <Section id="rights" title="Your rights (GDPR)">
            <p>
              Under the EU General Data Protection Regulation you can ask us at
              any time to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Show you what we have on you (right of access)</li>
              <li>Correct anything that&apos;s wrong (rectification)</li>
              <li>Delete it (erasure / &ldquo;right to be forgotten&rdquo;)</li>
              <li>Pause processing (restriction)</li>
              <li>Get a copy you can take elsewhere (portability)</li>
              <li>Object to a specific use of your data</li>
            </ul>
            <p>
              Send any of those requests to{' '}
              <a
                href="mailto:hello@angeloakorchestra.com"
                className="text-brass hover:text-brass-bright underline"
              >
                hello@angeloakorchestra.com
              </a>{' '}
              and we&apos;ll handle it within 30 days. You also have the right
              to lodge a complaint with the Swedish data protection authority,{' '}
              <a
                href="https://www.imy.se/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brass hover:text-brass-bright underline"
              >
                IMY
              </a>
              .
            </p>
          </Section>

          <Section id="changes" title="Changes to this policy">
            <p>
              If we change how we handle data — adding a new service, removing
              one, anything material — we&apos;ll update this page and bump the{' '}
              <em>Last updated</em> date at the top. Substantial changes get a
              note in the next newsletter as well.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <p>
              Questions, requests, corrections — anything privacy-related lands
              best at{' '}
              <a
                href="mailto:hello@angeloakorchestra.com"
                className="text-brass hover:text-brass-bright underline"
              >
                hello@angeloakorchestra.com
              </a>
              . Real humans, real replies.
            </p>
          </Section>
        </div>

        {/* Closing flourish */}
        <div className="section-divider mt-16 mb-10"></div>
        <p className="text-center text-bark/60 italic text-sm">
          Thanks for reading the boring page.
        </p>
      </article>
    </main>
  );
}
