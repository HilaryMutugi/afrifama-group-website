import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { partnerPathways } from "@/content/site";
import { Section, SectionHeading } from "./primitives";

export function CtaBand() {
  return (
    <Section tone="forest">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Partnership"
            title="Building better poultry systems takes the right partners."
            lead="Tell us where you fit and what you are trying to build. We will come back with a practical next step."
            inverted
          />
          <Button asChild variant="secondary" size="lg" className="mt-8">
            <Link to="/contact">
              Start a Conversation
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
