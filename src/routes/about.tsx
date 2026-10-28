import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/site/primitives";
import { ImagePlaceholder } from "@/components/site/ImagePlaceholder";
import { aboutStory, company, earlyProgress, imageSlots } from "@/content/site";

const pageTitle = `${aboutStory.title} | Poultry agribusiness in Kilifi County`;

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

const proof = earlyProgress.slice(0, 3);

function About() {
  const { challenge, why, building, howWeWork, status } = aboutStory;

  return (
    <>
      <header className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 pt-8 pb-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:pb-14">
          <div className="lg:col-span-6">
            <div className="[&_nav]:text-primary-foreground/75 [&_nav_a]:text-primary-foreground/75 [&_nav_span]:text-primary-foreground">
              <Breadcrumbs items={[{ label: aboutStory.title }]} />
            </div>
            <p className="mt-8 eyebrow text-gold">{aboutStory.title} · Kilifi County, Kenya</p>
            <h1 className="mt-4 h1-hero font-extrabold">{aboutStory.heroTitle}</h1>
            <p className="mt-5 max-w-[52ch] body-copy text-primary-foreground/85">{aboutStory.heroLead}</p>
            <Button asChild size="lg" variant="secondary" className="mt-7 w-full sm:w-auto">
              <a href="#our-story">
                {aboutStory.readMore} <ArrowDown aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="lg:col-span-6">
            <ImagePlaceholder slot={imageSlots.about[0]} label="About Afrifama hero photography" className="aspect-[4/3] w-full rounded-xl" inverted />
          </div>
        </div>
      </header>

      <section id="our-story" className="scroll-mt-20 bg-background section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <p className="eyebrow text-terracotta">{challenge.eyebrow}</p>
            <h2 className="mt-3 h2-section font-extrabold">{challenge.title}</h2>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-foreground sm:text-xl">{challenge.scene}</p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {challenge.pressures.map((item) => (
                <li key={item.title} className="grid gap-1 py-5 sm:grid-cols-[14rem_1fr] sm:gap-6">
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="body-copy text-muted-foreground">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <figure className="lg:col-span-4 lg:col-start-9">
            <ImagePlaceholder slot={imageSlots.about[1]} label="Kilifi farmer photography" className="aspect-[4/5] w-full rounded-xl" />
          </figure>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <p className="eyebrow text-terracotta">{why.eyebrow}</p>
          <blockquote className="mt-4 border-l-4 border-gold pl-6 font-display text-3xl font-extrabold leading-tight text-primary sm:text-4xl">
            “{why.quote}”
          </blockquote>
          <p className="mt-6 max-w-[62ch] body-copy text-muted-foreground">{why.body}</p>
        </div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow text-terracotta">{building.eyebrow}</p>
            <h2 className="mt-3 h2-section font-extrabold">{building.title}</h2>
          </div>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {building.steps.map((step, i) => (
              <li key={step.title} className="relative border-t-2 border-primary pt-5 lg:pr-6">
                <span className="absolute -top-[7px] left-0 size-3 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-muted-foreground">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-2 rounded-xl border border-dashed border-terracotta/60 p-5 sm:flex-row sm:items-center sm:gap-4">
            <span className="w-fit rounded-full bg-terracotta/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-terracotta">{building.future.status}</span>
            <p className="text-base"><strong className="font-display">{building.future.title}</strong> — <span className="text-muted-foreground">{building.future.body}</span></p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta">{howWeWork.eyebrow}</p>
            <h2 className="mt-3 h2-section font-extrabold">{howWeWork.title}</h2>
            <ImagePlaceholder slot={imageSlots.about[3]} label="Afrifama farm-visit photography" className="mt-8 hidden aspect-[16/10] w-full rounded-xl lg:flex" />
          </div>
          <dl className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:gap-8">
            {howWeWork.commitments.map((c) => (
              <div key={c.title} className="border-l-2 border-gold pl-5">
                <dt className="font-display text-lg font-bold">{c.title}</dt>
                <dd className="mt-2 text-base leading-relaxed text-muted-foreground">{c.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow text-terracotta">{status.eyebrow}</p>
              <h2 className="mt-3 h2-section font-extrabold">{status.title}</h2>
              <p className="mt-5 max-w-[60ch] body-copy text-muted-foreground">{status.body}</p>
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <dl className="grid grid-cols-3 gap-4 border-y border-border py-6">
                {proof.map((p) => (
                  <div key={p.label}>
                    <dt className="sr-only">{p.label}</dt>
                    <dd className="font-display text-3xl font-extrabold text-primary">{p.value}</dd>
                    <dd className="mt-1 text-sm leading-snug text-muted-foreground">{p.label}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 text-xs text-muted-foreground">{status.asOf}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-deep section-pad text-primary-foreground">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">{aboutStory.closing}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {aboutStory.paths.map((path, i) => (
              <Button key={path.to} asChild size="lg" variant={i === 0 ? "secondary" : "outline"} className={i === 0 ? "w-full sm:w-auto" : "w-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"}>
                <Link to={path.to}>
                  {path.label} <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            ))}
          </div>
          <Link to={aboutStory.businessesLink.to} className="mt-6 inline-block text-sm font-semibold text-gold underline-offset-4 hover:underline">
            {aboutStory.businessesLink.label}
          </Link>
        </div>
      </section>
    </>
  );
}
