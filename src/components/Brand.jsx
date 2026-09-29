export default function Brand({ compact = false }) {
    return (
        <a href="#inicio" aria-label="Wodex Systems, volver al inicio" className="group flex shrink-0 items-center gap-2.5 sm:gap-3">
            <span className="grid h-9 w-9 place-items-center overflow-hidden rounded-lg border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,.15)] transition group-hover:shadow-[0_0_28px_rgba(34,211,238,.45)] sm:h-10 sm:w-10">
                <img src="/img/_logo.png" alt="" className="h-8 w-auto object-contain sm:h-9" />
            </span>
            <span className={`${compact ? 'text-xs' : 'text-xs sm:text-sm'} whitespace-nowrap font-extrabold tracking-[.14em] text-white`}>
                WODEX<span className="font-medium text-cyan-300"> SYSTEMS</span>
            </span>
        </a>
    )
}