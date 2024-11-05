"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaBoxOpen, FaCogs, FaChartLine } from "react-icons/fa";
import { LampContainer } from "../ui/lamp";

export function SubSection() {
  const sections = [
    {
      number: 1,
      title: "Know Your Product",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business...",
      icon: FaBoxOpen,
    },
    {
      number: 2,
      title: "Know Your Machine",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business...",
      icon: FaCogs,
    },
    {
      number: 3,
      title: "Know Your Business",
      description:
        "At Nessco India, our Knowledge Center is your ultimate resource for mastering every aspect of your business...",
      icon: FaChartLine,
    },
  ];

  return (
    <div className="h-full w-full">
      <LampContainer>
        <motion.h1
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-300 py-4 bg-clip-text text-center text-xl font-bold tracking-tight text-transparent md:text-5xl"
        >
          Insight. Precision. Growth.
        </motion.h1>
        <p className="text-sm font-regular text-center w-2/3 text-white">
          At Nessco India, our Knowledge Center is your ultimate resource for
          mastering every aspect of your business. Whether it's understanding
          the nuances of your product, optimizing your machinery, or driving
          business growth, we provide the insights and tools you need to
          succeed. Our focus is on empowering you with the knowledge to make
          informed decisions, streamline operations, and enhance your
          competitive edge in the market.
        </p>
      </LampContainer>
    </div>
  );
}
