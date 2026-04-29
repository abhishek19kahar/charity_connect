'use client'
import React from 'react'
import { motion } from 'framer-motion'

export const SuccessAnimation = () => {
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const tickVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut", delay: 0.2 }
    }
  }

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        className="relative w-24 h-24"
        initial="hidden"
        animate="visible"
        variants={circleVariants}
      >
        <motion.div 
          className="absolute inset-0 bg-green-500 rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          initial="hidden"
          animate="visible"
        >
          <motion.path
            d="M20,50 L40,70 L80,30"
            fill="none"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={tickVariants}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

