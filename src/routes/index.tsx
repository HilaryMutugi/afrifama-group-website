import { useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDownRight, ArrowRight, MoveUpRight } from "lucide-react";
import { company, homepageStory as story } from "@/content/site";
import "@/styles/homepage.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Afrifama — Building a stronger poultry system" },
      { name: "description", content: "Afrifama connects poultry production, animal feeds, structured farmer partnerships and the foundations for stronger poultry genetics in Kenya." },
      { property: "og:title", content: "Afrifama — Building a stronger poultry system" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/` }],
  }),
  component: Home,
});

function PhotoPlaceholder({ index, label, className = "" }: { index: string; label: string; className?: string }) {
  return (
    <div className={`home-placeholder ${className}`} role="img" aria-label={`${label}: ${story.placeholderStatus}`}>
      <span className="home-placeholder-monogram" aria-hidden="true">A.</span>
      <div className="home-placeholder-copy" aria-hidden="true">
        <span>{index} / AFRIFAMA</span>
        <strong>{label}</strong>
        <small>{story.placeholderStatus}</small>
      </div>
    </div>
  );
}

function Home() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".home-reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="homepage-rebuild">
      <section className="home-hero" aria-labelledby="home-title">
        <div className="home-hero-copy"><div className="home-hero-inner">
          <p className="home-kicker home-kicker-light"><span />{story.hero.eyebrow}</p>
          <h1 id="home-title" className="home-display">{story.hero.titleLines.map((line, index) => <span key={line}>{line}{index < story.hero.titleLines.length - 1 ? " " : ""}</span>)}</h1>
          <p className="home-hero-lead">{story.hero.body}</p>
          <div className="home-actions">
            <a href="#our-model" className="home-button home-button-gold">{story.hero.primary}<ArrowRight size={18} aria-hidden="true" /></a>
            <Link to="/contact" className="home-text-link home-text-link-light">{story.hero.secondary}<ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <div className="home-hero-bottom"><span className="home-rule" />{story.hero.chain}</div>
        </div></div>
        <div className="home-hero-photo">
          <PhotoPlaceholder index="01" label={story.photoSlots.hero} className="home-placeholder-hero" />
        </div>
      </section>

      <section className="home-origin home-section" aria-labelledby="origin-title"><div className="home-container home-origin-grid">
        <div className="home-origin-photo home-reveal">
          <PhotoPlaceholder index="02" label={story.photoSlots.origin} />
        </div>
        <div className="home-origin-copy home-reveal">
          <p className="home-kicker"><span />{story.origin.eyebrow}</p>
          <h2 id="origin-title" className="home-heading home-heading-editorial">{story.origin.title}</h2>
          <p className="home-body">{story.origin.body}</p>
          <p className="home-body home-body-followup">{story.origin.secondBody}</p>
          <Link to="/about" className="home-text-link home-text-link-dark">{story.origin.link}<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
      </div></section>

      <section className="home-challenge home-section" aria-labelledby="challenge-title"><div className="home-container">
        <div className="home-section-head home-reveal"><div>
          <p className="home-kicker"><span />{story.challenge.eyebrow}</p>
          <h2 id="challenge-title" className="home-heading">{story.challenge.title}</h2>
        </div><p className="home-body">{story.challenge.body}</p></div>
        <ol className="home-challenge-grid">{story.challenge.gaps.map((gap, index) => (
          <li key={gap.title} className="home-challenge-item home-reveal">
            <span className="home-item-number">0{index + 1}</span>
            <h3>{gap.title}</h3><p>{gap.body}</p>
          </li>
        ))}</ol>
      </div></section>

      <section id="our-model" className="home-model home-section" aria-labelledby="model-title"><div className="home-container">
        <div className="home-section-head home-reveal"><div>
          <p className="home-kicker"><span />{story.model.eyebrow}</p>
          <h2 id="model-title" className="home-heading">{story.model.title}</h2>
        </div><p className="home-body">{story.model.body}</p></div>
        <div className="home-model-grid">{story.model.areas.map((area, index) => (
          <Link to={area.to} key={area.number} className="home-model-card home-reveal">
            <div className="home-model-image"><PhotoPlaceholder index={area.number} label={story.photoSlots.model[index] ?? area.title} /></div>
            <div className="home-model-content">
              <div className="home-model-meta"><span>{area.number} / {area.status}</span><MoveUpRight size={18} aria-hidden="true" /></div>
              <h3>{area.title}</h3><p>{area.body}</p>
            </div>
          </Link>
        ))}</div>
        <div className="home-model-rail" aria-hidden="true"><span /><span /><span /><span /></div>
      </div></section>

      <section className="home-farmers home-section" aria-labelledby="farmers-title"><div className="home-container home-farmers-grid">
        <div className="home-farmers-copy home-reveal">
          <p className="home-kicker home-kicker-light"><span />{story.farmers.eyebrow}</p>
          <h2 id="farmers-title" className="home-heading home-heading-editorial">{story.farmers.title}</h2>
          <p className="home-body">{story.farmers.body}</p>
          <p className="home-body home-body-followup">{story.farmers.secondBody}</p>
          <Link to="/farmer-partnership" className="home-button home-button-outline">{story.farmers.link}<ArrowRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className="home-farmers-images home-reveal">
          <PhotoPlaceholder index="07" label={story.photoSlots.farmerMain} className="home-farmers-main" />
          <PhotoPlaceholder index="08" label={story.photoSlots.farmerDetail} className="home-farmers-small home-placeholder-small" />
          <span className="home-farmers-stamp">{story.farmers.imageLabel}<ArrowDownRight size={24} aria-hidden="true" /></span>
        </div>
      </div></section>

      <section className="home-impact home-section" aria-labelledby="impact-title"><div className="home-container">
        <div className="home-section-head home-reveal"><div>
          <p className="home-kicker"><span />{story.impact.eyebrow}</p>
          <h2 id="impact-title" className="home-heading">{story.impact.title}</h2>
        </div><p className="home-body">{story.impact.body}</p></div>
        <ol className="home-impact-grid">{story.impact.outcomes.map((outcome, index) => (
          <li key={outcome.title} className="home-impact-item home-reveal">
            <span className="home-item-number">0{index + 1}</span>
            <h3>{outcome.title}</h3><p>{outcome.body}</p>
          </li>
        ))}</ol>
      </div></section>

      <section className="home-operations home-section" aria-labelledby="operations-title"><div className="home-container">
        <div className="home-section-head home-reveal"><div>
          <p className="home-kicker"><span />{story.operations.eyebrow}</p>
          <h2 id="operations-title" className="home-heading">{story.operations.title}</h2>
        </div><p className="home-body">{story.operations.body}</p></div>
        <div className="home-story-grid">
          <figure className="home-story-feature home-reveal"><div className="home-story-image"><PhotoPlaceholder index="09" label={story.photoSlots.operations[0]} /></div><figcaption><span>01 / {story.operations.feature.label}</span><strong>{story.operations.feature.detail}</strong></figcaption></figure>
          <figure className="home-story-tile home-reveal"><div className="home-story-image"><PhotoPlaceholder index="10" label={story.photoSlots.operations[1]} /></div><figcaption><span>02 / {story.operations.images[0].label}</span><strong>{story.operations.images[0].detail}</strong></figcaption></figure>
          <figure className="home-story-tile home-reveal"><div className="home-story-image"><PhotoPlaceholder index="11" label={story.photoSlots.operations[2]} /></div><figcaption><span>03 / {story.operations.images[1].label}</span><strong>{story.operations.images[1].detail}</strong></figcaption></figure>
        </div>
      </div></section>

      <section className="home-recognition" aria-labelledby="recognition-title"><div className="home-container home-recognition-grid">
        <div className="home-reveal"><p className="home-kicker"><span />{story.recognition.eyebrow}</p><h2 id="recognition-title">{story.recognition.title}</h2></div>
        <div className="home-recognition-items">{story.recognition.items.map((item) => (
          <div className="home-recognition-item home-reveal" key={item.name}><span>{item.year}</span><strong>{item.name}</strong><small>{item.detail}</small></div>
        ))}</div>
      </div></section>

      <section className="home-contact" aria-labelledby="contact-title"><div className="home-container home-contact-grid home-reveal">
        <div><p className="home-kicker home-kicker-light"><span />{story.contact.eyebrow}</p><h2 id="contact-title" className="home-heading home-heading-editorial">{story.contact.title}</h2><p className="home-body">{story.contact.body}</p></div>
        <Link to="/contact" className="home-button home-button-gold">{story.contact.link}<ArrowRight size={19} aria-hidden="true" /></Link>
      </div></section>
    </div>
  );
}
