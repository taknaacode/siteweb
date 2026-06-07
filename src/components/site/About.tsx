import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  { icon: Target, title: "Mission", desc: "Protect critical infrastructure through autonomous intelligence." },
  { icon: Eye, title: "Vision", desc: "A world where every essential system is monitored, secured, and self-aware." },
  { icon: Sparkles, title: "Innovation", desc: "Edge AI, computer vision, and robotics engineered in-house." },
  { icon: ShieldCheck, title: "Safety", desc: "Defense-grade reliability built into every component we ship." },
];

const stats = [
  { v: "5+", l: "Countries" },
  { v: "200+", l: "Deployments" },
  { v: "99.8%", l: "Uptime" },
  { v: "24/7", l: "Operations" },
];

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About TaknaaCode"
          title={<>Building the <span className="text-teal">autonomous</span> security layer</>}
          description="TaknaaCode L.L.C — S.P.C is an innovation-driven technology company developing next-generation autonomous surveillance systems. We combine aerial robotics, embedded AI, and operator-first software to give organizations real-time control over their most critical environments."
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-xl p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="glass mt-10 grid grid-cols-2 gap-4 rounded-2xl p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-3xl font-bold text-teal sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
