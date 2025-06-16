'use client'
import React, { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)
  const statsRefs = useRef<(HTMLDivElement | null)[]>([])
  const skillRefs = useRef<(HTMLDivElement | null)[]>([])
  const valueRefs = useRef<(HTMLDivElement | null)[]>([])

  const stats = [
    { number: "100%", label: "Kundenzufriedenheit", icon: "⭐" },
    { number: "5+", label: "Jahre Erfahrung", icon: "⏱️" },
    { number: "24/7", label: "Support & Betreuung", icon: "🛠️" },
    { number: "1", label: "Kostenloser Design-Vorschlag", icon: "✅" }
  ]

  const skills = [
    "React & Next.js",
    "Node.js & Express",
    "Supabase",
    "Tailwind CSS",
    "TypeScript",
    "Zahlungsintegration",
    "SEO Optimierung",
  ]

  const values = [
    {
      icon: "🎯",
      title: "Maßgeschneiderte Lösungen",
      description: "Jedes Projekt wird individuell auf Ihre Geschäftsanforderungen zugeschnitten - keine Vorlagen, sondern echte Individualität."
    },
    {
      icon: "⚡",
      title: "Moderne Technologien",
      description: "Neueste Web-Standards und bewährte Frameworks für schnelle, sichere und zukunftssichere Anwendungen."
    },
    {
      icon: "🤝",
      title: "Persönliche Betreuung",
      description: "Direkter Kontakt ohne Zwischenhändler - Sie arbeiten direkt mit mir als Ihrem Entwickler zusammen."
    },
    {
      icon: "🚀",
      title: "Fokus auf Ergebnisse",
      description: "Ihre Website soll nicht nur schön aussehen, sondern auch Ihre Geschäftsziele erreichen und Conversions generieren."
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

    // Title Animation
    gsap.fromTo(titleRef.current,
      {
        opacity: 0,
        y: 100
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Profile Animation
    gsap.fromTo(profileRef.current,
      {
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Stats Animation
    statsRefs.current.forEach((ref, index) => {
      if (!ref) return

      gsap.fromTo(ref,
        {
          opacity: 0,
          y: 50,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Skills Animation
    skillRefs.current.forEach((ref, index) => {
      if (!ref) return

      gsap.fromTo(ref,
        {
          opacity: 0,
          x: -30
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.05,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    // Values Animation
    valueRefs.current.forEach((ref, index) => {
      if (!ref) return

      gsap.fromTo(ref,
        {
          opacity: 0,
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className='min-h-screen w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      {/* Title */}
      <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
          <span className="text-white/90">Über </span>
          <br className="sm:hidden" />
          <span className='bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
            Roommetrics
          </span>
        </h2>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-20 lg:mb-32">
          <div ref={profileRef} className="w-full lg:flex-1 relative group">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 p-0.5 sm:p-1 max-w-md mx-auto lg:mx-0">
              <div className="overflow-hidden rounded-lg sm:rounded-xl">
                <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-blue-500/30 to-cyan-400/30 flex items-center justify-center text-6xl sm:text-7xl">
                  👨‍💻
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>
          </div>

          <div className="w-full lg:flex-1 space-y-6 sm:space-y-8 text-center lg:text-left">
            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Full Stack Web Entwickler
                <br />
                <span className="text-blue-500">für KMUs</span>
              </h3>
              <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto lg:mx-0"></div>
            </motion.div>

            <motion.div
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
                Nico Zimmermann ist der Inhaber von Roommetrics Developments. Als erfahrener Full Stack Entwickler mit über 5 Jahren Erfahrung helfe ich Unternehmen dabei, ihre digitale Präsenz zu etablieren und online erfolgreich zu werden.
              </p>
              <p className="text-base sm:text-lg text-white/70 leading-relaxed">
                Mein Fokus liegt auf maßgeschneiderten, modernen Weblösungen, die nicht nur gut aussehen, sondern auch messbare Ergebnisse liefern. Qualität und Kundenzufriedenheit stehen dabei immer im Vordergrund.
              </p>
            </motion.div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg sm:text-xl font-bold text-white">Technologien</h4>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    ref={el => {
                      skillRefs.current[index] = el as HTMLDivElement | null
                    }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm hover:bg-blue-500/20 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16 sm:mb-20 lg:mb-32">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              ref={el => {
                statsRefs.current[index] = el
              }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-sm border border-blue-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center hover:from-blue-500/20 hover:to-cyan-400/20 transition-all duration-500 hover:scale-105">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{stat.icon}</div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/70 font-medium">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Warum mit Roommetrics arbeiten?
            </h3>
            <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
            {values.map((value, index) => (
              <div
                key={value.title}
                ref={el => {
                  valueRefs.current[index] = el
                }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-400/10 backdrop-blur-sm border border-blue-500/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:from-blue-500/20 hover:to-cyan-400/20 transition-all duration-500 hover:scale-105">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className="text-3xl sm:text-4xl flex-shrink-0">{value.icon}</div>
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="text-lg sm:text-xl font-bold text-white leading-tight">{value.title}</h4>
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-400/5 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 lg:mt-32 text-center">
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Bereit für Ihren digitalen Durchbruch? Lassen Sie uns gemeinsam eine professionelle Lösung entwickeln, die Ihr Unternehmen voranbringt.
            </p>
            <motion.a
              href="/contact"
              className="group relative inline-flex px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 text-base sm:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Kostenloses Beratungsgespräch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="mt-20 sm:mt-24 lg:mt-32 flex justify-center">
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
      </div>
    </section>
  )
}

export default AboutSection