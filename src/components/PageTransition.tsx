import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: 'easeOut' as const,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    scale: 1.01,
    transition: {
      duration: 0.3,
      ease: 'easeIn' as const,
    },
  },
};

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        style={{ width: '100%' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
