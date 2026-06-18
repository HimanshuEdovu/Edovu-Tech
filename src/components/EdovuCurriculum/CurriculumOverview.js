"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

export default function CurriculumOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[40px] shadow-2xl bg-slate-100">

              {/* Add Image */}

              <Image
                src=""
                alt="Edovu Curriculum"
                width={900}
                height={900}
                className="h-full w-full object-cover"
              />

            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-8 left-8 rounded-[30px] bg-[#08111f] p-7 shadow-2xl">

              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                <BrainCircuit
                  size={32}
                  className="text-white"
                />

              </div>

              <h3 className="text-4xl font-black text-white">

                Future

              </h3>

              <p className="mt-2 text-slate-300">

                Ready Learning

              </p>

            </div>

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

              Edovu Curriculum

            </span>

            <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

              The Edovu Curriculum

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              The Edovu Curriculum is a future-ready learning framework that combines conceptual understanding, skill development, and real-world application to create meaningful learning experiences. Designed to nurture curious minds and lifelong learners, it equips students with the knowledge, competencies, and confidence needed to thrive in a rapidly evolving world.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Our curriculum moves beyond rote learning by encouraging students to question, explore, create, and reflect. Through active and engaging learning experiences, students develop critical thinking, problem-solving, collaboration, communication, and creativity—the skills needed to thrive in an ever-changing world.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Designed with clearly defined learning outcomes and progressive content development, the curriculum ensures a seamless learning journey across grades while supporting the academic, social, and emotional growth of every learner.

            </p>

          </motion.div>

        </div>

        {/* Bottom Highlights */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

              <Lightbulb
                size={30}
                className="text-orange-500"
              />

            </div>

            <h3 className="text-2xl font-black text-slate-900">

              Conceptual Understanding

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              The Edovu Curriculum is a future-ready learning framework that combines conceptual understanding, skill development, and real-world application to create meaningful learning experiences.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

              <GraduationCap
                size={30}
                className="text-orange-500"
              />

            </div>

            <h3 className="text-2xl font-black text-slate-900">

              Skill Development

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              Our curriculum moves beyond rote learning by encouraging students to question, explore, create, and reflect.

            </p>

          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg transition"
          >

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

              <BrainCircuit
                size={30}
                className="text-orange-500"
              />

            </div>

            <h3 className="text-2xl font-black text-slate-900">

              Learning Journey

            </h3>

            <p className="mt-5 leading-8 text-slate-600">

              Designed with clearly defined learning outcomes and progressive content development, the curriculum ensures a seamless learning journey across grades while supporting the academic, social, and emotional growth of every learner.

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
}