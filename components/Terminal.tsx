
import React, { useState, useEffect, useRef } from 'react';
import { TERMINAL_COMMANDS } from '../constants';

const Terminal: React.FC = () => {
  const [history, setHistory] = useState<string[]>(['Type "help" to see available protocols.']);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history]);

  const handleCommand = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const cmd = input.toLowerCase().trim();
      const output = TERMINAL_COMMANDS[cmd as keyof typeof TERMINAL_COMMANDS] || `Error: command "${cmd}" not found.`;
      
      if (cmd === 'clear') {
        setHistory([]);
      } else {
        setHistory([...history, `> ${input}`, output]);
      }
      setInput('');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 glass rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
      <div className="bg-white/5 px-4 py-2 flex items-center gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <span className="text-[10px] font-mono text-gray-500 ml-4">nexus@dev_console:~</span>
      </div>
      <div 
        ref={scrollRef}
        className="h-48 overflow-y-auto p-4 font-mono text-xs text-gray-400 space-y-1 scrollbar-hide"
      >
        {history.map((line, i) => (
          <div key={i} className={line.startsWith('>') ? 'text-violet-400' : ''}>
            {line}
          </div>
        ))}
        <div className="flex items-center gap-2">
          <span className="text-green-500">➜</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent outline-none border-none w-full text-white"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;
