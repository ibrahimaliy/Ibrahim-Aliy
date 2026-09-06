import React from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { TechChip } from "./TechChip";
import { compactPersonalProjects } from "@/data/projects";

export function PersonalProjectsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {compactPersonalProjects.map((project) => (
        <article
          key={project.slug}
          className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 flex flex-col justify-between transition duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-mono text-[10.5px] uppercase tracking-wider text-zinc-500 font-semibold">
                Personal Project
              </span>
              <span className="text-[11px] font-mono text-zinc-500">
                Frontend Practice
              </span>
            </div>

            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              {project.title}
            </h3>

            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              {project.summary}
            </p>

            {project.highlights && (
              <ul className="mt-4 space-y-1.5 border-t border-zinc-200 dark:border-zinc-800/60 pt-3 text-xs text-zinc-600 dark:text-zinc-400">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="chip-row mt-4">
              {project.tech.map((item) => (
                <TechChip key={item}>{item}</TechChip>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
                >
                  <span>Open live app</span>
                  <ExternalLink size={12} />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 transition"
              >
                <span>Details</span>
                <ArrowUpRight size={12} />
              </Link>
            </div>
            <span className="text-[10px] text-zinc-400 dark:text-zinc-600 font-mono">Independent</span>
          </div>
        </article>
      ))}
    </div>
  );
}
