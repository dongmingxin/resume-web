import Image from 'next/image'

type Props = {
    icon: any,
    title: string,
    content: string
}

const Card = ({
    icon,
    title,
    content
}:Props) => {
  return (
    <div className='rounded-lg border border-slate-200/10 bg-gradient-to-br from-slate-200/10 to-black px-8 py-8'>
        <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-2 items-center'>
                <Image 
                    alt="key skills Icon"
                    className="inline-block h-8 w-8 text-slate-200"
                    height={196}
                    src={icon}
                    width={192}
                />
                <h3 className='font-serif text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl'>
                    {title}
                </h3>
            </div>
            <span className='font-normal text-base text-slate-300 tracking-normal'>
                {content}
            </span>
        </div>
    </div>
  )
}

export default Card