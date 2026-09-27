"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Eye,
  Sparkles,
  Printer,
} from "lucide-react";
import { useCvModal } from "./CvModalContext";
import { CvDocumentView } from "./CvDocumentView";

export function CvPreviewModal() {
  const { isOpen, closeCv } = useCvModal();
  const [viewMode, setViewMode] = useState<"document" | "pdf">("document");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeCv();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeCv]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.open("/Ibrahim-Aliy-Resume.pdf", "_blank")?.print();
  };

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label="Curriculum Vitae Preview"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeCv();
      }}
    >
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl h-[94vh] max-h-[960px] bg-zinc-100 dark:bg-[#0c0c0f] border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-zinc-900 dark:text-zinc-100">
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 bg-white dark:bg-[#09090b] border-b border-zinc-200 dark:border-zinc-800/80 shrink-0">
          {/* Identity & Status */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-600 dark:text-emerald-400 shrink-0">
              <FileText size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 leading-tight">
                  Ibrahim Aliy · CV
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2 py-0.5 text-[10px] font-mono font-medium text-emerald-700 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  1-Page Verified
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 font-mono">
                Frontend Developer · Outcess Solutions · Nigeria / Remote
              </p>
            </div>
          </div>

          {/* Controls & Actions */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap justify-between sm:justify-end">
            {/* View Mode Switcher (Desktop or large screens) */}
            <div className="inline-flex rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100/80 dark:bg-zinc-900/60 p-0.5 text-xs font-mono">
              <button
                type="button"
                onClick={() => setViewMode("document")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition ${
                  viewMode === "document"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold shadow-xs"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
                title="Interactive Document View"
              >
                <Eye size={12} />
                <span>Document</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode("pdf")}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition ${
                  viewMode === "pdf"
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold shadow-xs"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                }`}
                title="Raw PDF Vector Preview"
              >
                <FileText size={12} />
                <span>PDF Stream</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-1.5">
              <a
                href="/Ibrahim-Aliy-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="hidden md:inline-flex items-center gap-1 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] px-2.5 py-1.5 text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                title="Open PDF in new tab"
              >
                <ExternalLink size={13} />
                <span className="hidden lg:inline">Open Tab</span>
              </a>

              <a
                href="/Ibrahim-Aliy-Resume.pdf"
                download="Ibrahim-Aliy-Resume.pdf"
                className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-white dark:text-zinc-950 transition shadow-xs"
              >
                <Download size={13} />
                <span>Download PDF</span>
              </a>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeCv}
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-[#0c0c0e] text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition ml-1"
                aria-label="Close CV Preview"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Modal Main Body */}
        <div className="relative flex-1 overflow-y-auto bg-zinc-200/70 dark:bg-[#09090b] p-3 sm:p-6 md:p-8 flex items-start justify-center">
          {viewMode === "document" ? (
            <CvDocumentView />
          ) : (
            <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center">
              {isMobile ? (
                <div className="max-w-md p-6 text-center bg-white dark:bg-[#0c0c0e] rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-md">
                  <FileText className="mx-auto text-emerald-500 mb-3" size={32} />
                  <h4 className="font-bold text-sm mb-1 text-zinc-900 dark:text-zinc-100">
                    PDF Mobile Viewing
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4">
                    For the best experience on mobile devices, use the Interactive Document view or open the raw PDF in a new tab.
                  </p>
                  <div className="flex gap-2 justify-center">
                    <button
                      type="button"
                      onClick={() => setViewMode("document")}
                      className="button button--secondary text-xs px-3 py-1.5"
                    >
                      Use Document View
                    </button>
                    <a
                      href="/Ibrahim-Aliy-Resume.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="button button--primary text-xs px-3 py-1.5"
                    >
                      Open Raw PDF
                    </a>
                  </div>
                </div>
              ) : (
                <iframe
                  src="/Ibrahim-Aliy-Resume.pdf#toolbar=0&navpanes=0&view=FitH"
                  className="w-full h-full border-0 rounded-xl bg-white shadow-lg"
                  title="Ibrahim Aliy Resume PDF"
                />
              )}
            </div>
          )}
        </div>

        {/* Modal Bottom Status Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-white dark:bg-[#09090b] border-t border-zinc-200 dark:border-zinc-800/80 text-[11px] text-zinc-500 font-mono shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span>Ready for recruitment & contract inquiries</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="mailto:ibrahimaliy1907@gmail.com"
              className="hover:text-zinc-900 dark:hover:text-white transition"
            >
              ibrahimaliy1907@gmail.com
            </a>
            <span>·</span>
            <a
              href="https://github.com/ibrahimaliy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="https://www.linkedin.com/in/ibrahim-aliy-1ba7a3434"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
