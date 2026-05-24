"use client";
import { useState } from "react";
import { Send, ChevronDown } from "lucide-react";

export default function SubmitTool() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // simulation of sending data
    setTimeout(() => { setIsSubmitting(false); alert("Tool submitted successfully!"); }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Submit a Tool</h1>
        <p className="text-zinc-400 text-lg">Found something awesome? Share it with the community.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0c0c0e] border border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-2xl">
        <div className="space-y-6">
          
          {/* tool.name */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Tool Name</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Supabase" 
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300"
            />
          </div>

          {/* link */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Website URL</label>
            <input 
              type="url" 
              required
              placeholder="https://..." 
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300"
            />
          </div>

          {/* classifying */}
          <div className="relative">
            <label className="block text-sm font-medium text-zinc-300 mb-2">Category</label>
            <div className="relative">
              <select 
                required
                className="w-full appearance-none bg-[#121214] border border-zinc-800 rounded-xl py-3 pl-4 pr-10 text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300 cursor-pointer"
              >
                <option value="" disabled selected>Select a category...</option>
                <option value="AI Tools">AI Tools</option>
                <option value="Developer Tools">Developer Tools</option>
                <option value="Design">Design</option>
                <option value="Hosting">Hosting</option>
                <option value="Backend">Backend</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <ChevronDown className="w-4 h-4 text-zinc-500" />
              </div>
            </div>
          </div>

          {/* description */}
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Short Description</label>
            <textarea 
              required
              rows={4}
              placeholder="What makes this tool special?" 
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300 resize-none"
            ></textarea>
          </div>

        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full mt-8 flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black py-4 rounded-xl font-bold transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:active:scale-100"
        >
          {isSubmitting ? "Submitting..." : "Submit for Review"} <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
