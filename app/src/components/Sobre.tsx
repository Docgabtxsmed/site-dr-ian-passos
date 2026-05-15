import Image from "next/image";
import {
  GraduationCapIcon,
  HospitalIcon,
  GlobeIcon,
  ShieldIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FORMATION = [
  { Icon: GraduationCapIcon, text: "Medicina — UFPE (2019)" },
  { Icon: HospitalIcon, text: "Residência Otorrino — IMIP (2024)" },
  { Icon: GlobeIcon, text: "Rhinology Minifellowship — Miami (2024)" },
  { Icon: ShieldIcon, text: "Oficial Médico — Exército Brasileiro" },
];

export function Sobre() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-auto md:h-[560px] rounded-2xl overflow-hidden bg-[#C9DFF2] shadow-sm">
            <Image
              src="/images/dr-ian-passos-sobre.jpg"
              alt="Dr. Ian Passos em seu consultório"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium uppercase tracking-wider text-[#66ADD9]">
              Conheça o Especialista
            </span>

            <div className="flex flex-col gap-2">
              <h2 className="text-[#043959]">Dr. Ian Passos Silva</h2>
              <p className="text-lg text-[#043959]/80">
                Médico Otorrinolaringologista
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="border-[#043959] text-[#043959] h-7 px-3 text-sm font-medium rounded-md"
              >
                CRM-PE 28737
              </Badge>
              <Badge
                variant="outline"
                className="border-[#043959] text-[#043959] h-7 px-3 text-sm font-medium rounded-md"
              >
                RQE 15742
              </Badge>
            </div>

            <div className="flex flex-col gap-4 text-base text-[#043959]/85 leading-relaxed">
              <p>
                Médico formado pela Universidade Federal de Pernambuco (UFPE),
                com residência em Otorrinolaringologia pelo Instituto de
                Medicina Integral Prof. Fernando Figueira (IMIP) e fellowship
                internacional em Rinologia em Miami (2024).
              </p>
              <p>
                Oficial Médico do Exército Brasileiro e membro da equipe
                Pernambuco Otorrinos, oferece atendimento humano e resolutivo,
                com foco na qualidade de vida dos seus pacientes.
              </p>
            </div>

            <ul className="flex flex-col gap-3 mt-2">
              {FORMATION.map(({ Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 text-[#66ADD9] shrink-0"
                    strokeWidth={1.5}
                  />
                  <span className="text-base text-[#043959]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
