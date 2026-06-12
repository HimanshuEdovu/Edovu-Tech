import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Contact us"
          title="Let’s plan your LMS, ERP, or complete digital campus rollout."
          description="Share your institution size, current tools, and goals. Our team can help map the right platform modules and implementation path."
        />
        <Reveal as="section" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal className="relative overflow-hidden rounded-2xl bg-[#0b1628] p-8 text-white shadow-2xl shadow-slate-950/20" hover>
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-orange-500/20 blur-2xl" />
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-200">
                Talk to us
              </p>
              <h2 className="mt-4 text-3xl font-black">Book a demo</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                <p>Email: support@edovuventures.com</p>
                <p>Phone: +91 9692718522</p>
                <p>
                  Services: LMS, ERP, admissions, fees, timetable, digital
                  content, analytics, and implementation support.
                </p>
              </div>
            </Reveal>
            <Reveal
              as="form"
              delay={0.1}
              className="grid gap-4 rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400" placeholder="Your name" />
                <input className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400" placeholder="Work email" />
              </div>
              <input className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400" placeholder="Institution / organization" />
              <select className="rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400">
                <option>Interested in LMS</option>
                <option>Interested in ERP</option>
                <option>Complete digital campus</option>
                <option>Content and training</option>
              </select>
              <textarea className="min-h-36 rounded-lg border border-slate-200 px-4 py-3 outline-none transition focus:border-orange-400" placeholder="Tell us what you want to build" />
              <button className="rounded-full bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:-translate-y-0.5 hover:bg-orange-400">
                Send Message
              </button>
            </Reveal>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
