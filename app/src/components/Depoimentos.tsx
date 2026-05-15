import { StarIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  text: string;
  author: string;
  highlight: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Médico muito atencioso e pontual. Explicou tudo com muita clareza e paciência. Saí da consulta me sentindo seguro sobre o tratamento.",
    author: "Paciente via Doctoralia",
    highlight: "Pontualidade",
  },
  {
    text: "Excelente profissional. Muito didático nas explicações, fez questão de mostrar os exames e explicar cada detalhe. Recomendo.",
    author: "Paciente via Doctoralia",
    highlight: "Didática",
  },
  {
    text: "Atendimento humanizado e acolhedor. Dr. Ian é um profissional que realmente se importa com o paciente. Muito satisfeito.",
    author: "Paciente via Doctoralia",
    highlight: "Atenção",
  },
];

export function Depoimentos() {
  return (
    <section id="depoimentos" className="bg-[#DDC9C3] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-[#043959]">O que dizem nossos pacientes</h2>
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-md text-sm font-medium text-[#043959]">
            <StarIcon
              className="h-4 w-4 text-[#66ADD9] fill-[#66ADD9]"
              strokeWidth={1.5}
            />
            <span>54+ avaliações positivas no Doctoralia</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map(({ text, author, highlight }) => (
            <Card
              key={highlight}
              className="bg-white ring-0 rounded-xl shadow-sm py-6"
            >
              <CardContent className="flex flex-col gap-4 px-6 flex-1">
                <span
                  className="font-display text-4xl leading-none text-[#043959]/20"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="text-base text-[#043959]/85 leading-relaxed flex-1">
                  {text}
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <div
                    className="w-10 h-10 rounded-full bg-[#043959] text-white flex items-center justify-center font-display font-bold text-base shrink-0"
                    aria-hidden="true"
                  >
                    P
                  </div>
                  <span className="text-sm text-[#043959]/80">{author}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium">
                  <StarIcon
                    className="h-4 w-4 text-[#66ADD9] fill-[#66ADD9]"
                    strokeWidth={1.5}
                  />
                  <span className="text-[#043959]">{highlight}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
