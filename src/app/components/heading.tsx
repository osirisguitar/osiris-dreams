export const Heading = ({
  text,
  style,
  id,
}: {
  text: string
  style: string
  id?: string
}) => {
  let classFront = 'font-racewayBack font-semibold '
  //classFront += style === 'h2' ? ' px-3 text-2xl ' : ' text-xs md:text-base'
  let classBack =
    'font-racewayFront mt-0 font-semibold absolute left-0 top-[-2px]'
  //classBack += style === 'h2' ? ' px-3 text-2xl ' : ' text-xs md:text-base'
  let classWrapper = 'relative text-center '
  //    'relative text-center ' + (style === 'h2' ?  : '')

  switch (style) {
    case 'h1':
      classFront += ' py-4 px-3 text-3xl md:text-4xl text-[#992393] '
      classBack += ' py-4 px-3 text-3xl md:text-4xl text-[#F515AC] top-[-5px]'
      classWrapper += ' lg:mt-5 sm:mt-0'
      break
    case 'h2':
      classFront += ' px-3 text-xl md:text-2xl text-blue-900 '
      classBack += ' px-3 text-xl md:text-2xl text-blue-400 '
      classWrapper += ' lg:mt-3 sm:mt-0'
      break
    case 'h3':
      classFront += ' text-xs md:text-base text-blue-900 '
      classBack += ' text-xs md:text-base text-blue-400 '
      break
    default:
      break
  }

  return (
    <div id={id} className={classWrapper}>
      <div className='flex'>
        <h2 className={classFront}>{text}</h2>
        <h2 className={classBack}>{text}</h2>
      </div>
    </div>
  )
}
