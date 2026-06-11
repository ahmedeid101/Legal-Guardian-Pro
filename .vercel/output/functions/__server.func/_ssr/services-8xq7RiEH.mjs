import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./Layout-CwEbh6Z-.mjs";
import { B as Briefcase, F as FileText, U as Users, G as Gavel, a as ShieldCheck, b as Scale, c as Building2, L as Landmark, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const services = [{
  icon: Briefcase,
  title: "Corporate Law",
  desc: "Company formation, governance, M&A advisory, joint ventures, and shareholder agreements.",
  points: ["Entity structuring", "Mergers & acquisitions", "Corporate governance"]
}, {
  icon: FileText,
  title: "Contracts & Commercial",
  desc: "Drafting and negotiation of commercial agreements that protect your position.",
  points: ["Commercial drafting", "Distribution & supply", "NDAs & licensing"]
}, {
  icon: Users,
  title: "Civil & Family Law",
  desc: "Civil disputes, inheritance, marriage & divorce, and personal status matters handled with discretion.",
  points: ["Civil litigation", "Inheritance disputes", "Family proceedings"]
}, {
  icon: Gavel,
  title: "Litigation & Arbitration",
  desc: "Strategic representation before Egyptian courts and arbitral tribunals.",
  points: ["Trial advocacy", "Domestic arbitration", "Enforcement of awards"]
}, {
  icon: ShieldCheck,
  title: "Criminal Defense",
  desc: "Principled defense throughout investigation, trial, and appeal.",
  points: ["Pre-trial defense", "Trial representation", "Appeals"]
}, {
  icon: Scale,
  title: "Real Estate & Property",
  desc: "Title due diligence, transactions, registration, and landlord–tenant disputes.",
  points: ["Title due diligence", "Transactions", "Lease disputes"]
}, {
  icon: Building2,
  title: "Startup & Founder Counsel",
  desc: "Cap tables, shareholder agreements, and term sheets for early-stage companies.",
  points: ["Incorporation", "Founder agreements", "Investor docs"]
}, {
  icon: Landmark,
  title: "Regulatory & Compliance",
  desc: "Licensing, regulatory filings, and internal compliance frameworks.",
  points: ["Licensing", "Compliance audits", "Regulatory advice"]
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3" }),
        "Practice Areas"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]", children: [
        "A modern practice, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "classically built." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-2xl", children: "Each engagement is staffed personally by Hany Elgareh, ensuring a single point of accountability and the deep familiarity your matter deserves." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "bg-background p-8 flex flex-col group hover:bg-card transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "text-gold", size: 28, strokeWidth: 1.4 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-6 font-serif text-2xl", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed flex-1", children: s.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-1.5 text-xs text-muted-foreground", children: s.points.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1 h-1 bg-gold" }),
        " ",
        p
      ] }, p)) })
    ] }, s.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-10 py-20 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "Don't see your matter listed?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-primary-foreground/75", children: "Counsel is offered across most civil and commercial areas. Reach out to discuss your situation." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-8 inline-flex items-center gap-2 px-7 py-4 bg-gold text-gold-foreground hover:bg-gold/90 transition-colors", children: [
        "Contact the Office ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16 })
      ] })
    ] }) })
  ] });
}
export {
  Services as component
};
