'use client'
import React, { useRef, useEffect } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ProjectSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  const projects = [
    {
      id: 1,
      title: "VinoVenture",
      description: "Ein moderner Webshop für Weinliebhaber mit interaktivem Quiz und nahtloser Zahlungsintegration.",
      image: "/projects/vinoventure.png",
      tech: ["React", "Tailwindcss", "SQLite", "Stripe"],
      url: "https://vino-venture.com"
    },
    {
      id: 2,
      title: "Ball der Technik Hollabrunn",
      description: "Eine Themen-basierte Event-Landingpage mit SEO Optimierung um die Reichweite zu erhöhen und die Besucherzahlen zu steigern.",
      image: "/projects/bdt.png",
      tech: ["Next.js", "SEO", "Google"],
      url: "https://balldertechnik-hl.com"
    },
    {
      id: 3,
      title: "YC Directory",
      description: "Eine Plattform für Startups, die es Gründern ermöglicht, ihre Projekte zu präsentieren und sich zu vernetzen (Übungsprojekt).",
      image: "/projects/ycdirectory.png",
      tech: ["Next.js", "Tailwindcss", "Postgresql", "Appwrite"]
    }
  ]

  useEffect(() => {
    if (typeof window === 'undefined') return

    gsap.registerPlugin(ScrollTrigger)

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

    projectRefs.current.forEach((ref, index) => {
      if (!ref) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      })

      tl.fromTo(ref,
        {
          opacity: 0,
          y: 100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      )

      const image = ref.querySelector('.project-image')
      if (image) {
        gsap.to(image, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: ref,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        })
      }

      const techTags = ref.querySelectorAll('.tech-tag')
      tl.fromTo(techTags,
        {
          opacity: 0,
          x: -20
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.3"
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className='min-h-screen w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
      <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
          <span className="text-white/90">Ausgewählte </span>
          <br className="sm:hidden" />
          <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
            Projekte
          </span>
        </h2>
        <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 lg:space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            ref={el => {
              projectRefs.current[index] = el
            }}
            className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full lg:flex-1 relative group">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-blue-400/20 p-0.5 sm:p-1">
                <div className="overflow-hidden rounded-lg sm:rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="hidden sm:block absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="hidden sm:block absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-4 sm:w-6 h-4 sm:h-6 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            </div>

            <div className="w-full lg:flex-1 space-y-4 sm:space-y-6 text-center lg:text-left px-2 sm:px-0">
              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto lg:mx-0"></div>
              </motion.div>

              <motion.p
                className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.description}
              </motion.p>

              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="tech-tag px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2">
                {project.url ? (
                  <motion.a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary to-blue-400 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Projekt ansehen
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                ) : (
                  <span className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-700 text-gray-300 font-bold rounded-full text-sm sm:text-base">
                    Kein Link verfügbar
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 sm:mt-24 lg:mt-32 flex justify-center">
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
      </div>
    </section>
  )
}

export default ProjectSection