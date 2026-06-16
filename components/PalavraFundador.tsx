'use client';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PalavraFundador() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [started, setStarted] = useState(false);

  return (
    <section style={{ background: '#1a3a16' }} className="py-[64px] md:py-[96px]">
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: 'easeOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32, textAlign: 'center' }}
        >
          <span
            style={{
              color: '#a3c99b',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 600,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            Palavra do Fundador
          </span>

          <h2
            style={{
              color: '#ffffff',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              fontSize: 'clamp(24px, 5vw, 44px)',
            }}
          >
            Palavra do Fundador
          </h2>

          <p
            style={{
              color: '#c8dfc4',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 400,
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 620,
              margin: 0,
            }}
          >
            Conheça a história e os valores que guiam a CP Cuidadores Profissionais há mais de 15 anos.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.25 }}
            style={{
              width: '100%',
              maxWidth: 800,
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 24px 64px rgba(0,0,0,0.45)',
              aspectRatio: '16/9',
              position: 'relative',
              background: '#000',
            }}
          >
            {!started ? (
              <>
                <img
                  src="/arlindocpnogueira.png"
                  alt="Arlindo Costa Pinto Nogueira"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
                <button
                  onClick={() => setStarted(true)}
                  aria-label="Assistir vídeo"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: '#1a3a16',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.5)',
                      transition: 'transform 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </>
            ) : (
              <video
                autoPlay
                controls
                style={{ width: '100%', height: '100%', display: 'block', background: '#000' }}
              >
                <source src="/fundador.mp4" type="video/mp4" />
              </video>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.45 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 6 }}
          >
            <span
              style={{
                color: '#ffffff',
                fontFamily: 'var(--font-display), serif',
                fontWeight: 700,
                fontSize: 20,
                letterSpacing: '0.3px',
              }}
            >
              Arlindo Costa Pinto Nogueira
            </span>
            <span
              style={{
                color: '#a3c99b',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: '0.5px',
              }}
            >
              Fundador — CP Cuidadores Profissionais
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
