import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import hanyAsset from "@/assets/hany.png";
import { GraduationCap, Award, Languages, Scale, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hany Elgareh, Attorney at Law" },
      { name: "description", content: "Learn about attorney Hany Elgareh — background, education, expertise, and approach to legal practice." },
      { property: "og:title", content: "About Hany Elgareh" },
      { property: "og:description", content: "Background, credentials, and philosophy." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20 grid lg:grid-cols-12 gap-14 items-start">
        <div className="lg:col-span-5">
          <div className="relative aspect-4/5 max-w-md">
            <div className="absolute -inset-4 border border-gold/40" />
            <img src={hanyAsset} alt="Hany Elgareh" className="relative w-full h-full object-cover shadow-elegant" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <p className="eyebrow"><span className="gold-rule mr-3" />About the Attorney</p>
          <h1 className="mt-5 font-serif text-5xl md:text-6xl leading-[1.05]">
            A modern advocate with <span className="text-gold italic">classical rigor.</span>
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Hany Elgareh is a corporate and civil attorney based in Cairo,
            advising private clients and enterprises on the matters that shape
            their futures. His practice combines deep doctrinal knowledge with
            a pragmatic, business-minded approach — one that treats legal
            strategy as inseparable from commercial reality.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Clients return for the same reasons they came: composure under
            pressure, clarity in counsel, and an unwavering commitment to the
            outcome that serves them best.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {[
              { icon: GraduationCap, t: "Education", d: "LL.B., Faculty of Law — with continuing studies in commercial and arbitration law." },
              { icon: Award, t: "Bar Admission", d: "Admitted to practice before the Egyptian courts and arbitral tribunals." },
              { icon: Scale, t: "Focus", d: "Corporate, civil, contractual, and commercial dispute resolution." },
              { icon: Languages, t: "Languages", d: "Arabic (native), English (professional working proficiency)." },
            ].map((c) => (
              <div key={c.t} className="border-l-2 border-gold pl-5">
                <c.icon size={20} className="text-gold" />
                <p className="mt-3 font-serif text-xl">{c.t}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
          <p className="eyebrow"><span className="gold-rule mr-3" />Philosophy</p>
          <div className="mt-6 grid md:grid-cols-3 gap-12">
            {[
              { n: "01", t: "Listen first.", d: "Every matter starts with a careful, candid conversation about what you actually need." },
              { n: "02", t: "Advise honestly.", d: "Clear opinions — not hedged ones — even when the answer is not what a client hoped to hear." },
              { n: "03", t: "Execute precisely.", d: "Filings, drafting, and advocacy delivered with the discipline the work demands." },
            ].map((p) => (
              <div key={p.n}>
                <p className="font-serif text-5xl text-gold">{p.n}</p>
                <h3 className="mt-4 font-serif text-2xl">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl">Ready to talk?</h2>
        <p className="mt-4 text-muted-foreground">Schedule a confidential consultation to discuss your matter.</p>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground border border-gold/40">
          Book Consultation <ArrowRight size={16} />
        </Link>
      </section>
    </SiteLayout>
  );
}
