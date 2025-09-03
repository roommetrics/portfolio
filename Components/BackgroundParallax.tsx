'use client'

import React, { useEffect, useRef } from 'react'

const BackgroundParallax = () => {
  const topRightRef = useRef<HTMLDivElement | null>(null)
  const bottomLeftRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    let cleanup: (() => void) | undefined
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number }
    const idle = (cb: () => void) => (w.requestIdleCallback ? w.requestIdleCallback(cb) : window.setTimeout(cb, 0))

    idle(async () => {
      const gsapMod = await import('gsap')
      const { ScrollTrigger } = await import('gsap/dist/ScrollTrigger')
      const gsap = gsapMod.default
      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const layers = [topRightRef.current, bottomLeftRef.current].filter(Boolean) as HTMLDivElement[]
        gsap.set(layers, { willChange: 'transform, opacity' })

        // Top-right glow: subtle upward drift + scale on scroll
        if (topRightRef.current) {
          gsap.fromTo(topRightRef.current, { y: 0, scale: 1 }, {
            y: -120,
            scale: 1.06,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.6,
            }
          })
        }

        // Bottom-left glow: opposite direction drift for depth
        if (bottomLeftRef.current) {
          gsap.fromTo(bottomLeftRef.current, { y: 0, scale: 1 }, {
            y: 140,
            scale: 1.04,
            ease: 'none',
            scrollTrigger: {
              trigger: document.documentElement,
              start: 'top top',
              end: 'bottom bottom',
              scrub: 0.6,
            }
          })
        }

        // Reduced motion: clear transforms
        const mm = gsap.matchMedia()
        mm.add('(prefers-reduced-motion: reduce)', () => {
          gsap.set(layers, { clearProps: 'transform, willChange' })
        })
      })

      cleanup = () => ctx.revert()
    })

    return () => cleanup?.()
  }, [])

  return (
    <>
      <div ref={topRightRef} className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
      <div ref={bottomLeftRef} className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none" />
    </>
  )
}

export default BackgroundParallax

