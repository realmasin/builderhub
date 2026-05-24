export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-24 px-4 text-center min-h-[70vh] flex flex-col justify-center items-center">
      
      <span className="bg-purple-500/10 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-purple-500/20">
        About BuilderHub
      </span>
      
      <h1 className="text-4xl font-bold mb-8 text-white">The creator-first directory</h1>
      
      <p className="text-zinc-400 mb-12 leading-relaxed text-lg">
        BuilderHub is a carefully curated directory dedicated to helping developers, designers, and digital creators discover the most useful tools on the internet. We focus on showcasing high-quality AI resources, developer platforms, and productivity tools to accelerate your building process. Every submission is personally reviewed to ensure it meets our standard of value for the community.
      </p>
      
      <div className="border-t border-zinc-800 pt-10 w-full">
        <p className="text-zinc-500 text-sm mb-6">Let's connect with the creator:</p>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          <a href="https://twitter.com/NotRealMasin" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors font-medium text-lg">Twitter / X</a>
          <a href="https://github.com/realmasin" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-purple-400 transition-colors font-medium text-lg">GitHub</a>
          <span className="text-zinc-400 font-medium text-lg">Discord: <span className="text-white">masinonline</span></span>
        </div>
      </div>
      
    </div>
  );
}
