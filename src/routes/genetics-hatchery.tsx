import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Dna, FileText, Handshake, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, CheckList, Section, SectionHeading, StatusBadge } from "@/components/site/primitives";
import { company, geneticsCapability, imageSlots } from "@/content/site";
import { photos } from "@/content/photos";

export const Route = createFileRoute("/genetics-hatchery")({
  head: () => ({
    meta: [
      { title: "Genetics & Hatchery Development | Afrifama" },
      { property: "og:title", content: "Genetics & Hatchery Development | Afrifama" },
      { property: "og:url", content: "/genetics-hatchery" },
      {
        name: "description",
        content:
          "Afrifama is developing parent-stock capability, genetics partnerships and the technical foundations for future locally relevant chick supply in Kenya.",
      },
      {
        property: "og:description",
        content: "Afrifama is developing parent-stock capability, genetics partnerships and the technical foundations for future locally relevant chick supply in Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/genetics-hatchery` }],
  }),
  component: Genetics,
});

function Genetics() {
  return (
    <>
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
          <div className="[&_a]:text-primary-foreground/70 [&_nav]:text-primary-foreground/70 [&_span[aria-current]]:text-primary-foreground">
            <Breadcrumbs items={[{ label: "Our Businesses", to: "/businesses" }, { label: "Genetics & Hatchery" }]} />
          </div>
          <div className="grid gap-10 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-gold">Genetics & Hatchery</p>
                <StatusBadge status="In Development" />
              </div>
              <h1 className="mt-5 max-w-4xl h1-hero font-extrabold">
                Productive flocks begin before the birds reach the farm.
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="border-t border-primary-foreground/25 pt-6 text-lg leading-relaxed text-primary-foreground/80">
                {geneticsCapability.positioning}
              </p>
              <Button asChild variant="secondary" size="lg" className="mt-7">
                <Link to="/contact">Discuss a technical partnership <ArrowRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="The genetics behind a productive flock"
              title="Potential is useful only when the whole system can support it"
              lead="Breed choice is one part of a much larger production decision. Origin, robustness and management fit must be considered together."
            />
            <div className="mt-8 divide-y divide-border border-y border-border">
              {geneticsCapability.productiveFlock.map((item) => (
                <div key={item.title} className="grid grid-cols-[auto_1fr] gap-4 py-5">
                  <Dna className="mt-1 size-5 text-terracotta" aria-hidden="true" />
                  <div>
                    <h3 className="font-display font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <figure className="lg:col-span-7">
            <img
              src={photos.geneticsChicks.src}
              srcSet={photos.geneticsChicks.srcSet}
              sizes="(min-width: 1024px) 55vw, 100vw"
              data-image-slot={imageSlots.genetics[1]}
              alt="Close-up of healthy yellow day-old chicks in a clean brooder"
              width={photos.geneticsChicks.width}
              height={photos.geneticsChicks.height}
              loading="lazy"
              className="aspect-[7/5] w-full border border-border object-cover shadow-lift"
            />
            <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Illustrative photograph (ELTORO.VET, CC0, via Wikimedia Commons). It does not depict an operating Afrifama hatchery or a commercial chick offer.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Our parent-stock direction"
              title="Build capability in the right order"
              lead="The direction is clear, but each step depends on technical discipline, suitable partners and evidence of local demand."
            />
          </div>
          <div className="lg:col-span-7">
            <CheckList items={[...geneticsCapability.parentStockDirection]} />
            <div className="mt-8 border-l-4 border-gold bg-background p-6">
              <p className="font-display text-lg font-bold">Current status, stated clearly</p>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Afrifama does not operate a completed hatchery and does not currently supply commercial day-old chicks.
                We are not naming genetics partners or specific bird strains publicly at this stage.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="What we are building"
          title="A capability roadmap, not a product catalogue"
          lead="Nothing in this sequence should be read as a current commercial chick offer."
        />
        <ol className="mt-12 grid border-y border-border lg:grid-cols-3">
          {geneticsCapability.buildSequence.map((item, index) => (
            <li key={item.title} className={`py-7 lg:px-8 ${index > 0 ? "border-t border-border lg:border-t-0 lg:border-l" : ""}`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-4xl font-extrabold text-border">0{index + 1}</span>
                <StatusBadge status={item.status} />
              </div>
              <h3 className="mt-8 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="forest">
        <SectionHeading
          eyebrow="One performance system"
          title="Genetics, nutrition and management must work together"
          lead="Strong technical support makes the relationship between these three parts visible and actionable on the farm."
          inverted
        />
        <div className="mt-12 grid gap-px bg-primary-foreground/20 md:grid-cols-3">
          {geneticsCapability.connectedPerformance.map((item, index) => (
            <div key={item.title} className="bg-primary px-6 py-8 sm:px-8">
              <p className="font-display text-sm font-bold text-gold">0{index + 1}</p>
              <h3 className="mt-8 font-display text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-primary-foreground/75">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Handshake className="size-9 text-terracotta" aria-hidden="true" />
            <SectionHeading
              eyebrow="Technical partnerships"
              title="Local relevance requires the right expertise around the table"
              lead="Afrifama welcomes conversations with responsible genetics, parent-stock, veterinary, biosecurity and hatchery specialists."
            />
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {["Genetics and parent-stock strategy", "Bird health and welfare", "Biosecurity and facility planning", "Field-ready management support"].map((item) => (
                <div key={item} className="border-t border-border py-5">
                  <Sprout className="size-5 text-primary" aria-hidden="true" />
                  <p className="mt-4 font-display font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Future breed profiles and management resources"
            title="Technical information will be specific, sourced and useful"
            lead="These resources are not yet published. Their structure is shown now so future information has a clear evidence standard."
          />
          <StatusBadge status="Future" />
        </div>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {geneticsCapability.futureResources.map((resource, index) => (
            <article key={resource.title} className="grid gap-4 py-6 md:grid-cols-[3rem_1fr_1.5fr] md:items-center">
              {index === 0 ? <Dna className="size-5 text-terracotta" /> : index === 1 ? <BookOpen className="size-5 text-terracotta" /> : <FileText className="size-5 text-terracotta" />}
              <h3 className="font-display text-lg font-bold">{resource.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{resource.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <section className="bg-gold/20 section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="eyebrow text-terracotta">Partner with Afrifama</p>
            <h2 className="mt-3 max-w-3xl h2-section font-extrabold">Discuss a technical partnership</h2>
            <p className="mt-4 max-w-2xl body-copy text-muted-foreground">
              We are looking for technical partners who value responsible development, clear evidence and practical farmer outcomes.
            </p>
          </div>
          <Button asChild size="lg"><Link to="/contact">Talk to Afrifama <ArrowRight className="size-4" /></Link></Button>
        </div>
      </section>
    </>
  );
}