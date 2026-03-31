"use client";

interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
}

export default function SectionLabel({
  children,
  color = "var(--color-orange)",
}: SectionLabelProps) {
  return (
    <div
      style={{
        fontSize: "0.79rem",
        fontWeight: 600,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color,
        marginBottom: "0.4625rem",
      }}
    >
      {children}
    </div>
  );
}
