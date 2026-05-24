"use client";
import { ExternalLink, Heart, ArrowRight } from "lucide-react";
import { Tool } from "../../types";
import Link from "next/link";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="glass-card p-6 flex flex-col h-full group hover:bg-zinc-800/50 hover:-translate-y-1 transition-all duration-300 w-full">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
          <img src={tool.logo} alt={tool.name} className="object-cover w-full h-full" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/18181b/ffffff?text=Icon'; }} />
        </div>
        <button className="text-zinc-500 hover:text-purple-500 transition-colors bg-zinc-900/50 p-2 rounded-full">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      <h3 className="text-xl font-semibold text-zinc-100 mb-3 group-hover:text-purple-400 transition-colors">{tool.name}</h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow">{tool.description}</p>
      <div className="flex flex-wrap gap-2 mb-6 w-full">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full bg-zinc-800/80 text-zinc-300 border border-zinc-700/50">{tag}</span>
        ))}
      </div>
      <Link href={`/tools/${tool.id}`} className="w-full flex items-center justify-center gap-2 bg-purple-600/10 hover:bg-purple-600 text-purple-400 hover:text-white py-3 rounded-lg text-sm font-medium transition-all duration-300 mt-auto border border-purple-500/20">
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
