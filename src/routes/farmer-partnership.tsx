import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
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
  CheckList,
} from "@/components/site/primitives";
import { company, farmerPartnership, faqGroups, imageSlots } from "@/content/site";
import trainingImage from "@/assets/farmer-training.jpg";

const farmerFaqs = faqGroups.find((group) => group.group === "Farmer Partnership");

export const Route = createFileRoute("/farmer-partnership")({
  head: () => ({
    meta: [
      { title: "Smallholder Egg Partnership — Farmer readiness | Afrifama" },
      {
        name: "description",
        content:
          "Understand Afrifama's structured commercial egg partnership, farm-readiness criteria, shared responsibilities, farmer journey and expression-of-interest process.",
      },
      { property: "og:title", content: "Afrifama Smallholder Egg Partnership" },
      {
        property: "og:description",
        content:
          "A structured commercial poultry partnership for selected farmers ready to manage a disciplined layer enterprise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/farmer-partnership` }],
    scripts: farmerFaqs
      ? [
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
        ]
      : [],
  }),
  component: FarmerPartnership,
});

const selectClassName =
  "mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function FarmerPartnership() {
  return (
    <>
      <header className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-5 pt-8 pb-14 lg:px-8 lg:pt-10 lg:pb-16">
          <Breadcrumbs
            items={[{ label: "Our Businesses", to: "/businesses" }, { label: "Farmer Partnership" }]}
          />
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-xs font-bold uppercase text-gold-foreground ring-1 ring-inset ring-gold/40">
                <span className="size-1.5 rounded-full bg-gold-foreground" aria-hidden="true" />
                {farmerPartnership.hero.label}
              </span>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-[3.25rem]">
                {farmerPartnership.hero.title}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {farmerPartnership.hero.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="#express-interest">
                    Express Interest <ArrowRight aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="#partnership-model">Understand the Partnership</a>
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <img
                src={trainingImage}
                data-image-slot={imageSlots.partnership[0]}
                alt="Afrifama field officer and poultry farmers reviewing farm records together"
                width={1408}
                height={1008}
                className="aspect-[4/3] w-full rounded-lg border border-border object-cover shadow-lift"
              />
            </div>
          </div>
        </div>
      </header>

      <Section id="partnership-model" className="scroll-mt-20" compact>
        <SectionHeading
          eyebrow="The partnership model"
          title={farmerPartnership.model.title}
          lead={farmerPartnership.model.body}
        />
        <div className="mt-10 grid border-y border-border md:grid-cols-2 md:divide-x md:divide-border">
          <div className="py-8 md:pr-10">
            <p className="eyebrow text-terracotta">Afrifama’s role</p>
            <h3 className="mt-2 text-xl font-bold">Afrifama may provide</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The exact support depends on the individual farmer agreement.
            </p>
            <div className="mt-6">
              <CheckList items={[...farmerPartnership.model.afrifamaRole]} />
            </div>
          </div>
          <div className="border-t border-border py-8 md:border-t-0 md:pl-10">
            <p className="eyebrow text-terracotta">Farmer’s role</p>
            <h3 className="mt-2 text-xl font-bold">The farmer provides</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              These responsibilities are essential to daily flock care and accountability.
            </p>
            <div className="mt-6">
              <CheckList items={[...farmerPartnership.model.farmerRole]} />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted" compact>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Farm readiness"
              title="Is your farm ready?"
              lead="The programme is designed for farmers who can operate a commercial layer flock with consistency and discipline."
            />
            <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted-foreground">
              Previous poultry experience is useful, but farm readiness, discipline and willingness to follow the production system are more important.
            </p>
          </div>
          <div className="lg:col-span-7">
            <CheckList items={[...farmerPartnership.readinessCriteria]} />
          </div>
        </div>
      </Section>

      <Section compact>
        <SectionHeading
          eyebrow="Selection criteria"
          title="Six readiness gates before selection"
          lead="Each farm is assessed against practical conditions that affect flock welfare, management and technical follow-up."
        />
        <ol className="mt-10 grid gap-x-8 gap-y-0 sm:grid-cols-2 lg:grid-cols-3">
          {farmerPartnership.readinessGates.map((gate, index) => (
            <li key={gate.title} className="border-t border-border py-6">
              <div className="flex gap-4">
                <span className="font-display text-sm font-bold text-terracotta">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-lg font-bold">{gate.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{gate.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-gold/40 bg-gold/10 p-4">
          <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold-foreground" aria-hidden="true" />
          <p className="font-semibold">All critical readiness gates must be passed before final selection.</p>
        </div>
      </Section>

      <Section tone="forest" compact>
        <SectionHeading
          eyebrow="Farmer journey"
          title="From first interest to production review"
          lead="Selection is a staged process. Each step creates the evidence needed for the next decision."
          inverted
        />
        <ol className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {farmerPartnership.journey.map((step) => (
            <li key={step.number} className="border-t border-primary-foreground/20 py-6">
              <span className="font-display text-sm font-bold text-gold">{step.number}</span>
              <h3 className="mt-3 font-display text-lg font-bold text-primary-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{step.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section compact>
        <SectionHeading
          eyebrow="Training and support"
          title="Support continues after placement"
          lead="Scheduled monitoring connects practical training with the farmer’s records and the flock’s production stage."
        />
        <div className="mt-10 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {farmerPartnership.support.map((item) => (
            <article key={item.title} className="border-t border-border py-6">
              <Check className="size-5 text-primary" aria-hidden="true" />
              <h3 className="mt-4 font-display text-base font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="muted" compact>
        <SectionHeading
          eyebrow="Recoverable input support"
          title="Support that helps the farmer begin production"
          lead={farmerPartnership.recoverableSupport.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-gold/40 bg-gold/10 p-6">
            <h3 className="font-display text-lg font-bold">What it is</h3>
            <div className="mt-5">
              <CheckList items={[...farmerPartnership.recoverableSupport.is]} />
            </div>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="font-display text-lg font-bold">What it is not</h3>
            <div className="mt-5">
              <CheckList items={[...farmerPartnership.recoverableSupport.isNot]} />
            </div>
          </div>
        </div>
      </Section>

      <Section id="farmer-faqs" className="scroll-mt-20" compact>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Farmer FAQs"
              title="Clear answers before you apply"
              lead="Six priority answers are shown here. The main FAQ page covers the wider programme."
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {farmerFaqs?.items.slice(0, 6).map((item, index) => (
                <AccordionItem key={item.q} value={`farmer-${index}`}>
                  <AccordionTrigger className="text-left font-display text-base font-bold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Button asChild variant="outline" className="mt-8"><Link to="/faqs">View all farmer FAQs</Link></Button>
          </div>
        </div>
      </Section>

      <Section id="express-interest" className="scroll-mt-20" tone="muted" compact>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Online applications opening soon"
              title="Tell us about your farm"
              lead="The form is prepared for a secure application service, but it is not accepting or storing information yet."
            />
            <Button asChild variant="outline" className="mt-6"><Link to="/contact">Contact Afrifama</Link></Button>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-card lg:col-span-8 sm:p-8">
            <div className="mb-7 border-l-2 border-gold pl-4"><p className="font-display font-bold">Online applications opening soon</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">This form is shown for preparation only. It cannot be submitted, and no information entered here is stored or sent.</p></div>
            <form
              aria-disabled="true"
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <fieldset disabled className="contents">
              <FormField id="fullName" label="Full name">
                <Input id="fullName" name="fullName" autoComplete="name" maxLength={100} />
              </FormField>
              <FormField id="phone" label="Phone number">
                <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
              </FormField>
              <FormField id="county" label="County">
                <Input id="county" name="county" autoComplete="address-level1" maxLength={80} />
              </FormField>
              <FormField id="location" label="Sub-county or location">
                <Input id="location" name="location" autoComplete="address-level2" maxLength={120} />
              </FormField>
              <SelectField id="experience" label="Poultry experience" options={["No previous experience", "Less than 1 year", "1–3 years", "More than 3 years"]} />
              <SelectField id="housingStatus" label="Housing status" options={["Not started", "Under construction", "Nearly complete", "Complete and ready"]} />
              <FormField id="housingCapacity" label="Estimated housing capacity">
                <Input id="housingCapacity" name="housingCapacity" type="number" min={1} max={100000} inputMode="numeric" />
              </FormField>
              <SelectField id="waterAvailability" label="Water availability" options={["Reliable on-farm supply", "Stored supply", "Seasonal or intermittent", "Not yet available"]} />
              <SelectField id="caretakerAvailability" label="Daily caretaker availability" options={["Full-time caretaker available", "Farmer available daily", "Shared or part-time care", "Not yet arranged"]} />
              <FormField id="preferredFlockSize" label="Preferred flock size">
                <Input id="preferredFlockSize" name="preferredFlockSize" type="number" min={1} max={100000} inputMode="numeric" />
              </FormField>
              <div className="sm:col-span-2">
                <Label htmlFor="motivation">Why do you want to join?</Label>
                <Textarea id="motivation" name="motivation" rows={5} maxLength={1000} className="mt-2" />
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start gap-3">
                  <Checkbox id="consent" name="consent" />
                  <Label htmlFor="consent" className="font-normal leading-relaxed">
                    I consent to Afrifama contacting me about this expression of interest.
                  </Label>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled>Online applications opening soon</Button>
              </div>
              </fieldset>
            </form>
            <div className="mt-7 border-t border-border pt-5"><h3 className="font-display text-base font-bold">Privacy and farmer dignity</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Individual farmer records, farm assessments, flock data, balances and photographs are treated responsibly. Personal information or identifiable farmer stories will not be published without permission.</p></div>
          </div>
        </div>
      </Section>

      <Section tone="forest" compact>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-gold">Next step</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Tell us about your farm
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">
              Until online applications open, use the Contact page to share your location, housing status and production goals.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Afrifama</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function FormField({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-2 [&_input]:mt-0">{children}</div>
    </div>
  );
}

function SelectField({ id, label, options }: { id: string; label: string; options: string[] }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select id={id} name={id} defaultValue="" className={selectClassName}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </div>
  );
}
