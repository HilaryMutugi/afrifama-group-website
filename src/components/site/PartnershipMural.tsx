const muralSteps = [
  { label: "Readiness", detail: "Housing · water · care", x: 92, y: 112 },
  { label: "Agreement", detail: "Roles set in writing", x: 282, y: 222 },
  { label: "Placement", detail: "Birds · feed · training", x: 470, y: 128 },
  { label: "Production", detail: "Records · monitoring", x: 650, y: 286 },
  { label: "Market", detail: "Coordination · review", x: 470, y: 458 },
  { label: "Growth", detail: "A capable farm enterprise", x: 220, y: 500 },
] as const;

export function PartnershipMural() {
  return (
    <div className="partnership-mural overflow-hidden border-y border-primary-foreground/15 bg-primary-deep text-primary-foreground">
      <svg
        viewBox="0 0 760 620"
        role="img"
        aria-labelledby="partnership-mural-title partnership-mural-description"
        className="mx-auto block h-auto w-full max-w-6xl"
      >
        <title id="partnership-mural-title">The Afrifama farmer partnership journey</title>
        <desc id="partnership-mural-description">
          An illustrated path connects farm readiness, agreement, flock placement, production,
          market coordination and the growth of a capable farm enterprise.
        </desc>
        <g className="text-primary-foreground/10" fill="none" stroke="currentColor">
          <path d="M-60 92C95 12 161 172 307 92S551 12 820 106" strokeWidth="2" />
          <path d="M-40 518C89 438 186 590 330 514S584 435 802 526" strokeWidth="2" />
          <path d="M55 22C24 180 124 292 52 410S91 581 190 650" strokeWidth="1.5" />
          <path d="M714-20C635 116 745 260 664 365S662 544 730 650" strokeWidth="1.5" />
        </g>
        <g className="text-gold/25" fill="currentColor">
          {Array.from({ length: 26 }, (_, index) => (
            <circle key={index} cx={30 + ((index * 91) % 700)} cy={45 + ((index * 67) % 520)} r="2" />
          ))}
        </g>
        <path
          d="M92 112C148 120 202 180 282 222C348 256 405 178 470 128C535 80 618 189 650 286C682 383 566 425 470 458C371 492 302 520 220 500"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          className="mural-path text-gold"
        />
        <g className="text-terracotta" fill="currentColor">
          <path d="M84 78c6-18 23-29 40-27-2 18-17 33-40 27Z" />
          <path d="M487 91c19-8 37 0 46 15-15 10-36 6-46-15Z" />
          <path d="M198 467c-10-18-5-38 10-49 12 14 10 37-10 49Z" />
        </g>
        {muralSteps.map((step, index) => (
          <g key={step.label} transform={`translate(${step.x} ${step.y})`}>
            <circle r="29" className="fill-primary-deep stroke-gold" strokeWidth="3" />
            <text y="6" textAnchor="middle" className="fill-gold font-display text-[16px] font-bold">
              {String(index + 1).padStart(2, "0")}
            </text>
            <text y="52" textAnchor="middle" className="fill-primary-foreground font-display text-[18px] font-bold">
              {step.label}
            </text>
            <text y="73" textAnchor="middle" className="fill-primary-foreground/65 text-[13px]">
              {step.detail}
            </text>
          </g>
        ))}
        <g transform="translate(522 505)" className="text-primary-foreground/20" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M0 54c32-8 55-31 68-66 14 34 38 57 72 66" />
          <path d="M68-12v87M36 17c20 3 31 12 32 28M101 17c-20 3-31 12-33 28" />
          <ellipse cx="68" cy="82" rx="52" ry="12" />
        </g>
      </svg>
    </div>
  );
}