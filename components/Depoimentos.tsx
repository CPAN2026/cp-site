'use client';
import { useRef, useState } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const DEPS = [
  {
    texto: 'Encontramos na CP a tranquilidade que faltava em casa. A cuidadora se tornou parte da nossa rotina e da nossa confiança.',
    nome: 'Marina A.',
    descricao: 'Filha de paciente, Rio de Janeiro',
  },
  {
    texto: 'Profissionalismo raro. Sentimos cuidado verdadeiro com meu pai, e respeito com nossa família do primeiro dia.',
    nome: 'Ricardo M.',
    descricao: 'Filho de paciente, Rio de Janeiro',
  },
  {
    texto: 'Mais de três anos de companhia constante. Minha mãe sorri todos os dias quando a cuidadora chega.',
    nome: 'Helena C.',
    descricao: 'Filha de paciente, Rio de Janeiro',
  },
];

export default function Depoimentos() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };
  const prev = () => go(current === 0 ? DEPS.length - 1 : current - 1);
  const next = () => go(current === DEPS.length - 1 ? 0 : current + 1);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
  };

  const dep = DEPS[current];

  return (
    <section
      id="depoimentos"
      style={{ background: '#1a3a16' }}
      className="py-[64px] md:py-[96px]"
    >
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          style={{ textAlign: 'center' }}
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
              marginBottom: 20,
            }}
          >
            Depoimentos
          </span>
          <h2
            style={{
              color: 'white',
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              fontSize: 'clamp(28px, 3.5vw, 46px)',
            }}
          >
            O que dizem as famílias que cuidamos.
          </h2>

          {/* Linha decorativa */}
          <div
            style={{
              width: 48,
              height: 2,
              background: '#4a8c3f',
              margin: '24px auto 48px',
            }}
          />
        </motion.div>

        {/* Carrossel */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 16,
                maxWidth: 800,
                margin: '0 auto',
              }}
              className="px-8 py-10 md:px-16 md:py-14"
            >
              {/* Ícone de aspas */}
              <div style={{ marginBottom: 16, opacity: 0.6 }}>
                <Quote size={48} color="#4a8c3f" strokeWidth={1.5} />
              </div>

              {/* Texto */}
              <p
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.9,
                  margin: 0,
                  fontSize: 'clamp(18px, 2vw, 22px)',
                }}
              >
                {dep.texto}
              </p>

              {/* Autor */}
              <div style={{ marginTop: 32 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontWeight: 700,
                    fontSize: 17,
                    color: 'white',
                  }}
                >
                  {dep.nome}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 400,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.5)',
                    marginTop: 4,
                  }}
                >
                  {dep.descricao}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navegação */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 24,
            marginTop: 40,
          }}
        >
          <button
            onClick={prev}
            aria-label="Depoimento anterior"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <ChevronLeft size={20} color="white" />
          </button>

          <div style={{ display: 'flex', gap: 8 }}>
            {DEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Depoimento ${i + 1}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  background: i === current ? '#4a8c3f' : 'rgba(255,255,255,0.3)',
                  transition: 'background 0.2s ease',
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Próximo depoimento"
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <ChevronRight size={20} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
