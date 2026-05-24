import { Github, Twitter, MessageSquare, Code2, Globe, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto py-20 px-4">
      {/* Header Section */}
      <div className="text-center mb-20">
        <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 inline-block border border-purple-500/20">
          Our Mission
        </span>
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-white tracking-tight">
          Empowering Builders <br/> <span className="text-zinc-500">Worldwide</span>
        </h1>
        <p className="text-zinc-400 leading-relaxed text-xl max-w-3xl mx-auto">
          BuilderHub is the premium directory for modern creators. We carefully handpick the best AI resources, development platforms, and UI tools so you can focus on what matters most: building amazing products.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        <div className="glass-card p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
          <Code2 className="w-10 h-10 text-purple-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Curated Tools</h3>
          <p className="text-zinc-400">Every tool is tested and verified before making it to our directory.</p>
        </div>
        <div className="glass-card p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
          <Globe className="w-10 h-10 text-blue-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Global Community</h3>
          <p className="text-zinc-400">Connect with thousands of like-minded developers and designers.</p>
        </div>
        <div className="glass-card p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800">
          <ShieldCheck className="w-10 h-10 text-green-400 mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Quality First</h3>
          <p className="text-zinc-400">No clutter. Only top-tier resources that actually improve workflow.</p>
        </div>
      </div>
      
      {/* Connect Section */}
      <div className="border border-zinc-800 bg-zinc-900/50 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-3xl -z-10"></div>
        <h2 className="text-3xl font-bold text-white mb-4">Meet the Creator</h2>
        <p className="text-zinc-400 mb-10 max-w-2xl mx-auto text-lg">
          BuilderHub is actively maintained. Have a suggestion, feedback, or just want to connect? Reach out on any of these platforms:
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a href="https://twitter.com/NotRealMasin" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-zinc-800 hover:bg-[#1DA1F2] hover:text-white text-zinc-300 px-6 py-4 rounded-xl transition-all font-medium w-full sm:w-auto">
            <Twitter className="w-5 h-5" /> @NotRealMasin
          </a>
          <a href="https://github.com/realmasin" target="_blank" rel="noreferrer" className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 text-zinc-300 px-6 py-4 rounded-xl transition-all font-medium w-full sm:w-auto">
            <Github className="w-5 h-5" /> realmasin
          </a>
          <div className="flex items-center gap-3 bg-zinc-800 text-zinc-300 px-6 py-4 rounded-xl font-medium w-full sm:w-auto border border-indigo-500/20">
            <MessageSquare className="w-5 h-5 text-indigo-400" /> Discord: <span className="text-white">masinonline</span>
          </div>
        </div>
      </div>
    </div>
  );
}
