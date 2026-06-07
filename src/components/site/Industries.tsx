import { motion } from "framer-motion";
import { Fuel, Zap, Shield, Plane, Anchor, Factory, Building2 } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  { icon: Fuel, name: "Oil & Gas", desc: "Pipeline integrity, leak detection, and flare monitoring." },
  { icon: Zap, name: "Energy & Utilities", desc: "Substation surveillance and transmission inspection." },
  { icon: Shield, name: "Defense", desc: "Persistent ISR for forward operating bases and depots." },
  { icon: Plane, name: "Airports", desc: "Perimeter security, FOD detection, and wildlife dispersal." },
  { icon: Anchor, name: "Ports", desc: "Berth security, cargo monitoring, and maritime intrusion." },
  { icon: Factory, name: "Industrial Facilities", desc: "Hazard sensing across plants, mines, and warehouses." },
  { icon: Building2, name: "Smart Cities", desc: "Urban safety analytics and public-space situational awareness." },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Who We Protect"
          title={<>Trusted across the most <span className="text-teal">demanding</span> sectors</>}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass group flex items-start gap-4 rounded-xl p-6 transition-all hover:border-teal/50"
            >
              <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <span className="absolute inset-0 rounded-lg bg-teal/20 animate-pulse-glow" />
                <it.icon className="relative h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">{it.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
