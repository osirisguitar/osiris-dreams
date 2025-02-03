import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from './components/navigation'
import { Suspense } from 'react'
import { FacebookPixelEvents } from './components/facebookPixelEvents'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OSIRIS DREAMS',
  description: 'Enter the Ethereal Synthwave Dreamscape',
  icons: '/osiris-dreams-logo.svg',
  metadataBase: new URL('https://www.osirisdreams.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head></head>
      <body className={inter.className}>
        <video
          playsInline
          autoPlay
          muted
          loop
          id='bgvid'
          className='-z-10 saturate-50 opacity-50'
        >
          <source src='background2.mp4' type='video/mp4' />
        </video>
        <main className='flex min-h-screen flex-col items-center'>
          <Navigation />
          {children}
        </main>
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  )
}
