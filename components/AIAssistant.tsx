
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { askGemini } from '../services/gemini';
import { Message } from '../types';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Connection_Stable. Nexus_AI online. How can I facilitate your query?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);
    const response = await askGemini(userMsg, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai" className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <div className="relative">
              {/* Ultra-simple CSS animation for performance */}
              <div className={`w-40 h-40 rounded-full border border-violet-500/20 flex items-center justify-center bg-zinc-900/10 relative overflow-hidden transition-all duration-1000 ${isLoading ? 'scale-110 border-violet-500' : ''}`}>
                 <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute inset-0 bg-violet-500 rounded-full"
                 />
                 <div className="w-16 h-1 bg-violet-500 rounded-full blur-sm animate-pulse"></div>
              </div>
            </div>
            <div className="mt-8 text-center space-y-1">
              <h4 className="font-sync text-sm font-bold tracking-widest uppercase">Nexus_AI_Core</h4>
              <p className="text-[9px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Processing_Uplink: Active</p>
            </div>
          </div>

          <div className="flex-1 w-full glass rounded-[2.5rem] flex flex-col h-[550px] overflow-hidden border-white/5 shadow-2xl">
            <div className="bg-white/5 px-6 py-4 flex justify-between items-center border-b border-white/5">
               <span className="text-[9px] font-mono text-zinc-500 tracking-widest uppercase">Secure_Terminal_v4</span>
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                 <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
               </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 font-mono text-xs">
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: m.role === 'user' ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                    m.role === 'user' 
                      ? 'bg-violet-600 text-white' 
                      : 'bg-white/5 text-zinc-400 border border-white/5'
                  }`}>
                    {m.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && <div className="text-violet-500 animate-pulse text-[10px] tracking-[0.2em]">CALCULATING_RESPONSE...</div>}
            </div>

            <div className="p-6 bg-black/40 border-t border-white/5">
              <div className="relative group">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="INPUT_QUERY..."
                  className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-xs font-mono focus:border-violet-600 focus:bg-zinc-900 transition-all outline-none"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors p-2"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
