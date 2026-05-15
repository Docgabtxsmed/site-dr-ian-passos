/* global React, Icon */
const { useState: useStateContact } = React;

const Contact = () => {
  const [submitted, setSubmitted] = useStateContact(false);
  return (
    <section id="contato" style={{ background: 'var(--c-azul-profundo)', color: '#fff' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 40 }}>
        <div className="contact-grid">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, color: '#fff' }}>
            <div className="eyebrow" style={{ color: 'var(--c-azul-renovacao)' }}>Agendar consulta</div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, lineHeight: 1.1, color: '#fff' }}>
              O caminho mais rápido é o WhatsApp.
            </h2>
            <p style={{ fontSize: 17, color: 'var(--c-azul-brisa)' }}>
              Resposta no mesmo dia, em horário comercial. Você escolhe a unidade e o melhor horário — nós confirmamos por mensagem.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <a className="btn btn-secondary" style={{ background: '#fff', color: 'var(--c-azul-profundo)' }}>
                <Icon name="whatsapp" size={18}/> Falar no WhatsApp
              </a>
              <a className="btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,.24)' }}>
                <Icon name="phone" size={16}/> (81) 9 0000-0000
              </a>
            </div>
            <div style={{ borderTop: '1px solid rgba(255,255,255,.16)', paddingTop: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Icon name="clock" size={18} />
                <span style={{ fontSize: 14, color: 'var(--c-azul-brisa)' }}>
                  Atendimento secretaria: <strong style={{ color: '#fff' }}>seg. a sex. · 8h-18h</strong>
                </span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <Icon name="calendar" size={18} />
                <span style={{ fontSize: 14, color: 'var(--c-azul-brisa)' }}>
                  Confirmação no mesmo dia · sem fila de espera longa
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: '#fff', borderRadius: 14, padding: 28, color: 'var(--c-azul-profundo)',
            boxShadow: 'var(--shadow-lg)',
          }}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '20px 0', textAlign: 'center' }}>
                <div style={{ alignSelf: 'center', width: 56, height: 56, borderRadius: '50%', background: 'var(--c-azul-brisa)', color: 'var(--c-azul-profundo)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={28} strokeWidth={2}/>
                </div>
                <h3 style={{ fontSize: 22 }}>Recebemos seu contato.</h3>
                <p style={{ color: 'var(--fg-muted)' }}>Vamos responder por WhatsApp em breve. Se for urgente, ligue para (81) 9 0000-0000.</p>
                <a className="btn btn-ghost" style={{ alignSelf: 'center' }} onClick={() => setSubmitted(false)}>Enviar outro pedido</a>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}
                    style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <h3 style={{ fontSize: 22, lineHeight: 1.2 }}>Ou deixe seus dados — entramos em contato.</h3>
                <Field label="Seu nome" name="nome" defaultValue="" placeholder="Como prefere ser chamado(a)" />
                <Field label="WhatsApp" name="whatsapp" placeholder="(81) 9 0000-0000" />
                <Select label="Unidade preferida" name="unidade" options={['PE Otorrinos (Boa Viagem)', 'HOPE (Ilha do Leite)', 'Hospital Jayme da Fonte (Graças)', 'Telemedicina', 'Tanto faz']} />
                <Field label="Qual é a sua queixa?" name="queixa" placeholder="Ex: sinusite que voltou, ronco, ouvido entupido…" textarea />
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 6 }}>
                  Enviar pedido de agendamento <Icon name="arrowRight" size={16}/>
                </button>
                <p style={{ fontSize: 11.5, color: 'var(--c-cinza-neblina)', marginTop: 4 }}>
                  Não compartilhamos seus dados. Em caso de emergência, procure o pronto-socorro mais próximo.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        .contact-grid { display: flex; flex-direction: column; gap: 40px; }
        @media (min-width: 880px) {
          .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, name, placeholder, defaultValue, textarea }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--c-azul-profundo)' }}>{label}</span>
    {textarea ? (
      <textarea name={name} rows={3} defaultValue={defaultValue} placeholder={placeholder}
                style={inputStyle}/>
    ) : (
      <input name={name} defaultValue={defaultValue} placeholder={placeholder} style={inputStyle}/>
    )}
  </label>
);

const Select = ({ label, name, options }) => (
  <label style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--c-azul-profundo)' }}>{label}</span>
    <select name={name} style={inputStyle}>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  </label>
);

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontFamily: 'var(--font-body)',
  fontSize: 15,
  color: 'var(--c-azul-profundo)',
  background: '#fff',
  border: '1px solid rgba(4,57,89,.20)',
  borderRadius: 8,
  outline: 'none',
  resize: 'vertical',
};

window.Contact = Contact;
