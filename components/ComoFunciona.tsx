'use client';
import { motion } from 'framer-motion';
import { Phone, ClipboardList, UserCheck, Heart } from 'lucide-react';

const WA_URL = 'https://wa.me/19209569439';

const ETAPAS = [
  {
    icone: <Phone size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Primeiro contato',
    texto: 'Você nos chama pelo WhatsApp e nos conta sobre o caso do seu familiar.',
    delay: 0,
    isLeft: true,
  },
  {
    icone: <ClipboardList size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Avaliação do caso',
    texto: 'Analisamos as necessidades específicas: rotina, condição de saúde e preferências.',
    delay: 0.2,
    isLeft: false,
  },
  {
    icone: <UserCheck size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Seleção do cuidador',
    texto: 'Indicamos o profissional mais adequado ao perfil do idoso e da família.',
    delay: 0.4,
    isLeft: true,
  },
  {
    icone: <Heart size={24} color="#4a8c3f" strokeWidth={1.75} />,
    titulo: 'Acompanhamento contínuo',
    texto: 'Supervisionamos o cuidado e estamos disponíveis para ajustes a qualquer momento.',
    delay: 0.6,
    isLeft: false,
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      style={{ background: '#f8f8f6' }}
      className="py-16 md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        {/* Cabeçalho */}
        <div style={{ textAlign: 'center', marginBottom: 0 }}>
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
                fontWeight: 600,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '3px',
                marginBottom: 16,
              }}
            >
              Como Funciona
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
                lineHeight: 1.15,
                margin: 0,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
              }}
            >
              Do primeiro contato ao cuidado contínuo.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          >
            <div
              style={{
                width: 48,
                height: 2,
                background: '#4a8c3f',
                margin: '20px auto 56px',
              }}
            />
          </motion.div>
        </div>

        {/* Linha do tempo — desktop */}
        <div
          className="hidden md:block"
          style={{ position: 'relative', maxWidth: 800, margin: '0 auto', padding: '0 24px' }}
        >
          {/* Linha vertical central */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              width: 2,
              top: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, #4a8c3f 0%, #c8e6c0 100%)',
              zIndex: 0,
            }}
          />

          {ETAPAS.map((etapa) => (
            <motion.div
              key={etapa.titulo}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: etapa.delay }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: 64 }}>
                {/* Lado esquerdo */}
                <div
                  style={{
                    flex: 1,
                    paddingRight: etapa.isLeft ? 48 : 0,
                    textAlign: etapa.isLeft ? 'right' : 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: etapa.isLeft ? 'flex-end' : 'flex-start',
                  }}
                >
                  {etapa.isLeft && (
                    <>
                      <div
                        style={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: 20,
                          color: '#1a3a16',
                          marginBottom: 8,
                        }}
                      >
                        {etapa.titulo}
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontWeight: 400,
                          fontSize: 15,
                          color: '#666',
                          lineHeight: 1.8,
                          maxWidth: 280,
                          margin: 0,
                        }}
                      >
                        {etapa.texto}
                      </p>
                    </>
                  )}
                </div>

                {/* Círculo central */}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: 'white',
                    border: '2px solid #4a8c3f',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {etapa.icone}
                </div>

                {/* Lado direito */}
                <div
                  style={{
                    flex: 1,
                    paddingLeft: !etapa.isLeft ? 48 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  {!etapa.isLeft && (
                    <>
                      <div
                        style={{
                          fontFamily: '"Playfair Display", serif',
                          fontWeight: 700,
                          fontSize: 20,
                          color: '#1a3a16',
                          marginBottom: 8,
                        }}
                      >
                        {etapa.titulo}
                      </div>
                      <p
                        style={{
                          fontFamily: 'var(--font-body), sans-serif',
                          fontWeight: 400,
                          fontSize: 15,
                          color: '#666',
                          lineHeight: 1.8,
                          maxWidth: 280,
                          margin: 0,
                        }}
                      >
                        {etapa.texto}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Linha do tempo — mobile (coluna única) */}
        <div className="flex md:hidden flex-col gap-10">
          {ETAPAS.map((etapa) => (
            <motion.div
              key={etapa.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: etapa.delay }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'white',
                  border: '2px solid #4a8c3f',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                }}
              >
                {etapa.icone}
              </div>
              <div
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#1a3a16',
                  marginBottom: 8,
                }}
              >
                {etapa.titulo}
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.8,
                  maxWidth: 300,
                  margin: 0,
                }}
              >
                {etapa.texto}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: '#4a8c3f',
              color: 'white',
              borderRadius: 4,
              padding: '14px 36px',
              fontFamily: 'var(--font-body), sans-serif',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#3a7230')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#4a8c3f')}
          >
            Iniciar atendimento pelo WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
