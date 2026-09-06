import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, CheckCircle2, Building2 } from "lucide-react";
import { Project } from "@/types/project";
import { TechChip } from "./TechChip";

export function ProfessionalProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 md:p-7 transition duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none">
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-2 flex-wrap mb-3.5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[10.5px] font-mono font-medium text-cyan-600 dark:text-cyan-400">
            <Building2 size={11} /> {project.organization ?? "Outcess Solutions"}
          </span>

          <span className="text-[11px] font-mono text-zinc-500">
            Team Project
          </span>
        </div>

        {/* Title & Role */}
        <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          Role: {project.role}
        </p>

        {/* Summary */}
        <p className="mt-3 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
          {project.summary}
        </p>

        {/* My Contribution Section */}
        <div className="mt-5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/30 p-3.5">
          <span className="text-[10.5px] font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
            My Contribution:
          </span>
          <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
            {project.contributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2
                  size={12}
                  className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                />
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Chips */}
        <div className="chip-row mt-5">
          {project.tech.map((item) => (
            <TechChip key={item}>{item}</TechChip>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between gap-3">
        <Link
          className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition"
          href={`/projects/${project.slug}`}
        >
          View contribution details <ArrowUpRight size={13} />
        </Link>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition font-mono"
            title="Organization Repository (Outcess Solutions)"
          >
            <Github size={13} />
            <span className="hidden sm:inline">Org Repo</span>
            <ArrowUpRight size={11} />
          </a>
        )}
      </div>
    </article>
  );
}
