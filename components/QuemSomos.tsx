'use client';

const WA_URL = 'https://wa.me/19209569439';

export default function QuemSomos() {
  return (
    <section
      id="quem-somos"
      aria-labelledby="quem-somos-titulo"
      style={{ background: '#ffffff' }}
      className="py-[64px] md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center">

          {/* Imagem */}
          <div
            className="reveal reveal-left"
            style={{ flex: 1, width: '100%', position: 'relative', zIndex: 0 }}
          >
            {/* Elemento decorativo atrás da imagem — oculto no mobile para evitar overflow */}
            <div
              className="hidden md:block"
              style={{
                position: 'absolute',
                top: -16,
                left: -16,
                width: '100%',
                height: '100%',
                border: '2px solid #4a8c3f',
                borderRadius: 2,
                zIndex: -1,
                opacity: 0.3,
              }}
            />

            {/* Imagem */}
            <div
              className="h-[320px] md:h-[520px]"
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                background: '#ffffff',
              }}
            >
              <img
                src="/quem-somos.webp"
                alt="Cuidadora CP com idoso"
                width={694}
                height={1042}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>

          {/* Texto */}
          <div
            className="reveal reveal-right text-center md:text-left items-center md:items-start"
            style={{ '--reveal-delay': '0.2s', flex: 1, display: 'flex', flexDirection: 'column', gap: 24 } as React.CSSProperties}
          >
            <span
              style={{
                display: 'inline-block',
                color: '#4a8c3f',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 600,
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '2px',
              }}
            >
              Quem Somos
            </span>

            <h2
              id="quem-somos-titulo"
              style={{
                color: '#1a3a16',
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                fontSize: 'clamp(24px, 4vw, 44px)',
              }}
            >
              Conheça a CP Cuidadores Profissionais
            </h2>

            <p
              style={{
                color: '#444',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              A CP Cuidadores Profissionais é uma agência de cuidadores de idosos que atende famílias no Rio de Janeiro e em Niterói. Fundada em 9 de novembro de 2011, oferece cuidadores e técnicos de enfermagem em plantões mensais ou avulsos de 6, 8, 12 e 24 horas.
            </p>

            <p
              style={{
                color: '#444',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              O atendimento pode incluir acompanhamento em exames e internações, cuidado pós-cirúrgico e suporte a idosos com Alzheimer, Parkinson e outras necessidades. Cada caso é avaliado para selecionar o profissional compatível com a rotina, as necessidades e as preferências da família. A CP oferece suporte 24 horas e realiza ajustes ou reposições quando necessário.
            </p>

            <div className="flex justify-center md:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#4a8c3f',
                  color: 'white',
                  borderRadius: 6,
                  padding: '14px 32px',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#3a7230')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#4a8c3f')}
              >
                Falar com a CP
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
