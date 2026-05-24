"use client";
import { ExternalLink, Heart, ArrowRight } from "lucide-react";
import { Tool } from "../../types";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ToolCard({ tool }: { tool: Tool }) {
  const [isFavorite, setIsFavorite] = useState(false);

  // is tool in favorites 
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("builderhub_favs") || "[]");
    setIsFavorite(savedFavs.some((t: Tool) => t.id === tool.id));
  }, [tool.id]);

  // heart job
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault(); 
    const savedFavs = JSON.parse(localStorage.getItem("builderhub_favs") || "[]");
    
    if (isFavorite) {
      const newFavs = savedFavs.filter((t: Tool) => t.id !== tool.id);
      localStorage.setItem("builderhub_favs", JSON.stringify(newFavs));
      setIsFavorite(false);
    } else {
      savedFavs.push(tool);
      localStorage.setItem("builderhub_favs", JSON.stringify(savedFavs));
      setIsFavorite(true);
    }
  };

  return (
    <div className="group relative flex flex-col h-full bg-[#0c0c0e] hover:bg-[#121214] border border-zinc-800/80 hover:border-zinc-700 p-6 rounded-2xl transition-all duration-500 ease-out">
      <div className="flex justify-between items-start mb-6">
        <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-white/5 border border-zinc-800 flex-shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:shadow-lg">
          <img src={tool.logo} alt={tool.name} className="object-cover w-full h-full p-1" onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/100x100/18181b/ffffff?text=Icon'; }} />
        </div>
        
        {/* heart effects */}
        <button 
          onClick={toggleFavorite}
          className="text-zinc-500 hover:text-red-500 transition-all duration-300 p-2 rounded-full hover:bg-red-500/10 active:scale-75"
        >
          <Heart className={`w-5 h-5 transition-all duration-300 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>
      
      <h3 className="text-xl font-medium text-zinc-100 mb-2 transition-colors duration-300 group-hover:text-white">{tool.name}</h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow opacity-80 group-hover:opacity-100 transition-opacity duration-300">{tool.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6 w-full">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 uppercase tracking-wider">{tag}</span>
        ))}
      </div>
      
      <Link href={`/tools/${tool.id}`} className="w-full flex items-center justify-center gap-2 bg-zinc-100 text-zinc-900 hover:bg-white py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 mt-auto active:scale-[0.98]">
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
