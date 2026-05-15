# Pipeline de Trabalho — Site Dr. Ian Passos

> **Projeto**: Site institucional one-page para médico otorrinolaringologista
> **Developer**: Gabriel Tavares (aprendendo dev web)
> **Assistente Claude.ai**: Validação, prompts, revisão de código, compliance
> **Claude Code (VS Code)**: Geração e edição de código
> **Data de início**: 2026-05-14
> **Status**: Em andamento

---

## Visão geral do workflow

```
Gabriel pede prompt ao Claude.ai (chat)
        ↓
Claude.ai prepara o prompt otimizado
        ↓
Gabriel cola o prompt no Claude Code (VS Code)
        ↓
Claude Code gera o código
        ↓
Gabriel testa no browser (localhost:3000)
        ↓
Se OK → commit + próxima etapa
Se não → Gabriel reporta ao Claude.ai → novo prompt de ajuste
```

---

## Etapas do projeto

### FASE 0 — Setup ✅ CONCLUÍDA

| # | Tarefa | Status |
|---|--------|--------|
| 0.1 | Organizar pasta de ativos (`_assets-fonte/`) | ✅ |
| 0.2 | Criar projeto Next.js 16 em `/app` | ✅ |
| 0.3 | Instalar shadcn/ui (Radix, Nova) | ✅ |
| 0.4 | Copiar fontes para `public/fonts/` | ✅ |
| 0.5 | Configurar `globals.css` com paleta + fontes | ✅ |
| 0.6 | Instalar componentes shadcn (button, card, sheet, navigation-menu, separator, badge) | ✅ |
| 0.7 | Testar servidor (`npm run dev`) | ✅ |
| 0.8 | Criar `CLAUDE.md` com contexto completo | ✅ |
| 0.9 | Alinhar Claude Code (prompt de entendimento) | ✅ |
| 0.10 | Criar repositório GitHub | ⬜ Pendente |

---

### FASE 1 — Fundação (Layout base)

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 1.1 | `layout.tsx` | Remover Geist, meta tags SEO, schema.org Physician, importar globals.css | 🔄 Em andamento |
| 1.2 | `page.tsx` placeholder | Texto "em construção" para validar fontes Seravek/Rethink Sans | 🔄 Em andamento |
| 1.3 | Testar no browser | Confirmar fontes aplicadas, sem erros no console | ⬜ |
| 1.4 | Commit | `feat: layout base com SEO e schema.org` | ⬜ |

**Validações obrigatórias:**
- [ ] Fonte Seravek aparece nos headings (DevTools > Computed > font-family)
- [ ] Fonte Rethink Sans aparece no body
- [ ] Schema.org Physician renderizado no `<head>` (View Source)
- [ ] Title tag: "Dr. Ian Passos | Otorrinolaringologista em Recife"
- [ ] Sem erros no console do browser

---

### FASE 2 — Header + Footer (estrutura que envolve todo o site)

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 2.1 | `<Header />` | Logo + menu âncora + faixa CFM (CRM/RQE) + CTA "Agendar" + hamburger mobile | ⬜ |
| 2.2 | `<Footer />` | Logo + CRM/RQE compliance + links + redes sociais + copyright | ⬜ |
| 2.3 | Integrar em `layout.tsx` | Header e Footer envolvendo {children} | ⬜ |
| 2.4 | Testar mobile | Menu hamburger (Sheet), faixa CFM legível, CTA visível | ⬜ |
| 2.5 | Testar desktop | Menu horizontal, header fixo com backdrop-blur no scroll | ⬜ |
| 2.6 | Commit | `feat: header e footer com compliance CFM` | ⬜ |

**Compliance CFM obrigatório:**
- [ ] Header: CRM-PE 28737 — MÉDICO visível
- [ ] Header: Otorrinolaringologista — RQE 15742 visível
- [ ] Footer: mesmas informações repetidas
- [ ] Sem linguagem superlativa em nenhum texto

**Acessibilidade:**
- [ ] Contraste 4.5:1 na faixa CFM
- [ ] Menu navegável por teclado (Tab + Enter)
- [ ] Botão hamburger com aria-label
- [ ] Áreas de toque ≥ 44x44px no mobile

---

### FASE 3 — Hero Section

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 3.1 | `<Hero />` | Headline + sub-headline + CTA WhatsApp + espaço para foto | ⬜ |
| 3.2 | Integrar foto do Dr. Ian | Selecionar melhor foto, otimizar, posicionar | ⬜ |
| 3.3 | CTA WhatsApp funcional | Link `wa.me/55XXXXXXXXXXX` com ícone | ⬜ |
| 3.4 | Teste da regra dos 3 segundos | "Quem, o quê, próximo passo" visíveis sem scroll | ⬜ |
| 3.5 | Teste mobile | Layout empilhado (texto → foto → CTA) | ⬜ |
| 3.6 | Commit | `feat: hero section com CTA WhatsApp` | ⬜ |

**Copy definida:**
- Headline: "Cuidado especializado para o seu nariz, ouvido e garganta."
- Sub: "Atendimento humano e resolutivo em Recife, com foco na sua qualidade de vida."
- CTA: "Agendar Consulta via WhatsApp"

---

### FASE 4 — Sobre o Dr. Ian

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 4.1 | `<Sobre />` | Foto + bio + credenciais + formação (timeline ou lista) | ⬜ |
| 4.2 | E-E-A-T otimizado | Formação detalhada, filiações, fellowship internacional | ⬜ |
| 4.3 | Teste de conteúdo CFM | Sem promessas, sem superlativos | ⬜ |
| 4.4 | Commit | `feat: seção sobre o médico com E-E-A-T` | ⬜ |

**Conteúdo-chave:**
- Medicina UFPE (2019)
- Residência Otorrino IMIP (2024)
- Rhinology Minifellowship Miami (2024)
- Oficial Médico do Exército Brasileiro
- Membro Pernambuco Otorrinos

---

### FASE 5 — Áreas de Atuação

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 5.1 | `<AreasAtuacao />` | 3 cards com ícones Lucide | ⬜ |
| 5.2 | Card Nariz | Sinusite, Desvio de Septo, Rinite, Obstrução Nasal, Polipose | ⬜ |
| 5.3 | Card Ouvido e Garganta | Perda auditiva, Amigdalite, Ronco e Apneia | ⬜ |
| 5.4 | Card Procedimentos | Nasofibroscopia, Videolaringoscopia | ⬜ |
| 5.5 | Teste mobile | Cards empilhados, legíveis | ⬜ |
| 5.6 | Commit | `feat: seção áreas de atuação com cards` | ⬜ |

---

### FASE 6 — Onde Atendemos

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 6.1 | `<OndeAtendemos />` | 4 location cards | ⬜ |
| 6.2 | PE Otorrinos | Av. Conselheiro Aguiar, Boa Viagem + Google Maps link | ⬜ |
| 6.3 | HOPE | Rua Francisco Alves, Ilha do Leite | ⬜ |
| 6.4 | Hospital Jayme da Fonte | Graças | ⬜ |
| 6.5 | Telemedicina | "Consultas online para todo o Brasil" | ⬜ |
| 6.6 | Nota de convênios | Bradesco, SulAmérica, Amil, Allianz e outros | ⬜ |
| 6.7 | Commit | `feat: seção localização com 4 unidades` | ⬜ |

---

### FASE 7 — Prova Social (Depoimentos)

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 7.1 | `<Depoimentos />` | 3 cards de depoimentos sóbrios | ⬜ |
| 7.2 | Conteúdo | Destacar pontualidade, atenção, didática | ⬜ |
| 7.3 | Validação CFM | Sem adjetivos exagerados, sem promessas | ⬜ |
| 7.4 | Background | Usar #DDC9C3 (bege) como toque humano NESTA seção | ⬜ |
| 7.5 | Selo Doctoralia | "54+ avaliações positivas" (discreto) | ⬜ |
| 7.6 | Commit | `feat: seção depoimentos com prova social` | ⬜ |

---

### FASE 8 — CTA Final + WhatsApp Flutuante

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 8.1 | `<CTAFinal />` | Headline + 2 botões (WhatsApp + Ligar) + fundo #043959 | ⬜ |
| 8.2 | `<WhatsAppFloat />` | Botão flutuante no canto inferior direito | ⬜ |
| 8.3 | Teste de conversão | CTAs clicáveis, links wa.me/ e tel: funcionais | ⬜ |
| 8.4 | Commit | `feat: CTA final e WhatsApp flutuante` | ⬜ |

---

### FASE 9 — Páginas auxiliares + Compliance

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 9.1 | Política de Privacidade | Página `/politica-de-privacidade` com texto LGPD | ⬜ |
| 9.2 | Banner de Cookies | Componente com opt-in granular | ⬜ |
| 9.3 | Commit | `feat: LGPD compliance (política + cookies)` | ⬜ |

---

### FASE 10 — Refinamento e Qualidade

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 10.1 | Animações de scroll | Fade-in suave nas seções (Intersection Observer) | ⬜ |
| 10.2 | Otimização de imagens | Converter JPG → WebP, lazy loading | ⬜ |
| 10.3 | Logo PNG transparente | Extrair do .ai (se possível) | ⬜ |
| 10.4 | Botão "voltar ao topo" | Aparece após scroll | ⬜ |
| 10.5 | Smooth scroll âncoras | Navegação header → seções | ⬜ |
| 10.6 | Commit | `feat: animações, otimização e polish` | ⬜ |

---

### FASE 11 — Testes finais

| # | Tarefa | Ferramenta | Status |
|---|--------|------------|--------|
| 11.1 | Acessibilidade | Lighthouse + WAVE | ⬜ |
| 11.2 | Performance | Lighthouse (meta: ≥90) | ⬜ |
| 11.3 | SEO | Lighthouse + View Source (schema, meta) | ⬜ |
| 11.4 | Mobile | iPhone SE (320px) + iPhone 15 Pro (430px) | ⬜ |
| 11.5 | Compliance CFM | Auditoria manual (CRM/RQE em todas as páginas) | ⬜ |
| 11.6 | Links | Todos os wa.me/, tel:, Google Maps funcionais | ⬜ |
| 11.7 | Cross-browser | Chrome, Safari, Firefox | ⬜ |
| 11.8 | Commit | `chore: testes finais validados` | ⬜ |

---

### FASE 12 — Deploy

| # | Tarefa | Descrição | Status |
|---|--------|-----------|--------|
| 12.1 | Criar repositório GitHub | Private repo `site-dr-ian-passos` | ⬜ |
| 12.2 | Push para GitHub | Todos os commits | ⬜ |
| 12.3 | Linkar Vercel | Import do repositório GitHub | ⬜ |
| 12.4 | Configurar domínio | `drianpassos.com.br` ou similar (Registro.br) | ⬜ |
| 12.5 | Configurar e-mail | Domínio próprio (não @gmail) | ⬜ |
| 12.6 | Google Business Profile | Cadastrar consultório | ⬜ |
| 12.7 | Google Search Console | Validar sitemap + indexação | ⬜ |
| 12.8 | Analytics | Plausible ou GA4 | ⬜ |
| 12.9 | Deploy produção | `vercel --prod` | ⬜ |

---

## Regras do pipeline

### Para cada seção (Fases 2-9):

```
1. Gabriel pede prompt ao Claude.ai
2. Claude.ai prepara prompt otimizado para Claude Code
3. Gabriel cola no Claude Code
4. Claude Code gera código e MOSTRA antes de salvar
5. Gabriel revisa visualmente no browser
6. Se OK → Claude Code salva → Gabriel testa → commit
7. Se não OK → Gabriel reporta ao Claude.ai → novo prompt de ajuste
```

### Convenção de commits:

```
feat: novo componente ou seção
fix: correção de bug
style: ajuste visual (cores, espaçamento, tipografia)
chore: configuração, setup, CI/CD
docs: documentação (CLAUDE.md, README)
```

### Princípios invioláveis:

1. **Uma seção por vez** — nunca pedir duas seções no mesmo prompt
2. **Testar antes de avançar** — browser + DevTools antes do próximo passo
3. **Compliance CFM em toda alteração** — CRM/RQE sempre visíveis
4. **Mobile primeiro, desktop depois** — testar mobile antes de desktop
5. **Commit a cada seção concluída** — nunca acumular mudanças

---

## Estimativa de tempo

| Fase | Estimativa | Sessões |
|------|-----------|---------|
| 0 Setup | ✅ Concluída | 1 sessão |
| 1 Fundação | 30 min | Sessão atual |
| 2 Header + Footer | 1-2 horas | Sessão atual |
| 3 Hero | 1 hora | Sessão 2 |
| 4-5 Sobre + Áreas | 1-2 horas | Sessão 2 |
| 6-7 Local + Depoimentos | 1-2 horas | Sessão 3 |
| 8-9 CTAs + LGPD | 1 hora | Sessão 3 |
| 10-11 Polish + Testes | 2 horas | Sessão 4 |
| 12 Deploy | 1 hora | Sessão 4 |
| **Total** | **~10-14 horas** | **~4 sessões** |

---

## Contatos e referências rápidas

| Item | Valor |
|------|-------|
| **Médico** | Dr. Ian Passos Silva |
| **CRM** | CRM-PE 28737 — MÉDICO |
| **RQE** | 15742 |
| **Especialidade** | Otorrinolaringologista |
| **Resolução CFM** | nº 2.336/2023 |
| **Referência visual** | dracamilamarinho.netlify.app |
| **Cor primária** | #043959 |
| **Cor accent** | #66ADD9 |
| **Fonte display** | Seravek |
| **Fonte body** | Rethink Sans |
| **Stack** | Next.js 16 + Tailwind v4 + shadcn/ui + Vercel |

---

*Última atualização: 2026-05-14*
*Próximo marco: Fase 1 — layout.tsx + page.tsx*