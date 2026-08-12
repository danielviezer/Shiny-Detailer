import Image from 'next/image'

export default function Sobre() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-[#050810] relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full opacity-5"
        style={{
          background: 'radial-gradient(circle, #00B4FF, transparent)',
          filter: 'blur(60px)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/corvette_de_costas.jpg"
                alt="Shiny Car Studio trabalho"
                fill
                className="object-cover"
              />

              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,100,180,0.2) 0%, transparent 60%)'
                }}
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-xl border border-[rgba(0,180,255,0.2)]" />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-lg border border-[rgba(0,180,255,0.15)]" />

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 left-8 glass rounded-xl px-5 py-3"
              style={{ border: '1px solid rgba(0,180,255,0.2)' }}
            >
              <div className="font-display text-3xl text-[#00B4FF]">2+</div>

              <div className="font-condensed text-xs tracking-widest uppercase text-[#8898B3]">
                Anos de experiência
              </div>
            </div>
          </div>

          {/* Text side */}
          <div>
            <div className="neon-line mb-5" />

            <h2 className="font-display text-4xl md:text-6xl text-white mb-6">
              PAIXÃO POR<br />
              <span className="text-[#00B4FF]">PERFEIÇÃO</span>
            </h2>

            <div className="space-y-4 text-[#8898B3] font-light leading-relaxed mb-8">
              <p>
                A Shiny Car Studio nasceu da obsessão por detalhes.
                Cada serviço é executado com atenção cirúrgica,
                produtos de última geração e técnicas aprendidas
                com os melhores profissionais do setor.
              </p>

              <p>
                Localizada em Itajaí, atendemos veículos de alto padrão
                com o mesmo nível de cuidado que uma concessionária premium
                — só que com resultado superior.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: '⚡',
                  t: 'Tecnologia',
                  d: 'Equipamentos e produtos de última geração'
                },
                {
                  icon: '🎯',
                  t: 'Precisão',
                  d: 'Cada detalhe executado com perfeição'
                },
                {
                  icon: '🛡️',
                  t: 'Proteção',
                  d: 'Produtos que protegem a longo prazo'
                },
                {
                  icon: '✨',
                  t: 'Resultado',
                  d: 'Acabamento que impressiona sempre'
                },
              ].map(i => (
                <div
                  key={i.t}
                  className="glass rounded-xl p-4"
                  style={{ border: '1px solid rgba(0,180,255,0.08)' }}
                >
                  <div className="text-2xl mb-2">{i.icon}</div>

                  <div className="font-condensed font-semibold text-white text-sm mb-1">
                    {i.t}
                  </div>

                  <div className="text-[#8898B3] text-xs font-light">
                    {i.d}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}