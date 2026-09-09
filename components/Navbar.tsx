"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText, Github, Linkedin } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#skills", id: "skills", label: "Skills" },
  { href: "/#about", id: "about", label: "About" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    // Check initial hash if present
    if (typeof window !== "undefined" && window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      if (NAV_ITEMS.some((item) => item.id === hash)) {
        setActiveSection(hash);
      }
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Bottom of page -> contact is active
      if (scrollY + windowHeight >= docHeight - 80) {
        setActiveSection("contact");
        return;
      }

      // Top of page (Hero section)
      if (scrollY < 180) {
        setActiveSection("");
        return;
      }

      // Track sections by their bounding rects in the viewport
      const domSections = [
        { id: "work", el: document.getElementById("work") },
        { id: "work", el: document.getElementById("professional") },
        { id: "skills", el: document.getElementById("skills") },
        { id: "about", el: document.getElementById("about") },
        { id: "experience", el: document.getElementById("experience") },
        { id: "contact", el: document.getElementById("contact") },
      ];

      const threshold = 180;
      let current = "";

      for (const section of domSections) {
        if (section.el) {
          const rect = section.el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom > 0) {
            current = section.id;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    closeMenu();
  };

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="nav-pill">
        {/* Brand Monogram */}
        <Link href="/" className="brand" aria-label="Ibrahim Aliy - Home" onClick={() => setActiveSection("")}>
          <span>IA</span>
          <span className="brand-dot">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`nav-link ${isActive ? "nav-link--active" : ""}`}
                aria-current={isActive ? "true" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
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
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`mobile-nav-link ${isActive ? "mobile-nav-link--active" : ""}`}
                  aria-current={isActive ? "true" : undefined}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight
                    size={15}
                    className={
                      isActive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-zinc-500"
                    }
                  />
                </Link>
              );
            })}
            <a
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              className="mobile-nav-link"
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
              className="mobile-nav-link"
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
              className="mobile-nav-link"
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
