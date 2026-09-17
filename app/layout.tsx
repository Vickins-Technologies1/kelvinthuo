import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kelvinthuo.vickinstechnologies.com'),
  title: 'Kelvin Thuo | CEO, Founder & Senior Software Developer',
  description:
    'Official portfolio of Kelvin Thuo, CEO & Founder of Vickins Technologies and senior software developer focused on software engineering, product development and technical leadership.',
  openGraph: {
    title: 'Kelvin Thuo | CEO, Founder & Senior Software Developer',
    description:
      'Founder-led software engineering, product development and technical leadership through Vickins Technologies.',
    type: 'website',
    url: 'https://kelvinthuo.vickinstechnologies.com/',
    images: [{ url: '/images/kelvin-portrait.png', alt: 'Kelvin Thuo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Thuo | CEO, Founder & Senior Software Developer',
    description:
      'Founder-led software engineering, product development and technical leadership through Vickins Technologies.',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/images/vickins-logo.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
