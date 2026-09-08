import { useEffect, useState, useCallback } from 'react';

/**
 * useScrollSpy — tracks which section ID is currently in view.
 * Returns the active section ID string.
 */
export function useScrollSpy(sectionIds, options = {}) {
  const { offset = 80, threshold = 0.3 } = options;
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  const onScroll = useCallback(() => {
    const scrollY = window.scrollY + offset + 10;
    let current = sectionIds[0];
    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }
    setActiveId(current);
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return activeId;
}
