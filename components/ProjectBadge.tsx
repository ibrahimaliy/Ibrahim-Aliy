import { ProjectKind, ProjectLevel } from "@/types/project";

export function ProjectBadge({
  kind,
  level,
  label,
}: {
  kind: ProjectKind;
  level?: ProjectLevel;
  label?: string;
}) {
  if (level === "flagship") {
    return (
      <span className="project-badge project-badge--flagship">
        {label ?? "Flagship Personal Project"}
      </span>
    );
  }

  return (
    <span className={`project-badge project-badge--${kind}`}>
      {label ?? (kind === "personal" ? "Personal Project" : "Team Project")}
    </span>
  );
}
