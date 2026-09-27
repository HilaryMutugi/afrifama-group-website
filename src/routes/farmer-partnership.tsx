import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Toaster } from "@/components/ui/sonner";
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
import { company, farmerPartnership, faqGroups } from "@/content/site";
import trainingImage from "@/assets/farmer-training.jpg";

const farmerFaqs = faqGroups.find((group) => group.group === "Farmer Partnership");

const interestSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(100),
  phone: z.string().trim().min(7, "Enter a valid phone number.").max(30),
  county: z.string().trim().min(2, "Enter your county.").max(80),
  location: z.string().trim().min(2, "Enter your sub-county or location.").max(120),
  experience: z.string().trim().min(1, "Select your poultry experience."),
  housingStatus: z.string().trim().min(1, "Select your housing status."),
  housingCapacity: z.coerce.number().int().min(1, "Enter an estimated capacity.").max(100000),
  waterAvailability: z.string().trim().min(1, "Select your water availability."),
  caretakerAvailability: z.string().trim().min(1, "Select caretaker availability."),
  preferredFlockSize: z.coerce.number().int().min(1, "Enter a preferred flock size.").max(100000),
  motivation: z.string().trim().min(20, "Please share at least 20 characters.").max(1000),
  consent: z.literal("on", { errorMap: () => ({ message: "Consent is required." }) }),
});

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
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

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
              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
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
                alt="Afrifama field officer and poultry farmers reviewing farm records together"
                width={1408}
                height={1008}
                className="aspect-[4/3] w-full rounded-lg border border-border object-cover shadow-lift"
              />
            </div>
          </div>
        </div>
      </header>

      <Section id="partnership-model" compact>
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
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-muted-foreground">
          Poultry production carries biological, operational and market risks. Selection, training and monitoring reduce risk, but they cannot remove it completely. Farmers remain responsible for disciplined daily flock management and compliance with the partnership agreement.
        </p>
      </Section>

      <Section id="farmer-faqs" compact>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Farmer FAQs"
              title="Clear answers before you apply"
              lead="The partnership is selective, responsibilities are agreed in writing, and application does not guarantee a place."
            />
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {farmerFaqs?.items.map((item, index) => (
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
            <div className="mt-8 border-l-2 border-primary pl-4">
              <h3 className="font-display text-base font-bold">Privacy and farmer dignity</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Individual farmer records, farm assessments, flock data, balances and photographs are treated responsibly. Personal information or identifiable farmer stories will not be published without permission.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="express-interest" tone="muted" compact>
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Expression of interest"
              title="Tell us about your farm"
              lead="Share the practical details we need for an initial readiness review."
            />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              This form is a front-end prototype. Details are not yet stored or delivered to Afrifama.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-6 shadow-card lg:col-span-8 sm:p-8">
            <p className="mb-7 border-l-2 border-gold pl-4 text-sm font-semibold leading-relaxed">
              Submitting this form does not guarantee acceptance. Afrifama will contact applicants when assessment capacity is available in their location.
            </p>
            <form
              noValidate
              className="grid gap-5 sm:grid-cols-2"
              onSubmit={(event) => {
                event.preventDefault();
                const form = event.currentTarget;
                const result = interestSchema.safeParse(Object.fromEntries(new FormData(form)));
                if (!result.success) {
                  const nextErrors: Record<string, string> = {};
                  result.error.issues.forEach((issue) => {
                    const field = issue.path[0];
                    if (typeof field === "string" && !nextErrors[field]) nextErrors[field] = issue.message;
                  });
                  setErrors(nextErrors);
                  setSubmitted(false);
                  toast.error("Please review the highlighted fields.");
                  return;
                }
                setErrors({});
                setSubmitted(true);
                form.reset();
                setConsent(false);
                toast.success("Expression of interest checked", {
                  description: "This prototype does not yet send or store your details.",
                });
              }}
            >
              <FormField id="fullName" label="Full name" error={errors["fullName"]}>
                <Input id="fullName" name="fullName" autoComplete="name" maxLength={100} />
              </FormField>
              <FormField id="phone" label="Phone number" error={errors["phone"]}>
                <Input id="phone" name="phone" type="tel" autoComplete="tel" maxLength={30} />
              </FormField>
              <FormField id="county" label="County" error={errors["county"]}>
                <Input id="county" name="county" autoComplete="address-level1" maxLength={80} />
              </FormField>
              <FormField id="location" label="Sub-county or location" error={errors["location"]}>
                <Input id="location" name="location" autoComplete="address-level2" maxLength={120} />
              </FormField>
              <SelectField id="experience" label="Poultry experience" error={errors["experience"]} options={["No previous experience", "Less than 1 year", "1–3 years", "More than 3 years"]} />
              <SelectField id="housingStatus" label="Housing status" error={errors["housingStatus"]} options={["Not started", "Under construction", "Nearly complete", "Complete and ready"]} />
              <FormField id="housingCapacity" label="Estimated housing capacity" error={errors["housingCapacity"]}>
                <Input id="housingCapacity" name="housingCapacity" type="number" min={1} max={100000} inputMode="numeric" />
              </FormField>
              <SelectField id="waterAvailability" label="Water availability" error={errors["waterAvailability"]} options={["Reliable on-farm supply", "Stored supply", "Seasonal or intermittent", "Not yet available"]} />
              <SelectField id="caretakerAvailability" label="Daily caretaker availability" error={errors["caretakerAvailability"]} options={["Full-time caretaker available", "Farmer available daily", "Shared or part-time care", "Not yet arranged"]} />
              <FormField id="preferredFlockSize" label="Preferred flock size" error={errors["preferredFlockSize"]}>
                <Input id="preferredFlockSize" name="preferredFlockSize" type="number" min={1} max={100000} inputMode="numeric" />
              </FormField>
              <div className="sm:col-span-2">
                <Label htmlFor="motivation">Why do you want to join?</Label>
                <Textarea id="motivation" name="motivation" rows={5} maxLength={1000} className="mt-2" aria-invalid={Boolean(errors["motivation"])} aria-describedby={errors["motivation"] ? "motivation-error" : undefined} />
                {errors["motivation"] ? <FieldError id="motivation-error" message={errors["motivation"]} /> : null}
              </div>
              <div className="sm:col-span-2">
                <div className="flex items-start gap-3">
                  <Checkbox id="consent" name="consent" checked={consent} onCheckedChange={(checked) => setConsent(checked === true)} aria-invalid={Boolean(errors["consent"])} aria-describedby={errors["consent"] ? "consent-error" : undefined} />
                  <Label htmlFor="consent" className="font-normal leading-relaxed">
                    I consent to Afrifama contacting me about this expression of interest.
                  </Label>
                </div>
                {errors["consent"] ? <FieldError id="consent-error" message={errors["consent"]} /> : null}
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" size="lg">Submit Expression of Interest</Button>
                <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
                  {submitted ? "Your entries were valid, but this prototype has not sent or stored them." : "Only the information shown above is requested."}
                </p>
              </div>
            </form>
          </div>
        </div>
      </Section>

      <Section tone="forest" compact>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-gold">Next step</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary-foreground sm:text-4xl">
              Ready to build a disciplined layer enterprise?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">
              Start by telling us about your farm, housing and production goals. Selection begins with readiness—not application order alone.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Button asChild size="lg" variant="secondary">
              <a href="#express-interest">Express Interest</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="#farmer-faqs">Read Farmer FAQs</a>
            </Button>
          </div>
        </div>
      </Section>
      <Toaster />
    </>
  );
}

function FormField({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="mt-2 [&_input]:mt-0">{children}</div>
      {error ? <FieldError id={`${id}-error`} message={error} /> : null}
    </div>
  );
}

function SelectField({ id, label, error, options }: { id: string; label: string; error: string | undefined; options: string[] }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <select id={id} name={id} defaultValue="" className={selectClassName} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined}>
        <option value="" disabled>Select an option</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
      {error ? <FieldError id={`${id}-error`} message={error} /> : null}
    </div>
  );
}

function FieldError({ id, message }: { id: string; message: string }) {
  return <p id={id} className="mt-1.5 text-sm text-destructive">{message}</p>;
}