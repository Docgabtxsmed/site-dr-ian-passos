import Image from "next/image";
import { ClockIcon, MapPinIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas de atuação" },
  { href: "#localizacao", label: "Onde atendo" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP_HREF =
  "https://api.whatsapp.com/send/?phone=5581989399672&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+o+Dr.+Ian+Passos.&type=phone_number&app_absent=0";

const INSTAGRAM_HREF = "#";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const labelClass =
  "text-[11px] tracking-[0.08em] uppercase font-semibold text-[#66ADD9]";

export function Footer() {
  return (
    <footer className="bg-[#043959] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="flex flex-col gap-4 max-w-[260px]">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo-dr-ian-passos.jpg"
                alt=""
                width={84}
                height={84}
                className="w-11 h-11 object-contain rounded-md"
              />
              <div className="leading-tight">
                <div className="font-display font-bold text-[19px] text-white tracking-tight">
                  Dr. Ian Passos
                </div>
                <div className="text-[11px] tracking-[0.08em] uppercase font-semibold text-[#66ADD9]">
                  Otorrinolaringologista
                </div>
              </div>
            </div>
            <p className="text-sm text-[#C9DFF2] leading-relaxed">
              Cuidado especializado para nariz, ouvido e garganta em Recife.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            <div className={labelClass}>Navegar</div>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#C9DFF2] hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <div className={labelClass}>Atendimento</div>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#C9DFF2] hover:text-white transition-colors w-fit"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>(81) 98939-9672</span>
            </a>
            <div className="flex items-center gap-2 text-sm text-[#C9DFF2]">
              <ClockIcon className="h-4 w-4" strokeWidth={1.5} />
              <span>Seg. a sex. · 8h-18h</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-[#C9DFF2]">
              <MapPinIcon
                className="h-4 w-4 mt-0.5 shrink-0"
                strokeWidth={1.5}
              />
              <span>
                Recife / PE
                <br />
                Três unidades em Recife
              </span>
            </div>
            <a
              href={INSTAGRAM_HREF}
              aria-label="Instagram do Dr. Ian Passos"
              className="mt-2 inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-white hover:bg-white/15 transition-colors"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <div className={labelClass}>Identificação CFM</div>
            <div className="text-sm font-semibold text-white leading-snug">
              Dr. Ian Passos Silva
            </div>
            <div className="text-[13px] text-[#C9DFF2] leading-relaxed">
              CRM-PE 28737 — Médico
              <br />
              Otorrinolaringologista — RQE 15742
            </div>
            <p className="text-xs text-[#8298A8] leading-relaxed mt-1">
              Informações apresentadas têm caráter educativo. Não substituem
              consulta médica presencial.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-[#8298A8]">
            © 2026 Dr. Ian Passos Silva. Todos os direitos reservados.
          </p>
          <div className="flex gap-5 text-xs text-[#8298A8]">
            <a href="/privacidade" className="hover:text-white transition-colors">
              Política de privacidade
            </a>
            <a href="/termos" className="hover:text-white transition-colors">
              Termos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
