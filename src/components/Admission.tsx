"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, User, Phone, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitApplicationToGoogleSheets } from "@/app/actions/google-sheets";

export function Admission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [parentName, setParentName] = useState("");
  const [phone, setPhone] = useState("");
  const [grade, setGrade] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const result = await submitApplicationToGoogleSheets({
      parentName,
      phone,
      grade: grade + "-sinf",
    });
    
    setIsLoading(false);
    if (result.success) {
      setIsSubmitted(true);
      setParentName("");
      setPhone("");
      setGrade("");
    }
  };

  const handleNewApplication = () => {
    setIsSubmitted(false);
  };

  return (
    <section id="admission" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#F4B400]/30 to-transparent" />
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#F4B400]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F4B400]/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#F4B400]/10 text-[#F4B400] text-sm font-medium mb-6">
              Qabul
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Farzandingizni
              <span className="gold-text-gradient block">ro'yxatdan o'tkazing</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Ariza qoldiring — biz siz bilan 24 soat ichida bog'lanamiz. 
              Mutaxassislarimiz barcha savollaringizga javob berishadi va 
              maktabimiz haqida batafsil ma'lumot berishadi.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#F4B400]" />
                </div>
                <span className="text-gray-300">Bepul konsultatsiya</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#F4B400]" />
                </div>
                <span className="text-gray-300">Maktab sayohati tashkil etiladi</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-[#F4B400]" />
                </div>
                <span className="text-gray-300">Individual o'quv rejasi tuziladi</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-[#F4B400]/10 to-transparent rounded-3xl blur-xl" />
              <div className="relative p-8 sm:p-10 rounded-3xl bg-[#151D2E] border border-[#F4B400]/20">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-[#0A0F1A]" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-4">Arizangiz qabul qilindi!</h3>
                    <p className="text-gray-400 mb-6">
                      Tez orada siz bilan bog'lanamiz. Rahmat!
                    </p>
                    <Button
                      onClick={handleNewApplication}
                      className="gold-gradient text-[#0A0F1A] font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all"
                    >
                      Yangi ariza yuborish
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-white font-bold text-2xl mb-2">Ariza yuborish</h3>
                      <p className="text-gray-400 text-sm">Barcha maydonlarni to'ldiring</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="parent_name" className="text-gray-300 flex items-center gap-2">
                        <User className="w-4 h-4 text-[#F4B400]" />
                        Ota-ona F.I.Sh
                      </Label>
                      <Input
                        id="parent_name"
                        placeholder="Ismingizni kiriting"
                        required
                        value={parentName}
                        onChange={(e) => setParentName(e.target.value)}
                        className="bg-[#1E2A42] border-[#F4B400]/20 focus:border-[#F4B400] text-white placeholder:text-gray-500 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#F4B400]" />
                        Telefon raqam
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+998 XX XXX XX XX"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-[#1E2A42] border-[#F4B400]/20 focus:border-[#F4B400] text-white placeholder:text-gray-500 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="grade" className="text-gray-300 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-[#F4B400]" />
                        O'quvchi sinfi / yoshi
                      </Label>
                      <Select required value={grade} onValueChange={setGrade}>
                        <SelectTrigger className="bg-[#1E2A42] border-[#F4B400]/20 focus:border-[#F4B400] text-white h-12">
                          <SelectValue placeholder="Sinfni tanlang" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1E2A42] border-[#F4B400]/20">
                          <SelectItem value="1" className="text-white hover:bg-[#F4B400]/10">1-sinf</SelectItem>
                          <SelectItem value="2" className="text-white hover:bg-[#F4B400]/10">2-sinf</SelectItem>
                          <SelectItem value="3" className="text-white hover:bg-[#F4B400]/10">3-sinf</SelectItem>
                          <SelectItem value="4" className="text-white hover:bg-[#F4B400]/10">4-sinf</SelectItem>
                          <SelectItem value="5" className="text-white hover:bg-[#F4B400]/10">5-sinf</SelectItem>
                          <SelectItem value="6" className="text-white hover:bg-[#F4B400]/10">6-sinf</SelectItem>
                          <SelectItem value="7" className="text-white hover:bg-[#F4B400]/10">7-sinf</SelectItem>
                          <SelectItem value="8" className="text-white hover:bg-[#F4B400]/10">8-sinf</SelectItem>
                          <SelectItem value="9" className="text-white hover:bg-[#F4B400]/10">9-sinf</SelectItem>
                          <SelectItem value="10" className="text-white hover:bg-[#F4B400]/10">10-sinf</SelectItem>
                          <SelectItem value="11" className="text-white hover:bg-[#F4B400]/10">11-sinf</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full gold-gradient text-[#0A0F1A] font-semibold h-14 text-lg rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#F4B400]/25"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Yuborilmoqda...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          Ariza yuborish
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}