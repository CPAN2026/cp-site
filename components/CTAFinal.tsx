'use client';

const WA_URL = 'https://wa.me/19209569439';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div className="reveal" style={{ '--reveal-delay': `${delay}s` } as React.CSSProperties}>
      {children}
    </div>
  );
}

export default function CTAFinal() {
  return (
    <section
      id="cta-final"
      aria-labelledby="cta-final-titulo"
      style={{ background: '#4a8c3f' }}
      className="py-[64px] md:py-[96px]"
    >
      <div
        style={{
          maxWidth: 720,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
        }}
      >
        {/* Tag */}
        <FadeUp delay={0}>
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 600,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            Fale Conosco
          </span>
        </FadeUp>

        {/* Título */}
        <FadeUp delay={0.15}>
          <h2
            id="cta-final-titulo"
            style={{
              color: 'white',
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              fontSize: 'clamp(26px, 4.5vw, 48px)',
            }}
          >
            Fale com a CP sobre o cuidado do seu familiar
          </h2>
        </FadeUp>

        {/* Subtítulo */}
        <FadeUp delay={0.3}>
          <p
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontWeight: 400,
              fontSize: 18,
              maxWidth: 540,
              lineHeight: 1.7,
              margin: 0,
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            Cada família tem uma rotina e uma necessidade diferente. Entre em contato com a equipe da CP para que possamos avaliar seu caso e indicar a melhor solução.
          </p>
        </FadeUp>

        {/* Botão */}
        <FadeUp delay={0.45}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center"
            style={{
              display: 'block',
              background: 'white',
              color: '#1a3a16',
              borderRadius: 6,
              padding: '18px 48px',
              fontWeight: 700,
              fontSize: 16,
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
              transition: 'background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease',
              fontFamily: 'var(--font-body), sans-serif',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.9)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span className="md:hidden">Falar pelo WhatsApp</span>
            <span className="hidden md:inline">Falar pelo WhatsApp agora</span>
          </a>
        </FadeUp>

        {/* Texto abaixo */}
        <FadeUp delay={0.6}>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 400,
              fontSize: 14,
              margin: 0,
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            Atendimento 24h · Rio de Janeiro
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
