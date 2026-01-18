
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden">
      <div className="z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-5 py-1.5 border border-violet-500/20 rounded-full bg-violet-500/5 text-violet-500 text-[10px] font-bold tracking-[0.4em] mb-12 uppercase"
        >
          Full Stack Developer
        </motion.div>
        
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sync text-6xl md:text-[140px] font-black leading-none tracking-tighter mb-10"
        >
          <span className="block text-zinc-800 outline-text">Hello, I am</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-600">
            Adrian Villegas
          </span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="max-w-xl mx-auto space-y-10"
        >
          <p className="text-zinc-500 text-sm md:text-base font-mono leading-relaxed uppercase tracking-widest">
            Full-stack developer passionate about creating <span className="text-white">innovative digital solutions</span>.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-violet-600 text-white font-bold rounded-full text-xs tracking-widest hover:bg-violet-500 transition-colors shadow-lg shadow-violet-900/20"
            >
              View Projects
            </motion.button>
            <motion.button 
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              className="px-10 py-4 glass border border-white/5 text-white font-bold rounded-full text-xs tracking-widest"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-10 right-10"
      >
        <img src="/img/photo.jpg" alt="Adrian Villegas" className="w-32 h-32 rounded-full border-2 border-violet-500/20" />
      </motion.div>

      <motion.div 
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-10 left-10 flex items-center gap-4 text-[9px] font-mono text-zinc-700 uppercase tracking-widest"
      >
        <span>STATUS: READY</span>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
