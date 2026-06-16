'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Moon, Sun, Sunset, Building2, Activity, Brain } from 'lucide-react';

const CARDS = [
  {
    icone: <Moon size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidador 24 horas',
    texto: 'Acompanhamento contínuo com escalas planejadas — dia, noite e madrugada — sem interrupções na rotina do idoso.',
  },
  {
    icone: <Sun size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidador diurno',
    texto: 'Suporte durante o dia para higiene, alimentação, medicação e atividades de estímulo cognitivo.',
  },
  {
    icone: <Sunset size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidador noturno',
    texto: 'Vigilância tranquila ao longo da noite, com atenção a sono, hidratação e segurança.',
  },
  {
    icone: <Building2 size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Acompanhante hospitalar',
    texto: 'Presença atenta em internações e consultas, mediando o contato com a equipe médica.',
  },
  {
    icone: <Activity size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidados pós-cirúrgicos',
    texto: 'Recuperação assistida em casa, com curativos, mobilização e adesão ao protocolo médico.',
  },
  {
    icone: <Brain size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidados em demências',
    texto: 'Profissionais preparados para Alzheimer, Parkinson e outras condições neurodegenerativas.',
  },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

function Card({ icone, titulo, texto }: { icone: React.ReactNode; titulo: string; texto: string }) {
  return (
    <div
      style={{
        position: 'relative',
        background: 'white',
        borderRadius: 12,
        padding: 32,
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget.children[0] as HTMLElement).style.background = '#4a8c3f';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.14)';
        e.currentTarget.style.transform = 'translateY(-6px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget.children[0] as HTMLElement).style.background = '#e8f4e6';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Elemento decorativo — children[0] */}
      <div
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          width: 48,
          height: 4,
          background: '#e8f4e6',
          borderRadius: 2,
          transition: 'background 0.3s ease',
        }}
      />

      {/* Ícone em círculo */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: '#e8f4e6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}
      >
        {icone}
      </div>

      {/* Título */}
      <div
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 700,
          fontSize: 17,
          color: '#1a3a16',
          marginBottom: 10,
        }}
      >
        {titulo}
      </div>

      {/* Texto */}
      <p
        style={{
          fontFamily: 'var(--font-body), sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#666',
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        {texto}
      </p>
    </div>
  );
}

export default function Servicos() {
  return (
    <section
      id="servicos"
      style={{ background: '#ffffff' }}
      className="py-[64px] md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho — centralizado */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <FadeUp delay={0}>
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
              Nossos Serviços
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2
              style={{
                color: '#1a3a16',
                fontWeight: 700,
                lineHeight: 1.15,
                margin: '0 auto 20px',
                maxWidth: 560,
                fontSize: 'clamp(32px, 4vw, 52px)',
              }}
            >
              Cuidado sob medida para cada momento.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              style={{
                color: '#555',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 18,
                maxWidth: 560,
                lineHeight: 1.7,
                margin: '0 auto',
              }}
            >
              Avaliamos cada caso pessoalmente e desenhamos um plano que respeita a história, as preferências e o ritmo de quem será cuidado.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <FadeUp key={card.titulo} delay={0.1 + i * 0.1}>
              <Card {...card} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
