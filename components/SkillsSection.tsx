import React from "react";
import Link from "next/link";
import { Code2, Database, Wrench, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export function SkillsSection() {
  const pillars = [
    {
      title: "Frontend Engineering",
      icon: <Code2 size={16} className="text-zinc-400" />,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
      note: "Component architecture, hooks, server/client boundaries, dynamic routes, and responsive mobile-first optimization.",
    },
    {
      title: "State & Data Management",
      icon: <Database size={16} className="text-zinc-400" />,
      skills: ["Zustand", "TanStack React Query", "REST API Integration", "LocalStorage API"],
      note: "Client state stores, server cache management, asynchronous mutation handling, and persistent browser storage.",
    },
    {
      title: "Tools & Workflow",
      icon: <Wrench size={16} className="text-zinc-400" />,
      skills: ["Git", "GitHub", "VS Code", "Figma", "npm", "Chrome DevTools"],
      note: "Version control workflows, pull requests, UI design translation, package management, and debugging.",
    },
    {
      title: "Web Standards & Performance",
      icon: <Zap size={16} className="text-zinc-400" />,
      skills: ["Core Web Vitals", "Lighthouse", "Semantic HTML5", "Accessibility (a11y)", "Responsive Design", "Cross-Browser Testing"],
      note: "Performance profiling, accessibility compliance, semantic markup, and reliable cross-device rendering.",
    },
  ];

  const strengths = [
    "Problem Solving",
    "Team Collaboration",
    "Adaptability",
    "Technical Communication",
    "Time Management",
  ];

  return (
    <div id="skills" className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 flex flex-col justify-between transition duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                {pillar.icon}
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  {pillar.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 my-3">
                {pillar.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60 px-2.5 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {pillar.note}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Core Engineering Strengths */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm dark:shadow-none">
        <div>
          <span className="font-mono text-[10.5px] uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold block mb-1">
            CORE PROFESSIONAL STRENGTHS
          </span>
          <span className="text-xs text-zinc-600 dark:text-zinc-400">
            Professional competencies applied in team engineering and client delivery:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {strengths.map((strength) => (
            <span
              key={strength}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/80 px-3 py-1 text-xs text-zinc-800 dark:text-zinc-300 font-medium"
            >
              <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />
              <span>{strength}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Network Systems & Cisco Credentials Callout */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0c0c0e] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-zinc-900 dark:text-zinc-200">Looking for Network Systems & Cisco Credentials? </span>
          <span>CCNA certification, enterprise LAN/WAN configurations, and telecommunications background are documented in detail below.</span>
        </div>
        <Link
          href="#experience"
          className="inline-flex items-center gap-1.5 font-mono font-semibold text-emerald-600 dark:text-emerald-400 hover:underline shrink-0"
        >
          <span>View Experience & CCNA</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
