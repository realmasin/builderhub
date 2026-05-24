import ToolCard from "../../components/shared/ToolCard";
import { Tool } from "../../types";

const FAVORITE_TOOLS: Tool[] = [
  {
    id: "1", name: "Cursor", description: "The AI-first code editor.", category: "AI Tools", tags: ["Editor", "AI"], url: "https://cursor.com", logo: "C"
  }
];

export default function FavoritesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 min-h-[60vh]">
      
      <div className="mb-10 border-b border-white/10 pb-6">
        <h1 className="text-3xl font-bold text-white mb-2">Your Favorites</h1>
        <p className="text-gray-400">Tools you have saved for quick access. Saved locally in your browser.</p>
      </div>

      {FAVORITE_TOOLS.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FAVORITE_TOOLS.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-4">You haven't saved any tools yet.</p>
          <a href="/tools" className="text-purple-400 hover:text-purple-300 transition-colors">
            Browse tools and add some &rarr;
          </a>
        </div>
      )}

    </div>
  );
}

