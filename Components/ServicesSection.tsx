'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const titleRef = useRef<HTMLDivElement | null>(null)
  const underlineRef = useRef<HTMLDivElement | null>(null)
  const textCardRef = useRef<HTMLDivElement | null>(null)
  const ctaWrapRef = useRef<HTMLDivElement | null>(null)
  const imgWrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let cleanup: (() => void) | undefined
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    const idle = (cb: () => void) => (w.requestIdleCallback ? w.requestIdleCallback(cb) : window.setTimeout(cb, 0))

    idle(async () => {
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger')
      const gsap = gsapMod.default
      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia()

        // Initial states for better paint performance
        gsap.set([titleRef.current, textCardRef.current, ctaWrapRef.current], { autoAlpha: 0, y: 32, willChange: 'transform, opacity' })
        gsap.set(imgWrapRef.current, { autoAlpha: 0, x: -24, willChange: 'transform, opacity' })
        gsap.set(underlineRef.current, { scaleX: 0, transformOrigin: 'left center' })

        // Title reveal
        if (titleRef.current) {
          gsap.to(titleRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
          })
        }

        // Underline grow
        if (underlineRef.current) {
          gsap.to(underlineRef.current, {
            scaleX: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: underlineRef.current, start: 'top 90%', toggleActions: 'play none none reverse' }
          })
        }

        // Text card reveal
        if (textCardRef.current) {
          gsap.to(textCardRef.current, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: textCardRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
          })
        }

        // CTA wrap slight rotate settle
        if (ctaWrapRef.current) {
          gsap.fromTo(ctaWrapRef.current, { rotate: 3, autoAlpha: 0, y: 16 }, {
            rotate: 0,
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: ctaWrapRef.current, start: 'top 90%', toggleActions: 'play none none reverse' }
          })
        }

        // Image reveal + parallax scrub
        if (imgWrapRef.current) {
          gsap.to(imgWrapRef.current, {
            autoAlpha: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: imgWrapRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
          })

          const inner = imgWrapRef.current.querySelector('.svc-img')
          if (inner) {
            gsap.to(inner, {
              yPercent: -12,
              ease: 'none',
              scrollTrigger: { trigger: imgWrapRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
            })
          }
        }

        // Reduced motion support
        mm.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set([titleRef.current, textCardRef.current, ctaWrapRef.current, imgWrapRef.current], { clearProps: 'all' })
        })
      }, sectionRef)

      cleanup = () => ctx.revert()
    })

    return () => cleanup?.()
  }, [])

  return (
    <div>
      <section ref={sectionRef} className='py-16 md:py-20 lg:py-28'>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Title */}
          <div ref={titleRef} className="text-center mb-12 sm:mb-14 md:mb-16">
            <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 sm:mb-4 leading-[1.1] tracking-tight'>
              <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
                Webentwicklung & Website erstellen lassen
              </span>
              <span className="text-white/90"> in Österreich</span>
            </h2>
            <div ref={underlineRef} className="w-16 sm:w-20 lg:w-24 h-[3px] bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center lg:min-h-[520px]">
            {/* Text */}
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <div className="space-y-7">
                <div ref={textCardRef} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 shadow-2xl transform-gpu">
                  <p className='text-base sm:text-lg md:text-xl leading-relaxed text-white/80 font-light'>
                    Ich erstelle für Sie eine klare, überzeugende Website, die neue Anfragen bringt und Vertrauen schafft. Verständlich erklärt, zügig umgesetzt und leicht zu pflegen – damit Sie sich auf Ihr Geschäft konzentrieren können. Vom kostenlosen Erstgespräch bis zur Veröffentlichung begleite ich Sie transparent und persönlich. Danach sorge ich auf Wunsch für laufende Betreuung und Verbesserungen.
                  </p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm sm:text-base">
                    <li className="flex items-center gap-2 text-white/80"><span className="inline-block h-2.5 w-2.5 rounded-full bg-primary"></span>Mehr Anfragen & Kontakte</li>
                    <li className="flex items-center gap-2 text-white/80"><span className="inline-block h-2.5 w-2.5 rounded-full bg-blue-400"></span>Leicht bei Google zu finden</li>
                    <li className="flex items-center gap-2 text-white/80"><span className="inline-block h-2.5 w-2.5 rounded-full bg-primary"></span>Einfach zu bedienen</li>
                  </ul>
                </div>

                <div ref={ctaWrapRef} className="flex justify-center lg:justify-start">
                  <a href='/services' className='group relative px-6 sm:px-7 md:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-base sm:text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl will-change-transform'>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2">
                      Alle Leistungen ansehen
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:top-full transition-all duration-700 transform rotate-12"></div>
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <div ref={imgWrapRef} className="relative hidden lg:block will-change-transform">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <Image
                    src="/services-image.jpg"
                    alt="Website erstellen lassen in Österreich – Webentwicklung & Webdesign"
                    fill
                    sizes="(min-width: 1024px) 35vw, 0px"
                    className="svc-img object-cover"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection
