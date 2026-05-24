import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/shared/Navbar"; // calling navbar with logo
import Footer from "../components/shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuilderHub - Developer Directory",
  description: "Curated stacks for modern workflows",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased min-h-screen flex flex-col justify-between`}>
        {/* logo navbar ect*/}
        <Navbar />
        
        {/*  page content   */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* footer here */}
        <Footer />
      </body>
    </html>
  );
}
