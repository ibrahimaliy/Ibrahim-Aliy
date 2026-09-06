import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="site-header">
        <div className="container nav-wrap">
          <Link href="/" className="brand">
            <span>IA</span>
            <span className="brand-dot">.</span>
          </Link>
          <Link href="/" className="nav-cta">
            <ArrowLeft size={14} /> Back home
          </Link>
        </div>
      </header>

      {/* 404 Center Card */}
      <section className="container flex flex-col items-center justify-center text-center py-20">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface-2)] p-12 max-w-lg w-full shadow-2xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400">
            404 · PAGE NOT FOUND
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--text)] mt-3 mb-4 tracking-tight">
            Lost in cyberspace?
          </h1>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-8">
            The project or route you are looking for does not exist or may have been
            relocated.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link className="button button--primary w-full sm:w-auto" href="/">
              <Home size={15} /> Return to homepage
            </Link>
            <Link className="button button--secondary w-full sm:w-auto" href="/#work">
              View selected work
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <span>© 2026 Ibrahim Aliy</span>
          <span>Frontend Developer · Nigeria</span>
        </div>
      </footer>
    </main>
  );
}
