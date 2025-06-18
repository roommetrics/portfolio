'use client'

import React from 'react'
import { motion } from 'motion/react'
import WebAnimation from './Animations/WebAnimation'
import Link from 'next/link'

const ServicesSection = () => {
  return (
    <div>
      <section className='py-20 lg:py-32'>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
              <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
                Weblösungen
              </span>
              <span className="text-white/90"> die mitdenken </span>
              <br className="sm:hidden" />

            </h2>
            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 lg:p-10 shadow-2xl">
                <p className='text-lg sm:text-xl lg:text-2xl leading-relaxed text-white/80 font-light'>
                  Roommetrics Developments entwickelt gemeinsam mit Ihnen eine moderne und professionelle Web-Präsenz – passgenau auf Ihre Ziele abgestimmt.
                  Vom ersten Beratungsgespräch über individuelles Design bis hin zur technischen Umsetzung und Veröffentlichung begleiten wir Sie durch den gesamten Prozess.
                  Auch nach dem Go-Live stehen wir Ihnen zur Seite: mit zuverlässiger Wartung, laufender Betreuung und technischer Weiterentwicklung Ihrer Website oder Anwendung.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, rotate: 5 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(var(--primary-rgb), 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className='group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold text-lg rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-2xl'
                >
                  {/* Button background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-blue-500/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Button text */}
                  <Link href='/services'>
                  <span className="relative z-10 flex items-center gap-2">
                    Mehr erfahren
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  </Link>
                  

                  {/* Shine effect */}
                  <div className="absolute inset-0 -top-full bg-gradient-to-b from-transparent via-white/20 to-transparent group-hover:top-full transition-all duration-700 transform rotate-12"></div>
                </motion.button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex-1 hidden lg:flex justify-start"
            >
              <WebAnimation />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesSection
