'use client'
import Image from 'next/image'
import { init, push } from '@socialgouv/matomo-next'
import { useEffect, useState } from 'react'
import ReactPixel from 'react-facebook-pixel'

export const SongLandingPage = ({
  name,
  coverImage,
  services,
}: {
  name: string
  coverImage: string
  services: Record<string, { url: string; linkText: string }>
}) => {
  const [clickedService, setClickedService] = useState<string | null>(null)

  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

  useEffect(() => {
    if (clickedService) {
      push(['trackEvent', 'song', name, clickedService])
      import('react-facebook-pixel')
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init('1618294722414496')
          console.log('fbq', name, clickedService)
          ReactPixel.trackCustom('ViewContent', {
            content_name: name,
            content_category: clickedService,
          })
        })

      // Load the Pixel script only if it's not already loaded
      const anyWindow = window as any
      if (!anyWindow.fbq) {
        ;(function (f, b, e, v, n, t, s) {
          const fAny = f as any
          let nAny = n as any
          if (fAny.fbq) return
          nAny = fAny.fbq = function () {
            nAny.callMethod
              ? nAny.callMethod.apply(nAny, arguments)
              : nAny.queue.push(arguments)
          }
          if (!fAny._fbq) fAny._fbq = nAny
          nAny.push = nAny
          nAny.loaded = !0
          nAny.version = '2.0'
          nAny.queue = []
          let tAny = t as any
          tAny = b.createElement(e)
          tAny.async = !0
          tAny.src = v
          let sAny = s as any
          sAny = b.getElementsByTagName(e)[0]
          sAny.parentNode.insertBefore(tAny, sAny)
        })(
          window,
          document,
          'script',
          'https://connect.facebook.net/en_US/fbevents.js'
        )

        // Initialize Facebook Pixel
        anyWindow.fbq('init', '1618294722414496')
      }
      anyWindow.fbq('track', 'StreamSong', {
        content_name: name,
        content_category: clickedService,
      })
    }
  }, [name, clickedService])

  const trackStreaming = (serviceName: string) => {
    setClickedService(serviceName)
  }

  const streamingClass =
    'group rounded-lg m-auto mb-4 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div
        style={{
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: 'absolute',
          backgroundImage: `url(${coverImage})`,
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
          filter: 'blur(20px)',
          zIndex: -1,
        }}
      ></div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '10%',
          maxWidth: '500px',
          padding: 0,
        }}
      >
        <Image
          src={coverImage}
          width='500'
          height='500'
          alt='Album cover'
          className={streamingClass}
          style={{ maxWidth: '90vw' }}
        ></Image>
        {Object.keys(services).map((serviceName) => {
          return (
            <div
              key={serviceName}
              className='p-1'
              style={{
                width: '500px',
                margin: 'auto',
                maxWidth: '90vw',
              }}
            >
              <a
                href={services[serviceName].url}
                target='_blank'
                onClick={() => {
                  trackStreaming(serviceName)
                }}
              >
                <div
                  className='flex items-center p-2'
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    maxWidth: '90vw',
                  }}
                >
                  <Image
                    src={'/' + serviceName.toLowerCase() + '-icon.svg'}
                    alt='{heading}'
                    className=''
                    width={50}
                    height={50}
                    priority
                  />
                  <h3 className={`px-3 text-xl font-semibold`}>
                    {services[serviceName].linkText}
                  </h3>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
