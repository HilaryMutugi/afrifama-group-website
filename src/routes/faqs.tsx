import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero, Section } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company, faqGroups } from "@/content/site";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Feeds, farmer partnership, poultry and genetics | Afrifama" },
      { property: "og:title", content: "FAQs — Feeds, farmer partnership, poultry and genetics | Afrifama" },
      { property: "og:url", content: "/faqs" },
      {
        name: "description",
        content:
          "Answers to common questions about Afrifama: the business, feed products, the farmer partnership, poultry production, genetics and hatchery development, and partnerships.",
      },
      {
        property: "og:description",
        content: "Answers to common questions about Afrifama: the business, feed products, the farmer partnership, poultry production, genetics and hatchery development, and partnerships.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/faqs` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqGroups.flatMap((g) =>
            g.items.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: { "@type": "Answer", text: item.a },
            })),
          ),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Questions we are asked most often."
        lead="Grouped by topic, answered factually. If something is missing, send us the question through the contact page."
        breadcrumbs={[{ label: "FAQs" }]}
      />

      <Section>
        <div className="grid gap-5 lg:grid-cols-2">
          {faqGroups.map((group) => (
            <div
              key={group.group}
              className="rounded-2xl border border-border bg-card p-6 shadow-card"
            >
              <h2 className="font-display text-xl font-bold">{group.group}</h2>
              <Accordion type="single" collapsible className="mt-4 w-full">
                {group.items.map((item, i) => (
                  <AccordionItem key={item.q} value={`${group.group}-${i}`}>
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
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
