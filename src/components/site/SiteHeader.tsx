import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronDown, Menu, X } from "lucide-react";
import { primaryNav, navCta, company, desktopNav, businessNav } from "@/content/site";
import { Button } from "@/components/ui/button";
import { isCurrentPage, isActiveSection } from "./navigation";

const navFocus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link to="/" activeOptions={{ exact: true }} onClick={onNavigate} className={`group flex min-h-11 items-center gap-2.5 rounded-md ${navFocus}`} aria-label={`${company.name} home`}>
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
  const [bizOpen, setBizOpen] = useState(false);
  const businessTrigger = useRef<HTMLButtonElement>(null);
  const mobileTrigger = useRef<HTMLButtonElement>(null);
  const routeClosing = useRef(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const bizPaths = new Set(businessNav.map((b) => b.to));
  const mobileMain = primaryNav.filter((item) => !bizPaths.has(item.to));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && bizOpen) {
        e.preventDefault();
        setBizOpen(false);
        businessTrigger.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [bizOpen]);

  useEffect(() => {
    setOpen(false);
    setBizOpen(false);
  }, [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const closeOnResize = () => {
      setOpen(false);
      setBizOpen(false);
    };
    desktop.addEventListener("change", closeOnResize);
    return () => desktop.removeEventListener("change", closeOnResize);
  }, []);

  const closeForNavigation = () => {
    routeClosing.current = true;
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {desktopNav.map((item) => {
              const isBiz = item.to === "/businesses";
              const active = isBiz
                ? businessNav.some((b) => isActiveSection(pathname, b.to))
                : isActiveSection(pathname, item.to);
              const cls = `inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-secondary hover:text-secondary-foreground ${navFocus} ${
                active ? "text-primary" : "text-muted-foreground"
              }`;
              if (!isBiz) {
                return (
                  <li key={item.to}>
                    <Link to={item.to} activeOptions={{ exact: true }} className={cls} aria-current={isCurrentPage(pathname, item.to) ? "page" : undefined}>
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
                  onMouseLeave={(e) => {
                    if (!e.currentTarget.contains(document.activeElement)) setBizOpen(false);
                  }}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setBizOpen(false);
                  }}
                >
                  <Button
                    ref={businessTrigger}
                    variant="ghost"
                    type="button"
                    className={cls}
                    aria-expanded={bizOpen}
                    aria-controls="business-nav"
                    onClick={() => setBizOpen((v) => !v)}
                  >
                    {item.label}
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </Button>
                  {bizOpen ? (
                    <div className="absolute left-0 top-full pt-2">
                      <ul id="business-nav" className="w-56 rounded-md border border-border bg-popover p-1.5 shadow-card">
                        {businessNav.map((b) => (
                          <li key={b.to}>
                            <Link
                              to={b.to}
                              activeOptions={{ exact: true }}
                              onClick={() => setBizOpen(false)}
                              aria-current={isCurrentPage(pathname, b.to) ? "page" : undefined}
                              className={`block rounded-md px-3 py-2 text-sm hover:bg-secondary ${navFocus} ${isActiveSection(pathname, b.to) ? "text-primary" : "text-foreground"}`}
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

        <div className="mr-14 flex items-center gap-2 lg:mr-0">
          <Button asChild size="sm" className={`hidden sm:inline-flex ${navFocus}`}>
            <Link to={navCta.to} activeOptions={{ exact: true }} aria-current={isCurrentPage(pathname, navCta.to) ? "page" : undefined}>{navCta.label}</Link>
          </Button>
        </div>
      </div>

      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Trigger asChild>
          <Button ref={mobileTrigger} type="button" variant="outline" size="icon"
            aria-expanded={open} aria-controls="mobile-nav" aria-label="Open menu"
            className={`absolute right-5 top-2.5 min-h-11 min-w-11 lg:hidden ${navFocus}`}>
            <Menu aria-hidden="true" />
          </Button>
        </DialogPrimitive.Trigger>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-background" />
          <DialogPrimitive.Content id="mobile-nav" aria-describedby={undefined}
            className="fixed inset-x-0 top-0 z-[60] max-h-dvh overflow-y-auto bg-background text-foreground outline-none"
            onCloseAutoFocus={(event) => {
              event.preventDefault();
              if (routeClosing.current) {
                routeClosing.current = false;
                document.getElementById("main")?.focus({ preventScroll: true });
              } else if (mobileTrigger.current?.getClientRects().length) {
                mobileTrigger.current.focus();
              } else {
                businessTrigger.current?.focus();
              }
            }}>
          <DialogPrimitive.Title className="sr-only">Mobile navigation</DialogPrimitive.Title>
          <div className="flex h-16 items-center justify-between border-b border-border px-5">
            <Wordmark onNavigate={closeForNavigation} />
            <DialogPrimitive.Close asChild>
              <Button variant="outline" size="icon" aria-label="Close menu" className={`min-h-11 min-w-11 ${navFocus}`}>
                <X aria-hidden="true" />
              </Button>
            </DialogPrimitive.Close>
          </div>
        <nav
          aria-label="Mobile"
        >
          <ul className="mx-auto max-w-7xl px-5 py-3 lg:px-8">
            {mobileMain.map((item, i) => {
              const active = isCurrentPage(pathname, item.to);
              const row = (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    activeOptions={{ exact: true }}
                    onClick={closeForNavigation}
                    aria-current={active ? "page" : undefined}
                    className={`flex min-h-11 items-center rounded-sm border-b border-border/60 py-3 text-base font-medium ${navFocus} ${
                      active ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
              if (i !== 1) return row;
              return [
                row,
                <li key="biz-group" className="border-b border-border/60 py-3">
                  <p className="eyebrow text-terracotta">Our businesses</p>
                  <ul className="mt-2 grid grid-cols-2 gap-x-4">
                    {businessNav.map((b) => {
                      const on = isCurrentPage(pathname, b.to);
                      return (
                        <li key={b.to}>
                          <Link
                            to={b.to}
                            activeOptions={{ exact: true }}
                            onClick={closeForNavigation}
                            aria-current={on ? "page" : undefined}
                            className={`flex min-h-11 items-center rounded-sm py-2 text-[0.9375rem] font-medium ${navFocus} ${on ? "text-primary" : "text-foreground"}`}
                          >
                            {b.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>,
              ];
            })}
            <li className="pt-4">
              <Button asChild className={`min-h-11 w-full ${navFocus}`}>
                <Link to={navCta.to} activeOptions={{ exact: true }} onClick={closeForNavigation} aria-current={isCurrentPage(pathname, navCta.to) ? "page" : undefined}>
                  {navCta.label}
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </header>
  );
}
