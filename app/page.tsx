'use client'

import DeveloperAnimation from '@/Components/Animations/DeveloperAnimation';
import React from 'react'
import { motion } from 'motion/react'
import WebAnimation from '@/Components/Animations/WebAnimation';
import Link from 'next/link';

import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import SelectedProjects from '@/Components/SelectedProjects';

gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

const Page = () => {
  return (
    <main className='container mx-auto max-w-screen'>
      {/* Hero Section */}
      <section className='min-h-screen w-full flex flex-col items-center justify-center lg:flex-row'>
        <div className="">
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, scale: { type: 'spring', visualDuration: 0.6, bounce: 0.5 } }}

            className='text-5xl font-bold uppercase text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>Roommetrics Developments</motion.h1>
          <motion.p
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3, delay: 0.3, x: { type: 'spring' }, scale: { delay: 0.2 }, ease: 'circInOut' }}

            className='text-center text-lg pt-4  md:text-xl lg:text-3xl xl:text-5xl'><span className='text-primary font-semibold'>Modern</span> Websites for <span className='text-primary font-semibold'>modern</span> businesses</motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, opacity: { type: 'tween', duration: 1, delay: 0.3 }, delay: 1 }}
        >
          <DeveloperAnimation />
        </motion.div>
      </section>
      
      {/* Divider */}
      <hr className='divide' />

      {/* Services Section */}
      <section className='my-12 flex flex-col mx-4 lg:mx-8'>
        <h2 className='header'><span className='text-primary '>Weblösungen</span> die mitdenken</h2>
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center">
          <div className="py-8 lg:max-w-1/3 flex justify-center items-center flex-col lg:mt-16">
            <p className='par'>
              Roommetrics Developments entwickelt gemeinsam mit Ihnen eine moderne und professionelle Web-Präsenz – passgenau auf Ihre Ziele abgestimmt.
              Vom ersten Beratungsgespräch über individuelles Design bis hin zur technischen Umsetzung und Veröffentlichung begleiten wir Sie durch den gesamten Prozess.
              Auch nach dem Go-Live stehen wir Ihnen zur Seite: mit zuverlässiger Wartung, laufender Betreuung und technischer Weiterentwicklung Ihrer Website oder Anwendung.
            </p>
            <Link href='/services' className='flex justify-center'>
              <button className='cta-btn'>
                Mehr erfahren
              </button>
            </Link>
          </div>
          <div className="lg:flex justify-start hidden">
            <WebAnimation />
          </div>
        </div>
      </section>

      <hr className='divide'/>

      <section className='my-12 flex flex-col mx-4 lg:mx-8 min-h-screen'>
        <SelectedProjects/>
      </section>
    </main>
  )
}

export default Page;
