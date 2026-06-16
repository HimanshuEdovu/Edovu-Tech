"use client";

import {
    BrainCircuit,
    BarChart3,
    Cloud,
    Globe2,
    MessageSquare,
    Target,
    TrendingUp,
    Users,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const highlights = [
    {
        icon: Globe2,
        title: "Learn From Anywhere",
        description:
            "Access courses, live classes and learning resources 24/7 from any device with a secure cloud platform.",
        color: "from-orange-500 to-orange-400",
    },
    {
        icon: BarChart3,
        title: "Real-Time Analytics",
        description:
            "Track engagement, attendance and academic performance with intelligent dashboards.",
        color: "from-teal-500 to-teal-400",
    },
    {
        icon: BrainCircuit,
        title: "AI Learning Assistant",
        description:
            "Provide personalized recommendations and smarter learning experiences for every student.",
        color: "from-orange-500 to-orange-400",
    },
    {
        icon: Cloud,
        title: "Cloud Based Platform",
        description:
            "No installations or maintenance. Access your LMS securely from anywhere.",
        color: "from-teal-500 to-teal-400",
    },
    //   {
    //     icon: Target,
    //     title: "Customized Goals",
    //     description:
    //       "Set personalized learning objectives and monitor progress with measurable outcomes.",
    //     color: "from-orange-500 to-orange-400",
    //   },
    {
        icon: MessageSquare,
        title: "Transparent Feedback",
        description:
            "Provide instant feedback that keeps students engaged and continuously improving.",
        color: "from-teal-500 to-teal-400",
    },
    {
        icon: Users,
        title: "Student Performance",
        description:
            "Monitor attendance, assignments, certificates and overall academic development.",
        color: "from-orange-500 to-orange-400",
    },
    //   {
    //     icon: TrendingUp,
    //     title: "Scalable Infrastructure",
    //     description:
    //       "Built to grow with coaching institutes, schools, colleges and universities.",
    //     color: "from-teal-500 to-teal-400",
    //   },
];

export default function LmsSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#ffffff] via-[#fffaf5] to-[#ffffff] px-5 py-14 sm:px-6 lg:px-8">

            {/* Background Blur */}

            <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />

            <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-teal-200/50 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">

                <div className="mx-auto max-w-7xl">

                    {/* LEFT CONTENT */}

                    <div className="mx-auto max-w-3xl text-center">

                        <span className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-600">

                            WHY EDOVU LMS

                        </span>

                        <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-6xl">

                            One Platform Infinite Learning Possibilities.

                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">

                            Empower educators and students with AI-powered learning,
                            smart assessments, cloud accessibility and real-time
                            analytics—all within one seamless digital ecosystem.

                        </p>

                    </div>

                    {/* RIGHT CONTENT */}

                    <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                        {highlights.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <Reveal
                                    key={item.title}
                                    delay={index * 0.05}
                                    hover
                                >

                                    <div className="group relative h-full overflow-hidden rounded-[30px] border border-slate-200/70 bg-white/80 p-7 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-200">

                                        <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-gradient-to-br from-orange-100/40 to-teal-100/40 blur-3xl transition duration-500 group-hover:scale-125" />

                                        <div
                                            className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}
                                        >

                                            <Icon className="h-6 w-6 text-white" />

                                        </div>

                                        <h3 className="text-xl font-black text-slate-900">

                                            {item.title}

                                        </h3>

                                        <p className="mt-4 leading-7 text-slate-600">

                                            {item.description}

                                        </p>

                                    </div>

                                </Reveal>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}
