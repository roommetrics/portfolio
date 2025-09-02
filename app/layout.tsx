import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { Analytics } from '@vercel/analytics/next';

import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex',
  subsets: ['latin'],
  display: 'swap',
  weight: "500",
})

export const metadata: Metadata = {
  title: "Roommetrics Developments – Website erstellen lassen & Webentwickler in Österreich",
  description: "Website erstellen lassen in Österreich: Moderne, schnelle Websites und Web-Anwendungen. Webentwickler & Webdesign Agentur für KMU – Next.js, TypeScript, SEO, Performance.",
  keywords: [
    "Website erstellen",
    "Website erstellen lassen",
    "Webentwickler Österreich",
    "Webdesigner Österreich",
    "Webdesign Agentur",
    "Webentwicklung Österreich",
    "Website Agentur Wien",
    "Next.js",
    "Landing Page",
    "Web Anwendung",
    "Responsive Design",
    "SEO"
  ],
  authors: [{ name: "Nico Zimmermann", url: "https://roommetrics.dev" }],
  creator: "Roommetrics Developments",
  publisher: "Roommetrics Developments",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://roommetrics.dev",
    title: "Roommetrics Developments – Website erstellen lassen in Österreich",
    description: "Moderne Websites & Web-Apps für KMU. Webentwickler in Österreich.",
    siteName: "Roommetrics Developments",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Roommetrics Developments - Webentwicklung"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Roommetrics Developments - Professionelle Webentwicklung",
    description: "Moderne Websites und Web-Anwendungen für Ihr Unternehmen.",
    images: ["/og-image.jpg"]
  },
  alternates: {
    canonical: "https://roommetrics.dev"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://roommetrics.dev';
  const orgJson = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Roommetrics Developments',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/Banner.png`,
        },
        sameAs: [
          'https://www.instagram.com/roommetrics.dev/',
          'https://x.com/roommetricsDev',
          'https://www.linkedin.com/company/107447080/admin/dashboard/',
          'https://github.com/roommetrics',
        ],
        email: 'office@roommetrics.dev',
        areaServed: { '@type': 'Country', name: 'Austria' },
      },
      {
        '@type': 'WebSite',
        url: baseUrl,
        name: 'Roommetrics Developments',
        inLanguage: 'de-AT',
        publisher: { '@type': 'Organization', name: 'Roommetrics Developments' },
      },
    ],
  } as const;
  return (
    <html lang="de">
      <body
        className={`${ibmPlexSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJson) }}
        />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
