import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Angel Oak Orchestra | Folk & Americana",
  description: "Angel Oak Orchestra is a folk and Americana band named after the ancient Angel Oak tree on Johns Island, South Carolina. Rooted in tradition. Reaching toward something new.",
  keywords: ["folk music", "Americana", "band", "Angel Oak", "live music", "South Carolina"],
  authors: [{ name: "Angel Oak Orchestra" }],
  openGraph: {
    title: "Angel Oak Orchestra | Folk & Americana",
    description: "Rooted in tradition. Reaching toward something new.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
