import React from 'react';
import {Mail, Facebook, Instagram, Twitter, Linkedin, Github} from 'lucide-react';


const Footer = () => {
  return (
    <footer>
        <div>
            <div className=''>
               <div className='flex justify-between items-center px-18 py-10'>
                    <div className='text-5xl font-semibold  bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text '>
                        Let's 
                        <br />
                        Work Together -
                    </div>

                    <div>
                        <button className='w-[330px] h-[60px] border rounded-lg flex items-center justify-center gap-2 px-4'>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aneeshrangan51@gmail.com" rel="noopener noreferrer" target='_blank' className='flex items-center gap-2'><span ><Mail className='w-6 h-6 text-blue-500 '/></span>aneeshrangan51@gmail.com</a>
                        </button>
                    </div>
               </div>
            </div>

            <div className='w-full h-[100px] border-t flex items-center justify-between px-20 text-[#484E53]'>
                <div>
                    <p>
                        © 2023 Aneesha Ashwari Rangan. All rights reserved.
                    </p>
                </div>

                <div className='flex items-center gap-3'>
                    <div>
                        <a href="https://www.facebook.com/aneesha.rangan" target='_blank' rel="noopener noreferrer"><Facebook className='hover:text-blue-500'/></a>
                    </div>

                    <div>
                        <a href="#"><Instagram className='hover:text-blue-500' /></a>
                    </div>

                     <div>
                        <a href="https://x.com/AneeshaRangan" target='_blank' rel="noopener noreferrer"><Twitter className='hover:text-blue-500' /></a>
                    </div>

                     <div>
                        <a href="https://www.linkedin.com/in/aneesha-rangan-41b171196/" target='_blank' rel="noopener noreferrer"><Linkedin className='hover:text-blue-500'/></a>
                    </div>

                    <div>
                        <a href="https://github.com/Aneesha51" target='_blank' rel="noopener noreferrer"><Github className='hover:text-blue-500' /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer