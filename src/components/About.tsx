"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Home, Users, Award, Target, Shield } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: BookOpen,
      title: "Zamonaviy ta'lim",
      description: "Eng so'nggi o'quv dasturlari va ilg'or pedagogik usullar",
    },
    {
      icon: Home,
      title: "Yotoqxona mavjud",
      description: "Qulay va xavfsiz yashash sharoiti barcha o'quvchilar uchun",
    },
    {
      icon: Users,
      title: "Tajribali o'qituvchilar",
      description: "Yuqori malakali va g'amxo'r pedagoglar jamoasi",
    },
    {
      icon: Award,
      title: "Yuqori natijalar",
      description: "O'quvchilarimiz olimpiada va tanlovlarda g'olib bo'lishadi",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 geometric-bg opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium mb-6">
              Biz haqimizda
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white">
              Ta'lim va tarbiya
              <span className="gold-text-gradient block">beramiz</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Alfraganus Academy — bu zamonaviy ta'lim va yuqori axloqiy tarbiyani birlashtirgan 
              xususiy maktab. Biz har bir o'quvchining individual rivojlanishiga e'tibor qaratamiz 
              va ularning kelajakdagi muvaffaqiyati uchun mustahkam poydevor yaratamiz.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Maktabimizda intizom, hurmat va bilimga muhabbat — asosiy qadriyatlar. Biz nafaqat 
              akademik bilim, balki hayotiy ko'nikmalar va mustaqil fikrlash qobiliyatini ham 
              shakllantirish ustida ishlaymiz.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-[#F4B400]">
                <Target className="w-5 h-5" />
                <span className="text-white">Maqsadga yo'naltirilgan</span>
              </div>
              <div className="flex items-center gap-2 text-[#F4B400]">
                <Shield className="w-5 h-5" />
                <span className="text-white">Xavfsiz muhit</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-border-gradient">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop"
                alt="Alfraganus Academy sinfi"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">Zamonaviy sinfxonalar</p>
                <p className="text-gray-300 text-sm">Qulay va ilhomlantiruvchi ta'lim muhiti</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#F4B400]/20 rounded-full blur-2xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#151D2E]/80 border border-[#F4B400]/10 hover:border-[#F4B400]/30 transition-all card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F4B400]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#F4B400]" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
