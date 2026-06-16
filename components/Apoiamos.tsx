'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CARDS = [
  {
    src: '/apoio-medicos-sem-fronteiras.png',
    alt: 'Médicos Sem Fronteiras',
    width: 160,
    height: 72,
    texto:
      'Apoiamos a missão humanitária de assistência médica em zonas de conflito e emergência.',
    delay: 0,
  },
  {
    src: '/apoio-raio-x.png',
    alt: 'Raio X Domiciliar',
    width: 140,
    height: 72,
    texto:
      'Parceiros em cuidados domiciliares especializados para diagnóstico e acompanhamento.',
    delay: 0.2,
  },
];

export default function Apoiamos() {
  return (
    <section
      id="apoiamos"
      style={{ background: '#ffffff' }}
      className="py-14 md:py-[80px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span
              style={{
                display: 'inline-block',
                color: '#4a8c3f',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 500,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '3px',
                marginBottom: 16,
              }}
            >
              Responsabilidade Social
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
                color: '#1a3a16',
                fontWeight: 700,
                lineHeight: 1.2,
                margin: '0 0 16px',
                fontSize: 'clamp(28px, 3vw, 40px)',
              }}
            >
              Também apoiamos.
            </h2>
            <p
              style={{
                color: '#666',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 16,
                maxWidth: 440,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Acreditamos que cuidar vai além das famílias que atendemos.
            </p>
          </motion.div>
        </div>

        {/* Cards */}
        <div
          style={{ maxWidth: 720, margin: '56px auto 0' }}
          className="flex flex-col md:flex-row gap-8"
        >
          {CARDS.map((card) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: card.delay }}
              style={{ flex: 1 }}
            >
              <div
                style={{
                  background: '#f0f7ee',
                  borderRadius: 8,
                  padding: '40px 32px',
                  textAlign: 'center',
                  height: '100%',
                }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={card.width}
                  height={card.height}
                  style={{ objectFit: 'contain', margin: '0 auto 16px' }}
                />
                <p
                  style={{
                    color: '#555',
                    fontFamily: 'var(--font-body), sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    lineHeight: 1.7,
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
