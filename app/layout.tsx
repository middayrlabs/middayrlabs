import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Middayr Labs — Building Simple, Powerful Mobile Apps',
  description:
    'Middayr Labs is an independent mobile app developer building Flutter apps focused on performance, simplicity, and privacy. Explore our apps like HabitFlow.',
  keywords: [
    'Middayr Labs',
    'mobile apps',
    'Flutter developer',
    'HabitFlow',
    'habit tracker',
    'Android apps',
    'Play Store',
    'independent developer',
  ],
  authors: [{ name: 'Middayr Labs', url: 'https://middayrlabs.com' }],
  creator: 'Middayr Labs',
  metadataBase: new URL('https://middayrlabs.com'),
  openGraph: {
    title: 'Middayr Labs — Building Simple, Powerful Mobile Apps',
    description:
      'Independent Flutter developer creating clean, offline-first mobile apps focused on privacy and performance.',
    url: 'https://middayrlabs.com',
    siteName: 'Middayr Labs',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Middayr Labs',
    description: 'Building simple, powerful mobile apps.',
    creator: '@middayrlabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
