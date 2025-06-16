import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";

import "./globals.css";
import Navbar from "@/Components/Navbar";


const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex',
  subsets: ['latin'],
  display: 'swap',
  weight: "500",
})

export const metadata: Metadata = {
  title: "Roommetrics Developments",
  description: "Modern Websites for modern Businesses.",
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
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
