"use client";

import { motion } from "framer-motion";
import { GraduationCap, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-bg">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F4B400]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F4B400]/3 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#F4B400]/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#F4B400]/5 rounded-full" />
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F4B400" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#F4B400]/30 bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium">
            <GraduationCap className="w-4 h-4" />
            Qarshi shahridagi nufuzli xususiy maktab
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Alfraganus Academy</span>
          <br />
          <span className="gold-text-gradient">Xususiy Maktab</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          1–11-sinf o'quvchilari uchun zamonaviy ta'lim va tarbiya. 
          Farzandingiz kelajagini biz bilan birga quring.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="gold-gradient text-[#0A0F1A] font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#F4B400]/25 animate-pulse-gold"
            onClick={() => document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" })}
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            Qabulga yozilish
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#F4B400]/50 text-[#F4B400] hover:bg-[#F4B400]/10 px-8 py-6 text-lg rounded-xl transition-all"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Phone className="w-5 h-5 mr-2" />
            Bog'lanish
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center text-gray-400 hover:text-[#F4B400] transition-colors"
          >
            <span className="text-sm mb-2">Ko'proq bilish</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
