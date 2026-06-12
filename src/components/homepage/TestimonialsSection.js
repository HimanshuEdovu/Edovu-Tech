"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Principal",
    company: "Delhi Public School",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
    review:
      "Edovu LMS transformed our digital classrooms with AI-powered learning and analytics. Student engagement and teacher productivity have improved dramatically.",
  },
  {
    name: "Priya Mehta",
    role: "Academic Director",
    company: "Bright Future Academy",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    review:
      "From assessments to attendance and learning insights, everything is available in one intuitive platform. Implementation was seamless.",
  },
  {
    name: "Amit Verma",
    role: "Training Head",
    company: "SkillHub Institute",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
    review:
      "The AI automation and reporting capabilities save hours every week while providing a much better learning experience for our students.",
  },
];

const stats = [
  { value: "35K+", label: "Active Learners" },
  { value: "120+", label: "Institutions" },
  { value: "98%", label: "Satisfaction" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-5 py-14 sm:px-6 lg:px-8">
<motion.div
    animate={{
        y: [-20, 20, -20],
        x: [-10, 15, -10],
    }}
    transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
    }}
    className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]"
/>      <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
<motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
    }}
    className="mx-auto max-w-3xl text-center"
>          <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-black text-white lg:text-6xl">
            Trusted By Modern
            <br />
            Educational Institutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Discover how schools, colleges and training institutes are building
            smarter digital learning experiences with Edovu LMS.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="mt-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.name}>
              <div className="grid items-center gap-10 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:grid-cols-[320px_1fr]">
                <div className="relative flex justify-center">
                  <div className="absolute bottom-6 left-10 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-teal-500 shadow-xl">
                    <Quote className="h-8 w-8 text-white" />
                  </div>

                  <div className="overflow-hidden rounded-full border-4 border-orange-500/30">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={280}
                      height={280}
                      className="h-[280px] w-[280px] object-cover"
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-4 flex gap-1 text-orange-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-2xl leading-10 text-white">
                    "{item.review}"
                  </p>

                  <div className="mt-8">
                    <h3 className="text-2xl font-black text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-orange-300">
                      {item.role} • {item.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
            >
              <h3 className="text-5xl font-black bg-gradient-to-r from-orange-400 to-teal-400 bg-clip-text text-transparent">
                {s.value}
              </h3>
              <p className="mt-3 text-slate-300">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
