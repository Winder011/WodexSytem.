import { useState } from 'react'

const initialForm = { name: '', company: '', email: '', projectType: '', project: '' }

export default function Contact() {
    const [form, setForm] = useState(initialForm)
    const [submitted, setSubmitted] = useState(false)
    const update = ({ target }) => {
        setSubmitted(false)
        setForm((current) => ({ ...current, [target.name]: target.value }))
    }
    const submit = (event) => {
        event.preventDefault()
        setSubmitted(true)
        setForm(initialForm)
    }

    return (
        <section id="contacto" aria-labelledby="contact-title" className="scroll-mt-12 border-y border-white/[.07] bg-white/[.02] py-16 sm:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[.85fr_1.15fr] lg:gap-12 lg:px-8">
                <div>
                    <p className="font-mono text-xs uppercase tracking-[.2em] text-cyan-300">Inicia tu proyecto</p>
                    <h2 id="contact-title" className="mt-4 text-3xl font-extrabold tracking-tight sm:text-5xl">¿Tienes un proyecto en mente? <span className="text-cyan-300">Hagámoslo imparable.</span></h2>
                    <p className="mt-6 max-w-md leading-7 text-slate-400">Completa el formulario y un ingeniero senior evaluará la arquitectura de tu sistema en menos de 24 horas.</p>
                    <a className="mt-8 inline-flex items-center gap-3 text-sm font-bold text-slate-200 transition hover:text-cyan-300" href="mailto:winderaga@gmail.com"><i aria-hidden="true" className="fa-solid fa-envelope text-cyan-300" />winderaga@gmail.com</a>
                </div>
                <form onSubmit={submit} className="glass-panel rounded-2xl p-5 sm:p-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Nombre" name="name" value={form.name} onChange={update} placeholder="Tu nombre" required />
                        <Field label="Empresa" name="company" value={form.company} onChange={update} placeholder="Nombre de tu empresa" />
                        <Field label="Correo corporativo" name="email" type="email" value={form.email} onChange={update} placeholder="tu@empresa.com" required />
                        <label className="block text-sm font-semibold text-slate-200" htmlFor="projectType">Tipo de proyecto<select id="projectType" name="projectType" value={form.projectType} onChange={update} required className="mt-2 w-full rounded-lg border border-white/10 bg-[#080d19] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300"><option value="" disabled>Selecciona una opción</option><option>Software a Medida</option><option>Optimización / Infraestructura</option><option>App Web / Móvil</option></select></label>
                    </div>
                    <label className="mt-5 block text-sm font-semibold text-slate-200" htmlFor="project">Descripción del proyecto<textarea id="project" name="project" value={form.project} onChange={update} required rows="4" className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-[#080d19] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" placeholder="¿Qué quieres construir, optimizar o escalar?" /></label>
                    <div className="mt-6 flex flex-wrap items-center gap-4"><button type="submit" className="rounded-lg bg-cyan-300 px-5 py-3 text-sm font-extrabold text-slate-950 transition-all hover:scale-105 hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">Enviar consulta <i aria-hidden="true" className="fa-solid fa-arrow-right ml-1" /></button>{submitted && <p role="status" className="text-sm text-emerald-300"><i aria-hidden="true" className="fa-solid fa-circle-check mr-1" />Mensaje preparado. Te responderemos pronto.</p>}</div>
                </form>
            </div>
        </section>
    )
}

function Field({ label, name, type = 'text', ...props }) {
    return <label className="block text-sm font-semibold text-slate-200" htmlFor={name}>{label}<input id={name} name={name} type={type} className="mt-2 w-full rounded-lg border border-white/10 bg-[#080d19] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300" {...props} /></label>
}