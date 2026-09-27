import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/primitives";
import { company } from "@/content/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Afrifama" },
      {
        name: "description",
        content:
          "Terms governing use of the Afrifama website, including the status of information published about operational and in-development activities.",
      },
      { property: "og:title", content: "Terms of Use | Afrifama" },
      {
        property: "og:description",
        content: "Terms governing use of the Afrifama website and the information published on it.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/terms` }],
  }),
  component: Terms,
});

const sections = [
  {
    h: "About this website",
    p: "This website provides general information about Afrifama's activities in Kenya. It is an early version and content will change as the business develops.",
  },
  {
    h: "Status of published information",
    p: "Activities are labelled Operational, In Development or Future. Information about in-development or future activities describes intent and is not an offer, commitment or guarantee of availability.",
  },
  {
    h: "No offer or advice",
    p: "Nothing on this website is an offer of investment, credit or guaranteed supply, and nothing here is professional veterinary, nutritional or financial advice for a specific farm.",
  },
  {
    h: "Enquiries and applications",
    p: "Submitting an enquiry or expression of interest does not create a partnership, supply arrangement or entitlement to input support. Partnerships are established only through a written agreement with Afrifama.",
  },
  {
    h: "Intellectual property",
    p: "Afrifama's name, content and materials on this website may not be reproduced for commercial use without written permission.",
  },
  {
    h: "Contact",
    p: "Questions about these terms can be sent through the Contact page.",
  },
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        lead="How the information on this website should be read, and what an enquiry does and does not create."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />
      <Section>
        <div className="max-w-3xl space-y-8">
          {sections.map((s) => (
            <div key={s.h}>
              <h2 className="font-display text-xl font-bold">{s.h}</h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
