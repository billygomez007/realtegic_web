export type StatusBadgeType =
  | "research"
  | "in-development"
  | "internal"
  | "private-preview"
  | "public-preview"
  | "available"
  | "coming-soon"
  | "beta";

export interface StatusBadgeProps {
  status?: StatusBadgeType;
  type?: StatusBadgeType;
  children: React.ReactNode;
  className?: string;
}

export default function StatusBadge({
  status,
  type,
  children,
  className = "",
}: StatusBadgeProps) {
  const resolvedStatus = status ?? type ?? "available";

  return (
    <span className={`status-badge status-badge-${resolvedStatus} ${className}`}>
      {children}
    </span>
  );
}
