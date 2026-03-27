"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
}

/** Orange uppercase section label — used across many slide types */
export default function SectionLabel({
  children,
  color = "var(--color-orange)",
}: SectionLabelProps) {
  return (
    <div
      style={{
        fontSize: "0.8125rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        marginBottom: "0.5rem",
      }}
    >
      {children}
    </div>
  );
}
