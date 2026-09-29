const metrics = [['Latencia', '42 ms'], ['Uptime', '99.99%'], ['Nodos', '24']]
export default function Architecture() {
    return <section id="arquitectura" aria-labelledby="architecture-title" className="relative scroll-mt-8">
        <div className="glass-panel relative overflow-hidden rounded-2xl p-5 shadow-2xl shadow-cyan-950/30 sm:p-7">
            <div className="absolute inset-0 grid-glow opacity-60" /><div className="relative flex items-center justify-between"><div><p className="font-mono text-[10px] uppercase tracking-[.22em] text-cyan-300">Topology live</p><h2 id="architecture-title" className="mt-1 text-lg font-bold">Arquitectura distribuida</h2></div><span className="flex items-center gap-2 font-mono text-[10px] text-emerald-300"><span className="relative flex h-2 w-2"><span className="pulse-ring absolute h-2 w-2 rounded-full bg-emerald-300" /><span className="relative h-2 w-2 rounded-full bg-emerald-300" /></span>ONLINE</span></div>
            <div className="relative my-8 grid min-h-48 grid-cols-3 items-center gap-2 text-center font-mono text-[10px] text-slate-300">
                <div className="absolute left-[18%] right-[18%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-cyan-400/20 via-cyan-300 to-violet-400/20" />
                <Node icon="fa-server" label="SERVIDORES" position="col-start-1 row-start-1" /><Node icon="fa-database" label="BASE DE DATOS" position="col-start-1 row-start-3" /><Node primary icon="fa-cloud" label="NUBE WODEX" position="col-start-2 row-span-3" /><Node icon="fa-users" label="USUARIOS" position="col-start-3 row-span-3" />
            </div>
            <div className="relative grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4">{metrics.map(([name, value]) => <div key={name} className="px-2 text-center"><p className="font-mono text-[9px] uppercase text-slate-500">{name}</p><p className="mt-1 text-sm font-bold text-white">{value}</p></div>)}</div>
        </div>
    </section>
}
function Node({ icon, label, primary, position }) { return <div className={`relative z-10 ${position} flex flex-col items-center gap-2`}><span className={`grid h-12 w-12 place-items-center rounded-xl border ${primary ? 'border-cyan-300 bg-cyan-300/15 text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,.28)]' : 'border-white/15 bg-[#101727] text-slate-300'}`}><i aria-hidden="true" className={`fa-solid ${icon}`} /></span><span>{label}</span></div> }