import Image from 'next/image'

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
    <a
      href={link}
      className={streamingClass}
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
        <h2 className={`px-3 text-2xl font-semibold`}>
          {heading}{' '}
          <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
            &gt;
          </span>
        </h2>
      </div>
      <div>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>{body}</p>
      </div>
    </a>
  )
}
