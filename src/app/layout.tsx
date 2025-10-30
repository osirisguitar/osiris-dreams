import './globals.css'
import type { Metadata } from 'next'
import { MainLayout } from './components/mainLayout'

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
  return (
    <html lang='en'>
      <head></head>
      <MainLayout>{children}</MainLayout>
    </html>
  )
}
