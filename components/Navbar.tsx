
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="glass px-8 py-4 rounded-2xl flex justify-between items-center neon-shadow">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <span className="font-bold text-white">AV</span>
          </div>
          <span className="font-heading font-bold text-xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Adrian<span className="text-violet-500">Villegas</span>
          </span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#hero" className="hover:text-violet-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-violet-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
        </div>

        <button className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-violet-900/20">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
