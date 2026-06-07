import { motion } from "framer-motion";
import { Plane, Cpu, Eye, Radar, MonitorCog } from "lucide-react";
import { SectionHeader } from "./Section";

const nodes = [
  { icon: Plane, label: "Drone" },
  { icon: Cpu, label: "Edge AI" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Radar, label: "Sensor Fusion" },
  { icon: MonitorCog, label: "Command Center" },
];

const chips = [
  "Edge AI", "Computer Vision", "Machine Learning",
  "Thermal Analytics", "Sensor Fusion",
  "Autonomous Navigation", "Predictive Maintenance",
];

export function Technology() {
  return (
    <section id="technology" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Embedded Intelligence"
          title={<>Every decision happens at <span className="text-teal">the edge</span></>}
          description="Onboard neural accelerators fuse multi-spectral inputs and stream actionable intelligence directly to operators — sub-second response, with or without connectivity."
        />

        {/* Node diagram */}
        <div className="glass rounded-2xl p-6 sm:p-10">
          <div className="relative">
            <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-5 sm:gap-y-0 sm:gap-x-4 items-center">
              {nodes.map((n, i) => (
                <motion.div
                  key={n.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.12 }}
                  className="flex flex-col items-center"
                >
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-xl border border-teal/40 bg-background/60 text-teal">
                    <span className="absolute inset-0 rounded-xl bg-teal/10 animate-pulse-glow" />
                    <n.icon className="relative h-8 w-8" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">{n.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Connecting line desktop */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-10 hidden sm:block"
              height="2"
              width="100%"
              preserveAspectRatio="none"
              aria-hidden
            >
              <line
                x1="10%" y1="1" x2="90%" y2="1"
                stroke="#508176"
                strokeWidth="2"
                strokeDasharray="8 8"
                className="animate-dash"
              />
            </svg>
          </div>

          {/* Chips */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {chips.map((c) => (
              <span
                key={c}
                className="rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-sm text-teal-soft"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
