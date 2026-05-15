import Image from "next/image";

const FOOTER_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#areas", label: "Áreas" },
  { href: "#localizacao", label: "Localização" },
  { href: "/privacidade", label: "Política de Privacidade" },
];

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

export function Footer() {
  return (
    <footer className="bg-[#043959] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 md:gap-16 md:items-start">
          <div className="flex flex-col gap-4 max-w-xs">
            <Image
              src="/images/logo-dr-ian-passos.jpg"
              alt="Dr. Ian Passos — Otorrinolaringologista"
              width={400}
              height={400}
              className="w-32 md:w-40 h-auto"
            />
            <p className="cfm-fineprint text-[#C9DFF2]">
              CRM-PE 28737 — Médico | Otorrinolaringologista — RQE 15742
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Rodapé">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#"
            aria-label="Instagram do Dr. Ian Passos"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors w-fit"
          >
            <InstagramIcon className="h-5 w-5" />
            <span>Instagram</span>
          </a>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10">
          <p className="text-xs text-white/60 text-center md:text-left">
            © 2026 Dr. Ian Passos Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
