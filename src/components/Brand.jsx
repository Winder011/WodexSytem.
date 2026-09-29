export default function Brand({ compact = false }) {
    return <a href="#inicio" aria-label="Wodex Systems, volver al inicio" className="group flex items-center gap-3">
        <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(34,211,238,.15)] transition group-hover:shadow-[0_0_28px_rgba(34,211,238,.45)]">
            <img src="/img/_logo.png" alt="" className="absolute inset-0 h-full w-full object-contain" />
            <i aria-hidden="true" className="fa-solid fa-w text-sm text-cyan-200" />
        </span>
        {!compact && <span className="text-sm font-extrabold tracking-[.16em] text-white">WODEX<span className="font-medium text-cyan-300"> SYSTEMS</span></span>}
    </a>
}