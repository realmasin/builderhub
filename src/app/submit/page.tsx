"use client";
import { useState } from "react";
import { Send, ChevronDown, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["AI Tools", "Developer Tools", "Design", "Hosting", "Backend"];

export default function SubmitTool() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Custom Select State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(!selectedCategory) {
      alert("Please select a category");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => { 
      setIsSubmitting(false); 
      setShowModal(true); 
      setSelectedCategory(""); 
    }, 1500);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 relative">
      
      {/* Modal Popup */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <div className="bg-[#111113] border border-zinc-800 p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Submitted!</h3>
              <p className="text-zinc-400 mb-6">Your tool has been sent to the admin for review.</p>
              <button 
                onClick={() => setShowModal(false)}
                className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Submit a Tool</h1>
        <p className="text-zinc-400 text-lg">Suggest a resource for the directory.</p>
      </div>

      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit} 
        className="bg-[#111113] border border-zinc-800 p-8 rounded-3xl"
      >
        <div className="space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Tool Name</label>
            <input type="text" required placeholder="e.g. Supabase" className="w-full bg-[#09090b] border border-zinc-800 rounded-xl py-3.5 px-4 text-white placeholder-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Website URL</label>
            <input type="url" required placeholder="https://..." className="w-full bg-[#09090b] border border-zinc-800 rounded-xl py-3.5 px-4 text-white placeholder-zinc-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all" />
          </div>

          {/* Custom Select Dropdown  */}
          <div className="relative">
            <label className="block text-sm font-medium text-zinc-400 mb-2">Category</label>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#09090b] border border-zinc-800 rounded-xl py-3.5 px-4 text-white cursor-pointer flex justify-between items-center hover:border-zinc-700 transition-colors"
            >
              <span className={selectedCategory ? "text-white" : "text-zinc-600"}>
                {selectedCategory || "Select a category..."}
              </span>
              <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
            </div>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute z-10 mt-2 w-full bg-[#111113] border border-zinc-800 rounded-xl shadow-xl overflow-hidden"
                >
                  {CATEGORIES.map(cat => (
                    <li 
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); }}
                      className="px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors"
                    >
                      {cat}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Description</label>
            <textarea required rows={4} placeholder="Why should we add this?" className="w-full bg-[#09090b] border border-zinc-800 rounded-xl py-3.5 px-4 text-white placeholder-zinc-600 focus:border-purple-500 outline-none transition-all resize-none"></textarea>
          </div>

        </div>

        <button type="submit" disabled={isSubmitting} className="w-full mt-8 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-medium transition-all active:scale-[0.98]">
          {isSubmitting ? "Sending..." : "Submit Tool"} <Send className="w-4 h-4" />
        </button>
      </motion.form>
    </div>
  );
}
