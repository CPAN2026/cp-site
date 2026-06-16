'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WA_URL = 'https://wa.me/5521985549320';

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

export default function CTAFinal() {
  return (
    <section
      id="cta-final"
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
            style={{
              color: 'white',
              fontWeight: 900,
              lineHeight: 1.1,
              margin: 0,
              fontSize: 'clamp(26px, 6vw, 68px)',
            }}
          >
            Vamos cuidar juntos?
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
            Conte um pouco sobre quem precisa de cuidado. Estamos disponíveis 24 horas por dia, 7 dias por semana, para uma avaliação inicial sem compromisso.
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
