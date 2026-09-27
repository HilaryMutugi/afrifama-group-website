import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageHero, Section, Card } from "@/components/site/primitives";
import { company, enquiryRoutes } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Afrifama — Feed, farmer, supplier and partnership enquiries" },
      {
        name: "description",
        content:
          "Contact Afrifama in Kilifi County, Kenya. Separate enquiry routes for feed customers, farmers, suppliers, technical and genetics partners, and investors.",
      },
      { property: "og:title", content: "Contact Afrifama" },
      {
        property: "og:description",
        content:
          "Choose your enquiry route — feed, farmer partnership, supplier, technical or investment — and start a conversation.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  const [route, setRoute] = useState(enquiryRoutes[0]!.value);
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you are trying to build."
        lead="Choose the enquiry route that fits you. Messages go to the Afrifama team in Kilifi County, Kenya."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-xl font-bold">Enquiry routes</h2>
            <p className="mt-2 text-muted-foreground">
              Selecting the right route helps us reply with something useful.
            </p>
            <div role="radiogroup" aria-label="Enquiry route" className="mt-6 space-y-2">
              {enquiryRoutes.map((r) => {
                const active = r.value === route;
                return (
                  <button
                    key={r.value}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => setRoute(r.value)}
                    className={`w-full rounded-xl border p-4 text-left transition-colors ${
                      active
                        ? "border-primary bg-primary/5"
                        : "border-border bg-card hover:bg-secondary/60"
                    }`}
                  >
                    <span className="font-display text-base font-bold">{r.label}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{r.help}</span>
                  </button>
                );
              })}
            </div>

            <Card className="mt-8">
              <h3 className="font-display text-base font-bold">Afrifama</h3>
              <p className="mt-2 text-sm text-muted-foreground">{company.location}</p>
              <p className="text-sm text-muted-foreground">{company.reach}</p>
              <dl className="mt-4 space-y-1 text-sm">
                <div>
                  <dt className="inline font-semibold">Telephone: </dt>
                  <dd className="inline">{company.phonePlaceholder}</dd>
                </div>
                <div>
                  <dt className="inline font-semibold">Email: </dt>
                  <dd className="inline">{company.emailPlaceholder}</dd>
                </div>
              </dl>
              <p className="mt-3 text-xs text-terracotta">
                Placeholder contact details — to be replaced by Afrifama.
              </p>
            </Card>
          </div>

          <div className="lg:col-span-7">
            <Card>
              <h2 className="font-display text-xl font-bold">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                This form is a front-end prototype. Messages are not yet stored or delivered — use
                the contact details while it is being connected.
              </p>
              <form
                className="mt-6 grid gap-5 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                  toast.success("Enquiry captured in this prototype", {
                    description:
                      "Message delivery is not connected yet. Please use the listed contact details in the meantime.",
                  });
                }}
              >
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" name="name" required autoComplete="name" className="mt-2" />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="org">Farm, business or organisation</Label>
                  <Input id="org" name="org" className="mt-2" />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2"
                  />
                </div>
                <div className="sm:col-span-1">
                  <Label htmlFor="phone">Telephone</Label>
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="location">County and ward</Label>
                  <Input id="location" name="location" className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="enquiry-route">Enquiry route</Label>
                  <select
                    id="enquiry-route"
                    name="enquiryRoute"
                    value={route}
                    onChange={(e) => setRoute(e.target.value)}
                    className="mt-2 h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
                  >
                    {enquiryRoutes.map((r) => (
                      <option key={r.value} value={r.value}>
                        {r.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea id="message" name="message" rows={6} required className="mt-2" />
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" size="lg">
                    Send enquiry
                  </Button>
                  <p aria-live="polite" className="mt-3 text-sm text-muted-foreground">
                    {submitted
                      ? "Thank you — your details were captured in this prototype only."
                      : "We aim to respond to practical enquiries first."}
                  </p>
                </div>
              </form>
              <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
                Farmers: submitting an enquiry is an expression of interest and does not guarantee
                acceptance into the partnership.{" "}
                <Link to="/farmer-partnership" className="text-primary hover:underline">
                  Read how selection works
                </Link>
                .
              </p>
            </Card>
          </div>
        </div>
      </Section>
      <Toaster />
    </>
  );
}
