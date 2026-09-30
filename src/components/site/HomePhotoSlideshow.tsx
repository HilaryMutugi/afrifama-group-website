import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { homePhotoStory, imageSlots } from "@/content/site";
import { ImagePlaceholder } from "./ImagePlaceholder";

const slides = imageSlots.home.hero;

export function HomePhotoSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [hidden, setHidden] = useState(true);
  const [deferred, setDeferred] = useState(false);
  const [ready, setReady] = useState<Record<number, boolean>>({});
  const openingReady = Boolean(ready[0]);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduced(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion();
    updateVisibility();
    preference.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      preference.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  // Finish the opening photo first; only then fetch the other photographs.
  useEffect(() => {
    if (!openingReady || hidden) return;
    const delay = window.setTimeout(() => setDeferred(true), 1500);
    return () => window.clearTimeout(delay);
  }, [openingReady, hidden]);

  useEffect(() => {
    if (paused || reduced || hidden || !ready[active]) return;
    const timer = window.setInterval(() => {
      const next = (active + 1) % slides.length;
      if (ready[next]) setActive(next);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [active, paused, reduced, hidden, ready]);

  const select = (index: number) => {
    setPaused(true);
    setActive(index);
  };
  const controlClass =
    "grid size-10 place-items-center rounded-full text-primary transition-colors hover:bg-primary/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-40";

  return (
    <section
      aria-label="Afrifama in photographs"
      aria-roledescription="carousel"
      data-home-slideshow
      data-active-slide={active}
      data-rotation={paused || reduced || hidden ? "paused" : "playing"}
      className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-card"
    >
      <div className="relative aspect-[16/9] w-full">
        {slides.map((slot, index) =>
          index === 0 || deferred ? (
            <div
              key={slot}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}: ${homePhotoStory.slideLabels[index]}`}
              aria-hidden={index !== active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`}
            >
              <ImagePlaceholder
                slot={slot}
                priority={index === 0}
                onReady={() =>
                  setReady((previous) =>
                    previous[index] ? previous : { ...previous, [index]: true },
                  )
                }
                className="size-full"
              />
            </div>
          ) : null,
        )}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-x-3 border-t border-border px-3 py-2 sm:px-4">
        <p
          className="min-w-[9rem] font-display text-xs font-semibold text-primary sm:text-sm"
          aria-live="off"
        >
          {homePhotoStory.slideLabels[active]}
        </p>
        <div className="flex items-center" role="group" aria-label="Photograph controls">
          <button
            type="button"
            aria-label="Previous photograph"
            className={controlClass}
            onClick={() => select((active + slides.length - 1) % slides.length)}
            disabled={!ready[(active + slides.length - 1) % slides.length]}
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          {slides.map((slot, index) => (
            <button
              key={slot}
              type="button"
              aria-label={`Show ${homePhotoStory.slideLabels[index]?.toLowerCase()} photograph`}
              aria-pressed={active === index}
              className="grid size-8 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-40"
              onClick={() => select(index)}
              disabled={!ready[index]}
            >
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${active === index ? "bg-primary ring-2 ring-primary/25 ring-offset-2 ring-offset-secondary" : "bg-primary/30"}`}
              />
            </button>
          ))}
          <button
            type="button"
            aria-label="Next photograph"
            className={controlClass}
            onClick={() => select((active + 1) % slides.length)}
            disabled={!ready[(active + 1) % slides.length]}
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className={controlClass}
            aria-label={
              reduced
                ? "Automatic rotation off: reduced motion"
                : paused
                  ? "Resume slideshow"
                  : "Pause slideshow"
            }
            aria-pressed={paused || reduced}
            disabled={reduced}
            onClick={() => setPaused((value) => !value)}
          >
            {paused || reduced ? (
              <Play className="size-3.5" aria-hidden="true" />
            ) : (
              <Pause className="size-3.5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
