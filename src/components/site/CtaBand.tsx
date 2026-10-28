import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { homeClosing, partnerPathways } from "@/content/site";
import { Section, SectionHeading } from "./primitives";

export function CtaBand({ copy = homeClosing }: { copy?: typeof homeClosing } = {}) {
  return (
    <Section tone="forest">
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow={copy.eyebrow}
            title={copy.title}
            lead={copy.lead}
            inverted
          />
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <Link to={copy.action.to}>
              {copy.action.label}
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
        <ul className="grid gap-3 lg:col-span-7 sm:grid-cols-2">
          {partnerPathways.map((p) => (
            <li key={p.title}>
              <Link
                to={p.to}
                className="group block h-full rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5 transition-colors hover:border-gold/60 hover:bg-primary-foreground/10"
              >
                <p className="flex items-center justify-between font-display text-lg font-bold text-primary-foreground">
                  {p.title}
                  <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
                </p>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">{p.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
