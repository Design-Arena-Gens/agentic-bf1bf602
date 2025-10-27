import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Studio di Registrazione | Recording Studio',
  description: 'Studio di registrazione professionale per la tua musica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
