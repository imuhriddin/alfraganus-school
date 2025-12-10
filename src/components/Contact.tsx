"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Send, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon raqamlar",
      details: ["+998 91 215 22 11", "+998 97 315 22 11"],
      action: "tel:+998912152211",
    },
    {
      icon: MapPin,
      title: "Manzil",
      details: ["Qarshi shahri, Paxtazor-1 MFY,", "Paxtazor mitti dahasi, 99-uy"],
      action: "https://maps.google.com",
    },
    {
      icon: Clock,
      title: "Ish vaqti",
      details: ["Dushanba - Shanba", "08:00 - 18:00"],
      action: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-[#0D1320]" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4B400]/30 to-transparent" />
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-[#F4B400]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#F4B400]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium mb-6">
            Aloqa
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Biz bilan <span className="gold-text-gradient">bog'laning</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Savollaringiz bormi? Biz doimo yordam berishga tayyormiz
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#151D2E] border border-[#F4B400]/10 hover:border-[#F4B400]/30 transition-all card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#F4B400]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-7 h-7 text-[#F4B400]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400">{detail}</p>
                    ))}
                  </div>
                  {item.action && (
                    <a
                      href={item.action}
                      className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center hover:bg-[#F4B400]/20 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-[#F4B400]" />
                    </a>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                asChild
                className="flex-1 gold-gradient text-[#0A0F1A] font-semibold h-14 text-lg rounded-xl hover:opacity-90 transition-all"
              >
                <a href="tel:+998912152211">
                  <Phone className="w-5 h-5 mr-2" />
                  Qo'ng'iroq qilish
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1 border-[#F4B400]/50 text-[#F4B400] hover:bg-[#F4B400]/10 h-14 text-lg rounded-xl"
              >
                <a href="https://t.me/alfraganus_academy" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5 mr-2" />
                  Telegram
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden gold-border-gradient h-[400px] lg:h-[500px]">
              <div className="absolute inset-0 bg-[#151D2E] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#F4B400]/10 flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-10 h-10 text-[#F4B400]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Bizning manzil</h3>
                  <p className="text-gray-400 mb-6">
                    Qarshi shahri, Paxtazor-1 MFY,<br />
                    Paxtazor mitti dahasi, 99-uy
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#F4B400]/50 text-[#F4B400] hover:bg-[#F4B400]/10"
                  >
                    <a
                      href="https://maps.google.com/?q=Qarshi,Uzbekistan"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Xaritada ko'rish
                    </a>
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F4B400" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#map-grid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
