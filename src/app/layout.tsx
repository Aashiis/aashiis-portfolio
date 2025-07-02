import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Prakash BK (Aashis) | Full-Stack Developer",
  description: "Portfolio of Prakash BK, a self-driven full-stack developer and mobile app engineer specializing in Flutter, Next.js, and Django.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-slate-950 text-slate-100`}>
        <Navbar />
        <main className="container mx-auto max-w-5xl px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}