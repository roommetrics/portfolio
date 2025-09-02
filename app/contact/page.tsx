'use client'

import React, { useEffect } from 'react'

const ContactPage = () => {
  const whatsappHref = `https://wa.me/436801608887?text=${encodeURIComponent('Hallo Nico! Ich interessiere mich für eine Website. Können wir kurz sprechen?')}`

  useEffect(() => {
    // simple fade-in on scroll without affecting SSR markup
    const els = document.querySelectorAll<HTMLElement>('.reveal-on-scroll')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('in')
      })
    }, { threshold: 0.2 })
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <section className='min-h-screen w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>
      <div className='max-w-5xl mx-auto'>
        <style jsx>{`
          .reveal-on-scroll { opacity: 0; transform: translateY(12px); transition: opacity .5s ease, transform .5s ease; }
          .reveal-on-scroll.in { opacity: 1; transform: translateY(0); }
        `}</style>
        {/* Header */}
        <div className='text-center reveal-on-scroll'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white'>
            Kontakt aufnehmen
          </h1>
          <p className='mt-4 text-white/80 text-lg max-w-2xl mx-auto'>
            Kostenlos & unverbindlich. Ich antworte in der Regel innerhalb von 1–2 Stunden (Auch an Wochenenden).
          </p>
          <div className='mt-6 flex items-center justify-center gap-3 text-sm text-white/60'>
            <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10'>Direkt & persönlich</span>
            <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10'>Schnelle Rückmeldung</span>
            <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10'>Kostenloses Erstgespräch</span>
          </div>
        </div>

        {/* Contact Methods */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          {/* E-Mail */}
          <a
            href='mailto:office@roommetrics.dev'
            className='group p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 reveal-on-scroll'
          >
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </div>
              <div>
                <p className='text-white/60 text-sm'>E‑Mail</p>
                <p className='text-white font-semibold group-hover:underline'>office@roommetrics.dev</p>
              </div>
            </div>
          </a>

          {/* Telefon */}
          <a
            href='tel:+436801608887'
            className='group p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 reveal-on-scroll'
          >
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white'>
                <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
              </div>
              <div>
                <p className='text-white/60 text-sm'>Telefon</p>
                <p className='text-white font-semibold'>+43 680 1608887</p>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappHref}
            target='_blank'
            rel='noopener noreferrer'
            className='group p-6 lg:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 reveal-on-scroll'
          >
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white'>
                <svg className='w-6 h-6' viewBox='0 0 32 32' fill='currentColor' aria-hidden='true'>
                  <path d='M19.11 17.3c-.27-.14-1.57-.77-1.81-.86-.24-.09-.42-.14-.6.14-.18.27-.69.86-.85 1.04-.16.18-.31.2-.58.07-.27-.14-1.12-.41-2.13-1.31-.79-.7-1.32-1.57-1.48-1.84-.16-.27-.02-.42.12-.56.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.53-.44-.46-.6-.47-.16-.01-.34-.01-.52-.01-.18 0-.47.07-.72.34-.24.27-.94.92-.94 2.24 0 1.32.96 2.6 1.09 2.78.13.18 1.88 2.87 4.56 4.02.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.57-.64 1.79-1.26.22-.62.22-1.15.16-1.26-.07-.11-.25-.18-.52-.32z'/>
                  <path d='M26.51 5.49C23.58 2.56 19.86 1 15.94 1 7.95 1 1.45 7.5 1.45 15.49c0 2.48.65 4.85 1.88 6.98L1 31l8.74-2.28c2.06 1.13 4.38 1.73 6.79 1.73 7.99 0 14.49-6.5 14.49-14.49 0-3.92-1.56-7.64-4.49-10.47zM16 28.85c-2.21 0-4.36-.6-6.23-1.75l-.45-.27-5.19 1.36 1.38-5.06-.29-.52a12.87 12.87 0 01-1.85-6.12C3.37 8.51 9.02 2.85 16 2.85c3.34 0 6.47 1.3 8.83 3.67A12.4 12.4 0 0128.85 15.3c0 6.98-5.66 12.55-12.85 12.55z'/>
                </svg>
              </div>
              <div>
                <p className='text-white/60 text-sm'>WhatsApp Business</p>
                <p className='text-white font-semibold group-hover:underline'>Nachricht via WhatsApp senden</p>
              </div>
            </div>
          </a>
        </div>

        {/* Trust and reassurance */}
        <div className='mt-12 bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 reveal-on-scroll'>
          <h2 className='text-xl font-bold text-white mb-4'>Gute Gründe für eine Nachricht</h2>
          <ul className='grid sm:grid-cols-2 gap-3 text-white/80'>
            <li className='flex items-start gap-3'>
              <span className='w-2.5 h-2.5 mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
              <span>Kostenloses Erstgespräch – klare Einschätzung in wenigen Minuten</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-2.5 h-2.5 mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
              <span>Transparente Preise & feste Timings (z. B. 48h Landing Page)</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-2.5 h-2.5 mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
              <span>Direkter Kontakt – ohne Umwege über Formulare</span>
            </li>
            <li className='flex items-start gap-3'>
              <span className='w-2.5 h-2.5 mt-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
              <span>Antwort meist in 1–2 Stunden</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
