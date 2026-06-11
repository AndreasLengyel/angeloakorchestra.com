import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://angeloakorchestra.com";
const GA_ID = "G-N8YH6L22DV";

// Cormorant Garamond — brand display face (per AOO Design Sheet)
const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ecdec3" },
    { media: "(prefers-color-scheme: dark)",  color: "#0e120f" },
  ],
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Angel Oak Orchestra | Cinematic Americana",
    template: "%s · Angel Oak Orchestra",
  },
  description:
    "Angel Oak Orchestra — Cinematic Americana from Sweden. Poetic. Authentic. Timeless. Debut single 'I Think I Love You' out June 12, 2026.",
  alternates: {
    canonical: "/",
  },
  applicationName: "Angel Oak Orchestra",
  category: "music",
  formatDetection: { telephone: true, email: true, address: true },
  keywords: [
    "Angel Oak Orchestra",
    "Cinematic Americana",
    "folk music",
    "Americana",
    "Nashville country",
    "Oskarshamn",
    "Sweden",
  ],
  authors: [{ name: "Angel Oak Orchestra" }],
  // Favicons resolved automatically from app/icon.png and app/apple-icon.png
  verification: {
    google: "YdAJ6DiQmgye477Rn0RGaXR7JzvOsd5S0BFANzSQwCE",
  },
  openGraph: {
    title: "Angel Oak Orchestra | Cinematic Americana",
    description:
      "Cinematic Americana — Poetic, Authentic, Timeless. Debut single out June 12, 2026.",
    type: "website",
    url: SITE_URL,
    siteName: "Angel Oak Orchestra",
    locale: "en_US",
    images: [
      {
        url: "/images/AOO_Spotify_Header_Band_2660x1140.png",
        width: 2660,
        height: 1140,
        alt: "Angel Oak Orchestra — six silhouettes walking toward an ancient oak at sunset",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Angel Oak Orchestra | Cinematic Americana",
    description: "Debut single 'I Think I Love You' out June 12, 2026.",
    images: ["/images/AOO_Spotify_Header_Band_2660x1140.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${inter.variable} antialiased`}>
        {/* Google Analytics 4 — loads after the page is interactive
            so it never blocks initial paint or hydration. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
