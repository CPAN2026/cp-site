'use client';
import Image from 'next/image';

const SERVICOS = [
  { label: 'Cuidador de idosos 24 horas',                           href: '#servico-24-horas' },
  { label: 'Cuidador de idosos diurno',                             href: '#servico-diurno' },
  { label: 'Cuidador de idosos noturno',                            href: '#servico-noturno' },
  { label: 'Acompanhante hospitalar para idosos',                   href: '#servico-acompanhante-hospitalar' },
  { label: 'Cuidados pós-cirúrgicos em casa',                       href: '#servico-pos-cirurgico' },
  { label: 'Cuidado para idosos com Alzheimer e outras demências',  href: '#servico-alzheimer-demencias' },
];

const NAV = [
  { label: 'Experiência',   href: '#numeros'       },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Quem somos',    href: '#quem-somos'    },
  { label: 'Depoimentos',   href: '#depoimentos'   },
  { label: 'Contato',       href: '#cta-final'     },
];

const WA_URL = 'https://wa.me/19209569439';
const INSTAGRAM_URL = 'https://www.instagram.com/cpcuidadoresprofissionais/';

const LINK_COLOR = 'rgba(255,255,255,0.85)';

const colTitleStyle: React.CSSProperties = {
  color: '#5fa353',
  fontWeight: 600,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: 20,
  fontFamily: 'var(--font-body), sans-serif',
};

const linkStyle: React.CSSProperties = {
  color: LINK_COLOR,
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1.5,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'block',
  fontFamily: 'var(--font-body), sans-serif',
};

const textStyle: React.CSSProperties = {
  color: LINK_COLOR,
  fontSize: 14,
  lineHeight: 1.6,
  fontFamily: 'var(--font-body), sans-serif',
};

function FooterLinks({ label, links }: { label: string; links: { label: string; href: string }[] }) {
  return (
    <nav aria-label={label} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          style={linkStyle}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
          onMouseLeave={(e) => (e.currentTarget.style.color = LINK_COLOR)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0f2409',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      className="pt-[48px] pb-[48px] md:pt-[64px] md:pb-[64px]"
    >
      <div className="reveal" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.2fr_0.8fr_1fr] gap-10 md:gap-12 text-center md:text-left">

          {/* Coluna 1 — Marca */}
          <div
            className="items-center md:items-start"
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            <Image
              src="/logo.png"
              alt="CP Cuidadores Profissionais"
              width={180}
              height={52}
              style={{ objectFit: 'contain', height: 'auto' }}
              className="w-[140px] md:w-[180px]"
            />
            <p
              style={{
                color: 'rgba(255,255,255,0.75)',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
                fontFamily: 'var(--font-body), sans-serif',
              }}
            >
              Agência de cuidadores de idosos no Rio de Janeiro e em Niterói, com atendimento desde 2011.
            </p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da CP Cuidadores Profissionais"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.25)',
                color: LINK_COLOR,
                transition: 'color 0.2s ease, border-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = LINK_COLOR;
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
              }}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                <circle cx="12" cy="12" r="4.25" />
                <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>

          {/* Coluna 2 — Serviços */}
          <div>
            <div style={colTitleStyle}>Serviços</div>
            <FooterLinks label="Serviços" links={SERVICOS} />
          </div>

          {/* Coluna 3 — Navegação */}
          <div>
            <div style={colTitleStyle}>Navegação</div>
            <FooterLinks label="Menu do rodapé" links={NAV} />
          </div>

          {/* Coluna 4 — Contato */}
          <div>
            <div style={colTitleStyle}>Contato</div>
            <div
              className="items-center md:items-start"
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#4a8c3f',
                  color: 'white',
                  borderRadius: 6,
                  padding: '10px 20px',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#3a7230')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#4a8c3f')}
              >
                Falar pelo WhatsApp
              </a>
              <span style={textStyle}>Atendimento 24 horas</span>
              <address style={{ ...textStyle, fontStyle: 'normal' }}>
                Avenida Nossa Senhora de Copacabana, 664
                <br />
                Rio de Janeiro – RJ
              </address>
            </div>
          </div>

        </div>

        {/* Linha inferior */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.06)',
            marginTop: 48,
            paddingTop: 24,
          }}
        >
          <p
            className="text-center md:text-left"
            style={{
              color: 'rgba(255,255,255,0.45)',
              fontWeight: 400,
              fontSize: 13,
              margin: 0,
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            CP Cuidadores Profissionais · CNPJ 14.674.523/0001-28 · © 2011–2026
          </p>
        </div>
      </div>
    </footer>
  );
}
