'use client'

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion" // <- kleiner Bugfix: richtiger Import

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Dienstleistungen', href: '/services' },
  { label: 'Projekte', href: '/projects' },
  { label: 'About', href: '/about' }
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobile = () => setIsOpen(prev => !prev)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow backdrop-blur-md border-b border-gray-200' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/Icon_Only.svg"
              alt="Logo"
              width={120}
              height={40}
              className="h-8 lg:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10">
            {navItems.map(({ label, href }, index) => (
              <motion.div
                key={href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  className={`relative text-base font-medium transition-all duration-300 group ${
                    isScrolled ? 'text-black' : 'text-black'
                  }`}
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobile}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle Mobile Menu"
          >
            {isOpen ? <X size={24}  className="text-black"/> : <Menu size={24} className="text-black" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-white px-6 py-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <Image src="/Icon_Only.svg" alt="Logo" width={100} height={40} />
              <button
                onClick={toggleMobile}
                className="text-gray-800 hover:text-primary"
                aria-label="Close Mobile Menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {navItems.map(({ label, href }, index) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-semibold text-gray-800 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
