import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { AreasAtuacao } from "@/components/AreasAtuacao";
import { OndeAtendemos } from "@/components/OndeAtendemos";
import { Depoimentos } from "@/components/Depoimentos";
import { CTAFinal } from "@/components/CTAFinal";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <AreasAtuacao />
      <OndeAtendemos />
      <Depoimentos />
      <CTAFinal />
    </main>
  );
}
