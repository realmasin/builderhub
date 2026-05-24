import { Search } from "lucide-react";
import ToolCard from "../components/shared/ToolCard";
import { Tool } from "../types";

// tool with its description 
const DUMMY_TOOLS: Tool[] = [
  {
    id: "1",
    name: "Cursor",
    description: "The AI-first code editor designed to make developers extraordinarily productive. It intelligently integrates AI to write, debug, and understand your code, offering a seamless and futuristic coding environment directly in your editor.",
    category: "AI Tools",
    tags: ["Editor", "AI", "Coding"],
    url: "https://cursor.com",
    logo: "https://www.google.com/s2/favicons?domain=cursor.com&sz=128"
  },
  {
    id: "2",
    name: "Vercel",
    description: "Vercel is the native platform for Next.js, providing the ultimate environment for developers to develop, preview, and deploy web applications instantly. It offers incredible speed, seamless integration, and zero-configuration setups.",
    category: "Hosting",
    tags: ["Deployment", "Next.js", "Cloud"],
    url: "https://vercel.com",
    logo: "https://www.google.com/s2/favicons?domain=vercel.com&sz=128"
  },
  {
    id: "3",
    name: "Supabase",
    description: "Supabase is an open source Firebase alternative. It provides every backend feature you need to build a product including a Postgres database, authentication, instant APIs, real-time subscriptions, and storage, all without a single line of backend code.",
    category: "Backend",
    tags: ["Database", "Auth", "SQL"],
    url: "https://supabase.com",
    logo: "https://www.google.com/s2/favicons?domain=supabase.com&sz=128"
  },
  {
    id: "4",
    name: "Tailwind CSS",
    description: "A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup. It focuses on rapid UI development with highly customizable styling.",
    category: "Design",
    tags: ["CSS", "Frontend", "Styling"],
    url: "https://tailwindcss.com",
    logo: "https://www.google.com/s2/favicons?domain=tailwindcss.com&sz=128"
  },
  {
    id: "5",
    name: "Framer",
    description: "Framer is the best tool to build professional websites without writing code. It offers a powerful canvas-based interface, advanced animations, CMS, and deployment to high-performance servers, blending design and production seamlessly.",
    category: "Design",
    tags: ["Web Design", "No-Code", "CMS"],
    url: "https://framer.com",
    logo: "https://www.google.com/s2/favicons?domain=framer.com&sz=128"
  },
  {
    id: "6",
    name: "Zod",
    description: "A TypeScript-first schema validation with static type inference. Zod aims to be the developer-friendly way to validate data, making it easy to create robust, type-safe, and self-documenting applications without verbose code.",
    category: "Developer Tools",
    tags: ["TypeScript", "Validation", "DevOps"],
    url: "https://zod.dev",
    logo: "https://www.google.com/s2/favicons?domain=zod.dev&sz=128"
  }
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
      
      {/* Hero Section */}
      <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
        ✨ The ultimate directory for creators
      </span>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight text-white">
        Discover the best tools <br className="hidden md:block"/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">builders & developers</span>
      </h1>
      
      <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
        BuilderHub is a curated collection of AI tools, developer platforms, and productivity resources to help you build your next big project.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-xl relative group mb-20">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-zinc-500 group-focus-within:text-purple-400 transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder="Search for tools, categories, or tags..." 
          className="w-full bg-zinc-800/40 border border-zinc-700/50 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-purple-500 transition-all shadow-xl"
        />
      </div>

      {/* Tools Grid */}
      <div className="w-full text-left">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Trending Tools</h2>
          <a href="/tools" className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
            View all tools &rarr;
          </a>
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
