import { ImageIcon } from "lucide-react";
import type { CSSProperties } from "react";
import { siteImages } from "@/content/images";

export function ImagePlaceholder({
  slot,
  label = "Afrifama photography",
  className = "",
  inverted = false,
  showLabel = true,
  priority,
  onReady,
}: {
  slot: string;
  label?: string;
  className?: string;
  inverted?: boolean;
  showLabel?: boolean;
  priority?: boolean;
  onReady?: () => void;
}) {
  const image = siteImages[slot];
  if (image) {
    const assetUrl = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
    const sources = image.srcSet
      .split(", ")
      .map((source) => assetUrl(source))
      .join(", ");
    return (
      <div
        data-image-slot={slot}
        className={`site-image relative overflow-hidden bg-secondary ${className}`}
        style={
          {
            "--image-position": image.position,
            "--image-mobile-position": image.mobilePosition,
          } as CSSProperties
        }
      >
        <img
          src={assetUrl(image.src)}
          srcSet={sources}
          sizes={
            slot === "feeds-range"
              ? "(min-width: 1280px) 1216px, calc(100vw - 40px)"
              : "(min-width: 1280px) 600px, (min-width: 1024px) 50vw, calc(100vw - 40px)"
          }
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={(priority ?? image.priority) ? "eager" : "lazy"}
          fetchPriority={(priority ?? image.priority) ? "high" : "auto"}
          onLoad={onReady}
          ref={(imageElement) => {
            if (imageElement?.complete && imageElement.naturalWidth > 0) onReady?.();
          }}
          decoding="async"
          className="absolute inset-0 size-full"
          style={{ objectFit: image.fit as CSSProperties["objectFit"] }}
        />
      </div>
    );
  }
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
      {showLabel ? (
        <div className="flex max-w-56 flex-col items-center px-5 text-center">
          <ImageIcon className="size-7 text-gold" aria-hidden="true" />
          <p className="mt-3 font-display text-sm font-bold">{label}</p>
          <p className="mt-1 text-xs opacity-75">Photo placeholder</p>
        </div>
      ) : null}
    </div>
  );
}
