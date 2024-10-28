import Image from 'next/image'
import { push } from '@socialgouv/matomo-next'

export const TextBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='rounded-lg px-5 py-4 m-3 border-4 border-[#F515AC] outline outline-4 outline-[#5EC4FF] bg-black bg-opacity-60 font-mono'>
      <div className='flex flex-col items-center space-y-4'>{children}</div>
    </div>
  )
}
