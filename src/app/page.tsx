import Navbar from '@/components/Navbar'
import Card from '@/components/card'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className='flex flex-col justify-center items-center gap-5 mt-20'>
        <div className='bg-[#FFCD96] py-3 px-6 rounded-3xl text-sm font-semibold'>
          <p>Over 3 million ready-to-work creatives!</p>
        </div>
        <div className='text-7xl w-1/2 text-center m-2'>
          <h1>
            Work with the world’s top creative talent.
          </h1>
        </div>
        <div className='text-xl font-medium'>
          <h3>Connect with millions of top-rated designers & agencies around the world.</h3>
        </div>
        <div className='bg-black py-4 px-5 rounded-3xl text-white mt-4 text-xsm font-medium'>
          <button>Start hiring today</button>
        </div>
      </div>
      <div className='relative overflow-hidden z-10'>
        <div className='flex gap-8 py-16 justify-center animate-marquee w-max'>
          {
            [...Array(24)].map((_, i) => (
              <Card key={i}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}
