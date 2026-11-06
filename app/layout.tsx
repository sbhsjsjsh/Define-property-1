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
  metadataBase: new URL('https://define-property-dadar.vercel.app'),
  title: {
    default: 'Define Property | Premium Mumbai Real Estate',
    template: '%s | Define Property',
  },
  description: 'Luxury real estate advisory in Mumbai. Specializing in Dadar, Bandra, and South Mumbai premium properties.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Define Property | Premium Mumbai Real Estate',
    description: 'Luxury real estate advisory in Mumbai. Specializing in Dadar, Bandra, and South Mumbai premium properties.',
    type: 'website',
    images: ['/src/assets/images/hero_mumbai_luxury_1793993695588.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Define Property | Premium Mumbai Real Estate',
    description: 'Luxury real estate advisory in Mumbai.',
    images: ['/src/assets/images/hero_mumbai_luxury_1793993695588.jpg'],
  },
  verification: {
    google: 'ZS7Ji6uzAvCK4ZWV-kfNVwciVcpp0w9o9JPaGPKRc4Q',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  'name': 'Define Property',
  'image': '/src/assets/images/favicon_premium_dp_1793996081377.jpg',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'Senapati Bapat Marg, Dadar West',
    'addressLocality': 'Mumbai',
    'addressRegion': 'Maharashtra',
    'postalCode': '400028',
    'addressCountry': 'IN'
  },
  'url': 'https://define-property-dadar.vercel.app',
  'description': 'Premium real estate advisory for luxury properties in Mumbai, specializing in Dadar, Bandra, and South Mumbai.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/src/assets/images/favicon_premium_dp_1793996081377.jpg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-white text-slate-950 dark:bg-neutral-950 dark:text-neutral-50" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
