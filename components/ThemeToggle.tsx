"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  variant?: "compact" | "segmented";
  className?: string;
}

export function ThemeToggle({ variant = "compact", className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render an invisible placeholder during SSR to prevent layout shift
    return (
      <div
        className={`h-7 w-7 rounded-full border border-transparent ${className}`}
        aria-hidden="true"
      />
    );
  }

  // Toggle between dark and light
  const handleToggle = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const getLabel = () => {
    return resolvedTheme === "dark" ? "Theme: Dark" : "Theme: Light";
  };

  const getNextModeName = () => {
    return resolvedTheme === "dark" ? "Switch to Light mode" : "Switch to Dark mode";
  };

  if (variant === "segmented") {
    return (
      <div
        className={`inline-flex items-center rounded-full p-0.5 border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900/80 text-xs font-mono ${className}`}
        role="radiogroup"
        aria-label="Color theme selection"
      >
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
            resolvedTheme === "dark"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          role="radio"
          aria-checked={resolvedTheme === "dark"}
          title="Switch to dark mode"
        >
          <Moon size={13} />
          <span>Dark</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
            resolvedTheme === "light"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          role="radio"
          aria-checked={resolvedTheme === "light"}
          title="Switch to light mode"
        >
          <Sun size={13} />
          <span>Light</span>
        </button>
      </div>
    );
  }

  // Compact circular button
  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative inline-flex items-center justify-center h-7 w-7 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 transition-all focus-visible:outline-2 focus-visible:outline-emerald-500 ${className}`}
      aria-label={`${getLabel()}. Click to ${getNextModeName().toLowerCase()}`}
      title={`${getLabel()} · Click to ${getNextModeName().toLowerCase()}`}
    >
      {resolvedTheme === "light" ? (
        <Sun size={14} className="text-amber-500" />
      ) : (
        <Moon size={14} className="text-blue-400" />
      )}
    </button>
  );
}
