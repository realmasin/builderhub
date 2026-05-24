"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";

export default function CollectionDetails({ params }: { params: { slug: string } }) {
  const formattedTitle = params.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <Link href="/collections" className="inline-flex items-center gap-2 text-zinc-500 hover:text-purple-400 transition-colors mb-12">
        <ArrowLeft className="w-4 h-4" /> Back to Collections
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="bg-[#0c0c0e] border border-zinc-800 p-12 rounded-3xl mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">{formattedTitle}</h1>
          <p className="text-zinc-400 text-lg">
            This collection is currently being curated by our admin team. Check back soon for the best tools in this category.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-20 border border-zinc-800/50 border-dashed rounded-3xl bg-[#0c0c0e]/50">
          <Layers className="w-16 h-16 text-zinc-800 mb-4" />
          <h3 className="text-xl font-medium text-zinc-300 mb-2">Populating Soon</h3>
          <p className="text-zinc-500">Tools assigned to this collection will appear here.</p>
        </div>
      </motion.div>
    </div>
  );
}

