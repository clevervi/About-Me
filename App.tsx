
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import BentoGrid from './components/BentoGrid';
import Contact from './components/Contact';
import Terminal from './components/Terminal';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      {/* Dynamic Background Grid - Low CPU cost */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,17,17,1)_0%,rgba(0,0,0,1)_100%)]"></div>
      
      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Hero />
        
        <div className="py-24 max-w-7xl mx-auto px-6">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <Terminal />
           </motion.div>
        </div>

        <BentoGrid />
        
        <ProjectGallery />
        
        <Contact />
      </motion.main>

      <footer className="py-32 px-6 border-t border-white/5 bg-black relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
          <motion.h2 
            whileInView={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="font-sync text-4xl md:text-7xl font-black text-center text-zinc-900"
          >
            ADRIAN VILLEGAS
          </motion.h2>
          
          <div className="flex gap-12 font-mono text-[10px] uppercase tracking-[0.4em] text-zinc-600">
             <a href="#hero" className="hover:text-violet-400 transition-colors">About</a>
             <a href="#skills" className="hover:text-violet-400 transition-colors">Skills</a>
             <a href="#projects" className="hover:text-violet-400 transition-colors">Projects</a>
             <a href="#contact" className="hover:text-violet-400 transition-colors">Contact</a>
          </div>

          <div className="text-[9px] font-mono text-zinc-800 mt-12 tracking-widest">
            © 2025 Adrian Villegas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
