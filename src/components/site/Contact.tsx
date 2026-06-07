import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CalendarClock, Send, Check } from "lucide-react";
import { SectionHeader } from "./Section";

const industries = [
  "Oil & Gas", "Energy & Utilities", "Defense",
  "Airports", "Ports", "Industrial Facilities", "Smart Cities", "Other",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Secure Your Infrastructure"
          title={<>Let's deploy <span className="text-teal">autonomy</span> at your site</>}
          description="Talk to our solutions team about pilots, deployments, and integration with your existing operations center."
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
              <Field label="Full Name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  Industry
                </label>
                <select
                  required
                  defaultValue=""
                  className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
                >
                  <option value="" disabled>Select industry…</option>
                  {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your site, scale, and timeline."
                  className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition focus:border-teal"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:teal-glow disabled:opacity-80"
            >
              {sent ? (<><Check className="h-4 w-4" /> Request received</>) : (<>Send Request <Send className="h-4 w-4" /></>)}
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass flex flex-col gap-6 rounded-2xl p-8"
          >
            <Info icon={Mail} label="Email" value="contact@taknaacode.com" />
            <Info icon={Phone} label="Phone" value="+968 24 000 000" />
            <Info icon={MapPin} label="Address" value="Muscat, Sultanate of Oman" />
            <a
              href="#"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md border border-teal/60 px-5 py-3 text-sm font-medium text-foreground transition hover:bg-teal/10"
            >
              <CalendarClock className="h-4 w-4 text-teal" />
              Schedule a Demo
            </a>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
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

function Info({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-teal/40 bg-teal/10 text-teal">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="mt-0.5 text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}
