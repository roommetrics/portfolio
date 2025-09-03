'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const sectionRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLDivElement | null>(null)
    const underlineRef = useRef<HTMLDivElement | null>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])

    const faqs = [
        {
            question: "Wie lange dauert die Entwicklung einer Website?",
            answer: "Landing Pages dauern in der Regel 48 Stunden bis zur Veröffentlichung der Testversion. Vollständige Business-Websites benötigen je nach Umfang 2-4 Wochen."
        },
        {
            question: "Was kostet eine professionelle Website?",
            answer: "Landing Pages starten ab 800€, Individidelle Web Lösungen variiren je nach Anforderungen. Im kostenlosen Erstgespräch erstelle ich Ihnen ein angepasstes Angebot."
        },
        {
            question: "Erhalte ich auch nach der Fertigstellung Support?",
            answer: "Ja, definitiv! Ich biete verschiedene Wartungs- und Support-Pakete an um sicherzustellen, dass Ihre Website immer aktuell und sicher bleibt."
        },
        {
            question: "Kann ich meine Website selbst bearbeiten?",
            answer: "Ja, bei Bedarf integriere ich ein benutzerfreundliches Content Management System (CMS), mit dem Sie Texte und Bilder einfach selbst aktualisieren können."
        },
        {
            question: "Ist meine Website auch auf dem Smartphone optimiert?",
            answer: "Selbstverständlich! Alle meine Websites sind responsive und funktionieren perfekt auf allen Geräten - Smartphone, Tablet und Desktop."
        },
        {
            question: "Übernehmen Sie auch SEO-Optimierung?",
            answer: "Ja, grundlegende SEO-Optimierung ist bei jeder Website dabei. Dazu gehören optimierte Ladezeiten, Meta-Tags, strukturierte Daten und mobilfreundliches Design."
        },
        {
            question: "Wie läuft die Zusammenarbeit ab?",
            answer: "1. Kostenloses Erstgespräch, 2. Angebot & Auftrag, 3. Entwicklung, 4. Feedback & Anpassungen, 5. Go-Live & Übergabe. Sie sind in jeden Schritt eingebunden."
        },
        {
            question: "Welche Technologien verwenden Sie?",
            answer: "Ich arbeite mit modernen, zukunftssicheren Technologien wie Next.js, TypeScript, PostgreSql und Tailwind CSS. Das garantiert schnelle, sichere und wartbare Websites."
        }
    ]

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

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
                gsap.set([titleRef.current], { autoAlpha: 0, y: 28, willChange: 'transform, opacity' })
                gsap.set(underlineRef.current, { scaleX: 0, transformOrigin: 'left center' })
                gsap.set(itemRefs.current, { autoAlpha: 0, y: 20, willChange: 'transform, opacity' })

                if (titleRef.current) {
                    gsap.to(titleRef.current, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.9,
                        ease: 'power3.out',
                        scrollTrigger: { trigger: titleRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
                    })
                }
                if (underlineRef.current) {
                    gsap.to(underlineRef.current, {
                        scaleX: 1,
                        duration: 0.7,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: underlineRef.current, start: 'top 90%', toggleActions: 'play none none reverse' }
                    })
                }

                itemRefs.current.forEach((el, i) => {
                    if (!el) return
                    gsap.to(el, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.6,
                        delay: i * 0.06,
                        ease: 'power2.out',
                        scrollTrigger: { trigger: el, start: 'top 92%', toggleActions: 'play none none reverse' }
                    })
                })
            }, sectionRef)

            cleanup = () => ctx.revert()
        })

        return () => cleanup?.()
    }, [])

    const whatsappHref = `https://wa.me/436801608887?text=${encodeURIComponent('Hallo Nico! Ich habe eine kurze Frage zu deiner Webseitenerstellung. Können wir kurz schreiben?')}`

    return (
        <section ref={sectionRef} className='py-20 lg:py-32'>
            <div className="max-w-4xl mx-auto px-6">
                <div ref={titleRef} className="text-center mb-16">
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
                        <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
                            Häufige Fragen
                        </span>
                        <span className="text-white/90"> & Antworten</span>
                    </h2>
                    <div ref={underlineRef} className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            ref={el => { itemRefs.current[index] = el }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 lg:p-8 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                            >
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white pr-4">
                                    {faq.question}
                                </h3>
                                <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-6 h-6 text-primary" />
                                </div>
                            </button>

                            {openIndex === index && (
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-6 lg:px-8 lg:pb-8 animate-in fade-in-0 slide-in-from-top-1 duration-200">
                                        <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-lg text-white/70 mb-6">
                        Haben Sie noch weitere Fragen?
                    </p>
                    <a
                        href={whatsappHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] will-change-transform"
                        aria-label="Per WhatsApp Frage stellen"
                    >
                        Per WhatsApp fragen
                        <svg className='w-5 h-5' viewBox='0 0 32 32' fill='currentColor' aria-hidden='true'>
                          <path d='M19.11 17.3c-.27-.14-1.57-.77-1.81-.86-.24-.09-.42-.14-.6.14-.18.27-.69.86-.85 1.04-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.6 1.09 2.78.13.18 1.88 2.87 4.56 4.02.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.57-.64 1.79-1.26.22-.62.22-1.15.16-1.26-.07-.11-.25-.18-.52-.32z'/>
                          <path d='M26.51 5.49C23.58 2.56 19.86 1 15.94 1 7.95 1 1.45 7.5 1.45 15.49c0 2.48.65 4.85 1.88 6.98L1 31l8.74-2.28c2.06 1.13 4.38 1.73 6.79 1.73 7.99 0 14.49-6.5 14.49-14.49 0-3.92-1.56-7.64-4.49-10.47zM16 28.85c-2.21 0-4.36-.6-6.23-1.75l-.45-.27-5.19 1.36 1.38-5.06-.29-.52a12.87 12.87 0 01-1.85-6.12C3.37 8.51 9.02 2.85 16 2.85c3.34 0 6.47 1.3 8.83 3.67A12.4 12.4 0 0128.85 15.3c0 6.98-5.66 12.55-12.85 12.55z'/>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FAQSection
