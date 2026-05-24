import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col items-center text-center">
      
      {/* Hero Section */}
      <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
        The ultimate directory for creators
      </span>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Discover the best tools <br className="hidden md:block"/> for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">builders & developers</span>
      </h1>
      
      <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10">
        BuilderHub is a curated collection of AI tools, developer platforms, and productivity resources to help you build your next big project.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-xl relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
        </div>
        <input 
          type="text" 
          placeholder="Search for tools, categories, or tags..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all shadow-2xl"
        />
      </div>

    </div>
  );
}

