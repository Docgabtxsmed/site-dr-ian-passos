/* global React */
const QUOTES = [
  {
    initial: 'M',
    quote: 'Foi a primeira vez que entendi o que eu tinha. Saí da consulta calmo, com um plano claro.',
    name: 'Marcelo R.',
    meta: 'paciente em Boa Viagem · janeiro de 2026',
  },
  {
    initial: 'A',
    quote: 'O Dr. Ian explicou cada exame antes de fazer. Levei minha filha de 6 anos e ela se sentiu segura.',
    name: 'Aline S.',
    meta: 'paciente em HOPE · novembro de 2025',
  },
  {
    initial: 'J',
    quote: 'Pontual, atencioso e sem pressa. A consulta inteira foi sobre a minha queixa, não sobre vender outra coisa.',
    name: 'João V.',
    meta: 'telemedicina · outubro de 2025',
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" style={{ background: 'var(--c-bege-calmante)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <div className="eyebrow" style={{ color: 'var(--c-azul-profundo)' }}>Pacientes</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.15 }}>
            O que dizem sobre o atendimento.
          </h2>
          <p style={{ color: 'var(--c-azul-profundo)', opacity: .75, fontSize: 17, maxWidth: 600 }}>
            Comentários publicados em plataformas independentes (Doctoralia). Sem retoques, sem trocas.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {QUOTES.map((q, i) => (
            <figure key={i} style={{
              background: '#fff', borderRadius: 14, padding: 28, margin: 0,
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <blockquote style={{
                margin: 0,
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21,
                lineHeight: 1.35, color: 'var(--c-azul-profundo)', letterSpacing: '-0.01em',
              }}>
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption style={{ display: 'flex', gap: 12, alignItems: 'center', marginTop: 'auto' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', background: 'var(--c-azul-brisa)',
                  color: 'var(--c-azul-profundo)', fontFamily: 'var(--font-display)', fontWeight: 700,
                  fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>{q.initial}</div>
                <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                  <span style={{ fontWeight: 600, color: 'var(--c-azul-profundo)', fontSize: 14 }}>{q.name}</span>
                  <span style={{ fontSize: 12, color: 'var(--fg-muted)' }}>{q.meta}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <p style={{
          fontSize: 12.5, lineHeight: 1.55, color: 'var(--c-azul-profundo)', opacity: .55,
          maxWidth: 680, textAlign: 'left',
        }}>
          Depoimentos representam a experiência individual de cada paciente. Não constituem promessa de resultado.
        </p>
      </div>
    </section>
  );
};

window.Testimonials = Testimonials;
