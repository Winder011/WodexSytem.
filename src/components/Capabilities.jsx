const capabilities = [
    ['fa-code', 'Software a medida', 'Sistemas críticos diseñados alrededor de tus procesos, no al revés.'],
    ['fa-gauge-high', 'Rendimiento y escala', 'Arquitecturas rápidas y preparadas para crecer sin interrumpir la operación.'],
    ['fa-cloud', 'Infraestructura confiable', 'Servicios distribuidos, observabilidad y seguridad para operar con certeza.'],
]

export default function Capabilities() {
    return (
        <section id="capacidades" aria-labelledby="capabilities-title" className="scroll-mt-12 py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 lg:px-8">
                <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[.2em] text-cyan-300">Capacidades</p><h2 id="capabilities-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">Ingeniería que protege <span className="text-cyan-300">tu operación.</span></h2></div>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                    {capabilities.map(([icon, title, description]) => <article key={title} className="glass-panel rounded-2xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"><span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300"><i aria-hidden="true" className={`fa-solid ${icon}`} /></span><h3 className="mt-5 text-lg font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-slate-400">{description}</p></article>)}
                </div>
            </div>
        </section>
    )
}