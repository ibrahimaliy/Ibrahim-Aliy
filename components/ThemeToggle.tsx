"use client";

import React, { useState, useEffect } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useTheme, Theme } from "./ThemeProvider";

interface ThemeToggleProps {
  variant?: "compact" | "segmented";
  className?: string;
}

export function ThemeToggle({ variant = "compact", className = "" }: ThemeToggleProps) {
  const { theme, resolvedTheme, setTheme } = useTheme();
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

  // Cycle through: system -> light -> dark -> system
  const handleCycle = () => {
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  const getLabel = () => {
    if (theme === "system") return `Theme: System (${resolvedTheme})`;
    if (theme === "light") return "Theme: Light";
    return "Theme: Dark";
  };

  const getNextModeName = () => {
    if (theme === "system") return "Switch to Light mode";
    if (theme === "light") return "Switch to Dark mode";
    return "Switch to System preference (Auto)";
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
          onClick={() => setTheme("system")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
            theme === "system"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          role="radio"
          aria-checked={theme === "system"}
          title="Match operating system preference automatically"
        >
          <Laptop size={13} />
          <span>Auto</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
            theme === "light"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          role="radio"
          aria-checked={theme === "light"}
          title="Force light mode"
        >
          <Sun size={13} />
          <span>Light</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-colors ${
            theme === "dark"
              ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm font-semibold"
              : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
          }`}
          role="radio"
          aria-checked={theme === "dark"}
          title="Force dark mode"
        >
          <Moon size={13} />
          <span>Dark</span>
        </button>
      </div>
    );
  }

  // Compact circular button
  return (
    <button
      type="button"
      onClick={handleCycle}
      className={`relative inline-flex items-center justify-center h-7 w-7 rounded-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white border border-zinc-200/80 dark:border-zinc-800 bg-zinc-100/70 dark:bg-zinc-900/60 hover:bg-zinc-200/80 dark:hover:bg-zinc-800 transition-all focus-visible:outline-2 focus-visible:outline-emerald-500 ${className}`}
      aria-label={`${getLabel()}. Click to ${getNextModeName().toLowerCase()}`}
      title={`${getLabel()} · Click to ${getNextModeName().toLowerCase()}`}
    >
      {theme === "system" ? (
        <span className="relative flex items-center justify-center">
          <Laptop size={14} />
          <span
            className="absolute -bottom-1 -right-1 h-1.5 w-1.5 rounded-full bg-emerald-500"
            title="Auto-syncing with OS"
          />
        </span>
      ) : theme === "light" ? (
        <Sun size={14} className="text-amber-500" />
      ) : (
        <Moon size={14} className="text-blue-400" />
      )}
    </button>
  );
}
