'use client';
import { motion } from 'framer-motion';
import { Ear, GraduationCap, Shield, Heart } from 'lucide-react';

const CARDS = [
  {
    icone: <Ear size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Presença',
    texto: 'Cada visita é uma escuta. Estar ali é, em si, parte do tratamento.',
    delay: 0,
  },
  {
    icone: <GraduationCap size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Formação',
    texto: 'Profissionais com certificação, atualização contínua e supervisão dedicada.',
    delay: 0.1,
  },
  {
    icone: <Shield size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Discrição',
    texto: 'Respeitamos a rotina e a intimidade da casa como se fossem nossas.',
    delay: 0.2,
  },
  {
    icone: <Heart size={24} color="#86efac" strokeWidth={1.75} />,
    titulo: 'Vínculo',
    texto: 'Relações duradouras entre cuidador, idoso e família — sem rotatividade.',
    delay: 0.3,
  },
];

export default function PropostaValor() {
  return (
    <section
      id="proposta-valor"
      style={{ background: '#1a3a16' }}
      className="py-16 md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span
              style={{
                display: 'inline-block',
                color: '#86efac',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 500,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '3px',
              }}
            >
              Nossa Filosofia
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <h2
              style={{
                color: 'white',
                fontWeight: 700,
                lineHeight: 1.15,
                maxWidth: 560,
                margin: '16px auto',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
              }}
            >
              Quatro princípios que orientam cada visita.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 17,
                maxWidth: 480,
                lineHeight: 1.7,
                margin: '0 auto',
              }}
            >
              Acreditamos que o cuidado de qualidade nasce da soma entre técnica e sensibilidade.
            </p>
          </motion.div>
        </div>

        {/* Grid 2x2 */}
        <div
          style={{ maxWidth: 960, margin: '0 auto' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: card.delay }}
            >
              <div
                className="p-6 md:p-9"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  height: '100%',
                  transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.09)';
                  e.currentTarget.style.borderColor = 'rgba(134,239,172,0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Círculo do ícone */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: '50%',
                    background: 'rgba(74,140,63,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}
                >
                  {card.icone}
                </div>

                {/* Título */}
                <div
                  style={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: 20,
                    color: 'white',
                    marginBottom: 12,
                  }}
                >
                  {card.titulo}
                </div>

                {/* Texto */}
                <p
                  style={{
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 400,
                    fontSize: 15,
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.8,
                    margin: 0,
                  }}
                >
                  {card.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
