'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'

const Page = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLDivElement>(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    useEffect(() => {
        if (typeof window === 'undefined') return

        // Simulate GSAP animations with CSS transitions
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in')
                    }
                })
            },
            { threshold: 0.2 }
        )

        if (titleRef.current) observer.observe(titleRef.current)
        if (formRef.current) observer.observe(formRef.current)

        return () => observer.disconnect()
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setIsSubmitting(true)

        try {
            // Simulate email sending with mailto link
            const subject = encodeURIComponent(formData.subject || 'Kontaktanfrage')
            const body = encodeURIComponent(
                `Name: ${formData.name}\nE-Mail: ${formData.email}\n\nNachricht:\n${formData.message}`
            )
            const mailtoLink = `mailto:office@roommetrics.dev?subject=${subject}&body=${body}`

            window.open(mailtoLink, '_blank')

            setSubmitStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' })
        } catch (error) {
            console.error('Error sending email:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus('idle'), 5000)
        }
    }

    const contactInfo = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "E-Mail",
            value: "office@rommetrics.dev",
            href: "mailto:office@roommetrics.dev"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Telefon",
            value: "+43 677 64200741",
            href: "tel:+4367764200741"
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Standort",
            value: "Stranzendorf, Österreich",
            href: "#"
        }
    ]

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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
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
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        
        .animate-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        
        .contact-card {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .contact-card.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .input-group {
          position: relative;
        }
        
        .input-group input,
        .input-group textarea {
          transition: all 0.3s ease;
        }
        
        .input-group input:focus,
        .input-group textarea:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
        }
        
        .gradient-border {
          background: linear-gradient(135deg, #3b82f6, #06b6d4);
          padding: 1px;
          border-radius: 12px;
        }
        
        .floating-dots {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }
        
        .floating-dot {
          position: absolute;
          width: 4px;
          height: 4px;
          background: linear-gradient(45deg, #3b82f6, #06b6d4);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-dot:nth-child(1) {
          top: 20%;
          left: 10%;
          animation-delay: 0s;
        }
        
        .floating-dot:nth-child(2) {
          top: 60%;
          right: 15%;
          animation-delay: 2s;
        }
        
        .floating-dot:nth-child(3) {
          bottom: 30%;
          left: 20%;
          animation-delay: 4s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 1;
          }
        }
      `}</style>

            <div className="floating-dots">
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
                <div className="floating-dot"></div>
            </div>

            <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20 opacity-0">
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
                    <span className="text-white/90">Kontakt </span>
                    <br className="sm:hidden" />
                    <span className='bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent'>
                        Aufnehmen
                    </span>
                </h2>
                <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto"></div>
                <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
                    Haben Sie ein Projekt im Kopf? Lassen Sie uns darüber sprechen!
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Contact Information */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="space-y-6"
                        >
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                                Lassen Sie uns in Kontakt treten
                            </h3>

                            {contactInfo.map((info, index) => (
                                <motion.a
                                    key={info.title}
                                    href={info.href}
                                    className="contact-card flex items-center gap-4 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                                        <p className="text-white/70 group-hover:text-white transition-colors duration-300">{info.value}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="p-6 bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border border-blue-500/20 rounded-xl backdrop-blur-sm"
                        >
                            <h4 className="text-xl font-bold text-white mb-4">Verfügbarkeit</h4>
                            <p className="text-white/80 mb-2">Montag - Freitag: 9:00 - 18:00</p>
                            <p className="text-white/80">Wochenende: Nach Vereinbarung</p>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-green-400 font-semibold">Derzeit verfügbar</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="opacity-0"
                    >
                        <div className="gradient-border">
                            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8">
                                <h3 className="text-2xl font-bold text-white mb-6">Nachricht senden</h3>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Ihr Name"
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10"
                                            />
                                        </div>

                                        <div className="input-group">
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Ihre E-Mail"
                                                required
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10"
                                            />
                                        </div>
                                    </div>

                                    <div className="input-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Betreff"
                                            required
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10"
                                        />
                                    </div>

                                    <div className="input-group">
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            placeholder="Ihre Nachricht..."
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 resize-none"
                                        />
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold rounded-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {isSubmitting ? (
                                            <div className="flex items-center justify-center gap-2">
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Wird gesendet...
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center gap-2">
                                                Nachricht senden
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                </svg>
                                            </div>
                                        )}
                                    </motion.button>

                                    {submitStatus === 'success' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-center"
                                        >
                                            ✓ Nachricht erfolgreich gesendet!
                                        </motion.div>
                                    )}

                                    {submitStatus === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-center"
                                        >
                                            ✗ Fehler beim Senden. Bitte versuchen Sie es erneut.
                                        </motion.div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="mt-20 sm:mt-24 lg:mt-32 flex justify-center">
                <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
            </div>
        </section>
    )
}

export default Page