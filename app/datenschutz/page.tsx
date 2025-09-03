import React from 'react'

const Datenschutz = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
            <div className="relative">
                {/* Background Effects */}
                <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
                <section className='min-h-screen w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
                    <div className="max-w-4xl mx-auto">
                        {/* Title Section */}
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20 fade-in">
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 sm:mb-6 uppercase leading-tight'>
                                <span className='bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent'>
                                    Datenschutz
                                </span>
                            </h1>
                            <div data-underline className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
                        </div>

                        {/* Content */}
                        <div data-stagger className="space-y-8 sm:space-y-12">
                            {/* Einleitung */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Allgemeine Hinweise
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Der Schutz Ihrer persönlichen Daten ist uns ein großes Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021). In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung auf unserer Website.
                                </p>
                            </div>

                            {/* Verantwortlicher */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Verantwortlicher
                                </h2>
                                <div className="space-y-1 text-base sm:text-lg text-white/80">
                                    <p>Roommetrics Developments</p>
                                    <p>Inhaber: Nico Zimmermann</p>
                                    <p>Hauptstraße 36</p>
                                    <p>3702 Stranzendorf, Österreich</p>
                                    <p>
                                        E-Mail:{' '}
                                        <a href="mailto:office@roommetrics.dev" className="text-primary hover:text-blue-400 transition-colors duration-300 hover:underline">
                                            office@roommetrics.dev
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Erhebung und Verarbeitung */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Erhebung und Verarbeitung personenbezogener Daten
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Personenbezogene Daten werden nur erhoben, wenn Sie uns diese freiwillig, z.B. im Kontaktformular, mitteilen. Wir verwenden Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfragen oder zur Abwicklung von Verträgen.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Cookies
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Unsere Website verwendet nur technisch notwendige Cookies, die keine personenbezogenen Daten speichern und für den Betrieb der Seite unerlässlich sind.
                                </p>
                            </div>

                            {/* Rechte */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Ihre Rechte
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Sie haben das Recht, jederzeit Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten, diese berichtigen, sperren oder löschen zu lassen. Bitte kontaktieren Sie uns dazu per E-Mail.
                                </p>
                            </div>

                            {/* Datensicherheit */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Datensicherheit
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen unbefugten Zugriff und Missbrauch zu schützen.
                                </p>
                            </div>

                            {/* Änderungen */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    Änderungen der Datenschutzerklärung
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version finden Sie stets auf dieser Seite.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Datenschutz
