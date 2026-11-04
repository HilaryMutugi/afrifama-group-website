import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Egg } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/content/images";
import { company, homeClosing, homeEditorial, homeHero, pillars, whyAfrifama } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: homeHero.metaTitle },
      { property: "og:title", content: homeHero.metaTitle },
      { property: "og:url", content: "/" },
      { name: "description", content: homeHero.metaDescription },
      { property: "og:description", content: homeHero.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/` }],
  }),
  component: Home,
});

const asset = (src: string) => `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;

/** Renders a supplied Afrifama photograph from the image registry. */
function SuppliedPhoto({
  slot,
  caption,
  sizes,
  className = "",
  priority = false,
}: {
  slot: string;
  caption: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  const image = siteImages[slot];
  if (!image) return null;
  return (
    <figure className="min-w-0">
      <div className={`overflow-hidden bg-secondary ${className}`}>
        <img
          src={asset(image.src)}
          srcSet={image.srcSet.split(", ").map(asset).join(", ")}
          sizes={sizes}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="size-full object-cover"
        />
      </div>
      <figcaption className="mt-2 text-xs leading-snug text-muted-foreground">{caption}</figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pt-10 pb-12 sm:pt-14 lg:grid-cols-12 lg:gap-14 lg:px-8 lg:pt-20 lg:pb-20">
        <div className="min-w-0 lg:col-span-6 lg:self-center">
          <p className="eyebrow text-terracotta">{homeHero.eyebrow}</p>
          <h1 className="mt-4 text-[clamp(2.25rem,4.6vw,3.75rem)] leading-[1.04] font-extrabold text-balance">
            {homeHero.title}
          </h1>
          <p className="mt-6 max-w-[54ch] body-copy text-muted-foreground">{homeHero.lead}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <Button asChild size="lg" className="min-h-11">
              <a href={homeHero.primaryCta.href}>
                {homeHero.primaryCta.label}
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Link
              to={homeHero.secondaryCta.to}
              className="inline-flex min-h-11 items-center font-display text-sm font-bold text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {homeHero.secondaryCta.label}
            </Link>
          </div>
          <dl className="mt-10 grid gap-4 border-t border-border pt-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-display font-bold text-foreground">Operating today</dt>
              <dd className="mt-1 leading-snug text-muted-foreground">{homeHero.statusToday.join(" · ")}</dd>
            </div>
            <div>
              <dt className="font-display font-bold text-foreground">In development</dt>
              <dd className="mt-1 leading-snug text-muted-foreground">{homeHero.statusDeveloping}</dd>
            </div>
          </dl>
        </div>
        <div className="min-w-0 lg:col-span-6">
          <SuppliedPhoto
            slot={homeEditorial.heroImage}
            caption={homeEditorial.heroCaption}
            sizes="(min-width: 1024px) 46vw, calc(100vw - 2.5rem)"
            className="aspect-[4/3] rounded-sm lg:aspect-[5/6]"
            priority
          />
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const { proof } = homeEditorial;
  return (
    <section aria-labelledby="proof-title" className="bg-secondary/50">
      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
          <div>
            <p className="eyebrow text-terracotta">{proof.eyebrow}</p>
            <h2 id="proof-title" className="mt-3 text-[clamp(1.6rem,2.6vw,2.25rem)] font-extrabold">
              {proof.title}
            </h2>
          </div>
          <p className="font-display text-sm font-bold text-muted-foreground">{proof.asOf}</p>
        </div>
        <dl className="mt-10 grid border-t border-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
          {proof.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col-reverse gap-2 border-b border-foreground/15 py-6 sm:pr-6 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0"
            >
              <dt className="max-w-[26ch] text-sm leading-snug text-muted-foreground">{item.label}</dt>
              <dd className="font-display text-5xl font-extrabold text-primary">{item.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[70ch] text-sm text-muted-foreground">{proof.caution}</p>
      </div>
    </section>
  );
}

function Businesses() {
  const { businesses } = homeEditorial;
  const operating = pillars.filter((p) => p.status === "Operational");
  const developing = pillars.filter((p) => p.status !== "Operational");
  return (
    <section id="how-it-fits" aria-labelledby="businesses-title" className="scroll-mt-20 bg-background">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow text-terracotta">{businesses.eyebrow}</p>
            <h2 id="businesses-title" className="mt-3 text-[clamp(1.75rem,3.2vw,2.75rem)] leading-tight font-extrabold text-balance">
              {businesses.title}
            </h2>
          </div>
          <p className="max-w-[48ch] body-copy text-muted-foreground lg:col-span-5 lg:self-end">{businesses.lead}</p>
        </div>

        <ol className="mt-12 border-t border-foreground/15">
          {operating.map((pillar, index) => {
            const photo = businesses.images[pillar.to];
            const flip = index % 2 === 1;
            return (
              <li key={pillar.title} className="border-b border-foreground/15 py-10 lg:py-14">
                <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
                  <div className={`min-w-0 ${photo ? "lg:col-span-6" : "lg:col-span-8"} ${flip && photo ? "lg:order-2" : ""}`}>
                    <p className="font-display text-sm font-extrabold tracking-[0.16em] text-gold-foreground">
                      {String(index + 1).padStart(2, "0")}
                      {index < operating.length - 1 ? <span className="text-muted-foreground"> · then</span> : null}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-extrabold sm:text-3xl">{pillar.title}</h3>
                    <p className="mt-4 max-w-[52ch] body-copy text-muted-foreground">{pillar.summary}</p>
                    <ul className="mt-5 space-y-1.5 text-sm text-foreground">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2.5 h-px w-4 shrink-0 bg-terracotta" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={pillar.to}
                      className="mt-6 inline-flex min-h-11 items-center gap-2 font-display text-sm font-bold text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Read about {pillar.title}
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                  {photo ? (
                    <div className={`min-w-0 lg:col-span-6 ${flip ? "lg:order-1" : ""}`}>
                      <SuppliedPhoto
                        slot={photo.slot}
                        caption={photo.caption}
                        sizes="(min-width: 1024px) 46vw, calc(100vw - 2.5rem)"
                        className={index === 0 ? "aspect-[16/10] rounded-sm" : "mx-auto aspect-[4/5] max-w-sm rounded-sm lg:max-w-none lg:aspect-[16/11]"}
                      />
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ol>

        {developing.map((pillar) => (
          <div
            key={pillar.title}
            className="mt-10 grid gap-3 border-l-2 border-terracotta pl-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8"
          >
            <div className="min-w-0">
              <p className="font-display text-xs font-extrabold tracking-[0.16em] text-terracotta">IN DEVELOPMENT</p>
              <h3 className="mt-1 font-display text-lg font-bold">{pillar.title}</h3>
              <p className="mt-1 max-w-[70ch] text-sm text-muted-foreground">
                {pillar.summary} {businesses.developingNote}
              </p>
            </div>
            <Link
              to={pillar.to}
              className="inline-flex min-h-11 items-center gap-2 font-display text-sm font-bold text-primary hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              See the development plan
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyAfrifama() {
  return (
    <section aria-labelledby="why-title" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-32">
        <p className="eyebrow text-terracotta">{whyAfrifama.label}</p>
        <h2 id="why-title" className="mt-4 text-[clamp(2.25rem,5.4vw,4.5rem)] leading-[1.02] font-extrabold text-balance">
          {whyAfrifama.title}
        </h2>
        <p className="mt-8 max-w-[60ch] text-lg leading-relaxed text-muted-foreground">{whyAfrifama.lead}</p>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section aria-labelledby="closing-title" className="bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 lg:grid-cols-12 lg:items-end lg:px-8 lg:py-24">
        <div className="lg:col-span-8">
          <p className="eyebrow text-gold">{homeClosing.eyebrow}</p>
          <h2 id="closing-title" className="mt-3 text-[clamp(1.75rem,3.4vw,2.75rem)] leading-tight font-extrabold text-balance text-primary-foreground">
            {homeClosing.title}
          </h2>
          <p className="mt-5 max-w-[56ch] body-copy text-primary-foreground/80">{homeEditorial.closingLead}</p>
          <Button asChild variant="secondary" size="lg" className="mt-8 min-h-11">
            <Link to={homeClosing.action.to}>
              {homeClosing.action.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="hidden justify-end lg:col-span-4 lg:flex" aria-hidden="true">
          <Egg className="size-32 text-gold/40" strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Proof />
      <Businesses />
      <WhyAfrifama />
      <Closing />
    </>
  );
}
