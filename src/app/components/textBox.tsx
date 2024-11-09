import { Roboto_Flex } from 'next/font/google'

export const TextBox = ({
  display,
  children,
}: {
  display?: string
  children: React.ReactNode
}) => {
  const displayCss =
    display && display == 'block' ? 'block' : 'flex flex-col items-center'

  return (
    <div className='rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'>
      <div className={displayCss + ' space-y-4'}>{children}</div>
    </div>
  )
}
