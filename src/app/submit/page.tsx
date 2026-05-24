"use client";
import { useState } from "react";
import { Send, ChevronDown, CheckCircle, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["AI Tools", "Developer Tools", "Design", "Hosting", "Backend"];
const smoothEase = [0.22, 1, 0.36, 1];

export default function SubmitTool() {
  const [formData, setFormData] = useState({ name: "", url: "", description: "" });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ban allert manually 
    if (!formData.name.trim()) {
      setErrorMsg("Please enter the name of your tool.");
      return;
    }
    if (!formData.url.trim()) {
      setErrorMsg("Please provide a valid website link.");
      return;
    }
    if (!selectedCategory) {
      setErrorMsg("You must select a category for the tool.");
      return;
    }
    if (!formData.description.trim()) {
      setErrorMsg("Please write a short description for your tool.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);
    
    setTimeout(() => { 
      setIsSubmitting(false); 
      setShowSuccessModal(true); 
      setFormData({ name: "", url: "", description: "" });
      setSelectedCategory("");
    }, 1200);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-20 relative">
      
      {/*  Popup  error  */}
      <AnimatePresence>
        {errorMsg && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: smoothEase }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-[#141416] border border-red-500/20 p-5 rounded-2xl shadow-2xl flex items-start gap-4"
          >
            <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">Action Required</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{errorMsg}</p>
            </div>
            <button onClick={() => setErrorMsg("")} className="text-zinc-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/*  Popup success */}
      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: smoothEase }}
              className="bg-[#0c0c0e] border border-zinc-800/80 p-10 rounded-3xl max-w-sm w-full text-center shadow-2xl"
            >
              <CheckCircle className="w-16 h-16 text-purple-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">Submission Received!</h3>
              <p className="text-zinc-400 mb-8 text-sm leading-relaxed">Thanks for contributing! It's on our radar now.</p>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-white text-black py-3.5 rounded-xl font-bold transition-all hover:bg-zinc-200"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-3 tracking-tighter">Submit a Tool</h1>
        <p className="text-zinc-400">Suggest a new resource for our directory.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#0c0c0e] border border-zinc-800/60 p-8 rounded-3xl space-y-6">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Tool Name</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="e.g. Cursor" 
            className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3.5 px-4 text-white outline-none focus:border-purple-500/50 transition-all" 
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">Website URL</label>
          <input 
            type="text" 
            value={formData.url}
            onChange={(e) => setFormData({...formData, url: e.target.value})}
            placeholder="https://cursor.com" 
            className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3.5 px-4 text-white outline-none focus:border-purple-500/50 transition-all" 
          />
        </div>

        <div className="relative">
          <label className="block text-sm font-medium text-zinc-400 mb-2">Category</label>
          <div 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3.5 px-4 text-white cursor-pointer flex justify-between items-center"
          >
            <span className={selectedCategory ? "text-white" : "text-zinc-500"}>
              {selectedCategory || "Choose a category..."}
            </span>
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          </div>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.ul 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute z-10 mt-2 w-full bg-[#141416] border border-zinc-800 rounded-xl overflow-hidden shadow-xl"
              >
                {CATEGORIES.map(cat => (
                  <li 
                    key={cat}
                    onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); }}
                    className="px-4 py-3 text-zinc-300 hover:bg-zinc-800 cursor-pointer transition-colors"
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
          <textarea 
            rows={4} 
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            placeholder="Tell us what this tool does..." 
            className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-3.5 px-4 text-white outline-none focus:border-purple-500/50 transition-all resize-none"
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-xl font-bold transition-all">
          {isSubmitting ? "Submitting..." : "Submit Tool"} <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
