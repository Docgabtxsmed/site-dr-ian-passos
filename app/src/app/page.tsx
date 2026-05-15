import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { AreasAtuacao } from "@/components/AreasAtuacao";
import { OndeAtendemos } from "@/components/OndeAtendemos";

export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <AreasAtuacao />
      <OndeAtendemos />
    </main>
  );
}
