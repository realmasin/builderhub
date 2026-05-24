"use client";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Palette, Shield } from "lucide-react";

const COLLECTIONS = [
  { 
    title: "AI Power Stack", 
    desc: "Powerful AI tools to accelerate code writing and idea generation.", 
    count: "5 Tools", 
    icon: Sparkles, 
    color: "text-purple-400 bg-purple-500/10" 
  },
  { 
    title: "Developer Essentials", 
    desc: "Essential tools for the daily workflow of every professional developer.", 
    count: "8 Tools", 
    icon: Terminal, 
    color: "text-blue-400 bg-blue-500/10" 
  },
  { 
    title: "Design & UI Gems", 
    desc: "Resources and tools to help you build stunning user interfaces with minimal effort.", 
    count: "4 Tools", 
    icon: Palette, 
    color: "text-pink-400 bg-pink-500/10" 
  },
  { 
    title: "DevOps & Hosting", 
    desc: "Platforms and solutions to deploy and manage your projects quickly and seamlessly.", 
    count: "6 Tools", 
    icon: Shield, 
    color: "text-emerald-400 bg-emerald-500/10" 
  },
];


export default function CollectionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className="text-4xl font-bold text-white mb-3 tracking-tighter">Curated Collections</h1>
        <p className="text-zinc-400 mb-12">Handpicked stacks compiled by experts for specific workflows.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {COLLECTIONS.map((col, index) => {
            const Icon = col.icon;
            return (
              <motion.div 
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="group p-8 bg-[#0c0c0e] border border-zinc-800 hover:border-zinc-700/80 rounded-3xl cursor-pointer transition-all flex flex-col justify-between h-64"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${col.color} flex items-center justify-center mb-6`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{col.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{col.desc}</p>
                </div>
                <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mt-4">
                  {col.count}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
