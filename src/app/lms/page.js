import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { lmsHighlights } from "@/data/site";

export default function LmsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our LMS"
          title="A modern LMS for courses, assessments, analytics, and blended learning."
          description="EDOVUTech LMS gives teachers simple creation tools and gives administrators the visibility they need to improve completion, engagement, and outcomes."
        />
        <Reveal as="section" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
                Platform capabilities
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-950 sm:text-4xl">
                Built for active teaching, not just content storage.
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Your LMS should help teams plan learning journeys, deliver
                lessons, measure performance, and support every learner with
                timely insight.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {lmsHighlights.map((item, index) => (
                <Reveal
                  key={item}
                  delay={index * 0.04}
                  hover
                  className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-5 shadow-[0_14px_38px_rgba(15,23,42,0.07)] transition duration-300 hover:border-orange-200"
                >
                  <div className="absolute right-0 top-0 h-16 w-16 rounded-bl-full bg-orange-100/80" />
                  <p className="relative text-sm font-bold leading-7 text-slate-700">
                    {item}
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
