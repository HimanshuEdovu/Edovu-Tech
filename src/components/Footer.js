"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navItems } from "@/data/site";

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-white/10 bg-[#06101e] px-5 py-12 text-slate-300 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
        <div>
          <p className="text-2xl font-black text-white">EDOVUTech</p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            A modern ed tech company helping schools, colleges, coaching
            centers, and training teams run learning, academics, and operations
            from one intelligent platform.
          </p>
        </div>
        <div>
          <p className="font-bold text-white">Explore</p>
          <div className="mt-4 grid gap-3 text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-orange-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-bold text-white">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>hello@edovutech.com</p>
            <p>+91 98765 43210</p>
            <p>Cloud LMS, ERP, analytics, and digital campus solutions.</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 EDOVUTech. All rights reserved.</p>
        <p>Built for institutions ready to modernize education.</p>
      </div>
    </motion.footer>
  );
}
