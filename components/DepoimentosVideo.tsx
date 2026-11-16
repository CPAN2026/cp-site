'use client';
import { useState } from 'react';

const depoimentos = [
  { video: '/depoimento-1.mp4', poster: '/angela-russi.webp', nome: 'Angela Russi' },
  { video: '/depoimento-2.mp4', poster: '/joao-felipe.webp', nome: 'João Felipe' },
  { video: '/depoimento-3.mp4', poster: '/meysi-maia.webp', nome: 'Meysi Maia' },
];

function VideoCard({ video, poster, nome }: { video: string; poster: string; nome: string }) {
  const [started, setStarted] = useState(false);

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: 14,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        border: '1px solid #e8ede8',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000' }}>
        {!started ? (
          <>
            <img
              src={poster}
              alt={nome}
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <button
              onClick={() => setStarted(true)}
              aria-label={`Assistir depoimento de ${nome}`}
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
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#1a3a16',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.4)',
                  transition: 'transform 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
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
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>

      <div style={{ padding: '20px 24px' }}>
        <span
          style={{
            color: '#1a3a16',
            fontFamily: 'var(--font-display), serif',
            fontWeight: 700,
            fontSize: 17,
          }}
        >
          {nome}
        </span>
      </div>
    </div>
  );
}

export default function DepoimentosVideo() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-titulo"
      style={{ background: '#fafafa' }}
      className="py-[64px] md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span
            className="reveal"
            style={{
              display: 'inline-block',
              color: '#4a8c3f',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 600,
              fontSize: 12,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: 16,
            }}
          >
            Depoimentos
          </span>

          <h2
            id="depoimentos-titulo"
            className="reveal"
            style={{
              '--reveal-delay': '0.1s',
              color: '#1a3a16',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: '0 0 16px',
              fontSize: 'clamp(24px, 5vw, 44px)',
            } as React.CSSProperties}
          >
            Depoimentos de famílias atendidas pela CP
          </h2>

          <p
            className="reveal"
            style={{
              '--reveal-delay': '0.2s',
              color: '#666',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 17,
              lineHeight: 1.7,
              maxWidth: 520,
              margin: '0 auto',
            } as React.CSSProperties}
          >
            Relatos de quem já contou com o atendimento da CP Cuidadores Profissionais.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 32,
          }}
        >
          {depoimentos.map((d, i) => (
            <div
              key={d.nome}
              className="reveal"
              style={{ '--reveal-delay': `${0.15 + i * 0.15}s` } as React.CSSProperties}
            >
              <VideoCard key={d.nome} video={d.video} poster={d.poster} nome={d.nome} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
