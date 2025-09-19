import Image from 'next/image'
import { push } from '@socialgouv/matomo-next'
import Link from 'next/link'

export const SomePromo = ({
  logo,
  heading,
  body,
  link,
}: {
  logo: string
  heading: string
  body: string
  link: string
}) => {
  const streamingClass =
    'group rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'

  return (
    <Link
      href={link}
      className={streamingClass}
      onClick={() => {
        push(['trackEvent', 'service', heading])
      }}
      target='_blank'
      rel='noopener noreferrer'
    >
      <div className='flex items-center mb-2 h-12'>
        <Image
          src={logo}
          alt='{heading}'
          className=''
          width={50}
          height={50}
          priority
        />
        <h3 className={`px-3 text-xl font-semibold`}>{heading}</h3>
      </div>
      <div>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{body}</p>
      </div>
    </Link>
  )
}
