import { Linkedin, Twitter } from "lucide-react";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Solutions",
    items: ["AI Surveillance Drone", "Fire & Smoke Detection", "Gas Leak Detection", "Intrusion Detection", "Command Center"],
  },
  {
    title: "Industries",
    items: ["Oil & Gas", "Energy & Utilities", "Defense", "Airports", "Ports", "Smart Cities"],
  },
  {
    title: "Company",
    items: ["About", "Technology", "Contact", "Careers", "Press"],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-14 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Design and Production of Social Networking Programs.
              Autonomous monitoring systems for critical infrastructure.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition hover:border-teal hover:text-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-muted-foreground transition hover:text-foreground">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© 2025 TaknaaCode L.L.C — S.P.C · All rights reserved.</p>
          <p>Engineered for mission-critical operations.</p>
        </div>
      </div>
    </footer>
  );
}
