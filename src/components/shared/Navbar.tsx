"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-zinc-800 p-4 backdrop-blur-md sticky top-0 z-50 bg-[#09090b]/90">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Builder<span className="text-purple-500">Hub</span>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Explore</Link>
          <Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link>
          <Link href="/favorites" className="hover:text-purple-400 transition-colors">Favorites</Link>
          <Link href="/submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-purple-500/10">
            Submit Tool
          </Link>
        </div>

        {/* Mobile Burger Button */}
        <button className="md:hidden text-zinc-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#09090b] border-b border-zinc-800 flex flex-col items-center py-6 gap-6 shadow-2xl">
          <Link href="/tools" onClick={() => setIsOpen(false)} className="text-zinc-300 font-medium">Explore Tools</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-zinc-300 font-medium">About Us</Link>
          <Link href="/favorites" onClick={() => setIsOpen(false)} className="text-zinc-300 font-medium">Favorites</Link>
          <Link href="/submit" onClick={() => setIsOpen(false)} className="bg-purple-600 text-white px-6 py-2 rounded-lg font-medium">Submit Tool</Link>
        </div>
      )}
    </nav>
  );
}
