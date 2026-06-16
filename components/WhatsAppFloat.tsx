'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WA_URL = 'https://wa.me/5521985549320';

export default function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.4, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            style={{
              background: '#1a3a16',
              color: 'white',
              fontFamily: 'var(--font-body), sans-serif',
              fontSize: 13,
              padding: '8px 14px',
              borderRadius: 4,
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
            }}
          >
            Falar pelo WhatsApp
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botão circular */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        animate={
          hovered
            ? { scale: 1.08, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }
            : { scale: 1, boxShadow: '0 4px 20px rgba(0,0,0,0.25)' }
        }
        transition={{ duration: 0.2 }}
        style={{
          width: 60,
          height: 60,
          borderRadius: '50%',
          background: '#1a3a16',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          flexShrink: 0,
        }}
      >
        <MessageCircle size={28} color="white" strokeWidth={1.75} />
      </motion.a>
    </motion.div>
  );
}
