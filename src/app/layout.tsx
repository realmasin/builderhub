import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

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
      <body className="antialiased flex flex-col min-h-screen">
        
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="border-t border-white/10 p-8 text-center text-sm text-gray-500 mt-auto bg-black/20">
          <p>© 2026 BuilderHub. All rights reserved.</p>
          <p className="mt-1 text-xs">Directory managed and curated by the admin.</p>
        </footer>
        
      </body>
    </html>
  );
}
