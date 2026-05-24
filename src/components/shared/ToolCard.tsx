import { ExternalLink, Heart } from "lucide-react";
import { Tool } from "../../types";

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="glass-card p-6 flex flex-col h-full group hover:border-purple-500/50 transition-colors duration-300">
      
      {/* caard heading*/}
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl font-bold text-white">
          {tool.logo}
        </div>
        <button className="text-gray-400 hover:text-red-400 transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      {/* tool name */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {tool.name}
      </h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">
        {tool.description}
      </p>
      
      {/* tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tool.tags.map((tag) => (
          <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 text-gray-300">
            {tag}
          </span>
        ))}
      </div>
      
      {/* vst button */}
      <a 
        href={tool.url} 
        target="_blank" 
        rel="noreferrer"
        className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-lg text-sm font-medium transition-colors mt-auto"
      >
        Visit Site <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
}

