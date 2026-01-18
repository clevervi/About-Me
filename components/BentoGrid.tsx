
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ICONS, ABOUT } from '../constants';

const BentoGrid: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]"
      >
        {/* Main Tech Stack */}
        <motion.div variants={item} className="md:col-span-2 md:row-span-2 bento-card p-10 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-16">
              <h3 className="font-sync text-3xl font-bold leading-tight">TECH<br/>MATRIX</h3>
              <div className="text-violet-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
            </div>
            <div className="space-y-8">
              {SKILLS.map(s => (
                <div key={s.name} className="group">
                  <div className="flex justify-between text-[10px] font-mono uppercase mb-2 tracking-widest">
                    <span className="text-zinc-400 group-hover:text-white transition-colors">{s.name}</span>
                    <span className="text-violet-500">{s.level}%</span>
                  </div>
                  <div className="h-[1px] bg-zinc-900 w-full overflow-hidden">
                    <motion.div 
                      initial={{ x: "-100%" }}
                      whileInView={{ x: 0 }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-violet-600" 
                      style={{ width: `${s.level}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Dynamic Card 01 */}
        <motion.div variants={item} className="bento-card p-8 flex flex-col justify-center items-center text-center bg-zinc-900/20">
          <ICONS.Pulse />
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 mt-6">Active_Process</span>
          <div className="text-sm font-bold mt-2 uppercase tracking-tighter">AI_LLM_Architecture</div>
        </motion.div>

        {/* Dynamic Card 02 */}
        <motion.div variants={item} className="bento-card p-8 bg-zinc-900 flex flex-col justify-center items-center text-center">
          <div className="text-5xl font-sync font-black text-white">05+</div>
          <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-600 mt-2">Cycle_Years</span>
        </motion.div>

        {/* Wide Info Card - About */}
        <motion.div variants={item} className="md:col-span-2 bento-card p-10 flex flex-col justify-between">
          <div>
            <h4 className="font-sync text-sm font-bold text-zinc-600 uppercase tracking-widest mb-4">About Me</h4>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">{ABOUT.description}</p>
            <div className="grid grid-cols-3 gap-4">
              {ABOUT.stats.map(stat => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BentoGrid;
