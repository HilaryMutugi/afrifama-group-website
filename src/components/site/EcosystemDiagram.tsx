/**
 * Line diagram showing how nutrition, birds, farmers, field support and future
 * market linkages reinforce one another. Pure SVG — no photography needed.
 */
const nodes = [
  { label: "Nutrition", x: 50, y: 12 },
  { label: "Birds", x: 88, y: 38 },
  { label: "Markets", x: 74, y: 82 },
  { label: "Farmers", x: 26, y: 82 },
  { label: "Field support", x: 12, y: 38 },
];

export function EcosystemDiagram() {
  return (
    <figure className="relative">
      <svg
        viewBox="0 0 100 100"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram showing nutrition, birds, markets, farmers and field support connected in a single reinforcing poultry system"
      >
        <circle
          cx="50"
          cy="50"
          r="33"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.4"
          className="text-border"
        />
        {nodes.map((n, i) =>
          nodes.slice(i + 1).map((m) => (
            <line
              key={`${n.label}-${m.label}`}
              x1={n.x}
              y1={n.y}
              x2={m.x}
              y2={m.y}
              stroke="currentColor"
              strokeWidth="0.35"
              className="text-primary/25"
            />
          )),
        )}
        <circle cx="50" cy="50" r="11" className="fill-primary" />
        <text
          x="50"
          y="48.5"
          textAnchor="middle"
          className="fill-primary-foreground font-display"
          fontSize="4.2"
          fontWeight="700"
        >
          AFRIFAMA
        </text>
        <text
          x="50"
          y="53.5"
          textAnchor="middle"
          className="fill-primary-foreground/80"
          fontSize="3"
        >
          system
        </text>
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="6.4" className="fill-gold" />
            <text
              x={n.x}
              y={n.y + 1.3}
              textAnchor="middle"
              className="fill-gold-foreground font-display"
              fontSize="2.9"
              fontWeight="700"
            >
              {n.label}
            </text>
          </g>
        ))}
      </svg>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        Feed quality shapes bird performance, bird performance shapes farmer income, farmer records
        shape formulation, and growing volume makes market linkages possible.
      </figcaption>
    </figure>
  );
}
