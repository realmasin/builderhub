import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 bg-[#0c0c0e] py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Description */}
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold text-white tracking-tight">
            Builder<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Hub</span>
          </Link>
          <p className="text-zinc-500 text-sm mt-2 max-w-xs">
            A premium, curated directory of top-tier tools designed to supercharge your workflow.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="flex gap-8 text-sm font-medium text-zinc-400">
          <Link href="/tools" className="hover:text-purple-400 transition-colors">Tools</Link>
          <Link href="/collections" className="hover:text-purple-400 transition-colors">Collections</Link>
          <a href="https://github.com/realmasin" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">GitHub</a>
        </div>

        {/* Copyright */}
        <div className="text-zinc-600 text-xs font-medium">
          &copy; {new Date().getFullYear()} BuilderHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
