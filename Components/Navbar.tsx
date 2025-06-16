'use client'
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dienstleistungen', href: '/services' },
    { label: 'Projekte', href: '/projects' },
    { label: 'About', href: '/about' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMobile = () => {
        setIsOpen(!isOpen);
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
        <motion.header 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex justify-between items-center py-4 px-6 lg:px-12 w-full fixed top-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-primary/10' 
                    : 'bg-transparent'
            }`}
        >
            <Link href='/' className="flex items-center space-x-2">
                <div className="relative">
                    <Image 
                        src='/Icon_Only.svg' 
                        alt="Roommetrics Logo" 
                        height={45} 
                        width={45}
                        className="hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-md opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="font-bold text-lg bg-gradient-to-r text-primary hidden sm:block">
                    Roommetrics
                </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
                {navItems.map(({ label, href }) => (
                    <Link 
                        key={label} 
                        href={href} 
                        className="relative text-white hover:text-primary font-medium transition-all duration-300 group"
                    >
                        {label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
                <Link 
                    href="/contact"
                    className="ml-4 px-6 py-2 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/25 transform hover:scale-105 transition-all duration-300"
                >
                    Kontakt
                </Link>
            </nav>

            <button 
                className="lg:hidden p-2 rounded-full bg-gradient-to-r from-primary to-purple-600 text-white hover:shadow-lg transform hover:scale-105 transition-all duration-300" 
                onClick={toggleMobile}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.nav
                            initial={{ x: "100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 w-80 h-screen bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col pt-20 px-8 z-50 border-l border-primary/10"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                <X size={20} />
                            </button>
                            
                            <div className="space-y-6">
                                {navItems.map(({ label, href }, index) => (
                                    <motion.div
                                        key={label}
                                        initial={{ x: 50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={href} 
                                            onClick={() => setIsOpen(false)} 
                                            className="block text-xl font-medium text-gray-700 hover:text-primary transition-colors duration-300 py-2 border-b border-gray-100 hover:border-primary/30"
                                        >
                                            {label}
                                        </Link>
                                    </motion.div>
                                ))}
                                
                                <motion.div
                                    initial={{ x: 50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    className="pt-6"
                                >
                                    <Link 
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                    >
                                        Kontakt aufnehmen
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </motion.header>
    )
}

export default Navbar