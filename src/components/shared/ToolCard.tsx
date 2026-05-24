"use client";
import { Heart, ArrowRight } from "lucide-react";
import { Tool } from "../../types";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ToolCard({ tool }: { tool: Tool }) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("builderhub_favs") || "[]");
    setIsFavorite(saved.some((t: Tool) => t.id === tool.id));
  }, [tool.id]);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    let saved = JSON.parse(localStorage.getItem("builderhub_favs") || "[]");
    
    if (isFavorite) {
      saved = saved.filter((t: Tool) => t.id !== tool.id);
    } else {
      saved.push(tool);
    }
    
    localStorage.setItem("builderhub_favs", JSON.stringify(saved));
    setIsFavorite(!isFavorite);
    // if open update
    window.dispatchEvent(new Event("favorites_updated"));
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col h-full bg-[#111113] border border-zinc-800/80 hover:border-purple-500/30 p-6 rounded-2xl transition-colors duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0 p-1">
          <img src={tool.logo} alt={tool.name} className="object-contain w-full h-full rounded-lg" />
        </div>
        
        <motion.button 
          whileTap={{ scale: 0.8 }}
          onClick={toggleFavorite}
          className="p-2 rounded-full hover:bg-zinc-800 transition-colors"
        >
          <Heart className={`w-5 h-5 transition-colors ${isFavorite ? "fill-purple-500 text-purple-500" : "text-zinc-500"}`} />
        </motion.button>
      </div>
      
      <h3 className="text-xl font-semibold text-zinc-100 mb-2">{tool.name}</h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">{tool.description}</p>
      
      <Link href={`/tools/${tool.id}`} className="w-full flex items-center justify-between bg-zinc-900 group-hover:bg-purple-600/10 text-zinc-300 group-hover:text-purple-400 px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-300">
        View Details <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
