import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CwEbh6Z-.mjs";
import { Q as Quote, S as Star } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
const items = [{
  name: "Mariam A.",
  role: "Managing Director, Industrial Group",
  quote: "Hany's counsel was both pragmatic and meticulous. He guided our acquisition with composure and clarity from term sheet through closing."
}, {
  name: "Karim H.",
  role: "Private Client",
  quote: "Discreet, responsive, and deeply knowledgeable. He achieved an outcome we did not believe was possible at the outset."
}, {
  name: "Nour S.",
  role: "Founder, Tech Startup",
  quote: "From incorporation to investor agreements, he has been the legal partner every founder hopes to find."
}, {
  name: "Omar T.",
  role: "Real Estate Developer",
  quote: "Thorough due diligence and crisp drafting. Our transactions move faster and with fewer surprises."
}, {
  name: "Layla F.",
  role: "Family Office",
  quote: "Sensible, calm, and absolutely trustworthy. He handles delicate matters with the discretion they require."
}, {
  name: "Yusuf R.",
  role: "Corporate General Counsel",
  quote: "We use Hany as outside counsel for our most consequential disputes. The work product is consistently excellent."
}];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3" }),
        "Testimonials"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]", children: [
        "In their own ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "words." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-2xl", children: "A selection of feedback from clients across corporate, private, and commercial matters." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6", children: items.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "bg-card border border-border p-8 flex flex-col relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 text-gold/30", size: 32, strokeWidth: 1.2 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-gold", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, fill: "currentColor", strokeWidth: 0 }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-5 font-serif text-xl text-foreground leading-snug flex-1", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-6 pt-6 border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
      ] })
    ] }, t.name)) }) })
  ] });
}
export {
  Testimonials as component
};
