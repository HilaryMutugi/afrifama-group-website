import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Wallet, Smartphone, Sprout, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/primitives";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { aboutStory, company, imageSlots } from "@/content/site";

const pageTitle = `${aboutStory.title} | ${aboutStory.opening}`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: pageTitle },
      { property: "og:title", content: pageTitle },
      { property: "og:url", content: "/about" },
      { name: "description", content: aboutStory.description },
      { property: "og:description", content: aboutStory.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/about` }],
  }),
  component: About,
});

const pillarIcons = [Wallet, Smartphone, Sprout, Store];

function About() {
  const { whoWeAre, whoWeServe, howWeWalk, whyWeExist } = aboutStory;

  return (
    <>
      <header className="relative isolate grid lg:grid-cols-2 overflow-hidden bg-primary-deep text-primary-foreground">
        <ImagePlaceholder slot={imageSlots.about[0]} label="About Afrifama hero photography" className="order-2 aspect-[4/3] w-full border-0 lg:aspect-auto lg:min-h-[420px]" inverted showLabel={false} />
        <div className="relative mx-auto flex min-h-[360px] max-w-7xl flex-col px-5 pt-8 pb-10 lg:px-8 lg:pb-14">
          <div className="[&_nav]:text-primary-foreground/75 [&_nav_a]:text-primary-foreground/75 [&_nav_span]:text-primary-foreground">
            <Breadcrumbs items={[{ label: aboutStory.title }]} />
          </div>
          <div className="mt-6 max-w-4xl">
            <p className="eyebrow text-gold">{aboutStory.title}</p>
            <h1 className="mt-5 max-w-4xl h1-hero font-extrabold">{aboutStory.opening}</h1>
          </div>
        </div>
      </header>

      <section id="our-story" className="scroll-mt-20 bg-background section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border-l-4 border-gold bg-secondary/60 p-6 sm:p-10">
              <p className="text-lg leading-relaxed text-foreground sm:text-xl">{aboutStory.scene}</p>
            </div>
          </div>
          <figure className="lg:col-span-5 lg:col-start-8">
            <div className="overflow-hidden rounded-lg">
              <ImagePlaceholder slot={imageSlots.about[1]} label="Afrifama origin-story photography" className="aspect-[5/4] w-full" />
            </div>
          </figure>
        </div>
        <div className="mx-auto mt-12 max-w-7xl px-5 lg:mt-16 lg:px-8">
          <p className="max-w-4xl font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            {aboutStory.gap}
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-6">
            <p className="eyebrow text-terracotta">01</p>
            <h2 className="mt-4 h2-section font-extrabold">{whoWeAre.title}</h2>
            <p className="mt-6 max-w-2xl body-copy text-muted-foreground">{whoWeAre.body}</p>
          </div>
          <figure className="lg:col-span-5 lg:col-start-8">
            <div className="overflow-hidden rounded-lg">
              <ImagePlaceholder slot={imageSlots.about[2]} label="Afrifama feed-production photography" className="aspect-[16/9] w-full" />
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:order-2 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow text-terracotta">02</p>
            <h2 className="mt-4 h2-section font-extrabold">{whoWeServe.title}</h2>
            <p className="mt-6 max-w-2xl body-copy text-muted-foreground">{whoWeServe.body}</p>
          </div>
          <figure className="lg:order-1 lg:col-span-5">
            <div className="overflow-hidden rounded-lg">
              <ImagePlaceholder slot={imageSlots.about[3]} label="Afrifama field-operations photography" className="aspect-[16/9] w-full" />
            </div>
          </figure>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-terracotta">03</p>
            <h2 className="mt-4 h2-section font-extrabold">{howWeWalk.title}</h2>
            <p className="mt-6 body-copy text-muted-foreground">{howWeWalk.body}</p>
          </div>
          <figure className="mt-8">
            <ImagePlaceholder slot="about-support-illustration" className="mx-auto aspect-[4/3] w-full max-w-xl rounded-xl" />
            <figcaption className="mt-3 text-center text-xs text-muted-foreground">Generated illustration · practical support and record review</figcaption>
          </figure>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWalk.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Sprout;
              return (
                <li key={pillar.title} className="flex flex-col rounded-2xl border border-border bg-card p-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{pillar.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl border-l-2 border-gold pl-6">
            <p className="eyebrow text-terracotta">04</p>
            <h2 className="mt-4 h2-section font-extrabold">{whyWeExist.title}</h2>
            <p className="mt-6 body-copy text-muted-foreground">{whyWeExist.body}</p>
          </div>
        </div>
      </section>

      <section className="bg-primary-deep section-pad text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="font-display text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">{aboutStory.closing}</p>
          <Button asChild size="lg" variant="secondary" className="mt-9">
            <Link to={aboutStory.cta.to}>
              {aboutStory.cta.label} <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
