import { Search } from "lucide-react";
import ToolCard from "../components/shared/ToolCard";
import { Tool } from "../types";

const DUMMY_TOOLS: Tool[] = [
  {
    id: "1",
    name: "Cursor",
    description: "The AI-first code editor. Built to make you extraordinarily productive.",
    category: "AI Tools",
    tags: ["Editor", "AI", "Coding"],
    url: "https://cursor.com",
    logo: "C"
  },
  {
    id: "2",
    name: "Vercel",
    description: "Develop, preview, and ship Next.js applications seamlessly.",
    category: "Hosting",
    tags: ["Deployment", "Next.js"],
    url: "https://vercel.com",
    logo: "▲"
  },
  {
    id: "3",
    name: "Supabase",
    description: "The open source Firebase alternative. Start your project with a Postgres database.",
    category: "Backend",
    tags: ["Database", "Auth", "SQL"],
    url: "https://supabase.com",
    logo: "⚡"
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
      
      {/* Hero Section */}
      <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
        ✨ The ultimate directory for creators
      </span>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Discover the best tools <br className="hidden md:block"/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">builders & developers</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        BuilderHub is a curated collection of AI tools, developer platforms, and productivity resources to help you build your next big project.
      </p>

      {/* searche bar*/}
      <div className="w-full max-w-xl relative group mb-20">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder="Search for tools, categories, or tags..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all shadow-2xl"
        />
      </div>

      {/* tools grid*/}
      <div className="w-full text-left">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Trending Tools</h2>
          <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
            View all tools &rarr;
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>

    </div>
  );
}
