'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const WA_URL = 'https://wa.me/19209569439';

const fade = (delay: number) => ({ '--hero-delay': `${delay}s` }) as React.CSSProperties;

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false);
  const [videoOn, setVideoOn] = useState(false);

  // O vídeo só é carregado depois do load da página e nunca para quem
  // prefere movimento reduzido — nesses casos permanece o pôster.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const start = () => setLoadVideo(true);
    if (document.readyState === 'complete') {
      start();
      return;
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  return (
    <section
      aria-labelledby="hero-titulo"
      style={{
        position: 'relative',
        minHeight: 'max(100vh, 600px)',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Pôster (imagem de LCP) */}
      <img
        src="/hero-poster.webp"
        alt=""
        width={720}
        height={1280}
        fetchPriority="high"
        decoding="async"
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

      {/* Vídeo — carregado após o load da página */}
      {loadVideo && (
        <video
          src="/hero-desktop.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          onPlaying={() => setVideoOn(true)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: videoOn ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />
      )}

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
          padding: '110px 20px 72px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Tag */}
        <div className="hero-fade" style={fade(0.3)}>
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
        </div>

        {/* H1 */}
        <h1
          id="hero-titulo"
          className="hero-rise"
          style={{
            ...fade(0),
            color: 'white',
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 600,
            lineHeight: 1.35,
            textAlign: 'center',
            margin: '0 0 16px',
            fontSize: 'clamp(15px, 2vw, 22px)',
          }}
        >
          Agência de cuidadores de idosos no Rio de Janeiro e Niterói
        </h1>

        {/* Slogan */}
        <p
          className="hero-rise"
          style={{
            ...fade(0),
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
        </p>

        {/* Linha decorativa */}
        <div
          className="hero-fade"
          style={{ ...fade(0.7), width: 60, height: 2, background: '#4a8c3f', margin: '32px auto 0' }}
        />

        {/* Subtítulo */}
        <p
          className="hero-fade"
          style={{
            ...fade(0.8),
            color: 'rgba(255,255,255,0.82)',
            fontFamily: 'var(--font-body), sans-serif',
            fontWeight: 400,
            fontSize: 'clamp(15px, 1.8vw, 20px)',
            maxWidth: 680,
            textAlign: 'center',
            lineHeight: 1.7,
            margin: '24px 0 0',
          }}
        >
          A CP Cuidadores Profissionais oferece plantões de 6, 8, 12 e 24 horas, além de acompanhamento hospitalar e cuidados pós-cirúrgicos, com atendimento no Rio de Janeiro e em Niterói.
        </p>

        {/* Botões */}
        <div
          className="hero-fade"
          style={{
            ...fade(0.9),
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
        </div>
      </div>

      {/* Seta de scroll */}
      <motion.div
        aria-hidden="true"
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
