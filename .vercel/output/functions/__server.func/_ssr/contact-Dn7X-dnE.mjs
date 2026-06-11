import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./Layout-CwEbh6Z-.mjs";
import { d as Send, M as MapPin, P as Phone, e as Mail, C as Clock, f as Linkedin } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
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
const schema = objectType({
  name: stringType().trim().min(2, "Please enter your name").max(100),
  email: stringType().trim().email("Please enter a valid email").max(255),
  subject: stringType().trim().min(2, "Please add a subject").max(150),
  message: stringType().trim().min(10, "Please describe your matter (10+ characters)").max(2e3)
});
function Contact() {
  const [errors, setErrors] = reactExports.useState({});
  const [sent, setSent] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const res = schema.safeParse(data);
    if (!res.success) {
      const errs = {};
      for (const issue of res.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    e.currentTarget.reset();
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-rule mr-3" }),
      "Contact"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]", children: [
      "Book a confidential ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold italic", children: "consultation." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground max-w-2xl", children: "Share a few details about your matter and the office will respond within one business day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid lg:grid-cols-5 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 bg-card border border-border p-8 md:p-10", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-16 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto w-14 h-14 border border-gold text-gold flex items-center justify-center font-serif text-2xl", children: "✓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-serif text-3xl", children: "Message received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Thank you. The office will be in touch shortly." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, noValidate: true, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "name", label: "Full Name", error: errors.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "email", label: "Email", type: "email", error: errors.email })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "subject", label: "Subject", error: errors.subject }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { name: "message", label: "Your Message", textarea: true, error: errors.message }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "inline-flex items-center gap-2 px-7 py-4 bg-primary text-primary-foreground border border-gold/40 hover:bg-primary/90 transition-colors", children: [
          "Send Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Submitting this form does not create an attorney–client relationship." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl text-gold", children: "Office" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-5 space-y-4 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mt-0.5 text-gold" }),
              " Cairo, Egypt"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "text-gold" }),
              " +201033989983"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "text-gold" }),
              " contact@elgareh-law.com"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 16, className: "text-gold" }),
              " Sun – Thu · 9:00 – 18:00"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/in/hany-elgareh-b968b3257/", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 text-gold hover:underline", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }),
              " Connect on LinkedIn"
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-border p-8 bg-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl", children: "Privileged & Confidential" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: "All communications are handled with strict confidentiality. For urgent matters, please call the office directly." })
        ] })
      ] })
    ] })
  ] }) });
}
function Field({
  name,
  label,
  type = "text",
  textarea,
  error
}) {
  const cls = `w-full bg-background border ${error ? "border-destructive" : "border-border"} px-4 py-3 text-sm text-foreground focus:outline-none focus:border-gold transition-colors`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    textarea ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { name, rows: 6, className: `${cls} mt-2 resize-y` }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { name, type, className: `${cls} mt-2` }),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 block text-xs text-destructive", children: error })
  ] });
}
export {
  Contact as component
};
