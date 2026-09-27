import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Section, Card } from "@/components/site/primitives";
import { CtaBand } from "@/components/site/CtaBand";
import { company, fieldNotes, fieldNoteCategories } from "@/content/site";

export const Route = createFileRoute("/field-notes/")({
  head: () => ({
    meta: [
      { title: "Afrifama Field Notes — Practical notes from building a poultry system" },
      {
        name: "description",
        content:
          "Field Notes from Afrifama: feed formulation, farmer training, poultry production, genetics and company building, documented from the field in Kilifi County, Kenya.",
      },
      { property: "og:title", content: "Afrifama Field Notes" },
      {
        property: "og:description",
        content:
          "Notes on feed formulation, farmer training, poultry production and hatchery development as Afrifama builds its system.",
      },
    ],
    links: [{ rel: "canonical", href: `${company.siteUrl}/field-notes` }],
  }),
  component: FieldNotesIndex,
});

function FieldNotesIndex() {
  const [category, setCategory] = useState<string>("All");
  const notes =
    category === "All" ? fieldNotes : fieldNotes.filter((n) => n.category === category);

  return (
    <>
      <PageHero
        eyebrow="Field Notes"
        title="Practical notes from building a poultry system."
        lead="Afrifama documents the work as it happens — from feed formulation and farmer training to field learning, production and future hatchery development."
        breadcrumbs={[{ label: "Field Notes" }]}
      />

      <Section>
        <div role="group" aria-label="Filter field notes by category" className="flex flex-wrap gap-2">
          {fieldNoteCategories.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                type="button"
                aria-pressed={active}
                onClick={() => setCategory(c)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:bg-secondary"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {notes.map((note) => (
            <Card key={note.slug} className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">
                  {note.category}
                </span>
                <span className="rounded-md bg-gold/25 px-2 py-1 text-xs font-semibold text-gold-foreground">
                  Sample content
                </span>
              </div>
              <h2 className="mt-4 font-display text-lg font-bold">{note.title}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {note.excerpt}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">{note.readingTime}</p>
              <Link
                to="/field-notes/$slug"
                params={{ slug: note.slug }}
                className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold text-primary hover:gap-2.5"
              >
                Read note
                <ArrowRight className="size-4" />
              </Link>
            </Card>
          ))}
        </div>

        {notes.length === 0 ? (
          <p className="mt-10 text-muted-foreground">
            No notes in this category yet. New notes are published as the work develops.
          </p>
        ) : null}
      </Section>

      <CtaBand />
    </>
  );
}
