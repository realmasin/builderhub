import { Search, SlidersHorizontal } from "lucide-react";
import ToolCard from "../../components/shared/ToolCard";
import { Tool } from "../../types";

// fake data for testing 
const DUMMY_TOOLS: Tool[] = [
  {
    id: "1", name: "Cursor", description: "The AI-first code editor.", category: "AI Tools", tags: ["Editor", "AI"], url: "https://cursor.com", logo: "C"
  },
  {
    id: "2", name: "Vercel", description: "Develop, preview, and ship Next.js applications.", category: "Hosting", tags: ["Deployment"], url: "https://vercel.com", logo: "▲"
  },
  {
    id: "3", name: "Supabase", description: "The open source Firebase alternative.", category: "Backend", tags: ["Database"], url: "https://supabase.com", logo: "⚡"
  },
  {
    id: "4", name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development.", category: "Design", tags: ["CSS", "Frontend"], url: "https://tailwindcss.com", logo: "T"
  }
];

const CATEGORIES = ["All", "AI Tools", "Developer Tools", "Productivity", "Design", "Web3", "Hosting", "Backend"];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* head page */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Tools</h1>
        <p className="text-gray-400 text-lg">Browse our curated collection of resources for builders.</p>
      </div>

      
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search tools..." 
            className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition-colors">
          <SlidersHorizontal className="h-5 w-5" /> Filters
        </button>
      </div>

      {/* categories btns */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((category) => (
          <button 
            key={category} 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${category === "All" ? "bg-purple-600 text-white" : "bg-white/5 text-gray-300 hover:bg-white/10"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* tools grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DUMMY_TOOLS.map((tool) => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>

    </div>
  );
}
