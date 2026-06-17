"use client";

import { motion } from "framer-motion";
import {
    Users,
    UserPlus,
    CreditCard,
    Fingerprint,
    FileCheck2,
    CalendarDays,
    BookOpen,
    FolderOpen,
    Cloud,
    ShieldCheck,
    Globe,
    Database,
    ArrowRight,
} from "lucide-react";

const erpModules = [
    {
        icon: Users,
        title: "Student Information System (SIS)",
        description:
            "The central database for student profiles, document uploads, family details, and academic history.",
    },
    {
        icon: UserPlus,
        title: "Admission & Enrollment Automation",
        description:
            "Automates the complete lead-to-student journey including online inquiries, entrance tests and document verification.",
    },
    {
        icon: CreditCard,
        title: "Online Fees Management",
        description:
            "Handles fee structures, payment receipts, payment tracking, scholarships and late fee alerts.",
    },
    {
        icon: Fingerprint,
        title: "Smart Attendance Management",
        description:
            "Integrates with biometrics, RFID and facial recognition to record attendance for students and staff.",
    },
    {
        icon: FileCheck2,
        title: "Digital Examination & Grading",
        description:
            "Question paper creation, scheduling, admit cards, answer evaluation and digital report cards.",
    },
    {
        icon: CalendarDays,
        title: "Timetable & Scheduling",
        description:
            "Conflict-resolution engine for classes, faculty schedules and specialized laboratories.",
    },
    {
        icon: BookOpen,
        title: "Curriculum Development",
        description:
            "Empower educators with comprehensive plans to design and manage modern curriculum.",
    },
    {
        icon: FolderOpen,
        title: "Content Management",
        description:
            "Effortlessly manage, organize and distribute learning content across every platform.",
    },
];

const cloudFeatures = [
    {
        icon: Cloud,
        title: "Cloud Native",
    },
    {
        icon: ShieldCheck,
        title: "Secure Access",
    },
    {
        icon: Globe,
        title: "Access Anywhere",
    },
    {
        icon: Database,
        title: "No Local Installation",
    },
];

export default function AcademicERPSection() {
    return (
        <>
            {/* ERP MODULES */}

            <section className="bg-white py-24">

                <div className="mx-auto max-w-7xl px-5">

                    <div className="text-center">

                        <span className="rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            Academic ERP Modules

                        </span>

                        <h2 className="mt-6 text-5xl font-black text-slate-900">

                            One Platform.
                            <span className="text-orange-500">

                                {" "}Complete Institution Management

                            </span>

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                            EdovuTech LMS & ERP provides a comprehensive
                            cloud-native solution designed specifically for the
                            needs of modern EdTech organizations.

                        </p>

                    </div>

                    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {erpModules.map((item) => {

                            const Icon = item.icon;

                            return (

                                <motion.div

                                    key={item.title}

                                    whileHover={{
                                        y: -10,
                                    }}

                                    className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:border-orange-200 hover:shadow-2xl"

                                >

                                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400 shadow-lg shadow-orange-500/30">

                                        <Icon
                                            className="text-white"
                                            size={30}
                                        />

                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900">

                                        {item.title}

                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-600">

                                        {item.description}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* CLOUD BANNER */}

            <section className="relative overflow-hidden bg-[#08111f] py-24">

                <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

                <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

                <div className="relative mx-auto max-w-7xl px-5">

                    <div className="rounded-[40px] border border-white/10 bg-white/5 p-12 backdrop-blur-xl lg:p-16">

                        <div className="grid items-center gap-14 lg:grid-cols-2">

                            <div>

                                <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                                    Cloud Native Education Platform

                                </span>

                                <h2 className="mt-6 text-5xl font-black leading-tight text-white">

                                    Built for
                                    <span className="text-orange-400">

                                        {" "}Modern Digital Learning

                                    </span>

                                </h2>

                                <p className="mt-8 text-lg leading-8 text-slate-300">

                                    EdovuTech LMS & ERP is a comprehensive,
                                    cloud-native solution designed specifically
                                    for the needs of modern EdTech organizations.

                                    Because it is entirely web-based, there is no
                                    need for specialized hardware or local software
                                    installations.

                                    Users and learners can securely access the
                                    platform&apos;s full suite of features through a
                                    verified web portal.

                                </p>

                            </div>

                            <div className="grid gap-6 sm:grid-cols-2">

                                {cloudFeatures.map((item) => {

                                    const Icon = item.icon;

                                    return (

                                        <div

                                            key={item.title}

                                            className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

                                        >

                                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">

                                                <Icon
                                                    size={28}
                                                    className="text-white"
                                                />

                                            </div>

                                            <h3 className="text-xl font-bold text-white">

                                                {item.title}

                                            </h3>

                                        </div>

                                    );

                                })}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto max-w-6xl px-5">

                    <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-[#08111f] via-[#10203a] to-[#08111f] p-14 text-center shadow-2xl">

                        <span className="rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                            Ready to Transform Education?

                        </span>

                        <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-black leading-tight text-white">

                            Empower Your Institution with
                            <span className="text-orange-400">

                                {" "}AI Powered Learning

                            </span>

                        </h2>

                        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                            AI-powered LMS • Virtual Classrooms • Learning Analytics •
                            Academic ERP • AI Tutoring • Online Assessment •
                            Cloud Native Infrastructure

                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <button className="rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 py-4 font-bold text-white shadow-xl shadow-orange-500/30 transition hover:scale-105">

                                Book Demo

                            </button>

                            <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-xl transition hover:bg-white/10">

                                Talk to Expert

                                <ArrowRight size={18} />

                            </button>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
}