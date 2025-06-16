'use client'

import React, { useLayoutEffect, useRef } from 'react'
import { motion } from 'motion/react'

// Mock components for the animations
const DeveloperAnimation = () => (
  <div className="w-96 h-96 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30">
    <div className="w-64 h-64 bg-gradient-to-tr from-primary to-blue-500 rounded-full animate-pulse opacity-80"></div>
  </div>
);

const WebAnimation = () => (
  <div className="w-80 h-80 bg-gradient-to-bl from-primary/30 to-cyan-500/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
    <div className="w-48 h-48 bg-gradient-to-br from-primary to-indigo-500 rounded-xl animate-bounce opacity-70"></div>
  </div>
);

const Page = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="relative">
        {/* Background Effects */}
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        <main className='container mx-auto max-w-7xl px-6 lg:px-8 relative z-10'>
          {/* Hero Section */}
          <section className='min-h-screen w-full flex flex-col items-center justify-center lg:flex-row lg:gap-16'>
            <div className="flex-1 text-center lg:text-left space-y-8">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, scale: { type: 'spring', visualDuration: 0.8, bounce: 0.3 } }}
                className="space-y-6"
              >
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight'>
                  <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                    Roommetrics
                  </span>
                  <br />
                  <span className="text-white/90">
                    Developments
                  </span>
                </h1>
                
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                  className="relative"
                >
                  <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed text-white/80'>
                    <span className='text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg'>Moderne</span> Websites für{' '}
                    <span className='text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg'>moderne</span> Unternehmen
                  </p>
                  
                  {/* Subtle accent line */}
                  <div className="absolute -bottom-4 left-0 w-24 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                </motion.div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
              className="flex-1 flex justify-center lg:justify-end"
            >
              <DeveloperAnimation />
            </motion.div>
          </section>

          {/* Elegant Divider */}
          <div className="relative py-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <section className='py-20 lg:py-32'>
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6'>
                  <span className='text-primary bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent'>
                    Weblösungen
                  </span>{' '}
                  <span className="text-white/90">die mitdenken</span>
                </h2>
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
                      <span className="relative z-10 flex items-center gap-2">
                        Mehr erfahren
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                      
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

          {/* Another elegant divider */}
          <div className="relative py-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </div>
          </div>

          {/* Placeholder section with subtle styling */}
          <section className='min-h-screen w-full flex items-center justify-center'>
            <div className="text-center space-y-6">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/50 animate-pulse"></div>
              </div>
              <p className="text-white/50 text-lg">Weitere Inhalte folgen...</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Page;