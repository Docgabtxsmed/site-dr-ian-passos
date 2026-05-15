"use client";

import { useState } from "react";
import {
  MapPinIcon,
  ShieldIcon,
  ArrowUpRightIcon,
} from "lucide-react";

type Location = {
  key: string;
  shortName: string;
  name: string;
  body: string;
  cta: { label: string; href: string };
};

const CONVENIOS = [
  "Bradesco Saúde",
  "SulAmérica",
  "Amil",
  "Allianz",
  "Unimed Recife",
  "Cassi",
  "Postal Saúde",
];

const LOCATIONS: Location[] = [
  {
    key: "pe-otorrinos",
    shortName: "PE Otorrinos",
    name: "PE Otorrinos",
    body: "Av. Conselheiro Aguiar — Boa Viagem, Recife",
    cta: {
      label: "Agendar pelo WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=5581989399672&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Ian+Passos.&type=phone_number&app_absent=0",
    },
  },
  {
    key: "hope",
    shortName: "HOPE",
    name: "HOPE — Hospital de Olhos de Pernambuco",
    body: "Rua Francisco Alves — Ilha do Leite, Recife",
    cta: {
      label: "Agendar pelo WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=558133022121&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Ian+Passos.&type=phone_number&app_absent=0",
    },
  },
  {
    key: "jayme",
    shortName: "Hospital Jayme da Fonte",
    name: "Hospital Jayme da Fonte",
    body: "Graças, Recife",
    cta: { label: "Ver no mapa", href: "#" },
  },
];

export function OndeAtendemos() {
  const [activeKey, setActiveKey] = useState(LOCATIONS[0].key);
  const active = LOCATIONS.find((l) => l.key === activeKey) ?? LOCATIONS[0];

  return (
    <section id="localizacao" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-[#043959]">Onde Atendemos</h2>
          <p className="text-lg text-[#043959]/80 mt-4">
            Consultas presenciais em diferentes locais de Recife
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Locais de atendimento"
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10"
        >
          {LOCATIONS.map((loc) => {
            const isActive = loc.key === activeKey;
            return (
              <button
                key={loc.key}
                type="button"
                role="tab"
                aria-selected={isActive ? "true" : "false"}
                aria-controls={`panel-${loc.key}`}
                id={`tab-${loc.key}`}
                onClick={() => setActiveKey(loc.key)}
                className={`min-h-[44px] px-5 md:px-6 py-2.5 rounded-lg text-base font-medium transition-colors duration-200 border ${
                  isActive
                    ? "bg-[#043959] text-white border-[#043959]"
                    : "bg-white text-[#043959] border-[#C9DFF2] hover:border-[#66ADD9] hover:text-[#66ADD9]"
                }`}
              >
                {loc.shortName}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active.key}`}
          aria-labelledby={`tab-${active.key}`}
          className="max-w-3xl mx-auto bg-[#C9DFF2]/30 border border-[#C9DFF2] rounded-xl p-6 md:p-8"
        >
          <div className="flex items-start gap-3 mb-4">
            <MapPinIcon
              className="h-7 w-7 text-[#043959] shrink-0 mt-0.5"
              strokeWidth={1.5}
            />
            <h3 className="font-display font-bold text-xl md:text-2xl text-[#043959]">
              {active.name}
            </h3>
          </div>
          <p className="text-base md:text-lg text-[#043959]/85 mb-6 ml-10">
            {active.body}
          </p>
          <a
            href={active.cta.href}
            target={active.cta.href.startsWith("http") ? "_blank" : undefined}
            rel={active.cta.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="ml-10 inline-flex items-center gap-1.5 text-base font-medium text-[#043959] hover:text-[#66ADD9] transition-colors"
          >
            <span>{active.cta.label}</span>
            <ArrowUpRightIcon className="h-4 w-4" strokeWidth={1.5} />
          </a>
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto bg-[#C9DFF2] rounded-2xl p-3 md:p-4">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <div className="flex items-center gap-2.5 mb-5">
              <ShieldIcon
                className="h-5 w-5 text-[#043959] shrink-0"
                strokeWidth={1.5}
              />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#043959]">
                Convênios Aceitos
              </span>
            </div>

            <ul className="flex flex-wrap gap-2 mb-4">
              {CONVENIOS.map((c) => (
                <li
                  key={c}
                  className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-[#C9DFF2] text-[#043959] text-sm font-semibold"
                >
                  {c}
                </li>
              ))}
              <li className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white text-[#043959] text-sm font-semibold border border-[#043959]/15">
                + outros
              </li>
            </ul>

            <p className="text-xs text-[#8298A8]">
              Consulte cobertura específica do seu plano antes do agendamento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
