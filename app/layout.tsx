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
  title: "Roommetrics Developments - Professionelle Webentwicklung & Websites",
  description: "Moderne Websites und Web-Anwendungen für Ihr Unternehmen. Webentwickler aus Österreich - React, Next.js, TypeScript. Kostenlose Beratung.",
  keywords: ["Webentwickler", "Website erstellen", "Webentwicklung Österreich", "React Developer", "Next.js", "Landing Page", "Web Anwendung", "Responsive Design", "SEO"],
  authors: [{ name: "Nico Zimmermann", url: "https://roommetrics.dev" }],
  creator: "Roommetrics Developments",
  publisher: "Roommetrics Developments",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: "https://roommetrics.dev",
    title: "Roommetrics Developments - Professionelle Webentwicklung",
    description: "Moderne Websites und Web-Anwendungen für Ihr Unternehmen. Webentwickler aus Österreich.",
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
  return (
    <html lang="de">
      <body
        className={`${ibmPlexSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
