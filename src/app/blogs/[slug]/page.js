"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/site";

export default function BlogDetails({ params }) {
  const blog = blogPosts.find(
    (item) => item.slug === params.slug
  );

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter(
      (item) =>
        item.category === blog.category &&
        item.slug !== blog.slug
    )
    .slice(0, 3);

  return (
    <>
      <Navbar />

      <main className="bg-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#0b1628] pt-40 pb-24 text-white">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5">

            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 text-orange-300 transition hover:text-orange-200"
            >
              ← Back to Blog
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                {blog.category}
              </span>

              <span className="text-slate-300">
                {blog.date}
              </span>

              <span className="h-1 w-1 rounded-full bg-slate-500" />

              <span className="text-slate-300">
                {blog.readTime}
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-black leading-tight md:text-6xl">
              {blog.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {blog.excerpt}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 font-bold">
                E
              </div>

              <div>
                <p className="font-semibold">
                  {blog.author}
                </p>
                <p className="text-sm text-slate-400">
                  Education Technology Experts
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED IMAGE */}
        <section className="-mt-12">
          <div className="mx-auto max-w-6xl px-5">
            <div className="relative h-[300px] overflow-hidden rounded-[32px] shadow-2xl md:h-[600px]">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-5">

            <article className="prose prose-lg max-w-none prose-slate">

              {blog?.content?.map((section, index) => (
                <div key={index} className="mb-14">

                  <h2 className="mb-5 text-3xl font-black text-slate-900">
                    {section.heading}
                  </h2>

                  <p className="text-lg leading-9 text-slate-700">
                    {section.text}
                  </p>

                </div>
              ))}

            </article>

          </div>
        </section>

        {/* AUTHOR */}
        <section className="pb-20">
          <div className="mx-auto max-w-4xl px-5">

            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 md:p-10">

              <div className="flex flex-col gap-6 md:flex-row md:items-center">

                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-orange-500 text-3xl font-black text-white">
                  E
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900">
                    {blog.author}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    The EDOVUTech editorial team shares
                    practical insights on LMS platforms,
                    academic ERP systems, digital learning,
                    and educational technology trends.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-5">

              <h2 className="text-center text-4xl font-black text-slate-900">
                Related Articles
              </h2>

              <div className="mt-14 grid gap-8 md:grid-cols-3">

                {relatedPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-500 hover:-translate-y-2"
                  >

                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-6">

                      <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-600">
                        {post.category}
                      </span>

                      <h3 className="mt-4 line-clamp-2 text-xl font-black text-slate-900">
                        {post.title}
                      </h3>

                      <p className="mt-3 line-clamp-3 text-slate-600">
                        {post.excerpt}
                      </p>

                      <div className="mt-5 font-semibold text-orange-500">
                        Read More →
                      </div>

                    </div>

                  </Link>
                ))}

              </div>

            </div>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}