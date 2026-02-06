"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    });

    // Global click listener to intercept anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement instanceof HTMLElement) {
            lenis.scrollTo(targetElement);
          }
        }
      }
    };

    window.addEventListener('click', handleAnchorClick);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
