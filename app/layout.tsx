import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://kelvinthuo.vickinstechnologies.com';
const companyUrl = 'https://www.vickinstechnologies.com';
const githubUrl = 'https://github.com/Vickins-Technologies1';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Kelvin Thuo | Software Engineer & IT Specialist | Vickins Technologies',
  description:
    'I’m Kelvin Thuo, Founder of Vickins Technologies. I build web applications, business systems and technology solutions, and work across IT support and networking in Kenya.',
  applicationName: 'Kelvin Thuo Portfolio',
  authors: [{ name: 'Kelvin Thuo', url: siteUrl }],
  creator: 'Kelvin Thuo',
  publisher: 'Vickins Technologies',
  category: 'technology',
  openGraph: {
    title: 'Kelvin Thuo | Software Engineer & IT Specialist | Vickins Technologies',
    description:
      'I build software, business systems and technology solutions, and lead engineering through Vickins Technologies in Kenya.',
    type: 'website',
    url: `${siteUrl}/`,
    siteName: 'Kelvin Thuo | Vickins Technologies',
    locale: 'en_KE',
    images: [{ url: '/images/kelvin-portrait.png', width: 1080, height: 1080, alt: 'Kelvin Thuo, software engineer and founder of Vickins Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kelvin Thuo | Software Engineer & IT Specialist',
    description:
      'I build software, business systems and technology solutions through Vickins Technologies.',
    images: ['/images/kelvin-portrait.png'],
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  icons: { icon: '/images/vickins-logo.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${siteUrl}/#kelvin-thuo`,
    name: 'Kelvin Thuo',
    url: `${siteUrl}/`,
    image: `${siteUrl}/images/kelvin-portrait.png`,
    jobTitle: 'Software Engineer, IT Specialist and Founder',
    description:
      'I am a software engineer, IT specialist and founder of Vickins Technologies. I focus on practical software products, business systems and technology solutions.',
    affiliation: { '@id': `${companyUrl}/#organization` },
    sameAs: [githubUrl],
    knowsAbout: [
      'Software engineering',
      'Web application development',
      'Business systems',
      'IT support',
      'Networking',
      'Technology product development',
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${companyUrl}/#organization`,
    name: 'Vickins Technologies',
    url: companyUrl,
    logo: `${siteUrl}/images/vickins-logo.png`,
    founder: { '@id': `${siteUrl}/#kelvin-thuo` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    name: 'Kelvin Thuo | Vickins Technologies',
    url: `${siteUrl}/`,
    description: metadata.description,
    publisher: { '@id': `${siteUrl}/#kelvin-thuo` },
    about: { '@id': `${siteUrl}/#kelvin-thuo` },
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        {children}
      </body>
    </html>
  );
}
