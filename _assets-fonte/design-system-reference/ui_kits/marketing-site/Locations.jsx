/* global React, Icon */
const LOCATIONS = [
  {
    eyebrow: 'Boa Viagem · Recife',
    name: 'PE Otorrinos',
    address: 'Av. Conselheiro Aguiar, Boa Viagem',
    detail: 'Adultos e crianças · estacionamento no local',
  },
  {
    eyebrow: 'Ilha do Leite · Recife',
    name: 'HOPE — Hospital de Olhos de Pernambuco',
    address: 'Rua Francisco Alves, Ilha do Leite',
    detail: 'Consulta clínica · exames de imagem no mesmo edifício',
  },
  {
    eyebrow: 'Graças · Recife',
    name: 'Hospital Jayme da Fonte',
    address: 'Rua dos Médicos, Graças',
    detail: 'Atendimento integrado · acesso fácil ao centro',
  },
  {
    eyebrow: 'Telemedicina',
    name: 'Consulta online',
    address: 'Todo o Brasil · agendamento por WhatsApp',
    detail: 'Indicada para retornos, segunda opinião e orientação clínica',
    isRemote: true,
  },
];

const CONVENIOS = ['Bradesco Saúde', 'SulAmérica', 'Amil', 'Allianz', 'Unimed Recife', 'Cassi', 'Postal Saúde'];

const Locations = () => {
  return (
    <section id="onde-atendo" style={{ background: 'var(--c-azul-brisa)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 720 }}>
          <div className="eyebrow">Onde eu atendo</div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.15 }}>
            Quatro endereços em Recife — e telemedicina para todo o Brasil.
          </h2>
          <p style={{ fontSize: 17, maxWidth: 600 }}>
            Escolha a unidade mais próxima de você. O agendamento é feito por WhatsApp, com confirmação no mesmo dia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {LOCATIONS.map((l, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: 14, padding: 24,
              display: 'flex', flexDirection: 'column', gap: 12,
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                <div>
                  <div className="eyebrow" style={{ fontSize: 11 }}>{l.eyebrow}</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2, marginTop: 6 }}>{l.name}</h3>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'var(--c-azul-brisa)', color: 'var(--c-azul-profundo)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={l.isRemote ? 'video' : 'mapPin'} size={18} />
                </div>
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55 }}>
                <span style={{ color: 'var(--c-azul-profundo)', fontWeight: 600 }}>{l.address}</span><br/>
                <span style={{ color: 'var(--fg-muted)' }}>{l.detail}</span>
              </p>
              <div style={{ display: 'flex', gap: 8, marginTop: 'auto' }}>
                <a href="#contato" className="btn btn-primary" style={{ padding: '10px 14px', fontSize: 13 }}>
                  Agendar aqui
                </a>
                {!l.isRemote && (
                  <a className="btn btn-ghost" style={{ padding: '10px 14px', fontSize: 13 }}>
                    Ver no mapa
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Convênios */}
        <div style={{
          background: '#fff', borderRadius: 14, padding: 28,
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name="shield" size={20} />
            <div className="eyebrow" style={{ fontSize: 11 }}>Convênios aceitos</div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CONVENIOS.map((c, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center',
                padding: '7px 14px', background: 'var(--c-azul-brisa)',
                color: 'var(--c-azul-profundo)', fontSize: 13.5, fontWeight: 600,
                borderRadius: 8,
              }}>{c}</span>
            ))}
            <span style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '7px 14px', background: '#fff',
              color: 'var(--c-azul-profundo)', fontSize: 13.5, fontWeight: 600,
              border: '1px solid rgba(4,57,89,.16)', borderRadius: 8,
            }}>+ outros</span>
          </div>
          <p style={{ fontSize: 13, color: 'var(--fg-muted)', marginTop: 4 }}>
            Consulte cobertura específica do seu plano antes do agendamento.
          </p>
        </div>
      </div>
    </section>
  );
};

window.Locations = Locations;
