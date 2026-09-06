"use client";

import React, { useState } from "react";
import { Mail, Phone, Copy, Check, ArrowUpRight, Download, Github, Linkedin } from "lucide-react";

export function ContactHub() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "ibrahimaliy1907@gmail.com";
  const phone = "+234 810 362 8977";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container contact-card">
        <p className="eyebrow">GET IN TOUCH</p>
        <h2 className="break-words">Have a product worth building?</h2>
        <p className="mt-3 max-w-xl text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
          I’m currently available for Frontend Developer roles, Software Engineering
          internships, and select product contracts. Whether you have an open role, an
          architectural question, or a project in mind, my inbox is open.
        </p>

        {/* Contact Info Group */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3 flex-wrap">
          {/* Email */}
          <div className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] px-3 sm:px-3.5 py-2 font-mono text-[11.5px] sm:text-xs text-zinc-800 dark:text-zinc-200 w-full sm:w-auto max-w-full overflow-hidden shadow-xs dark:shadow-none">
            <Mail size={13} className="text-zinc-500 dark:text-zinc-400 shrink-0" />
            <a href={`mailto:${email}`} className="hover:text-emerald-600 dark:hover:text-white transition truncate">
              {email}
            </a>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="ml-auto text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200 shrink-0 p-1"
              title="Copy email"
            >
              {copiedEmail ? <Check size={13} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={13} />}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#09090b] px-3 sm:px-3.5 py-2 font-mono text-[11.5px] sm:text-xs text-zinc-800 dark:text-zinc-200 w-full sm:w-auto max-w-full overflow-hidden shadow-xs dark:shadow-none">
            <Phone size={13} className="text-zinc-500 dark:text-zinc-400 shrink-0" />
            <a href="tel:+2348103628977" className="hover:text-emerald-600 dark:hover:text-white transition truncate">
              {phone}
            </a>
            <button
              type="button"
              onClick={handleCopyPhone}
              className="ml-auto text-zinc-400 hover:text-zinc-800 dark:text-zinc-500 dark:hover:text-zinc-200 shrink-0 p-1"
              title="Copy phone"
            >
              {copiedPhone ? <Check size={13} className="text-emerald-500 dark:text-emerald-400" /> : <Copy size={13} />}
            </button>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 pt-6 border-t border-zinc-200 dark:border-zinc-800/80">
          <a
            className="button button--primary justify-center text-xs sm:text-sm"
            href={`mailto:${email}`}
          >
            <span>Send email directly</span>
            <ArrowUpRight size={14} />
          </a>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              className="button button--secondary flex-1 sm:flex-initial justify-center text-xs"
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={11} />
            </a>

            <a
              className="button button--secondary flex-1 sm:flex-initial justify-center text-xs"
              href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={11} />
            </a>

            <a
              className="button button--secondary flex-1 sm:flex-initial justify-center text-xs"
              href="https://x.com/ibrahimaliy_19"
              target="_blank"
              rel="noreferrer"
            >
              <span className="font-mono font-bold text-xs">𝕏</span>
              <span className="hidden sm:inline">Twitter</span>
              <ArrowUpRight size={11} />
            </a>
          </div>

          <a
            className="button button--secondary justify-center text-xs sm:text-sm"
            href="/Ibrahim-Aliy-Resume.pdf"
            download="Ibrahim-Aliy-Resume.pdf"
          >
            <Download size={14} />
            <span>Download Résumé (PDF)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
