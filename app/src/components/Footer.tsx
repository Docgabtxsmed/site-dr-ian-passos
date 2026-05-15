import Image from "next/image";
import { ClockIcon, MapPinIcon, PhoneIcon } from "lucide-react";
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

const TEL_HREF = "tel:+5581989399672";
const INSTAGRAM_HREF = "#";
const INSTAGRAM_HANDLE = "@drianpassos";

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
  "text-[11px] tracking-[0.08em] uppercase font-semibold text-[#66ADD9] mb-1";

export function Footer() {
  return (
    <footer className="bg-[#02233A] text-white border-t border-white/10 overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 pb-24 md:pb-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-12">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4 max-w-[280px]">
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
            <p className="text-sm text-[#C9DFF2] leading-relaxed max-w-xs">
              Cuidado especializado para nariz, ouvido e garganta em Recife.
            </p>
          </div>

          <nav className="flex flex-col gap-4" aria-label="Rodapé">
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

          <div className="flex flex-col gap-4">
            <div className={labelClass}>Atendimento</div>
            <a
              href={TEL_HREF}
              className="flex items-center gap-2 text-sm text-[#C9DFF2] hover:text-white transition-colors w-fit"
            >
              <PhoneIcon className="h-4 w-4" strokeWidth={1.5} />
              <span>(81) 98939-9672</span>
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#C9DFF2] hover:text-white transition-colors w-fit"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>WhatsApp</span>
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
              className="group mt-2 inline-flex items-center gap-2 text-sm text-[#C9DFF2] hover:text-white transition-colors w-fit"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/10 transition-colors group-hover:bg-white/15">
                <InstagramIcon className="h-[18px] w-[18px]" />
              </span>
              <span>{INSTAGRAM_HANDLE}</span>
            </a>
          </div>

          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4 pt-8 border-t border-white/10 lg:pt-0 lg:border-t-0">
            <div className={labelClass}>Identificação CFM</div>
            <div className="text-sm font-semibold text-white leading-snug">
              Dr. Ian Passos — Médico Otorrinolaringologista
            </div>
            <div className="text-[13px] text-[#C9DFF2] leading-relaxed">
              CRM-PE 28737 | RQE 15742
            </div>
            <p className="text-xs text-white/60 leading-relaxed mt-1">
              Informações apresentadas têm caráter educativo. Não substituem
              consulta médica presencial.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col items-center text-center gap-3 sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-white/50">
            © 2026 Dr. Ian Passos Silva. Todos os direitos reservados.
          </p>
          <div className="flex gap-5 text-xs text-white/50">
            <a href="/privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-white transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
