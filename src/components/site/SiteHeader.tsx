import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { primaryNav, navCta, company } from "@/content/site";
import { Button } from "@/components/ui/button";

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center gap-2.5" aria-label={`${company.name} home`}>
      <span className="flex size-9 items-center justify-center rounded-lg bg-forest text-primary-foreground">
        <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true" fill="none">
          <path
            d="M4 19c0-5 3.6-9 8-9 2.2 0 4 1.3 4 3.4C16 16 13.6 17 11 17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M12 10V6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="5" r="1.6" fill="currentColor" />
        </svg>
      </span>
      <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
        AFRIFAMA
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {desktopNav.map((item) => {
              const isBiz = item.to === "/businesses";
              const active = isBiz
                ? businessNav.some((b) => pathname === b.to || pathname.startsWith(`${b.to}/`))
                : pathname === item.to || pathname.startsWith(`${item.to}/`);
              const cls = `inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground ${
                active ? "text-primary" : "text-muted-foreground"
              }`;
              if (!isBiz) {
                return (
                  <li key={item.to}>
                    <Link to={item.to} className={cls}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              return (
                <li
                  key={item.to}
                  className="relative"
                  onMouseEnter={() => setBizOpen(true)}
                  onMouseLeave={() => setBizOpen(false)}
                >
                  <button
                    type="button"
                    className={cls}
                    aria-expanded={bizOpen}
                    aria-haspopup="true"
                    onClick={() => setBizOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                  {bizOpen ? (
                    <div className="absolute left-0 top-full pt-2">
                      <ul className="w-56 rounded-xl border border-border bg-popover p-1.5 shadow-card">
                        {businessNav.map((b) => (
                          <li key={b.to}>
                            <Link
                              to={b.to}
                              onClick={() => setBizOpen(false)}
                              className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-secondary"
                            >
                              {b.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to={navCta.to}>{navCta.label}</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background xl:hidden"
        >
          <ul className="mx-auto max-w-7xl px-5 py-3 lg:px-8">
            {primaryNav.map((item) => {
              const active = pathname === item.to;
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={`block border-b border-border/60 py-3 text-base font-medium ${
                      active ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-4">
              <Button asChild className="w-full">
                <Link to={navCta.to} onClick={() => setOpen(false)}>
                  {navCta.label}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
