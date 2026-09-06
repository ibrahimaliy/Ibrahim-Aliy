import React from "react";
import { SectionHeading } from "./SectionHeading";
import {
  GraduationCap,
  Briefcase,
  Code,
  CheckCircle2,
  Award,
  Network,
  ShieldCheck,
} from "lucide-react";

export function Experience() {
  const outcessDuties = [
    "Develop and improve responsive web interfaces using React.js and modern frontend development practices.",
    "Contribute to production web pages and admin interfaces, implementing UI enhancements and resolving QA-reported issues.",
    "Integrate frontend features with REST APIs and collaborate with team members using Git and GitHub.",
    "Participate in testing, debugging, code maintenance, and responsive optimization across desktop and mobile experiences.",
  ];

  const otherRoles = [
    {
      period: "2024 — PRESENT",
      role: "Technical Freelancer — IT & Security Services",
      company: "Independent Practice",
      details:
        "Deliver networking, technical support, CCTV, and access-control solutions and troubleshoot hardware, software, and connectivity issues.",
    },
    {
      period: "2023 — 2024",
      role: "Network Administrator & Security Installer",
      company: "TechMax",
      details:
        "Executed network deployments, diagnostics, system troubleshooting, and security-system installations.",
    },
    {
      period: "2022 — 2023",
      role: "Technical Officer",
      company: "FEMTECH IT",
      details:
        "Resolved hardware and software issues and supported the maintenance of network infrastructure.",
    },
  ];

  const certifications = [
    { name: "CCNA (Cisco Certified Network Associate)", issuer: "Makintouch", year: "2022" },
    { name: "Diploma in Networking (Network+)", issuer: "Femtech IT", year: "2021" },
    { name: "Diploma in Computer Engineering (CompTIA A+)", issuer: "Femtech IT", year: "2021" },
  ];

  return (
    <section id="experience" className="section container">
      <SectionHeading
        eyebrow="EXPERIENCE & BACKGROUND"
        title="Engineering experience, background and education."
        body="Hands-on frontend engineering experience at Outcess Solutions backed by a strong foundation in telecommunications engineering, networks, and technical systems."
      />

      <div className="timeline">
        {/* 1. Outcess Solutions Role */}
        <article className="timeline__item">
          <div>
            <span className="timeline__date">MAY 2026 — PRESENT</span>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
              <Briefcase size={12} className="text-zinc-400" />
              <span>Frontend Intern</span>
            </div>
          </div>
          <div>
            <h3>Frontend Developer Intern</h3>
            <p className="timeline__company">Outcess Solutions · Nigeria</p>
            <p>
              Contributing to production web applications, administrative consoles, and
              corporate digital services within the engineering team.
            </p>

            <div className="mt-5 rounded-lg border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/30 p-4">
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2.5">
                Key Responsibilities & Deliverables:
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
                {outcessDuties.map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2
                      size={12}
                      className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                    />
                    <span className="leading-snug">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* 2. Independent Software Projects */}
        <article className="timeline__item">
          <div>
            <span className="timeline__date">INDEPENDENT</span>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
              <Code size={12} className="text-zinc-400" />
              <span>Software Builder</span>
            </div>
          </div>
          <div>
            <h3>Personal Software Projects</h3>
            <p className="timeline__company">
              Fila Yoruba E-Commerce & Full-Featured React Applications
            </p>
            <p>
              Architected and built the flagship Fila Yoruba E-Commerce platform (customer
              storefront with integrated back-office admin, Zustand & React Query state
              architecture), role-based attendance management systems, and focused React
              applications demonstrating audio streaming, state machines, and local persistence.
            </p>
          </div>
        </article>

        {/* 3. Technical IT, Security & Systems Roles */}
        {otherRoles.map((role) => (
          <article key={role.role} className="timeline__item">
            <div>
              <span className="timeline__date">{role.period}</span>
              <div className="mt-2 flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <Network size={12} className="text-zinc-400" />
                <span>Systems & IT</span>
              </div>
            </div>
            <div>
              <h3>{role.role}</h3>
              <p className="timeline__company">{role.company}</p>
              <p>{role.details}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Education & Certifications Row */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Education Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 flex flex-col justify-between shadow-sm dark:shadow-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={16} className="text-emerald-600 dark:text-emerald-400" />
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                ACADEMIC EDUCATION
              </span>
            </div>
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Federal University of Technology, Minna
            </h4>
            <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1 font-medium">
              B.Tech. Telecommunications Engineering (In Progress)
            </p>
            <p className="text-xs text-zinc-500 mt-1 font-mono">
              400 Level · Expected Graduation: 2027
            </p>
          </div>

          <div className="mt-5 pt-3 border-t border-zinc-200 dark:border-zinc-800/80">
            <span className="text-xs text-zinc-600 dark:text-zinc-400">
              Rigorous engineering foundation in signal processing, communications networks, and computing systems.
            </span>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 flex flex-col justify-between shadow-sm dark:shadow-none">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-cyan-600 dark:text-cyan-400" />
              <span className="text-[10.5px] font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                PROFESSIONAL CERTIFICATIONS
              </span>
            </div>
            <ul className="space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800/60 pb-2.5 last:border-0 last:pb-0">
                  <div>
                    <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                      {c.name}
                    </span>
                    <span className="text-[11px] text-zinc-500">{c.issuer}</span>
                  </div>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400 shrink-0">
                    {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
