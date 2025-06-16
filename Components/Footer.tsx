'use client'
import { Github, Instagram, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { useState, useEffect } from 'react'

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const footerLinks = {
        company: [
            { label: 'Home', href: '/' },
            { label: 'Dienstleistungen', href: '/services' },
            { label: 'Projekte', href: '/projects' },
            { label: 'About', href: '/about' }
        ],
        legal: [
            { label: 'Kontakt', href: '/contact' },
            { label: 'Impressum', href: '/impressum' },
            { label: 'Datenschutz', href: '/datenschutz' },
            { label: 'AGB', href: '/agb' }
        ]
    };

    const socialLinks = [
        { 
            icon: Instagram, 
            href: "https://www.instagram.com/roommetrics.dev/", 
            label: "Instagram",
            color: "hover:text-pink-500"
        },
        { 
            icon: Twitter, 
            href: "https://x.com/roommetricsDev", 
            label: "Twitter",
            color: "hover:text-blue-400"
        },
        { 
            icon: Linkedin, 
            href: "https://www.linkedin.com/company/107447080/admin/dashboard/", 
            label: "LinkedIn",
            color: "hover:text-blue-600"
        },
        { 
            icon: Github, 
            href: "https://github.com/roommetrics", 
            label: "GitHub",
            color: "hover:text-gray-700"
        },
        { 
            icon: Mail, 
            href: "mailto:office@roommetrics.dev", 
            label: "Email",
            color: "hover:text-primary"
        }
    ];

    return (
        <footer className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50/30 border-t border-gray-200/50">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/5 to-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="relative container mx-auto px-6 lg:px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Logo & Description */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href='/' className="inline-block group">
                            <div className="flex items-center space-x-3">
                                <div className="relative">
                                    <Image 
                                        src="/Banner.png" 
                                        alt="Roommetrics Logo" 
                                        width={200} 
                                        height={60}
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        </Link>
                        
                        <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                            <span className="font-semibold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                Moderne Weblösungen
                            </span> für innovative Unternehmen. 
                            Wir entwickeln digitale Erfahrungen, die begeistern und konvertieren.
                        </p>

                        {/* CTA */}
                        <div className="pt-4">
                            <Link 
                                href="/contact"
                                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300 group"
                            >
                                Projekt starten
                                <ArrowUp className="ml-2 w-4 h-4 transform rotate-45 group-hover:translate-x-1 transition-transform duration-300" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-gray-900 relative">
                            Navigation
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-purple-500"></span>
                        </h3>
                        <div className="space-y-3">
                            {footerLinks.company.map(({ label, href }) => (
                                <Link 
                                    key={label} 
                                    href={href} 
                                    className="block text-gray-600 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-lg text-gray-900 relative">
                            Rechtliches
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-purple-500"></span>
                        </h3>
                        <div className="space-y-3">
                            {footerLinks.legal.map(({ label, href }) => (
                                <Link 
                                    key={label} 
                                    href={href} 
                                    className="block text-gray-600 hover:text-primary transition-colors duration-300 hover:translate-x-1 transform"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social Media & Bottom Section */}
                <div className="mt-16 pt-8 border-t border-gray-200/50">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-600 font-medium mr-2">Folgen Sie uns:</span>
                            {socialLinks.map(({ icon: Icon, href, label, color }) => (
                                <Link 
                                    key={label}
                                    href={href} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 rounded-full bg-white shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 text-gray-600 ${color} group`}
                                    aria-label={label}
                                >
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center lg:text-right">
                            <p className="text-gray-500 text-sm">
                                © {new Date().getFullYear()} 
                                <span className="font-semibold text-gray-700"> Roommetrics Developments</span>
                            </p>
                            <p className="text-gray-400 text-xs mt-1">
                                Alle Rechte vorbehalten · Made with ❤️ in Austria
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                    opacity: showScrollTop ? 1 : 0, 
                    scale: showScrollTop ? 1 : 0 
                }}
                transition={{ duration: 0.3 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} />
            </motion.button>
        </footer>
    )
}

export default Footer