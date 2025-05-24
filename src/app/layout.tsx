import type { Metadata } from 'next'
import { Inter, Merriweather, Noto_Serif } from 'next/font/google'
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

const notoSerif = Noto_Serif({
  weight: ['400', '700'],
  subsets: ['latin', 'greek'],
  variable: '--font-noto-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Two Kai - The Beauty of Revelation',
  description: 'Exploring the 2-Kai patterns in the Book of Revelation, honoring Pastor Edward A. Robson\'s 90th birthday and research legacy.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#ffffff',
    'theme-color': '#ffffff',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="twokai">
      <body className={`${inter.variable} ${merriweather.variable} ${notoSerif.variable} font-sans bg-parchment min-h-screen flex flex-col`}>
        <Header />
        <main className="container mx-auto px-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 