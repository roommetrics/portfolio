

import AboutSection from '@/Components/AboutSection';
import ElegantDivider from '@/Components/ElegantDivider';
import FAQSection from '@/Components/FAQSection';
import HeroSection from '@/Components/HeroSection';
import ProjectSection from '@/Components/ProjectSection';
import ServicesSection from '@/Components/ServicesSection';
import { organizationSchema, localBusinessSchema, serviceSchema } from '@/lib/schemas';

const Page = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Was kostet eine professionelle Website?",
                acceptedAnswer: { "@type": "Answer", text: "Landing Pages starten ab 800 €. Individuelle Lösungen variieren je nach Anforderungen. Im kostenlosen Erstgespräch erhalten Sie ein genaues Angebot." }
              },
              {
                "@type": "Question",
                name: "Wie lange dauert die Erstellung?",
                acceptedAnswer: { "@type": "Answer", text: "Eine Landing Page veröffentliche ich in der Regel in 48 Stunden als Testversion. Vollständige Business-Websites benötigen je nach Umfang 2–4 Wochen." }
              },
              {
                "@type": "Question",
                name: "Kann ich Inhalte selbst bearbeiten?",
                acceptedAnswer: { "@type": "Answer", text: "Ja, auf Wunsch integriere ich ein benutzerfreundliches CMS, mit dem Sie Texte und Bilder einfach selbst aktualisieren können." }
              }
            ]
          })
        }}
      />

      <div className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>

        <main className='container mx-auto max-w-7xl px-6 lg:px-8 relative z-10'>
          <HeroSection />
          <ElegantDivider />
          <ServicesSection />
          <ElegantDivider />
          <ProjectSection />
          <ElegantDivider />
          <AboutSection />
          <ElegantDivider />
          <FAQSection />
        </main>
      </div>
    </div>
  )
}

export default Page;
