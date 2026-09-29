import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wheat, Egg, Users, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, StatusBadge } from "@/components/site/primitives";
import { EarlyProgressSection } from "@/components/site/EarlyProgress";
import { CtaBand } from "@/components/site/CtaBand";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
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

const problemLayouts = [
  {
    item: "lg:col-span-5",
    media: "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[5/4]",
    position: "object-[52%_50%]",
  },
  {
    item: "lg:col-span-7",
    media: "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[7/4]",
    position: "object-[58%_50%]",
  },
  {
    item: "lg:col-span-4",
    media: "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[4/3]",
    position: "object-[58%_50%]",
  },
  {
    item: "lg:col-span-4",
    media: "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[4/3]",
    position: "object-[50%_50%]",
  },
  {
    item: "lg:col-span-4",
    media: "aspect-[5/4] sm:aspect-[16/10] lg:aspect-[4/3]",
    position: "object-[65%_43%]",
  },
] as const;

function responsiveStorySources(src: string) {
  const stem = src.slice(0, -5);
  return `${stem}-640.webp 640w, ${stem}-960.webp 960w, ${src} 1448w`;
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
          <ImagePlaceholder
            slot="home-hero"
            label="Homepage hero photography"
            className="aspect-[4/3] w-full rounded-2xl shadow-card lg:aspect-[11/10] lg:max-h-[26rem]"
          />
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
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta">{aboutStory.title}</p>
            <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl">
              {aboutStory.opening}
            </h2>
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
          {pillars.map((pillar) => (
            <Link
              key={pillar.title}
              to={pillar.to}
              className="group flex h-full flex-col rounded-2xl border border-border bg-secondary/55 p-6 transition-[transform,border-color,background-color] duration-200 ease-out focus-visible:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background md:hover:-translate-y-0.5 md:hover:border-primary/35 md:hover:bg-secondary/80 motion-reduce:transition-none motion-reduce:md:hover:translate-y-0"
            >
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

      <Section tone="muted" className="overflow-hidden" id="why-afrifama">
        <div className="max-w-4xl">
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.18em] text-terracotta sm:text-[0.9375rem]">
            {whyAfrifama.label}
          </p>
          <h2 id="why-afrifama-title" className="mt-4 h2-section font-extrabold">
            {whyAfrifama.title}
          </h2>
          <p className="mt-5 max-w-[72ch] body-copy text-muted-foreground">{whyAfrifama.lead}</p>
        </div>

        <figure className="mt-9 overflow-hidden rounded-2xl border border-border bg-primary-deep sm:mt-11 lg:rounded-3xl">
          <img
            src={whyAfrifama.image.src}
            srcSet="/images/storytelling/why-afrifama-hero-960.webp 960w, /images/storytelling/why-afrifama-hero-1400.webp 1400w, /images/storytelling/why-afrifama-hero.webp 1672w"
            sizes="(min-width: 1280px) 1216px, calc(100vw - 2.5rem)"
            alt={whyAfrifama.image.alt}
            width="1672"
            height="941"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="aspect-video w-full object-cover object-center"
          />
        </figure>

        <ol
          className="mt-12 grid min-w-0 gap-x-6 gap-y-10 sm:mt-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-x-7 lg:gap-y-12"
          aria-label="The six problems Afrifama is connecting"
        >
          {problems.slice(0, 5).map((problem, index) => {
            const layout = problemLayouts[index];
            return (
              <li
                key={problem.number}
                data-story-step={problem.number}
                className={`group min-w-0 sm:col-span-2 ${layout.item}`}
              >
                <article aria-labelledby={`story-${problem.number}-title`}>
                  <div
                    className={`overflow-hidden rounded-2xl border border-border bg-primary-deep ${layout.media}`}
                  >
                    <img
                      src={problem.image}
                      srcSet={responsiveStorySources(problem.image)}
                      sizes={
                        index < 2
                          ? "(min-width: 1024px) 58vw, (min-width: 640px) calc(100vw - 2.5rem), calc(100vw - 2.5rem)"
                          : "(min-width: 1024px) 31vw, (min-width: 640px) calc(100vw - 2.5rem), calc(100vw - 2.5rem)"
                      }
                      alt={problem.alt}
                      width="1448"
                      height="1086"
                      loading="lazy"
                      decoding="async"
                      className={`size-full object-cover transition-transform duration-500 ease-out motion-reduce:transition-none lg:group-hover:scale-[1.018] ${layout.position}`}
                    />
                  </div>
                  <div className="mt-5 border-l-2 border-terracotta/70 pl-4 sm:pl-5">
                    <p className="font-display text-xs font-extrabold tracking-[0.16em] text-terracotta">
                      {problem.number}
                    </p>
                    <h3
                      id={`story-${problem.number}-title`}
                      className="mt-2 font-display text-xl font-extrabold leading-tight text-foreground"
                    >
                      {problem.title}
                    </h3>
                    <p className="mt-2 max-w-[48ch] leading-relaxed text-muted-foreground">
                      {problem.body}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}

          <li data-story-step="06" className="min-w-0 sm:col-span-2 lg:col-span-12">
            <article
              aria-labelledby="story-06-title"
              className="group overflow-hidden rounded-2xl border border-primary/30 bg-primary-deep text-primary-foreground lg:grid lg:grid-cols-12 lg:items-stretch lg:rounded-3xl"
            >
              <div className="aspect-[5/4] overflow-hidden sm:aspect-[16/10] lg:order-2 lg:col-span-7 lg:aspect-auto lg:min-h-[28rem]">
                <img
                  src={problems[5].image}
                  srcSet={responsiveStorySources(problems[5].image)}
                  sizes="(min-width: 1024px) 58vw, calc(100vw - 2.5rem)"
                  alt={problems[5].alt}
                  width="1448"
                  height="1086"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover object-[64%_42%] transition-transform duration-500 ease-out motion-reduce:transition-none lg:group-hover:scale-[1.018]"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 sm:px-9 sm:py-10 lg:col-span-5 lg:px-12 lg:py-14">
                <p className="font-display text-sm font-extrabold tracking-[0.18em] text-gold">
                  {problems[5].number}
                </p>
                <h3
                  id="story-06-title"
                  className="mt-3 font-display text-2xl font-extrabold leading-tight sm:text-3xl"
                >
                  {problems[5].title}
                </h3>
                <p className="mt-4 max-w-[40ch] text-lg leading-relaxed text-primary-foreground/80">
                  {problems[5].body}
                </p>
                <div className="mt-8 h-px w-20 bg-gold/70" aria-hidden="true" />
              </div>
            </article>
          </li>
        </ol>
      </Section>

      <EarlyProgressSection tone="default" compact />

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
