import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CurriculumOverview from "@/components/EdovuCurriculum/CurriculumOverview";
import GlobalCurriculumFramework from "@/components/EdovuCurriculum/GlobalCurriculumFramework";
import ResearchBasedPedagogy from "@/components/EdovuCurriculum/ResearchBasedPedagogy";
import CurriculumHighlights from "@/components/EdovuCurriculum/CurriculumHighlights";



export default function EdovuCurriculumPage() {
    return (
        <div className="min-h-screen bg-slate-50">

            <Navbar />

            <main>

                {/* Hero Section */}

                <section className="relative overflow-hidden bg-[#08111f] px-5 py-24 text-white sm:px-6 lg:px-8">

                    <div className="absolute inset-0">

                        <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[140px]" />

                        <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

                    </div>

                    <div className="relative mx-auto max-w-7xl">

                        <div className="max-w-4xl">

                            <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-200">

                                Edovu Curriculum

                            </span>

                            <h1 className="mt-7 text-5xl font-black leading-tight lg:text-7xl">

                                Future-Ready Learning

                                <br />

                                <span className="text-orange-400">

                                    Built For Curious Minds

                                </span>

                            </h1>

                            <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">

                                The Edovu Curriculum is a future-ready learning
                                framework that combines conceptual understanding,
                                skill development, and real-world application to
                                create meaningful learning experiences. Designed
                                to nurture curious minds and lifelong learners,
                                it equips students with the knowledge,
                                competencies, and confidence needed to thrive in
                                a rapidly evolving world.

                            </p>

                            {/* <div className="mt-10 flex flex-wrap gap-5">

                                <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105">

                                    Explore Curriculum

                                </button>

                                <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/10">

                                    Learn More

                                </button>

                            </div> */}

                        </div>

                    </div>

                </section>

                {/* Section 1 */}

                <CurriculumOverview />

                {/* Section 2 */}

                <GlobalCurriculumFramework />

                {/* Section 3 */}

                <ResearchBasedPedagogy />

                {/* Section 4 */}

                <CurriculumHighlights />

                {/* Section 5 */}

                {/* <CurriculumCTA /> */}

            </main>

            <Footer />

        </div>
    );
}