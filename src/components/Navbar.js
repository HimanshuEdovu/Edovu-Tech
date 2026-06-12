"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navDropdowns, navItems } from "@/data/site";

export default function Navbar({ openDemo }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState(null);

  return (
    <motion.header
      initial={{ opacity: 0, y: -28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-3 z-50 px-4 sm:px-6 lg:px-8"    >
      <nav className="
  mx-auto
  flex
  max-w-7xl
  items-center
  justify-between
  gap-3
  rounded-[28px]
  border
  border-white/15
  px-3
  py-2.5
  shadow-2xl
  shadow-black/20
  backdrop-blur-2xl
  sm:gap-5
  sm:rounded-full
  sm:px-5
  relative
  overflow-hidden
">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1628] via-[#122038] to-[#f97316]" />  <div className="absolute -left-16 top-0 h-40 w-40 rounded-full bg-orange-500/30 blur-3xl" />

          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-teal-500/10 blur-3xl" />
        </div>
        <Link
          href="/"
          className="relative z-10 group flex min-w-0 items-center gap-3"
        >          <span className="relative flex h-11 w-11 shrink-0 overflow-hidden rounded-full border border-orange-400/40 bg-[#111827] shadow-[0_0_30px_rgba(249,115,22,0.35)] transition duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
            <Image
              src="/eduvutech-logo.png"
              alt="EduvuTech logo"
              fill
              sizes="48px"
              className="object-cover"
              priority
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-lg font-black tracking-normal text-white">
              EDOVUTech
            </span>
            <span className="block text-xs font-medium text-orange-200/80">
              LMS, ERP & EdTech
            </span>
          </span>
        </Link>

        <div className="relative z-10 hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() =>
                setOpenMenu(navDropdowns[item.label] ? item.label : null)
              }
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-slate-200 transition duration-300 hover:bg-white/10 hover:text-orange-200"
              >
                <span>{item.label}</span>
                {/* {navDropdowns[item.label] ? (
                  <span
                    className={`text-xs text-orange-200 transition duration-300 ${openMenu === item.label ? "rotate-180" : ""
                      }`}
                  >
                    ▼
                  </span>
                ) : null} */}
              </Link>
              <AnimatePresence>
                {openMenu === item.label ? (
                  <motion.div
                    initial={{ opacity: 0, y: 14, x: "-50%", scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, x: "-50%", scale: 1 }}
                    exit={{ opacity: 0, y: 10, x: "-50%", scale: 0.98 }}
                    transition={{ duration: 0.22 }}
                    className="absolute left-1/2 top-full mt-4 w-64 overflow-hidden rounded-lg border border-white/15 bg-[#0c1729]/95 p-2 shadow-2xl shadow-black/35 backdrop-blur-2xl"
                  >
                    <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
                    {navDropdowns[item.label].map((entry) => (
                      <Link
                        key={entry}
                        href={item.href}
                        className="group flex items-center justify-between rounded-md px-4 py-3 text-sm font-semibold text-slate-200 transition duration-300 hover:bg-white/10 hover:text-orange-200"
                      >
                        <span>{entry}</span>
                        <span className="text-orange-300 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                          &rarr;
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="relative z-10 flex items-center gap-2">
          <motion.div
            className="hidden sm:block"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            <button
              type="button"
              onClick={openDemo}
              className="whitespace-nowrap rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:scale-105 hover:shadow-orange-500/40 sm:px-5"
            >
              Book Demo
            </button>
          </motion.div>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-lg shadow-black/10 transition hover:bg-white/15 lg:hidden"
          >
            <span className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-white transition duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-5 rounded-full bg-white transition duration-300 ${mobileOpen ? "opacity-0" : ""
                  }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-5 rounded-full bg-white transition duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[26px] border border-white/15 bg-[#08111f]/95 p-3 shadow-2xl shadow-black/25 backdrop-blur-2xl lg:hidden"
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const hasDropdown = Boolean(navDropdowns[item.label]);
                const isOpen = mobileGroup === item.label;

                return (
                  <div key={item.href} className="rounded-2xl">
                    <div className="flex items-center gap-2">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex-1 rounded-2xl px-4 py-3 text-sm font-bold text-slate-100 transition hover:bg-white/10 hover:text-orange-200"
                      >
                        {item.label}
                      </Link>
                      {hasDropdown ? (
                        <button
                          type="button"
                          aria-label={`Toggle ${item.label} menu`}
                          onClick={() =>
                            setMobileGroup(isOpen ? null : item.label)
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-orange-200 transition hover:bg-white/10"
                        >
                          <span
                            className={`text-xs transition duration-300 ${isOpen ? "rotate-180" : ""
                              }`}
                          >
                            ▼
                          </span>
                        </button>
                      ) : null}
                    </div>
                    <AnimatePresence>
                      {hasDropdown && isOpen ? (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="overflow-hidden"
                        >
                          <div className="mx-2 mb-2 grid gap-1 rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                            {navDropdowns[item.label].map((entry) => (
                              <Link
                                key={entry}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-orange-200"
                              >
                                {entry}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openDemo();
                }}
                className="mt-2 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-400 px-4 py-3 text-center text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:scale-[1.02]"
              >
                Book Demo
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
