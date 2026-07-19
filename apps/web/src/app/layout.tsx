import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    default: 'Narayana Group | Premium Real Estate in Ranchi, Jharkhand',
    template: '%s | Narayana Group Real Estate',
  },
  description:
    'Discover premium properties, plots, and residential projects by Narayana Group. Expert real estate solutions in Ranchi, Jharkhand and beyond. Building Trust. Creating Landmarks.',
  keywords: [
    'real estate',
    'properties',
    'plots',
    'Ranchi',
    'Jharkhand',
    'residential',
    'commercial',
  ],
  robots: 'index, follow',
  authors: [{ name: 'Narayana Group' }],
  creator: 'Narayana Group',
  publisher: 'Narayana Group',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.narayanagroup.com',
    siteName: 'Narayana Group Real Estate',
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@narayanagroup',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
