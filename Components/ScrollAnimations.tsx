'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Global, lightweight scroll animations wired via data-attributes and utility classes.
// Keeps animations consistent across all pages and reduces duplication.
export default function ScrollAnimations() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return

    let cleanup: (() => void) | undefined

    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    const idle = (cb: () => void) => (w.requestIdleCallback ? w.requestIdleCallback(cb) : window.setTimeout(cb, 0))

    idle(async () => {
      const gsapMod = await import('gsap')
      // Use dist path to avoid SSR issues in Next.js app router
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger')
      const gsap = gsapMod.default
      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const mm = gsap.matchMedia()

        // Helper to mark animated elements and prevent double-binding
        const markAnimated = (el: Element) => {
          (el as HTMLElement).dataset.animated = 'true'
        }
        const notAnimated = (el: Element) => !(el as HTMLElement).dataset.animated

        // Generic fade-in (matches existing pages using .fade-in)
        gsap.utils.toArray<HTMLElement>('.fade-in').filter(notAnimated).forEach((el) => {
          gsap.from(el, {
            y: 28,
            autoAlpha: 0,
            duration: 0.8,
            ease: 'power2.out',
            onStart: () => markAnimated(el),
            scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
          })
        })

        // Attribute-based effects
        const fromMap: Record<string, gsap.TweenVars> = {
          'fade-up': { y: 28, autoAlpha: 0 },
          'fade-in': { autoAlpha: 0 },
          'slide-left': { x: 32, autoAlpha: 0 },
          'slide-right': { x: -32, autoAlpha: 0 },
          'scale-in': { scale: 0.92, autoAlpha: 0 },
        }

        Object.entries(fromMap).forEach(([key, from]) => {
          gsap.utils.toArray<HTMLElement>(`[data-animate="${key}"]`).filter(notAnimated).forEach((el) => {
            gsap.from(el, {
              ...from,
              duration: 0.8,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              onStart: () => markAnimated(el),
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
            })
          })
        })

        // Underline grow effect (e.g., tiny bars under headings)
        gsap.utils.toArray<HTMLElement>('[data-underline]').filter(notAnimated).forEach((el) => {
          gsap.set(el, { scaleX: 0, transformOrigin: 'left center' })
          gsap.to(el, {
            scaleX: 1,
            duration: 0.7,
            ease: 'power2.out',
            onStart: () => markAnimated(el),
            scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none reverse' }
          })
        })

        // Stagger children of a container
        gsap.utils.toArray<HTMLElement>('[data-stagger]')
          .filter(notAnimated)
          .forEach((wrap) => {
            const children = Array.from(wrap.children) as HTMLElement[]
            gsap.set(children, { willChange: 'transform, opacity' })
            gsap.from(children, {
              y: 20,
              autoAlpha: 0,
              stagger: 0.08,
              duration: 0.6,
              ease: 'power2.out',
              onStart: () => markAnimated(wrap),
              scrollTrigger: { trigger: wrap, start: 'top 88%', toggleActions: 'play none none reverse' }
            })
          })

        // Simple parallax for elements with data-parallax-y="<number>" (in percent)
        gsap.utils.toArray<HTMLElement>('[data-parallax-y]')
          .filter(notAnimated)
          .forEach((el) => {
            const amt = Number(el.dataset.parallaxY || '12')
            gsap.to(el, {
              yPercent: -amt,
              ease: 'none',
              onStart: () => markAnimated(el),
              scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.6 }
            })
          })

        // Respect reduced motion
        mm.add('(prefers-reduced-motion: reduce)', () => {
          // Clear inline styles that may have been set pre-emptively
          gsap.set('[data-animate], .fade-in, [data-underline], [data-stagger], [data-parallax-y]', { clearProps: 'all' })
        })

        // Refresh triggers after fonts/images load to avoid jump
        requestAnimationFrame(() => ScrollTrigger.refresh())
      })

      cleanup = () => {
        // Revert everything registered in this context
        // and kill all triggers to avoid leaks between routes
        try {
          ctx.revert()
        } catch { /* noop */ }
      }
    })

    return () => cleanup?.()
  }, [pathname])

  return null
}
