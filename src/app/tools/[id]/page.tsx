import { TOOLS_DATA } from "../../../lib/data";
import { ExternalLink, ArrowLeft, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ToolDetails({ params }: { params: { id: string } }) {
  const tool = TOOLS_DATA.find((t) => t.id === params.id);
  if (!tool) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      {/* path trns */}
      <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-10">
        <Link href="/tools" className="hover:text-zinc-300 transition-colors">Tools</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-zinc-300">{tool.category}</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-white font-medium">{tool.name}</span>
      </nav>

      {/* header */}
      <div className="flex flex-col md:flex-row gap-8 items-start mb-16 border-b border-zinc-800 pb-12">
        <div className="w-24 h-24 rounded-2xl border border-zinc-700 bg-white/5 flex-shrink-0 p-2 shadow-2xl">
          <img src={tool.logo} alt={tool.name} className="w-full h-full object-cover rounded-xl" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{tool.name}</h1>
            <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-xs font-semibold border border-emerald-500/20 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Verified
            </span>
          </div>
          
          <p className="text-xl text-zinc-400 leading-relaxed mb-8 max-w-2xl">
            {tool.description}
          </p>

          <a href={tool.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-xl font-bold transition-all active:scale-95 shadow-lg">
            Visit Official Website <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* descr */}
      <div className="space-y-12 text-zinc-300 leading-relaxed text-lg">
        <section>
          <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-zinc-500" /> What is {tool.name}?
          </h2>
          <p className="mb-4">
            {tool.name} is a powerful solution designed specifically for the <strong>{tool.category.toLowerCase()}</strong> ecosystem. It streamlines the workflow for developers and creators by offering a robust set of features that eliminate traditional bottlenecks.
          </p>
          <p>
            Whether you are building a small side project or a massive enterprise application, this tool provides the scalability and performance required to succeed in today's fast-paced digital environment.
          </p>
        </section>

        <section className="bg-[#121214] border border-zinc-800 p-8 rounded-2xl">
          <h3 className="text-xl font-semibold text-white mb-6">Why we recommend it</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-zinc-400" /></div>
              <p><strong>Industry Standard:</strong> Widely adopted by top tech companies and independent builders alike.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-zinc-400" /></div>
              <p><strong>Excellent Developer Experience:</strong> Clean documentation and a highly intuitive interface.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4 text-zinc-400" /></div>
              <p><strong>Active Community:</strong> Strong support network and regular updates to the core platform.</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
