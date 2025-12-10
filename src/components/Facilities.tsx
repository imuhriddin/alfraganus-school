"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Home, MonitorPlay, Dumbbell, BookOpen } from "lucide-react";

export function Facilities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const facilities = [
    {
      icon: Home,
      title: "Yotoqxona",
      description: "Qulay va xavfsiz yashash joyi. Har bir xona zamonaviy mebel bilan jihozlangan. 24 soatlik nazorat va g'amxo'rlik.",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
    },
    {
      icon: MonitorPlay,
      title: "Sinfxonalar",
      description: "Zamonaviy texnologiyalar bilan jihozlangan keng va yorug' sinfxonalar. Interaktiv doskalar va multimediya vositalari.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop",
    },
    {
      icon: Dumbbell,
      title: "Sport maydonchalari",
      description: "Katta sport zali, futbol va basketbol maydonchalari. Professional murabbiylar rahbarligida sport mashg'ulotlari.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    },
    {
      icon: BookOpen,
      title: "Kutubxona",
      description: "Boy kitoblar fondi va zamonaviy o'quv xonasi. Elektron kitoblar va ilmiy manbalar. Tinch o'qish uchun qulay muhit.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="facilities" className="py-20 md:py-32 relative overflow-hidden bg-[#0D1320]" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#F4B400]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium mb-6">
            Infratuzilma
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Zamonaviy <span className="gold-text-gradient">imkoniyatlar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            O'quvchilar uchun barcha zarur shart-sharoitlar yaratilgan
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group relative rounded-2xl overflow-hidden card-hover"
            >
              <div className="absolute inset-0">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A] via-[#0A0F1A]/70 to-transparent" />
              </div>
              
              <div className="relative p-8 min-h-[320px] flex flex-col justify-end">
                <div className="w-14 h-14 rounded-xl bg-[#F4B400]/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-[#F4B400]/30">
                  <facility.icon className="w-7 h-7 text-[#F4B400]" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-3">{facility.title}</h3>
                <p className="text-gray-300">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
