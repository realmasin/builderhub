"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SubmitPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const newTool = {
      name: formData.get("name"),
      url: formData.get("url"),
      description: formData.get("description"),
      category: formData.get("category"),
    };

    const { error } = await supabase.from("submitted_tools").insert([newTool]);

    if (error) {
      console.error("Error submitting tool:", error);
      alert("error happened !");
    } else {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
    
    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-zinc-100">Submit a Tool</h1>
        <p className="text-zinc-400">
          Know a great developer tool? Submit it below. <br />
          <span className="text-purple-400 font-medium">All submissions are reviewed by the admin.</span>
        </p>
      </div>

      <div className="glass-card p-8">
        {success ? (
          <div className="text-center py-10">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Thank you!</h3>
            <p className="text-zinc-400">Your tool has been submitted and is waiting for review.</p>
            <button onClick={() => setSuccess(false)} className="mt-6 text-purple-400 hover:text-purple-300">
              Submit another tool &rarr;
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Tool Name *</label>
              <input name="name" type="text" placeholder="e.g., Vercel" className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Website URL *</label>
              <input name="url" type="url" placeholder="https://..." className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Short Description *</label>
              <textarea name="description" rows={3} placeholder="What does this tool do?" className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none" required></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">Category *</label>
              <select name="category" className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-zinc-900" required>
                <option value="">Select a category</option>
                <option value="AI Tools">AI Tools</option>
                <option value="Developer Tools">Developer Tools</option>
                <option value="Productivity">Productivity</option>
                <option value="Design">Design</option>
              </select>
            </div>
            <button type="submit" disabled={loading} className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white font-medium py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-purple-500/20">
              {loading ? "Submitting..." : "Submit for Review"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
