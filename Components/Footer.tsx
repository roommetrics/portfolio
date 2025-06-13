'use client'

import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="border-t bg-background text-foreground py-10 px-4">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">

                {/* Logo */}
                <div className="flex-shrink-0">
                    <Link href='/'>
                        <Image src="/Banner.png" alt="Roommetrics Logo" width={300} height={300} />
                    </Link>

                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-center lg:text-left">
                    <div className="flex flex-col gap-2">
                        <Link href="/contact" className="hover:text-primary transition">Kontakt</Link>
                        <Link href="/impressum" className="hover:text-primary transition">Impressum</Link>
                        <Link href="/datenschutz" className="hover:text-primary transition">Datenschutz</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link href="/" className="hover:text-primary transition">Home</Link>
                        <Link href="/services" className="hover:text-primary transition">Dienstleistungen</Link>
                        <Link href="/projects" className="hover:text-primary transition">Projekte</Link>
                    </div>
                </div>

                {/* Social Media */}
                <div className="flex gap-5">
                    <Link href="https://www.instagram.com/roommetrics.dev/" target="_blank" className="hover:text-primary transition ">
                        <Instagram />
                    </Link>
                    <Link href="https://x.com/roommetricsDev" target="_blank" className="hover:text-primary transition">
                        <Twitter />
                    </Link>
                    <Link href="https://www.linkedin.com/company/107447080/admin/dashboard/" target="_blank" className="hover:text-primary transition">
                        <Linkedin />
                    </Link>
                    <Link href="https://github.com/roommetrics" target="_blank" className="hover:text-primary transition">
                        <Github />
                    </Link>
                    <Link href="mailto:office@roommetrics.dev" className="hover:text-primary transition">
                        <Mail />
                    </Link>
                </div>
            </div>

            {/* Gap + Copyright */}
            <div className="mt-8 border-t pt-4 text-xs text-center text-muted-foreground">
                © {new Date().getFullYear()} Roommetrics Developments – Alle Rechte vorbehalten
            </div>
        </footer>
    )
}

export default Footer
