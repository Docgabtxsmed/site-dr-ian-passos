"use client";

import * as React from "react";
import { MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_URL = "#"; // TODO: substituir pelo wa.me/55... quando definido

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDarkHero = !scrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="cfm-fineprint bg-[#043959] text-[#C9DFF2] py-1.5 px-4 text-center">
        CRM-PE 28737 — Médico | Otorrinolaringologista — RQE 15742
      </div>

      <div
        className={
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-200"
            : "bg-transparent transition-all duration-200"
        }
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
          <a
            href="#top"
            aria-label="Dr. Ian Passos — Otorrinolaringologista"
            className={`font-display font-bold text-xl tracking-tight transition-colors ${
              onDarkHero ? "text-white" : "text-[#043959]"
            }`}
          >
            Dr. Ian Passos
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  onDarkHero
                    ? "text-white hover:text-[#C9DFF2]"
                    : "text-[#043959] hover:text-[#66ADD9]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={WHATSAPP_URL}
            className="hidden md:inline-flex items-center justify-center bg-[#66ADD9] hover:bg-[#4A95C3] text-white font-medium text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Agendar Consulta
          </a>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden transition-colors ${
                  onDarkHero
                    ? "text-white hover:bg-white/10"
                    : "text-[#043959] hover:bg-[#043959]/5"
                }`}
                aria-label="Abrir menu"
              >
                <MenuIcon className="h-6 w-6" strokeWidth={1.5} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-white p-6">
              <SheetTitle className="font-display text-xl text-[#043959]">
                Menu
              </SheetTitle>
              <nav className="flex flex-col gap-5 mt-8" aria-label="Navegação móvel">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-[#043959] hover:text-[#66ADD9] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={WHATSAPP_URL}
                className="mt-8 inline-flex items-center justify-center w-full bg-[#66ADD9] hover:bg-[#4A95C3] text-white font-medium text-sm px-5 py-3 rounded-lg transition-colors"
              >
                Agendar Consulta
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
