import type {Metadata} from 'next';
import './globals.css';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Define Property | Premium Mumbai Real Estate',
  description: 'Luxury real estate advisory in Mumbai. Specializing in Bandra, South Mumbai, and BKC premium properties.',
  openGraph: {
    title: 'Define Property | Premium Mumbai Real Estate',
    description: 'Luxury real estate advisory in Mumbai. Specializing in Bandra, South Mumbai, and BKC premium properties.',
    type: 'website',
    images: ['/src/assets/images/hero_mumbai_luxury_1793993695588.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Define Property | Premium Mumbai Real Estate',
    description: 'Luxury real estate advisory in Mumbai.',
    images: ['/src/assets/images/hero_mumbai_luxury_1793993695588.jpg'],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/src/assets/images/favicon_define_property_1793994572669.jpg" />
      </head>
      <body className="font-body antialiased bg-white text-slate-950 dark:bg-neutral-950 dark:text-neutral-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
