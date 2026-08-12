'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/corvette_de_frente.jpg"
          alt="Corvette Shiny Car Studio"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Layered overlays for cinematic effect */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(5,8,16,0.92) 0%, rgba(8,13,26,0.75) 50%, rgba(5,8,16,0.85) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(0,100,180,0.15) 0%, transparent 60%)'
        }} />
        {/* Scanline effect */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 4px)'
        }} />
      </div>

      {/* Neon accent line left */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{
        background: 'linear-gradient(180deg, transparent, rgba(0,180,255,0.6) 40%, rgba(0,180,255,0.6) 60%, transparent)'
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div
          className="max-w-3xl transition-all duration-1000"
          style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(30px)' }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full"
            style={{ border: '1px solid rgba(0,180,255,0.25)', background: 'rgba(0,180,255,0.06)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
            <span className="font-condensed text-xs tracking-[0.2em] uppercase text-[#00B4FF]">
              Detalhamento Premium · Itajaí
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-6xl md:text-8xl lg:text-[110px] leading-none text-white mb-4">
            ONDE O<br />
            <span style={{ color: '#00B4FF', textShadow: '0 0 40px rgba(0,180,255,0.4)' }}>
              DETALHE
            </span><br />
            DEFINE TUDO
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#8898B3] text-base md:text-lg font-light max-w-xl mb-10 leading-relaxed"
            style={{ transitionDelay: '200ms' }}
          >
            Proteção e estética de alto padrão para veículos que merecem o melhor.
            Tecnologia, precisão e paixão em cada acabamento.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('#agendamento')}
              className="neon-btn px-8 py-4 text-sm rounded"
            >
              Agendar Serviço
            </button>

            <button
              onClick={() => scrollTo('#servicos')}
              className="outline-btn px-8 py-4 text-sm rounded"
            >
              Ver Serviços
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-14">
            {[
              { n: 'Mais de 200', l: 'Carros atendidos' },
              { n: '5★', l: 'Avaliação média' },
              { n: '2+', l: 'Anos de experiência' },
            ].map(s => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl text-white">
                  {s.n}
                </div>

                <div className="font-condensed text-xs tracking-widest uppercase text-[#8898B3]">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-condensed text-[10px] tracking-[0.3em] uppercase text-[#8898B3]">
          Scroll
        </span>

        <div className="w-px h-10 bg-gradient-to-b from-[#00B4FF] to-transparent animate-pulse" />
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(transparent, #050810)'
        }}
      />
    </section>
  )
}