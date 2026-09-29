import Brand from './Brand'
const email = 'winderaga@gmail.com'
export default function Header() {
    return <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <Brand />
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[.12em] text-slate-400 md:flex">
            <a className="transition hover:text-cyan-300" href="#capacidades">Capacidades</a><a className="transition hover:text-cyan-300" href="#arquitectura">Arquitectura</a><a className="transition hover:text-cyan-300" href="#contacto">Contacto</a>
        </nav>
        <div className="flex items-center gap-3">
            <a href="https://instagram.com/wodexsystem" target="_blank" rel="noreferrer" aria-label="Visitar Instagram de Wodex Systems" className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-slate-300 transition hover:border-fuchsia-300/40 hover:text-fuchsia-200"><i aria-hidden="true" className="fa-brands fa-instagram" /></a>
            <a href={`mailto:${email}`} className="hidden rounded-lg bg-cyan-300 px-4 py-2.5 text-xs font-extrabold text-slate-950 transition hover:bg-cyan-200 sm:block">Hablemos <i aria-hidden="true" className="fa-solid fa-arrow-up-right-from-square ml-1" /></a>
        </div>
    </header>
}