import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { useState } from "react";
import { z } from "zod";
import { Mail, Phone, MapPin, Clock, Send, Linkedin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hany Elgareh, Attorney" },
      { name: "description", content: "Book a confidential consultation with attorney Hany Elgareh. Office in Cairo, Egypt." },
      { property: "og:title", content: "Contact Hany Elgareh" },
      { property: "og:description", content: "Schedule a confidential consultation." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(2, "Please add a subject").max(150),
  message: z.string().trim().min(10, "Please describe your matter (10+ characters)").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs: Record<string, string> = {};
      for (const issue of res.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20">
        <p className="eyebrow"><span className="gold-rule mr-3" />Contact</p>
        <h1 className="mt-5 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">
          Book a confidential <span className="text-gold italic">consultation.</span>
        </h1>
        <p className="mt-6 text-muted-foreground max-w-2xl">
          Share a few details about your matter and the office will respond within one business day.
        </p>

        <div className="mt-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-card border border-border p-8 md:p-10">
            {sent ? (
              <div className="py-16 text-center">
                <div className="mx-auto w-14 h-14 border border-gold text-gold flex items-center justify-center font-serif text-2xl">✓</div>
                <h3 className="mt-6 font-serif text-3xl">Message received.</h3>
                <p className="mt-3 text-muted-foreground">Thank you. The office will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Field name="name" label="Full Name" error={errors.name} />
                  <Field name="email" label="Email" type="email" error={errors.email} />
                </div>
                <Field name="subject" label="Subject" error={errors.subject} />
                <Field name="message" label="Your Message" textarea error={errors.message} />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground border border-gold/40 hover:bg-primary/90 transition-colors"
                >
                  Send Message <Send size={16} />
                </button>
                <p className="text-xs text-muted-foreground">
                  Submitting this form does not create an attorney–client relationship.
                </p>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-8">
            <div className="bg-primary text-primary-foreground p-8">
              <h3 className="font-serif text-2xl text-gold">Office</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3"><MapPin size={16} className="mt-0.5 text-gold" /> Cairo, Egypt</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-gold" /> +201033989983</li>
                <li className="flex items-center gap-3"><Mail size={16} className="text-gold" /> elgarehhany48@gmail.com</li>
                <li className="flex items-center gap-3"><Clock size={16} className="text-gold" /> Sun – Thu · 9:00 – 18:00</li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hany-elgareh-b968b3257/"
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-2 text-gold hover:underline"
                  >
                    <Linkedin size={16} /> Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="border border-border p-8 bg-card">
              <h3 className="font-serif text-2xl">Privileged &amp; Confidential</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                All communications are handled with strict confidentiality. For urgent matters,
                please call the office directly.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  name, label, type = "text", textarea, error,
}: { name: string; label: string; type?: string; textarea?: boolean; error?: string }) {
  const cls = `w-full bg-background border ${error ? "border-destructive" : "border-border"} px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors`;
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} rows={6} className={`${cls} mt-2 resize-y`} />
      ) : (
        <input name={name} type={type} className={`${cls} mt-2`} />
      )}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
