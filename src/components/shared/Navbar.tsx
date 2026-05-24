import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-white/10 p-4 backdrop-blur-md sticky top-0 z-50 bg-[#0f172a]/80">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* logo*/}
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          Builder<span className="text-purple-500">Hub</span>
        </Link>
        
        {/* navigational bars*/}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Explore Tools</Link>
          <Link href="/favorites" className="hover:text-purple-400 transition-colors">Favorites</Link>
        </div>

        {/* sbmt btns*/}
        <Link 
          href="/submit" 
          className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Submit Tool
        </Link>
      </div>
    </nav>
  );
}
