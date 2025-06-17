import React from 'react'

const Impressum = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            <div className="relative">
                {/* Background Effects */}
                <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                <section className='min-h-screen w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
                    <div className="max-w-4xl mx-auto">
                        {/* Title Section */}
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
                                <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
                                    Impressum
                                </span>
                            </h1>
                            <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8 sm:space-y-12">
                            {/* Legal Notice */}
                            <div className="text-center mb-8">
                                <p className="text-sm sm:text-base text-white/60 italic">
                                    Angaben gemäß § 5 ECG, § 25 MedienG und § 63 GewO
                                </p>
                            </div>

                            {/* Company Info */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Roommetrics Developments
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-white/80">
                                    <p>
                                        <span className="font-semibold text-white">Inhaber:</span> Nico Zimmermann
                                    </p>
                                    <div className="space-y-1">
                                        <p>Hauptstraße 36</p>
                                        <p>3702 Stranzendorf, Österreich</p>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Kontakt
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-white/80">
                                    <p>
                                        <span className="font-semibold text-white">Telefon:</span>{' '}
                                        <a
                                            href="tel:+4367764200741"
                                            className="text-primary hover:text-blue-400 transition-colors duration-300 hover:underline"
                                        >
                                            +43 677 64200741
                                        </a>
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">E-Mail:</span>{' '}
                                        <a
                                            href="mailto:office@roommetrics.dev"
                                            className="text-primary hover:text-blue-400 transition-colors duration-300 hover:underline"
                                        >
                                            office@roommetrics.dev
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Business Registration */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Gewerbliche Angaben
                                </h2>
                                <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-white/80">
                                    <p>
                                        <span className="font-semibold text-white">Gewerbebehörde:</span> Bezirkshauptmannschaft Korneuburg
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Mitglied der:</span> Wirtschaftskammer Niederösterreich, Fachgruppe Informationstechnologie
                                    </p>
                                    <p>
                                        <span className="font-semibold text-white">Gewerbeordnung:</span>{' '}
                                        <a
                                            href="https://www.ris.bka.gv.at"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:text-blue-400 transition-colors duration-300 hover:underline inline-flex items-center gap-1"
                                        >
                                            www.ris.bka.gv.at
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Impressum