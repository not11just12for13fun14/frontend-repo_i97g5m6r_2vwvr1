import React from 'react'

const Navbar = () => {
  const phone = '+1 418-555-0137'
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#0077B6] text-white shadow-sm ring-1 ring-white/20">
            {/* Droplet icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M12 2.5c-.3 0-.6.12-.82.36C9.06 5.18 6 9.36 6 12.5 6 16.64 8.91 19.5 12 19.5s6-2.86 6-7c0-3.14-3.06-7.32-5.18-9.64A1.1 1.1 0 0 0 12 2.5Z"/>
            </svg>
          </span>
          <div>
            <p className="text-slate-900 font-bold leading-tight">Plomberie Aquaman</p>
            <p className="text-xs text-slate-500 -mt-0.5">Québec • 24/7</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#about" className="hover:text-[#0077B6] transition-colors">À propos</a>
          <a href="#services" className="hover:text-[#0077B6] transition-colors">Services</a>
          <a href="#why" className="hover:text-[#0077B6] transition-colors">Pourquoi nous</a>
          <a href="#testimonials" className="hover:text-[#0077B6] transition-colors">Avis</a>
          <a href="#contact" className="hover:text-[#0077B6] transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#0077B6] bg-[#F1FAFF] px-3 py-1.5 rounded-full ring-1 ring-sky-200">
            {/* Clock icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></svg>
            Service d'urgence 24/7
          </span>
          <a href={`tel:${phone.replace(/\s|\+/g,'')}`} className="inline-flex items-center gap-2 bg-[#0077B6] hover:bg-[#00639a] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-colors">
            {/* Phone */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.62 2.64a2 2 0 0 1-.45 2.11L9 10a16 16 0 0 0 5 5l.53-.17a2 2 0 0 1 2.11.45c.85.29 1.74.5 2.64.62A2 2 0 0 1 22 16.92Z"/></svg>
            Appeler
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
