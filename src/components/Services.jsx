import React from 'react'

const services = [
  { title: 'Urgences & fuites', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
  ), desc: 'Déplacement rapide, diagnostic précis et réparation durable.' },
  { title: 'Débouchage', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M3 3h7v7H3z"/><path d="M14 14h7v7h-7z"/><path d="M14 3h7v7h-7zM3 14h7v7H3z"/></svg>
  ), desc: 'Évier, toilette, drain principal — équipements pro.' },
  { title: 'Installation', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 2v20"/><path d="M7 7h10"/><path d="M7 17h10"/></svg>
  ), desc: 'Robinetterie, chauffe-eau, lave-vaisselle et plus.' },
  { title: 'Inspection caméra', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><circle cx="12" cy="12" r="3"/><rect x="2" y="7" width="20" height="10" rx="2"/></svg>
  ), desc: 'Trouver la source du problème sans ouvrir les murs.' },
  { title: 'Dégel de tuyaux', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M12 2v20M4 6l4 4-4 4M20 6l-4 4 4 4"/></svg>
  ), desc: 'Équipement sécuritaire pour l’hiver québécois.' },
  { title: 'Commercial léger', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14"/><path d="M16 3v4M8 3v4"/></svg>
  ), desc: 'Petites entreprises, restaurants, bureaux.' },
]

const Services = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#0077B6]">SERVICES</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Tout pour une plomberie fiable</h2>
          <p className="mt-3 text-slate-600">Des urgences aux installations complètes, on s’occupe de tout, proprement et rapidement.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-2xl ring-1 ring-slate-200 bg-white p-5 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-[#F1FAFF] text-[#0077B6] inline-flex items-center justify-center ring-1 ring-sky-200">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
