import Image from 'next/image'
import { ChevronDown, Search } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className='flex justify-between items-center px-8 py-6 bg-[#F8F7F4]'>
            <div className='flex gap-9 text-sm font-semibold'>
                <div>
                    <a href="./">Find talent</a>
                </div>
                <div>
                    <a href="./">Inspiration</a>
                </div>
                <div className='flex items-center'>
                    <a href="./">
                        Learn Design
                    </a>
                    <ChevronDown size={18}/>
                </div>
                <div>
                    <a href="./">Jobs</a>
                </div>
                <div>
                    <a href="./">Go Pro</a>
                </div>
            </div>
            <div>
                <a href="./">
                    <Image
                        src={'/dribbble.svg'}
                        alt='Dribbble Logo'
                        width={90}
                        height={90}
                    />
                </a>
            </div>
            <div className='flex gap-8 px-4 items-center text-sm font-semibold'>
                <div className='flex items-center gap-1 px-5 rounded-3xl text-sm bg-white'>
                    <Search size={17} color='grey'/>
                    <input type="text" name="search" id="search" placeholder='Search...' className='focus:outline-none py-3 px-1'/>
                </div>
                <div>
                    <button>Log in</button>
                </div>
                <div className='bg-black py-3 px-6 rounded-3xl text-white'>
                    <button>Sign up</button>
                </div>
            </div>
        </nav>
    )
}