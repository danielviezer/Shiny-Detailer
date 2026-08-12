import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shiny Car Studio | Detalhamento Automotivo Premium',
  description: 'Detalhamento automotivo premium em Itajaí. Tratamento interno, externo, polimento e proteção para veículos de luxo.',
  keywords: 'detailing, detalhamento, polimento, ppf, ceramic, proteção, Itajaí, Santa Catarina',
  openGraph: {
    title: 'Shiny Car Studio | Detalhamento Automotivo Premium',
    description: 'Detalhamento automotivo premium em Itajaí.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/logo_shiny.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  )
}
