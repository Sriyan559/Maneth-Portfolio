import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], [data-cursor-interactive]';

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    if (!supportsFinePointer.matches || reducedMotion.matches) return undefined;

    const cursor = cursorRef.current;
    document.documentElement.classList.add('custom-cursor-enabled');
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let frameId;

    const animate = () => {
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      frameId = requestAnimationFrame(animate);
    };

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.classList.add('is-visible');
      cursor.classList.toggle('is-active', Boolean(event.target.closest(INTERACTIVE_SELECTOR)));
    };

    const onPointerLeave = () => cursor.classList.remove('is-visible');
    const onPointerEnter = () => cursor.classList.add('is-visible');

    document.addEventListener('pointermove', onPointerMove);
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.documentElement.addEventListener('pointerenter', onPointerEnter);
    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      document.documentElement.classList.remove('custom-cursor-enabled');
      document.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.documentElement.removeEventListener('pointerenter', onPointerEnter);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
