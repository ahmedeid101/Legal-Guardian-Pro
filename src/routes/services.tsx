import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Briefcase, FileText, Users, Gavel, ShieldCheck, Scale, Building2, Landmark, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Hany Elgareh, Attorney" },
      { name: "description", content: "Corporate, civil, commercial, litigation, real estate, and criminal defense legal services by Hany Elgareh." },
      { property: "og:title", content: "Practice Areas" },
      { property: "og:description", content: "Counsel across the full legal spectrum." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Briefcase, title: "Corporate Law", desc: "Company formation, governance, M&A advisory, joint ventures, and shareholder agreements.", points: ["Entity structuring", "Mergers & acquisitions", "Corporate governance"] },
  { icon: FileText, title: "Contracts & Commercial", desc: "Drafting and negotiation of commercial agreements that protect your position.", points: ["Commercial drafting", "Distribution & supply", "NDAs & licensing"] },
  { icon: Users, title: "Civil & Family Law", desc: "Civil disputes, inheritance, marriage & divorce, and personal status matters handled with discretion.", points: ["Civil litigation", "Inheritance disputes", "Family proceedings"] },
  { icon: Gavel, title: "Litigation & Arbitration", desc: "Strategic representation before Egyptian courts and arbitral tribunals.", points: ["Trial advocacy", "Domestic arbitration", "Enforcement of awards"] },
  { icon: ShieldCheck, title: "Criminal Defense", desc: "Principled defense throughout investigation, trial, and appeal.", points: ["Pre-trial defense", "Trial representation", "Appeals"] },
  { icon: Scale, title: "Real Estate & Property", desc: "Title due diligence, transactions, registration, and landlord–tenant disputes.", points: ["Title due diligence", "Transactions", "Lease disputes"] },
  { icon: Building2, title: "Startup & Founder Counsel", desc: "Cap tables, shareholder agreements, and term sheets for early-stage companies.", points: ["Incorporation", "Founder agreements", "Investor docs"] },
  { icon: Landmark, title: "Regulatory & Compliance", desc: "Licensing, regulatory filings, and internal compliance frameworks.", points: ["Licensing", "Compliance audits", "Regulatory advice"] },
];

function Services() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12">
        <p className="eyebrow"><span className="gold-rule mr-3" />Practice Areas</p>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          A modern practice, <span className="text-gold italic">classically built.</span>
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl">
          Each engagement is staffed personally by Hany Elgareh, ensuring a single
          point of accountability and the deep familiarity your matter deserves.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {services.map((s) => (
            <article key={s.title} className="bg-background p-8 flex flex-col group hover:bg-card transition-colors">
              <s.icon className="text-gold" size={28} strokeWidth={1.4} />
              <h2 className="mt-6 font-serif text-2xl">{s.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <ul className="mt-5 space-y-1.5 text-xs text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-gold" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl">Don't see your matter listed?</h2>
          <p className="mt-4 text-primary-foreground/75">Counsel is offered across most civil and commercial areas. Reach out to discuss your situation.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors">
            Contact the Office <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
