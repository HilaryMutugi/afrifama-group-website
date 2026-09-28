import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/primitives";
import { company } from "@/content/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Afrifama" },
      { property: "og:title", content: "Privacy Policy | Afrifama" },
      { property: "og:url", content: "/privacy" },
      {
        name: "description",
        content:
          "How Afrifama handles enquiry information and farmer data, and what this early version of the website does and does not collect.",
      },
      {
        property: "og:description",
        content: "How Afrifama handles enquiry information and farmer data, and what this early version of the website does and does not collect.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/privacy` }],
  }),
  component: Privacy,
});

const sections = [
  {
    h: "Scope of this policy",
    p: "This is a draft policy published with the first version of the Afrifama website. It will be reviewed and finalised before the website is used to collect information at scale.",
  },
  {
    h: "Information we collect",
    p: "The enquiry form on this website is a front-end prototype and does not currently store or transmit submissions. When enquiry handling is connected, we will collect only the details needed to respond: name, organisation, contact details, location and the content of your message.",
  },
  {
    h: "Farmer and flock data",
    p: "Farmer records, flock records, balances and internal assessments are treated as confidential business information. They are never published on this website.",
  },
  {
    h: "How information is used",
    p: "Enquiry information is used to respond to you, assess suitability for the relevant Afrifama activity, and keep a record of the conversation. We do not sell personal information.",
  },
  {
    h: "Retention and access",
    p: "Information is kept only as long as needed for the purpose it was provided for, or as required by Kenyan law. You may request a copy of the information we hold about you, or ask us to correct or delete it.",
  },
  {
    h: "Contact",
    p: "Questions about this policy can be sent through the Contact page.",
  },
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="A draft policy published with this first version of the website. It will be finalised before enquiry handling goes live."
        breadcrumbs={[{ label: "Privacy Policy" }]}
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
