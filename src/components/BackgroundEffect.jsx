import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Subtle animated background: CSS blobs + grid.
 * No heavy WebGL — performance first.
 */
export default function BackgroundEffect() {
  return (
    <>
      {/* Fixed grid overlay */}
      <div className="bg-grid" aria-hidden="true" />

      {/* Animated blobs */}
      <div aria-hidden="true">
        <motion.div
          className="bg-blob blob-1"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="bg-blob blob-2"
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
        <motion.div
          className="bg-blob blob-3"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
        />
      </div>
    </>
  );
}
