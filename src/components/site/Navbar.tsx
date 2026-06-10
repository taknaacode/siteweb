import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL as string;

function openCalendly(e: React.MouseEvent) {
  e.preventDefault();
  window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
}

const links = [
  { href: "#solutions", key: "navbar.solutions" },
  { href: "#industries", key: "navbar.industries" },
  { href: "#technology", key: "navbar.technology" },
  { href: "#about", key: "navbar.about" },
  { href: "#contact", key: "navbar.contact" },
];

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Logo className="h-16 w-auto" />
          <span className="hidden text-sm font-semibold tracking-widest text-foreground sm:block">
            TAKNAACODE
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(l.key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />

          <a
            href="#"
            onClick={openCalendly}
            className="rounded-md bg-teal px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:teal-glow"
          >
            {t("navbar.requestDemo")}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
          aria-label={t("navbar.toggleMenu")}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong border-t border-border">
          <ul className="flex flex-col p-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-foreground text-base"
                >
                  {t(l.key)}
                </a>
              </li>
            ))}

            <li>
              <LanguageSwitcher />
            </li>

            <li>
              <a
                href="#"
                onClick={(e) => { openCalendly(e); setOpen(false); }}
                className="mt-2 inline-block rounded-md bg-teal px-4 py-2 text-center text-sm font-medium text-primary-foreground"
              >
                {t("navbar.requestDemo")}
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}