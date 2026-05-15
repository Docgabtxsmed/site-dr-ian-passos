import { PhoneIcon } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function CTAFinal() {
  return (
    <section
      id="contato"
      className="bg-[#043959] text-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-white">Agende sua consulta</h2>
          <p className="text-lg text-[#C9DFF2] mt-4">
            Atendimento humano e especializado em Recife
          </p>

          <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/#"
              className="inline-flex items-center justify-center gap-2 bg-[#66ADD9] hover:bg-[#4A95C3] text-white font-medium text-base px-8 py-3 rounded-lg transition-colors w-full sm:w-auto sm:min-w-[200px]"
            >
              <WhatsAppIcon className="h-5 w-5" />
              <span>Agendar via WhatsApp</span>
            </a>
            <a
              href="tel:#"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-medium text-base px-8 py-3 rounded-lg transition-colors w-full sm:w-auto sm:min-w-[200px]"
            >
              <PhoneIcon className="h-5 w-5" strokeWidth={1.5} />
              <span>Ligar agora</span>
            </a>
          </div>

          <p className="mt-6 text-sm text-white/60">
            Seg–Sex: 8h–18h | Atendimento com hora marcada
          </p>
        </div>
      </div>
    </section>
  );
}
