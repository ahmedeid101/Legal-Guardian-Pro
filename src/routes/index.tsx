import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import hanyAsset from "@/assets/hany.png";
import { ArrowRight, Scale, Briefcase, Users, FileText, Gavel, ShieldCheck, Quote, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hany Elgareh — Corporate & Civil Attorney" },
      { name: "description", content: "Trusted legal expertise you can rely on. Corporate, civil, and commercial counsel by attorney Hany Elgareh." },
      { property: "og:title", content: "Hany Elgareh — Attorney at Law" },
      { property: "og:description", content: "Principled advocacy. Strategic representation." },
    ],
  }),
  component: Home,
});

const services = [
  { icon: Briefcase, title: "Corporate Law", desc: "Formation, governance, M&A, shareholder agreements, and ongoing counsel for enterprises of every size." },
  { icon: FileText, title: "Contracts & Commercial", desc: "Drafting, negotiation, and review of commercial contracts that protect your interests and reduce risk." },
  { icon: Users, title: "Civil & Family Law", desc: "Representation in civil disputes, personal matters, inheritance, and family proceedings with discretion." },
  { icon: Gavel, title: "Litigation & Disputes", desc: "Strategic litigation, arbitration, and alternative dispute resolution before courts and tribunals." },
  { icon: ShieldCheck, title: "Criminal Defense", desc: "Vigorous, principled defense across criminal proceedings with attention to procedural rigor." },
  { icon: Scale, title: "Real Estate & Property", desc: "Title due diligence, transactions, lease disputes, and property registration matters." },
];

const testimonials = [
  { name: "Mariam A.", role: "Managing Director", quote: "Hany's counsel was both pragmatic and meticulous. He guided our acquisition with composure and clarity." },
  { name: "Karim H.", role: "Private Client", quote: "Discreet, responsive, and deeply knowledgeable. He achieved an outcome we did not believe was possible." },
  { name: "Nour S.", role: "Founder, Tech Startup", quote: "From incorporation to contracts, he has been the legal partner every founder hopes to find." },
];

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,color-mix(in_oklab,var(--color-gold)_15%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 lg:pt-24 pb-20 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow"><span className="gold-rule mr-3" />Attorney &amp; Legal Counsel</p>
            <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Trusted legal expertise
              <span className="block italic text-gold">you can rely on.</span>
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hany Elgareh is a corporate &amp; civil attorney providing principled
              representation and strategic counsel to individuals, founders, and
              enterprises across Egypt and the wider region.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border border-gold/40 shadow-elegant"
              >
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-4 border border-border text-foreground hover:border-gold hover:text-gold transition-colors"
              >
                Explore Practice Areas
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              {[
                { k: "2+", v: "Years of Practice" },
                { k: "50+", v: "Matters Handled" },
                { k: "98%", v: "Client Retention" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-serif text-4xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-4/5 max-w-md mx-auto">
              <div className="absolute -inset-4 border border-gold/40" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/90 -z-10" />
              <img
                src={hanyAsset}
                alt="Hany Elgareh, Attorney at Law"
                className="relative w-full h-full object-cover shadow-elegant"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 grid md:grid-cols-3 gap-8 text-sm">
          {[
            { t: "Confidential", d: "Every matter handled with absolute discretion." },
            { t: "Responsive", d: "Direct attorney access — answers, not voicemails." },
            { t: "Results-Driven", d: "Strategy built around your outcome, not billable hours." },
          ].map((x) => (
            <div key={x.t} className="flex items-start gap-4">
              <div className="w-10 h-10 flex-none border border-gold/60 flex items-center justify-center text-gold font-serif">✦</div>
              <div>
                <p className="font-serif text-xl text-foreground">{x.t}</p>
                <p className="mt-1 text-muted-foreground">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="max-w-2xl">
          <p className="eyebrow"><span className="gold-rule mr-3" />Practice Areas</p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">Counsel across the full legal spectrum.</h2>
          <p className="mt-5 text-muted-foreground">
            From boardroom strategy to courtroom advocacy, the practice serves clients
            with the same rigor and care across every engagement.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {services.map((s) => (
            <div key={s.title} className="bg-background p-8 group hover:bg-card transition-colors">
              <s.icon className="text-gold" size={28} strokeWidth={1.4} />
              <h3 className="mt-6 font-serif text-2xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE BAND */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center">
          <Quote className="mx-auto text-gold" size={36} strokeWidth={1.2} />
          <p className="mt-8 font-serif text-3xl md:text-4xl leading-snug italic">
            "The law is reason, free from passion." — and so should be its practice.
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-gold">A guiding principle of the practice</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow"><span className="gold-rule mr-3" />Client Voices</p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">What clients say.</h2>
          </div>
          <Link to="/testimonials" className="text-sm text-gold hover:underline inline-flex items-center gap-2">
            All testimonials <ArrowRight size={14} />
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="bg-card border border-border p-8 flex flex-col">
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

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-24">
        <div className="relative overflow-hidden border border-gold/40 bg-primary text-primary-foreground p-12 md:p-20">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,var(--color-gold),transparent_50%)]" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Discuss your matter <span className="text-gold italic">in confidence.</span>
              </h2>
              <p className="mt-5 text-primary-foreground/75 max-w-md">
                Initial consultations are private, focused, and obligation-free.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors"
              >
                Schedule Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
