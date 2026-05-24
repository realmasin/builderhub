import Link from "next/link";
import { Search } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 p-4 backdrop-blur-md sticky top-0 z-50 bg-[#09090b]/90">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Builder<span className="text-purple-500">Hub</span>
        </Link>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Explore Tools</Link>
          <Link href="/about" className="hover:text-purple-400 transition-colors">About Us</Link>
          <Link href="/favorites" className="hover:text-purple-400 transition-colors">Favorites</Link>
        </div>

        {/* Submit Button */}
        <Link 
          href="/submit" 
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-purple-500/10"
        >
          Submit Tool
        </Link>
      </div>
    </nav>
  );
}
