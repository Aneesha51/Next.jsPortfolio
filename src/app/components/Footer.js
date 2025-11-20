import React from 'react';
import {Mail, Facebook, Instagram, Twitter, Linkedin, Github} from 'lucide-react';


const Footer = () => {
  return (
    <footer >
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <div className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
            Let&apos;s
            <br />
            Work Together -
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=aneeshrangan51@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-[330px] h-[60px] border rounded-lg flex items-center justify-center gap-2 px-4"
              aria-label="Email Aneesha"
            >
              <Mail className="w-6 h-6 text-blue-500" />
              <span className="truncate">aneeshrangan51@gmail.com</span>
            </a>

           
          </div>
        </div>

        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-[#484E53] gap-4">
          <div className="text-center sm:text-left">
            <p>© 2025 Aneesha Ashwari Rangan. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/aneesha.rangan" target="_blank" rel="noopener noreferrer" aria-label="Facebook small" className="p-1 rounded-full hover:bg-gray-100">
              <Facebook className="w-4 h-4 text-[#484E53]" />
            </a>
            <a href="#" aria-label="Instagram small" className="p-1 rounded-full hover:bg-gray-100">
              <Instagram className="w-4 h-4 text-[#484E53]" />
            </a>
            <a href="https://x.com/AneeshaRangan" target="_blank" rel="noopener noreferrer" aria-label="X small" className="p-1 rounded-full hover:bg-gray-100">
              <Twitter className="w-4 h-4 text-[#484E53]" />
            </a>
            <a href="https://www.linkedin.com/in/aneesha-rangan-41b171196/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn small" className="p-1 rounded-full hover:bg-gray-100">
              <Linkedin className="w-4 h-4 text-[#484E53]" />
            </a>
            <a href="https://github.com/Aneesha51" target="_blank" rel="noopener noreferrer" aria-label="GitHub small" className="p-1 rounded-full hover:bg-gray-100">
              <Github className="w-4 h-4 text-[#484E53]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer