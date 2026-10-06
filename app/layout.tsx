import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './components/SiteChrome';

export const metadata: Metadata = {
  title: 'NOVATEK International | AI, Robotics & Data Solutions',
  description: 'NOVATEK International provides AI solutions, robotics integration, automation, dataset development and data solutions for businesses worldwide.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
