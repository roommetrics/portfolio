'use client'
import React, { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'

const Page = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      id: 1,
      title: "Kostenloser Designvorschlag",
      description: "Wir erstellen Ihnen einen unverbindlichen, maßgeschneiderten Designvorschlag für Ihr Projekt - komplett kostenlos.",
      features: ["Individuelle Designkonzepte", "Mockups & Wireframes", "Branding-Vorschläge", "Keine Verpflichtungen"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-400",
      bgGradient: "from-green-500/10 to-emerald-400/10",
      borderColor: "border-green-500/20",
      price: "Kostenlos",
      duration: "2-3 Tage"
    },
    {
      id: 2,
      title: "Landing Page Entwicklung",
      description: "Moderne, responsive Landing Pages die konvertieren. Perfekt optimiert für Performance und SEO.",
      features: ["Responsive Design", "SEO-Optimierung", "Performance-Optimierung", "CMS Integration"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-400",
      bgGradient: "from-blue-500/10 to-cyan-400/10",
      borderColor: "border-blue-500/20",
      price: "Ab €699",
      duration: "1-2 Wochen"
    },
    {
      id: 3,
      title: "E-Commerce Webshop",
      description: "Vollwertige Online-Shops mit sicherer Zahlungsabwicklung und modernem Design für maximale Conversion.",
      features: ["Stripe/PayPal Integration", "Inventory Management", "Bestellverwaltung", "Mobile-First Design"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-400",
      bgGradient: "from-purple-500/10 to-pink-400/10",
      borderColor: "border-purple-500/20",
      price: "Ab €1.499",
      duration: "2-4 Wochen"
    },
    {
      id: 4,
      title: "Admin Dashboards",
      description: "Leistungsstarke Admin-Panels für die einfache Verwaltung Ihrer Daten, Benutzer und Inhalte.",
      features: ["Benutzerverwaltung", "Analytics & Reports", "Content Management", "Rolle & Permissions"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      gradient: "from-orange-500 to-red-400",
      bgGradient: "from-orange-500/10 to-red-400/10",
      borderColor: "border-orange-500/20",
      price: "Ab €1.199",
      duration: "1-3 Wochen"
    },
    {
      id: 5,
      title: "Login & Auth Systeme",
      description: "Sichere Authentifizierung und Benutzerverwaltung mit modernsten Sicherheitsstandards.",
      features: ["OAuth Integration", "2FA Unterstützung", "Session Management", "Password Security"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      gradient: "from-indigo-500 to-purple-400",
      bgGradient: "from-indigo-500/10 to-purple-400/10",
      borderColor: "border-indigo-500/20",
      price: "Ab €799",
      duration: "1-2 Wochen"
    },
    {
      id: 6,
      title: "API Entwicklung",
      description: "Robuste REST APIs und Backend-Services für Ihre Anwendungen mit moderner Architektur.",
      features: ["RESTful APIs", "Database Design", "Third-party Integrations", "API Documentation"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      gradient: "from-teal-500 to-cyan-400",
      bgGradient: "from-teal-500/10 to-cyan-400/10",
      borderColor: "border-teal-500/20",
      price: "Ab €899",
      duration: "1-3 Wochen"
    }
  ]

  const processSteps = [
    {
      step: "01",
      title: "Beratung & Analyse",
      description: "Kostenlose Erstberatung und Analyse Ihrer Anforderungen"
    },
    {
      step: "02",
      title: "Designvorschlag",
      description: "Unverbindlicher Designvorschlag mit Mockups und Konzept"
    },
    {
      step: "03",
      title: "Entwicklung",
      description: "Agile Entwicklung mit regelmäßigen Updates und Feedback"
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Go-Live Unterstützung und fortlaufender technischer Support"
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (titleRef.current) observer.observe(titleRef.current)

    const serviceCards = document.querySelectorAll('.service-card')
    serviceCards.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className='min-h-screen w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .service-card {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.6s ease-out;
        }
        
        .service-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .floating-orb {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
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
          0%, 100% {
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
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="floating-orb"></div>
      <div className="floating-orb"></div>

      <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
            <span className="text-white/90">Unsere </span>
            <br className="sm:hidden" />
            <span className='gradient-text'>
              Dienstleistungen
            </span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 rounded-full mx-auto"></div>
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            <span className="font-bold text-white">Roommetrics Developments</span> bietet maßgeschneiderte Webentwicklung
            von der ersten Idee bis zum erfolgreichen Launch
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card group relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`relative h-full p-6 lg:p-8 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm border ${service.borderColor} rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-opacity-60`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3), transparent 50%)`
                  }}></div>
                </div>

                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${service.gradient} rounded-xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-white/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-2 text-white/70"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0`}></div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Pricing & Duration */}
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.price}
                      </div>
                      <div className="text-xs text-white/60">{service.duration}</div>
                    </div>

                    <Link href='/contact'>
                      <motion.button
                        className={`px-4 py-2 bg-gradient-to-r ${service.gradient} text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all duration-300`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Anfragen
                      </motion.button>
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <motion.div
        className="max-w-6xl mx-auto mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Unser <span className="gradient-text">Entwicklungsprozess</span>
          </h3>
          <p className="text-white/70 text-lg">Von der Idee bis zur erfolgreichen Umsetzung</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
                )}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
              <p className="text-white/70 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto p-8 lg:p-12 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-3xl">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Bereit für Ihr nächstes Projekt?
          </h3>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute für eine kostenlose Beratung und einen
            unverbindlichen Designvorschlag für Ihr Projekt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href='/contact'>
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kostenlosen Designvorschlag erhalten
              </motion.button>
            </Link>

          </div>
        </div>
      </motion.div>

      <div className="mt-20 sm:mt-24 lg:mt-32 flex justify-center">
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
      </div>
    </section>
  )
}

export default Page