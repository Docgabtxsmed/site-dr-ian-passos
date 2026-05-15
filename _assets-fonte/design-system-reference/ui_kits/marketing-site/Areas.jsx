/* global React, Icon */
const AREAS = [
  {
    icon: 'nose',
    title: 'Nariz e seios da face',
    items: ['Sinusite crônica', 'Desvio de septo', 'Rinite alérgica', 'Obstrução nasal', 'Polipose nasal'],
  },
  {
    icon: 'ear',
    title: 'Ouvido',
    items: ['Perda auditiva', 'Otite e inflamação', 'Zumbido', 'Labirintite', 'Cera impactada'],
  },
  {
    icon: 'throat',
    title: 'Garganta',
    items: ['Amigdalite recorrente', 'Ronco e apneia do sono', 'Rouquidão', 'Refluxo laringofaríngeo'],
  },
  {
    icon: 'video',
    title: 'Procedimentos no consultório',
    items: ['Nasofibroscopia', 'Videolaringoscopia', 'Lavagem de ouvido', 'Cauterização'],
  },
];

const Areas = () => {
  return (
    <section id="areas">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{ maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="eyebrow">O que eu trato</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.15 }}>
            Otorrinolaringologia em sua totalidade — para você entender o que tem e o que fazer.
          </h2>
          <p style={{ fontSize: 17, maxWidth: 640 }}>
            Cada quadro tem investigação clínica, exame e plano de cuidado. Quando preciso de imagem ou cirurgia, oriento e acompanho você no caminho.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {AREAS.map((a, i) => (
            <div key={i}
                 style={{
                   background: '#fff', borderRadius: 14, padding: 28,
                   boxShadow: 'var(--shadow-sm)',
                   transition: 'box-shadow 200ms ease, transform 200ms ease',
                   display: 'flex', flexDirection: 'column', gap: 16,
                 }}
                 onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow-md)'; }}
                 onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--c-azul-brisa)', color: 'var(--c-azul-profundo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={a.icon} size={26} />
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, lineHeight: 1.2 }}>{a.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {a.items.map((it, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14.5, color: 'var(--fg-muted)', lineHeight: 1.55 }}>
                    <span style={{ color: 'var(--c-azul-renovacao)', flexShrink: 0, marginTop: 3 }}>
                      <Icon name="check" size={14} strokeWidth={2} />
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          background: 'var(--c-azul-brisa)', borderRadius: 14, padding: '20px 24px',
          display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap',
        }}>
          <Icon name="shield" size={22} />
          <p style={{ color: 'var(--c-azul-profundo)', margin: 0, flex: 1, minWidth: 220 }}>
            Não trato a sua queixa por nome — trato o seu caso. Diagnóstico, conduta e tempo de acompanhamento são individuais.
          </p>
        </div>
      </div>
    </section>
  );
};

window.Areas = Areas;
