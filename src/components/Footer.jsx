import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0077B6] text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2.5c-.3 0-.6.12-.82.36C9.06 5.18 6 9.36 6 12.5 6 16.64 8.91 19.5 12 19.5s6-2.86 6-7c0-3.14-3.06-7.32-5.18-9.64A1.1 1.1 0 0 0 12 2.5Z"/></svg>
              </span>
              <div>
                <p className="font-bold text-slate-900">Plomberie Aquaman</p>
                <p className="text-xs text-slate-500">Québec et environs</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-md">Entreprise locale fière de servir les propriétaires et petites entreprises avec intégrité et efficacité.</p>
            <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1FAFF] ring-1 ring-sky-200">RBQ • Assuré</span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1FAFF] ring-1 ring-sky-200">Garantie main-d’œuvre</span>
            </div>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Liens</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#services" className="hover:text-[#0077B6]">Services</a></li>
              <li><a href="#why" className="hover:text-[#0077B6]">Pourquoi nous</a></li>
              <li><a href="#contact" className="hover:text-[#0077B6]">Contact</a></li>
              <li><a href="#testimonials" className="hover:text-[#0077B6]">Avis clients</a></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-slate-900">Contact</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="tel:+14185550137" className="hover:text-[#0077B6]"><strong>Téléphone:</strong> (418) 555-0137</a></li>
              <li><a href="mailto:info@aquamanplomberie.ca" className="hover:text-[#0077B6]"><strong>Courriel:</strong> info@aquamanplomberie.ca</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Plomberie Aquaman. Tous droits réservés.</p>
          <p>Conçu avec fierté au Québec.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
