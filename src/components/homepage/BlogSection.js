"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/site";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function BlogSection() {
  return (
    <section className="relative overflow-hidden from-[#ffffff] via-[#fffaf5] to-[#ffffff] px-5 py-14 text-black sm:px-6 lg:px-8">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]"
        />

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]"
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
              Latest Blogs & Articles
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              Insights From The{" "}
              <span className="bg-gradient-to-r from-orange-400 to-orange-200 bg-clip-text text-transparent">
                EdTech Desk
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Discover trends, innovations, and practical strategies shaping
              the future of education technology.
            </p>
          </motion.div>

          {/* <motion.div
            variants={itemVariants}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold backdrop-blur-xl transition hover:bg-white/10"
            >
              See All Articles

              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div> */}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {blogPosts.slice(0, 3).map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              whileHover={{
                y: -10,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group h-full"
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-14 flex justify-center"
        >
          <Link
            href="/blogs"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-black shadow-xl shadow-orange-500/25 transition duration-300 hover:-translate-y-1"
          >
            View More Articles

            <span className="transition duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}