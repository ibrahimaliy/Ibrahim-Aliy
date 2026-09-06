"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="nav-pill">
        {/* Brand Monogram */}
        <Link href="/" className="brand" aria-label="Ibrahim Aliy - Home">
          <span>IA</span>
          <span className="brand-dot">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        {/* Action Group */}
        <div className="flex items-center gap-2">
          {/* Theme Switcher */}
          <ThemeToggle variant="compact" />

          <a
            href="https://github.com/ibrahimaliy"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-7 w-7 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
          </a>

          <a
            href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center justify-center h-7 w-7 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </a>

          <a
            href="/Ibrahim-Aliy-Resume.pdf"
            download="Ibrahim-Aliy-Resume.pdf"
            className="hidden md:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition font-mono"
          >
            <FileText size={11} />
            <span>CV</span>
          </a>

          <a className="nav-cta" href="mailto:ibrahimaliy1907@gmail.com">
            <span>Let’s talk</span>
            <ArrowUpRight size={12} />
          </a>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <nav className="mobile-nav-links">
            <Link href="/#work" onClick={closeMenu}>
              <span>Work</span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </Link>
            <Link href="/#experience" onClick={closeMenu}>
              <span>Experience</span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </Link>
            <Link href="/#skills" onClick={closeMenu}>
              <span>Skills & Stack</span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </Link>
            <Link href="/#about" onClick={closeMenu}>
              <span>About</span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </Link>
            <Link href="/#contact" onClick={closeMenu}>
              <span>Contact</span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </Link>
            <a
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <span className="flex items-center gap-2">
                <Github size={15} /> GitHub Profile
              </span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              <span className="flex items-center gap-2">
                <Linkedin size={15} /> LinkedIn Profile
              </span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </a>
            <a
              href="/Ibrahim-Aliy-Resume.pdf"
              download="Ibrahim-Aliy-Resume.pdf"
              onClick={closeMenu}
            >
              <span className="flex items-center gap-2">
                <FileText size={15} /> Download Résumé
              </span>
              <ArrowUpRight size={15} className="text-zinc-500" />
            </a>

            {/* Mobile Drawer Theme Switcher */}
            <div className="pt-3 mt-1 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">Theme Preference</span>
              <ThemeToggle variant="segmented" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
