import React from 'react'

const Impressum = () => {
    return (
        <main className="container mx-auto px-6 py-24 max-w-3xl text-base leading-relaxed min-h-screen">
            <section className="space-y-8">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-primary mb-4">Impressum</h1>
                    <p className="text-muted-foreground">Angaben gemäß § 5 ECG, § 25 MedienG und § 63 GewO</p>
                </div>

                <div className="space-y-1">
                    <p className="font-semibold text-lg">Roommetrics Developments</p>
                    <p>Inhaber: Nico Zimmermann</p>
                    <p>Hauptstraße 36</p>
                    <p>3702 Stranzendorf, Österreich</p>
                </div>

                <div className="space-y-1">
                    <p>Telefon:{' '}
                        <a href="tel:+4367764200741" className="text-primary hover:underline">
                            +43 677 64200741
                        </a>
                    </p>
                    <p>E-Mail:{' '}
                        <a href="mailto:office@roommetrics.dev" className="text-primary hover:underline">
                            office@roommetrics.dev
                        </a>
                    </p>
                </div>

                <div className="space-y-1">
                    <p>Gewerbebehörde: Bezirkshauptmannschaft Korneuburg</p>
                    <p>Mitglied der Wirtschaftskammer Niederösterreich, Fachgruppe Informationstechnologie</p>
                    <p>Gewerbeordnung:{' '}
                        <a
                            href="https://www.ris.bka.gv.at"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                        >
                            www.ris.bka.gv.at
                        </a>
                    </p>
                </div>

                <div className="border-t pt-8 mt-12 text-sm text-muted-foreground">
                    <p>
                        © {new Date().getFullYear()} Roommetrics Developments. Alle Rechte vorbehalten.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Impressum
