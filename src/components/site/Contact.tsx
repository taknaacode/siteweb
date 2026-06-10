import { useState, type FormEvent } from "react";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, MapPin, CalendarClock, Send, Check } from "lucide-react";
import { SectionHeader } from "./Section";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const industries = [
  "contact.industries.oilGas",
  "contact.industries.energyUtilities",
  "contact.industries.defense",
  "contact.industries.airports",
  "contact.industries.ports",
  "contact.industries.industrialFacilities",
  "contact.industries.smartCities",
  "contact.industries.other",
];

export function Contact() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Configuration d'EmailJS manquante.");
      console.error("Veuillez configurer les variables VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID et VITE_EMAILJS_PUBLIC_KEY dans votre fichier .env.local");
      return;
    }

    const promise = emailjs.sendForm(
      serviceId,
      templateId,
      e.currentTarget,
      publicKey
    );

    toast.promise(promise, {
      loading: "Envoi en cours...",
      success: () => {
        setSent(true);
        setTimeout(() => setSent(false), 4000);
        (e.target as HTMLFormElement).reset();
        return "Message envoyé avec succès !";
      },
      error: (err) => {
        console.error("EmailJS Error:", err);
        return "Erreur lors de l'envoi du message.";
      },
    });
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow={t("contact.eyebrow")}
          title={
            <Trans
              i18nKey="contact.title"
              components={{ teal: <span className="text-teal" /> }}
            />
          }
          description={t("contact.description")}
        />

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-8 sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("contact.form.fullName")} name="name" required />
              <Field label={t("contact.form.company")} name="company" required />
              <Field label={t("contact.form.email")} name="email" type="email" required />
              <Field label={t("contact.form.phone")} name="phone" type="tel" />

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  {t("contact.form.industry")}
                </label>
                <select
                  name="industry"
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
                >
                  <option value="" disabled>
                    {t("contact.form.selectIndustry")}
                  </option>
                  {industries.map((i) => (
                    <option key={i} value={t(i)}>
                      {t(i)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  {t("contact.form.message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:teal-glow disabled:opacity-80"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> {t("contact.form.received")}
                </>
              ) : (
                <>
                  {t("contact.form.send")} <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass flex flex-col gap-6 rounded-2xl p-8"
          >
            <Info icon={Mail} label={t("contact.info.email")} value="contact@taknaacode.com" />
            <Info icon={MapPin} label={t("contact.info.address")} value={t("contact.info.addressValue")} />

            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-teal/60 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-teal/10"
            >
              <CalendarClock className="h-4 w-4 text-teal" />
              {t("contact.info.scheduleDemo")}
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
      />
    </div>
  );
}

function Info({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className="mt-0.5 text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}