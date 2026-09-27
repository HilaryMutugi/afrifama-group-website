import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Beaker,
  Bird,
  BookOpen,
  Check,
  ClipboardList,
  Droplets,
  Factory,
  FlaskConical,
  Gauge,
  Handshake,
  Leaf,
  PackageCheck,
  Scale,
  Sprout,
  Users,
  Warehouse,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumbs,
  Section,
  SectionHeading,
  StatusBadge,
} from "@/components/site/primitives";
import { company, feedProducts, feedsPage, faqGroups } from "@/content/site";
import feedImage from "@/assets/feed-materials.jpg";

const feedFaqs = faqGroups.find((group) => group.group === "Feed Products");

export const Route = createFileRoute("/feeds")({
  head: () => ({
    meta: [
      { title: "Afrifama Feeds — Chick, Growers, Layers and Kienyeji Mash" },
      {
        name: "description",
        content:
          "Explore Afrifama's stage-specific poultry mash range, production-linked nutrition approach, quality disciplines and practical support for Kenyan farmers.",
      },
      { property: "og:title", content: "Afrifama Feeds — Nutrition for Every Flock Stage" },
      {
        property: "og:description",
        content:
          "Stage-specific poultry nutrition connected to real production, raw-material evaluation and practical farm management.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/feeds` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: (feedFaqs?.items ?? []).map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: Feeds,
});

const productIcons = [Sprout, Wheat, Scale, Gauge, FlaskConical, Bird] as const;
const factorIcons = [Bird, ClipboardList, Scale, Gauge, Droplets, Warehouse, Beaker, Wheat, Check] as const;
const pathwayIcons = [Bird, Users, PackageCheck, Factory, Handshake, Leaf] as const;

function Feeds() {
  const [activeStage, setActiveStage] = useState(0);
  const selectedStage = feedsPage.stages[activeStage] ?? feedsPage.stages[0];

  return (
    <>
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 pt-10 lg:px-8">
          <Breadcrumbs items={[{ label: "Our Businesses", to: "/businesses" }, { label: "Feeds" }]} />
          <div className="grid overflow-hidden border border-border bg-card lg:grid-cols-[0.94fr_1.06fr]">
            <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="flex flex-wrap items-center gap-3">
                <p className="eyebrow text-terracotta">Afrifama Feeds</p>
                <StatusBadge status="Operational" />
              </div>
              <h1 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                Nutrition built for every stage of the flock.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Afrifama produces stage-specific poultry mash for commercial layers, improved kienyeji birds and growing flocks. Our approach connects formulation, raw-material quality, practical farm management and technical support.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#feed-range">Explore Our Feeds <ArrowRight className="size-4" /></a></Button>
                <Button asChild size="lg" variant="outline"><Link to="/contact">Talk to Our Team</Link></Button>
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden lg:min-h-[610px]">
              <img
                src={feedImage}
                alt="Clean poultry-feed raw materials prepared for evaluation and mixing"
                width={1408}
                height={1008}
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 border-t border-primary-foreground/20 bg-primary/90 px-6 py-5 text-primary-foreground backdrop-blur-sm">
                <p className="eyebrow text-gold">Our approach</p>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-primary-foreground/80">{feedsPage.positioning}</p>
              </div>
            </div>
          </div>
          <p className="max-w-4xl py-5 text-sm leading-relaxed text-muted-foreground">{feedsPage.supportingCopy}</p>
        </div>
      </section>

      <Section compact>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Product journey" title="Follow the nutritional objective" lead="Move through the flock journey to see how the focus changes from early development to production." />
          </div>
          <div className="lg:col-span-8">
            <div role="tablist" aria-label="Flock nutrition stages" className="grid grid-cols-2 border-t border-l border-border sm:grid-cols-4">
              {feedsPage.stages.map((stage, index) => (
                <Button
                  key={stage.name}
                  type="button"
                  role="tab"
                  aria-selected={activeStage === index}
                  variant="ghost"
                  onClick={() => setActiveStage(index)}
                  className={`h-auto min-h-24 rounded-none border-r border-b border-border px-4 py-5 text-left ${activeStage === index ? "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" : "bg-card"}`}
                >
                  <span className="w-full">
                    <span className={`block text-xs font-bold uppercase ${activeStage === index ? "text-gold" : "text-terracotta"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="mt-2 block font-display text-lg font-bold">{stage.name}</span>
                  </span>
                </Button>
              ))}
            </div>
            <div role="tabpanel" className="border-x border-b border-border bg-secondary/50 p-6 sm:p-8">
              <p className="eyebrow text-terracotta">{selectedStage.name}</p>
              <h3 className="mt-2 font-display text-2xl font-bold">{selectedStage.objective}</h3>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{selectedStage.detail}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="feed-range" tone="muted">
        <SectionHeading eyebrow="Product range" title="Six feeds. Clear production roles." lead="Each product is organised around production stage, nutritional purpose and flock type. Verified specifications can be added as they become available." />
        <div className="mt-10 grid border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
          {feedProducts.map((product, index) => {
            const Icon = productIcons[index] ?? Wheat;
            return (
              <article key={product.name} className="flex min-h-[390px] flex-col border-r border-b border-border bg-card p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4"><Icon className="size-6 text-terracotta" aria-hidden="true" /><StatusBadge status={product.status} /></div>
                <p className="mt-6 eyebrow text-terracotta">{product.journeyStage} · {product.stage}</p>
                <h3 className="mt-3 font-display text-2xl font-bold">{product.name}</h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <div><dt className="font-semibold text-foreground">Main nutritional purpose</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{product.purpose}</dd></div>
                  <div><dt className="font-semibold text-foreground">Suitable flock type</dt><dd className="mt-1 leading-relaxed text-muted-foreground">{product.flockType}</dd></div>
                </dl>
                <Button asChild variant="outline" className="mt-auto"><Link to="/contact">Request Product Information <ArrowRight className="size-4" /></Link></Button>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Nutrition connected to production" title="Feed decisions should begin with the bird." lead="A formulation cannot be judged apart from the flock, its environment and the discipline of daily management." inverted />
          </div>
          <div className="lg:col-span-8">
            <div className="grid border-t border-l border-primary-foreground/20 sm:grid-cols-2 lg:grid-cols-3">
              {feedsPage.productionFactors.map((factor, index) => {
                const Icon = factorIcons[index] ?? Check;
                return (
                  <div key={factor} className="flex min-h-28 items-center gap-4 border-r border-b border-primary-foreground/20 p-5">
                    <Icon className="size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span className="font-display text-sm font-bold">{factor}</span>
                  </div>
                );
              })}
              <div className="flex min-h-28 items-center justify-center border-r border-b border-primary-foreground/20 bg-primary-foreground/5 p-5 text-center">
                <span className="eyebrow text-gold">One connected production system</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="How Afrifama develops feed" title="A process designed to keep learning" lead={feedsPage.processCopy} />
          </div>
          <ol className="border-t border-border lg:col-span-8">
            {feedsPage.developmentProcess.map((step, index) => (
              <li key={step.title} className="grid gap-3 border-b border-border py-6 sm:grid-cols-[3rem_1fr_1.35fr] sm:items-start">
                <span className="font-display text-sm font-bold text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-lg font-bold">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative min-h-80 overflow-hidden lg:col-span-5 lg:min-h-[520px]">
            <img src={feedImage} alt="Maize and other poultry-feed ingredients ready for quality review" loading="lazy" width={1408} height={1008} className="absolute inset-0 size-full object-cover" />
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <SectionHeading eyebrow="Raw materials and quality discipline" title="Consistency starts before ingredients enter the mixer" lead="Quality is a sequence of checks and records. Laboratory testing is used where applicable; no certification or laboratory approval is implied." />
            <div className="mt-8 grid border-t border-l border-border sm:grid-cols-2">
              {feedsPage.qualityDisciplines.map((item, index) => (
                <div key={item} className="flex min-h-20 items-center gap-4 border-r border-b border-border bg-card p-4">
                  <span className="font-display text-xs font-bold text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Farmer support" title="Good feed performs best with good management." lead="Product choice is only one decision. Afrifama connects feed conversations with practical flock and farm-management support." />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {feedsPage.farmerSupport.map((item) => <li key={item} className="flex items-center gap-3 border-b border-border pb-3"><Check className="size-4 text-primary" /><span>{item}</span></li>)}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <div className="border border-border bg-secondary/50 p-6 sm:p-8">
              <div className="flex items-center gap-3"><BookOpen className="size-6 text-terracotta" /><p className="eyebrow text-terracotta">Future resources</p></div>
              <h3 className="mt-4 font-display text-2xl font-bold">Practical materials, published when ready</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">These resources are planned but are not yet available to download.</p>
              <div className="mt-7 grid border-t border-l border-border sm:grid-cols-2">
                {feedsPage.futureResources.map((resource) => <div key={resource} className="flex min-h-24 items-center justify-between gap-4 border-r border-b border-border bg-card p-4"><span className="font-semibold">{resource}</span><StatusBadge status="Future" /></div>)}
              </div>
              {feedFaqs ? (
                <Accordion type="single" collapsible className="mt-8 w-full">
                  {feedFaqs.items.map((item, index) => (
                    <AccordionItem key={item.q} value={`feed-${index}`}><AccordionTrigger className="text-left font-display text-base font-bold">{item.q}</AccordionTrigger><AccordionContent className="text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent></AccordionItem>
                  ))}
                </Accordion>
              ) : null}
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Customer pathways" title="Choose the conversation that fits your role" lead="Afrifama separates product, partnership, distribution, technical and supply conversations so each enquiry reaches the right next step." />
        <div className="mt-10 grid border-t border-l border-border md:grid-cols-2 lg:grid-cols-3">
          {feedsPage.customerPathways.map((pathway, index) => {
            const Icon = pathwayIcons[index] ?? Handshake;
            return (
              <article key={pathway.title} className="flex min-h-64 flex-col border-r border-b border-border bg-card p-6">
                <Icon className="size-6 text-terracotta" aria-hidden="true" /><h3 className="mt-5 font-display text-xl font-bold">{pathway.title}</h3><p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{pathway.body}</p>
                <Button asChild variant="link" className="mt-5 h-auto justify-start p-0"><Link to={pathway.to}>Start this conversation <ArrowRight className="size-4" /></Link></Button>
              </article>
            );
          })}
        </div>
      </Section>

      <Section tone="forest">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="eyebrow text-gold">Complete production system</p><h2 className="mt-3 max-w-3xl text-3xl font-extrabold sm:text-4xl">The right feed is part of a complete production system.</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">Tell us about your birds, production stage and farm objectives. Our team will help identify the most suitable next step.</p></div>
          <div className="flex flex-wrap gap-3"><Button asChild size="lg" variant="secondary"><Link to="/contact">Discuss Your Flock</Link></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"><Link to="/contact">Become a Distributor</Link></Button></div>
        </div>
      </Section>
    </>
  );
}
