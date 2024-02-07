export const Heading = ({
  text,
  style,
  id,
}: {
  text: string
  style: string
  id?: string
}) => {
  let classFront = 'font-racewayBack font-semibold text-blue-900'
  classFront += style === 'h2' ? ' px-3 text-2xl ' : ' text-xs md:text-base'
  let classBack =
    'font-racewayFront mt-0 font-semibold text-blue-400 absolute left-0 top-[-2px]'
  classBack += style === 'h2' ? ' px-3 text-2xl ' : ' text-xs md:text-base'
  const classWrapper = 'relative' + (style === 'h2' ? ' lg:mt-10 sm:mt-0' : '')

  return (
    <div id={id} className={classWrapper}>
      <h2 className={classFront}>{text}</h2>
      <h2 className={classBack}>{text}</h2>
    </div>
  )
}
