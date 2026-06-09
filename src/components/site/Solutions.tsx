import { useTranslation, Trans } from "react-i18next";
import {
  ArrowUpRight,
  Plane,
  ShieldAlert,
  MonitorCog,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./Section";

const items = [
  {
    icon: Plane,
    titleKey: "solutions.items.drone.title",
    descKey: "solutions.items.drone.desc",
  },
  {
    icon: ShieldAlert,
    titleKey: "solutions.items.intrusion.title",
    descKey: "solutions.items.intrusion.desc",
  },
  {
    icon: MonitorCog,
    titleKey: "solutions.items.commandCenter.title",
    descKey: "solutions.items.commandCenter.desc",
  },
];

export function Solutions() {
  const { t } = useTranslation();

  return (
    <section id="solutions" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("solutions.eyebrow")}
          title={
            <Trans
              i18nKey="solutions.title"
              components={{ teal: <span className="text-teal" /> }}
            />
          }
          description={t("solutions.description")}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.titleKey}
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

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {t(it.titleKey)}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {t(it.descKey)}
              </p>

              
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}