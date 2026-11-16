'use client';
import { useEffect } from 'react';

declare global {
  interface Window {
    __revealReady?: boolean;
  }
}

export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    if (!('IntersectionObserver' in window)) {
      root.classList.add('reveal-all');
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => {
      observer.observe(el);
    });
    window.__revealReady = true;
    return () => observer.disconnect();
  }, []);
}
