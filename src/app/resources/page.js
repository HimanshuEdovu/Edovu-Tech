import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { blogPosts, resources } from "@/data/site";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our resources"
          title="Guides, playbooks, and blog insights for digital education leaders."
          description="Use these starter resources to plan LMS rollout, ERP migration, teacher adoption, and long-term digital campus growth."
        />
        <Reveal as="section" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Downloads"
              title="Practical resources"
              description="Useful starting points for schools, colleges, coaching businesses, and corporate learning teams."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {resources.map((resource, index) => (
                <Reveal
                  as="article"
                  key={resource.title}
                  delay={index * 0.05}
                  hover
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-400 via-teal-400 to-slate-900" />
                  <span className="inline-flex rounded-full bg-teal-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-teal-700">
                    {resource.type}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-slate-950">
                    {resource.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {resource.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal as="section" className="bg-white px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Blog"
              title="Latest articles"
              description="Short reads on LMS, ERP, online learning, and education operations."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Reveal
                  as="article"
                  key={post.title}
                  delay={index * 0.05}
                  hover
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.07)] transition duration-300 hover:border-orange-200"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100 blur-xl" />
                  <p className="relative text-xs font-bold text-orange-600">
                    {post.readTime}
                  </p>
                  <h3 className="relative mt-4 text-xl font-black text-slate-950">
                    {post.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
