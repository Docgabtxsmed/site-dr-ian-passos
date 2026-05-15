"use client";

import { useState, type FormEvent } from "react";
import { ClockIcon, CalendarIcon, ArrowRightIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WHATSAPP_NUMBER = "5581989399672";

const UNIDADES = [
  "PE Otorrinos (Boa Viagem)",
  "HOPE (Ilha do Leite)",
  "Hospital Jayme da Fonte (Graças)",
  "Tanto faz",
];

function buildWhatsAppHref(data: {
  nome: string;
  whatsapp: string;
  unidade: string;
  queixa: string;
}) {
  const lines = [
    "Olá, gostaria de agendar uma consulta com o Dr. Ian Passos.",
    "",
    `Nome: ${data.nome}`,
    `WhatsApp: ${data.whatsapp}`,
    `Unidade preferida: ${data.unidade}`,
    `Queixa: ${data.queixa}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${text}&type=phone_number&app_absent=0`;
}

const SIMPLE_WHATSAPP_HREF =
  "https://api.whatsapp.com/send/?phone=5581989399672&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Ian+Passos.&type=phone_number&app_absent=0";

export function CTAFinal() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [unidade, setUnidade] = useState(UNIDADES[0]);
  const [queixa, setQueixa] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const href = buildWhatsAppHref({ nome, whatsapp, unidade, queixa });
    window.open(href, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full px-3.5 py-3 text-base text-[#043959] bg-white border border-[#043959]/20 rounded-lg outline-none focus:border-[#66ADD9] focus:ring-2 focus:ring-[#66ADD9]/20 transition-colors";
  const labelClass =
    "text-sm font-semibold text-[#043959]";

  return (
    <section
      id="contato"
      className="bg-[#043959] text-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <div className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#66ADD9]">
              Agendar consulta
            </div>
            <h2 className="text-white">
              O caminho mais rápido é o WhatsApp.
            </h2>
            <p className="text-lg text-[#C9DFF2]">
              Resposta no mesmo dia, em horário comercial. Você escolhe a
              unidade e o melhor horário — confirmamos por mensagem.
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={SIMPLE_WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#C9DFF2] text-[#043959] font-medium text-base px-6 py-3 rounded-lg transition-colors min-h-[44px]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            <div className="border-t border-white/15 pt-5 mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2.5">
                <ClockIcon
                  className="h-[18px] w-[18px] text-[#C9DFF2] shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-[#C9DFF2]">
                  Atendimento secretaria:{" "}
                  <strong className="text-white font-semibold">
                    seg. a sex. · 8h-18h
                  </strong>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CalendarIcon
                  className="h-[18px] w-[18px] text-[#C9DFF2] shrink-0"
                  strokeWidth={1.5}
                />
                <span className="text-sm text-[#C9DFF2]">
                  Confirmação no mesmo dia · sem fila de espera longa
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md text-[#043959]">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4"
              noValidate
            >
              <h3 className="font-display font-bold text-xl md:text-2xl text-[#043959] leading-tight">
                Ou deixe seus dados — entramos em contato.
              </h3>

              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Seu nome</span>
                <input
                  type="text"
                  required
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Como prefere ser chamado(a)"
                  className={inputClass}
                  autoComplete="name"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>WhatsApp</span>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="(81) 9 0000-0000"
                  className={inputClass}
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Unidade preferida</span>
                <select
                  value={unidade}
                  onChange={(e) => setUnidade(e.target.value)}
                  className={inputClass}
                >
                  {UNIDADES.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </label>

              <label className="flex flex-col gap-1.5">
                <span className={labelClass}>Qual é a sua queixa?</span>
                <textarea
                  required
                  value={queixa}
                  onChange={(e) => setQueixa(e.target.value)}
                  rows={3}
                  placeholder="Ex: sinusite que voltou, ronco, ouvido entupido…"
                  className={`${inputClass} resize-y`}
                />
              </label>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 w-full bg-[#043959] hover:bg-[#032b44] text-white font-medium text-base px-6 py-3 rounded-lg transition-colors min-h-[44px]"
              >
                <span>Enviar pedido de agendamento</span>
                <ArrowRightIcon className="h-4 w-4" strokeWidth={1.5} />
              </button>

              <p className="text-xs text-[#8298A8] mt-1 leading-relaxed">
                Não compartilhamos seus dados. Em caso de emergência, procure o
                pronto-socorro mais próximo.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
