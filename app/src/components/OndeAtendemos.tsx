import {
  MapPinIcon,
  VideoIcon,
  ShieldIcon,
  ArrowUpRightIcon,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Location = {
  Icon: LucideIcon;
  name: string;
  body: string;
  tag?: string;
  cta: { label: string; href: string };
};

const LOCATIONS: Location[] = [
  {
    Icon: MapPinIcon,
    name: "PE Otorrinos",
    body: "Av. Conselheiro Aguiar — Boa Viagem, Recife",
    tag: "Adultos e Crianças",
    cta: {
      label: "Agendar pelo WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=5581989399672&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Ian+Passos.&type=phone_number&app_absent=0",
    },
  },
  {
    Icon: MapPinIcon,
    name: "HOPE — Hospital de Olhos de Pernambuco",
    body: "Rua Francisco Alves — Ilha do Leite, Recife",
    cta: {
      label: "Agendar pelo WhatsApp",
      href: "https://api.whatsapp.com/send/?phone=558133022121&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Ian+Passos.&type=phone_number&app_absent=0",
    },
  },
  {
    Icon: MapPinIcon,
    name: "Hospital Jayme da Fonte",
    body: "Graças, Recife",
    cta: { label: "Ver no mapa", href: "#" },
  },
  {
    Icon: VideoIcon,
    name: "Telemedicina",
    body: "Consultas online para todo o Brasil",
    tag: "Online",
    cta: { label: "Agendar online", href: "https://wa.me/#" },
  },
];

export function OndeAtendemos() {
  return (
    <section id="localizacao" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[#043959]">Onde Atendemos</h2>
          <p className="text-lg text-[#043959]/80 mt-4">
            Consultas presenciais em Recife e atendimento online para todo o
            Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {LOCATIONS.map(({ Icon, name, body, tag, cta }) => (
            <Card
              key={name}
              className="bg-white border border-[#C9DFF2] ring-0 rounded-xl shadow-none hover:shadow-md transition-shadow duration-200 py-6"
            >
              <CardHeader className="flex flex-col gap-3 px-6">
                <div className="flex items-start justify-between gap-2">
                  <Icon
                    className="h-8 w-8 text-[#043959] shrink-0"
                    strokeWidth={1.5}
                  />
                  {tag && (
                    <Badge
                      variant="outline"
                      className="bg-[#C9DFF2] border-transparent text-[#043959] h-7 px-3 text-sm font-medium rounded-md"
                    >
                      {tag}
                    </Badge>
                  )}
                </div>
                <CardTitle className="font-display font-bold text-xl text-[#043959]">
                  {name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4 px-6">
                <p className="text-base text-[#043959]/85">{body}</p>
                <a
                  href={cta.href}
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#043959] hover:text-[#66ADD9] transition-colors w-fit"
                >
                  <span>{cta.label}</span>
                  <ArrowUpRightIcon
                    className="h-4 w-4"
                    strokeWidth={1.5}
                  />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-2xl mx-auto flex items-center justify-center gap-2 text-sm text-[#8298A8]">
          <ShieldIcon
            className="h-4 w-4 shrink-0"
            strokeWidth={1.5}
          />
          <p className="text-center">
            Aceitamos diversos planos de saúde: Bradesco, SulAmérica, Amil,
            Allianz e outros.
          </p>
        </div>
      </div>
    </section>
  );
}
