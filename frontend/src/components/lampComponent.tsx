"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/3d-Card/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ fontSize: '2rem',opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-7xl font-bold mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        SPAM  DETECTOR
      </motion.h1>
    </LampContainer>
  );
}
