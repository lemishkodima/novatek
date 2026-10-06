'use client';

import { useEffect } from 'react';
import { Analytics, track } from '@vercel/analytics/react';
import { usePathname } from 'next/navigation';

export default function ClientEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.location.hash) return;
    const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
    if (!target) return;
    window.requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  }, [pathname]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');

    if (reducedMotion || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -48px' },
      );
      targets.forEach((target) => observer.observe(target));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[data-analytics]');
      if (!link) return;
      track('cta_click', {
        label: link.dataset.analytics ?? link.textContent?.trim() ?? 'unknown',
        destination: link.href.startsWith('mailto:')
          ? 'email'
          : link.href.startsWith('tel:')
            ? 'phone'
            : 'page',
      });
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return <Analytics />;
}
