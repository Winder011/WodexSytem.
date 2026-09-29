import Brand from './Brand'


export default function Header() {
    return (
        <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:py-6 lg:px-8">
            <Brand />
            <nav aria-label="Navegación principal" className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[.12em] text-slate-400 md:flex">
                <a className="transition hover:text-cyan-300" href="#capacidades">Capacidades</a>
                <a className="transition hover:text-cyan-300" href="#arquitectura">Arquitectura</a>
                <a className="transition hover:text-cyan-300" href="#contacto">Contacto</a>
            </nav>
            <a href="#contacto" className="rounded-lg bg-cyan-300 px-3 py-2.5 text-xs font-extrabold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:px-4">
                <span className="sm:hidden">Cotizar</span><span className="hidden sm:inline">Hablemos <i aria-hidden="true" className="fa-solid fa-arrow-up-right-from-square ml-1" /></span>
            </a>
        </header>
    )
}
