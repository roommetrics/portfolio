import CalendlyButton from '@/Components/CalendlyButton'
import BackgroundParallax from '@/Components/BackgroundParallax'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="relative">
        <BackgroundParallax />
        <main className="container mx-auto max-w-6xl px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          {/* Hero */}
          <section className="text-center mb-12 sm:mb-14 md:mb-16">
            <h1 data-animate="fade-up" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
              <span className="text-white/90">Über </span>
              <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent">Roommetrics</span>
            </h1>
            <p data-animate="fade-in" className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
              Ich helfe KMUs, online sichtbar zu werden, Vertrauen aufzubauen und mehr Anfragen zu gewinnen – mit schnellen, klaren Websites, die einfach funktionieren.
            </p>
            <div data-underline className="w-16 sm:w-20 lg:w-24 h-[3px] bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto mt-6" />
          </section>

          {/* Intro */}
          <section className="grid grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-24">
            <div className="col-span-12 lg:col-span-5 order-1" data-animate="fade-up">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary/15 to-blue-500/15 flex items-center justify-center text-7xl">
                👨‍💻
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7 order-2">
              <div className="space-y-5 text-white/80 text-base sm:text-lg" data-stagger>
                <p>
                  Hi, ich bin Nico Zimmermann. Ich entwickle moderne Websites mit Fokus auf Tempo, Nutzererlebnis und Sichtbarkeit. Von der Idee bis zur Veröffentlichung übernehme ich die komplette Umsetzung – pragmatisch, transparent und zügig.
                </p>
                <p>
                  Statt Baukästen setze ich auf maßgeschneiderte Lösungen: Jede Seite dient einem Ziel – mehr Anfragen, Verkäufe und Vertrauen. So wird Ihre Website vom “digitalen Flyer” zum aktiven Vertriebswerkzeug.
                </p>
                <div className="pt-2">
                  <CalendlyButton text='Kostenloses Erstgespräch' variant='hero' />
                </div>
              </div>
            </div>
          </section>

          {/* Werte */}
          <section className="mb-16 lg:mb-24">
            <h2 data-animate="fade-up" className="text-2xl sm:text-3xl font-bold mb-6 text-white">Werte & Arbeitsweise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-stagger>
              {[{
                icon: '🎯', title: 'Ziele vor Features',
                desc: 'Wir richten alles auf Ihre Ziele aus: Anfragen, Umsatz, Vertrauen.'
              }, {
                icon: '⚡', title: 'Schnell & sauber',
                desc: 'Kurze Ladezeiten und reibungslose Nutzung auf allen Geräten.'
              }, {
                icon: '🤝', title: 'Direkte Zusammenarbeit',
                desc: 'Kurze Wege, klare Sprache, fester Ansprechpartner – ich.'
              }, {
                icon: '🚀', title: 'Langfristig gedacht',
                desc: 'Wartung, Updates und kontinuierliche Verbesserung statt “einmal und weg”.'
              }].map((v) => (
                <div key={v.title} data-animate="fade-up" className="bg-white/[0.06] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.08] transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">{v.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{v.title}</h3>
                      <p className="text-white/75">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prozess */}
          <section className="mb-16 lg:mb-24">
            <h2 data-animate="fade-up" className="text-2xl sm:text-3xl font-bold mb-6 text-white">Ablauf in 4 Schritten</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" data-stagger>
              {[
                { step: '1', title: 'Kostenloses Erstgespräch', text: 'Ziele, Inhalte und Budget klären wir transparent im Gespräch.' },
                { step: '2', title: 'Planung', text: 'Struktur und Erscheinungsbild – passend zu Ihrem Unternehmen.' },
                { step: '3', title: 'Umsetzung', text: 'Schnelle Ladezeiten, saubere Umsetzung und Suchmaschinen‑Optimierung.' },
                { step: '4', title: 'Veröffentlichung & Betreuung', text: 'Start, Monitoring, Updates und fortlaufende Verbesserung.' }
              ].map((s) => (
                <li key={s.title} data-animate="fade-up" className="relative bg-white/[0.06] border border-white/10 rounded-2xl p-6">
                  <div className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white font-bold flex items-center justify-center shadow-lg">
                    {s.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1 mt-2">{s.title}</h3>
                  <p className="text-white/75">{s.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* CTA */}
          <section className="text-center">
            <p data-animate="fade-in" className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Klingt gut? Dann lassen Sie uns konkret werden und Ihre Website gezielt auf Ergebnisse trimmen.
            </p>
            <CalendlyButton text='Beratung vereinbaren' variant='hero' />
          </section>
        </main>
      </div>
    </div>
  )
}
