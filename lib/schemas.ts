export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Roommetrics Developments",
    "description": "Professionelle Webentwicklung und Website-Erstellung für Unternehmen",
    "url": "https://roommetrics.dev",
    "logo": "https://roommetrics.dev/Logo_Full.svg",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+43-677-64200741",
        "contactType": "customer service",
        "email": "office@roommetrics.dev",
        "availableLanguage": ["German", "English"]
    },
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "AT",
        "addressLocality": "Austria"
    },
    "founder": {
        "@type": "Person",
        "name": "Nico Zimmermann"
    },
    "sameAs": [
        "https://github.com/roommetrics",
        "https://linkedin.com/company/roommetrics"
    ]
}

export const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Roommetrics Developments",
    "description": "Webentwickler für moderne Websites und Web-Anwendungen",
    "image": "https://roommetrics.dev/Logo_Full.svg",
    "url": "https://roommetrics.dev",
    "telephone": "+43-677-64200741",
    "email": "office@roommetrics.dev",
    "priceRange": "€€",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "AT"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 48.2082,
        "longitude": 16.3738
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
    },
    "serviceArea": {
        "@type": "Country",
        "name": "Austria"
    }
}

export const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Webentwicklung & Website Erstellung",
    "description": "Professionelle Entwicklung von Websites, Landing Pages und Web-Anwendungen",
    "provider": {
        "@type": "Organization",
        "name": "Roommetrics Developments",
        "url": "https://roommetrics.dev"
    },
    "serviceType": "Webentwicklung",
    "areaServed": {
        "@type": "Country",
        "name": "Austria"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Webentwicklung Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Landing Page Entwicklung",
                    "description": "Moderne Landing Pages für bessere Conversions"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Business Website",
                    "description": "Vollständige Unternehmenswebsites mit CMS"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Web Application",
                    "description": "Maßgeschneiderte Web-Anwendungen"
                }
            }
        ]
    }
}
