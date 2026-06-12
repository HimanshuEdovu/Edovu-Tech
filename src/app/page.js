"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/homepage/HeroSection";
import ServicesSection from "@/components/homepage/ServicesSection";
import LmsSection from "@/components/homepage/LmsSection";
import ResourcesSection from "@/components/homepage/ResourcesSection";
import BlogSection from "@/components/homepage/BlogSection";
import LMSShowcaseSection from "@/components/homepage/LmsDetailSection";
import AiFeaturesSection from "@/components/homepage/AiFeaturesSection";
import TestimonialsSection from "@/components/homepage/TestimonialsSection";
import DemoModal from "@/components/DemoModal";
import { useState } from "react";

export default function Home() {
  const [openDemo, setOpenDemo] = useState(false);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar openDemo={() => setOpenDemo(true)} />
      <main>
        <HeroSection />
        <ServicesSection />
        <LMSShowcaseSection />
        <LmsSection />
        <AiFeaturesSection />
        <ResourcesSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <DemoModal
        open={openDemo}
        onClose={() => setOpenDemo(false)}
      />
      <Footer />
    </div>
  );
}
