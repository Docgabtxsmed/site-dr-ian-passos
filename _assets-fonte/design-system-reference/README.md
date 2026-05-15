# Dr. Ian Passos — Design System

A brand & design system for **Dr. Ian Passos Silva**, médico otorrinolaringologista
em Recife / PE.

> **Dr. Ian Passos Silva — CRM-PE 28737 — Médico**
> **Otorrinolaringologista — RQE 15742**

This system exists to keep every patient-facing surface — website, slides, social,
print, telemedicina — visually consistent, medically sober, and emotionally calm.

---

## Quem é Dr. Ian Passos

- **Formação:** Medicina UFPE (2019), Residência em Otorrinolaringologia no IMIP
  (2024), Rhinology Minifellowship em Miami (2024).
- **Atuação:** Oficial Médico do Exército Brasileiro. Membro da equipe Pernambuco
  Otorrinos. Especialidade em rinologia (nariz e seios da face), além de cuidado
  amplo em ouvido e garganta para adultos e crianças.
- **Locais de atendimento:**
  - **PE Otorrinos** — Boa Viagem, Recife
  - **HOPE (Hospital de Olhos de Pernambuco)** — Ilha do Leite, Recife
  - **Hospital Jayme da Fonte** — Graças, Recife
  - **Telemedicina** — todo o Brasil
- **Convênios:** Bradesco, SulAmérica, Amil, Allianz, entre outros.
- **Referência clínica:** pontualidade, escuta atenta, didática nas explicações
  (54+ avaliações positivas no Doctoralia).

A marca precisa transmitir uma postura **médica, séria, profissional e ao mesmo
tempo humana, acolhedora, sem ansiedade**. Diferente da estética “SaaS clean” ou
de clínicas estéticas — esta é uma marca de consultório que respeita o paciente.

---

## Sources / Materiais Originais

| Origem | Localização |
|---|---|
| Identidade visual (Marca) | Pasta `site-dr-ian-passos/identidade/` no codebase do cliente |
| Briefing + dados | `site-dr-ian-passos/informacoes.md` |
| Fotos profissionais | `site-dr-ian-passos/fotos/` (5 fotos) |
| Tipografia oficial (TTFs) | `site-dr-ian-passos/6 - Tipografia/` |
| Apresentação de marca (PDF) | `site-dr-ian-passos/Dr. Ian Passos - Apresentação de Identidade Visual.pdf` |
| Referência visual | https://dracamilamarinho.netlify.app (estética clean e fluida, foco em conversão) |

Não havia codebase web pronto — apenas guidelines de marca e briefing.
O UI Kit foi construído **de zero, fiel ao briefing oficial.**

---

## Index — o que tem aqui

| Pasta / arquivo | O que é |
|---|---|
| `README.md` | Este arquivo. Visão geral + fundamentos + ask iterativo. |
| `SKILL.md` | Cabeçalho de skill para uso em Claude Code. |
| `colors_and_type.css` | Tokens CSS — cores oficiais, fontes, escalas, espaçamento, sombras, radius. |
| `fonts/` | TTFs oficiais (Seravek + Rethink Sans). |
| `assets/` | Logos (`.png` transparente + JPG original), background pattern, paleta oficial, fotos do Dr. Ian. |
| `preview/` | HTML cards exibidos na aba Design System. |
| `ui_kits/marketing-site/` | UI Kit do site one-page do consultório (componentes React + index.html clicável). |

---

## CONTENT FUNDAMENTALS

**Idioma:** Português do Brasil. Sem anglicismos desnecessários.

**Pronome de tratamento:** Sempre **você** (segunda pessoa direta). Nunca “senhor/senhora”,
nunca “o paciente”. A marca fala **diretamente com a pessoa**, sem distância.

- ✅ “Você vai ser atendido por um médico que escuta antes de prescrever.”
- ❌ “O paciente será atendido com excelência por nossa equipe.”

**Casing:**
- **Sentence case** em títulos e botões. Nada de Title Case nem ALL CAPS.
- **ALL CAPS** apenas em eyebrows pequenos (12px) e nas siglas regulatórias
  (`CRM-PE 28737`, `RQE 15742`, nomes de bairro como `BOA VIAGEM`).

**Tom de voz:**
- Médico, profissional, **acolhedor**.
- **Sóbrio.** Sem sensacionalismo, sem superlativos, sem promessas.
- **Direto e tranquilo.** Frases curtas, parágrafos curtos.
- Reduz a ansiedade do paciente — não cria urgência artificial.

**Regulamentação CFM — obrigatório:**
- O nome completo + CRM + RQE **deve aparecer no header e no footer** de toda página.
- Proibido: “o melhor”, “o único”, “100%”, “garantido”, “sem dor”, “cura definitiva”.
- Depoimentos só elogios sóbrios sobre experiência (pontualidade, atenção, didática).
  Nada de “mudou minha vida” ou foto antes/depois.
- Não usar termos como “especialista número 1”, “referência absoluta”, etc.

**Vocabulário recomendado:**
| Use | Em vez de |
|---|---|
| Cuidado especializado | Tratamento de ponta |
| Atendimento humano e resolutivo | Excelência em atendimento |
| Você vai entender o que tem | Diagnóstico preciso |
| Agendar consulta | Reservar agora / Garantir vaga |
| Estamos aqui para te ouvir | Estamos prontos para atender |

**Sem emoji.** A marca é médica, não casual. Em raríssimas exceções, ícones de
contato (whatsapp, telefone) viram **SVG**, nunca emoji.

**Exemplos canônicos de copy:**
- Hero: “Cuidado especializado para o seu nariz, ouvido e garganta.”
- Subtítulo: “Atendimento humano e resolutivo em Recife, com foco na sua qualidade de vida.”
- CTA: “Agendar consulta via WhatsApp.”
- Sobre: “Sou médico otorrinolaringologista. Atendo adultos e crianças em Recife.”
- Sessão humana (depoimento): “Foi a primeira vez que entendi o que eu tinha.”

---

## VISUAL FOUNDATIONS

### Paleta

Cinco cores **oficiais** (definidas com nome, propósito emocional, HEX, CMYK, Pantone):

| Cor | HEX | Uso | Emoção |
|---|---|---|---|
| **Azul Profundo Vital** | `#043959` | Texto principal, fundos escuros, CTAs primários | Confiança, estabilidade |
| **Cinza Neblina Suave** | `#8298A8` | Texto secundário, divisores, ícones inativos | Serenidade, acolhimento |
| **Azul Renovação** | `#66ADD9` | CTA alternativo, links, accent em fundos escuros | Vitalidade, renovação |
| **Azul Brisa Leve** | `#C9DFF2` | Background claro, sections empáticas | Empatia, transparência |
| **Bege Calmante** | `#DDC9C3` | **Toque humano** — sobre, depoimentos, cuidado | Cuidado, conforto |

**Regra mãe**: o sistema é **frio com toques quentes**. O bege calmante existe
para humanizar as seções onde o paciente compartilha algo (sobre, depoimentos,
contato). Nunca para CTAs primários.

**Proibido na marca:** verde, vermelho, amarelo, teal, roxo, laranja. Sem
gradientes coloridos. Sem cores fora da paleta — nem para “erro” ou “sucesso”
em formulários (usamos azul profundo para tudo informativo).

### Tipografia

- **Display / Headlines:** Seravek (Bold 700, ExtraBold 800).
  Personalidade humanista, ombros suaves, ótima leitura em corpo grande.
- **Corpo / UI:** Rethink Sans (Regular 400, Medium 500, SemiBold 600).
  Sans grotesca, alta legibilidade em corpo pequeno.

**Mobile:** H1 32px / H2 24px / body 16px / small 14px.
**Desktop (≥ 880px):** H1 56–64px / H2 36–40px / body 18px / small 16px.

`letter-spacing: -0.02em` em headlines, `0` em corpo, `0.14em` em eyebrows uppercase.
`line-height: 1.1` em headlines, `1.7` em parágrafos (respiração).

**Nunca usar:** Inter, Roboto, Arial, Poppins, Space Grotesk, Montserrat, Open Sans.
Essas fontes são “default IA” e descaracterizam a marca.

### Espaçamento

- Mobile: mínimo **48px** entre seções verticais.
- Desktop: mínimo **80px** entre seções verticais.
- Generoso por padrão. Quando em dúvida, dobre o espaço.
- Escala em múltiplos de 4: 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128.

### Backgrounds

- **Principal:** branco puro ou Azul Brisa Leve (`#C9DFF2`).
- **Heros / footer / sections fortes:** Azul Profundo Vital (`#043959`).
- **Sections humanas:** Bege Calmante (`#DDC9C3`).
- Existe um **pattern oficial** (`assets/marca-background-3.jpg`) — formas
  geométricas grandes (arcos) em tom claro sobre azul brisa. Usar com **opacidade
  reduzida** (≤ 18%) em hero / behind-key-content como “fundo de marca”, nunca em
  loop nem repetido. **Não inventar outros patterns.**
- **Sem gradientes coloridos.** Existem gradientes oficiais apresentados na guia
  de marca (mesma matiz, do escuro ao claro) — só usar em fundos grandes, nunca
  em CTAs nem em cards.

### Imagery

- Fotos do Dr. Ian (`assets/foto-ian-*.jpg`): **fundo neutro creme/bege**, luz
  quente lateral, postura aberta (mãos no bolso, sorriso natural). Reforça a
  paleta — sempre OK enquadrar com bastante respiro.
- Quando faltar foto: **placeholder** com background `#C9DFF2` + logo mark de
  20% opacidade ao centro. Nunca stock genérico de “médico genérico”.
- Sem grain, sem filtros, sem b&w. Cor natural e quente.

### Animação

- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (Material standard) ou
  `ease-out` simples. Sem bounce, sem elastic.
- **Duração:** 200ms para hover, 350ms para entrada em viewport, 500ms para
  transições de seção. Nada acima de 600ms.
- Fade + sutil translate-y(12px) na entrada. **Sem confetti, sem parallax, sem
  scroll-jacking.**
- Scroll suave entre seções (one-page com âncoras): `scroll-behavior: smooth`.

### Hover & Press

- **Hover em botões primários:** escurece 6–8% (de `#043959` para `#06283D`).
- **Hover em botões secundários (Azul Renovação):** escurece para `#4F9AC7`.
- **Hover em links de texto:** sublinhado aparece, cor permanece.
- **Hover em cards:** sombra sobe de `shadow-sm` para `shadow-md`, sem
  translate vertical. Sem efeito de “levantar”.
- **Press:** escurece mais um passo + `scale(0.98)`. Bem sutil.

### Borders

- Sutis. `rgba(4, 57, 89, 0.10)` no padrão, `rgba(4, 57, 89, 0.20)` no destaque.
- **Em fundos escuros:** `rgba(255, 255, 255, 0.16)`.
- Border de 1px. Nunca 2px+ a não ser em focus ring.
- Cards podem ser **só sombra** (sem border) sobre branco, ou **só border**
  (sem sombra) sobre azul brisa. Não os dois juntos.

### Sombras

- **Apenas sombras leves.** `shadow-sm` (`0 1px 3px rgba(4,57,89,0.08)`) é o
  padrão. `shadow-md` para destaque. **Nunca** `shadow-xl` ou `shadow-2xl`.
- Sombras com matiz de Azul Profundo, **nunca preto puro**.

### Radii

- **8–12–16px**, nunca acima. Cards: 12px. Botões: 8px. Inputs: 8px.
- **Nunca pill-shaped** (`border-radius: 9999px`). Avatares e ícones-em-círculo
  são as únicas formas totalmente redondas.

### Transparency / Blur

- **Não** usamos glassmorphism, backdrop-filter, vidros foscos. A marca é sóbria.
- Transparência só em sobreposições funcionais (overlay de modal: `rgba(4,57,89,0.55)`).

### Layout

- **Mobile-first obrigatório.** Toda decisão começa em 360px e expande.
- **Container max-width:** 1200px. Para texto longo: 880px (`--container-narrow`).
- **One-page** com âncoras suaves — não SPA, não multi-page no marketing.
- **Header fixo** com info regulatória sempre visível.
- **CTA WhatsApp flutuante** persistente no canto inferior direito (≥ mobile),
  nunca cobrindo conteúdo, sempre com botão real (sem balão animado).
- **Footer profundo** (`#043959`), com nome completo + CRM + RQE em destaque.

### Cards

- Background: branco. Border-radius: 12px. Padding interno: 24px (mobile) / 32px (desktop).
- Sombra: `--shadow-sm`. Hover: `--shadow-md`. Sem border.
- Em fundos `#C9DFF2`: sem sombra, com border de 1px `rgba(4,57,89,0.08)`.
- **Sem accent stripe colorida no topo ou na lateral** — esse é um truque genérico
  de SaaS. Hierarquia se faz com tipografia e espaçamento.

### Layouts a evitar

- Card-grid genérico “3 colunas com ícone + título + descrição” sem razão de ser.
- Hero com gradiente vibrante.
- Botões pill totalmente redondos.
- Tags coloridas tipo Notion.
- “Big stat” gigante centralizado (133%! 45min! 92%!) — não cabe na voz médica.
- Glassmorphism, neumorfismo, neon, brutalism.

---

## ICONOGRAPHY

Não havia um icon set proprietário no material entregue. A decisão para o sistema:

- **Biblioteca padrão: [Lucide](https://lucide.dev)** (`stroke: 1.5`, `currentColor`).
  Lucide é a opção mais sóbria, médica e neutra entre as bibliotecas open-source —
  encaixa no tom “profissional acolhedor” sem virar cute (Tabler) nem corporate
  pesado (Material).
- **Carregamento:** via CDN ESM no UI Kit:
  ```html
  <script src="https://unpkg.com/lucide@latest"></script>
  <i data-lucide="phone"></i>
  ```
- **Cor:** sempre `currentColor`. Em fundos brancos, herdam `--fg`
  (`#043959`). Em fundos escuros, herdam `#FFFFFF`.
- **Stroke:** 1.5 (padrão). Nunca filled, nunca duotone.
- **Tamanhos:** 16, 20, 24, 32. Tudo via `width`/`height` em px ou em.
- **Sem emoji.** Em nenhuma circunstância — nem ✅, nem 📞, nem ⭐.
- **Logo mark** (`assets/logo-mark.png`) tem uso restrito: header, footer,
  splash, favicon. Não vira ícone decorativo dentro de cards.

⚠️ **Substituição flag:** Lucide é uma escolha do sistema, não um padrão do
cliente. Se o cliente quiser um icon set específico (Material Symbols, custom,
etc.) é trivial trocar — a regra de stroke 1.5 em currentColor permanece.

### Assets visuais inclusos

- `assets/logo-on-light.png` — logo completo (mark + wordmark) sobre fundo claro.
- `assets/logo-on-dark.png` — logo completo sobre fundo escuro / azul profundo.
- `assets/logo-mark.png` — apenas o monograma (CP).
- `assets/logo-mark-on-dark.png` — monograma para fundos escuros.
- `assets/marca-logo-vertical.jpg` — versão oficial original (JPG, fundo azul).
- `assets/marca-paleta-cores.jpg` — guia oficial de paleta.
- `assets/marca-escalas-cores.jpg` — escalas tonais (claro → escuro).
- `assets/marca-degrades-usos-cores.jpg` — gradientes + combinações aprovadas.
- `assets/marca-background-3.jpg` — background pattern oficial (formas geométricas).
- `assets/foto-ian-*.jpg` — 5 fotos profissionais do Dr. Ian.

---

## Como usar

```html
<link rel="stylesheet" href="./colors_and_type.css">
<body class="ip">
  <h1>Cuidado especializado para o seu nariz, ouvido e garganta.</h1>
  <p>Atendimento humano e resolutivo em Recife.</p>
</body>
```

Para um exemplo completo, veja `ui_kits/marketing-site/index.html`.

---

## ⚠️ Caveats — flags ao cliente

1. **Logo SVG não foi entregue.** Eu trabalhei a partir do JPG e gerei PNGs
   transparentes (`logo-on-light.png`, `logo-on-dark.png`, `logo-mark.png`).
   Se você tem o vetor original (`.ai` / `.svg`), me envie — vai ficar perfeito
   em qualquer escala.
2. **Iconografia: Lucide foi escolhida por mim**, não pelo cliente. Confirmar.
3. **Sem codebase web pronto** — o UI Kit é uma proposta original baseada no
   briefing e na referência visual `dracamilamarinho.netlify.app`. Não é uma
   recriação, é uma primeira versão.
4. Algumas seções do briefing (depoimentos exatos, textos de "Áreas de Atuação"
   com mais detalhes) usam copy de exemplo respeitando o tom de voz documentado.
