import React from "react";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Download, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section className="hero container">
      {/* Left Column: Core Positioning & Identity */}
      <div className="hero__copy">
        {/* Availability Pill */}
        <div className="status-pill">
          <span className="status-dot shrink-0" />
          <span className="hidden sm:inline">AVAILABLE FOR OPPORTUNITIES · NIGERIA / REMOTE</span>
          <span className="sm:hidden">AVAILABLE FOR WORK · REMOTE</span>
        </div>

        {/* Role Eyebrow */}
        <p className="eyebrow">FRONTEND DEVELOPER · UI-FOCUSED ENGINEER</p>

        {/* Primary Headline */}
        <h1 className="break-words">I build digital experiences that feel considered.</h1>

        {/* Supporting Copy */}
        <p className="hero__lead">
          I’m Ibrahim Aliy — a frontend developer building fast, scalable, and
          visually refined interfaces using React, Next.js, TypeScript, and
          Tailwind CSS. Currently contributing to enterprise web applications at
          Outcess Solutions while architecting independent digital products.
        </p>

        {/* Action Buttons */}
        <div className="hero__actions">
          <Link className="button button--primary" href="/#work">
            <span>View selected work</span>
            <ArrowDownRight size={15} />
          </Link>

          <a
            className="button button--secondary"
            href="/Ibrahim-Aliy-Resume.pdf"
            download="Ibrahim-Aliy-Resume.pdf"
          >
            <span>Download résumé</span>
            <Download size={14} />
          </a>

          {/* Social CTAs row */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto pt-1 sm:pt-0">
            <a
              className="button button--tertiary flex-1 sm:flex-initial justify-center"
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
            >
              <span>GitHub</span>
              <ArrowUpRight size={12} />
            </a>

            <a
              className="button button--tertiary flex-1 sm:flex-initial justify-center"
              href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
              target="_blank"
              rel="noreferrer"
            >
              <span>LinkedIn</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* Quiet Trust Signals */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-zinc-200 dark:border-zinc-800/80 pt-6 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/40 sm:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 sm:bg-transparent p-2.5 sm:p-2">
            <span className="block  font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Outcess Solutions
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">Frontend Intern</span>
          </div>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/40 sm:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 sm:bg-transparent p-2.5 sm:p-2">
            <span className="block font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Fila Yoruba
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">Flagship Platform</span>
          </div>
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/40 sm:border-transparent bg-zinc-100/50 dark:bg-zinc-900/20 sm:bg-transparent p-2.5 sm:p-2">
            <span className="block font-mono text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              100% Type-Safe
            </span>
            <span className="text-[11px] text-zinc-500 font-mono">React & TypeScript</span>
          </div>
        </div>
      </div>

      {/* Right Column: Clean Editorial Code / Craft Window */}
      <div className="w-full overflow-hidden">
        <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] shadow-xl dark:shadow-2xl">
          {/* Window Header */}
          <div className="flex h-9 items-center justify-between border-b border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/80 dark:bg-[#09090b] px-3 sm:px-4">
            <div className="flex items-center gap-1.5">
              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
              <div className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10.5px] sm:text-[11px] text-zinc-600 dark:text-zinc-400">
              <Terminal size={11} className="text-zinc-400 dark:text-zinc-500" />
              <span>developer.config.ts</span>
            </div>
            <div className="w-8 sm:w-10" />
          </div>

          {/* Syntax Code Content */}
          <div className="p-3.5 sm:p-5 font-mono text-[10.5px] sm:text-[11.5px] leading-relaxed text-zinc-700 dark:text-zinc-300 overflow-x-auto">
            <div>
              <span className="text-violet-600 dark:text-violet-400">export const</span>{" "}
              <span className="text-blue-600 dark:text-blue-300">ibrahim</span> = &#123;
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-zinc-400 dark:text-zinc-500">role:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-300">"Frontend Developer"</span>,
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-zinc-400 dark:text-zinc-500">location:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-300">"Nigeria"</span>,
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-zinc-400 dark:text-zinc-500">focus:</span>{" "}
              <span className="text-amber-600 dark:text-amber-300">"UI engineering & state architecture"</span>,
            </div>
            <div className="pl-3 sm:pl-4">
              <span className="text-zinc-400 dark:text-zinc-500">stack:</span> &#123;
            </div>
            <div className="pl-6 sm:pl-8">
              <span className="text-zinc-400 dark:text-zinc-500">core:</span> [
              <span className="text-cyan-700 dark:text-cyan-300">"React"</span>,{" "}
              <span className="text-cyan-700 dark:text-cyan-300">"Next.js"</span>,{" "}
              <span className="text-cyan-700 dark:text-cyan-300">"TypeScript"</span>],
            </div>
            <div className="pl-6 sm:pl-8">
              <span className="text-zinc-400 dark:text-zinc-500">styling:</span> [
              <span className="text-cyan-700 dark:text-cyan-300">"Tailwind CSS"</span>,{" "}
              <span className="text-cyan-700 dark:text-cyan-300">"CSS Systems"</span>],
            </div>
            <div className="pl-6 sm:pl-8">
              <span className="text-zinc-400 dark:text-zinc-500">state:</span> [
              <span className="text-cyan-700 dark:text-cyan-300">"Zustand"</span>,{" "}
              <span className="text-cyan-700 dark:text-cyan-300">"TanStack Query"</span>],
            </div>
            <div className="pl-3 sm:pl-4">&#125;,</div>
            <div className="pl-3 sm:pl-4">
              <span className="text-zinc-400 dark:text-zinc-500">production:</span>{" "}
              <span className="text-emerald-600 dark:text-emerald-300">"Frontend Intern @ Outcess"</span>,
            </div>
            <div>&#125;;</div>

            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-[9.5px] sm:text-[10px] text-zinc-500">
              <span>Next.js 16 · Turbopack</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Strict TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
