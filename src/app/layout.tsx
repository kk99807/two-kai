import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Two Kai - The Beauty of Revelation',
  description: 'Exploring the 2-Kai patterns in the Book of Revelation, honoring Pastor Edward A. Robson\'s 90th birthday and research legacy.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="twokai">
      <body className={`${inter.variable} ${merriweather.variable} font-sans bg-parchment min-h-screen flex flex-col`}>
        <Header />
        <main className="container mx-auto px-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 