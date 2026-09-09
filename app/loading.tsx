export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 rounded-full border-2 border-[var(--border)] border-t-emerald-600 dark:border-t-emerald-400 animate-spin" />
        <span className="font-mono text-xs text-[var(--muted)] tracking-wider uppercase">
          Loading interface...
        </span>
      </div>
    </div>
  );
}
