import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from './components/navigation'
import { headers } from 'next/headers'
import { Signup } from './components/signup'
import { Player } from './components/player'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OSIRIS DREAMS',
  description: 'Cinematic synthwave made in Sweden.',
  icons: '/osiris-dreams-logo.svg',
  metadataBase: new URL('https://www.osirisdreams.com'),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const path = (await headers()).get('x-current-path')

  return (
    <html lang='en'>
      <head></head>
      <body className={inter.className}>
        {!path?.startsWith('/songs') && !path?.startsWith('/campaign') && (
          <video
            playsInline
            autoPlay
            muted
            loop
            id='bgvid'
            className='-z-10 saturate-50 opacity-30'
          >
            <source src='background2.mp4' type='video/mp4' />
          </video>
        )}
        <main className='flex min-h-screen flex-col items-center'>
          {<Navigation />}
          {children}
          {!path?.startsWith('/songs') && !path?.startsWith('/campaign') && (
            <div className='mb-10'>
              <Signup />
            </div>
          )}
        </main>
      </body>
    </html>
  )
}
