/* global React, Icon */
const WhatsAppFAB = () => {
  return (
    <a href="#contato"
       aria-label="Agendar consulta no WhatsApp"
       style={{
         position: 'fixed', right: 20, bottom: 20, zIndex: 60,
         display: 'inline-flex', alignItems: 'center', gap: 10,
         padding: '14px 18px',
         background: 'var(--c-azul-profundo)', color: '#fff',
         fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 14,
         borderRadius: 12,
         boxShadow: '0 12px 32px rgba(4,57,89,.25), 0 4px 12px rgba(4,57,89,.15)',
         transition: 'background 200ms ease, transform 120ms ease',
       }}
       onMouseEnter={e => e.currentTarget.style.background = '#06283D'}
       onMouseLeave={e => e.currentTarget.style.background = 'var(--c-azul-profundo)'}
    >
      <Icon name="whatsapp" size={20} />
      <span className="fab-label">Agendar consulta</span>
      <style>{`
        @media (max-width: 520px) {
          .fab-label { display: none; }
        }
      `}</style>
    </a>
  );
};

window.WhatsAppFAB = WhatsAppFAB;
