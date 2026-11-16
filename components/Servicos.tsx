'use client';
import { Moon, Sun, Sunset, Building2, Activity, Brain } from 'lucide-react';

const CARDS = [
  {
    id: 'servico-24-horas',
    icone: <Moon size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidador de idosos 24 horas',
    texto: 'Acompanhamento contínuo com escalas planejadas para períodos diurnos, noturnos e de madrugada, ajudando a manter a rotina de cuidado ao longo das 24 horas.',
  },
  {
    id: 'servico-diurno',
    icone: <Sun size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidador de idosos diurno',
    texto: 'Apoio durante o dia em atividades de rotina, como higiene, alimentação, organização da medicação e estímulo cognitivo, conforme as necessidades definidas para cada caso.',
  },
  {
    id: 'servico-noturno',
    icone: <Sunset size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidador de idosos noturno',
    texto: 'Presença durante a noite, com atenção ao sono, à hidratação, à segurança e às necessidades que possam surgir nesse período.',
  },
  {
    id: 'servico-acompanhante-hospitalar',
    icone: <Building2 size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Acompanhante hospitalar para idosos',
    texto: 'Acompanhamento durante internações, exames e consultas, oferecendo companhia ao idoso e apoio na comunicação da família com a equipe responsável.',
  },
  {
    id: 'servico-pos-cirurgico',
    icone: <Activity size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidados pós-cirúrgicos em casa',
    texto: 'Suporte na recuperação em casa, seguindo as orientações do protocolo médico e auxiliando na mobilidade e na rotina de cuidados indicada para o período.',
  },
  {
    id: 'servico-alzheimer-demencias',
    icone: <Brain size={36} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Cuidado para idosos com Alzheimer e outras demências',
    texto: 'Cuidado adaptado à rotina de idosos com Alzheimer, Parkinson e outras condições neurodegenerativas, com profissionais preparados para necessidades específicas.',
  },
];

function FadeUp({ children, delay = 0, id }: { children: React.ReactNode; delay?: number; id?: string }) {
  return (
    <div id={id} className="reveal" style={{ '--reveal-delay': `${delay}s` } as React.CSSProperties}>
      {children}
    </div>
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
      <h3
        style={{
          fontFamily: 'var(--font-display), serif',
          fontWeight: 700,
          fontSize: 17,
          color: '#1a3a16',
          marginBottom: 10,
        }}
      >
        {titulo}
      </h3>

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
      aria-labelledby="servicos-titulo"
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
              id="servicos-titulo"
              style={{
                color: '#1a3a16',
                fontWeight: 700,
                lineHeight: 1.15,
                margin: '0 auto 20px',
                maxWidth: 760,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
              }}
            >
              Serviços de cuidadores de idosos no Rio de Janeiro e Niterói
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p
              style={{
                color: '#555',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 18,
                maxWidth: 720,
                lineHeight: 1.7,
                margin: '0 auto',
              }}
            >
              A CP avalia cada caso pessoalmente para indicar o formato de atendimento mais adequado à rotina do idoso e da família. Há opções de cuidado diurno, noturno e 24 horas, além de acompanhamento hospitalar, cuidados pós-cirúrgicos e suporte para pessoas com demências.
            </p>
          </FadeUp>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <FadeUp key={card.id} id={card.id} delay={0.1 + i * 0.1}>
              <Card icone={card.icone} titulo={card.titulo} texto={card.texto} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
