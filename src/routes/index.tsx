import "../i18n";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Solutions } from "@/components/site/Solutions";
import { Industries } from "@/components/site/Industries";
import { Technology } from "@/components/site/Technology";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TaknaaCode — Autonomous Intelligence for Critical Infrastructure" },
      {
        name: "description",
        content:
          "TaknaaCode builds AI-powered surveillance drones and autonomous monitoring systems for oil & gas, defense, ports, airports, and smart cities.",
      },
      { property: "og:title", content: "TaknaaCode — Autonomous Drone Intelligence" },
      {
        property: "og:description",
        content:
          "AI-powered drones and intelligent monitoring systems designed to secure the world's most sensitive environments.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Industries />
        <Technology />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
