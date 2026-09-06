import Link from "next/link";
import { ArrowDownRight, Building2 } from "lucide-react";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { ProfessionalProjectCard } from "@/components/ProfessionalProjectCard";
import { PersonalProjectsList } from "@/components/PersonalProjectsList";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactHub } from "@/components/ContactHub";
import { featuredProjects, professionalProjects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />

      {/* ========================================================================= */}
      {/* 1. FEATURED WORK                                                         */}
      {/* ========================================================================= */}
      <section id="work" className="section container">
        <SectionHeading
          eyebrow="FEATURED WORK"
          title="Selected products with clear ownership and contribution."
          body="Personal products are cleanly separated from enterprise team projects so engineering leaders can immediately evaluate what I architected independently and where I contributed within a larger team."
        />

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}

          {/* 03 Editorial Card for Professional Work */}
          <article className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-7 md:p-9 transition duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm dark:shadow-none">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
              <Building2 size={13} />
              <span>03 · PROFESSIONAL COLLABORATION</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Building production interfaces at Outcess Solutions
            </h3>

            <p className="mt-3 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Beyond independent projects, I contribute to real-world enterprise products as a
              Frontend Developer Intern. Working collaboratively alongside other engineers,
              I build admin interfaces, mobile registration flows, corporate service pages,
              and resolve QA defects across multiple production environments.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a className="button button--secondary text-xs" href="#professional">
                Explore professional work <ArrowDownRight size={13} />
              </a>
              <span className="text-xs text-zinc-500 font-mono">
                Lebara Omnichannel · Attendly Pro Mobile · ATS v2 · Outcess Web
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. PERSONAL PROJECTS                                                     */}
      {/* ========================================================================= */}
      <section className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="PERSONAL PROJECTS"
            title="Smaller builds, focused experiments and frontend practice."
            body="Focused applications demonstrating component state machines, audio API integration, local storage persistence, and asynchronous REST geocoding."
          />
          <PersonalProjectsList />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PROFESSIONAL WORK (OUTCESS SOLUTIONS)                                 */}
      {/* ========================================================================= */}
      <section id="professional" className="section container">
        <div className="mb-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] p-6 md:p-8 shadow-sm dark:shadow-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800/80 pb-6 mb-6">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                ORGANIZATIONAL EXPERIENCE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mt-1">
                Outcess Solutions
              </h2>
            </div>
            <div className="flex flex-col md:items-end">
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                Frontend Developer Intern
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                May 2026 — Present · Nigeria
              </span>
            </div>
          </div>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            The following products were developed collaboratively within Outcess Solutions.
            In strict adherence to professional integrity, each project card documents
            <strong> My Contribution</strong> within the engineering team rather than claiming
            sole product ownership.
          </p>
        </div>

        <div className="professional-grid">
          {professionalProjects.map((project) => (
            <ProfessionalProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. TECHNICAL CORE & SKILLS                                               */}
      {/* ========================================================================= */}
      <section id="skills" className="section section--surface">
        <div className="container">
          <SectionHeading
            eyebrow="TECHNICAL CORE"
            title="Engineering skills grounded in production."
            body="A structured overview of the frontend technologies, design system methodologies, and engineering workflows I apply across projects."
          />
          <SkillsSection />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ABOUT SECTION                                                         */}
      {/* ========================================================================= */}
      <section id="about" className="section container">
        <div className="about-grid">
          <div>
            <p className="eyebrow">ABOUT ME</p>
            <h2>Frontend engineering with a designer’s eye.</h2>
          </div>
          <div className="about-copy space-y-4 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I believe great frontend engineering lies at the intersection of technical
              precision and visual empathy. I care deeply about fluid responsive interactions,
              clean component architecture, accessibility, and high perceived performance.
            </p>
            <p>
              Currently, I'm contributing to production codebases at Outcess Solutions while
              architecting independent digital products like the Fila Yoruba commerce platform.
              I treat every interface not just as markup, but as a considered user experience.
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono text-zinc-500">
                📍 Based in Nigeria · Available for Global Opportunities
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EXPERIENCE & EDUCATION                                                */}
      {/* ========================================================================= */}
      <Experience />

      {/* ========================================================================= */}
      {/* 7. CONTACT                                                               */}
      {/* ========================================================================= */}
      <ContactHub />

      {/* ========================================================================= */}
      {/* 8. FOOTER                                                                */}
      {/* ========================================================================= */}
      <footer className="site-footer">
        <div className="container">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-xs">© 2026 Ibrahim Aliy</span>
            <span className="text-xs text-zinc-500">
              Frontend Developer · Nigeria · Building fast, considered interfaces
            </span>
          </div>
          <div className="footer-links font-mono text-xs">
            <a
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ibrahimaliy_19"
              target="_blank"
              rel="noreferrer"
            >
              X (Twitter)
            </a>
            <a href="mailto:ibrahimaliy1907@gmail.com">Email</a>
            <a href="/Ibrahim-Aliy-Resume.pdf" download="Ibrahim-Aliy-Resume.pdf">
              Résumé
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
