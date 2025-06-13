'use client'

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const navItems = [
    // Navbar Items
    { label: 'Home', href: '/' },
    { label: 'Dienstleistungen', href: '/offers' },
    { label: 'Projekte', 'href': '/projects' },
    { label: 'About', href: '/about' }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setisScrolled] = useState(false);

    const toggleMobile = () => {
        setIsOpen(!isOpen);
    }

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setisScrolled(true);
        } else {
            setisScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            isScrolled;
        }
    }, [])


    return (
        <header className={`flex justify-between items-center py-4 px-6 w-full fixed z-20 rounded-b-lg ${isScrolled && `backdrop-blur-lg`}`} >
            <Link href='/'>
                <Image src='Icon_Only.svg' alt="Logo" height={50} width={50} />
            </Link>

            <nav className="hidden lg:flex gap-x-8 text-lg font-semibold">
                {navItems.map(({ label, href }) => (
                    <Link key={label} href={href} className="hover:text-primary transition-colors duration-300">
                        {label}
                    </Link>
                ))}
            </nav>

            <button className="lg:hidden text-primary" onClick={toggleMobile} >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.nav
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 w-full h-screen bg-bg-lightgray flex flex-col items-center pt-6 px-6 z-50 gap-8"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="self-end mb-8 text-primary"
                        >
                            <X size={30} />
                        </button>

                        {navItems.map(({ label, href }) => (
                            <Link key={label} href={href} onClick={() => setIsOpen(false)} className="text-xl font-medium hover:text-primary transition-colors duration-300">
                                {label}
                            </Link>
                        ))}
                    </motion.nav>


                )}
            </AnimatePresence>
        </header>
    )
}

export default Navbar
