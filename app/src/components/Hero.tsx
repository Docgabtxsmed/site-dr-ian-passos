import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[#043959] overflow-hidden min-h-[680px] md:min-h-[720px] pt-32 md:pt-40 pb-16 md:pb-24"
    >
      <div className="absolute inset-0 md:left-auto md:right-0 md:w-[55%]">
        <Image
          src="/images/dr-ian-passos-hero.png"
          alt="Dr. Ian Passos, otorrinolaringologista"
          fill
          sizes="(max-width: 768px) 100vw, 55vw"
          className="object-contain object-bottom md:object-[center_bottom]"
          priority
        />
      </div>

      <div className="absolute inset-0 md:hidden bg-gradient-to-b from-[#043959] from-0% via-[#043959]/85 via-35% to-transparent to-100%" />

      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#043959] from-0% via-[#043959]/90 via-40% to-transparent to-100%" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl flex flex-col gap-6 md:gap-7">
          <span className="text-sm font-medium uppercase tracking-wider text-[#C9DFF2]">
            Otorrinolaringologista em Recife
          </span>

          <h1 className="text-white">
            Cuidado especializado para o seu nariz, ouvido e garganta.
          </h1>

          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Atendimento humano e resolutivo em Recife, com foco na sua
            qualidade de vida.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
            <a
              href="https://wa.me/#"
              className="inline-flex items-center justify-center gap-2 bg-[#66ADD9] hover:bg-[#4A95C3] text-white font-medium text-base px-6 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Agendar Consulta via WhatsApp</span>
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#043959] font-medium text-base px-6 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
            >
              Conheça o Dr. Ian
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
