import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Dr. Ian Passos | Otorrinolaringologista em Recife",
  description:
    "Médico Otorrinolaringologista em Recife. Atendimento em Boa Viagem, Ilha do Leite e Graças. Agende sua consulta.",
};

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Ian Passos Silva",
  jobTitle: "Médico Otorrinolaringologista",
  medicalSpecialty: "Otolaryngology",
  identifier: [
    { "@type": "PropertyValue", propertyID: "CRM-PE", value: "28737" },
    { "@type": "PropertyValue", propertyID: "RQE", value: "15742" },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "Universidade Federal de Pernambuco (UFPE)",
    },
    {
      "@type": "Hospital",
      name: "Instituto de Medicina Integral Prof. Fernando Figueira (IMIP)",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Recife",
    containedInPlace: { "@type": "State", name: "Pernambuco" },
  },
  workLocation: [
    {
      "@type": "MedicalClinic",
      name: "PE Otorrinos",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Conselheiro Aguiar",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
    },
    {
      "@type": "Hospital",
      name: "HOPE — Hospital de Olhos de Pernambuco",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
    },
    {
      "@type": "Hospital",
      name: "Hospital Jayme da Fonte",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Recife",
        addressRegion: "PE",
        addressCountry: "BR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(physicianJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
