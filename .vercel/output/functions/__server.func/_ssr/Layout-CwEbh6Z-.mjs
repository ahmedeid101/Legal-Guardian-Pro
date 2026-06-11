import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { X, j as Menu, f as Linkedin, M as MapPin, P as Phone, e as Mail } from "../_libs/lucide-react.mjs";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Practice Areas" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-2xl tracking-tight text-foreground", children: [
              "Hany ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Elgareh" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-muted-foreground border-l border-border pl-3", children: "Attorney at Law" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-9", children: [
            nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: n.to,
                className: "text-sm text-foreground/80 hover:text-gold transition-colors relative",
                activeProps: { className: "text-gold" },
                activeOptions: { exact: n.to === "/" },
                children: n.label
              },
              n.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/contact",
                className: "ml-2 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors border border-gold/40",
                children: "Book Consultation"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "lg:hidden p-2 text-foreground",
              onClick: () => setOpen((v) => !v),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 22 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 22 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden bg-background border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-6 flex flex-col gap-4", children: [
          nav.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: n.to,
              onClick: () => setOpen(false),
              className: "text-base text-foreground/90 hover:text-gold",
              children: n.label
            },
            n.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "mt-2 text-center px-5 py-3 bg-primary text-primary-foreground text-sm",
              children: "Book Consultation"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-3xl", children: [
          "Hany ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "Elgareh" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs tracking-[0.3em] uppercase text-gold", children: "Attorney & Legal Counsel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-primary-foreground/70 max-w-md leading-relaxed", children: "Providing principled, strategic counsel to individuals and enterprises across corporate, civil, and commercial matters." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/hany-elgareh-b968b3257/",
            target: "_blank",
            rel: "noreferrer",
            className: "mt-6 inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-gold",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }),
              " Connect on LinkedIn"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs tracking-[0.25em] uppercase text-gold mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-gold", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-gold", children: "Practice Areas" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/testimonials", className: "hover:text-gold", children: "Testimonials" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-gold", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs tracking-[0.25em] uppercase text-gold mb-4", children: "Office" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, className: "mt-1 text-gold" }),
            " Cairo, Egypt"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 14, className: "text-gold" }),
            " +201033989983"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 14, className: "text-gold" }),
            " contact@elgareh-law.com"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-primary-foreground/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Elgareh Law Office. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Attorney advertising. Prior results do not guarantee a similar outcome." })
    ] }) })
  ] });
}
function SiteLayout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 pt-20", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  SiteLayout as S
};
