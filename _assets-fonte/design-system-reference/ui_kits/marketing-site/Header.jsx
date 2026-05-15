/* global React, Icon */
const { useState, useEffect } = React;

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#areas', label: 'Áreas de atuação' },
  { href: '#onde-atendo', label: 'Onde atendo' },
  { href: '#contato', label: 'Contato' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: '#ffffff',
      borderBottom: scrolled ? '1px solid rgba(4,57,89,.08)' : '1px solid transparent',
      transition: 'border-color 200ms ease, box-shadow 200ms ease',
      boxShadow: scrolled ? '0 1px 2px rgba(4,57,89,.05)' : 'none',
    }}>
      {/* CFM regulatory strip — always visible */}
      <div style={{ background: 'var(--c-azul-profundo)', color: '#fff' }}>
        <div className="container" style={{
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          gap: 10, padding: '8px 24px', fontSize: 11.5, lineHeight: 1.4,
          letterSpacing: '0.01em', textAlign: 'center', flexWrap: 'wrap',
        }}>
          <span style={{ fontWeight: 600 }}>Dr. Ian Passos Silva</span>
          <span style={{ opacity: .55 }}>·</span>
          <span>CRM-PE 28737</span>
          <span style={{ opacity: .55 }}>·</span>
          <span>Otorrinolaringologista</span>
          <span style={{ opacity: .55 }}>·</span>
          <span>RQE 15742</span>
        </div>
      </div>

      <div className="container" style={{
        display: 'flex', alignItems: 'center', gap: 24,
        padding: '14px 24px',
      }}>
        <a href="#topo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img src="../../assets/logo-mark.png" alt="" style={{ width: 38, height: 38, objectFit: 'contain' }}/>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--c-azul-profundo)', letterSpacing: '-0.01em' }}>Dr. Ian Passos</span>
            <span style={{ fontSize: 11, color: 'var(--c-azul-renovacao)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Otorrinolaringologista</span>
          </div>
        </a>

        <nav className="desktop-nav" style={{
          marginLeft: 'auto', display: 'flex', gap: 28,
          fontFamily: 'var(--font-body)', fontSize: 14.5, fontWeight: 500,
        }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href} style={{ color: 'var(--c-azul-profundo)', padding: '4px 0' }}
               onMouseEnter={e => e.currentTarget.style.color = 'var(--c-azul-renovacao)'}
               onMouseLeave={e => e.currentTarget.style.color = 'var(--c-azul-profundo)'}>
              {n.label}
            </a>
          ))}
        </nav>

        <a href="#contato" className="desktop-cta btn btn-primary" style={{ padding: '10px 18px', fontSize: 14 }}>
          <Icon name="whatsapp" size={16} /> Agendar consulta
        </a>

        <button className="mobile-toggle"
                onClick={() => setOpen(o => !o)}
                aria-label="Abrir menu"
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--c-azul-profundo)', padding: 6 }}>
          <Icon name={open ? 'x' : 'menu'} size={26} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu" style={{ borderTop: '1px solid rgba(4,57,89,.08)', padding: '10px 24px 20px' }}>
          {NAV.map(n => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}
               style={{ display: 'block', padding: '14px 0', borderBottom: '1px solid rgba(4,57,89,.06)', color: 'var(--c-azul-profundo)', fontWeight: 500 }}>
              {n.label}
            </a>
          ))}
          <a href="#contato" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: 16, width: '100%', justifyContent: 'center' }}>
            <Icon name="whatsapp" size={18} /> Agendar consulta
          </a>
        </div>
      )}

      <style>{`
        .desktop-nav, .desktop-cta { display: none; }
        .mobile-toggle { display: inline-flex; }
        @media (min-width: 880px) {
          .desktop-nav, .desktop-cta { display: inline-flex; }
          .mobile-toggle, .mobile-menu { display: none !important; }
        }
      `}</style>
    </header>
  );
};

window.Header = Header;
