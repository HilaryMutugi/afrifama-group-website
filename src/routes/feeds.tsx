import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PageHero,
  Section,
  SectionHeading,
  Card,
  StatusBadge,
  CheckList,
} from "@/components/site/primitives";
import { StageProgression } from "@/components/site/StageProgression";
import { CtaBand } from "@/components/site/CtaBand";
import { company, feedProducts, formulationProcess, faqGroups } from "@/content/site";
import feedImage from "@/assets/feed-materials.jpg";

const feedFaqs = faqGroups.find((g) => g.group === "Feed Products")!;

export const Route = createFileRoute("/feeds")({
  head: () => ({
    meta: [
      { title: "Afrifama Feeds — Chick, Growers, Layers and Kienyeji Mash" },
      {
        name: "description",
        content:
          "Four stage-based poultry feeds from Afrifama: Chick Mash, Growers Mash, Layers Mash and Kienyeji & Dual-Purpose Mash, formulated with professional software and laboratory analysis.",
      },
      { property: "og:title", content: "Afrifama Feeds — Stage-based poultry nutrition" },
      {
        property: "og:description",
        content:
          "Different nutrition for different stages. One Afrifama quality standard, built on formulation software, laboratory analysis and production data.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/feeds` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: feedFaqs.items.map((item) => ({
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

const qualityControl = [
  "Raw-material screening at intake",
  "Laboratory analysis of key ingredients and finished feed",
  "Batch records tied to formulation versions",
  "Production feedback reviewed against nutrient specifications",
  "Formulations revised when data justifies a change",
];

function Feeds() {
  return (
    <>
      <PageHero
        eyebrow="Feeds"
        title="Different nutrition for different stages. One Afrifama quality standard."
        lead="Four products covering the poultry production cycle, formulated for nutritional suitability and affordability rather than marketing claims."
        status="Operational"
        breadcrumbs={[{ label: "Our Businesses", to: "/businesses" }, { label: "Feeds" }]}
      />

      <Section>
        <SectionHeading eyebrow="Product range" title="The four-product range" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {feedProducts.map((p) => (
            <Card key={p.name} className="flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="eyebrow text-terracotta">{p.stage}</span>
                <StatusBadge status={p.status} />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
              <p className="mt-4 border-t border-border pt-4 text-sm">{p.useFor}</p>
            </Card>
          ))}
        </div>
        <div className="mt-14">
          <h3 className="eyebrow text-terracotta">Stage-based nutrition</h3>
          <div className="mt-5">
            <StageProgression />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Formulation process"
              title="How an Afrifama formulation is built"
              lead="Formulations are developed using professional feed-formulation software, laboratory analysis, practical production data and technical input from qualified nutrition specialists within East Africa and Europe."
            />
            <ol className="mt-8 space-y-4">
              {formulationProcess.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{step.title}</h3>
                    <p className="mt-1 leading-relaxed text-muted-foreground">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6">
            <img
              src={feedImage}
              alt="Maize, soybean meal and mineral premix raw materials weighed for poultry feed production"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
            <Card className="mt-6">
              <h3 className="font-display text-base font-bold">Quality-control approach</h3>
              <div className="mt-4">
                <CheckList items={qualityControl} />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Feed FAQs" title="Questions from feed customers" />
            <Button asChild className="mt-8">
              <Link to="/contact">
                Make a feed enquiry
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {feedFaqs.items.map((item, i) => (
                <AccordionItem key={item.q} value={`feed-${i}`}>
                  <AccordionTrigger className="text-left font-display text-base font-bold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
