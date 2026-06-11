import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Angel Oak Orchestra | Cinematic Americana",
  description:
    "Angel Oak Orchestra — Cinematic Americana from Sweden. Poetic. Authentic. Timeless. Debut single 'I Think I Love You' out June 12, 2026.",
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
    images: [
      {
        url: "/images/AOO_Spotify_Header_Band_2660x1140.png",
        width: 2660,
        height: 1140,
        alt: "Angel Oak Orchestra",
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
        {children}
      </body>
    </html>
  );
}
