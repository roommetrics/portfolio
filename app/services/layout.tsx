import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dienstleistungen - Webentwicklung & Website Erstellung | Roommetrics",
    description: "Professionelle Webentwicklung Services: Landing Pages, Business Websites, Web-Apps. Kostenlose Beratung ✓ Responsive Design ✓ SEO-optimiert ✓",
    keywords: ["Webentwicklung Services", "Website erstellen lassen", "Landing Page Entwicklung", "Business Website", "Web Anwendung", "Webentwickler beauftragen"],
    openGraph: {
        title: "Webentwicklung Services - Roommetrics Developments",
        description: "Von Landing Pages bis zu komplexen Web-Anwendungen - Ihr Partner für professionelle Webentwicklung.",
        url: "https://roommetrics.dev/services"
    }
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
