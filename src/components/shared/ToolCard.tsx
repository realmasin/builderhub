"use client";
import { ArrowRight } from "lucide-react";
import { Tool } from "../../types";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col h-full bg-[#0c0c0e] border border-zinc-800 hover:border-purple-500/20 p-6 rounded-2xl transition-all duration-500"
    >
      <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 p-2 mb-6">
        <img src={tool.logo} alt={tool.name} className="object-contain w-full h-full rounded-lg" />
      </div>
      
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">{tool.name}</h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">{tool.description}</p>
      
      <Link href={`/tools/${tool.id}`} className="w-full flex items-center justify-between bg-zinc-900 border border-zinc-800/60 group-hover:bg-purple-600/10 group-hover:border-purple-500/20 text-zinc-300 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300">
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
