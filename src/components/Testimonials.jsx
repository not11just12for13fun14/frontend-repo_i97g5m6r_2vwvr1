import React from 'react'

const testimonials = [
  { name: 'Mélanie, Limoilou', text: 'Service impeccable! Ils sont arrivés en 30 minutes pour une grosse fuite. Prix honnête et super sympathiques.' },
  { name: 'Patrick, Beauport', text: 'Chauffe-eau remplacé le jour même. Travail propre et communication claire du début à la fin.' },
  { name: 'Nadia, Ste-Foy', text: 'Débouchage rapide de notre drain principal. Je recommande sans hésiter, très professionnels.' },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-[#0077B6]">AVIS</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">Des clients locaux satisfaits</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl ring-1 ring-slate-200 p-6 bg-gradient-to-b from-white to-[#F1FAFF]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#F1FAFF] ring-1 ring-sky-200 flex items-center justify-center text-[#0077B6] font-bold">{t.name.charAt(0)}</div>
                <div>
                  <p className="font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">Avis vérifié</p>
                </div>
              </div>
              <p className="mt-4 text-slate-700">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
