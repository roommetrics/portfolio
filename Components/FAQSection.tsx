'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

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

    return (
        <section className='py-20 lg:py-32'>
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
                        <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
                            Häufige Fragen
                        </span>
                        <span className="text-white/90"> & Antworten</span>
                    </h2>
                    <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-6 lg:p-8 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-300"
                            >
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white pr-4">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-6 h-6 text-primary" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 lg:px-8 lg:pb-8">
                                            <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <p className="text-lg text-white/70 mb-6">
                        Haben Sie noch weitere Fragen?
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a
                            href="mailto:office@roommetrics.dev"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-lg rounded-xl hover:shadow-2xl transition-all duration-300"
                        >
                            Jetzt Frage stellen
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default FAQSection
