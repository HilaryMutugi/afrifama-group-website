import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wheat, Egg, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, StatusBadge } from "@/components/site/primitives";
import { EarlyProgressSection } from "@/components/site/EarlyProgress";
import { CtaBand } from "@/components/site/CtaBand";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { HomePhotoSlideshow } from "@/components/site/HomePhotoSlideshow";
import {
  aboutStory,
  company,
  homeBusinesses,
  homeHero,
  pillars,
  problems,
  fieldNotes,
  valueChain,
  whyAfrifama,
  imageSlots,
  homePhotoStory,
} from "@/content/site";

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

const chainIcons = [Wheat, Egg, Users, Store];

const problemImagePositions = [
  "object-[55%_48%]",
  "object-[55%_48%]",
  "object-[54%_46%]",
  "object-[48%_48%]",
  "object-[56%_46%]",
  "object-[58%_44%]",
] as const;

function responsiveStorySources(src: string) {
  const stem = src.slice(0, -5);
  return `${stem}-640.webp 640w, ${stem}-960.webp 960w, ${src} 1448w`;
}

function responsiveHeroSources(src: string) {
  const stem = src.slice(0, -5);
  return `${stem}-960.webp 960w, ${stem}-1400.webp 1400w, ${src} 1672w`;
}

function Hero() {
  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pt-8 pb-12 sm:pt-12 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-12">
        <div className="lg:col-span-6">
          <p className="eyebrow text-terracotta">{homeHero.eyebrow}</p>
          {/* Slightly smaller than h1-page so both hero buttons stay above the fold. */}
          <h1 className="mt-4 text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-extrabold">
            {homeHero.title}
          </h1>
          <p className="mt-4 max-w-xl body-copy text-muted-foreground sm:mt-5">{homeHero.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <Button asChild size="lg">
              <Link to="/businesses">
                Explore Our Work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Partner With Afrifama</Link>
            </Button>
          </div>
          <p className="mt-8 border-l-2 border-gold pl-4 font-display text-sm font-semibold text-muted-foreground">
            {company.positioning}
          </p>
        </div>
        <div className="lg:col-span-6">
          <HomePhotoSlideshow />
        </div>
      </div>
    </div>
  );
}

function ValueChainStrip() {
  return (
    <div className="border-b border-border bg-background">
      <ol className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {valueChain.map((step, i) => {
          const Icon = chainIcons[i] ?? Wheat;
          return (
            <li key={step.title} className="flex items-start gap-3 lg:px-5 lg:first:pl-0">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="flex items-center gap-2 font-display text-base font-bold">
                  {step.title}
                  {i < valueChain.length - 1 ? (
                    <ArrowRight className="hidden size-4 text-gold lg:inline" aria-hidden="true" />
                  ) : null}
                </p>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">{step.body}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <ValueChainStrip />

      <Section tone="muted" compact>
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta">{aboutStory.title}</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              {aboutStory.opening}
            </h2>
            <ImagePlaceholder
              slot={imageSlots.home.story}
              className="mt-5 aspect-[4/3] w-full rounded-xl"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="border-l-2 border-gold pl-5 body-copy text-muted-foreground">
              {aboutStory.scene}
            </p>
            <Link
              to="/about"
              className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
            >
              {aboutStory.readMore}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section compact>
        <SectionHeading
          eyebrow={homeBusinesses.eyebrow}
          title={homeBusinesses.title}
          lead={homeBusinesses.lead}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <Link
              key={pillar.title}
              to={pillar.to}
              className="group flex h-full flex-col rounded-2xl border border-border bg-secondary/55 p-6 transition-[transform,border-color,background-color] duration-200 ease-out focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hover:-translate-y-0.5 md:hover:border-primary/35 md:hover:bg-secondary/80 motion-reduce:transition-none motion-reduce:md:hover:translate-y-0"
            >
              <div className="relative mb-5 aspect-[4/3] w-full">
                <ImagePlaceholder
                  slot={imageSlots.home.businesses[index] ?? "home-business-unavailable"}
                  className="size-full rounded-lg"
                />
                {index === 3 ? (
                  <p className="absolute inset-x-2 bottom-2 text-[10px] leading-snug text-muted-foreground">
                    {homePhotoStory.illustrationCaption}
                  </p>
                ) : null}
              </div>
              <h3 className="font-display text-lg font-extrabold leading-snug text-foreground">
                {pillar.title}
              </h3>
              {pillar.status === "In Development" ? (
                <div className="mt-2.5">
                  <StatusBadge status={pillar.status} />
                </div>
              ) : null}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {pillar.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 border-t border-border/80 pt-4 font-display text-sm font-bold text-primary">
                Learn more
                <ArrowRight
                  className="size-4 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-100 motion-reduce:transition-none"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="muted" className="scroll-mt-16 overflow-hidden" id="why-afrifama" compact>
        <div className="max-w-4xl">
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-terracotta sm:text-[0.9375rem]">
            {whyAfrifama.label}
          </p>
          <h2 id="why-afrifama-title" className="mt-4 h2-section font-extrabold">
            {whyAfrifama.title}
          </h2>
          <p className="mt-5 max-w-[72ch] body-copy text-muted-foreground">{whyAfrifama.lead}</p>
        </div>

        <figure className="mt-7 overflow-hidden rounded-2xl border border-border bg-primary-deep sm:mt-8 lg:rounded-3xl">
          <img
            src={whyAfrifama.image.src}
            srcSet={responsiveHeroSources(whyAfrifama.image.src)}
            sizes="(min-width: 1280px) 1216px, calc(100vw - 2.5rem)"
            alt={whyAfrifama.image.alt}
            width="1672"
            height="941"
            loading="lazy"
            decoding="async"
            className="h-auto max-h-[540px] w-full object-contain"
          />
          <figcaption className="bg-secondary px-4 py-2 text-xs text-muted-foreground">
            Generated storytelling illustration · the challenges farmers face
          </figcaption>
        </figure>

        <ol
          className="mt-8 grid min-w-0 gap-5 sm:mt-10 sm:grid-cols-2 lg:auto-rows-fr lg:grid-cols-3 lg:gap-6"
          aria-label="The six problems Afrifama is connecting"
        >
          {problems.map((problem, index) => (
            <li key={problem.number} data-story-step={problem.number} className="group min-w-0">
              <article
                aria-labelledby={`story-${problem.number}-title`}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-[4/3] overflow-hidden bg-primary-deep">
                  <img
                    src={problem.image}
                    srcSet={responsiveStorySources(problem.image)}
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, calc(100vw - 2.5rem)"
                    alt={problem.alt}
                    width="1448"
                    height="1086"
                    loading="lazy"
                    decoding="async"
                    className={`size-full object-cover saturate-[0.88] contrast-[0.98] transition-transform duration-500 ease-out motion-reduce:transition-none lg:group-hover:scale-[1.018] ${problemImagePositions[index]}`}
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-border px-5 py-5">
                  <p className="font-display text-xs font-extrabold tracking-[0.16em] text-terracotta">
                    {problem.number}
                  </p>
                  <h3
                    id={`story-${problem.number}-title`}
                    className="mt-2 font-display text-xl font-extrabold leading-tight text-foreground"
                  >
                    {problem.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {problem.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Section>

      <EarlyProgressSection tone="default" compact photoSlot={imageSlots.home.progress} />

      <Section tone="muted" compact>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Afrifama Field Notes" title="Latest field notes" />
          <Button asChild variant="outline">
            <Link to="/field-notes">
              View All Field Notes
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {fieldNotes.map((note) => (
            <div
              key={note.slug}
              className="flex flex-col rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                  {note.category}
                </span>
                <span className="rounded-md bg-gold/25 px-2 py-1 text-xs font-semibold text-gold-foreground">
                  Sample content
                </span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{note.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note.excerpt}
              </p>
              <Link
                to="/field-notes/$slug"
                params={{ slug: note.slug }}
                className="mt-5 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
              >
                Read note
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
