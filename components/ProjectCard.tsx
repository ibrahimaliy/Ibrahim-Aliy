import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Cpu, Layout, ExternalLink, Info } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectBadge } from "./ProjectBadge";
import { TechChip } from "./TechChip";

export function ProjectCard({ project }: { project: Project }) {
  const isFlagship = project.slug === "fila-yoruba";
  const isAttendance = project.slug === "attendance-management-system";

  if (isFlagship) {
    return (
      <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-5 sm:p-7 md:p-9 transition duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-5 sm:pb-6 mb-5 sm:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <ProjectBadge kind="personal" level="flagship" label="Flagship Personal Project" />
              <span className="text-xs font-mono text-zinc-500">
                01 · Flagship
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight break-words">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
              Role: {project.role}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="button button--primary flex-1 sm:flex-initial text-xs sm:text-sm"
              >
                <span>Explore Live Demo</span>
                <ExternalLink size={13} />
              </a>
            )}
            <Link
              href="/projects/fila-yoruba"
              className="button button--secondary flex-1 sm:flex-initial text-xs sm:text-sm"
            >
              <span>Case study</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Core Summary */}
        <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Architectural Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-5 sm:my-6">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4">
            <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              <ShieldCheck size={14} className="text-emerald-600 dark:text-emerald-400 shrink-0" /> Inventory Integrity
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              Temporary checkout cart reservations prevent overselling during high traffic without premature physical stock deductions.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4">
            <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              <Cpu size={14} className="text-blue-600 dark:text-blue-400 shrink-0" /> Dual-State Architecture
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              Clean separation of synchronous UI client state (Zustand) and asynchronous server cache (TanStack React Query).
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4">
            <span className="flex items-center gap-1.5 text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              <Layout size={14} className="text-violet-600 dark:text-violet-400 shrink-0" /> Back-Office Operations
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1.5 leading-relaxed">
              Integrated administrative suite for product catalog updates, stock tracking, order fulfillment, and daily sales metrics.
            </p>
          </div>
        </div>

        {/* Tech Chips & Link */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="chip-row">
            {project.tech.map((item) => (
              <TechChip key={item}>{item}</TechChip>
            ))}
          </div>

          <Link
            href="/projects/fila-yoruba"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <span>Explore full case study & architecture</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </article>
    );
  }

  if (isAttendance) {
    return (
      <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-5 sm:p-7 md:p-9 transition duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-5 sm:pb-6 mb-5 sm:mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <ProjectBadge kind="personal" level="featured" label="Featured Personal Project" />
              <span className="text-xs font-mono text-zinc-500">
                02 · Personal Work
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight break-words">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 font-mono">
              Role: {project.role}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap w-full sm:w-auto">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="button button--primary flex-1 sm:flex-initial text-xs sm:text-sm"
              >
                <span>Open Live Portal</span>
                <ExternalLink size={13} />
              </a>
            )}
            <Link
              href="/projects/attendance-management-system"
              className="button button--secondary flex-1 sm:flex-initial text-xs sm:text-sm"
            >
              <span>View project</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Live Portal Route Links */}
        {project.portalRoutes && (
          <div className="mb-5 sm:mb-6 rounded-lg border border-blue-500/25 bg-blue-500/10 dark:bg-blue-500/5 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <span className="font-mono font-semibold">Live Role Routes:</span>
              <span className="text-zinc-500 dark:text-zinc-400 hidden sm:inline">Direct preview link:</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {project.portalRoutes.map((route) => (
                <a
                  key={route.path}
                  href={route.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-blue-800 dark:text-blue-200 font-mono text-[11px] transition"
                >
                  <span>{route.label}</span>
                  <ExternalLink size={10} className="text-blue-600 dark:text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        )}

        <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 my-5 sm:my-6">
          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4">
            <span className="block text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              Administrator Portal (/admin)
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Institutional oversight for managing course allocations, faculty assignments, and attendance statistics.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4">
            <span className="block text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              Lecturer Console (/lecturer)
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Streamlined roll call interface for launching sessions, recording student statuses, and exporting summaries.
            </p>
          </div>

          <div className="rounded-lg border border-zinc-200 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/40 p-3.5 sm:p-4">
            <span className="block text-xs font-mono font-semibold text-zinc-800 dark:text-zinc-200">
              Student Attendance (/student)
            </span>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1 leading-relaxed">
              Personalized dashboard for tracking course attendance percentages and threshold warnings.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <div className="chip-row">
            {project.tech.map((item) => (
              <TechChip key={item}>{item}</TechChip>
            ))}
          </div>

          <Link
            href="/projects/attendance-management-system"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition"
          >
            <span>View details & modules</span>
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </article>
    );
  }

  return null;
}
