import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import K12SchoolsSection from "@/components/projects/K12SchoolsSection";
import EduxllSection from "@/components/projects/EduxllSection";
import StepupLearningSection from "@/components/projects/StepupLearningSection";
import AngaloHighSchoolSection from "@/components/projects/AngaloHighSchoolSection";

// import EduxllSection from "@/components/Projects/EduxllSection";
// import AngaloHighSchoolSection from "@/components/Projects/AngaloHighSchoolSection";
// import StepupLearningSection from "@/components/Projects/StepupLearningSection";
// import ProjectsCTA from "@/components/Projects/ProjectsCTA";

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-slate-50">

            <Navbar />

            <main>

                {/* Hero */}

                <section className="relative overflow-hidden bg-[#08111f] px-5 py-24 text-white">

                    <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[140px]" />

                    <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

                    <div className="relative mx-auto max-w-7xl text-start">

                        <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Our Projects

                        </span>

                        <h1 className="mt-7 text-5xl font-black leading-tight lg:text-7xl">

                            Building The Future Of
                            <br />

                            <span className="text-orange-400">

                                Digital Education

                            </span>

                        </h1>

                        <p className=" mt-8 max-w-4xl text-xl leading-9 text text-slate-300">

                            From AI-powered Learning Management Systems and
                            international online schools to digital campus
                            transformation, EdovuLearn delivers scalable,
                            intelligent and future-ready education platforms
                            that empower learners across the globe.

                        </p>

                    </div>

                </section>

                {/* Stats */}

                {/* <section className="bg-white py-16">

                    <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 xl:grid-cols-4">

                        <div className="rounded-[30px] bg-white p-8 text-center shadow-lg">

                            <div className="text-5xl font-black text-orange-500">

                                35K+

                            </div>

                            <p className="mt-3 text-slate-600">

                                Active Learners

                            </p>

                        </div>

                        <div className="rounded-[30px] bg-white p-8 text-center shadow-lg">

                            <div className="text-5xl font-black text-orange-500">

                                120+

                            </div>

                            <p className="mt-3 text-slate-600">

                                Institutions

                            </p>

                        </div>

                        <div className="rounded-[30px] bg-white p-8 text-center shadow-lg">

                            <div className="text-5xl font-black text-orange-500">

                                AI

                            </div>

                            <p className="mt-3 text-slate-600">

                                Powered Solutions

                            </p>

                        </div>

                        <div className="rounded-[30px] bg-white p-8 text-center shadow-lg">

                            <div className="text-5xl font-black text-orange-500">

                                Global

                            </div>

                            <p className="mt-3 text-slate-600">

                                Digital Education

                            </p>

                        </div>

                    </div>

                </section> */}

                {/* Projects */}

                <K12SchoolsSection />
                <EduxllSection/>
                <StepupLearningSection/>
                <AngaloHighSchoolSection/>

                {/*

                <EduxllSection />

                <AngaloHighSchoolSection />

                <StepupLearningSection />

                <ProjectsCTA />

                */}

            </main>

            <Footer />

        </div>
    );
}