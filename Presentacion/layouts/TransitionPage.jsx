import React from 'react'
import { motion } from 'framer-motion'

export default function TransitionPage({ children }) {
  return (
    <motion.div
      exit={{ opacity: 0, transition: { duration: 2 } }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
