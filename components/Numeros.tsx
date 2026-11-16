'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface Item {
  target: number;
  suffix: string;
  label: string;
}

const ITEMS: Item[] = [
  { target: 15,  suffix: '+', label: 'Anos de Experiência' },
  { target: 24,  suffix: 'h', label: 'Presença Contínua'  },
  { target: 100, suffix: '%', label: 'Dedicação e Cuidado' },
];

function Counter({ target, suffix, label }: Item) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  // Valor final no HTML inicial; a contagem é só um efeito ao entrar na tela.
  const [display, setDisplay] = useState(String(target) + suffix);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const duration = 2000;
    let startTime: number | null = null;
    let raf: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const t = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(String(Math.round(eased * target)) + suffix);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, suffix]);

  return (
    <div ref={ref} style={{ textAlign: 'center', flex: 1, padding: '0 16px' }}>
      <div
        style={{
          fontFamily: '"Playfair Display", serif',
          fontWeight: 900,
          fontSize: 'clamp(56px, 7vw, 88px)',
          letterSpacing: '-2px',
          lineHeight: 1,
          color: '#1a3a16',
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 600,
          fontSize: 11,
          color: '#4a8c3f',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          marginTop: 12,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function Numeros() {
  return (
    <section
      id="numeros"
      aria-labelledby="numeros-titulo"
      style={{ background: '#f0f7ee' }}
      className="py-14 md:py-20"
    >
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
            CP em números
          </span>
          <h2
            id="numeros-titulo"
            style={{
              color: '#1a3a16',
              fontWeight: 700,
              lineHeight: 1.2,
              margin: 0,
              fontSize: 'clamp(28px, 3vw, 40px)',
            }}
          >
            Experiência em cuidado de idosos desde 2011
          </h2>
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
            Desde 2011, a CP Cuidadores Profissionais atende famílias no Rio de Janeiro e em Niterói com cuidadores de idosos selecionados, treinados e acompanhados de perto. Os números abaixo resumem essa trajetória.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
          {ITEMS.map((item, i) => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Counter {...item} />
              {i < ITEMS.length - 1 && (
                <div
                  className="hidden md:block"
                  style={{
                    width: 1,
                    height: 80,
                    background: '#c8e6c0',
                    flexShrink: 0,
                    alignSelf: 'center',
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
