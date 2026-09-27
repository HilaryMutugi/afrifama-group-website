const steps = [
  { title: "Raw materials", detail: "Inputs selected", x: 72, icon: "grain" },
  { title: "Afrifama Feeds", detail: "Nutrition controlled", x: 238, icon: "mill" },
  { title: "Healthy birds", detail: "Flocks managed", x: 410, icon: "bird" },
  { title: "Capable farmers", detail: "Knowledge applied", x: 580, icon: "records" },
  { title: "Eggs & markets", detail: "Value realised", x: 742, icon: "egg" },
] as const;

function MuralIcon({ icon }: { icon: (typeof steps)[number]["icon"] }) {
  if (icon === "grain") return <path d="M0 23V-22M0-12c-17-1-23-10-24-22 15 0 24 7 24 22Zm0 13C17 0 23-9 24-21 9-21 1-14 0 1Zm0 10c-15-1-21-9-22-20 13 0 21 7 22 20Z" />;
  if (icon === "mill") return <><path d="M-22 23h44L15-12h-30Z" /><path d="M-12-13h24M-8 4h16M0 4v19" /></>;
  if (icon === "bird") return <><path d="M-24 11c5-20 23-29 40-21 13 6 14 22 2 31H-9c-8-1-14-4-15-10Z" /><path d="M14-9c3-10 10-15 18-14-1 9-6 15-16 16M-4 22v11m17-11v11" /></>;
  if (icon === "records") return <><path d="M-21-24h42v50h-42Z" /><path d="M-11-11h22M-11 0h22M-11 11h14" /><circle cx="-30" cy="-2" r="10" /></>;
  return <><path d="M0-28c19 24 25 38 21 49C17 32 8 37 0 37s-17-5-21-16c-4-11 2-25 21-49Z" /><path d="M-35 34c22-7 48-7 70 0" /></>;
}

export function AboutSystemMural() {
  return (
    <figure className="overflow-hidden border-y border-primary-foreground/15 bg-primary-deep text-primary-foreground">
      <svg viewBox="0 0 820 430" role="img" aria-labelledby="about-mural-title about-mural-desc" className="hidden h-auto w-full sm:block">
        <title id="about-mural-title">The connected Afrifama poultry system</title>
        <desc id="about-mural-desc">Raw materials move through Afrifama Feeds to healthy birds, capable farmers, eggs and markets. Future genetics and hatchery development supports reliable birds.</desc>
        <g fill="none" stroke="currentColor" className="text-primary-foreground/10">
          <path d="M-20 74C117 8 168 143 310 65S579 17 860 90" />
          <path d="M-20 348C110 285 219 411 363 342S649 288 850 361" />
          <path d="M62-30C17 104 116 222 50 344" />
          <path d="M774-30C696 105 798 232 742 450" />
        </g>
        <g fill="currentColor" className="text-gold/25">
          {Array.from({ length: 28 }, (_, index) => <circle key={index} cx={22 + ((index * 107) % 780)} cy={24 + ((index * 61) % 370)} r="2" />)}
        </g>
        <path d="M72 190C140 115 183 114 238 190S353 260 410 190 522 117 580 190 685 252 742 190" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="about-mural-path text-gold" />
        {steps.map((step, index) => (
          <g key={step.title} transform={`translate(${step.x} 190)`}>
            <circle r="46" className="fill-primary-deep stroke-gold" strokeWidth="2" />
            <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground" transform="scale(.72)"><MuralIcon icon={step.icon} /></g>
            <text y="72" textAnchor="middle" className="fill-primary-foreground font-display text-[15px] font-bold">{step.title}</text>
            <text y="93" textAnchor="middle" className="fill-primary-foreground/60 text-[12px]">{step.detail}</text>
            <text y="-61" textAnchor="middle" className="fill-gold text-[11px] font-bold">0{index + 1}</text>
          </g>
        ))}
        <g transform="translate(410 338)">
          <path d="M-169 0H169" className="stroke-terracotta" strokeWidth="2" strokeDasharray="5 7" />
          <path d="M0 0V-74" className="stroke-terracotta" strokeWidth="2" />
          <text y="27" textAnchor="middle" className="fill-terracotta font-display text-[13px] font-bold">FUTURE FOUNDATION</text>
          <text y="48" textAnchor="middle" className="fill-primary-foreground text-[17px] font-bold">Genetics &amp; Hatchery Development</text>
          <text y="69" textAnchor="middle" className="fill-primary-foreground/60 text-[12px]">In development · supporting future bird reliability</text>
        </g>
      </svg>

      <div className="relative px-5 py-10 sm:hidden">
        <div className="absolute top-16 bottom-36 left-[2.75rem] w-px bg-gold/55" aria-hidden="true" />
        <ol className="relative space-y-7">
          {steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[3rem_minmax(0,1fr)] items-center gap-4">
              <span className="grid size-10 place-items-center rounded-full border-2 border-gold bg-primary-deep font-display text-xs font-bold text-gold">0{index + 1}</span>
              <div><p className="font-display text-base font-bold">{step.title}</p><p className="mt-0.5 text-sm text-primary-foreground/60">{step.detail}</p></div>
            </li>
          ))}
        </ol>
        <div className="mt-10 border-l-2 border-terracotta pl-5">
          <p className="eyebrow text-terracotta">Future foundation</p>
          <p className="mt-2 font-display text-lg font-bold">Genetics &amp; Hatchery Development</p>
          <p className="mt-1 text-sm text-primary-foreground/65">In development — supporting future bird reliability.</p>
        </div>
      </div>
    </figure>
  );
}