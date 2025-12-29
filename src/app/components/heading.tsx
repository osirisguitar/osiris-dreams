export const Heading = ({
  text,
  style,
  css,
  id,
}: {
  text: string
  style: string
  css?: string
  id?: string
}) => {
  let classFront = 'font-pilotCommand uppercase '
  let classBack =
    'font-racewayFront mt-0 font-semibold absolute left-0 top-[-2px]'
  let classWrapper = 'relative text-center '

  switch (style) {
    case 'h1':
      classFront += ' py-4 px-3 text-3xl md:text-5xl text-blue-300 '
      classWrapper += 'sm:mt-0'
      break
    case 'h2':
      classFront += ' px-3 text-xl md:text-2xl text-blue-300 '
      classWrapper += 'sm:mt-0'
      break
    case 'h3':
      classFront += ' text-xs md:text-base text-blue-300 '
      break
    default:
      break
  }

  return (
    <div id={id} className={classWrapper + ' ' + css}>
      <div className='flex'>
        <h2 className={classFront}>{text}</h2>
      </div>
    </div>
  )
}
