import { useTranslation } from "react-i18next";
import { Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  const { t } = useTranslation();

  const cols = [
    {
      title: t("footer.columns.solutions.title"),
      items: [
        t("footer.columns.solutions.drone"),
        t("footer.columns.solutions.intrusion"),
        t("footer.columns.solutions.commandCenter"),
      ],
    },
    {
      title: t("footer.columns.industries.title"),
      items: [
        t("footer.columns.industries.oilGas"),
        t("footer.columns.industries.energy"),
      ],
    },
    {
      title: t("footer.columns.company.title"),
      items: [
        t("footer.columns.company.about"),
        t("footer.columns.company.technology"),
        t("footer.columns.company.contact"),
        t("footer.columns.company.careers"),
        t("footer.columns.company.press"),
      ],
    },
  ];

  return (
    <footer className="relative border-t border-border bg-surface/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-54 w-auto" />

            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={t("footer.social")}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-teal hover:text-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal">
                {c.title}
              </h4>

              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition hover:text-foreground"
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>
    </footer>
  );
}