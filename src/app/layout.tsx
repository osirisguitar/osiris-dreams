import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'OSIRIS DREAMS',
  description: 'Official Artist Site',
  icons: '/osiris-dreams-logo.svg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <video
          playsInline
          autoPlay
          muted
          loop
          id='bgvid'
          className='-z-10 saturate-50'
        >
          <source src='background.mp4' type='video/mp4' />
        </video>
        {children}
      </body>
    </html>
  )
}
