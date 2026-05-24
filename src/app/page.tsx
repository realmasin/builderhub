"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { TOOLS_DATA } from "../lib/data";
import ToolCard from "../components/shared/ToolCard";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Extract unique categories dynamically from TOOLS_DATA
  const categories = ["All", ...Array.from(new Set(TOOLS_DATA.map((tool) => tool.category)))];

  // Filter tools based on both search query and selected category
  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === "All" || tool.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6"
        >
          Discover the Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r stream-text from-purple-400 to-pink-500">Developer Stack</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-zinc-400 text-lg md:text-xl"
        >
          A curated directory of next-generation tools, frameworks, and resources designed to supercharge your workflow.
        </motion.p>
      </div>

      {/* Search and Filter Section */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Active Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search tools, categories, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0c0e] border border-zinc-800 focus:border-purple-500/50 rounded-2xl pl-12 pr-4 py-4 text-white placeholder-zinc-500 outline-none transition-all shadow-inner"
            />
          </div>
          
          <button className="flex items-center justify-center gap-2 bg-[#0c0c0e] border border-zinc-800 hover:border-zinc-700 px-6 py-4 rounded-2xl text-zinc-400 hover:text-white transition-all font-medium">
            <SlidersHorizontal className="w-5 h-5" /> Filters
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl border text-sm font-medium transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-[#0c0c0e] text-zinc-400 border-zinc-800/80 hover:border-zinc-700 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tools Grid */}
      {filteredTools.length > 0 ? (
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-20 border border-zinc-800/50 border-dashed rounded-3xl bg-[#0c0c0e]/30">
          <p className="text-zinc-500 text-lg">No tools found matching "{searchQuery}"</p>
        </div>
      )}
    </div>
  );
}

