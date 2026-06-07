import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Particles } from "./Particles";
import { Drone } from "./Drone";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0"><Particles /></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-teal-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-glow" />
          Autonomous Defense Systems
        </motion.span>

        <Drone />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-10 max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl"
        >
          Autonomous Intelligence for{" "}
          <span className="text-teal">Critical Infrastructure</span> Protection
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-6 max-w-2xl text-base text-teal-soft sm:text-lg"
        >
          AI-powered drones and intelligent monitoring systems designed to secure
          the world's most sensitive environments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:teal-glow"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-teal/70 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-teal/10"
          >
            Contact Sales
          </a>
        </motion.div>

        <motion.a
          href="#solutions"
          aria-label="Scroll to solutions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="mt-16 text-teal-soft"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.a>
      </div>
    </section>
  );
}
