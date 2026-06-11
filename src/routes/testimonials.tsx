import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Quote, Star } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Hany Elgareh" },
      { name: "description", content: "What clients say about working with attorney Hany Elgareh." },
      { property: "og:title", content: "Client Testimonials" },
      { property: "og:description", content: "Voices from clients of the practice." },
    ],
  }),
  component: Testimonials,
});

const items = [
  { name: "Mariam A.", role: "Managing Director, Industrial Group", quote: "Hany's counsel was both pragmatic and meticulous. He guided our acquisition with composure and clarity from term sheet through closing." },
  { name: "Karim H.", role: "Private Client", quote: "Discreet, responsive, and deeply knowledgeable. He achieved an outcome we did not believe was possible at the outset." },
  { name: "Nour S.", role: "Founder, Tech Startup", quote: "From incorporation to investor agreements, he has been the legal partner every founder hopes to find." },
  { name: "Omar T.", role: "Real Estate Developer", quote: "Thorough due diligence and crisp drafting. Our transactions move faster and with fewer surprises." },
  { name: "Layla F.", role: "Family Office", quote: "Sensible, calm, and absolutely trustworthy. He handles delicate matters with the discretion they require." },
  { name: "Yusuf R.", role: "Corporate General Counsel", quote: "We use Hany as outside counsel for our most consequential disputes. The work product is consistently excellent." },
];

function Testimonials() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12">
        <p className="eyebrow"><span className="gold-rule mr-3" />Testimonials</p>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          In their own <span className="text-gold italic">words.</span>
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl">
          A selection of feedback from clients across corporate, private, and commercial matters.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t) => (
            <figure key={t.name} className="bg-card border border-border p-8 flex flex-col relative">
              <Quote className="absolute top-6 right-6 text-gold/30" size={32} strokeWidth={1.2} />
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
              </div>
              <blockquote className="mt-5 font-serif text-xl text-foreground leading-snug flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
