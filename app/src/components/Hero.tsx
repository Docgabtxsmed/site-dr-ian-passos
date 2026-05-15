import Image from "next/image";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function Hero() {
  return (
    <section
      id="top"
      className="relative bg-gradient-to-b from-white via-white to-[#C9DFF2]/40 pt-32 md:pt-40 pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-center">
          <div className="flex flex-col gap-6 md:gap-7">
            <span className="text-sm font-medium uppercase tracking-wider text-[#66ADD9]">
              Otorrinolaringologista em Recife
            </span>

            <h1 className="text-[#043959]">
              Cuidado especializado para o seu nariz, ouvido e garganta.
            </h1>

            <p className="text-lg md:text-xl text-[#043959]/80 max-w-xl leading-relaxed">
              Atendimento humano e resolutivo em Recife, com foco na sua qualidade de vida.
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
                className="inline-flex items-center justify-center border-2 border-[#043959] text-[#043959] hover:bg-[#043959] hover:text-white font-medium text-base px-6 py-3.5 rounded-lg transition-colors w-full sm:w-auto"
              >
                Conheça o Dr. Ian
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] md:aspect-auto md:h-[560px] rounded-2xl overflow-hidden bg-[#C9DFF2]">
            <Image
              src="/images/dr-ian-passos-hero.jpg"
              alt="Dr. Ian Passos, médico otorrinolaringologista, de jaleco branco"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
