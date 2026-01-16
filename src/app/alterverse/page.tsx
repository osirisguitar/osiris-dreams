'use client'
import Image from 'next/image'
import { Heading } from '../components/heading'
import { init } from '@socialgouv/matomo-next'
import { useEffect } from 'react'
import { TextBox } from '../components/textBox'
import Link from 'next/link'

export default function Alterverse() {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  return (
    <>
      <div className='max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <Link href='/'>
          <Image
            src='/osiris-dreams-logo.svg'
            alt='OSIRIS DREAMS'
            className='drop-shadow-sm p-3 pt-[65px] md:pt-3'
            style={{ filter: 'drop-shadow(5px 5px 10px #000000)' }}
            width={500}
            height={200}
          />
        </Link>
      </div>

      <div className='max-w-5xl lg-mt[-50px]'>
        <TextBox display='block'>
          <Heading style='h1' text='Alterverse' />
          <Image
            src={'/osiris-dreams-anders-norrback-bornholm.jpg'}
            alt='{name}'
            className='float-left mr-5 mb-5'
            priority
            width={170}
            height={170}
          />
          <p>(Download links are at the bottom of this page)</p>
          <p>Hi!,</p>
          <p>
            I’m Anders, the solo artist behind <b>OSIRIS DREAMS</b> (cinematic
            synthwave made in Sweden). I’m reaching out because I have a new
            album that will be released on January 27th, I’d love to see if it
            could be a fit for a review, feature, or radio play on your
            platform.
          </p>
          <p>
            The album is called <b>Alterverse</b>: an instrumental sci-fi
            concept record where **each track corresponds to a chapter of an
            original short story**. Instead of a traditional lyrics, the
            narrative will be released as a series of lyric videos and an
            accompanying ebook that tell the story chapter by chapter. It’s
            meant to feel like a soundtrack to a film that doesn’t exist, with
            the story slowly revealing what’s really happening behind the war
            the characters think they’re fighting.
          </p>
          <p>
            Musically, it leans into atmospheric synthwave with a cinematic
            edge: emotional leads, pulsing bass ostinatos, and melodic themes
            that develop across the album.
          </p>
          <p>The first three chapters/singles are already out:</p>
          <ul>
            <li>
              <Link className='text-blue-300' href='/songs/age-of-anomalies'>
                Age of Anomalies
              </Link>
            </li>
            <li>
              <Link className='text-blue-300' href='/songs/ghost-pod'>
                Ghost Pod
              </Link>
            </li>
            <li>
              <Link className='text-blue-300' href='/songs/hyper-probe'>
                Hyper Probe
              </Link>
            </li>
          </ul>
          <p>
            The full text for the story of the album is available as a PDF:{' '}
            <Link
              className='text-blue-300'
              href='https://files.osirisdreams.com/Alterverse.pdf'
            >
              https://files.osirisdreams.com/Alterverse.pdf
            </Link>
          </p>
          <p>
            You can find everything about me, including a bio and other
            resources, right here on this site. Below are also download links
            for each of the songs, as well as links to the lyrics video for each
            song. If you prefer some kind of other packaging of the album
            tailored to your audience, I’m happy to provide that as well. Thanks
            for your time, and for supporting independent artists.
          </p>
          <p>Best, Anders / OSIRIS DREAMS</p>
          <Heading
            style='h2'
            text='Direct
          download links'
          />
          <ul>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2001%20Age%20of%20Anomalies.mp3'
              >
                01 Age of Anomalies (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2002%20Ghost%20Pod.mp3'
              >
                02 Ghost Pod (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2003%20Hyper%20Probe.mp3'
              >
                03 Hyper Probe (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2004%20Interrupt%20Sequence.mp3'
              >
                04 Interrupt Sequence (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2005%20Requiem%20pro%20Phasmata.mp3'
              >
                05 Requiem pro Phasmata (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2006%20Smokescreen.mp3'
              >
                06 Smokescreen (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2007%20Revelation%20Protocol.mp3'
              >
                07 Revelation Protocol (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2008%20Disassembly.mp3'
              >
                08 Disassembly (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2009%20Vortex%20Beach.mp3'
              >
                09 Vortex Beach (MP3 320 kbps)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://files.osirisdreams.com/OSIRIS%20DREAMS%20-%20Alterverse%20-%2010%20Ghost%20Testimony.mp3'
              >
                10 Ghost Testimony (MP3 320 kbps)
              </Link>
            </li>
          </ul>
          <Heading style='h2' text='Lyrics videos' />
          <ul>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://www.youtube.com/watch?v=lwn20SruZMs&list=PLQGymPL65leszm2uf4twfCszoQGTSC1i3&index=1'
              >
                01 Age of Anomalies (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://www.youtube.com/watch?v=GToZu8Jl8u4&list=PLQGymPL65leszm2uf4twfCszoQGTSC1i3&index=2'
              >
                02 Ghost Pod (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://www.youtube.com/watch?v=GlB3zEEPM98&list=PLQGymPL65leszm2uf4twfCszoQGTSC1i3&index=3'
              >
                03 Hyper Probe (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://youtu.be/XUDAMOQAr-A'
              >
                04 Interrupt Sequence (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://www.youtube.com/watch?v=LV596Sq2owY'
              >
                05 Requiem pro Phasmata (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://youtu.be/jIb7yCIzHvE'
              >
                06 Smokescreen (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://youtu.be/8YPOE6Sa4gs'
              >
                07 Revelation Protocol (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://youtu.be/vsKxzLwZf0w'
              >
                08 Disassembly (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://youtu.be/GDDJ13JUQL0'
              >
                09 Vortex Beach (YouTube)
              </Link>
            </li>
            <li>
              <Link
                className='text-blue-300'
                target='_blank'
                href='https://youtu.be/_07C_qHcAnA'
              >
                10 Ghost Testimony (YouTube)
              </Link>
            </li>
          </ul>
        </TextBox>
      </div>
    </>
  )
}
