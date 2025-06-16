'use client'

import DeveloperAnimation from '@/Components/Animations/DeveloperAnimation';
import React, { useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import WebAnimation from '@/Components/Animations/WebAnimation';
import Link from 'next/link';

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Footer from '@/Components/Footer';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Mock project data
const projects = [
  {
    id: 1,
    title: "VinoVenture",
    subtitle: "Moderne Online-Shop Lösung",
    description: "Vollständige E-Commerce-Plattform mit modernem Design, optimierter Performance und nahtloser User Experience.",
    image: "/projects/vinoventure.png",
    tech: ["React", "Stripe", "Tailwind"],
    color: "from-blue-500 to-cyan-600",
    link: 'https://vino-venture.com/'
  },
  {
    id: 2,
    title: "Ball der Technik Hollabrunn",
    subtitle: "Themenorientierte Landing Page",
    description: "Moderne Landing Page für den Ball der Technik Hollabrunn. SEO otimiert um die Sichtbarkeit zu erhöhen",
    image: "/projects/bdt.png",
    tech: ["Next.js", "SEO", "TypeScript"],
    color: "from-purple-500 to-pink-600",
    link: 'https://balldertechnik-hl.com/'
  },
  {
    id: 3,
    title: "YC Directory",
    subtitle: "Echtzeit Startup-Plattform",
    description: "Moderne Startup Apllikation um Unternehmen in Echtzeit zu erstellen und anzuzeigen(Übungsprojekt)",
    image: "/projects/ycdirectory.png",
    tech: ["Next.js", "Tailwind", "Postgres"],
    color: "from-emerald-500 to-teal-600"
  }
];

type Project = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  color: string;
  link?: string;
};

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-3xl z-50 overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="h-full overflow-y-auto">
              {/* Hero Image */}
              <div className="relative h-64 md:h-80 lg:h-96">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-80`}></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                  <p className="text-xl opacity-90">{project.subtitle}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12">
                <div className="max-w-4xl mx-auto">
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technologien</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Herausforderungen</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Komplexe Anforderungen erforderten innovative Lösungsansätze und modernste Technologien für optimale Performance und Benutzererfahrung.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ergebnisse</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Erfolgreiche Umsetzung mit verbesserter User Experience, erhöhten Conversion-Raten und positiver Kundenfeedbacks.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Page = () => {
  const smootherRef = useRef<ScrollSmoother | null>(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
    })
    return () => {
      smootherRef.current?.kill();
    }
  })

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero parallax effect
      gsap.to('#hero-content', {
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        y: -100,
        opacity: 0.3,
        scale: 0.95,
        ease: 'none'
      })

      // Services section reveal
      gsap.fromTo('#services',
        {
          y: 100,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: '#services',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          ease: 'power2.out'
        }
      )

      // Services content stagger
      gsap.fromTo('.service-item',
        {
          y: 60,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: '#services',
            start: 'top 70%',
            end: 'top 40%',
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          stagger: 0.2,
          ease: 'power2.out'
        }
      )

      // Projects section
      gsap.fromTo('.project-card',
        {
          y: 100,
          opacity: 0,
          scale: 0.9
        },
        {
          scrollTrigger: {
            trigger: '#projects',
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.2,
          ease: 'power2.out'
        }
      )

      // Features section
      gsap.fromTo('.feature-card',
        {
          y: 80,
          opacity: 0,
          scale: 0.9
        },
        {
          scrollTrigger: {
            trigger: '#features',
            start: 'top 75%',
            end: 'top 45%',
            scrub: 1,
          },
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          ease: 'power2.out'
        }
      )

      // CTA button reveal
      gsap.fromTo('#cta-button',
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scrollTrigger: {
            trigger: '#cta-button',
            start: 'top 85%',
            end: 'top 65%',
            scrub: 1,
          },
          scale: 1,
          opacity: 1,
          ease: 'back.out(1.7)'
        }
      )
    })

    return () => ctx.revert();
  }, [])

  return (
    <>
      <div id='smooth-wrapper' className="bg-bg-lightgray">
        <div id='smooth-content'>
          <main className='pt-8'>
            {/* Hero Section - Responsive */}
            <section id='hero' className='min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary/5 flex justify-center md:mt-12'>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20"></div>

              <div id='hero-content' className="container mx-auto px-4 sm:px-6 lg:px-12 h-screen flex flex-col items-center justify-center relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className="text-center max-w-6xl w-full"
                >
                  <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                    className='text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight'
                  >
                    Roommetrics
                    <br />
                    <span className=' font-bold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent'>
                      Developments
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed mb-8 sm:mb-12 px-4'
                  >
                    <span className='text-primary font-medium'>Moderne</span> Weblösungen für{' '}
                    <span className='text-primary font-medium'>moderne</span> Unternehmen
                  </motion.p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  className="mt-4 sm:mt-2 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
                >
                  <DeveloperAnimation />
                </motion.div>
              </div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/40 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2"
                  />
                </div>
              </motion.div>
            </section>

            {/* Services Section */}
            <section id='services' className='py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden'>
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent"></div>

              <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin text-gray-900 mb-4 sm:mb-6 service-item'>
                    <span className='font-semibold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent'>
                      Weblösungen
                    </span>{' '}
                    die mitdenken
                  </h2>
                  <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full service-item"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
                  <div className="space-y-6 sm:space-y-8 service-item">
                    <p className='text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed font-light'>
                      Roommetrics Developments entwickelt gemeinsam mit Ihnen eine moderne und professionelle Web-Präsenz – passgenau auf Ihre Ziele abgestimmt.
                    </p>
                    <p className='text-base sm:text-lg text-gray-500 leading-relaxed'>
                      Vom ersten Beratungsgespräch über individuelles Design bis hin zur technischen Umsetzung und Veröffentlichung begleiten wir Sie durch den gesamten Prozess.
                    </p>
                    <p className='text-base sm:text-lg text-gray-500 leading-relaxed'>
                      Auch nach dem Go-Live stehen wir Ihnen zur Seite: mit zuverlässiger Wartung, laufender Betreuung und technischer Weiterentwicklung Ihrer Website oder Anwendung.
                    </p>

                    <Link id='cta-button' href='/services' className='inline-block'>
                      <button className='group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-primary/90 text-white rounded-full font-medium text-base sm:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 active:scale-95'>
                        <span className="relative z-10">Mehr erfahren</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </Link>
                  </div>

                  <div className="flex justify-center lg:justify-end service-item mt-8 lg:mt-0">
                    <div className="relative w-full max-w-md">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/10 rounded-3xl blur-xl opacity-50"></div>
                      <div className="relative bg-white p-6 sm:p-8 rounded-3xl shadow-xl">
                        <WebAnimation />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section id='projects' className='py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white relative'>
              <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <h2 className='text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6'>
                    Ausgewählte <span className='font-semibold text-primary'>Projekte</span>
                  </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      className="project-card bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                      whileHover={{ y: -8 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="relative h-48 sm:h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="text-lg sm:text-xl font-semibold mb-1">{project.title}</h3>
                          <p className="text-sm opacity-90">{project.subtitle}</p>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6 flex flex-col h-full min-h-[220px]">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                          {project.description.substring(0, 200)}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.tech.length > 3 && (
                            <span className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                              +{project.tech.length - 3}
                            </span>
                          )}
                        </div>

                        {/* Nur anzeigen, wenn ein Link definiert ist */}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-5 py-2 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition"
                          >
                            Zur Website
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Features Section */}
            <section id='features' className='py-16 sm:py-24 lg:py-32 bg-white relative'>
              <div className="container mx-auto px-4 sm:px-6 lg:px-12">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                  <h2 className='text-3xl sm:text-4xl md:text-5xl font-thin text-gray-900 mb-4 sm:mb-6'>
                    Warum <span className='font-semibold text-primary'>Roommetrics</span>?
                  </h2>
                  <p className='text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                    Drei Säulen für Ihren digitalen Erfolg
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                  <div className="feature-card bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Schnell & Performant</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Modernste Technologien für blitzschnelle Ladezeiten und optimale User Experience.
                    </p>
                  </div>

                  <div className="feature-card bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Responsive Design</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Perfekte Darstellung auf allen Geräten – vom Smartphone bis zum Desktop.
                    </p>
                  </div>

                  <div className="feature-card bg-white p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100 sm:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Langfristige Betreuung</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                      Kontinuierliche Wartung und Weiterentwicklung für nachhaltigen Erfolg.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  )
}

export default Page;