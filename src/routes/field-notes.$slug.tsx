import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, Section, Card } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company, fieldNotes } from "@/content/site";

export const Route = createFileRoute("/field-notes/$slug")({
  head: ({ params }) => {
    const note = fieldNotes.find((n) => n.slug === params.slug);
    if (!note) {
      return {
        meta: [{ title: "Note not found | Afrifama Field Notes" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${note.title} | Afrifama Field Notes` },
        { name: "description", content: note.excerpt },
        { property: "og:title", content: note.title },
        { property: "og:description", content: note.excerpt },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `${company.siteUrl}/field-notes/${note.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: note.title,
            description: note.excerpt,
            articleSection: note.category,
            author: { "@type": "Organization", name: "Afrifama" },
            publisher: { "@type": "Organization", name: "Afrifama" },
          }),
        },
      ],
    };
  },
  component: FieldNote,
});

function FieldNote() {
  const { slug } = Route.useParams();
  const note = fieldNotes.find((n) => n.slug === slug);
  const related = fieldNotes.filter((n) => n.slug !== slug).slice(0, 2);

  if (!note) {
    return (
      <Section>
        <h1 className="font-display text-3xl font-extrabold">Note not found</h1>
        <p className="mt-3 text-muted-foreground">
          This field note doesn't exist or has been moved.
        </p>
        <Link to="/field-notes" className="mt-6 inline-flex font-display font-bold text-primary">
          Back to Field Notes
        </Link>
      </Section>
    );
  }

  return (
    <>
      <article>
        <div className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-3xl px-5 pt-10 pb-14 lg:px-8">
            <Breadcrumbs items={[{ label: "Field Notes", to: "/field-notes" }, { label: note.title }]} />
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-card px-2 py-1 text-xs font-semibold text-secondary-foreground">
                {note.category}
              </span>
              <span className="rounded-md bg-gold/25 px-2 py-1 text-xs font-semibold text-gold-foreground">
                Sample content
              </span>
              <span className="text-xs text-muted-foreground">{note.readingTime}</span>
            </div>
            <h1 className="mt-5 h2-section font-extrabold">{note.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{note.excerpt}</p>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-5 py-12 lg:px-8">
          <div className="space-y-5 text-lg leading-relaxed text-foreground">
            {note.body.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-secondary/60 p-6">
            <h2 className="font-display text-base font-bold">Related on this site</h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link to="/feeds" className="text-primary hover:underline">
                  Afrifama Feeds — stage-based nutrition
                </Link>
              </li>
              <li>
                <Link to="/farmer-partnership" className="text-primary hover:underline">
                  How the farmer partnership works
                </Link>
              </li>
              <li>
                <Link to="/genetics-hatchery" className="text-primary hover:underline">
                  Genetics & hatchery development
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <Section tone="muted">
        <h2 className="font-display text-2xl font-extrabold">More field notes</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {related.map((r) => (
            <Card key={r.slug}>
              <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                {r.category}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.excerpt}</p>
              <Link
                to="/field-notes/$slug"
                params={{ slug: r.slug }}
                className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
              >
                Read note
                <ArrowRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
