import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Praful Jadhav | AI/ML Solution Architect',
  description: 'Portfolio of Praful Jadhav - AI/ML Solution Architect specializing in scalable AI systems, R&D, and cutting-edge technology solutions.',
  keywords: ['AI', 'Machine Learning', 'Solution Architect', 'R&D', 'Full Stack Development', 'Deep Learning'],
  authors: [{ name: 'Praful Jadhav' }],
  openGraph: {
    title: 'Praful Jadhav | AI/ML Solution Architect',
    description: 'Portfolio showcasing cutting-edge AI/ML solutions and R&D projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  )
}