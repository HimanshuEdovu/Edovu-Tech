"use client";

import { motion } from "framer-motion";
import {
    Landmark,
    School,
    Users,
    BarChart3,
    UserCheck,
    CalendarCheck2,
    GraduationCap,
    Building2,
} from "lucide-react";

const governance = [
    {
        icon: Landmark,
        title: "Chief Ministers",
        description:
            "Monitor statewide educational performance through centralized digital dashboards.",
    },
    {
        icon: Users,
        title: "Education Secretaries",
        description:
            "Access consolidated reports and monitor institutional performance in real time.",
    },
    {
        icon: Building2,
        title: "Department Authorities",
        description:
            "Track district and departmental progress with unified governance tools.",
    },
    {
        icon: School,
        title: "Individual School Units",
        description:
            "Empower every school with transparent reporting and performance visibility.",
    },
];

const monitoring = [
    {
        icon: UserCheck,
        value: "Teacher Performance",
    },
    {
        icon: CalendarCheck2,
        value: "Attendance Patterns",
    },
    {
        icon: GraduationCap,
        value: "Student Progress",
    },
    {
        icon: BarChart3,
        value: "Institutional Health",
    },
];

export default function DigitalGovernanceSection() {
    return (
        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        Centralized Monitoring & Digital Governance

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white lg:text-6xl">

                        Population Scale

                        <span className="text-orange-400">

                            {" "}Education Governance

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300">

                        The platform establishes a robust digital governance architecture,
                        enabling seamless monitoring from apex state administrators
                        down to individual school units.

                    </p>

                </div>

                {/* Governance Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {governance.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                whileHover={{ y: -8 }}
                                className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/20 hover:bg-white/10"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

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

                {/* Monitoring Banner */}

                <div className="mt-20 rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                    <div className="text-center">

                        <h3 className="text-4xl font-black text-white">

                            Real-Time Institutional Monitoring

                        </h3>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">

                            High-level leadership including Chief Ministers,
                            education secretaries and departmental authorities
                            can leverage real-time consolidated dashboards.

                        </p>

                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                        {monitoring.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={item.value}
                                    className="rounded-3xl bg-white/5 p-8 text-center"
                                >

                                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500">

                                        <Icon
                                            size={30}
                                            className="text-white"
                                        />

                                    </div>

                                    <h4 className="mt-6 text-xl font-bold text-white">

                                        {item.value}

                                    </h4>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>
    );
}