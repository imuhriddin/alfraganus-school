"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Blocks, BookMarked, Trophy, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToAdmission = () => {
    const element = document.getElementById("admission");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const programs = [
    {
      icon: Blocks,
      title: "Boshlang'ich sinflar",
      grades: "1–4 sinflar",
      description:
        "Bilim asoslarini mustahkamlash, o'qish, yozish va hisoblash ko'nikmalarini rivojlantirish. Bolalarning qiziquvchanligi va ijodkorligini qo'llab-quvvatlash.",
      features: ["O'yinga asoslangan ta'lim", "Ingliz tili asoslari", "Kreativ darslar", "Individual yondashuv"],
      color: "from-emerald-500/20 to-emerald-500/5",
    },
    {
      icon: BookMarked,
      title: "O'rta bosqich",
      grades: "5–9 sinflar",
      description:
        "Chuqur bilim va analitik fikrlashni rivojlantirish. Fan va texnologiya yo'nalishida kuchli poydevor. Olimpiadalarga tayyorgarlik.",
      features: ["Chuqur fanlar", "Laboratoriya mashg'ulotlari", "Olimpiada tayyorgarligi", "Loyiha ishlari"],
      color: "from-blue-500/20 to-blue-500/5",
    },
    {
      icon: Trophy,
      title: "Oliy bosqich",
      grades: "10–11 sinflar",
      description:
        "Oliy ta'limga tayyorgarlik. Yo'nalishli ta'lim: aniq va tabiiy fanlar, ijtimoiy-gumanitar yo'nalishlar. DTM tayyorgarligi.",
      features: ["DTM tayyorgarlik", "Kasbga yo'naltirish", "Universitetlar bilan hamkorlik", "Mentorlik dasturi"],
      color: "from-[#F4B400]/20 to-[#F4B400]/5",
    },
  ];

  return (
    <section id="programs" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4B400]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4B400]/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium mb-6">
            Ta'lim dasturlari
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Barcha <span className="gold-text-gradient">bosqichlar</span> uchun
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Har bir yosh guruhiga mos keluvchi maxsus o'quv dasturlari va individual rivojlanish rejalari
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-b ${program.color} rounded-3xl blur-xl group-hover:blur-2xl transition-all`} />
              <div className="relative p-8 rounded-3xl bg-[#151D2E] border border-[#F4B400]/10 hover:border-[#F4B400]/30 transition-all h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-[#F4B400]/10 flex items-center justify-center mb-6">
                  <program.icon className="w-7 h-7 text-[#F4B400]" />
                </div>
                
                <div className="mb-4">
                  <span className="text-[#F4B400] text-sm font-medium">{program.grades}</span>
                  <h3 className="text-white font-bold text-2xl mt-1">{program.title}</h3>
                </div>
                
                <p className="text-gray-400 mb-6 flex-grow">{program.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#F4B400]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant="outline"
                  className="w-full border-[#F4B400]/30 text-[#F4B400] hover:bg-[#F4B400]/10 group/btn"
                  onClick={scrollToAdmission}
                >
                  Batafsil
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}