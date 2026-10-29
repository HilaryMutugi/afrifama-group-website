import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Info, MapPin } from "lucide-react";
import { Section } from "@/components/site/primitives";
import { company, contactPage, enquiryRoutes } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: contactPage.metaTitle },
      { name: "description", content: contactPage.metaDescription },
      { property: "og:title", content: contactPage.metaTitle },
      { property: "og:description", content: contactPage.metaDescription },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/contact` }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section aria-labelledby="contact-title" className="bg-primary-deep text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-normal text-gold">
            {contactPage.eyebrow}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-end lg:gap-16">
            <div>
              <h1 id="contact-title" className="h1-page max-w-[18ch] font-extrabold tracking-normal">
                {contactPage.title}
              </h1>
              <p className="body-copy mt-4 text-primary-foreground/85">{contactPage.lead}</p>
            </div>
            <div className="border-t border-primary-foreground/25 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm text-gold">{contactPage.locationLabel}</p>
              <p className="mt-2 flex items-center gap-2 font-display text-lg font-bold tracking-normal">
                <MapPin className="size-5 shrink-0 text-gold" aria-hidden="true" />
                {company.location}
              </p>
              <p className="mt-2 max-w-[38ch] text-base leading-relaxed text-primary-foreground/85">
                {company.reach}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_2fr] lg:gap-12">
          <aside aria-labelledby="enquiry-status" className="border-l-4 border-gold bg-secondary p-6">
            <div className="flex items-center gap-2 text-sm font-semibold text-secondary-foreground">
              <Info className="size-4 shrink-0" aria-hidden="true" />
              <p>{contactPage.statusLabel}</p>
            </div>
            <h2 id="enquiry-status" className="mt-4 font-display text-xl font-bold leading-snug tracking-normal">
              {contactPage.statusHeading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-secondary-foreground">
              {contactPage.statusBody}
            </p>
          </aside>

          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-normal sm:text-3xl">
              {contactPage.routesHeading}
            </h2>
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {contactPage.routesLead}
            </p>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {enquiryRoutes.map((route, index) => {
                const contents = (
                  <>
                    <span className="text-sm font-semibold text-muted-foreground" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-lg font-bold leading-snug tracking-normal">
                      {route.label}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{route.help}</p>
                    {route.nextStep ? (
                      <span className="mt-6 flex items-center justify-between gap-3 text-base font-semibold text-primary">
                        {route.nextStep.label}
                        <ArrowUpRight className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
                      </span>
                    ) : (
                      <p className="mt-6 text-sm font-medium text-muted-foreground">
                        {contactPage.unavailableLabel}
                      </p>
                    )}
                  </>
                );

                return (
                  <li key={route.value} className="min-w-0">
                    {route.nextStep ? (
                      <Link
                        to={route.nextStep.to}
                        className="group flex h-full min-h-11 flex-col rounded-md border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-accent/40 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                      >
                        {contents}
                      </Link>
                    ) : (
                      <div className="h-full rounded-md border border-border bg-secondary/40 p-6">
                        {contents}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}