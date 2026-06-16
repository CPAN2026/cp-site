'use client';
import { motion } from 'framer-motion';

const WA_URL = 'https://wa.me/5521985549320';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const, delay },
});

export default function Hero() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Vídeo */}
      <video
        src="/hero-desktop.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to bottom, rgba(10,40,10,0.55) 0%, rgba(10,40,10,0.35) 50%, rgba(10,40,10,0.7) 100%)',
          zIndex: 1,
        }}
      />

      {/* Conteúdo */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '110px 20px 0',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Tag */}
        <motion.div {...fadeUp(0.3)}>
          <span
            style={{
              display: 'block',
              color: '#86efac',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 600,
              fontSize: 10,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: 20,
            }}
          >
            Desde 09 de novembro de 2011
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.5)}
          style={{
            color: 'white',
            fontWeight: 900,
            lineHeight: 1.1,
            textAlign: 'center',
            margin: 0,
            fontSize: 'clamp(26px, 7vw, 84px)',
          }}
        >
          <span style={{ display: 'block' }}>Cuidado profissional,</span>
          <span style={{ display: 'block' }}>presença de família.</span>
        </motion.h1>

        {/* Linha decorativa */}
        <motion.div
          {...fadeUp(0.7)}
          style={{ width: 60, height: 2, background: '#4a8c3f', margin: '32px auto 0' }}
        />

        {/* Subtítulo */}
        <motion.p
          {...fadeUp(0.8)}
          style={{
            color: 'rgba(255,255,255,0.82)',
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(16px, 1.8vw, 20px)',
            maxWidth: 520,
            textAlign: 'center',
            lineHeight: 1.8,
            margin: '24px 0 0',
          }}
        >
          Cuidadores selecionados para idosos no Rio de Janeiro — com dedicação, técnica e respeito.
        </motion.p>

        {/* Botões */}
        <motion.div
          {...fadeUp(0.9)}
          style={{
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: 40,
          }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center"
            style={{
              display: 'block',
              background: '#4a8c3f',
              color: 'white',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 700,
              fontSize: 15,
              padding: '16px 36px',
              borderRadius: 4,
              textDecoration: 'none',
              letterSpacing: '0.5px',
              transition: 'background 0.2s ease, transform 0.2s ease',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3a7230';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#4a8c3f';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Solicitar atendimento
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center"
            style={{
              display: 'block',
              background: 'transparent',
              color: 'white',
              border: '1.5px solid rgba(255,255,255,0.6)',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 700,
              fontSize: 15,
              padding: '16px 36px',
              borderRadius: 4,
              textDecoration: 'none',
              letterSpacing: '0.5px',
              transition: 'border-color 0.2s ease, background 0.2s ease',
              boxSizing: 'border-box',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'white';
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
              e.currentTarget.style.background = 'transparent';
            }}
          >
            Conheça nossa história
          </a>
        </motion.div>
      </div>

      {/* Seta de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
