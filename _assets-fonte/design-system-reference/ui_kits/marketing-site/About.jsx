/* global React, Icon */
const About = () => {
  return (
    <section id="sobre" style={{ background: 'var(--c-bege-calmante)' }}>
      <div className="container">
        <div className="about-grid">
          <div className="about-photo">
            <div style={{ borderRadius: 16, overflow: 'hidden', aspectRatio: '4/5', maxWidth: 460 }}>
              <img src="../../assets/foto-ian-17.jpg" alt="Dr. Ian Passos" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div className="eyebrow" style={{ color: 'var(--c-azul-profundo)' }}>Quem te atende</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.15 }}>
              Sou médico otorrinolaringologista. Atendo adultos e crianças em Recife.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--c-azul-profundo)', opacity: .8 }}>
              A consulta é uma conversa: você fala, eu escuto, examino com calma, e a gente decide juntos o próximo passo. Sem pressa, sem jargão desnecessário, sem prometer o que a medicina não pode entregar.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: 'graduationCap', title: 'Medicina UFPE (2019)', sub: 'Residência em Otorrinolaringologia · IMIP (2024)' },
                { icon: 'award', title: 'Rhinology Minifellowship · Miami (2024)', sub: 'Foco em rinologia (nariz e seios da face)' },
                { icon: 'shield', title: 'Oficial Médico do Exército Brasileiro', sub: 'Membro da equipe Pernambuco Otorrinos' },
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', color: 'var(--c-azul-profundo)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={item.icon} size={20} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--c-azul-profundo)', fontSize: 16, lineHeight: 1.35 }}>{item.title}</div>
                    <div style={{ fontSize: 14, color: 'var(--c-azul-profundo)', opacity: .65, lineHeight: 1.5 }}>{item.sub}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', gap: 12, marginTop: 4, flexWrap: 'wrap' }}>
              <a href="#contato" className="btn btn-primary">
                <Icon name="calendar" size={18}/> Marcar consulta
              </a>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        .about-grid { display: flex; flex-direction: column; gap: 40px; }
        .about-photo { display: flex; justify-content: center; }
        @media (min-width: 880px) {
          .about-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: center; }
        }
      `}</style>
    </section>
  );
};

window.About = About;
