# UI Kit · Marketing Site

One-page recreation do site institucional do Dr. Ian Passos.

- `index.html` — entry point. Carrega `colors_and_type.css` da raiz e os componentes React abaixo.
- `Header.jsx` — header sticky com faixa CFM, logo, nav e CTA.
- `Hero.jsx` — hero one-page com headline oficial + WhatsApp CTA + foto do Dr. Ian.
- `About.jsx` — “Quem te atende” — bio, formação, credenciais.
- `Areas.jsx` — Áreas de atuação (Nariz, Ouvido, Garganta, Procedimentos).
- `Locations.jsx` — Quatro unidades (Boa Viagem, Ilha do Leite, Graças, Telemedicina) + convênios.
- `Testimonials.jsx` — Depoimentos sóbrios sobre pontualidade, atenção e didática.
- `Contact.jsx` — Bloco final de agendamento com CTA WhatsApp grande.
- `Footer.jsx` — Footer azul profundo com identificação CFM.
- `WhatsAppFAB.jsx` — Botão flutuante persistente.

Tudo é uma recreação **fiel ao briefing** (`site-dr-ian-passos/informacoes.md`) e à
referência visual `dracamilamarinho.netlify.app`, dentro das regras do design system.

## Não é

- Não é um SPA. É um one-page com navegação por âncoras.
- Não é “produção” — funcionalidades de form / envio são mock.
- Telefones e WhatsApp são placeholders. Confirmar números reais antes do publish.

## Copy

Toda copy segue **Content Fundamentals** do `README.md` da raiz. Pronome “você”,
sentence case, sem superlativos, identificação CFM no header e footer.
