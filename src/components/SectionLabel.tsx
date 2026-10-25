import { Kolam } from "./Ornaments";

type SectionLabelProps = {
  index: string;
  children: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionLabel({
  index,
  children,
  align = "left",
  className = "",
}: SectionLabelProps) {
  return (
    <div
      className={`flex items-center gap-3 text-gold-text ${
        align === "center" ? "justify-center" : ""
      } ${className}`}
    >
      <Kolam className="h-3.5 w-3.5 shrink-0" />
      <span className="eyebrow">
        {index} <span className="mx-1 opacity-50">/</span> {children}
      </span>
      <span className="h-px w-8 bg-current opacity-35" aria-hidden="true" />
    </div>
  );
}
