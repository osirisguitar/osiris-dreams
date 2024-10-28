import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Heading } from './components/heading'
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
          className='-z-10 saturate-50'
        >
          <source src='background2.mp4' type='video/mp4' />
        </video>
        <main className='flex min-h-screen flex-col items-center'>
          <div className='lg:pt-4 flex-row hidden md:flex'>
            <a href='/#music'>
              <Heading text='Music' style='h3' />
            </a>
            <span className='px-3'>|</span>
            <a href='/#streaming-services'>
              <Heading text='Streaming Services' style='h3' />
            </a>
            <span className='px-3'>|</span>
            <a href='/#contact'>
              <Heading text='Contact' style='h3' />
            </a>
            <span className='px-3'>|</span>
            <a href='/bio'>
              <Heading text='Bio' style='h3' />
            </a>
          </div>
          <div className='absolute top-0 right-0 flex flex-col border'>
            <div>=</div>
            <div className='z-10 flex flex-col space-y-2 xl:hidden rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'>
              <div>=</div>
              <a href='/#music'>
                <Heading text='Music' style='h3' />
              </a>
              <a href='/#streaming-services'>
                <Heading text='Streaming Services' style='h3' />
              </a>
              <a href='/#contact'>
                <Heading text='Contact' style='h3' />
              </a>
              <a href='/bio'>
                <Heading text='Bio' style='h3' />
              </a>
            </div>
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
