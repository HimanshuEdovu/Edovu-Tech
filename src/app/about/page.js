import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { stats } from "@/data/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHero
          eyebrow="About us"
          title="We build education technology that feels useful from day one."
          description="EDOVUTech focuses on practical LMS and ERP workflows, clear implementation, and measurable outcomes for institutions moving toward digital-first education."
        />
        <Reveal as="section" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Our approach
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Simple tools, strong systems, and human support.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                We partner with education teams to replace scattered manual
                work with connected digital workflows. Our goal is to make
                learning management, academic operations, communication, and
                analytics easier for every stakeholder.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={index * 0.05}
                  hover
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                >
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-orange-100 blur-xl" />
                  <p className="relative text-3xl font-black text-orange-600">
                    {stat.value}
                  </p>
                  <p className="relative mt-2 text-sm font-semibold text-slate-600">
                    {stat.label}
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
