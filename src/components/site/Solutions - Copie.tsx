import { motion } from "framer-motion";
import { ArrowUpRight, Plane, Flame, Wind, ShieldAlert, MonitorCog } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    icon: Plane,
    title: "AI Surveillance Drone",
    desc: "Autonomous patrol routes with onboard AI vision, anomaly detection, and real-time alerts streamed to your command center.",
  },
  {
    icon: Flame,
    title: "Fire & Smoke Detection Drone",
    desc: "Thermal imaging and multispectral sensors detect ignition events early and trigger automated response protocols.",
  },
  {
    icon: Wind,
    title: "Gas Leak Detection Drone",
    desc: "Industrial-grade gas sensing with predictive analytics for methane, H₂S, and VOCs across refineries and pipelines.",
  },
  {
    icon: ShieldAlert,
    title: "Intrusion Detection Drone",
    desc: "Human and vehicle classification with perimeter tracking, low-light operation, and silent pursuit modes.",
  },
  {
    icon: MonitorCog,
    title: "Integrated Command Center",
    desc: "Single pane of glass for fleet management, live telemetry, mission planning, and forensic analytics.",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Solutions"
          title={<>Engineered for <span className="text-teal">mission-critical</span> operations</>}
          description="A complete autonomous monitoring stack — from airborne sensors to operator dashboards — built for environments where downtime is not an option."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group glass relative flex flex-col rounded-2xl p-7 transition-all duration-300 hover:teal-glow"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal">
                <it.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">{it.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{it.desc}</p>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-all group-hover:gap-2.5"
              >
                Learn More <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
