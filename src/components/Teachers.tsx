"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function Teachers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const teachers = [
    {
      name: "Aziza Karimova",
      subject: "Matematika",
      bio: "15 yillik tajriba, Respublika olimpiadasi g'oliblari mentori",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Jamshid Rahimov",
      subject: "Fizika",
      bio: "PhD, Xalqaro loyihalarda qatnashgan, innovatsion o'qitish usullari mutaxassisi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dilnoza Saidova",
      subject: "Ingliz tili",
      bio: "IELTS 8.5, Cambridge sertifikati, 10 yillik tajriba",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Bekzod Aliyev",
      subject: "Kimyo",
      bio: "Fan nomzodi, laboratoriya tajribalari bo'yicha mutaxassis",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Gulnora Tosheva",
      subject: "Biologiya",
      bio: "Ekologiya bo'yicha loyihalar rahbari, 12 yillik pedagogik staj",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Sardor Nazarov",
      subject: "Informatika",
      bio: "IT kompaniyalarda tajriba, dasturlash olimpiadasi treneri",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    },
  ];

  return (
    <section id="teachers" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 geometric-bg opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium mb-6">
            Bizning jamoa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Tajribali <span className="gold-text-gradient">o'qituvchilar</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Yuqori malakali va g'amxo'r pedagoglar jamoasi farzandlaringiz ta'limi uchun javobgar
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative p-6 rounded-2xl bg-[#151D2E] border border-[#F4B400]/10 hover:border-[#F4B400]/30 transition-all card-hover">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-[#F4B400]/30">
                      <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full gold-gradient flex items-center justify-center">
                      <svg className="w-3 h-3 text-[#0A0F1A]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold text-lg truncate">{teacher.name}</h3>
                    <p className="text-[#F4B400] text-sm font-medium mb-2">{teacher.subject}</p>
                    <p className="text-gray-400 text-sm line-clamp-2">{teacher.bio}</p>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-12 h-12 text-[#F4B400]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
