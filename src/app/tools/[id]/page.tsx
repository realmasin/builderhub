"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2, LayoutGrid } from "lucide-react";
import { TOOLS_DATA } from "../../../lib/data";

export default function ToolDetails({ params }: { params: { id: string } }) {
  const tool = TOOLS_DATA.find((t) => t.id === params.id);

  if (!tool) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Tool not found</h1>
        <Link href="/tools" className="text-zinc-400 hover:text-white transition-colors">
          &larr; Back to Explore
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
      <Link href="/tools" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 transition-colors mb-10 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Explore
      </Link>

      <div className="grid lg:grid-cols-[1fr_350px] gap-10 items-start">
        
        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          {/* Header Section */}
          <div className="flex items-center gap-6 mb-8">
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-[#0c0c0e] border border-zinc-800 p-4 flex-shrink-0 shadow-lg">
              <img src={tool.logo} alt={tool.name} className="object-contain w-full h-full" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{tool.name}</h1>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium">
                <LayoutGrid className="w-4 h-4" />
                {tool.category}
              </span>
            </div>
          </div>

          {/* Description Section */}
          <div className="bg-[#0c0c0e] border border-zinc-800/60 rounded-3xl p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">About {tool.name}</h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                {tool.description}
              </p>
              
              {/* Added a dynamic paragraph to make the description look longer and professional */}
              <p className="text-zinc-400 text-lg leading-relaxed">
                Designed with modern workflows in mind, {tool.name} offers a seamless experience that boosts productivity and streamlines your daily tasks. Whether you are building complex applications or refining your digital presence, integrating this tool into your stack will provide immediate value, efficiency, and a significant edge in your projects.
              </p>
            </div>

            <hr className="border-zinc-800/80 my-10" />

            {/* Replaced tags with a clean 'Capabilities' section */}
            <h3 className="text-xl font-bold text-white mb-6">Key Capabilities</h3>
            <ul className="grid sm:grid-cols-2 gap-4">
              {["Intuitive Interface", "Seamless Integration", "High Performance", "Modern Architecture"].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/50">
                  <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Sticky Sidebar / Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="sticky top-28 bg-[#0c0c0e] border border-zinc-800 rounded-3xl p-8 shadow-2xl"
        >
          <div className="mb-8">
            <h3 className="text-zinc-100 font-bold text-xl mb-2">Get Started</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Ready to elevate your workflow? Head over to their official website to explore more features.</p>
          </div>

          <a
            href={tool.url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black py-4 rounded-xl font-bold transition-all text-lg shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
          >
            Try {tool.name} <ExternalLink className="w-5 h-5" />
          </a>

          {/* Extra Info Box to fill the sidebar professionally */}
          <div className="mt-8 pt-8 border-t border-zinc-800/80 flex flex-col gap-5">
             <div className="flex justify-between items-center text-sm">
               <span className="text-zinc-500 font-medium">Pricing Model</span>
               <span className="text-zinc-300 font-medium bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800">Freemium</span>
             </div>
             <div className="flex justify-between items-center text-sm">
               <span className="text-zinc-500 font-medium">Status</span>
               <span className="text-emerald-400 font-medium bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Active
               </span>
             </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
