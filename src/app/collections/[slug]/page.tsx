"use client";
import { motion } from "framer-motion";
import { Sparkles, Terminal, Palette, Shield } from "lucide-react";
import Link from "next/link";
import { TOOLS_DATA } from "../../../lib/data";


const COLLECTIONS = [
  { 
    slug: "ai-power-stack",
    title: "AI Power Stack", 
    desc: "Powerful AI tools to accelerate code writing and idea generation.", 
    categories: ["AI Tools"],
    icon: Sparkles, 
    color: "text-purple-400 bg-purple-500/10" 
  },
  { 
    slug: "developer-essentials",
    title: "Developer Essentials", 
    desc: "Essential tools for the daily workflow of every professional developer.", 
    categories: ["Developer Tools"],
    icon: Terminal, 
    color: "text-blue-400 bg-blue-500/10" 
  },
  { 
    slug: "design-ui-gems",
    title: "Design & UI Gems", 
    desc: "Resources and tools to help you build stunning user interfaces with minimal effort.", 
    categories: ["Design"],
    icon: Palette, 
    color: "text-pink-400 bg-pink-500/10" 
  },
  { 
    slug: "devops-hosting",
    title: "DevOps & Hosting", 
    desc: "Platforms and solutions to deploy and manage your projects quickly and seamlessly.", 
    categories: ["Hosting", "Backend"],
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
            
            const toolCount = TOOLS_DATA.filter(tool => 
              col.categories.includes(tool.category)
            ).length;

            return (
              <motion.div 
                key={col.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="group h-full"
              >
                <Link 
                  href={`/collections/${col.slug}`}
                  className="block h-full p-8 bg-[#0c0c0e] border border-zinc-800 hover:border-zinc-700/80 rounded-3xl cursor-pointer transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl ${col.color} flex items-center justify-center mb-6`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">{col.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">{col.desc}</p>
                  </div>
                  <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mt-6">
                    {toolCount} {toolCount === 1 ? "Tool" : "Tools"}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
