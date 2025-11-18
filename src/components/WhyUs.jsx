import React from 'react'

const items = [
  { title: 'Transparence', desc: 'Devis clairs, prix honnêtes.', icon: (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='m9 12 2 2 4-4'/><circle cx='12' cy='12' r='10'/></svg>
  )},
  { title: 'Rapidité', desc: 'Interventions le jour même.', icon: (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M12 6v6l4 2'/></svg>
  )},
  { title: 'Qualité', desc: 'Matériaux durables, travail propre.', icon: (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M12 2l3 7h7l-5.5 4 2.5 7-7-4-7 4 2.5-7L2 9h7z'/></svg>
  )},
  { title: 'Local', desc: 'Entreprise de Québec, proche de vous.', icon: (
    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'><path d='M12 21s-6-4.35-6-9a6 6 0 1 1 12 0c0 4.65-6 9-6 9z'/><circle cx='12' cy='12' r='2'/></svg>
  )},
]

const WhyUs = () => {
  return (
    <section id="why" className="relative bg-[#F1FAFF]">
      <div className="absolute inset-x-0 -top-8">
        <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="white" d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,50.7C1120,59,1280,53,1360,50.7L1440,48L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#0077B6]">POURQUOI NOUS</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">La tranquillité d’esprit, tout simplement</h2>
          <p className="mt-3 text-slate-600">Nos clients nous choisissent pour notre sérieux, notre parole tenue et notre service après-vente.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-6 ring-1 ring-sky-100 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-[#F1FAFF] text-[#0077B6] inline-flex items-center justify-center ring-1 ring-sky-200">
                {i.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
