import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Particles } from "./Particles";
import { Drone } from "./Drone";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string;

export function Hero() {
  const { t } = useTranslation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openCalendly = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    (window as any).Calendly?.initPopupWidget({ url: CALENDLY_URL });
  };

  return (
    <section id="top" className="relative h-screen overflow-hidden pt-10 pb-0">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none">
        <Particles />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center px-6 pt-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-teal-soft"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-glow" />
          {t("hero.badge")}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="max-w-2xl text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl md:text-4xl"
        >
          {t("hero.titleStart")}{" "}
          <span className="text-teal">{t("hero.titleHighlight")}</span>{" "}
          {t("hero.titleEnd")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-3 max-w-lg text-xs text-teal-soft sm:text-sm"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 flex flex-col gap-2 sm:flex-row"
        >
          <a
            href="#"
            onClick={openCalendly}
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-teal px-5 py-2 text-xs font-medium text-primary-foreground transition-all hover:teal-glow"
          >
            {t("hero.demoButton")}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="inline-flex items-center justify-center rounded-md border border-teal/70 px-5 py-2 text-xs font-medium text-foreground transition-colors hover:bg-teal/10"
          >
            {t("hero.contactButton")}
          </a>
        </motion.div>

        <div className="mt-8 sm:-mt-16 md:-mt-32 w-[90%] sm:w-full flex justify-center pointer-events-none">
          <Drone />
        </div>

        <motion.a
          href="#solutions"
          onClick={(e) => handleScroll(e, "solutions")}
          aria-label={t("hero.scrollLabel")}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-teal-soft"
        >
          <ChevronDown className="h-6 w-6" />
        </motion.a>
      </div>
    </section>
  );
}