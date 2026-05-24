"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ToolCard from "../../components/shared/ToolCard";
import { Tool } from "../../types";
import { BookmarkX } from "lucide-react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Tool[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    
    const fetchFavorites = () => {
      const saved = JSON.parse(localStorage.getItem("builderhub_favs") || "[]");
      setFavorites(saved);
      setIsLoaded(true);
    };
    
    fetchFavorites();

    /
    window.addEventListener("favorites_updated", fetchFavorites);
    return () => window.removeEventListener("favorites_updated", fetchFavorites);
  }, []);

  if (!isLoaded) return null; 

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
      >
        <h1 className="text-4xl font-bold text-white mb-4 tracking-tighter">Your Favorites</h1>
        <p className="text-zinc-400 mb-12">Tools you've handpicked for your workflow.</p>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#0c0c0e] border border-zinc-800/50 rounded-3xl">
            <BookmarkX className="w-16 h-16 text-zinc-700 mb-4" />
            <h3 className="text-xl font-medium text-white mb-2">No favorites yet</h3>
            <p className="text-zinc-500">Start exploring and save the tools you love.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {favorites.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
