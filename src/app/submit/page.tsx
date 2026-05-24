export default function SubmitPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-20">
      
      {/* Page Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-white">Submit a Tool</h1>
        <p className="text-gray-400">
          Know a great developer tool or resource? Submit it below. 
          <br />
          <span className="text-purple-400 font-medium">All submissions are reviewed by the admin before being published.</span>
        </p>
      </div>

      {/* Submission Form */}
      <div className="glass-card p-8">
        <form className="flex flex-col gap-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tool Name *</label>
            <input 
              type="text" 
              placeholder="e.g., Vercel" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Website URL *</label>
            <input 
              type="url" 
              placeholder="https://..." 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Short Description *</label>
            <textarea 
              rows={3} 
              placeholder="What does this tool do?" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors [&>option]:bg-slate-900" required>
              <option value="">Select a category</option>
              <option value="ai">AI Tools</option>
              <option value="dev">Developer Tools</option>
              <option value="productivity">Productivity</option>
              <option value="design">Design</option>
              <option value="web3">Web3</option>
            </select>
          </div>

          {/* Dummy Submit Button for now */}
          <button 
            type="button" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors mt-2 shadow-lg shadow-purple-500/20"
          >
            Submit for Review
          </button>
          
        </form>
      </div>
    </div>
  );
}

