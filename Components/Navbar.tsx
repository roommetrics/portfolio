'use client'
// Using plain anchors to avoid Link hydration issues in dev
// inline icons to avoid external deps in client chunk
import { useEffect, useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
// animations removed to avoid hydration/import issues
import CalendlyButton from "./CalendlyButton"

const navItems = [
    { label: 'Start', href: '/' },
    { label: 'Leistungen', href: '/services' },
    { label: 'Kontakt', href: '/contact' },
    // { label: 'Projekte', href: '/projects' },
    { label: 'Über mich', href: '/about' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const openMobile = () => {
        setIsClosing(false);
        setIsOpen(true);
    }
    const closeMobile = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 240);
    }
    const toggleMobile = () => {
        if (isOpen) closeMobile(); else openMobile();
    }

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <header
            suppressHydrationWarning
            className={`w-full fixed top-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/80 dark:bg-black/60 backdrop-blur-xl shadow-lg border-b border-white/10'
                : 'bg-transparent'
                }`}
        >
          <div className="container mx-auto max-w-7xl flex items-center justify-between py-3.5 px-6 lg:px-8">
            <Link href='/' className="flex items-center gap-2">
                <div className="relative">
                    <Image
                        src='/Icon_Only.svg'
                        alt="Roommetrics Logo"
                        height={45}
                        width={45}
                        className="h-[45px] w-[45px] hover:scale-110 transition-transform duration-300"
                        priority={false}
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className={`font-bold text-xl hidden sm:block ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                    Roommetrics
                </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map(({ label, href }) => (
                    <Link
                        key={label}
                        href={href as string}
                        className={`relative hover:text-primary font-medium transition-all duration-300 group text-[15px] ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                    >
                        {label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
                <CalendlyButton text="Erstgespräch" variant="navbar" />
            </nav>

            <button
                className="lg:hidden p-2 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                onClick={toggleMobile}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                )}
            </button>

            {(isOpen || isClosing) && (
                <>
                    <div
                        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 ${isClosing ? 'mobile-overlay-exit' : 'mobile-overlay-enter'}`}
                        onClick={closeMobile}
                    />
                    <nav
                        id="mobile-menu"
                        className={`fixed top-0 right-0 h-screen w-[86vw] max-w-sm bg-gradient-to-b from-gray-900 via-gray-900/95 to-black/90 text-white backdrop-blur-xl shadow-2xl flex flex-col pt-20 px-8 z-50 border-l border-white/10 ${isClosing ? 'mobile-panel-exit' : 'mobile-panel-enter'}`}
                    >
                            <button
                                onClick={closeMobile}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-primary hover:text-white transition-all duration-300"
                                aria-label="Menü schließen"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>

                            <div className="space-y-2">
                                {navItems.map(({ label, href }) => (
                                    <div key={label}>
                                        <Link
                                            href={href as string}
                                            onClick={closeMobile}
                                            className="block text-lg font-medium text-white/90 hover:text-white transition-colors duration-300 py-3 border-b border-white/10 hover:border-white/20"
                                        >
                                            {label}
                                        </Link>
                                    </div>
                                ))}

                                <div className="pt-4">
                                    <Link
                                        href="/contact"
                                        onClick={closeMobile}
                                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        Kontakt aufnehmen
                                    </Link>
                                </div>
                            </div>
                    </nav>
                    <style jsx>{`
                        @keyframes slideInRight { from { transform: translateX(100%); opacity: 0 } to { transform: translateX(0); opacity: 1 } }
                        @keyframes slideOutRight { from { transform: translateX(0); opacity: 1 } to { transform: translateX(100%); opacity: 0 } }
                        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
                        @keyframes fadeOut { from { opacity: 1 } to { opacity: 0 } }
                        .mobile-panel-enter { animation: slideInRight 220ms ease-out forwards; }
                        .mobile-panel-exit { animation: slideOutRight 220ms ease-in forwards; }
                        .mobile-overlay-enter { animation: fadeIn 200ms ease-out forwards; }
                        .mobile-overlay-exit { animation: fadeOut 200ms ease-in forwards; }
                    `}</style>
                </>
            )}
          </div>
        </header>
    )
}

export default Navbar
