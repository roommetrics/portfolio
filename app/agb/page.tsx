import React from 'react'

const AGB = () => {
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
                                    Allgemeine Geschäftsbedingungen (AGB)
                                </span>
                            </h1>
                            <div data-underline className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-primary to-blue-400 rounded-full mx-auto"></div>
                        </div>

                        {/* Content */}
                        <div data-stagger className="space-y-8 sm:space-y-12">
                            {/* Präambel */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    1. Geltungsbereich
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Lieferungen und sonstigen Leistungen zwischen Roommetrics Developments, Inhaber Nico Zimmermann, und ihren Kunden. Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, Roommetrics Developments stimmt diesen ausdrücklich schriftlich zu.
                                </p>
                            </div>

                            {/* Vertragsabschluss */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    2. Vertragsabschluss
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Ein Vertrag kommt durch schriftliche Auftragsbestätigung oder durch Beginn der Ausführung der Leistung durch Roommetrics Developments zustande.
                                </p>
                            </div>

                            {/* Leistungen */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    3. Leistungen und Mitwirkungspflichten
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Der Leistungsumfang ergibt sich aus dem jeweiligen Angebot. Der Kunde verpflichtet sich, alle zur Durchführung des Auftrags erforderlichen Informationen und Unterlagen rechtzeitig zur Verfügung zu stellen.
                                </p>
                            </div>

                            {/* Preise und Zahlung */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    4. Preise und Zahlungsbedingungen
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Alle Preise verstehen sich in Euro, exklusive Umsatzsteuer. Zahlungen sind, sofern nicht anders vereinbart, innerhalb von 14 Tagen ab Rechnungsdatum ohne Abzug fällig.
                                </p>
                            </div>

                            {/* Eigentumsvorbehalt */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    5. Eigentumsvorbehalt
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Gelieferte Waren und erstellte Werke bleiben bis zur vollständigen Bezahlung Eigentum von Roommetrics Developments.
                                </p>
                            </div>

                            {/* Gewährleistung und Haftung */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    6. Gewährleistung und Haftung
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Es gelten die gesetzlichen Gewährleistungsbestimmungen. Für Schäden haftet Roommetrics Developments nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung für Folgeschäden, entgangenen Gewinn oder Datenverlust ist ausgeschlossen.
                                </p>
                            </div>

                            {/* Datenschutz */}
                            <div className="bg-gradient-to-br from-primary/10 to-blue-400/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-primary/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    7. Datenschutz
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Die Verarbeitung personenbezogener Daten erfolgt ausschließlich im Rahmen der geltenden Datenschutzgesetze. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-primary hover:text-blue-400 underline">Datenschutzerklärung</a>.
                                </p>
                            </div>

                            {/* Schlussbestimmungen */}
                            <div className="bg-gradient-to-br from-blue-400/10 to-primary/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 border border-blue-400/20 backdrop-blur-sm">
                                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                    8. Schlussbestimmungen
                                </h2>
                                <p className="text-base sm:text-lg text-white/80">
                                    Es gilt österreichisches Recht. Gerichtsstand ist Korneuburg. Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AGB
