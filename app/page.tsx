'use client'

import DeveloperAnimation from '@/Components/DeveloperAnimation';
import React from 'react'
import { motion } from 'motion/react'

const Page = () => {
  return (
    <main className='container mx-auto'>
      <section className='min-h-screen w-full flex flex-col items-center justify-center lg:flex-row'>
        <div className="">
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, scale: { type: 'spring', visualDuration: 0.6, bounce: 0.5 } }}

            className='text-5xl font-bold uppercase text-center sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl'>Roommetrics Developments</motion.h1>
          <motion.p
            initial={{ x: 500, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.3 }}
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
      <hr className='divide' />
      <section className='min-h-screen flex justify-start max-lg:mx-4 '>
        <h2 className='header'><span className='text-primary '>Weblösungen</span> die mitdenken</h2>
      </section>
    </main>
  )
}

export default Page;
