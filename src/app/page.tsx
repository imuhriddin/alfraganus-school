"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Programs } from "@/components/Programs";
import { Facilities } from "@/components/Facilities";
import { Teachers } from "@/components/Teachers";
import { Admission } from "@/components/Admission";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1A]">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Facilities />
      <Teachers />
      <Admission />
      <Contact />
      <Footer />
    </main>
  );
}
