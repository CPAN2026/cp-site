'use client';
import { Phone, ClipboardList, UserCheck, Heart } from 'lucide-react';

const WA_URL = 'https://wa.me/19209569439';

const ETAPAS = [
  {
    icone: <Phone size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: '1. Primeiro contato pelo WhatsApp',
    texto: 'A família entra em contato com a CP e compartilha as informações iniciais sobre quem precisa de cuidado.',
    delay: 0,
    isLeft: true,
  },
  {
    icone: <ClipboardList size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: '2. Avaliação das necessidades',
    texto: 'A equipe analisa a rotina, a condição de saúde, as preferências e o formato de plantão necessário.',
    delay: 0.2,
    isLeft: false,
  },
  {
    icone: <UserCheck size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: '3. Seleção do cuidador',
    texto: 'A CP indica o profissional mais adequado ao perfil do idoso e da família.',
    delay: 0.4,
    isLeft: true,
  },
  {
    icone: <Heart size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: '4. Acompanhamento contínuo',
    texto: 'A CP acompanha o atendimento e permanece disponível para ajustes e reposições quando necessário.',
    delay: 0.6,
    isLeft: false,
  },
];

const delay = (s: number) => ({ '--reveal-delay': `${s}s` }) as React.CSSProperties;

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-titulo"
      style={{ background: '#f8f8f6' }}
      className="py-16 md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
          <div className="reveal">
            <span
              style={{
                display: 'inline-block',
                color: '#4a8c3f',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 600,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '3px',
                marginBottom: 16,
              }}
            >
              Como Funciona
            </span>
          </div>

          <div className="reveal" style={delay(0.1)}>
            <h2
              id="como-funciona-titulo"
              style={{
                color: '#1a3a16',
                fontWeight: 700,
                lineHeight: 1.15,
                margin: '0 auto',
                maxWidth: 720,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
              }}
            >
              Como funciona a contratação de cuidadores de idosos
            </h2>
          </div>

          <div className="reveal" style={delay(0.15)}>
            <p
              style={{
                color: '#555',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 17,
                lineHeight: 1.7,
                maxWidth: 640,
                margin: '16px auto 0',
              }}
            >
              Contratar um cuidador de idosos na CP é simples e transparente. Veja como funciona, do primeiro contato até o acompanhamento contínuo da sua família.
            </p>
          </div>

          <div className="reveal" style={delay(0.2)}>
            <div
              style={{
                width: 48,
                height: 2,
                background: '#4a8c3f',
                margin: '20px auto 56px',
              }}
            />
          </div>
        </div>

        {/* Linha do tempo — marcação única: coluna no mobile, alternada no desktop */}
        <div className="relative flex flex-col gap-10 md:block md:max-w-[800px] md:mx-auto md:px-6">
          {/* Linha vertical central */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 2,
              top: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, #4a8c3f 0%, #c8e6c0 100%)',
              zIndex: 0,
            }}
          />

          {ETAPAS.map((etapa) => (
            <div
              key={etapa.titulo}
              className="reveal flex flex-col items-center text-center md:grid md:grid-cols-[1fr_56px_1fr] md:items-center md:text-left md:mb-16"
              style={delay(etapa.delay)}
            >
              {/* Círculo */}
              <div
                className="mb-4 md:mb-0 md:col-start-2 md:row-start-1 shadow-[0_2px_12px_rgba(0,0,0,0.08)] md:shadow-none"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'white',
                  border: '2px solid #4a8c3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {etapa.icone}
              </div>

              {/* Texto */}
              <div
                className={
                  'flex flex-col items-center md:row-start-1 ' +
                  (etapa.isLeft
                    ? 'md:col-start-1 md:items-end md:text-right md:pr-12'
                    : 'md:col-start-3 md:items-start md:pl-12')
                }
              >
                <h3
                  className="text-[18px] md:text-[20px]"
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    color: '#1a3a16',
                    marginBottom: 8,
                  }}
                >
                  {etapa.titulo}
                </h3>
                <p
                  className="text-[14px] md:text-[15px] max-w-[300px] md:max-w-[280px]"
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 400,
                    color: '#666',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {etapa.texto}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ ...delay(0.4), textAlign: 'center', marginTop: 48 }}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#4a8c3f',
              color: 'white',
              borderRadius: 4,
              padding: '14px 36px',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#3a7230')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#4a8c3f')}
          >
            Iniciar atendimento pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
