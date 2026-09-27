import { Link } from "@tanstack/react-router";
import { company, primaryNav } from "@/content/site";

const socialPlaceholders = ["LinkedIn", "Facebook", "Instagram", "X"];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary-deep text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-extrabold tracking-tight">AFRIFAMA</p>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/75">
            {company.tagline}
          </p>
          <dl className="mt-6 space-y-1 text-sm text-primary-foreground/75">
            <div>
              <dt className="sr-only">Location</dt>
              <dd>{company.location}</dd>
            </div>
            <div>
              <dt className="sr-only">Market</dt>
              <dd>{company.reach}</dd>
            </div>
            <div className="pt-3">
              <dt className="inline">Telephone: </dt>
              <dd className="inline">{company.phonePlaceholder}</dd>
            </div>
            <div>
              <dt className="inline">Email: </dt>
              <dd className="inline">{company.emailPlaceholder}</dd>
            </div>
          </dl>
          <p className="mt-2 text-xs text-gold">
            Contact details are placeholders — replace before publishing.
          </p>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Website</h2>
          <ul className="mt-4 space-y-2 text-sm">
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
          <h2 className="eyebrow text-gold">Follow</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {socialPlaceholders.map((name) => (
              <li key={name} className="text-primary-foreground/60">
                {name} — link placeholder
              </li>
            ))}
          </ul>
          <h2 className="eyebrow mt-8 text-gold">Legal</h2>
          <ul className="mt-4 space-y-2 text-sm">
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
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. {company.location}.
          </p>
          <p>{company.positioning}</p>
        </div>
      </div>
    </footer>
  );
}
