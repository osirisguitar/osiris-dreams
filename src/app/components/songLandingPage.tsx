'use client'
import Image from 'next/image'
import { init, push } from '@socialgouv/matomo-next'
import { useEffect } from 'react'

export const SongLandingPage = ({
  name,
  coverImage,
  services,
}: {
  name: string
  coverImage: string
  services: Record<string, { url: string; linkText: string }>
}) => {
  useEffect(() => {
    init({ url: 'https://matomo.bornholm.se/', siteId: '2' })
  }, [])

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
          width: '500px',
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
                  push(['trackEvent', 'song', name, serviceName])
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
