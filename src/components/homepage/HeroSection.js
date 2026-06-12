"use client";

import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, GraduationCap } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    badge: "AI Powered LMS",
    title: "Transform Every Classroom Into A Smart Learning Space",
    desc: "Deliver live classes, AI mentoring, assessments and certificates from one intelligent learning ecosystem.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=2000&q=80",
    button: "Explore LMS",
    href: "/lms",
  },
  {
    badge: "School ERP",
    title: "Manage Your Entire Institution From One Dashboard",
    desc: "Admissions, attendance, fees, communication and examinations connected through one platform.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=2000&q=80",
    button: "Explore ERP",
    href: "/services",
  },
  {
    badge: "Digital Transformation",
    title: "The Future Of Education Starts With EdovuTech",
    desc: "AI, analytics, automation and digital infrastructure designed for modern institutions.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=2000&q=80",
    button: "Get Started",
    href: "/contact",
  },
];

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        speed={1000}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.title}>
            <div
              className="relative flex h-screen items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,.96),rgba(8,17,31,.82),rgba(8,17,31,.45),rgba(8,17,31,.78))]" />
              <div className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-orange-500/25 blur-[140px]" />
              <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-[140px]" />

<div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 lg:grid-cols-[0.9fr_0.75fr]">
                  <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-200">
                    {slide.badge}
                  </span>

                  <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                    {slide.desc}
                  </p>

                  <Link
                    href={slide.href}
                    className="mt-10 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/30"
                  >
                    {slide.button}
                  </Link>
                </motion.div>

                {/* <motion.div
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9 }}
                  className="rounded-[36px] border border-white/10 bg-white/10 p-8 backdrop-blur-2xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-orange-500/20 p-3">
                      <BrainCircuit className="text-orange-300" />
                    </div>
                    <div>
                      <h3 className="font-black text-white">AI Learning Dashboard</h3>
                      <p className="text-sm text-slate-300">Live insights</p>
                    </div>
                  </div>

                  <div className="mt-8 space-y-5">
                    <div>
                      <div className="mb-2 flex justify-between text-sm text-slate-300">
                        <span>Student Progress</span><span>92%</span>
                      </div>
                      <div className="h-2 rounded-full bg-white/10">
                        <div className="h-2 w-[92%] rounded-full bg-orange-500"></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="text-teal-300"/>
                        <span className="text-white">Analytics</span>
                      </div>
                      <span className="text-teal-300">Live</span>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-orange-300"/>
                        <span className="text-white">Certificates</span>
                      </div>
                      <span className="text-orange-300">1.2K</span>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
