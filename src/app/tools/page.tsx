"use client";
import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import ToolCard from "../../components/shared/ToolCard";
import { TOOLS_DATA, CATEGORIES } from "../../lib/data";

export default function ToolsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // dynamic filtering 
  const filteredTools = TOOLS_DATA.filter((tool) => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                          tool.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Tools</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search tools by name or tag..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-zinc-800/40 border border-zinc-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((category) => (
          <button 
            key={category} 
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeCategory === category ? "bg-purple-600 text-white" : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 border border-zinc-700/50"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredTools.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => <ToolCard key={tool.id} tool={tool} />)}
        </div>
      ) : (
        <div className="text-center py-20 text-zinc-500">No tools found matching your criteria.</div>
      )}
    </div>
  );
}
