import { useEffect, useId, useRef, useState } from "react";
import { eggJourney } from "@/content/site";
import "./EggJourney.css";

const mural = eggJourney.mural;
const positions = [18, 36, 52, 70, 85];

export function EggJourney() {
  const [selected, setSelected] = useState(1);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const root = useRef<HTMLElement>(null);
  const lightPosition = useRef(36);
  const headingId = useId();
  const detailId = useId();

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);

    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const target = positions[selected] ?? positions[1]!;
    let frame = 0;
    const paint = (position: number) => {
      lightPosition.current = position;
      root.current?.style.setProperty("--stage-x", position + "%");
    };
    if (paused || reduced) {
      paint(target);
      return;
    }
    const start = lightPosition.current;
    const began = performance.now();
    const animate = (now: number) => {
      const progress = Math.min(1, (now - began) / 550);
      paint(start + (target - start) * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [selected, paused, reduced]);

  const stage = eggJourney.stages[selected] ?? eggJourney.stages[1];
  const select = (index: number) => setSelected((index + 5) % 5);
  const stageEvents = (index: number) => ({
    onPointerEnter: (event: React.PointerEvent<HTMLButtonElement>) => {
      if (event.pointerType === "mouse") select(index);
    },
    onFocus: () => select(index),
    onClick: () => select(index),
  });

  const artwork = (
    <>
      <img src={mural} width={2172} height={724} alt={eggJourney.alt} fetchPriority="high" />
      {["hen-head", "embryo", "hatch", "chick"].map((layer) => (
        <div
          key={layer}
          className={`motion-layer ${layer}`}
          style={{ backgroundImage: `url("${mural}")` }}
          aria-hidden="true"
        />
      ))}
      <div className="warmth" aria-hidden="true" />
      <div className="glow" aria-hidden="true" />
      <div className="stage-light" aria-hidden="true" />
    </>
  );

  return (
    <section
      ref={root}
      className={`egg-journey ${paused || reduced ? "paused" : ""}`}
      data-active={selected}
      aria-labelledby={headingId}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
          event.preventDefault();
          select(selected + (event.key === "ArrowRight" ? 1 : -1));
        }
      }}
    >
      <h2 id={headingId} className="sr-only">
        Explore the egg journey
      </h2>
      <div className="scene">
        {artwork}
        {eggJourney.stages.map((entry, index) => (
          <button
            key={entry.label}
            type="button"
            className="hit"
            style={{
              left: [0, 25, 45, 65, 85][index] + "%",
              width: [25, 20, 20, 20, 15][index] + "%",
            }}
            aria-label={`Explore ${entry.label.toLowerCase()}`}
            aria-pressed={selected === index}
            aria-controls={detailId}
            {...stageEvents(index)}
          >
            <span>{index + 1}</span>
          </button>
        ))}
      </div>
      <div className="journey-track" aria-hidden="true">
        <div className="journey-mark" style={{ left: selected * 20 + "%" }} />
      </div>
      <div className="stages" role="group" aria-label="Egg journey stages">
        {eggJourney.stages.map((entry, index) => (
          <button
            key={entry.label}
            type="button"
            className="stage"
            aria-pressed={selected === index}
            aria-controls={detailId}
            {...stageEvents(index)}
          >
            {entry.label}
          </button>
        ))}
      </div>
      <figure className="stage-closeup" aria-label={stage.label + " — enlarged view"}>
        <div
          className="scene closeup-scene"
          aria-hidden="true"
          style={{ transform: "translateX(-" + Math.min(83.33, positions[selected] ?? 36) + "%)" }}
        >
          {artwork}
        </div>
        <figcaption>{stage.label} · Selected stage</figcaption>
      </figure>
      <div id={detailId} className="detail" aria-live="polite" aria-atomic="true">
        <div key={selected} className="refresh">
          <strong>{stage.title}</strong>
          <p>{stage.copy}</p>
        </div>
      </div>
      <div className="footer">
        <small>{eggJourney.caption}</small>
        <div className="controls" role="group" aria-label="Journey controls">
          <button type="button" aria-label="Previous stage" onClick={() => select(selected - 1)}>
            ←
          </button>
          <button type="button" aria-label="Next stage" onClick={() => select(selected + 1)}>
            →
          </button>
          <button
            type="button"
            aria-pressed={paused || reduced}
            disabled={reduced}
            onClick={() => setPaused(!paused)}
          >
            {reduced ? "Motion reduced" : paused ? "Resume motion" : "Pause motion"}
          </button>
        </div>
      </div>
    </section>
  );
}
