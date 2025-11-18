import React, { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Merci! Nous vous contacterons rapidement.')
    setForm({ name: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-[#F1FAFF]">
      <div className="absolute inset-x-0 -top-8">
        <svg className="w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="white" d="M0,32L80,26.7C160,21,320,11,480,16C640,21,800,43,960,50.7C1120,59,1280,53,1360,50.7L1440,48L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"/>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <p className="text-sm font-semibold text-[#0077B6]">CONTACT</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">On est là pour vous aider</h2>
            <p className="mt-3 text-slate-600">Expliquez-nous votre besoin — urgences, travaux planifiés ou simple question.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nom</label>
                <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#00B4D8] focus:ring-[#00B4D8]" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Téléphone</label>
                <input name="phone" value={form.phone} onChange={handleChange} required className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#00B4D8] focus:ring-[#00B4D8]" placeholder="Ex: 418 555-0137" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows={4} value={form.message} onChange={handleChange} className="mt-1 w-full rounded-xl border-slate-300 focus:border-[#00B4D8] focus:ring-[#00B4D8]" placeholder="Décrivez votre situation" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center bg-[#0077B6] hover:bg-[#00639a] text-white font-semibold px-6 py-3 rounded-xl shadow-sm">
                Envoyer ma demande
              </button>
              <div className="pt-2 text-sm text-slate-600">
                Ou appelez-nous directement: <a href="tel:+14185550137" className="font-semibold text-[#0077B6]">(418) 555-0137</a>
              </div>
            </form>
          </div>

          <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white">
            <iframe title="Carte Québec" className="w-full h-[420px]" src="https://www.google.com/maps?q=Quebec,QC&output=embed" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
