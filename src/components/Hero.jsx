import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background waves */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-32 w-[60rem] h-[60rem] rounded-full bg-[#00B4D8]/10 blur-3xl" />
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 160" preserveAspectRatio="none">
          <path fill="#F1FAFF" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,106.7C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
      </div>

      <div className="bg-gradient-to-b from-white to-[#F1FAFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F1FAFF] text-[#0077B6] px-3 py-1.5 rounded-full ring-1 ring-sky-200 text-xs font-semibold mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse" />
                Intervention rapide • Urgences 24/7
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
                Plomberie Aquaman
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                Votre plomberie entre de bonnes mains. Dépannage rapide, travaux impeccables et service honnête partout dans la région de Québec.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="#contact" className="inline-flex items-center justify-center bg-[#0077B6] hover:bg-[#00639a] text-white font-semibold px-6 py-3 rounded-xl shadow-sm transition-colors">
                  Obtenir une soumission gratuite
                </a>
                <a href="tel:+14185550137" className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3 rounded-xl shadow-sm ring-1 ring-slate-200 transition-colors">
                  Appeler maintenant
                </a>
              </div>

              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4" /><circle cx="12" cy="12" r="9"/></svg>
                  Sans surprise • Prix honnêtes
                </div>
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#00B4D8]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="9"/></svg>
                  Intervention rapide
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-[#00B4D8]/20 to-[#0077B6]/20 blur-2xl rounded-3xl"/>
              <div className="relative bg-white rounded-3xl p-4 ring-1 ring-slate-200 shadow-xl">
                <div className="aspect-[4/3] rounded-2xl bg-[url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center"/>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    {label:'Débouchage', value:'Urgent'},
                    {label:'Fuites', value:'Diagnostic'},
                    {label:'Installation', value:'Qualité'},
                  ].map((item) => (
                    <div key={item.label} className="bg-[#F1FAFF] rounded-xl p-3">
                      <p className="text-xs text-slate-500">{item.label}</p>
                      <p className="text-sm font-semibold text-[#0077B6]">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating CTA on mobile */}
      <a href="tel:+14185550137" className="fixed bottom-5 right-5 md:hidden inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#02a4c6] text-white font-semibold px-4 py-3 rounded-full shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.64a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.53-.17a2 2 0 0 1 2.11.45c.85.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z"/></svg>
        Appeler maintenant
      </a>
    </section>
  )
}

export default Hero
