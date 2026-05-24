"use client";
import { TOOLS_DATA } from "../../../lib/data";
import { ExternalLink, ArrowLeft, Layers, Zap } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function ToolDetails({ params }: { params: { id: string } }) {
  const tool = TOOLS_DATA.find((t) => t.id === params.id);
  if (!tool) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/tools" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Tools
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* right row */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#111113] border border-zinc-800 p-8 rounded-3xl flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-2xl bg-zinc-900 border border-zinc-800 p-2 mb-6">
              <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain rounded-xl" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">{tool.name}</h1>
            <span className="text-purple-400 bg-purple-500/10 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              {tool.category}
            </span>
            <a href={tool.url} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 bg-zinc-200 hover:bg-white text-zinc-900 py-3.5 rounded-xl font-bold transition-all">
              Visit Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* main description */}
        <div className="lg:col-span-2 space-y-10">
          <section className="bg-[#111113] border border-zinc-800 p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-purple-500" /> Overview
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              {tool.description}
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed">
              This platform empowers modern creators by providing robust features that are essential for building high-quality projects. Its integration capabilities and user-friendly interface make it a top choice in the {tool.category.toLowerCase()} space.
            </p>
          </section>

          <section className="bg-gradient-to-br from-purple-900/20 to-[#111113] border border-zinc-800 p-8 md:p-10 rounded-3xl">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-500" /> Key Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              {tool.tags.map((tag) => (
                <span key={tag} className="bg-zinc-900 border border-zinc-700 text-zinc-300 px-5 py-2 rounded-lg font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
}
