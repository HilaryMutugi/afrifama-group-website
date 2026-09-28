import { ImageIcon } from "lucide-react";

export function ImagePlaceholder({
  slot,
  label = "Afrifama photography",
  className = "",
  inverted = false,
}: {
  slot: string;
  label?: string;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <div
      data-image-slot={slot}
      role="img"
      aria-label={`${label} placeholder`}
      className={`grid place-items-center overflow-hidden border ${
        inverted
          ? "border-primary-foreground/20 bg-primary-foreground/5 text-primary-foreground/65"
          : "border-border bg-secondary/65 text-muted-foreground"
      } ${className}`}
    >
      <div className="flex max-w-56 flex-col items-center px-5 text-center">
        <ImageIcon className="size-7 text-gold" aria-hidden="true" />
        <p className="mt-3 font-display text-sm font-bold">{label}</p>
        <p className="mt-1 text-xs opacity-75">Photo placeholder</p>
      </div>
    </div>
  );
}