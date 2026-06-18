"use client";

import { motion } from "framer-motion";

import {
    BrainCircuit,
    Bot,
    ClipboardCheck,
    FileText,
    Briefcase,
    PenTool,
} from "lucide-react";

const keywords = [
    "AI-powered LMS",
    "Online International School",
    "Virtual Learning Platform",
    "Interactive Learning",
    "Gamified Lessons",
    "AI Assessments",
    "Cloud-based School ERP",
    "Online School Programs",
    "Virtual School",
    "Adaptive Quizzing",
    "Learning Analytics",
    "Performance Analytics",
    "Digital Learning",
    "Online Classroom",
    "AI Tutoring",
    "Student Analytics Dashboard",
    "Online Assessment System",
    "AI-generated Class Notes",
    "Smart Attendance Monitoring",
    "Online Curriculum Management",
    "Personalized Learning",
    "Immersive Simulations",
    "Learning Videos",
    "AI Career Counselling",
    "Real-time Tracking",
    "Cloud-native Education Platform",
    "Student Information System",
    "Teacher LMS",
    "Parent LMS",
];

const features = [
    {
        icon: BrainCircuit,
        title: "AI Doubt Clearing",
        description:
            "It's an 24X7 instant help to the student. Students can ask questions by typing or verbally. AI immediately responds with voice and print.",
    },
    {
        icon: Bot,
        title: "Socratic AI Tutoring",
        description:
            "When a student is stuck, the LMS doesn't just give the answer. The AI tutor asks guiding questions to lead them to the solution.",
    },
    {
        icon: ClipboardCheck,
        title: "Regular Assessment through AI Proctoring",
        description:
            "AI generates chapter-specific assessments, proctors revision tests in real-time and delivers instant grading with constructive feedback.",
    },
    {
        icon: FileText,
        title: "AI Generated Class Notes",
        description:
            "For every online class, AI automatically converts live lecture discussions into transcripts and concise class notes.",
    },
    {
        icon: Briefcase,
        title: "AI Counselling for Career Guidance",
        description:
            "Our AI provides data-driven career counselling by analysing academic records and extracurricular interests.",
    },
    {
        icon: PenTool,
        title: "Self-Practice with AI Grading",
        description:
            "Unlimited practice questions and model solutions with instant AI grading and performance evaluation.",
    },
];

export default function AIFeaturesSection() {
    return (
        <section className="relative overflow-hidden bg-[#08111f] py-14">

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}
{/* 
                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        Technology Keywords

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">

                        AI Powered Learning Ecosystem

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

                        EdovuLearn LMS combines AI, analytics, virtual classrooms,
                        adaptive learning and cloud-native technologies into one
                        intelligent education platform.

                    </p>

                </div> */}

                {/* Keywords */}

                {/* <div className="mt-14 flex flex-wrap justify-center gap-4">

                    {keywords.map((item, index) => (

                        <motion.div

                            key={item}

                            initial={{ opacity: 0, y: 15 }}

                            whileInView={{ opacity: 1, y: 0 }}

                            transition={{
                                duration: .35,
                                delay: index * .03,
                            }}

                            viewport={{ once: true }}

                            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-orange-400/30 hover:bg-orange-500/10"
                        >

                            {item}

                        </motion.div>

                    ))}

                </div> */}

                {/* AI Features */}

                <div className="mt-10">

                    <div className="text-center">

                        <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            AI Features

                        </span>

                        <h2 className="mt-6 text-5xl font-black text-white">

                            AI Features That
                            <span className="text-orange-400">

                                {" "}Empower Learners

                            </span>

                        </h2>

                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {features.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div

                                    whileHover={{
                                        y: -10,
                                    }}

                                    key={item.title}

                                    className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"

                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-xl shadow-orange-500/20">

                                        <Icon
                                            size={30}
                                            className="text-white"
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold text-white">

                                        {item.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-300">

                                        {item.description}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}