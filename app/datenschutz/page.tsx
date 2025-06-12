import React from 'react'

const Datenschutz = () => {
    return (
        <main className="container mx-auto px-6 py-24 max-w-3xl text-base leading-relaxed min-h-screen">
            <section className="space-y-8">
                <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-4">Datenschutz</h1>

                <p className="text-muted-foreground">
                    Der Schutz Ihrer persönlichen Daten ist uns ein großes Anliegen. Wir verarbeiten Ihre Daten
                    ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2021).
                    In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung auf unserer Website.
                </p>

                <div className="space-y-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Verantwortlicher</h2>
                        <p>Roommetrics Developments</p>
                        <p>Inhaber: Nico Zimmermann</p>
                        <p>Hauptstraße 36</p>
                        <p>3702 Stranzendorf, Österreich</p>
                        <p>E-Mail: <a href="mailto:office@roommetrics.dev" className="text-primary hover:underline">office@roommetrics.dev</a></p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Erhebung und Verarbeitung personenbezogener Daten</h2>
                        <p>
                            Personenbezogene Daten werden nur erhoben, wenn Sie uns diese freiwillig, z.B. im Kontaktformular,
                            mitteilen. Wir verwenden Ihre Daten ausschließlich zur Bearbeitung Ihrer Anfragen oder zur Abwicklung von Verträgen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
                        <p>
                            Unsere Website verwendet nur technisch notwendige Cookies, die keine personenbezogenen Daten speichern
                            und für den Betrieb der Seite unerlässlich sind.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Ihre Rechte</h2>
                        <p>
                            Sie haben das Recht, jederzeit Auskunft über die bei uns gespeicherten personenbezogenen Daten zu erhalten,
                            diese berichtigen, sperren oder löschen zu lassen. Bitte kontaktieren Sie uns dazu per E-Mail.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Datensicherheit</h2>
                        <p>
                            Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen unbefugten Zugriff
                            und Missbrauch zu schützen.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Änderungen der Datenschutzerklärung</h2>
                        <p>
                            Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen. Die aktuelle Version finden Sie stets auf dieser Seite.
                        </p>
                    </div>
                </div>

                <div className="border-t pt-8 mt-12 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Roommetrics Developments. Alle Rechte vorbehalten.</p>
                </div>
            </section>
        </main>
    )
}

export default Datenschutz
