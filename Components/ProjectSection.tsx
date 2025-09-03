'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'

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
      tech: ["React", "Tailwindcss", "MYSQL", "Stripe"],
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
    },
    {
      id: 4,
      title: "Photox Homepage",
      description: "Eine moderne Homepage für Fotografen mit ansprechendem Design und Kontaktdaten ",
      image: "/projects/photox.png",
      tech: ["Next.js", "Tailwindcss", "framer-motion", "GSAP"],
      url: "https://photox-portfolio-project-4qbkr21cm-roommetrics-projects.vercel.app/"
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

    projectRefs.current.forEach((ref) => {
      if (!ref) return

      gsap.fromTo(ref,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref, start: 'top 85%', toggleActions: 'play none none reverse' }
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} className='w-full py-16 md:py-20 lg:py-28 px-4 sm:px-6 lg:px-8'>
      <div ref={titleRef} className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-[1.1] tracking-tight'>
          <span className="text-white/90">Ausgewählte </span>
          <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
            Projekte
          </span>
        </h2>
        <div className="w-16 sm:w-20 lg:w-24 h-[3px] bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const tags = project.tech.slice(0, 3)
            const extra = project.tech.length - tags.length
            const desc = project.description.length > 150 ? project.description.slice(0, 150) + '…' : project.description
            return (
              <div
                key={project.id}
                ref={el => { projectRefs.current[index] = el }}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/7 transition-colors"
              >
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[16/10] w-full">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm sm:text-base text-white/80 leading-relaxed">{desc}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {tags.map((t) => (
                      <span key={t} className="tech-tag px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80">{t}</span>
                    ))}
                    {extra > 0 && (
                      <span className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">+{extra}</span>
                    )}
                  </div>

                  <div className="pt-2">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-blue-500 text-white text-sm font-medium hover:shadow-lg transition-all"
                        aria-label={`Projekt ${project.title} live ansehen`}
                      >
                        Live ansehen
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ) : (
                      <span className="inline-flex items-center px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 text-sm">Case demnächst</span>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="mt-16 sm:mt-20 lg:mt-24 flex justify-center">
        <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
      </div>
    </section>
  )
}

export default ProjectSection
