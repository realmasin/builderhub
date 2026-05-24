import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuilderHub | Discover the Best Developer Tools",
  description: "A modern platform for developers, builders, and AI enthusiasts to discover useful tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">

        
        {/* Navbar Placeholder */}
        <nav className="w-full border-b border-white/10 p-4 backdrop-blur-md sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold tracking-tight">Builder<span className="text-purple-500">Hub</span></h1>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Submit Tool
            </button>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer Placeolder */}
        <footer className="border-t border-white/10 p-8 text-center text-sm text-gray-400">
          © 2026 BuilderHub. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
