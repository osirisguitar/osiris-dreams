import Image from 'next/image'

export const StreamingIcon = ({
  icon,
  name,
}: {
  icon: string
  name: string
}) => {
  return (
    <p className={`m-0 max-w-[30ch] text-sm opacity-60`}>
      <Image src={icon} alt={name} width={30} height={30} />
    </p>
  )
}
