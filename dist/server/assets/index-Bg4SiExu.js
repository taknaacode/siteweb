import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { X, Menu, ArrowRight, ChevronDown, Plane, Flame, Wind, ShieldAlert, MonitorCog, ArrowUpRight, Fuel, Zap, Shield, Anchor, Factory, Building2, Cpu, Eye, Radar, Target, Sparkles, ShieldCheck, Check, Send, Mail, Phone, MapPin, CalendarClock, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
const logoAsset = "/assets/taknaacode-logo.png";
function Logo({ className = "h-10 w-auto" }) {
  return /* @__PURE__ */ jsx(
    "img",
    {
      src: logoAsset,
      alt: "TaknaaCode",
      className,
      loading: "eager",
      decoding: "async"
    }
  );
}
const links = [
  { href: "#solutions", label: "Solutions" },
  { href: "#industries", label: "Industries" },
  { href: "#technology", label: "Technology" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong" : "bg-transparent"}`,
      children: [
        /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Logo, { className: "h-10 w-auto" }),
            /* @__PURE__ */ jsx("span", { className: "hidden text-sm font-semibold tracking-widest text-foreground sm:block", children: "TAKNAACODE" })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
              children: l.label
            }
          ) }, l.href)) }),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              className: "hidden rounded-md bg-teal px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:teal-glow md:inline-block",
              children: "Request Demo"
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setOpen((v) => !v),
              className: "md:hidden text-foreground",
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsx(X, {}) : /* @__PURE__ */ jsx(Menu, {})
            }
          )
        ] }),
        open && /* @__PURE__ */ jsx("div", { className: "md:hidden glass-strong border-t border-border", children: /* @__PURE__ */ jsxs("ul", { className: "flex flex-col p-6 gap-4", children: [
          links.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
            "a",
            {
              href: l.href,
              onClick: () => setOpen(false),
              className: "text-foreground text-base",
              children: l.label
            }
          ) }, l.href)),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "#contact",
              onClick: () => setOpen(false),
              className: "mt-2 inline-block rounded-md bg-teal px-4 py-2 text-center text-sm font-medium text-primary-foreground",
              children: "Request Demo"
            }
          )
        ] }) })
      ]
    }
  );
}
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;
    let particles = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      const count = Math.min(90, Math.floor(width * height / 16e3));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3 * dpr,
        vy: (Math.random() - 0.5) * 0.3 * dpr
      }));
    };
    resize();
    window.addEventListener("resize", resize);
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      const maxDist = 130 * dpr;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const o = 1 - d / maxDist;
            ctx.strokeStyle = `rgba(80, 129, 118, ${o * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = "rgba(140, 190, 178, 0.85)";
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4 * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref, className: "absolute inset-0 h-full w-full", "aria-hidden": true });
}
const droneImg = "/assets/stealth-drone-mFe1zde3.jpg";
function Drone() {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "relative mx-auto w-full max-w-3xl",
      animate: { y: [0, -14, 0] },
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0 -z-10 animate-pulse-glow blur-3xl",
            style: { background: "radial-gradient(ellipse at center, rgba(80,129,118,0.55), transparent 65%)" }
          }
        ),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: droneImg,
            alt: "TaknaaCode autonomous stealth surveillance drone",
            width: 1536,
            height: 1024,
            className: "w-full h-auto select-none",
            style: {
              maskImage: "radial-gradient(ellipse 75% 70% at center, black 55%, transparent 95%)",
              WebkitMaskImage: "radial-gradient(ellipse 75% 70% at center, black 55%, transparent 95%)"
            },
            draggable: false
          }
        )
      ]
    }
  );
}
function Hero() {
  return /* @__PURE__ */ jsxs("section", { id: "top", className: "relative min-h-screen overflow-hidden pt-28 pb-16", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(Particles, {}) }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center", children: [
      /* @__PURE__ */ jsxs(
        motion.span,
        {
          initial: { opacity: 0, y: 10 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-teal-soft",
          children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-teal animate-pulse-glow" }),
            "Autonomous Defense Systems"
          ]
        }
      ),
      /* @__PURE__ */ jsx(Drone, {}),
      /* @__PURE__ */ jsxs(
        motion.h1,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.2, duration: 0.7 },
          className: "mt-10 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl",
          children: [
            "Autonomous Intelligence for",
            " ",
            /* @__PURE__ */ jsx("span", { className: "text-teal", children: "Critical Infrastructure" }),
            " Protection"
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.p,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.35, duration: 0.7 },
          className: "mt-6 max-w-2xl text-base text-teal-soft sm:text-lg",
          children: "AI-powered drones and intelligent monitoring systems designed to secure the world's most sensitive environments."
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5, duration: 0.7 },
          className: "mt-10 flex flex-col gap-3 sm:flex-row",
          children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#contact",
                className: "group inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:teal-glow",
                children: [
                  "Request a Demo",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "#contact",
                className: "inline-flex items-center justify-center rounded-md border border-teal/70 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-teal/10",
                children: "Contact Sales"
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        motion.a,
        {
          href: "#solutions",
          "aria-label": "Scroll to solutions",
          initial: { opacity: 0 },
          animate: { opacity: 1, y: [0, 8, 0] },
          transition: { delay: 1, duration: 2, repeat: Infinity },
          className: "mt-16 text-teal-soft",
          children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-6 w-6" })
        }
      )
    ] })
  ] });
}
function SectionHeader({
  eyebrow,
  title,
  description
}) {
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 24 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: "mx-auto mb-16 max-w-3xl text-center",
      children: [
        /* @__PURE__ */ jsx("p", { className: "mb-4 text-xs uppercase tracking-[0.3em] text-teal", children: eyebrow }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-foreground sm:text-4xl md:text-5xl", children: title }),
        description && /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base text-muted-foreground", children: description })
      ]
    }
  );
}
const items$1 = [
  {
    icon: Plane,
    title: "AI Surveillance Drone",
    desc: "Autonomous patrol routes with onboard AI vision, anomaly detection, and real-time alerts streamed to your command center."
  },
  {
    icon: Flame,
    title: "Fire & Smoke Detection Drone",
    desc: "Thermal imaging and multispectral sensors detect ignition events early and trigger automated response protocols."
  },
  {
    icon: Wind,
    title: "Gas Leak Detection Drone",
    desc: "Industrial-grade gas sensing with predictive analytics for methane, H₂S, and VOCs across refineries and pipelines."
  },
  {
    icon: ShieldAlert,
    title: "Intrusion Detection Drone",
    desc: "Human and vehicle classification with perimeter tracking, low-light operation, and silent pursuit modes."
  },
  {
    icon: MonitorCog,
    title: "Integrated Command Center",
    desc: "Single pane of glass for fleet management, live telemetry, mission planning, and forensic analytics."
  }
];
function Solutions() {
  return /* @__PURE__ */ jsx("section", { id: "solutions", className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Our Solutions",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Engineered for ",
          /* @__PURE__ */ jsx("span", { className: "text-teal", children: "mission-critical" }),
          " operations"
        ] }),
        description: "A complete autonomous monitoring stack — from airborne sensors to operator dashboards — built for environments where downtime is not an option."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: items$1.map((it, i) => /* @__PURE__ */ jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.5, delay: i * 0.08 },
        whileHover: { scale: 1.03 },
        className: "group glass relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:teal-glow",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal", children: /* @__PURE__ */ jsx(it.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsx("h3", { className: "mb-2 text-xl font-semibold text-foreground", children: it.title }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed flex-1", children: it.desc }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#contact",
              className: "mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-all group-hover:gap-2.5",
              children: [
                "Learn More ",
                /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
              ]
            }
          )
        ]
      },
      it.title
    )) })
  ] }) });
}
const items = [
  { icon: Fuel, name: "Oil & Gas", desc: "Pipeline integrity, leak detection, and flare monitoring." },
  { icon: Zap, name: "Energy & Utilities", desc: "Substation surveillance and transmission inspection." },
  { icon: Shield, name: "Defense", desc: "Persistent ISR for forward operating bases and depots." },
  { icon: Plane, name: "Airports", desc: "Perimeter security, FOD detection, and wildlife dispersal." },
  { icon: Anchor, name: "Ports", desc: "Berth security, cargo monitoring, and maritime intrusion." },
  { icon: Factory, name: "Industrial Facilities", desc: "Hazard sensing across plants, mines, and warehouses." },
  { icon: Building2, name: "Smart Cities", desc: "Urban safety analytics and public-space situational awareness." }
];
function Industries() {
  return /* @__PURE__ */ jsxs("section", { id: "industries", className: "relative py-28", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40" }),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx(
        SectionHeader,
        {
          eyebrow: "Who We Protect",
          title: /* @__PURE__ */ jsxs(Fragment, { children: [
            "Trusted across the most ",
            /* @__PURE__ */ jsx("span", { className: "text-teal", children: "demanding" }),
            " sectors"
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: items.map((it, i) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.45, delay: i * 0.06 },
          className: "glass group flex items-start gap-4 rounded-xl p-6 transition-all hover:border-teal/50",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal", children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-lg bg-teal/20 animate-pulse-glow" }),
              /* @__PURE__ */ jsx(it.icon, { className: "relative h-6 w-6" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: it.name }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: it.desc })
            ] })
          ]
        },
        it.name
      )) })
    ] })
  ] });
}
const nodes = [
  { icon: Plane, label: "Drone" },
  { icon: Cpu, label: "Edge AI" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Radar, label: "Sensor Fusion" },
  { icon: MonitorCog, label: "Command Center" }
];
const chips = [
  "Edge AI",
  "Computer Vision",
  "Machine Learning",
  "Thermal Analytics",
  "Sensor Fusion",
  "Autonomous Navigation",
  "Predictive Maintenance"
];
function Technology() {
  return /* @__PURE__ */ jsx("section", { id: "technology", className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Embedded Intelligence",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Every decision happens at ",
          /* @__PURE__ */ jsx("span", { className: "text-teal", children: "the edge" })
        ] }),
        description: "Onboard neural accelerators fuse multi-spectral inputs and stream actionable intelligence directly to operators — sub-second response, with or without connectivity."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 sm:p-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-y-10 sm:grid-cols-5 sm:gap-y-0 sm:gap-x-4 items-center", children: nodes.map((n, i) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.4, delay: i * 0.12 },
            className: "flex flex-col items-center",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-xl border border-teal/40 bg-background/60 text-teal", children: [
                /* @__PURE__ */ jsx("span", { className: "absolute inset-0 rounded-xl bg-teal/10 animate-pulse-glow" }),
                /* @__PURE__ */ jsx(n.icon, { className: "relative h-8 w-8" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm font-medium text-foreground", children: n.label })
            ]
          },
          n.label
        )) }),
        /* @__PURE__ */ jsx(
          "svg",
          {
            className: "pointer-events-none absolute inset-x-0 top-10 hidden sm:block",
            height: "2",
            width: "100%",
            preserveAspectRatio: "none",
            "aria-hidden": true,
            children: /* @__PURE__ */ jsx(
              "line",
              {
                x1: "10%",
                y1: "1",
                x2: "90%",
                y2: "1",
                stroke: "#508176",
                strokeWidth: "2",
                strokeDasharray: "8 8",
                className: "animate-dash"
              }
            )
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-3", children: chips.map((c) => /* @__PURE__ */ jsx(
        "span",
        {
          className: "rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-sm text-teal-soft",
          children: c
        },
        c
      )) })
    ] })
  ] }) });
}
const pillars = [
  { icon: Target, title: "Mission", desc: "Protect critical infrastructure through autonomous intelligence." },
  { icon: Eye, title: "Vision", desc: "A world where every essential system is monitored, secured, and self-aware." },
  { icon: Sparkles, title: "Innovation", desc: "Edge AI, computer vision, and robotics engineered in-house." },
  { icon: ShieldCheck, title: "Safety", desc: "Defense-grade reliability built into every component we ship." }
];
const stats = [
  { v: "5+", l: "Countries" },
  { v: "200+", l: "Deployments" },
  { v: "99.8%", l: "Uptime" },
  { v: "24/7", l: "Operations" }
];
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "About TaknaaCode",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Building the ",
          /* @__PURE__ */ jsx("span", { className: "text-teal", children: "autonomous" }),
          " security layer"
        ] }),
        description: "TaknaaCode L.L.C — S.P.C is an innovation-driven technology company developing next-generation autonomous surveillance systems. We combine aerial robotics, embedded AI, and operator-first software to give organizations real-time control over their most critical environments."
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: pillars.map((p, i) => /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.45, delay: i * 0.08 },
        className: "glass rounded-xl p-6",
        children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: p.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc })
        ]
      },
      p.title
    )) }),
    /* @__PURE__ */ jsx("div", { className: "glass mt-10 grid grid-cols-2 gap-4 rounded-2xl p-8 sm:grid-cols-4", children: stats.map((s) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-teal sm:text-4xl", children: s.v }),
      /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-widest text-muted-foreground", children: s.l })
    ] }, s.l)) })
  ] }) });
}
const industries = [
  "Oil & Gas",
  "Energy & Utilities",
  "Defense",
  "Airports",
  "Ports",
  "Industrial Facilities",
  "Smart Cities",
  "Other"
];
function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4e3);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "relative py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsx(
      SectionHeader,
      {
        eyebrow: "Secure Your Infrastructure",
        title: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Let's deploy ",
          /* @__PURE__ */ jsx("span", { className: "text-teal", children: "autonomy" }),
          " at your site"
        ] }),
        description: "Talk to our solutions team about pilots, deployments, and integration with your existing operations center."
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-8 lg:grid-cols-[1.4fr_1fr]", children: [
      /* @__PURE__ */ jsxs(
        motion.form,
        {
          onSubmit,
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5 },
          className: "glass rounded-2xl p-8 sm:p-10",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsx(Field, { label: "Full Name", name: "name", required: true }),
              /* @__PURE__ */ jsx(Field, { label: "Company", name: "company", required: true }),
              /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true }),
              /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel" }),
              /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground", children: "Industry" }),
                /* @__PURE__ */ jsxs(
                  "select",
                  {
                    required: true,
                    defaultValue: "",
                    className: "w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal",
                    children: [
                      /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select industry…" }),
                      industries.map((i) => /* @__PURE__ */ jsx("option", { value: i, children: i }, i))
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsx("label", { className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground", children: "Message" }),
                /* @__PURE__ */ jsx(
                  "textarea",
                  {
                    required: true,
                    rows: 5,
                    placeholder: "Tell us about your site, scale, and timeline.",
                    className: "w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                disabled: sent,
                className: "mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:teal-glow disabled:opacity-80",
                children: sent ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }),
                  " Request received"
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Send Request ",
                  /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        motion.aside,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.5, delay: 0.1 },
          className: "glass flex flex-col gap-6 rounded-2xl p-8",
          children: [
            /* @__PURE__ */ jsx(Info, { icon: Mail, label: "Email", value: "contact@taknaacode.com" }),
            /* @__PURE__ */ jsx(Info, { icon: Phone, label: "Phone", value: "+968 24 000 000" }),
            /* @__PURE__ */ jsx(Info, { icon: MapPin, label: "Address", value: "Muscat, Sultanate of Oman" }),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#",
                className: "mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-teal/60 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-teal/10",
                children: [
                  /* @__PURE__ */ jsx(CalendarClock, { className: "h-4 w-4 text-teal" }),
                  "Schedule a Demo"
                ]
              }
            )
          ]
        }
      )
    ] })
  ] }) });
}
function Field({ label, name, type = "text", required = false }) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: name,
        name,
        type,
        required,
        className: "w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
      }
    )
  ] });
}
function Info({ icon: Icon, label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: label }),
      /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-sm text-foreground", children: value })
    ] })
  ] });
}
const cols = [
  {
    title: "Solutions",
    items: ["AI Surveillance Drone", "Fire & Smoke Detection", "Gas Leak Detection", "Intrusion Detection", "Command Center"]
  },
  {
    title: "Industries",
    items: ["Oil & Gas", "Energy & Utilities", "Defense", "Airports", "Ports", "Smart Cities"]
  },
  {
    title: "Company",
    items: ["About", "Technology", "Contact", "Careers", "Press"]
  }
];
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "relative border-t border-border bg-surface/40 pt-16 pb-8", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(Logo, { className: "h-14 w-auto" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 max-w-sm text-sm text-muted-foreground", children: "Design and Production of Social Networking Programs. Autonomous monitoring systems for critical infrastructure." }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex gap-3", children: [Linkedin, Twitter].map((Icon, i) => /* @__PURE__ */ jsx(
          "a",
          {
            href: "#",
            "aria-label": "Social link",
            className: "flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-teal hover:text-teal",
            children: /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" })
          },
          i
        )) })
      ] }),
      cols.map((c) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "mb-4 text-sm font-semibold uppercase tracking-widest text-teal", children: c.title }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: c.items.map((i) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-sm text-muted-foreground transition hover:text-foreground", children: i }) }, i)) })
      ] }, c.title))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row", children: [
      /* @__PURE__ */ jsx("p", { children: "© 2025 TaknaaCode L.L.C — S.P.C · All rights reserved." }),
      /* @__PURE__ */ jsx("p", { children: "Engineered for mission-critical operations." })
    ] })
  ] }) });
}
function Index() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsxs("main", { children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(Solutions, {}),
      /* @__PURE__ */ jsx(Industries, {}),
      /* @__PURE__ */ jsx(Technology, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as component
};
