'use client'
import { useState } from 'react'

const categories = [
  { id: 'interno', label: 'Tratamento Interno' },
  { id: 'externo', label: 'Tratamento Externo' },
  { id: 'motos', label: 'Motos' },
  { id: 'inferior', label: 'Inferior & Motor' },
  { id: 'acabamentos', label: 'Acabamentos e Detalhes' },
  { id: 'pacotes', label: 'Pacotes' },
]

interface Servico {
  nome: string
  desc: string
  preco: string
  badge?: string
  precos?: { label: string; valor: string }[]
  indicado?: string[]
}

const services: Record<string, Servico[]> = {
  interno: [
    {
      nome: 'Higienização Completa',
      desc: 'Limpeza profunda de todo o interior do veículo, removendo sujeiras, manchas, odores e microrganismos, deixando o ambiente mais limpo, saudável e agradável.',
      preco: 'A partir de R$550',
    },
    {
      nome: 'Higienização de Bancos de Tecido',
      desc: 'Remove manchas, ácaros, odores e sujeiras impregnadas, renovando o aspecto e a higiene dos estofados.',
      preco: 'A partir de R$400',
    },
    {
      nome: 'Higienização e Hidratação de Bancos de Couro',
      desc: 'Cuidado que limpa profundamente, remove sujeiras e repõe a maciez do couro, prevenindo ressecamento, rachaduras e desgaste precoce.',
      preco: 'A partir de R$300',
    },
    {
      nome: 'Vitrificação de Bancos de Couro',
      desc: 'Aplicação de um protetor resistente que cria uma barreira contra sujeira e desgaste, preservando a aparência e a durabilidade do couro por mais tempo.',
      preco: 'A partir de R$280',
    },
    {
      nome: 'Higienização do Teto',
      desc: 'Limpeza cuidadosa do forro interno para remover manchas, poeira e odores, preservando o material e melhorando o aspecto do interior do veículo.',
      preco: 'A partir de R$100',
    },
    {
      nome: 'Oxi-Sanitização',
      desc: 'Utilizamos um gerador de ozônio para eliminar bactérias, fungos, vírus e odores do interior do veículo, deixando o ambiente mais puro e saudável.',
      preco: 'A partir de R$150',
    },
  ],
  externo: [
    {
      nome: 'Lavagem Técnica',
      desc: 'Lavagem interna e externa, aplicação de proteção externa.',
      preco: 'A partir de R$120',
    },
    {
      nome: 'Lavagem Detalhada',
      desc: 'Lavagem interna e externa, com máxima atenção a todos os detalhes do veículo. Aplicação de proteção externa.',
      preco: '',
      precos: [
        { label: 'Hatch', valor: 'R$160' },
        { label: 'Sedan', valor: 'R$180' },
        { label: 'SUV', valor: 'R$210' },
      ],
    },
  ],
  motos: [
    {
      nome: 'Lavagem Técnica',
      desc: 'Limpeza das partes externas da moto, removendo sujeira e resíduos sem danificar componentes sensíveis.',
      preco: 'A partir de R$70',
    },
    {
      nome: 'Lavagem Detalhada',
      desc: 'Limpeza minuciosa que alcança áreas difíceis, removendo sujeiras acumuladas e realçando o acabamento da moto.',
      preco: 'A partir de R$130',
    },
  ],
  inferior: [
    {
      nome: 'Lavagem Técnica de Motor',
      desc: 'Limpeza cuidadosa do cofre do motor, removendo óleo, poeira e resíduos sem danificar componentes elétricos, melhorando o aspecto e a conservação.',
      preco: 'A partir de R$200',
    },
    {
      nome: 'Limpeza Técnica de Chassi',
      desc: 'Remoção de barro, graxa e sujeiras acumuladas na parte inferior do veículo, ajudando na conservação das peças e na prevenção de corrosão.',
      preco: 'A partir de R$250',
    },
  ],
  acabamentos: [
    {
      nome: 'Revitalização de Plásticos',
      desc: 'Tratamento para restaurar a cor, o aspecto original e a proteção de plásticos internos e externos, devolvendo aparência de novo e protegendo contra ressecamento.',
      preco: 'A partir de R$55',
    },
    {
      nome: 'Vitrificação de Plásticos',
      desc: 'Aplicação de um protetor de alta durabilidade que cria uma camada resistente contra sol, sujeira e desbotamento, mantendo o acabamento por muito mais tempo.',
      preco: 'A partir de R$300',
    },
    {
      nome: 'Pintura de Rodas',
      desc: 'Renova a cor e o acabamento, corrigindo desgastes, riscos e imperfeições para deixar as rodas com aparência de novas.',
      preco: 'A partir de R$300',
    },
  ],
  pacotes: [
    {
      nome: 'Higienização',
      desc: 'O pacote Higienização é focado no cuidado completo do interior do veículo, unindo higienização interna e limpeza detalhada. Ele remove sujeiras profundas, odores e resíduos acumulados, devolvendo sensação de carro novo, mais conforto e um ambiente interno realmente limpo e saudável.',
      preco: 'A partir de R$650',
      indicado: [
        'Para quem usa o carro diariamente e sente que o interior já está com aspecto de uso, poeira e manchas.',
        'Para veículos que transportam crianças, pets ou passam muito tempo fechados, acumulando odores e sujeiras invisíveis.',
        'Para quem quer recuperar a sensação de limpeza profunda e bem-estar ao entrar no carro.',
      ],
    },
    {
      nome: 'Puro-Sangue',
      desc: 'O pacote inicial da Shiny Car Studio reúne os cuidados essenciais para elevar o padrão do seu veículo: lavagem detalhada, Coating de 12 meses e cristalização do para-brisa. Um conjunto de serviços pensado para limpar profundamente, proteger a pintura e melhorar a visibilidade, entregando mais estética, proteção e segurança no dia a dia.',
      preco: 'A partir de R$450',
      indicado: [
        'Quem quer manter o carro sempre limpo, protegido e com aparência de bem cuidado no dia a dia.',
        'Veículos que ficam muito tempo expostos ao sol, chuva e sujeira, precisando de proteção extra na pintura.',
        'Quem deseja dar um up no visual do carro sem partir para serviços mais complexos.',
      ],
    },
    {
      nome: 'Mustang',
      desc: 'O pacote Mustang entrega um cuidado completo, unindo lavagem detalhada, polimento comercial, higienização interna e cristalização do para-brisa. É um serviço que renova o visual, recupera o brilho da pintura, limpa profundamente o interior e ainda garante proteção e visibilidade, elevando o padrão estético e de conservação do veículo.',
      preco: 'A partir de R$1.250',
      indicado: [
        'Quem quer renovar o carro como um todo, melhorando aparência externa e conforto interno de uma só vez.',
        'Veículos com pintura opaca, micro riscos e interior precisando de limpeza profunda.',
        'Quem busca um resultado visivelmente mais sofisticado, valorizando o veículo.',
      ],
    },
    {
      nome: 'Pacote Mensal de Lavagem Técnica',
      desc: '3 lavagens técnicas mensais com valor sob avaliação, onde será analisado o perfil do cliente e definido o plano ideal. Ideal para manter o veículo sempre impecável com a regularidade de uma assinatura.',
      preco: 'Sob avaliação',
      badge: 'Plano Mensal',
      indicado: [
        'Para quem quer manter o carro sempre limpo e bem cuidado todo mês.',
        'Motoristas que valorizam praticidade e atendimento recorrente.',
        'Plano personalizado conforme o perfil e necessidade do cliente.',
      ],
    },
  ],
}

export default function Servicos({ onAgendar }: { onAgendar: (s: string) => void }) {
  const [cat, setCat] = useState('interno')
  const isPacotes = cat === 'pacotes'

  return (
    <section id="servicos" className="py-20 md:py-32 bg-[#050810]">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="neon-line mb-4" />
          <h2 className="font-display text-4xl md:text-6xl text-white mb-3">NOSSOS SERVIÇOS</h2>
          <p className="text-[#8898B3] font-light max-w-lg">
            Selecione a categoria e descubra o que podemos fazer pelo seu veículo.
          </p>
        </div>

        {/* Tabs — vertical no mobile, horizontal no desktop */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-1">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`px-4 py-2.5 rounded font-condensed text-sm tracking-widest uppercase transition-all duration-300 text-left md:whitespace-nowrap ${
                  cat === c.id
                    ? 'bg-[#00B4FF] text-white font-semibold'
                    : 'text-[#8898B3] hover:text-white border border-[rgba(0,180,255,0.15)] hover:border-[rgba(0,180,255,0.4)]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cards — Pacotes layout */}
        {isPacotes ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services['pacotes'].map((s, i) => {
              const isMensal = !!s.badge
              const isDestaque = i === 2 && !isMensal
              return (
                <div
                  key={s.nome}
                  className={`glass rounded-2xl p-7 card-hover flex flex-col relative overflow-hidden ${isMensal ? 'md:col-span-3' : ''}`}
                  style={{
                    border: isMensal
                      ? '1px solid rgba(0,180,255,0.45)'
                      : isDestaque
                      ? '1px solid rgba(0,180,255,0.3)'
                      : '1px solid rgba(0,180,255,0.1)',
                    background: isMensal
                      ? 'linear-gradient(135deg, rgba(0,70,150,0.2), rgba(0,180,255,0.06))'
                      : undefined,
                  }}
                >
                  {/* Top accent line for mensal */}
                  {isMensal && (
                    <div className="absolute top-0 left-0 right-0 h-0.5"
                      style={{ background: 'linear-gradient(90deg, transparent, #00B4FF, transparent)' }}
                    />
                  )}

                  {/* Badge */}
                  {(isMensal || isDestaque) && (
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full self-start"
                      style={{
                        background: isMensal ? 'rgba(0,180,255,0.15)' : 'rgba(0,180,255,0.12)',
                        border: isMensal ? '1px solid rgba(0,180,255,0.45)' : '1px solid rgba(0,180,255,0.3)',
                      }}
                    >
                      <span className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#00B4FF]">
                        {isMensal ? '📋 Plano Mensal' : 'Mais Completo'}
                      </span>
                    </div>
                  )}

                  <div className="w-8 h-px bg-[#00B4FF] mb-4 opacity-60" />
                  <h3 className="font-display text-3xl text-white mb-1 tracking-wide">{s.nome.toUpperCase()}</h3>
                  <div className="font-condensed text-[#00B4FF] font-semibold text-xl mb-4">{s.preco}</div>
                  <p className="text-[#8898B3] text-sm font-light leading-relaxed mb-5">{s.desc}</p>

                  {/* Feature bullets for mensal */}
                  {isMensal && (
                    <div className="flex flex-wrap gap-4 mb-5">
                      {['3 lavagens por mês', 'Plano personalizado', 'Assinatura recorrente', 'Atendimento prioritário'].map(f => (
                        <span key={f} className="flex items-center gap-2 text-[#8898B3] text-xs">
                          <svg width="14" height="14" viewBox="0 0 14 14">
                            <circle cx="7" cy="7" r="7" fill="rgba(0,180,255,0.15)" />
                            <path d="M4 7l2 2 4-4" stroke="#00B4FF" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                          </svg>
                          {f}
                        </span>
                      ))}
                    </div>
                  )}

                  {s.indicado && (
                    <div className="mb-6">
                      <div className="font-condensed text-xs tracking-widest uppercase text-[#8898B3] mb-3">Indicado para</div>
                      <ul className="space-y-2">
                        {s.indicado.map((item, j) => (
                          <li key={j} className="flex gap-2 text-[#8898B3] text-xs font-light leading-relaxed">
                            <span className="text-[#00B4FF] mt-0.5 shrink-0">→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto">
                    <button onClick={() => onAgendar(s.nome)} className="neon-btn w-full py-3 text-xs rounded-lg">
                      {isMensal ? 'Agendar Avaliação' : 'Agendar este pacote'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          /* Cards — Serviços normais */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services[cat].map((s, i) => (
              <div
                key={s.nome + i}
                className="glass rounded-xl p-6 card-hover flex flex-col justify-between"
                style={{ border: '1px solid rgba(0,180,255,0.08)' }}
              >
                <div>
                  <div className="w-8 h-px bg-[#00B4FF] mb-4 opacity-60" />
                  <h3 className="font-condensed font-semibold text-lg text-white mb-2 tracking-wide">{s.nome}</h3>
                  <p className="text-[#8898B3] text-sm font-light leading-relaxed mb-4">{s.desc}</p>
                </div>
                <div>
                  {/* Preços múltiplos (Lavagem Detalhada externa) */}
                  {s.precos ? (
                    <div className="flex gap-3 mb-4 flex-wrap">
                      {s.precos.map(p => (
                        <div key={p.label} className="text-center glass rounded-lg px-3 py-2"
                          style={{ border: '1px solid rgba(0,180,255,0.15)' }}
                        >
                          <div className="font-condensed text-[10px] tracking-widest uppercase text-[#8898B3]">{p.label}</div>
                          <div className="font-condensed font-semibold text-[#00B4FF] text-sm">{p.valor}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="font-condensed text-[#00B4FF] font-semibold text-base mb-4">{s.preco}</div>
                  )}
                  <button onClick={() => onAgendar(s.nome)} className="neon-btn w-full py-2.5 text-xs rounded">
                    Agendar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  )
}
