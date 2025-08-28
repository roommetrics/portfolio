'use client'

import { motion } from 'motion/react'
import DeveloperAnimation from './Animations/DeveloperAnimation';
import CalendlyButton from './CalendlyButton';

const HeroSection = () => (
    <section className='min-h-screen w-full flex flex-col items-center justify-center lg:flex-row lg:gap-16 max-lg:mt-24'>
        {/* Textbereich */}
        <div className="flex-1 text-center lg:text-left space-y-8">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, scale: { type: 'spring', visualDuration: 0.8, bounce: 0.3 } }}
                className="space-y-6"
            >
                {/* Headline */}
                <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase leading-tight'>
                    <span className="bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
                        Roommetrics
                    </span>
                    <br />
                    <span className="text-white/90">
                        Developments
                    </span>
                </h1>

                {/* Subline / Nutzen für den Kunden */}
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                    className="relative space-y-2"
                >
                    <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-relaxed text-white/80'>
                        Professionelle Websites, die <span className='text-primary font-semibold bg-primary/10 px-2 py-1 rounded-lg'>neue Kunden anziehen</span> und Ihr Business online erfolgreich machen.
                    </p>
                    <div className="absolute -bottom-4 left-0 w-32 h-1 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
                </motion.div>

                {/* CTA Button */}
                <CalendlyButton text='Kostenloses Erstgespräch vereinbaren' variant='hero' />
            </motion.div>
        </div>

        {/* Animation / Visual */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="flex-1 flex justify-center lg:justify-end"
        >
            <DeveloperAnimation />
        </motion.div>
    </section>
);

export default HeroSection;
