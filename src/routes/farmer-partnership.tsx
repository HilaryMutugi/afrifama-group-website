import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ClipboardCheck, Droplets, Home, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Breadcrumbs, CheckList } from "@/components/site/primitives";
import { PartnershipMural } from "@/components/site/PartnershipMural";
import { company, farmerPartnership, faqGroups, imageSlots } from "@/content/site";
import { photos } from "@/content/photos";
import trainingImage from "@/assets/farmer-training.jpg";

const farmerFaqs = faqGroups.find((group) => group.group === "Farmer Partnership");

export const Route = createFileRoute("/farmer-partnership")({
  head: () => ({
    meta: [
      { title: "Smallholder Egg Partnership — Farmer readiness | Afrifama" },
      {
        name: "description",
        content:
          "Understand Afrifama's structured commercial egg partnership, farm-readiness criteria, shared responsibilities and farmer journey.",
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

const readinessIcons = [Home, Droplets, ShieldCheck, ClipboardCheck];

function FarmerPartnership() {
  return (
    <>
      <header className="relative isolate min-h-[min(660px,calc(100svh-72px))] overflow-hidden bg-primary-deep text-primary-foreground">
        <img
          src={trainingImage}
          data-image-slot={imageSlots.partnership[0]}
          alt="Poultry farmers reviewing farm records during a field discussion"
          width={1408}
          height={1008}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 motion-safe:hover:scale-[1.025]"
        />
        <div className="absolute inset-0 bg-primary-deep/45" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gradient-to-t from-primary-deep via-primary-deep/65 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[min(660px,calc(100svh-72px))] max-w-7xl flex-col px-5 pt-8 pb-12 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Our Businesses", to: "/businesses" }, { label: "Farmer Partnership" }]}
          />
          <div className="mt-auto max-w-3xl animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase text-gold-foreground">
              <span className="size-1.5 rounded-full bg-gold-foreground" aria-hidden="true" />
              {farmerPartnership.hero.label}
            </span>
            <h1 className="mt-5 h1-hero font-extrabold">
              Building capable poultry farmers, one flock at a time.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
              A structured commercial partnership for selected farmers ready to manage a disciplined layer enterprise.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-7">
              <a href="#how-it-works">See how it works <ArrowRight aria-hidden="true" /></a>
            </Button>
            <p className="mt-6 max-w-md text-xs leading-relaxed text-primary-foreground/60">
              {farmerPartnership.captions.hero}
            </p>
          </div>
        </div>
      </header>

      <section className="bg-background section-pad">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-4">
            <p className="eyebrow text-terracotta">01 / The proposition</p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Afrifama connects farm readiness with birds, stage-specific feeds, practical training and scheduled monitoring.
            </p>
          </div>
          <blockquote className="border-l-2 border-gold pl-7 font-display h2-section font-bold text-primary lg:col-span-8">
            “A commercial partnership with responsibilities on both sides.”
          </blockquote>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-secondary/60 section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
          <figure className="group relative lg:col-span-7">
            <div className="overflow-hidden rounded-lg">
              <img
                src={photos.chickWater.src}
                srcSet={photos.chickWater.srcSet}
                sizes="(min-width: 1024px) 58vw, 100vw"
                data-image-slot={imageSlots.partnership[1]}
                alt="A poultry worker carefully giving water to a chick"
                width={photos.chickWater.width}
                height={photos.chickWater.height}
                loading="lazy"
                className="aspect-[7/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 max-w-xl text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold uppercase tracking-wide text-terracotta">Documentary photo</span>
              {" — "}{farmerPartnership.captions.chickCare}{" "}{photos.chickWater.credit}
            </figcaption>
          </figure>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="eyebrow text-terracotta">02 / Shared discipline</p>
            <h2 className="mt-4 h2-section font-extrabold">The flock succeeds through daily decisions.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Support is defined by the individual agreement. The farmer remains responsible for housing, water, equipment, care, biosecurity and records.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border">
              {["Farm readiness", "Practical training", "Daily records", "Scheduled review"].map((item) => (
                <div key={item} className="bg-background p-4 text-sm font-semibold text-primary">
                  <Check className="mb-3 size-4 text-terracotta" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-deep section-pad text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-5">
              <p className="eyebrow text-gold">03 / The partnership journey</p>
              <h2 className="mt-4 h2-section font-extrabold">From a ready farm to a managed production cycle.</h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-primary-foreground/75 lg:col-span-6 lg:col-start-7">
              Each step creates the evidence needed for the next decision. Application alone does not guarantee selection.
            </p>
          </div>
        </div>
        <div className="mt-10 sm:mt-14">
          <PartnershipMural />
        </div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-terracotta">04 / What matters</p>
            <h2 className="mt-4 h2-section font-extrabold">The essentials, without the fine-print overload.</h2>
          </div>
          <Tabs defaultValue="readiness" className="mt-10">
            <TabsList className="grid h-auto w-full grid-cols-3 rounded-lg bg-secondary p-1 lg:w-fit">
              <TabsTrigger value="readiness" className="min-h-11 whitespace-normal">Readiness</TabsTrigger>
              <TabsTrigger value="roles" className="min-h-11 whitespace-normal">Shared roles</TabsTrigger>
              <TabsTrigger value="support" className="min-h-11 whitespace-normal">Input support</TabsTrigger>
            </TabsList>
            <TabsContent value="readiness" className="mt-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {farmerPartnership.readinessGates.map((gate, index) => {
                  const Icon = readinessIcons[index % readinessIcons.length] ?? Check;
                  return (
                    <article key={gate.title} className="border-t border-border py-5">
                      <Icon className="size-5 text-terracotta" aria-hidden="true" />
                      <h3 className="mt-4 text-lg font-bold">{gate.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{gate.body}</p>
                    </article>
                  );
                })}
              </div>
              <p className="mt-5 flex items-start gap-3 border-l-2 border-gold pl-4 font-semibold">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold-foreground" aria-hidden="true" />
                All critical readiness gates must be passed before final selection.
              </p>
            </TabsContent>
            <TabsContent value="roles" className="mt-8">
              <div className="grid border-y border-border md:grid-cols-2 md:divide-x md:divide-border">
                <div className="py-6 md:pr-10">
                  <p className="eyebrow text-terracotta">Afrifama may provide</p>
                  <div className="mt-5"><CheckList items={[...farmerPartnership.model.afrifamaRole]} /></div>
                </div>
                <div className="border-t border-border py-6 md:border-t-0 md:pl-10">
                  <p className="eyebrow text-terracotta">The farmer provides</p>
                  <div className="mt-5"><CheckList items={[...farmerPartnership.model.farmerRole]} /></div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="support" className="mt-8">
              <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {farmerPartnership.recoverableSupport.body}
              </p>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div><p className="eyebrow text-primary">What it is</p><div className="mt-5"><CheckList items={[...farmerPartnership.recoverableSupport.is]} /></div></div>
                <div><p className="eyebrow text-terracotta">What it is not</p><div className="mt-5"><CheckList items={[...farmerPartnership.recoverableSupport.isNot]} /></div></div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="bg-secondary/60 section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-center lg:px-8">
          <div className="lg:col-span-5">
            <p className="eyebrow text-terracotta">05 / In practice</p>
            <h2 className="mt-4 h2-section font-extrabold">Monitoring turns observations into action.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Scheduled visits connect flock condition, feed and water management, biosecurity and farm records with practical corrective steps.
            </p>
            <div className="mt-8 space-y-4">
              {farmerPartnership.support.map((item) => (
                <details key={item.title} className="group border-b border-border pb-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    {item.title}<span className="text-terracotta transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </details>
              ))}
            </div>
          </div>
          <figure className="group relative lg:col-span-7 lg:pl-8">
            <div className="overflow-hidden rounded-lg">
              <img
                src={photos.fieldDemo.src}
                srcSet={photos.fieldDemo.srcSet}
                sizes="(min-width: 1024px) 55vw, 100vw"
                data-image-slot={imageSlots.partnership[2]}
                alt="Farmers gathered for a practical field demonstration in East Africa"
                width={photos.fieldDemo.width}
                height={photos.fieldDemo.height}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-xs leading-relaxed text-muted-foreground">
              <span className="font-semibold uppercase tracking-wide text-terracotta">Documentary photo</span>
              {" — "}{farmerPartnership.captions.fieldDemo}{" "}{photos.fieldDemo.credit}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-background section-pad">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-4">
            <p className="eyebrow text-terracotta">06 / Before you apply</p>
            <h2 className="mt-4 h2-section font-extrabold">Clear answers, carefully stated.</h2>
            <p className="mt-5 text-muted-foreground">Online applications are not yet open. No information is being accepted or stored on this page.</p>
            <Button asChild variant="outline" className="mt-7"><Link to="/faqs">Read all farmer FAQs</Link></Button>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {farmerFaqs?.items.slice(0, 6).map((item, index) => (
                <AccordionItem key={item.q} value={`farmer-${index}`}>
                  <AccordionTrigger className="text-left text-base font-bold">{item.q}</AccordionTrigger>
                  <AccordionContent className="max-w-2xl text-base leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-8 border-l-2 border-gold pl-4 text-sm leading-relaxed text-muted-foreground">
              Farmer records, assessments, flock data, balances and photographs are treated responsibly. Identifiable information is not published without permission.
            </p>
          </div>
        </div>
      </section>

      <section id="express-interest" className="scroll-mt-20 bg-primary-deep section-pad text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-12 lg:items-end lg:px-8">
          <div className="lg:col-span-8">
            <p className="eyebrow text-gold">Next step</p>
            <h2 className="mt-4 h2-section font-extrabold">Tell us about your farm.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-primary-foreground/75">
              Online applications are opening soon. For now, contact Afrifama with your location, housing status and production goals.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Afrifama <ArrowRight aria-hidden="true" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}