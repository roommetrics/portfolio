"use client";
import React from "react";
import CalendlyButton from "@/Components/CalendlyButton";

const Page = () => {
  const packages = [
    {
      id: 1,
      title: "Starter Website",
      description:
        "Ideal als moderne Online-Visitenkarte – schnell startklar und klar strukturiert.",
      features: [
        "Eine Seite mit allen wichtigen Infos (Start/Leistungen/Kontakt)",
        "Modernes, individuelles Design passend zu Ihrer Marke",
        "Auf dem Handy und bei Google gut sichtbar",
        "Lieferzeit: in 48 Stunden online",
        "Texte & Bilder später selbst pflegen (CMS optional +300 €)",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      gradient: "from-emerald-500 to-teal-400",
      bgGradient: "from-emerald-500/10 to-teal-400/10",
      borderColor: "border-emerald-500/20",
      price: "890 €",
    },
    {
      id: 2,
      title: "Business Website",
      description:
        "Unser Bestseller für die meisten Unternehmen – mehr Seiten, mehr Wirkung, leicht zu pflegen.",
      features: [
        "Bis zu 5 Seiten (Start, Leistungen, Über uns, Galerie, Kontakt)",
        "Inhalte selbst ändern – kinderleichtes Redaktionssystem (CMS inklusive)",
        "Sehr schnelle Ladezeiten und saubere Struktur",
        "Suchmaschinen-Optimierung für bessere Auffindbarkeit",
        "Schnell startklar: in 48 Stunden online",
      ],
      tag: "Beliebtestes Paket",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 17l-5.878 3.09 1.122-6.545L2.488 8.91l6.561-.955L12 2l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z"
          />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
      borderColor: "border-blue-500/40",
      price: "1.390 €",
      highlight: true,
    },
    {
      id: 3,
      title: "Premium Website",
      description:
        "Für Unternehmen mit besonderen Anforderungen – flexibel erweiterbar und mit individuellen Funktionen.",
      features: [
        "Mehr als 5 Seiten – viel Platz für Inhalte",
        "Inhalte selbst pflegen – leistungsstarkes CMS inklusive",
        "Individuelle Funktionen wie Reservierung, Blog oder Mitgliederbereich",
        "Skalierbar, extrem schnell und stabil",
        "Persönliches Onboarding und priorisierter Support",
      ],
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          {/* Gem/Crown style icon (single path for clarity) */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 3h12l3 4-9 14L3 7l3-4z"
          />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-500/10 to-pink-400/10",
      borderColor: "border-purple-500/20",
      price: "1.890 €",
    },
  ];

  const maintenance = [
    {
      title: "Basic",
      price: "29 €/Monat",
      features: [
        "Sicheres Hosting & SSL-Zertifikat",
        "Regelmäßige technische Updates",
        "Überwachung der Erreichbarkeit",
      ],
    },
    {
      title: "Pro",
      price: "79 €/Monat",
      features: [
        "Monatlich bis 30 Min. Änderungswünsche inklusive",
        "Aktive Sicherheitsüberwachung & schnelle Fehlerbehebung",
        "Monatlicher SEO- & Leistungsreport",
        "Performance-Optimierungen bei Bedarf",
      ],
    },
  ];

  const addons = [
    { title: "Online-Reservierungsformular", price: "300 €" },
    {
      title: "Profi-Reservierungssystem",
      price: "auf Anfrage",
      description: "Resmio/OpenTable Integration",
    },
    { title: "Foto-Galerie mit CMS", price: "200 €" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Persönliches Erstgespräch",
      description:
        "In einem unverbindlichen Gespräch klären wir Ihre Ziele, Wünsche und Anforderungen – so entsteht ein klarer Plan für Ihre neue Website.",
    },
    {
      step: "02",
      title: "Entwicklung & Umsetzung",
      description:
        "Wir setzen Ihre Website professionell um – modern, responsive und optimiert für neue Kunden. Währenddessen halten wir Sie über Fortschritte auf dem Laufenden.",
    },
    {
      step: "03",
      title: "Feedback & Testphase",
      description:
        "Ihre Website wird auf einer Testseite live gestellt, damit Sie sie in Ruhe anschauen können. Sie geben Feedback und wir passen alles an, bis Sie vollkommen zufrieden sind.",
    },
    {
      step: "04",
      title: "Go-Live & Support",
      description:
        "Nach Ihrem finalen Go geben wir die Website frei. Danach unterstützen wir Sie weiterhin, sorgen für reibungslosen Betrieb und helfen bei Updates oder Erweiterungen.",
    },
  ];

  // Page uses global attribute-driven animations in Components/ScrollAnimations

  return (
    <section
      className="min-h-screen w-full pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
      role="region"
      aria-labelledby="services-heading"
    >
      {/* SEO: Offer & Breadcrumb JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Website erstellen lassen",
            description: "Webentwicklung & Webdesign Pakete (Starter, Business, Premium) – SEO-optimiert, schnell, responsive.",
            provider: { "@type": "Organization", name: "Roommetrics Developments", url: "https://roommetrics.dev" },
            areaServed: { "@type": "Country", name: "Austria" },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Website Pakete",
              itemListElement: [
                { "@type": "Offer", price: 890, priceCurrency: "EUR", name: "Starter Website" },
                { "@type": "Offer", price: 1390, priceCurrency: "EUR", name: "Business Website" },
                { "@type": "Offer", price: 1890, priceCurrency: "EUR", name: "Premium Website" }
              ]
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Startseite", item: "https://roommetrics.dev/" },
              { "@type": "ListItem", position: 2, name: "Services", item: "https://roommetrics.dev/services" }
            ]
          })
        }}
      />
      <style jsx>{`
        .floating-orb {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(
            135deg,
            rgba(59, 130, 246, 0.1),
            rgba(6, 182, 212, 0.1)
          );
          filter: blur(40px);
          animation: float 8s ease-in-out infinite;
        }

        .floating-orb:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-orb:nth-child(2) {
          top: 60%;
          right: 10%;
          animation-delay: 4s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        .gradient-text {
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #8b5cf6);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* Refined opening animation for page H1 */
        .hero-title {
          will-change: transform, opacity, filter;
          animation: heroTitleIn 820ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both;
        }
        @keyframes heroTitleIn {
          0% { opacity: 0; transform: translateY(18px) scale(0.985); filter: blur(6px); }
          60% { opacity: 1; transform: translateY(0) scale(1.01); filter: blur(0); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-title { animation: none; opacity: 1; transform: none; filter: none; }
        }
      `}</style>

      <div className="floating-orb" />
      <div className="floating-orb" />

      <div className="text-center mb-10 sm:mb-14 lg:mb-16 fade-in">
        <h1 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-3 sm:mb-5 uppercase leading-tight hero-title">
          <span className="gradient-text">Website erstellen lassen</span>
          <br className="sm:hidden" />
          <span className="text-white/90"> – Pakete & Preise</span>
        </h1>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full mx-auto" />
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/70 max-w-3xl mx-auto">
          Webentwicklung in Österreich für KMU: moderne, schnelle Websites – SEO‑optimiert, mobilfreundlich und klar auf Neukunden ausgelegt. Wählen Sie das passende Paket: Starter, Business oder Premium.
        </p>
      </div>

      {/* Packages */}
      <div className="max-w-7xl mx-auto mb-16 lg:mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`fade-in group relative ${pkg.highlight ? "lg:scale-105" : ""}`}
            >
              <div
                className={`relative h-full p-5 md:p-6 lg:p-7 bg-gradient-to-br ${pkg.bgGradient} backdrop-blur-sm border ${pkg.borderColor} rounded-2xl overflow-hidden transition-all duration-500 ${pkg.highlight ? "ring-2 ring-blue-400/40" : ""}`}
              >
                {pkg.tag && (
                  <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white">
                    {pkg.tag}
                  </span>
                )}

                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${pkg.gradient} rounded-xl text-white mb-6`}
                >
                  {pkg.icon}
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">
                  {pkg.title}
                </h3>

                <p className="text-white/80 mb-4 lg:mb-5 leading-relaxed text-sm sm:text-base">
                  {pkg.description}
                </p>

                <ul className="space-y-1.5 lg:space-y-1 mb-5 lg:mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li
                      key={feature}
                      className={`${idx > 2 ? "hidden xl:flex" : "flex"} items-center gap-2 text-white/70`}
                    >
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${pkg.gradient} rounded-full flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-3 lg:pt-4 border-t border-white/10">
                  <div className={`text-lg font-bold bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                    {pkg.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Maintenance */}
      <div className="max-w-5xl mx-auto mb-20 fade-in">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-3">
          Wartung & Betreuung
        </h3>
        <p className="text-center text-white/70 mb-10">
          Basic hält alles sicher am Laufen. Pro entwickelt Ihre Website aktiv weiter – mit Änderungen, Reports und Optimierungen.
        </p>
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {maintenance.map((item) => (
            <div
              key={item.title}
              className={`relative p-6 lg:p-8 bg-gradient-to-br from-slate-800/30 to-slate-700/30 border ${
                item.title === "Pro" ? "border-blue-400/40 ring-1 ring-blue-400/30" : "border-white/10"
              } rounded-2xl backdrop-blur-sm`}
            >
              {item.title === "Pro" && (
                <span className="absolute -top-3 right-4 text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full text-white shadow-md">
                  Empfohlener Plan
                </span>
              )}
              <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
              <ul className="space-y-2 mb-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-white/70">
                    <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold text-white">{item.price}</div>
                {item.title === "Pro" && (
                  <span className="text-xs text-blue-300">Mehr Leistung für wachsende Websites</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div className="max-w-5xl mx-auto mb-20 fade-in">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-10">
          Add-ons
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {addons.map((addon) => (
            <div
              key={addon.title}
              className="p-6 lg:p-8 bg-gradient-to-br from-slate-800/30 to-slate-700/30 border border-white/10 rounded-2xl backdrop-blur-sm text-center"
            >
              <h4 className="text-lg font-bold text-white mb-2">{addon.title}</h4>
              {addon.description && (
                <p className="text-white/70 text-sm mb-2">{addon.description}</p>
              )}
              <div className="text-lg font-bold text-white">{addon.price}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="max-w-6xl mx-auto mb-20 fade-in">
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Unser <span className="gradient-text">Entwicklungsprozess</span>
          </h3>
          <p className="text-white/70 text-lg">
            Von der Idee bis zur erfolgreichen Umsetzung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={step.step} className="relative text-center fade-in">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-white/70 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center fade-in">
        <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Bereit für Ihr nächstes Projekt?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung und einen unverbindlichen Designvorschlag für Ihr Projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CalendlyButton text="Kostenloses Erstgespräch buchen" />
          </div>
        </div>
      </div>

      <div className="mt-20 sm:mt-24 lg:mt-32 flex justify-center">
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default Page;
