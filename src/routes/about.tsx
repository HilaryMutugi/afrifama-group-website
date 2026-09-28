import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/primitives";
import { AboutSystemMural } from "@/components/site/AboutSystemMural";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { aboutStory, company, imageSlots } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Afrifama — An integrated Kenyan poultry agribusiness" },
      { property: "og:title", content: "About Afrifama — An integrated Kenyan poultry agribusiness" },
      { property: "og:url", content: "/about" },
      {
        name: "description",
        content:
          "Afrifama's story, mission, vision and operating principles, and why an integrated poultry model matters for Kenyan farmers.",
      },
      {
        property: "og:description",
        content: "Afrifama's story, mission, vision and operating principles, and why an integrated poultry model matters for Kenyan farmers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/about` }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <header className="relative isolate min-h-[min(660px,calc(100svh-72px))] overflow-hidden bg-primary-deep text-primary-foreground">
        <ImagePlaceholder slot={imageSlots.about[0]} label="About Afrifama hero photography" className="absolute inset-0 size-full border-0" inverted />
        <div className="relative mx-auto flex min-h-[min(660px,calc(100svh-72px))] max-w-7xl flex-col px-5 pt-8 pb-10 lg:px-8 lg:pb-14">
          <div className="[&_nav]:text-primary-foreground/75 [&_nav_a]:text-primary-foreground/75 [&_nav_span]:text-primary-foreground">
            <Breadcrumbs items={[{ label: "About Afrifama" }]} />
          </div>
          <div className="mt-auto max-w-4xl">
            <p className="eyebrow text-gold">Our company story · Mariakani, Kenya</p>
            <h1 className="mt-5 max-w-4xl h1-hero font-extrabold">
              {aboutStory.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
              {aboutStory.hero.lead}
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-7">
              <a href="#our-story">Follow our journey <ArrowRight aria-hidden="true" /></a>
            </Button>
            <p className="mt-5 max-w-xl text-xs leading-relaxed text-primary-foreground/65">
              Reserved for verified Afrifama photography.
            </p>
          </div>
        </div>
      </header>

      <section id="our-story" className="scroll-mt-20 bg-background section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-start lg:px-8">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="eyebrow text-terracotta">01 / Where it began</p>
            <h2 className="mt-4 h2-section font-extrabold">The flock revealed the system.</h2>
            <figure className="group mt-8">
              <div className="overflow-hidden rounded-lg">
                <ImagePlaceholder slot={imageSlots.about[1]} label="Afrifama origin-story photography" className="aspect-[5/4] w-full" />
              </div>
              <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">Reserved for verified Afrifama origin-story photography.</figcaption>
            </figure>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="border-l-2 border-gold pl-6 font-display text-2xl font-bold leading-snug text-primary sm:text-3xl">
              Poultry production exposed the nutrition and input problem. Solving that problem revealed the next one.
            </p>
            <div className="mt-10 space-y-6 body-copy text-muted-foreground">
              {aboutStory.origin.map((paragraph) => <p key={paragraph.slice(0, 42)}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6">
              <p className="eyebrow text-terracotta">02 / The journey</p>
              <h2 className="mt-4 h2-section font-extrabold">One lesson led to the next move.</h2>
            </div>
            <p className="max-w-xl body-copy text-muted-foreground lg:col-span-5 lg:col-start-8">A simple poultry operation became a wider ambition because each constraint was connected to another.</p>
          </div>

          <ol className="about-timeline relative mt-10">
            {aboutStory.timeline.map((item, index) => (
              <li key={item.marker} className={`relative grid gap-6 border-t border-border py-7 lg:grid-cols-12 lg:items-center ${index % 2 ? "" : "lg:text-left"}`}>
                <div className="lg:col-span-2">
                  <span className="font-display text-4xl font-extrabold text-primary sm:text-5xl">{item.marker}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="mt-2 max-w-lg leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
                {index === 2 ? (
                  <figure className="group lg:col-span-5 lg:col-start-8">
                    <div className="overflow-hidden rounded-lg"><ImagePlaceholder slot={imageSlots.about[2]} label="Afrifama feed-production photography" className="aspect-[16/9] w-full" /></div>
                    <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">Reserved for verified Afrifama feed-production photography.</figcaption>
                  </figure>
                ) : index === 3 ? (
                  <figure className="group lg:col-span-5 lg:col-start-8">
                    <div className="overflow-hidden rounded-lg"><ImagePlaceholder slot={imageSlots.about[3]} label="Afrifama field-operations photography" className="aspect-[16/9] w-full" /></div>
                    <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">Reserved for verified Afrifama field-operations photography.</figcaption>
                  </figure>
                ) : (
                  <div className="hidden lg:col-span-5 lg:col-start-8 lg:block" aria-hidden="true"><span className="block h-px w-full bg-gold/55" /></div>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-primary-deep section-pad text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-6"><p className="eyebrow text-gold">03 / One growing system</p><h2 className="mt-4 h2-section font-extrabold">The businesses belong together.</h2></div>
            <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/70 lg:col-span-5 lg:col-start-8">Nutrition supports birds. Capable farmers turn good inputs into disciplined production. Markets give that production commercial purpose.</p>
          </div>
        </div>
        <div className="mt-8 sm:mt-10"><AboutSystemMural /></div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-3"><p className="eyebrow text-terracotta">04 / Early proof</p><h2 className="mt-4 text-3xl font-extrabold">Different measures. Clear context.</h2></div>
            <dl className="grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-4">
              {aboutStory.proof.map((item) => <div key={item.label} className="border-t-2 border-gold pt-4"><dd className="font-display text-3xl font-extrabold text-primary">{item.value}</dd><dt className="mt-2 font-display font-bold">{item.label}</dt><dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</dd></div>)}
            </dl>
          </div>
          <p className="mt-10 border-t border-border pt-5 text-sm leading-relaxed text-muted-foreground">{aboutStory.proofNote}</p>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5"><p className="eyebrow text-terracotta">05 / What we are building</p><h2 className="mt-4 h2-section font-extrabold">Local roots. Regional direction.</h2></div>
            <div className="space-y-8 lg:col-span-6 lg:col-start-7">
              <div className="border-l-2 border-gold pl-6"><p className="eyebrow text-primary">Mission</p><p className="mt-3 text-xl leading-relaxed">{aboutStory.mission}</p></div>
              <div className="border-l-2 border-terracotta pl-6"><p className="eyebrow text-primary">Direction</p><p className="mt-3 text-xl leading-relaxed">{aboutStory.direction}</p></div>
            </div>
          </div>
          <div className="mt-10 divide-y divide-border border-y border-border">
            {aboutStory.principles.map((principle, index) => <div key={principle.title} className="grid gap-2 py-6 sm:grid-cols-[4rem_1fr_2fr] sm:items-baseline"><span className="font-display text-sm font-bold text-terracotta">0{index + 1}</span><h3 className="text-lg font-bold">{principle.title}</h3><p className="max-w-2xl leading-relaxed text-muted-foreground">{principle.body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-primary-deep section-pad text-primary-foreground">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="eyebrow text-gold">The idea that carries forward</p>
          <blockquote className="mt-6 font-display text-[1.5rem] leading-snug sm:text-[1.875rem] font-bold">“{aboutStory.closing}”</blockquote>
          <Button asChild size="lg" variant="secondary" className="mt-9"><Link to="/businesses">Explore Our Businesses <ArrowRight aria-hidden="true" /></Link></Button>
        </div>
      </section>
    </>
  );
}
