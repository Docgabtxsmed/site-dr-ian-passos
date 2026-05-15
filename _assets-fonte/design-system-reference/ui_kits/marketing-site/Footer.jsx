/* global React, Icon */
const Footer = () => {
  return (
    <footer style={{ background: '#02263C', color: '#fff' }}>
      <div className="container" style={{ paddingTop: 64, paddingBottom: 32 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src="../../assets/logo-mark-on-dark.png" alt="" style={{ width: 42, height: 42, objectFit: 'contain' }}/>
              <div style={{ lineHeight: 1.1 }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: '#fff', letterSpacing: '-0.01em' }}>Dr. Ian Passos</div>
                <div style={{ fontSize: 11.5, color: 'var(--c-azul-renovacao)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Otorrinolaringologista</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'var(--c-azul-brisa)', maxWidth: 260, lineHeight: 1.6 }}>
              Cuidado especializado para nariz, ouvido e garganta — em Recife e por telemedicina.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 11.5, color: 'var(--c-azul-renovacao)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Navegar</div>
            <a href="#sobre" style={footerLink}>Sobre</a>
            <a href="#areas" style={footerLink}>Áreas de atuação</a>
            <a href="#onde-atendo" style={footerLink}>Onde atendo</a>
            <a href="#depoimentos" style={footerLink}>Depoimentos</a>
            <a href="#contato" style={footerLink}>Contato</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 11.5, color: 'var(--c-azul-renovacao)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Atendimento</div>
            <div style={{ fontSize: 14, color: 'var(--c-azul-brisa)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="whatsapp" size={16}/> (81) 9 0000-0000
            </div>
            <div style={{ fontSize: 14, color: 'var(--c-azul-brisa)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon name="clock" size={16}/> Seg. a sex. · 8h-18h
            </div>
            <div style={{ fontSize: 14, color: 'var(--c-azul-brisa)', display: 'flex', alignItems: 'flex-start', gap: 8 }}>
              <Icon name="mapPin" size={16} style={{ marginTop: 2 }}/>
              <span>Recife / PE<br/>Quatro unidades + telemedicina</span>
            </div>
            <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
              <a aria-label="Instagram" style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                <Icon name="instagram" size={18}/>
              </a>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ fontSize: 11.5, color: 'var(--c-azul-renovacao)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Identificação CFM</div>
            <div style={{ fontSize: 14, color: '#fff', fontWeight: 600, lineHeight: 1.45 }}>Dr. Ian Passos Silva</div>
            <div style={{ fontSize: 13, color: 'var(--c-azul-brisa)', lineHeight: 1.55 }}>
              CRM-PE 28737 — Médico<br/>
              Otorrinolaringologista — RQE 15742
            </div>
            <div style={{ fontSize: 12, color: 'var(--c-cinza-neblina)', lineHeight: 1.55, marginTop: 4 }}>
              Informações apresentadas têm caráter educativo. Não substituem consulta médica presencial.
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,.10)', marginTop: 40, paddingTop: 20, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <div style={{ fontSize: 12.5, color: 'var(--c-cinza-neblina)' }}>© 2026 Dr. Ian Passos Silva. Todos os direitos reservados.</div>
          <div style={{ fontSize: 12.5, color: 'var(--c-cinza-neblina)', display: 'flex', gap: 18 }}>
            <a>Política de privacidade</a>
            <a>Termos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
const footerLink = { color: 'var(--c-azul-brisa)', fontSize: 14, padding: '2px 0' };

window.Footer = Footer;
