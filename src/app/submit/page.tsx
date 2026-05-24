"use client";
import { useState } from "react";
import { Send, ChevronDown, CheckCircle, AlertCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CATEGORIES = ["AI Tools", "Developer Tools", "Design", "Hosting", "Backend"];

// smoth transition 
const smoothEase = [0.22, 1, 0.36, 1];

export default function SubmitTool() {
  const [formData, setFormData] = useState({ name: "", url: "", description: "" });
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // حالات الـ Popups
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); // what error

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 

    // Validation 
    if (!formData.name.trim() || !formData.url.trim() || !formData.description.trim()) {
      setErrorMsg("Please fill in all the fields before submitting.");
      return;
    }
    if (!selectedCategory) {
      setErrorMsg("Please select a category for your tool.");
      return;
    }

    // success 
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
      
      
      <AnimatePresence>
        {errorMsg && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md bg-[#18181b] border border-red-500/30 p-5 rounded-2xl shadow-2xl flex items-start gap-4"
          >
            <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="text-white font-medium mb-1">Hold on a second!</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{errorMsg}</p>
            </div>
            <button onClick={() => setErrorMsg("")} className="text-zinc-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showSuccessModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: smoothEase }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.6, ease: smoothEase }}
              className="bg-[#111113] border border-zinc-800 p-10 rounded-3xl max-w-sm w-full text-center shadow-2xl"
            >
              <motion.div 
                initial={{ scale: 0 }} animate={{ scale: 1 }} 
                transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              >
                <CheckCircle className="w-20 h-20 text-purple-500 mx-auto mb-6" />
              </motion.div>
              <h3 className="text-3xl font-bold text-white mb-3">Awesome!</h3>
              <p className="text-zinc-400 mb-8 leading-relaxed">Your tool is now in our queue for review. Thanks for contributing!</p>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-zinc-100 hover:bg-white text-zinc-900 py-3.5 rounded-xl font-bold transition-all active:scale-95"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-white mb-4 tracking-tighter">Submit a Tool</h1>
        <p className="text-zinc-400 text-lg">Help us grow the best directory for builders.</p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: smoothEase }}
        onSubmit={handleSubmit} 
        noValidate
        className="bg-[#0c0c0e] border border-zinc-800/80 p-8 md:p-10 rounded-3xl shadow-xl"
      >
        <div className="space-y-7">
          
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Tool Name</label>
            <input 
              type="text" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. Supabase" 
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-4 px-5 text-white placeholder-zinc-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all duration-300" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">Website URL</label>
            <input 
              type="url" 
              value={formData.url}
              onChange={(e) => setFormData({...formData, url: e.target.value})}
              placeholder="https://..." 
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-4 px-5 text-white placeholder-zinc-600 focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none transition-all duration-300" 
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-zinc-400 mb-2">Category</label>
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-4 px-5 text-white cursor-pointer flex justify-between items-center hover:border-zinc-700 transition-all duration-300"
            >
              <span className={selectedCategory ? "text-white" : "text-zinc-600"}>
                {selectedCategory || "Select a category..."}
              </span>
              <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }} transition={{ duration: 0.4, ease: smoothEase }}>
                <ChevronDown className="w-4 h-4 text-zinc-500" />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul 
                  initial={{ opacity: 0, y: -5, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -5, height: 0 }}
                  transition={{ duration: 0.4, ease: smoothEase }}
                  className="absolute z-10 mt-2 w-full bg-[#18181b] border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
                >
                  {CATEGORIES.map(cat => (
                    <li 
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setIsDropdownOpen(false); setErrorMsg(""); }}
                      className="px-5 py-3.5 text-zinc-300 hover:bg-zinc-800 hover:text-white cursor-pointer transition-colors"
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
              placeholder="Why should we add this tool?" 
              className="w-full bg-[#121214] border border-zinc-800 rounded-xl py-4 px-5 text-white placeholder-zinc-600 focus:border-purple-500/50 outline-none transition-all duration-300 resize-none"
            ></textarea>
          </div>

        </div>

        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full mt-10 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white py-4 rounded-xl font-bold transition-all duration-300 active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100"
        >
          {isSubmitting ? "Sending to Admin..." : "Submit for Review"} <Send className="w-5 h-5" />
        </button>
      </motion.form>
    </div>
  );
}
