import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './components/SiteChrome';
import ClientEnhancements from './components/ClientEnhancements';

export const metadata: Metadata = {
  metadataBase: new URL('https://international-novatek.com'),
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  title: 'NOVATEK International | AI, Robotics & Products of the Future',
  description: 'NOVATEK develops, integrates and commercializes intelligent robotic systems and AI products for global markets.',
  openGraph: {
    title: 'NOVATEK International | AI, Robotics & Products of the Future',
    description: 'We develop, integrate and commercialize intelligent robotic systems and AI products for global markets.',
    url: '/',
    siteName: 'NOVATEK International',
    images: [{ url: '/images/hero-robotics.webp', width: 2056, height: 765 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NOVATEK International | AI, Robotics & Products of the Future',
    description: 'We develop, integrate and commercialize intelligent robotic systems and AI products for global markets.',
    images: ['/images/hero-robotics.webp'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NOVATEK International',
    url: 'https://international-novatek.com',
    email: 'serhii@novatek-international.com',
    telephone: '+380968868184',
    description: 'NOVATEK builds, integrates and commercializes AI and robotic technologies for global markets.',
    areaServed: ['Europe', 'Ukraine', 'China', 'Global'],
  };

  return <html lang="en"><body><Header />{children}<Footer /><ClientEnhancements /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} /></body></html>;
}
