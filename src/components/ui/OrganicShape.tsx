import { cn } from "@/lib/utils";

interface OrganicShapeProps {
  className?: string;
  variant?: "blob" | "curve";
}

export function OrganicShape({ className, variant = "blob" }: OrganicShapeProps) {
  if (variant === "curve") {
    return (
      <svg
        className={cn("pointer-events-none absolute", className)}
        viewBox="0 0 400 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 80 C100 20, 300 100, 400 40 L400 120 L0 120 Z"
          fill="currentColor"
          opacity="0.06"
        />
      </svg>
    );
  }

  return (
    <div
      className={cn(
        "organic-blob pointer-events-none absolute bg-lavender/40",
        className
      )}
      aria-hidden="true"
    />
  );
}
