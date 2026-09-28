import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { company, primaryNav } from "@/content/site";

export function SiteFooter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (pathname === "/") {
    return (
      <footer className="border-t border-primary-foreground/15 bg-primary-deep text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 py-8 md:flex-row md:items-start md:justify-between lg:px-8">
          <div>
            <p className="font-display text-lg font-extrabold tracking-tight">AFRIFAMA</p>
            <p className="mt-1 text-sm text-primary-foreground/70">{company.location}</p>
          </div>
          <nav aria-label="Footer" className="flex max-w-2xl flex-wrap gap-x-6 gap-y-3 text-sm">
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/businesses" className="hover:text-gold">Our businesses</Link>
            <Link to="/farmer-partnership" className="hover:text-gold">Farmer partnership</Link>
            <Link to="/impact" className="hover:text-gold">Impact</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </nav>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-5 py-4 text-xs text-primary-foreground/60 lg:px-8">
            <p>© {new Date().getFullYear()} {company.name}</p>
            <div className="flex gap-5"><Link to="/privacy" className="hover:text-gold">Privacy</Link><Link to="/terms" className="hover:text-gold">Terms</Link></div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="border-t border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 lg:grid-cols-[1.25fr_1.35fr_0.9fr] lg:gap-8 lg:px-8">
        <div>
          <p className="font-display text-xl font-extrabold tracking-tight">AFRIFAMA</p>
          <p className="mt-2 max-w-[38ch] text-sm leading-relaxed text-primary-foreground/75">
            {company.tagline}
          </p>
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
