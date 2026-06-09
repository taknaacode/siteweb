import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { Target, Eye, Sparkles, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Section";

const pillars = [
  {
    icon: Target,
    titleKey: "about.pillars.mission.title",
    descKey: "about.pillars.mission.desc",
  },
  {
    icon: Eye,
    titleKey: "about.pillars.vision.title",
    descKey: "about.pillars.vision.desc",
  },
  {
    icon: Sparkles,
    titleKey: "about.pillars.innovation.title",
    descKey: "about.pillars.innovation.desc",
  },
  {
    icon: ShieldCheck,
    titleKey: "about.pillars.safety.title",
    descKey: "about.pillars.safety.desc",
  },
];

const stats = [
  { v: "24/7", labelKey: "about.stats.operations" },
  { v: "10+", labelKey: "about.stats.threats" },
  { v: "2 sec", labelKey: "about.stats.response" },
  { v: "500m+", labelKey: "about.stats.altitude" },
];

export function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("about.eyebrow")}
          title={
            <Trans
              i18nKey="about.title"
              components={{ teal: <span className="text-teal" /> }}
            />
          }
          description={t("about.description")}
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <motion.div
              key={p.titleKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass rounded-xl p-6"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal">
                <p.icon className="h-5 w-5" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {t(p.titleKey)}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {t(p.descKey)}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="glass mt-10 grid grid-cols-2 gap-4 rounded-2xl p-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.labelKey} className="text-center">
              <div className="text-3xl font-bold text-teal sm:text-4xl">
                {s.v}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {t(s.labelKey)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}