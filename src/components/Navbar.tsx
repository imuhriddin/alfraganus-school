"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Bosh sahifa", href: "#" },
    { label: "Biz haqimizda", href: "#about" },
    { label: "Dasturlar", href: "#programs" },
    { label: "Imkoniyatlar", href: "#facilities" },
    { label: "O'qituvchilar", href: "#teachers" },
    { label: "Aloqa", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0F1A]/95 backdrop-blur-lg border-b border-[#F4B400]/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-[#0A0F1A]" />
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-lg block leading-none">Alfraganus</span>
                <span className="text-[#F4B400] text-xs">Academy</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-[#F4B400] transition-colors text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Button
                size="sm"
                className="hidden sm:flex gold-gradient text-[#0A0F1A] font-semibold rounded-lg hover:opacity-90"
                onClick={() => document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" })}
              >
                Qabulga yozilish
              </Button>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center"
              >
                <Menu className="w-5 h-5 text-[#F4B400]" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[#0A0F1A] border-l border-[#F4B400]/10"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[#0A0F1A]" />
                    </div>
                    <span className="text-white font-bold text-lg">Alfraganus</span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-10 h-10 rounded-lg bg-[#F4B400]/10 flex items-center justify-center"
                  >
                    <X className="w-5 h-5 text-[#F4B400]" />
                  </button>
                </div>

                <nav className="space-y-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-3 px-4 rounded-lg text-gray-300 hover:text-[#F4B400] hover:bg-[#F4B400]/5 transition-all text-lg"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-10">
                  <Button
                    className="w-full gold-gradient text-[#0A0F1A] font-semibold h-12 rounded-xl hover:opacity-90"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.getElementById("admission")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Qabulga yozilish
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
