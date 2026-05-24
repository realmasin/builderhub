"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "Explore", path: "/tools" },
    { name: "Favorites", path: "/favorites" },
    { name: "About Us", path: "/about" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 bg-[#09090b]/80 backdrop-blur-xl border-b border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
          Builder<span className="text-purple-500">Hub</span>
        </Link>
        
        {/* Desktop Menu - UI Premium */}
        <div className="hidden md:flex items-center bg-zinc-900/50 border border-zinc-800 rounded-full px-2 py-1.5">
          {links.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === link.path ? "bg-zinc-800 text-white" : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link href="/submit" className="bg-purple-600/10 border border-purple-500/20 hover:bg-purple-600 hover:text-white text-purple-400 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300">
            Submit Tool
          </Link>
        </div>

        {/* Mobile Toggle */}

        
        <button className="md:hidden text-zinc-300 p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion Transition */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-800 bg-[#09090b] overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              {links.map((link) => (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-zinc-300 hover:text-purple-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-zinc-800 my-2" />
              <Link 
                href="/submit" 
                onClick={() => setIsOpen(false)}
                className="bg-purple-600 text-white text-center py-3 rounded-xl font-medium"
              >
                Submit Tool
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
