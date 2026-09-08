import { useState, useEffect, useRef } from 'react';

/**
 * useTypewriter — cycles through an array of strings with a typing + deleting effect.
 */
export function useTypewriter(strings = [], { typingSpeed = 80, deletingSpeed = 45, pauseMs = 1600 } = {}) {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const timeout = useRef(null);

  useEffect(() => {
    if (!strings.length) return;

    const current = strings[index % strings.length];

    const tick = () => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          timeout.current = setTimeout(() => setIsDeleting(true), pauseMs);
          return;
        }
        timeout.current = setTimeout(tick, typingSpeed);
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % strings.length);
          return;
        }
        timeout.current = setTimeout(tick, deletingSpeed);
      }
    };

    timeout.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout.current);
  }, [displayed, isDeleting, index, strings, typingSpeed, deletingSpeed, pauseMs]);

  return displayed;
}
