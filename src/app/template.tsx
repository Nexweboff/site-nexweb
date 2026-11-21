"use client";
import { motion } from "motion/react";

/** Transition douce entre les pages (désactivée automatiquement si mouvement réduit via CSS globale). */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
