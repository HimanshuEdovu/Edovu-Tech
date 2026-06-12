"use client";

import { motion } from "framer-motion";

export default function FeatureCard({ title, description, tag }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="group relative min-h-72 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition-colors duration-300 hover:border-orange-200"
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 blur-2xl transition duration-500 group-hover:bg-orange-200" />
      <div className="absolute -bottom-12 left-8 h-28 w-28 rounded-full bg-teal-100 blur-2xl transition duration-500 group-hover:bg-teal-200" />
      <div className="relative flex h-full flex-col">
      <span className="inline-flex w-fit rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-black text-orange-700 shadow-sm">
        {tag}
      </span>
      <h3 className="mt-6 text-2xl font-black leading-tight text-slate-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
      <div className="mt-auto pt-8">
        <div className="flex items-center justify-between">
          <span className="h-10 w-10 rounded-2xl bg-slate-950 text-center text-2xl font-black leading-10 text-orange-300 shadow-lg shadow-slate-950/15 transition duration-300 group-hover:rotate-6 group-hover:bg-orange-500 group-hover:text-white">
            +
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-slate-200 via-orange-200 to-transparent" />
        </div>
      </div>
      </div>
    </motion.article>
  );
}
