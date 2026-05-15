# Site Dr. Ian Passos — Otorrinolaringologista

## Estrutura do repositório

Este repositório contém:
- **`/app`** — Projeto Next.js 15 (App Router) com o site
- **`/_assets-fonte`** — Ativos originais do marketeiro (NÃO MODIFICAR, apenas consultar)
  - `tipografia/` — Fontes originais Seravek e Rethink Sans
  - `cores/` — Paletas e escalas de cores (JPGs)
  - `briefing/` — Briefing do marketeiro
  - `copy/` — Textos finalizados
  - `fotos-originais/` — Fotos do Dr. Ian em alta resolução
  - `identidade/` — Logos em diferentes versões

## Contexto do projeto

Site institucional one-page para o **Dr. Ian Passos Silva**, médico otorrinolaringologista em Recife/PE. Projeto pessoal, ajudando um amigo médico.

### Dados oficiais do médico
- **Nome**: Dr. Ian Passos Silva
- **CRM-PE 28737** — MÉDICO
- **Otorrinolaringologista** — RQE 15742
- **Formação**: Medicina UFPE (2019), Residência Otorrino IMIP (2024), Rhinology Minifellowship Miami (2024)
- **Cargo adicional**: Oficial Médico do Exército Brasileiro
- **Equipe**: Membro Pernambuco Otorrinos
- **Locais de atendimento**:
  - PE Otorrinos — Boa Viagem (Av. Conselheiro Aguiar)
  - HOPE (Hospital de Olhos de Pernambuco) — Ilha do Leite
  - Hospital Jayme da Fonte — Graças
  - Telemedicina
- **Convênios**: Bradesco, SulAmérica, Amil, Allianz e outros

## Stack tecnológica

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Estilização**: Tailwind CSS v4 + shadcn/ui (style New York, Radix)
- **Hospedagem**: Vercel
- **Formulários**: Resend (transactional email)
- **Analytics**: Plausible (privacy-first)
- **Fontes**: Seravek (display) + Rethink Sans (body), em `/app/public/fonts/`
- **Ícones**: lucide-react (stroke 1.5, currentColor)

## Design System

### Paleta oficial
- `--brand-primary: #043959` — Azul Profundo Vital — confiança, estabilidade (PRIMÁRIA)
- `--brand-neutral: #8298A8` — Cinza Neblina Suave — serenidade, acolhimento (neutro)
- `--brand-accent: #66ADD9` — Azul Renovação — vitalidade, renovação (accent)
- `--brand-light: #C9DFF2` — Azul Brisa Leve — empatia, transparência (background claro)
- `--brand-warm: #DDC9C3` — Bege Calmante — cuidado, conforto (toque humano)

### Regras de uso de cores
- Backgrounds escuros: `#043959` com texto branco ou `#C9DFF2`
- Backgrounds claros: branco ou `#C9DFF2` com texto `#043959`
- CTAs primários: `#66ADD9` ou `#043959` (alto contraste)
- Bege apenas como toque humano (depoimentos), NUNCA fundo de seção inteira
- PROIBIDO: verde, vermelho, amarelo, teal, roxo, laranja, gradientes coloridos

### Tipografia
- Display/Headlines: **Seravek** (Bold, ExtraBold)
- Body/UI: **Rethink Sans** (Regular, Medium, SemiBold)
- Mobile: H1 32px, H2 24px, body 16px, small 14px
- Desktop: H1 48-64px, H2 32-40px, body 18px, small 16px
- PROIBIDO: Inter, Space Grotesk, Poppins (default genérico de IA)

### Princípios visuais
- Espaçamento generoso (mín. 80px desktop / 48px mobile entre seções)
- Cantos arredondados sutis (8-16px máx, NUNCA pill-shape)
- Sombras leves e suaves (shadow-sm, shadow-md, NUNCA shadow-2xl)
- Mobile-first obrigatório
- Whitespace abundante (reduz ansiedade do paciente)
- EVITAR: layouts card-heavy de SaaS, neumorfismo, glassmorphism

### Ícones
- Biblioteca: lucide-react (Stroke 1.5, currentColor)
- Sem emojis, sem ícones filled, sem cores fixas

## Estrutura de seções (one-page)

1. **Header fixo** — Logo + menu âncoras + CRM/RQE + CTA "Agendar"
2. **Hero** — Headline + sub + foto do médico + CTA WhatsApp
3. **Sobre o Dr. Ian** — Foto + bio + credenciais + formação
4. **Áreas de atuação** — 3 cards (Nariz / Ouvido e Garganta / Procedimentos)
5. **Onde atendemos** — 4 locais (PE Otorrinos, HOPE, Hospital Jayme da Fonte, Telemedicina)
6. **Prova social** — Depoimentos sóbrios (54+ avaliações Doctoralia)
7. **CTA final** — Agendar via WhatsApp / Ligar
8. **Footer profundo** — CRM/RQE (obrigatório CFM), redes, política de privacidade

## Compliance regulatório

### Resolução CFM nº 2.336/2023 (OBRIGATÓRIO)
- CRM-PE 28737, palavra "MÉDICO", "Otorrinolaringologista" e RQE 15742 visíveis em **header e footer**
- PROIBIDO: promessas de cura, linguagem superlativa, resultados garantidos
- Depoimentos: sóbrios, sem adjetivos exagerados
- Sem imagens de pacientes sem autorização documentada

### LGPD
- Política de privacidade obrigatória
- Banner de cookies com opt-in granular
- Formulário de contato com base legal explícita

### Acessibilidade WCAG 2.2
- Contraste mínimo 4.5:1
- Áreas de toque ≥ 44x44px em mobile
- Navegação 100% por teclado
- HTML semântico (h1 único, hierarquia correta)
- Alt text descritivo em imagens informativas

## Tom e voz

- Profissional, mas acolhedor
- Linguagem em segunda pessoa ("Você vai ser atendido por...")
- Sem jargão médico desnecessário
- Empático, reconhece o estado emocional do paciente
- Sóbrio, sem sensacionalismo

## Inspirações

- Estética: dracamilamarinho.netlify.app (clean, fluida, conversão)
- Hierarquia: Cleveland Clinic, One Medical

## Comandos úteis

```bash
# Desenvolver localmente
cd app && npm run dev

# Build de produção
cd app && npm run build

# Deploy Vercel (após linkar)
vercel --prod
```

## Workflow de desenvolvimento

1. Trabalhe sempre dentro de `/app`
2. Consulte `_assets-fonte/` quando precisar de ativos originais
3. Otimize imagens antes de colocar em `app/public/images`
4. Commits frequentes com mensagens descritivas
5. Uma seção por vez, testando no browser antes de avançar