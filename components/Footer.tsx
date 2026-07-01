'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

const NAV = [
  { label: 'História',     href: '#numeros'     },
  { label: 'Serviços',     href: '#servicos'    },
  { label: 'Quem Somos',   href: '#quem-somos'  },
  { label: 'Depoimentos',  href: '#depoimentos' },
  { label: 'Contato',      href: '#cta-final'   },
];

const WA_URL = 'https://wa.me/19209569439';

const colTitleStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.3)',
  fontWeight: 600,
  fontSize: 11,
  textTransform: 'uppercase',
  letterSpacing: '2px',
  marginBottom: 20,
  fontFamily: 'var(--font-body), sans-serif',
};

const linkStyle: React.CSSProperties = {
  color: 'rgba(255,255,255,0.6)',
  fontWeight: 400,
  fontSize: 14,
  textDecoration: 'none',
  transition: 'color 0.2s ease',
  display: 'block',
  fontFamily: 'var(--font-body), sans-serif',
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut' }}
      style={{
        background: '#0f2409',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      className="pt-[48px] pb-[48px] md:pt-[64px] md:pb-[64px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">

          {/* Coluna 1 — Marca */}
          <div
            className="items-center md:items-start text-center md:text-left"
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
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.7,
                margin: 0,
                fontFamily: 'var(--font-body), sans-serif',
              }}
            >
              Cuidado profissional, humano e contínuo a idosos no Rio de Janeiro. Desde 9 de novembro de 2011.
            </p>
          </div>

          {/* Coluna 2 — Navegação */}
          <div>
            <div style={colTitleStyle}>Navegação</div>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {NAV.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={linkStyle}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Coluna 3 — Contato */}
          <div>
            <div style={colTitleStyle}>Contato</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                Fale agora via WhatsApp
              </a>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontFamily: 'var(--font-body), sans-serif' }}>
                Av. Nossa Senhora de Copacabana, 664
              </span>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, fontFamily: 'var(--font-body), sans-serif' }}>
                Rio de Janeiro · RJ
              </span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontFamily: 'var(--font-body), sans-serif' }}>
                CNPJ: 14.674.523/0001-28
              </span>
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
            style={{
              color: 'rgba(255,255,255,0.3)',
              fontWeight: 400,
              fontSize: 13,
              margin: 0,
              fontFamily: 'var(--font-body), sans-serif',
            }}
          >
            © 2011 CP Cuidadores Profissionais. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
