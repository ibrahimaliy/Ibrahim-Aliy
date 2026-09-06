import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  Github,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Workflow,
  Cpu,
  Database,
  Lock,
  RefreshCw,
  ExternalLink,
  Info,
} from "lucide-react";
import { ProjectBadge } from "@/components/ProjectBadge";
import { TechChip } from "@/components/TechChip";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Ibrahim Aliy`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Ibrahim Aliy Portfolio`,
      description: project.summary,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isFlagship = project.slug === "fila-yoruba";
  const isAttendance = project.slug === "attendance-management-system";
  const isProfessional = project.kind === "professional";

  return (
    <main className="project-page bg-[var(--bg)] text-[var(--text)] min-h-screen">
      {/* Top Sticky Navigation */}
      <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-[#09090b]/90 backdrop-blur-md" aria-label="Project detail navigation">
        <div className="container h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-mono font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft size={14} /> Back to all projects
          </Link>
          <div className="flex items-center gap-3">
            <ThemeToggle variant="compact" />
            <Link href="/" className="brand text-sm font-bold text-zinc-900 dark:text-zinc-100 tracking-tight hover:opacity-80 transition-opacity" aria-label="Ibrahim Aliy - Home">
              <span>IA</span>
              <span className="text-emerald-500 dark:text-emerald-400">.</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* ========================================================================= */}
      {/* CASE STUDY HERO                                                           */}
      {/* ========================================================================= */}
      <header className="container pt-8 sm:pt-16 pb-8 sm:pb-12 border-b border-zinc-200 dark:border-zinc-800/60">
        <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap mb-3 sm:mb-4">
          <ProjectBadge
            kind={project.kind}
            level={project.level}
            label={
              isFlagship
                ? "CASE STUDY · PERSONAL FLAGSHIP"
                : project.contributionLabel
            }
          />
          {project.organization && (
            <span className="inline-flex items-center gap-1.5 text-xs text-cyan-600 dark:text-cyan-400 font-mono font-medium">
              <Building2 size={13} /> {project.organization}
            </span>
          )}
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 max-w-4xl break-words">
          {project.title}
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          {isFlagship
            ? "A dual-sided Yoruba fashion commerce platform connecting a refined customer storefront with real back-office inventory and order operations."
            : project.summary}
        </p>

        {/* Project Meta Details Bar */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 p-3 sm:p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-[#0e0e11]">
          <div>
            <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Role</span>
            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 mt-1 block truncate">{project.role}</span>
          </div>
          <div>
            <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Scope</span>
            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 mt-1 block truncate">
              {isProfessional ? "Enterprise Team" : "Independent"}
            </span>
          </div>
          <div>
            <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Stack</span>
            <span className="text-xs font-medium text-zinc-800 dark:text-zinc-200 mt-1 block truncate">
              {project.tech.slice(0, 3).join(", ")}
            </span>
          </div>
          <div>
            <span className="text-[9.5px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-500 block">Status</span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live Demo
            </span>
          </div>
        </div>

        {/* Tech Stack Chips */}
        <div className="chip-row mt-5 sm:mt-6">
          {project.tech.map((item) => (
            <TechChip key={item}>{item}</TechChip>
          ))}
        </div>

        {/* Direct Action Links */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 mt-6 sm:mt-8">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-xs font-semibold text-zinc-200 transition-colors border border-zinc-700"
            >
              <Github size={14} />
              <span>{isProfessional ? "Organization Repository" : "View Source Code"}</span>
              <ArrowUpRight size={13} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold text-zinc-950 transition-colors"
            >
              <span>{isFlagship ? "Visit Live Storefront" : isAttendance ? "Open Live Portal" : "Visit Live Demo"}</span>
              <ExternalLink size={13} />
            </a>
          )}
        </div>

        {/* Commercial Platform Notice Callout */}
        {project.liveNote && (
          <div className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 flex items-start gap-3 text-xs text-amber-200/90 leading-relaxed">
            <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold">Live Operational Notice: </strong>
              {project.liveNote}
            </div>
          </div>
        )}

        {/* Live Role Portal Routes */}
        {project.portalRoutes && (
          <div className="mt-6 rounded-xl border border-blue-500/25 bg-blue-500/5 p-4">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
              <span className="text-xs font-mono font-semibold text-blue-300 flex items-center gap-1.5">
                <Workflow size={13} /> Direct Live Role Portals
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                Access route directly without manual URL typing
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              {project.portalRoutes.map((route) => (
                <a
                  key={route.path}
                  href={route.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-xs text-blue-200 font-mono transition"
                >
                  <span>{route.label}</span>
                  <span className="text-[10px] text-blue-400 font-bold">{route.path}</span>
                  <ExternalLink size={11} className="text-blue-400" />
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* ========================================================================= */}
      {/* TEMPLATE 1: FLAGSHIP CASE STUDY (FILA YORUBA E-COMMERCE PLATFORM)          */}
      {/* ========================================================================= */}
      {isFlagship && (
        <>
          {/* Dual-Environment System Architecture Callout */}
          <section className="container py-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 mb-4">
              <Layers size={14} />
              <span>SYSTEM ARCHITECTURE · DUAL-ENVIRONMENT TOPOLOGY</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Environment 01 */}
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      SUBSYSTEM 01
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Customer-Facing</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">
                    Customer Storefront Engine
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    A responsive, high-speed storefront engineered to celebrate Yoruba headwear
                    culture while driving conversion. Features dynamic fabric/style customization,
                    live variant pricing, optimistic shopping cart state, and frictionless single-page checkout.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      Dynamic Damask Gobi & Cap variant selection
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      Zustand-powered optimistic cart management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-emerald-400" />
                      Structured address validation & Paystack flow
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Stack: Next.js · Tailwind · Zustand</span>
                  <span className="text-emerald-400 font-semibold">Live Experience</span>
                </div>
              </div>

              {/* Environment 02 */}
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      SUBSYSTEM 02
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">Back-Office Suite</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">
                    Back-Office Operations Console
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    A purpose-built operations workspace designed for merchant teams. Manages
                    real-time stock reservations, transitions orders across a finite state machine,
                    monitors daily sales velocity, and maintains audit logs for customer inquiries.
                  </p>
                  <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      Real-time inventory ledger with low-stock alerts
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      Order state machine (Received → Packed → Shipped → Delivered)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-cyan-400" />
                      Revenue metrics, margin calculations & customer lookup
                    </li>
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <span>Scope: Role-Based Admin Operations</span>
                  <span className="text-cyan-400 font-semibold">Operational Tooling</span>
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview, Challenge, and Ownership */}
          <section className="container case-grid border-t border-zinc-800/60">
            <div>
              <p className="eyebrow">PROJECT OVERVIEW</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                Beyond a storefront: a dual-sided commerce system.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="case-lead text-zinc-300">
                Fila Yoruba was conceived to celebrate Yoruba cultural fashion by creating
                a digital experience worthy of authentic craftsmanship. It evolved from a
                basic catalog into a production-grade commerce platform uniting consumer shopping
                with operational store tools.
              </p>
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6 space-y-3">
                <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  The Engineering Challenge
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Real e-commerce platforms require far more than displaying pictures and prices.
                  They require reliable product discovery, live inventory reservations, accurate
                  order states, financial payment guarantees, customer identity continuity,
                  refund management, and intuitive tooling for non-technical store managers.
                </p>
              </div>
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6 space-y-2">
                <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                  <Code2 size={16} className="text-blue-400" />
                  My Role & Architecture Ownership
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  As an independent personal project, I owned end-to-end product architecture,
                  component engineering, state management, UX flow design, and administrative
                  tooling.
                </p>
              </div>
            </div>
          </section>

          {/* Customer Experience Deep-Dive */}
          <section className="section section--surface">
            <div className="container">
              <p className="eyebrow">STOREFRONT CAPABILITIES</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                The Customer Experience
              </h2>
              <p className="text-sm text-zinc-400 max-w-2xl mb-10">
                Thoughtfully crafted consumer touchpoints balancing cultural luxury with modern
                conversion standards.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.customerExperience?.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-[#09090b] p-6 flex flex-col justify-between hover:border-zinc-700 transition"
                  >
                    <div>
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-zinc-100 mt-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Admin Experience Deep-Dive */}
          <section className="section container">
            <p className="eyebrow">OPERATIONAL TOOLING</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
              The Back-Office Admin Experience
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mb-10">
              A comprehensive administrative suite empowering store managers to oversee
              products, stock levels, orders, and customer accounts.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.adminExperience?.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6 flex flex-col justify-between hover:border-zinc-700 transition"
                >
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      ADMIN · 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 mt-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* E-Commerce System Design */}
          <section className="section section--surface">
            <div className="container">
              <p className="eyebrow">COMMERCE ARCHITECTURE</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                E-Commerce System Design
              </h2>
              <p className="text-sm text-zinc-400 max-w-2xl mb-8">
                Practical engineering decisions addressing inventory truth, race conditions,
                and state integrity.
              </p>

              <div className="system-design-grid">
                {project.systemDesign?.map((item, idx) => (
                  <div key={idx} className="system-design-card bg-[#09090b] border-zinc-800">
                    <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Case Study Process */}
          <section className="section container">
            <p className="eyebrow">DEVELOPMENT PROGRESSION</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
              Four-Stage Case Study Process
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mb-8">
              How the platform evolved systematically from an interface prototype to a
              production-ready commerce engine.
            </p>

            <div className="stages-grid">
              {project.stages?.map((stage) => (
                <div key={stage.number} className="stage-card bg-[#0e0e11] border-zinc-800">
                  <span className="stage-number text-emerald-400">{stage.number}</span>
                  <h3 className="text-sm font-bold text-zinc-100 mt-2 mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* TEMPLATE 2: ATTENDANCE MANAGEMENT SYSTEM                                  */}
      {/* ========================================================================= */}
      {isAttendance && (
        <>
          <section className="container py-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 mb-4">
              <Workflow size={14} />
              <span>ACADEMIC PORTAL ARCHITECTURE · 3-TIER ROLE ACCESS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6">
                <span className="text-[11px] font-mono font-bold text-blue-400 uppercase">Role 01</span>
                <h3 className="text-base font-bold text-zinc-100 mt-2 mb-2">Institution Admin</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Academic session setup, department registry, lecturer course assignments, and institution-wide compliance monitoring.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6">
                <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase">Role 02</span>
                <h3 className="text-base font-bold text-zinc-100 mt-2 mb-2">Course Lecturer</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Fast lecture check-in, real-time student roll call, manual override for authorized absences, and exportable course sheets.
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6">
                <span className="text-[11px] font-mono font-bold text-amber-400 uppercase">Role 03</span>
                <h3 className="text-base font-bold text-zinc-100 mt-2 mb-2">Undergraduate Student</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Transparent personal attendance progress, low-attendance alert thresholds, and automated exam clearance status.
                </p>
              </div>
            </div>
          </section>

          <section className="container case-grid border-t border-zinc-800/60">
            <div>
              <p className="eyebrow">PROJECT OVERVIEW</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                Solving academic roll call through role-based clarity.
              </h2>
            </div>
            <div className="space-y-6">
              <p className="case-lead text-zinc-300">
                Manual paper attendance sheets in tertiary institutions often lead to lost records,
                proxy attendance, and tedious end-of-semester computations. The Attendance Management
                System replaces this with a structured, role-based web application tailored for
                administrators, course lecturers, and students.
              </p>
              <div className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6 space-y-2">
                <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                  <Code2 size={16} className="text-blue-400" />
                  Role-Based Architecture & Route Guards
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The interface adapts responsively to the authenticated user's permissions,
                  providing administrators with institution-wide metrics, lecturers with fast
                  session check-in tools, and students with personal attendance thresholds.
                </p>
              </div>
            </div>
          </section>

          <section className="section section--surface">
            <div className="container">
              <p className="eyebrow">FUNCTIONAL MODULES</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                Role-Based Experiences
              </h2>
              <p className="text-sm text-zinc-400 max-w-2xl mb-10">
                Distinct workflows designed specifically for each stakeholder in the academic
                ecosystem.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features?.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-[#09090b] p-6 border-l-4 border-l-blue-500"
                  >
                    <span className="text-xs font-mono text-blue-400 font-bold">
                      PORTAL MODULE · 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 mt-2 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ========================================================================= */}
      {/* TEMPLATE 3: REUSABLE PROFESSIONAL PROJECT TEMPLATE (OUTCESS SOLUTIONS)    */}
      {/* ========================================================================= */}
      {isProfessional && (
        <>
          {/* Transparent Enterprise Collaboration Header */}
          <section className="container py-10">
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-6 md:p-8">
              <div className="flex items-start gap-4">
                <Building2 size={24} className="text-cyan-400 shrink-0 mt-1" />
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                      ENTERPRISE COLLABORATION · OUTCESS SOLUTIONS
                    </span>
                    <span className="text-xs text-zinc-500 font-mono">
                      · Frontend Developer Intern
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-zinc-100">
                    {project.title}
                  </h2>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-3xl">
                    <strong>Project Ownership Note:</strong> This project belongs to Outcess Solutions.
                    This case study documents my specific frontend engineering contributions,
                    component deliverables, and team collaboration within a shared enterprise repository,
                    rather than claiming sole product ownership.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="container case-grid border-t border-zinc-800/60">
            <div>
              <p className="eyebrow">ORGANIZATION CONTEXT</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">
                Enterprise Product Engineering
              </h2>
              <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400 font-mono">
                <Building2 size={14} />
                <span>Outcess Solutions · Production Environment</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="case-lead text-zinc-300">{project.description}</p>
            </div>
          </section>

          {/* My Contribution Section */}
          <section className="section section--surface">
            <div className="container">
              <p className="eyebrow">TEAM WORKFLOW</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                My Contribution & Work Completed
              </h2>
              <p className="text-sm text-zinc-400 max-w-2xl mb-8">
                Factual breakdown of frontend responsibilities, peer collaboration, and deliverables.
              </p>

              <div className="contribution-grid">
                {project.contributions.map((item, idx) => (
                  <article key={idx} className="contribution-card bg-[#09090b] border-zinc-800">
                    <span className="text-cyan-400">CONTRIBUTION · 0{idx + 1}</span>
                    <p className="text-zinc-300">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Features / Deliverables if present */}
          {project.features && project.features.length > 0 && (
            <section className="section container">
              <p className="eyebrow">DELIVERABLES</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                Key Technical Deliverables
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-6"
                  >
                    <span className="text-xs font-mono text-cyan-400 font-bold">
                      FEATURE · 0{idx + 1}
                    </span>
                    <h3 className="text-base font-bold text-zinc-100 mt-1 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* What I Learned */}
          {project.learnings && project.learnings.length > 0 && (
            <section className="section section--surface">
              <div className="container">
                <p className="eyebrow">ENGINEERING GROWTH</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
                  What I Learned & Engineering Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.learnings.map((learning, idx) => (
                    <div
                      key={idx}
                      className="rounded-xl border border-zinc-800 bg-[#09090b] p-5 flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-300 leading-relaxed">
                        {learning}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* COMPACT PERSONAL PROJECTS TEMPLATE (MUSIC, MEMORY, NOTEPAD, WEATHER)      */}
      {/* ========================================================================= */}
      {!isFlagship && !isAttendance && !isProfessional && (
        <>
          <section className="container case-grid border-t border-zinc-800/60">
            <div>
              <p className="eyebrow">PERSONAL PROJECT</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 tracking-tight">{project.title}</h2>
              <span className="text-xs text-zinc-500 font-mono mt-2 block">
                Frontend Practice & Experimentation
              </span>
            </div>
            <div>
              <p className="case-lead text-zinc-300">{project.description}</p>
            </div>
          </section>

          <section className="section section--surface">
            <div className="container">
              <p className="eyebrow">IMPLEMENTATION</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-2">
                What I Built
              </h2>
              <div className="contribution-grid">
                {project.contributions.map((item, idx) => (
                  <article key={idx} className="contribution-card bg-[#09090b] border-zinc-800">
                    <span className="text-emerald-400">FEATURE · 0{idx + 1}</span>
                    <p className="text-zinc-300">{item}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {project.highlights && (
            <section className="section container">
              <p className="eyebrow">KEY HIGHLIGHTS</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 mb-6">
                Technical Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-zinc-800 bg-[#0e0e11] p-4 flex items-center gap-3 text-xs text-zinc-300"
                  >
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </>
      )}

      {/* ========================================================================= */}
      {/* REPOSITORY & PROJECT LINKS (FOOTER CTA)                                   */}
      {/* ========================================================================= */}
      {(project.github || project.live) && (
        <section className="container py-16 border-t border-zinc-800/80">
          <p className="eyebrow">PROJECT LINKS</p>
          <div className="flex flex-wrap items-center gap-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-100 transition-colors border border-zinc-700"
              >
                <Github size={15} />
                {isProfessional
                  ? "Organization Repository (Outcess Solutions)"
                  : "View GitHub Repository"}
                <ArrowUpRight size={14} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-xs font-semibold text-zinc-950 transition-colors"
              >
                Visit Live Project <ArrowUpRight size={14} />
              </a>
            )}
            <Link
              href="/#work"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-transparent hover:bg-zinc-800/60 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-800"
            >
              Back to all projects
            </Link>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="site-footer bg-[var(--surface)] border-t border-zinc-200 dark:border-zinc-800/80">
        <div className="container">
          <div className="flex flex-col gap-1">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">© 2026 Ibrahim Aliy</span>
            <span className="text-xs text-zinc-500">
              Frontend Developer · Nigeria
            </span>
          </div>
          <div className="footer-links">
            <Link href="/#work" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Work</Link>
            <Link href="/#about" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</Link>
            <Link href="/#contact" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</Link>
            <a
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ibrahimaliy_19"
              target="_blank"
              rel="noreferrer"
              className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              X (Twitter)
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
