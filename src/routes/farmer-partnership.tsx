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
  CheckList,
} from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import {
  company,
  partnershipAfrifamaProvides,
  partnershipFarmerProvides,
  partnershipSteps,
  faqGroups,
} from "@/content/site";
import trainingImage from "@/assets/farmer-training.jpg";

const farmerFaqs = faqGroups.find((g) => g.group === "Farmer Partnership")!;

export const Route = createFileRoute("/farmer-partnership")({
  head: () => ({
    meta: [
      { title: "Farmer Partnership — Structured poultry partnerships | Afrifama" },
      {
        name: "description",
        content:
          "How Afrifama's smallholder farmer partnership works: what Afrifama provides, what farmers provide, farm-readiness selection, monitoring and recoverable input support.",
      },
      { property: "og:title", content: "Farmer Partnership | Afrifama" },
      {
        property: "og:description",
        content:
          "A structured commercial poultry partnership with selected Kenyan farmers — training, monitoring and recoverable production support.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/farmer-partnership` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: farmerFaqs.items.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        }),
      },
    ],
  }),
  component: FarmerPartnership,
});

const monitoring = [
  "Scheduled farm visits through the production cycle",
  "Flock condition, feed use and water checks",
  "Vaccination and health-programme follow-up",
  "Record review with the farmer",
  "Technical support when performance drifts from target",
];

function FarmerPartnership() {
  return (
    <>
      <PageHero
        eyebrow="Farmer Partnership"
        title="A structured commercial partnership, agreed in writing on both sides."
        lead="Afrifama works with selected farmers whose farms are ready to carry a production cycle. Responsibilities, input support and repayment expectations are agreed before any birds are placed."
        status="Operational"
        breadcrumbs={[
          { label: "Our Businesses", to: "/businesses" },
          { label: "Farmer Partnership" },
        ]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <img
              src={trainingImage}
              alt="Afrifama field officer reviewing production records with smallholder poultry farmers"
              loading="lazy"
              width={1408}
              height={1008}
              className="w-full rounded-3xl border border-border object-cover shadow-lift"
            />
          </div>
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="The model"
              title="Two sides, clearly defined"
              lead="The partnership only works when both sides know exactly what they are responsible for."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Card>
                <h2 className="font-display text-base font-bold">Afrifama may provide</h2>
                <div className="mt-4">
                  <CheckList items={partnershipAfrifamaProvides} />
                </div>
              </Card>
              <Card>
                <h2 className="font-display text-base font-bold">Farmers provide</h2>
                <div className="mt-4">
                  <CheckList items={partnershipFarmerProvides} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Selection"
          title="Selection and farm readiness"
          lead="Expressions of interest are reviewed against farm readiness and the capacity available in a given period. Acceptance is not automatic."
        />
        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {partnershipSteps.map((step, i) => (
            <li key={step.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="eyebrow text-terracotta">Step {i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Monitoring and support"
              title="Support that continues after placement"
            />
            <Card className="mt-8">
              <CheckList items={monitoring} />
            </Card>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Individual farmer records, flock records, balances and internal assessments are
              private and are never published on this website.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="Recoverable input support"
              title="What input support is — and is not"
            />
            <div className="mt-8 space-y-4">
              <Card className="border-gold/40 bg-gold/15">
                <h3 className="font-display text-base font-bold">It is</h3>
                <p className="mt-2 leading-relaxed">
                  Recoverable production support — birds, feed and inputs advanced under an agreed
                  partnership and recovered from production as set out in that agreement.
                </p>
              </Card>
              <Card>
                <h3 className="font-display text-base font-bold">It is not</h3>
                <CheckList
                  items={[
                    "A donation or grant",
                    "A conventional bank loan",
                    "An open public credit facility",
                    "An automatic entitlement for every applicant",
                  ]}
                />
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Farmer FAQs" title="Questions farmers ask us" />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">
                  Express Interest
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/faqs">Read all FAQs</Link>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Submitting an expression of interest does not guarantee acceptance into the
              partnership.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full">
              {farmerFaqs.items.map((item, i) => (
                <AccordionItem key={item.q} value={`farmer-${i}`}>
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
