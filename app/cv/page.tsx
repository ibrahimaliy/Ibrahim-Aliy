import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, ExternalLink, FileText, Printer } from "lucide-react";
import { CvDocumentView } from "@/components/CvDocumentView";

export const metadata: Metadata = {
  title: "Curriculum Vitae — Ibrahim Aliy | Frontend Developer",
  description:
    "Curriculum Vitae of Ibrahim Aliy — Frontend Developer and Telecommunications Engineering student building production-grade web applications with React.js, Next.js, TypeScript, and Tailwind CSS.",
};

export default function CvPage() {
  return (
    <div className="min-h-screen bg-zinc-100 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#0c0c0e]/90 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <ArrowLeft size={14} />
            <span>Portfolio</span>
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700">/</span>
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
              Curriculum Vitae
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-700 dark:text-emerald-300">
              Single-Page PDF
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="/Ibrahim-Aliy-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
          >
            <ExternalLink size={13} />
            <span>Raw PDF</span>
          </a>

          <a
            href="/Ibrahim-Aliy-Resume.pdf"
            download="Ibrahim-Aliy-Resume.pdf"
            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 px-3.5 py-1.5 text-xs font-semibold text-white dark:text-zinc-950 transition shadow-xs"
          >
            <Download size={13} />
            <span>Download PDF</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container max-w-4xl py-6 sm:py-10 px-3 sm:px-6">
        <CvDocumentView />
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500 font-mono">
        <span>© 2026 Ibrahim Aliy · </span>
        <a href="mailto:ibrahimaliy1907@gmail.com" className="hover:underline">
          ibrahimaliy1907@gmail.com
        </a>
      </footer>
    </div>
  );
}
