"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  BrainCircuit,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export default function LMSShowcaseSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-5 py-14 sm:px-6 lg:px-8">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">

              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
                alt="Students Learning"
                width={800}
                height={700}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-[28px] border border-orange-400/20 bg-[#0f1729]/90 p-6 backdrop-blur-2xl shadow-2xl">

              <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                <BrainCircuit size={32} className="text-white" />

              </div>

              <h2 className="text-4xl font-black text-white">

                AI

              </h2>

              <p className="mt-1 text-sm text-slate-300">

                Powered Learning Experience

              </p>

            </div>

          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

              Smart LMS Platform

            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight text-white lg:text-6xl">

              Learn Smarter.
              <br />
              Teach Better.
              <br />
              Grow Faster.

            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">

              EduvuTech combines AI-powered learning, interactive classrooms,
              assessments, analytics and automation into one seamless
              ecosystem, helping schools, colleges and coaching institutes
              deliver exceptional digital education experiences.

            </p>

            {/* Feature Box */}

            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">

              <div className="grid gap-5">

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400">

                    <BookOpen size={22} />

                  </div>

                  <div>

                    <h4 className="font-bold text-white">

                      Unlimited Courses & Live Classes

                    </h4>

                    <p className="text-sm text-slate-400">

                      One platform for every learning experience.

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-teal-500/10 p-3 text-teal-400">

                    <GraduationCap size={22} />

                  </div>

                  <div>

                    <h4 className="font-bold text-white">

                      Student Progress Tracking

                    </h4>

                    <p className="text-sm text-slate-400">

                      Analytics, reports and personalized insights.

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-orange-500/10 p-3 text-orange-400">

                    <Sparkles size={22} />

                  </div>

                  <div>

                    <h4 className="font-bold text-white">

                      AI Teacher & AI Mentor

                    </h4>

                    <p className="text-sm text-slate-400">

                      24/7 intelligent assistance for every learner.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}