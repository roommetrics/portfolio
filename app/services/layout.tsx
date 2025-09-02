import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Website erstellen lassen in Österreich – Webentwicklung & Webdesign | Roommetrics",
    description: "Webentwickler in Österreich: Website erstellen lassen (Starter, Business, Premium). Schnelle Ladezeiten, SEO-optimiert, responsive. Kostenlose Erstberatung.",
    keywords: [
        "Website erstellen",
        "Website erstellen lassen",
        "Webentwickler Österreich",
        "Webdesign Agentur Österreich",
        "Webdesigner Wien",
        "Landing Page",
        "Business Website",
        "Web Anwendung",
        "CMS Website",
        "SEO optimiert"
    ],
    alternates: {
        canonical: "https://roommetrics.dev/services",
    },
    openGraph: {
        title: "Website erstellen lassen in Österreich – Roommetrics Developments",
        description: "Pakete für KMU: Starter, Business, Premium. Schnell, modern, SEO-optimiert.",
        url: "https://roommetrics.dev/services",
        siteName: "Roommetrics Developments",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Website erstellen lassen – Roommetrics" }]
    },
    robots: "index, follow",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
