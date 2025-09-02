'use client'

import React, { useEffect, useRef } from 'react'
import DeveloperAnimation from './Animations/DeveloperAnimation'
import CalendlyButton from './CalendlyButton'

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root || typeof window === 'undefined') return

    const els = root.querySelectorAll<HTMLElement>('.hero-reveal')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add('in')
          io.unobserve(en.target)
        }
      })
    }, { threshold: 0.2 })

    // Observe each element; if already in view, it will trigger immediately
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  // Scroll-triggered fade-out of hero text (lazy GSAP)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    let cleanup: (() => void) | undefined;
    type RequestIdle = (cb: () => void) => number;
    const w = window as Window & { requestIdleCallback?: RequestIdle };
    const idle = (cb: () => void) => (w.requestIdleCallback ? w.requestIdleCallback(cb) : window.setTimeout(cb, 0));
    idle(async () => {
      const gsapMod = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const gsap = gsapMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const targets = gsap.utils.toArray<HTMLElement>('.hero-reveal');
        if (!targets.length) return;
        gsap.to(targets, {
          opacity: 0,
          y: -30,
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=60%',
            scrub: true,
          },
        });
      }, sectionRef);
      cleanup = () => ctx.revert();
    });
    return () => cleanup?.();
  }, [])

  return (
  <section
    ref={sectionRef}
    className='min-h-screen w-full flex flex-col items-center justify-center lg:flex-row lg:gap-16 px-6 lg:px-8 pt-24 lg:pt-28'
    role='region'
    aria-labelledby='hero-heading'
  >
    {/* Textbereich */}
    <div className="flex-1 w-full max-w-3xl text-center lg:text-left space-y-6">
      <div className="space-y-5">
        <style jsx>{`
          /* Default reveal for most hero elements */
          .hero-reveal:not(.hero-title) {
            opacity: 0;
            transform: translateY(12px);
            transition: opacity 0.6s ease, transform 0.6s ease;
            transition-delay: var(--d, 0ms);
          }
          .hero-reveal.in:not(.hero-title) {
            opacity: 1;
            transform: translateY(0);
          }

          /* Refined opening animation just for the H1 */
          .hero-title {
            will-change: transform, opacity, filter;
            animation: heroTitleIn 800ms cubic-bezier(0.22, 1, 0.36, 1) 60ms both;
          }
          @keyframes heroTitleIn {
            0% { opacity: 0; transform: translateY(18px) scale(0.985); filter: blur(6px); }
            60% { opacity: 1; transform: translateY(0) scale(1.01); filter: blur(0px); }
            100% { opacity: 1; transform: translateY(0) scale(1); }
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-title { animation: none; opacity: 1; transform: none; filter: none; }
          }
        `}</style>
        {/* SEO-optimierte Headline */}
        <h1
          id='hero-heading'
          className='text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight hero-reveal hero-title'
          style={{ '--d': '0ms' } as React.CSSProperties}
        >
          <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Website erstellen lassen
          </span>
          <br />
          <span className="text-white/90">in Österreich – schnell & sichtbar</span>
        </h1>

        {/* Kundennutzen */}
        <p className='text-base sm:text-lg md:text-xl lg:text-xl font-light leading-relaxed text-white/80 max-w-2xl hero-reveal' style={{ '--d': '120ms' } as React.CSSProperties}>
          Moderne, schnelle Websites für KMU. In 48 Stunden online, mobil‑optimiert und SEO‑ready. Unverbindliche Erstberatung inklusive.
        </p>

        {/* Trust Badges */}
        <div className='flex flex-wrap items-center justify-center lg:justify-start gap-2 text-[13px] hero-reveal' style={{ '--d': '200ms' } as React.CSSProperties}>
          <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80'>48h Launch</span>
          <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80'>SEO‑optimiert</span>
          <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80'>Mobil‑freundlich</span>
          <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80'>CMS möglich</span>
        </div>

        {/* CTAs */}
        <div className='flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start hero-reveal' style={{ '--d': '260ms' } as React.CSSProperties}>
          <CalendlyButton text='Kostenloses Erstgespräch vereinbaren' variant='hero' />
          <a
            href='/services'
            aria-label='Unsere Website-Pakete und Preise ansehen'
            className='px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 transition-colors duration-300'
          >
            Pakete & Preise ansehen
          </a>
        </div>
      </div>
    </div>

    {/* Visual */}
    <div className="hidden md:flex flex-1 justify-center lg:justify-end mt-10 lg:mt-0" aria-hidden='true' role='presentation'>
      <DeveloperAnimation />
    </div>
  </section>
 )
}

export default HeroSection
