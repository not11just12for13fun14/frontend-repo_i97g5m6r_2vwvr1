import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      <div className="absolute inset-x-0 -top-10">
        <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="#F1FAFF" d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,50.7C1120,59,1280,53,1360,50.7L1440,48L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold text-[#0077B6] mb-2">À PROPOS</p>
            <h2 className="text-3xl font-bold text-slate-900">Pourquoi “Aquaman” ?</h2>
            <p className="mt-4 text-slate-600">
              Fondée par une équipe de plombiers d'expérience, Aquaman est née d'une idée simple: offrir un service humain, rapide et transparent. Nous intervenons avec le souci du détail et la fierté du travail bien fait.
            </p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#00B4D8]"></span> Licenciés RBQ, assurés, et respect des normes en vigueur.</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#00B4D8]"></span> Devis clairs et prix honnêtes, sans surprise.</li>
              <li className="flex items-start gap-3"><span className="mt-1 w-2 h-2 rounded-full bg-[#00B4D8]"></span> Intervention rapide à Québec et environs.</li>
            </ul>
          </div>
          <div className="bg-[#F1FAFF] rounded-3xl p-6 ring-1 ring-sky-100">
            <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
