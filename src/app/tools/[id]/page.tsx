import { TOOLS_DATA } from "../../../lib/data";
import { ExternalLink, ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ToolDetails({ params }: { params: { id: string } }) {
  const tool = TOOLS_DATA.find((t) => t.id === params.id);

  if (!tool) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/tools" className="inline-flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Explore
      </Link>

      <div className="glass-card p-8 md:p-12 border border-zinc-800 bg-zinc-900/40 rounded-3xl relative overflow-hidden">
        {/* bg for decorating*/}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>

        <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
          <img src={tool.logo} alt={tool.name} className="w-24 h-24 rounded-2xl border border-zinc-700 shadow-xl bg-zinc-800" />
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl md:text-5xl font-bold text-white">{tool.name}</h1>
              <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-medium border border-green-500/20 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified
              </span>
            </div>
            
            <p className="text-purple-400 font-medium mb-6">{tool.category}</p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-8">{tool.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {tool.tags.map((tag) => (
                <span key={tag} className="text-sm px-4 py-2 rounded-xl bg-zinc-800 text-zinc-300 border border-zinc-700">{tag}</span>
              ))}
            </div>

            <a href={tool.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-purple-600/20 w-full md:w-auto">
              Visit Official Website <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

