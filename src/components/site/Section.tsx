import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-16 max-w-3xl text-center"
    >
      <p className="mb-4 text-xs uppercase tracking-[0.3em] text-teal">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
