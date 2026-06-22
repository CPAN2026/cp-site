'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const WA_URL = 'https://wa.me/5521985549320';

function useFadeRef() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return { ref, inView };
}

export default function QuemSomos() {
  const { ref: refImg, inView: inViewImg } = useFadeRef();
  const { ref: refText, inView: inViewText } = useFadeRef();

  return (
    <section
      id="quem-somos"
      style={{ background: '#ffffff' }}
      className="py-[64px] md:py-[96px]"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex flex-col-reverse md:flex-row gap-12 md:gap-16 items-center">

          {/* Imagem */}
          <motion.div
            ref={refImg}
            initial={{ opacity: 0, x: -40 }}
            animate={inViewImg ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: 'easeOut' }}
            style={{ flex: 1, width: '100%', position: 'relative', zIndex: 0 }}
          >
            {/* Elemento decorativo atrás da imagem — oculto no mobile para evitar overflow */}
            <div
              className="hidden md:block"
              style={{
                position: 'absolute',
                top: -16,
                left: -16,
                width: '100%',
                height: '100%',
                border: '2px solid #4a8c3f',
                borderRadius: 2,
                zIndex: -1,
                opacity: 0.3,
              }}
            />

            {/* Imagem */}
            <div
              className="h-[320px] md:h-[520px]"
              style={{
                position: 'relative',
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                background: '#ffffff',
              }}
            >
              <img
                src="/quem-somos.jpg"
                alt="Cuidadora CP com idoso"
                width={600}
                height={520}
                style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            ref={refText}
            initial={{ opacity: 0, x: 40 }}
            animate={inViewText ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.2 }}
            className="text-center md:text-left items-center md:items-start"
            style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 }}
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
              }}
            >
              Quem Somos
            </span>

            <h2
              style={{
                color: '#1a3a16',
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                fontSize: 'clamp(24px, 5vw, 52px)',
              }}
            >
              Mais de 15 anos cuidando de quem você mais ama.
            </h2>

            <p
              style={{
                color: '#444',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Fundada em 9 de novembro de 2011, a CP Cuidadores Profissionais nasceu da convicção de que cuidar é, antes de tudo, um ato de presença. Em mais de 15 anos, formamos uma rede cuidadosamente selecionada de profissionais dedicados a oferecer ao idoso a dignidade, o conforto e a atenção que ele merece.
            </p>

            <p
              style={{
                color: '#444',
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              Atuamos no Rio de Janeiro com supervisão constante, formação contínua e o compromisso de tratar cada família com a mesma dedicação que gostaríamos de receber.
            </p>

            <div
              style={{
                background: '#f0f7ee',
                borderLeft: '4px solid #4a8c3f',
                padding: '20px 24px',
                borderRadius: '0 8px 8px 0',
              }}
            >
              <p
                style={{
                  color: '#1a3a16',
                  fontFamily: 'var(--font-display), serif',
                  fontWeight: 400,
                  fontStyle: 'italic',
                  fontSize: 20,
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                "Cuidamos do seu como cuidaríamos do nosso."
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#4a8c3f',
                  color: 'white',
                  borderRadius: 6,
                  padding: '14px 32px',
                  fontFamily: 'var(--font-body), sans-serif',
                  fontWeight: 700,
                  fontSize: 15,
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#3a7230')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#4a8c3f')}
              >
                Falar com a CP
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
