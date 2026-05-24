"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TOOLS_DATA } from "../../../lib/data";
import ToolCard from "../../../components/shared/ToolCard";

// Mapping each slug to its details and the categories it should include
const COLLECTION_INFO = {
  "ai-power-stack": {
    title: "AI Power Stack",
    desc: "Powerful AI tools to accelerate code writing and idea generation.",
    categories: ["AI Tools"]
  },
  "developer-essentials": {
    title: "Developer Essentials",
    desc: "Essential tools for the daily workflow of every professional developer.",
    categories: ["Developer Tools"]
  },
  "design-ui-gems": {
    title: "Design & UI Gems",
    desc: "Resources and tools to help you build stunning user interfaces with minimal effort.",
    categories: ["Design"]
  },
  "devops-hosting": {
    title: "DevOps & Hosting",
    desc: "Platforms and solutions to deploy and manage your projects quickly and seamlessly.",
    categories: ["Hosting", "Backend"]
  }
};

export default function CollectionDetails({ params }: { params: { slug: string } }) {
  // Get collection info based on the URL slug
  const collection = COLLECTION_INFO[params.slug as keyof typeof COLLECTION_INFO];
  
  // If slug is invalid, show a clean fallback
  if (!collection) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Collection not found</h1>
        <Link href="/collections" className="text-zinc-400 hover:text-white transition-colors">
          &larr; Go back to collections
        </Link>
      </div>
    );
  }

  // Filter tools from our database that match this collection's categories
  const collectionTools = TOOLS_DATA.filter(tool => 
    collection.categories.includes(tool.category)
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Link href="/collections" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 transition-colors mb-12 font-medium">
        <ArrowLeft className="w-4 h-4" /> Back to Collections
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mb-12 border-b border-zinc-800/50 pb-10">
          <h1 className="text-4xl font-bold text-white mb-4 tracking-tight">{collection.title}</h1>
          <p className="text-zinc-400 text-lg max-w-2xl">
            {collection.desc}
          </p>
        </div>

        {/* Tools Grid */}
        {collectionTools.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {collectionTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 border border-zinc-800/50 border-dashed rounded-3xl bg-[#0c0c0e]/50 text-center">
            <h3 className="text-xl font-medium text-zinc-300 mb-2">No tools yet</h3>
            <p className="text-zinc-500">We are currently handpicking the best tools for this stack.</p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
