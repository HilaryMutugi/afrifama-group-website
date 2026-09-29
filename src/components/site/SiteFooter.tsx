import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { aboutStory, company, primaryNav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.25fr_1.35fr_0.9fr] lg:gap-8 lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold tracking-tight">AFRIFAMA</p>
          <p className="mt-3 max-w-[38ch] font-display text-base font-bold text-primary-foreground">
            {aboutStory.opening}
          </p>
          <p className="mt-2 max-w-[42ch] text-sm leading-relaxed text-primary-foreground/75">
            {aboutStory.scene}
          </p>
          <Link
            to="/about"
            className="mt-3 inline-flex items-center gap-2 border-b border-gold/70 pb-1 font-display text-sm font-bold text-primary-foreground transition-colors hover:text-gold"
          >
            {aboutStory.readMore}
            <ArrowRight className="size-4 text-gold" aria-hidden="true" />
          </Link>
          <dl className="mt-4 space-y-1 text-sm text-primary-foreground/75">
            <div>
              <dt className="sr-only">Location</dt>
              <dd>{company.location}</dd>
            </div>
            <div>
              <dt className="sr-only">Market</dt>
              <dd>{company.reach}</dd>
            </div>
          </dl>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Website</h2>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm lg:grid-cols-2 lg:gap-x-8">
            {primaryNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Legal</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            <li>
              <Link
                to="/privacy"
                className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-primary-foreground/75 transition-colors hover:text-primary-foreground"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 border-b border-gold/70 pb-1 font-display text-sm font-bold text-primary-foreground transition-colors hover:text-gold"
          >
            Contact Afrifama
            <ArrowRight className="size-4 text-gold" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. {company.location}.
          </p>
          <p>{company.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
