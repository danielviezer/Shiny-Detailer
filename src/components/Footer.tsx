import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#050810] border-t border-[rgba(0,180,255,0.08)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden ring-1 ring-[#00B4FF]/30">
                <Image src="/images/logo_shiny.jpg" alt="Shiny Car Studio" fill className="object-cover" />
              </div>
              <span className="font-display text-xl tracking-widest text-white">
                SHINY <span className="text-[#00B4FF]">CAR STUDIO</span>
              </span>
            </div>
            <p className="text-[#8898B3] text-sm font-light leading-relaxed max-w-xs">
              Detalhamento automotivo premium em Itajaí, Santa Catarina. Onde o detalhe define tudo.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] uppercase text-[#00B4FF] mb-5">Navegação</h4>
            <ul className="space-y-3">
              {['Serviços', 'Galeria', 'Sobre Nós', 'Agendamento'].map(l => (
                <li key={l}>
                  <span className="text-[#8898B3] text-sm font-light hover:text-white transition-colors cursor-pointer">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-condensed text-xs tracking-[0.2em] uppercase text-[#00B4FF] mb-5">Contato</h4>
            <ul className="space-y-3 text-[#8898B3] text-sm font-light">
              <li>📍 Itajaí, Santa Catarina</li>
              <li>📱 (47) 9 9747-8717</li>
              <li>
                <a
                  href="https://wa.me/5547997478717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#00B4FF] hover:underline mt-2"
                >
                  WhatsApp Direto →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(0,180,255,0.06)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#8898B3] text-xs font-light">
            © 2024 Shiny Car Studio. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
            <span className="font-condensed text-xs tracking-widest uppercase text-[#8898B3]">Itajaí · SC</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
