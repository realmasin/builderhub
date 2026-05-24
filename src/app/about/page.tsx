export default function About() {
  return (
    <div className="max-w-2xl mx-auto py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6 text-zinc-100">About BuilderHub</h1>
      <p className="text-zinc-400 mb-10 leading-relaxed text-lg">
        BuilderHub is a community-driven directory created to help developers, designers, and creators discover the best tools on the internet. We carefully curate every submission to ensure high-quality resources.
      </p>
      <div className="flex justify-center gap-8">
        <a href="https://twitter.com/norealmasin" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-purple-400 transition-colors font-medium">Twitter / X</a>
        <a href="https://github.com/realmasin" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-purple-400 transition-colors font-medium">GitHub</a>
        <a href="https://discord.gg/masinonline" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-purple-400 transition-colors font-medium">Discord</a>
      </div>
    </div>
  );
}

