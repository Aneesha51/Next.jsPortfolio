"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png'; 
import Link from 'next/link';
const Navbar = () => {

    const [open, setOpen] = useState(false);
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

                <div className='hidden md:flex items-center gap-8'>
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

                <div className='hidden md:block'>
                    <button className='w-[120px] h-[40px] border rounded-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:text-white transition'>
                        <a href='#contact'  >Contact</a>
                    </button>
                </div>

                <div className='md:hidden'>
                    <button
                    onClick={() => setOpen(!open)}
                    aria-label='Toogle menu'
                    className='p-2 rounded-md focus:outline-none'
                    >
                         {!open ? (
                // Hamburger icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                // Close icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}

                    </button>
                </div>
            </div>
        </div>

        {/* Mobile menu (slides down) */}
      {open && (
        <div className="md:hidden bg-[#E0E8F6] border-t shadow-md">
          <div className="px-5 py-4 space-y-3">
            <Link href="#home">
              <li onClick={() => setOpen(false)} className="block text-base font-medium">
                Home
              </li>
            </Link>

            <Link href="#about">
              <li onClick={() => setOpen(false)} className="block text-base font-medium">
                About
              </li>
            </Link>

            <li href="#service" onClick={() => setOpen(false)} className="block text-base font-medium">
              Services
            </li>

            <li href="#projects" onClick={() => setOpen(false)} className="block text-base font-medium">
              Projects
            </li>

            <li
              href="https://www.dropbox.com/scl/fi/eztdjg9tla57oupzlayvg/Aneesha_Rangan_Developer.pdf?rlkey=e4dpzzuvkui3dl0yjfu0geg7c&st=nlck90w7&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-base font-medium"
            >
              Resume
            </li>

            <div className="pt-2">
              <li
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block w-full text-center border rounded-lg px-4 py-2 font-medium text-gray-700 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-cyan-400 hover:text-white transition"
              >
                Contact
              </li>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar