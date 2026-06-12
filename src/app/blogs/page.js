import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/site";

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#08111f] px-5 py-24 text-white sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-200">
                Blog
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Explore Every Article From Our EdTech Journal
              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Stay up to date with the latest trends in LMS, academic ERP, digital classrooms, and AI-powered education.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="All Articles"
              title="Read insights from our education technology experts"
              description="Browse every blog post, filter by category, and discover practical strategies for modern institutions."
            />

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
