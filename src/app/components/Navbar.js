import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png'; 
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-10 bg-[#E0E8F6]'>
        <div className='w-full h-[80px] shadow-md px-5'>
            <div className='flex justify-between items-center w-full h-[80px] px-4'>
                <div>
                    <Image
                    src={Logo}
                    alt='Logo'
                    width={150}
                    />
                </div>

                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8 text-[16px] text-[#050505]'>

                        <Link href="#home">
                        <li>
                            Home
                        </li>
                        </Link>
                        

                        <Link href="#about">
                        <li>
                            About
                        </li>
                        </Link>
                        
                        <li>
                            <a href="#service">Services</a>
                        </li>

                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        
                        <li>
                            <a href="https://www.dropbox.com/scl/fi/eztdjg9tla57oupzlayvg/Aneesha_Rangan_Developer.pdf?rlkey=e4dpzzuvkui3dl0yjfu0geg7c&st=nlck90w7&dl=0" target='_blank'>Resume</a>
                        </li>
                    </ul>

                </div>

                <div>
                    <button className='w-[120px] h-[40px] border rounded-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:text-white transition'>
                        <a href='#contact'  >Contact</a>
                    </button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar