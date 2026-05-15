/* global React, Icon */
const Hero = () => {
  return (
    <section id="topo" style={{
      position: 'relative',
      background: 'var(--c-azul-brisa)',
      overflow: 'hidden',
      paddingTop: 56, paddingBottom: 64,
    }}>
      {/* background pattern at low opacity */}
      <img src="../../assets/marca-background-3.jpg" alt="" aria-hidden="true"
           style={{
             position: 'absolute', inset: 0, width: '100%', height: '100%',
             objectFit: 'cover', objectPosition: 'right center', opacity: .45,
             mixBlendMode: 'multiply', pointerEvents: 'none',
           }}/>

      <div className="container" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr', gap: 40, alignItems: 'center' }}>
        <div className="hero-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div className="eyebrow">Otorrinolaringologia · Recife</div>
            <h1 style={{ fontSize: 'clamp(34px, 5.4vw, 64px)', fontWeight: 800, lineHeight: 1.05 }}>
              Cuidado especializado para o seu <span style={{ color: 'var(--c-azul-renovacao)' }}>nariz, ouvido e&nbsp;garganta.</span>
            </h1>
            <p style={{ fontSize: 'clamp(16px, 2vw, 19px)', maxWidth: 520 }}>
              Atendimento humano e resolutivo em Recife, com foco na sua qualidade de vida. Adultos e crianças, em quatro endereços e por telemedicina.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 8 }}>
              <a href="#contato" className="btn btn-primary">
                <Icon name="whatsapp" size={18} /> Agendar consulta no WhatsApp
              </a>
              <a href="#sobre" className="btn btn-ghost">
                Conhecer o médico <Icon name="arrowRight" size={16} />
              </a>
            </div>
            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 14, color: 'var(--c-azul-profundo)' }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[0,1,2,3,4].map(i => (
                  <span key={i} style={{ color: 'var(--c-azul-renovacao)' }}><Icon name="star" size={16} /></span>
                ))}
              </div>
              <span style={{ fontSize: 13.5, color: 'var(--c-azul-profundo)' }}>
                <strong>54+ avaliações positivas</strong> · pontualidade, atenção, didática.
              </span>
            </div>
          </div>

          <div className="hero-photo">
            <div style={{
              position: 'relative', borderRadius: 16, overflow: 'hidden',
              background: 'var(--c-bege-calmante)',
              boxShadow: '0 12px 32px rgba(4, 57, 89, 0.10), 0 4px 8px rgba(4, 57, 89, 0.04)',
              aspectRatio: '4/5',
            }}>
              <img src="../../assets/foto-ian-2.jpg" alt="Dr. Ian Passos"
                   style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}/>
            </div>
            <div style={{
              position: 'absolute', bottom: -18, left: -18,
              background: '#fff', borderRadius: 12, padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: 12,
              boxShadow: '0 4px 12px rgba(4,57,89,.10)',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--c-azul-brisa)', color: 'var(--c-azul-profundo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="shield" size={20} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
                <span style={{ fontSize: 11, color: 'var(--c-cinza-neblina)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Credenciado</span>
                <span style={{ fontWeight: 700, color: 'var(--c-azul-profundo)', fontSize: 14 }}>CRM-PE 28737 · RQE 15742</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid { display: flex; flex-direction: column; gap: 40px; }
        .hero-photo { position: relative; max-width: 460px; align-self: center; width: 100%; }
        @media (min-width: 880px) {
          .hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
          .hero-photo { max-width: 520px; align-self: stretch; }
        }
      `}</style>
    </section>
  );
};

window.Hero = Hero;
