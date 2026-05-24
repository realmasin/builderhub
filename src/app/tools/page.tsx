import { Search, SlidersHorizontal } from "lucide-react";
import ToolCard from "../../components/shared/ToolCard";
import { Tool } from "../../types";

// اget tools logos from google
const DUMMY_TOOLS: Tool[] = [
  {
    id: "1", name: "Cursor", description: "The AI-first code editor designed to make developers extraordinarily productive.", category: "AI Tools", tags: ["Editor", "AI"], url: "https://cursor.com", 
    logo: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128"
  },
  {
    id: "2", name: "Vercel", description: "Develop, preview, and ship Next.js applications instantly.", category: "Hosting", tags: ["Deployment", "Next.js"], url: "https://vercel.com", 
    logo: "https://www.google.com/s2/favicons?domain=vercel.com&sz=128"
  },
  {
    id: "3", name: "Supabase", description: "The open source Firebase alternative with Postgres database.", category: "Backend", tags: ["Database", "Auth"], url: "https://supabase.com", 
    logo: "https://www.google.com/s2/favicons?domain=supabase.com&sz=128"
  },
  {
    id: "4", name: "Tailwind CSS", description: "A utility-first CSS framework for rapid UI development.", category: "Design", tags: ["CSS", "Frontend"], url: "https://tailwindcss.com", 
    logo: "https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=128"
  },
  {
    id: "5", name: "Framer", description: "The best tool to build professional websites without writing code.", category: "Design", tags: ["Web Design", "No-Code"], url: "https://framer.com", 
    logo: "https://www.google.com/s2/favicons?domain=framer.com&sz=128"
  },
  {
    id: "6", name: "Zod", description: "TypeScript-first schema validation with static type inference.", category: "Developer Tools", tags: ["TypeScript", "Validation"], url: "https://zod.dev", 
    logo: "https://www.google.com/s2/favicons?domain=zod.dev&sz=128"
  }
];

const CATEGORIES = ["All", "AI Tools", "Developer Tools", "Productivity", "Design", "Web3", "Hosting", "Backend"];

export default function ToolsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      
      {/* head */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Tools</h1>
        <p className="text-zinc-400 text-lg">Browse our curated collection of resources for builders.</p>
      </div>

      {/* search */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-grow group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search tools..." 
            className="w-full bg-zinc-800/40 border border-zinc-700/50 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors shadow-lg"
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-zinc-800/50 border border-zinc-700/50 text-white px-6 py-3 rounded-xl hover:bg-zinc-700 transition-colors">
          <SlidersHorizontal className="h-5 w-5" /> Filters
        </button>
      </div>

      {/* Categories btns */}
      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((category) => (
          <button 
            key={category} 
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${category === "All" ? "bg-purple-600 text-white" : "bg-zinc-800/50 text-zinc-300 hover:bg-zinc-700 border border-zinc-700/50"}`}
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
