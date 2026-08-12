'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Galeria', href: '#galeria' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#agendamento' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(5,8,16,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,180,255,0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button onClick={() => handleNav('#hero')} className="flex items-center gap-2 z-10">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden ring-1 ring-[#00B4FF]/30">
              <Image src="/images/logo_shiny.jpg" alt="Shiny Car Studio" fill className="object-cover" />
            </div>
            <span className="font-display text-xl md:text-2xl tracking-widest text-white">
              SHINY <span className="text-[#00B4FF]">CAR STUDIO</span>
            </span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <button
                key={l.href}
                onClick={() => handleNav(l.href)}
                className="font-condensed text-sm font-medium tracking-widest uppercase text-[#8898B3] hover:text-[#00B4FF] transition-colors duration-300"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#agendamento')}
              className="neon-btn px-5 py-2 text-sm rounded"
            >
              Agendar
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden z-10 flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 bg-[#00B4FF] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#00B4FF] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 bg-[#00B4FF] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(5,8,16,0.98)', backdropFilter: 'blur(30px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map((l, i) => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="font-display text-4xl tracking-widest text-white hover:text-[#00B4FF] transition-colors duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#agendamento')}
            className="neon-btn px-8 py-3 text-base rounded mt-4"
          >
            Agendar Agora
          </button>
        </div>
      </div>
    </>
  )
}
