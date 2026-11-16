'use client';
import { Ear, GraduationCap, Shield, Heart } from 'lucide-react';

const CARDS = [
  {
    icone: <Ear size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Presença e escuta',
    texto: 'Cada atendimento parte da escuta das necessidades do idoso e da família. Estar presente com atenção faz parte do cuidado.',
    delay: 0,
  },
  {
    icone: <GraduationCap size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Formação dos profissionais',
    texto: 'A CP trabalha com profissionais certificados, atualização contínua e supervisão dedicada.',
    delay: 0.1,
  },
  {
    icone: <Shield size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Discrição e respeito à rotina',
    texto: 'O atendimento deve preservar a intimidade da casa, os hábitos e as preferências de quem recebe o cuidado.',
    delay: 0.2,
  },
  {
    icone: <Heart size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Vínculo com o idoso e a família',
    texto: 'A CP busca relações duradouras entre cuidador, idoso e família e acompanha o atendimento para fazer ajustes quando necessário.',
    delay: 0.3,
  },
];

export default function PropostaValor() {
  return (
    <section
      id="proposta-valor"
      aria-labelledby="proposta-valor-titulo"
      style={{ background: '#1a3a16' }}
      className="py-16 md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="reveal">
            <span
              style={{
                display: 'inline-block',
                color: '#86efac',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 500,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '3px',
              }}
            >
              Nossa Filosofia
            </span>
          </div>

          <div className="reveal" style={{ '--reveal-delay': '0.1s' } as React.CSSProperties}>
            <h2
              id="proposta-valor-titulo"
              style={{
                color: 'white',
                fontWeight: 700,
                lineHeight: 1.15,
                maxWidth: 640,
                margin: '16px auto',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
              }}
            >
              Princípios do cuidado profissional da CP
            </h2>
          </div>

          <div className="reveal" style={{ '--reveal-delay': '0.2s' } as React.CSSProperties}>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 17,
                maxWidth: 560,
                lineHeight: 1.7,
                margin: '0 auto',
              }}
            >
              Presença, formação, discrição e vínculo orientam a forma como a CP seleciona profissionais e acompanha cada atendimento.
            </p>
          </div>
        </div>

        {/* Grid 2x2 */}
        <div
          style={{ maxWidth: 960, margin: '0 auto' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {CARDS.map((card) => (
            <div
              key={card.titulo}
              className="reveal"
              style={{ '--reveal-delay': `${card.delay}s` } as React.CSSProperties}
            >
              <div
                className="p-6 md:p-9"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  height: '100%',
                  transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.borderColor = 'rgba(134,239,172,0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Círculo do ícone */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: 'rgba(74,140,63,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  {card.icone}
                </div>

                {/* Título */}
                <h3
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 20,
                    color: 'white',
                    marginBottom: 12,
                  }}
                >
                  {card.titulo}
                </h3>

                {/* Texto */}
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 400,
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {card.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
