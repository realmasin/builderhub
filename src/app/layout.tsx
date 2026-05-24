import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuilderHub | Discover Tools",
  description: "A modern platform for developers and builders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} flex flex-col min-h-screen bg-[#09090b] text-zinc-100`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <footer className="border-t border-zinc-800 p-8 text-center text-sm text-zinc-500 mt-auto bg-black/40">
          <p>© 2026 BuilderHub. All rights reserved.</p>
          <p className="mt-1 text-xs">Directory managed by the admin.</p>
        </footer>
      </body>
    </html>
  );
}
