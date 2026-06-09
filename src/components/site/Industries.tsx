import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { Fuel, Zap } from "lucide-react";
import { SectionHeader } from "./Section";

const items = [
  {
    icon: Fuel,
    nameKey: "industries.items.oilGas.name",
    descKey: "industries.items.oilGas.desc",
  },
  {
    icon: Zap,
    nameKey: "industries.items.energyUtilities.name",
    descKey: "industries.items.energyUtilities.desc",
  },
];

export function Industries() {
  const { t } = useTranslation();

  return (
    <section id="industries" className="relative py-28">
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("industries.eyebrow")}
          title={
            <Trans
              i18nKey="industries.title"
              components={{ teal: <span className="text-teal" /> }}
            />
          }
        />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <motion.div
              key={it.nameKey}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass group flex flex-col items-center text-center rounded-xl p-6 transition-all hover:border-teal/50"
            >
              <div className="relative flex h-12 w-12 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <span className="absolute inset-0 rounded-lg bg-teal/20 animate-pulse-glow" />
                <it.icon className="relative h-6 w-6" />
              </div>

              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-foreground">
                  {t(it.nameKey)}
                </h3>

                <p className="mt-2 text-sm text-muted-foreground">
                  {t(it.descKey)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}