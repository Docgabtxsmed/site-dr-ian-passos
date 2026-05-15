import {
  WindIcon,
  EarIcon,
  ScanLineIcon,
  CheckIcon,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Area = {
  Icon: LucideIcon;
  title: string;
  items: string[];
};

const AREAS: Area[] = [
  {
    Icon: WindIcon,
    title: "Nariz",
    items: [
      "Sinusite",
      "Desvio de Septo",
      "Rinite",
      "Obstrução Nasal",
      "Polipose",
    ],
  },
  {
    Icon: EarIcon,
    title: "Ouvido e Garganta",
    items: ["Perda Auditiva", "Amigdalite", "Ronco e Apneia"],
  },
  {
    Icon: ScanLineIcon,
    title: "Procedimentos",
    items: ["Nasofibroscopia", "Videolaringoscopia"],
  },
];

export function AreasAtuacao() {
  return (
    <section id="areas" className="bg-[#C9DFF2] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[#043959]">Áreas de Atuação</h2>
          <p className="text-lg text-[#043959]/80 mt-4">
            Diagnóstico e tratamento especializado para diversas condições
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {AREAS.map(({ Icon, title, items }) => (
            <Card
              key={title}
              className="bg-white ring-0 shadow-sm hover:shadow-md transition-shadow duration-200 py-6"
            >
              <CardHeader className="flex flex-col gap-4 px-6">
                <Icon
                  className="h-8 w-8 text-[#043959]"
                  strokeWidth={1.5}
                />
                <CardTitle className="font-display font-bold text-xl text-[#043959]">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6">
                <ul className="flex flex-col gap-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon
                        className="h-5 w-5 text-[#66ADD9] shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <span className="text-base text-[#043959]/85">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
