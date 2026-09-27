import { kenyaCounties, kilifiCounty, mariakani } from "./kenyaMapPaths";

/** Original Afrifama-style map. Shows only where Afrifama is active: Kilifi County, with Mariakani marked. */
export function KenyaMap({ className = "" }: { className?: string }) {
  return (
    <figure className={`rounded-2xl border border-border bg-secondary/50 p-4 ${className}`}>
      <svg viewBox="0 0 400 440" role="img" aria-labelledby="kenya-map-title" className="h-auto w-full">
        <title id="kenya-map-title">Map of Kenya with Kilifi County highlighted and Mariakani marked</title>
        <path d={kenyaCounties} className="fill-primary/25 stroke-background" strokeWidth={0.8} />
        <path d={kilifiCounty} className="fill-gold stroke-background" strokeWidth={1} />
        <circle cx={mariakani.x} cy={mariakani.y} r={5} className="fill-terracotta stroke-background" strokeWidth={2} />
        <line x1={mariakani.x} y1={mariakani.y} x2={mariakani.x - 70} y2={mariakani.y - 40} className="stroke-foreground" strokeWidth={1} />
        <text x={mariakani.x - 74} y={mariakani.y - 46} textAnchor="end" className="fill-foreground font-display" fontSize={18} fontWeight={700}>Mariakani</text>
        <text x={mariakani.x - 74} y={mariakani.y - 26} textAnchor="end" className="fill-muted-foreground" fontSize={14}>Kilifi County</text>
      </svg>
      <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Afrifama currently operates in Kilifi County only. Boundaries: geoBoundaries (public domain).
      </figcaption>
    </figure>
  );
}
