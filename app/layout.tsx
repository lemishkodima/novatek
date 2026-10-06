import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './components/SiteChrome';
import ClientEnhancements from './components/ClientEnhancements';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.novatek-international.com'),
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  title: 'NOVATEK International | AI, Robotics & Data Solutions',
  description: 'AI, robotics and data solutions for manufacturers and logistics operators, from business assessment and pilot deployment to integration and lifecycle support.',
  openGraph: {
    title: 'NOVATEK International | AI, Robotics & Data Solutions',
    description: 'Practical AI, robotics and data solutions for manufacturing and logistics operations.',
    url: '/',
    siteName: 'NOVATEK International',
    images: [{ url: '/images/hero-robotics.webp', width: 2056, height: 765 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVATEK International | AI, Robotics & Data Solutions',
    description: 'Practical AI, robotics and data solutions for manufacturing and logistics operations.',
    images: ['/images/hero-robotics.webp'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NOVATEK International',
    url: 'https://www.novatek-international.com',
    email: 'sergey@novatek-international.com',
    telephone: '+380671234567',
    description: 'AI, robotics, automation and data solutions for manufacturing and logistics operations.',
    areaServed: ['Europe', 'Asia'],
  };

  return <html lang="en"><body><Header />{children}<Footer /><ClientEnhancements /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
