import Image from 'next/image'

export default function Card() {
    return (
        <div className='rounded-lg relative w-max'>
            <Image
                src={'https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=273x340&vertical=center'}
                alt='Person Image'
                width={280}
                height={275}
                className='rounded-3xl'
            />
            <div className='absolute bottom-12 pl-4 text-white'>
                <h3 className='text-sm'>Daniele Buffa</h3>
                <p className='text-xsm'>Principal Designer</p>
            </div>
            <div className='absolute bottom-4 pl-4 text-white text-xs flex gap-4 items-center'>
                <div className='rounded-2xl border-solid border-[1px] py-1 px-3'>Animation</div>
                <div className='rounded-2xl border-solid border-[1px] py-1 px-3'>UI</div>
                <div className='rounded-2xl border-solid border-[1px] py-1 px-3'>Visual</div>
            </div>
        </div>
    )
}