import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl">
            Hany <span className="text-gold">Elgareh</span>
          </h3>
          <p className="mt-2 text-xs tracking-[0.3em] uppercase text-gold">
            Attorney &amp; Legal Counsel
          </p>
          <p className="mt-5 text-sm text-primary-foreground/70 max-w-md leading-relaxed">
            Providing principled, strategic counsel to individuals and
            enterprises across corporate, civil, and commercial matters.
          </p>
          <a
            href="https://www.linkedin.com/in/hany-elgareh-b968b3257/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold"
          >
            <Linkedin size={16} /> Connect on LinkedIn
          </a>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Navigate</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Practice Areas</Link></li>
            <li><Link to="/testimonials" className="hover:text-gold">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.25em] uppercase text-gold mb-4">Office</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold" /> Cairo, Egypt</li>
            <li className="flex items-center gap-2"><Phone size={14} className="text-gold" /> +201033989983</li>
            <li className="flex items-center gap-2"><Mail size={14} className="text-gold" /> elgarehhany48@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Elgareh Law Office. All rights reserved.</p>
          <p>Attorney advertising. Prior results do not guarantee a similar outcome.</p>
        </div>
      </div>
    </footer>
  );
}
