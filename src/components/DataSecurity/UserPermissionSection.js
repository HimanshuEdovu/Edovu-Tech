"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Users,
    UserCog,
    Lock,
    FolderLock,
    CheckCircle2,
} from "lucide-react";

const permissions = [
    {
        icon: UserCog,
        title: "LMS Administrator Controls",
        description:
            "Administrators define user roles, permissions, hierarchies and platform-wide access policies.",
    },
    {
        icon: Users,
        title: "Role-Based Access",
        description:
            "Every learner, teacher and administrator only accesses information relevant to their responsibilities.",
    },
    {
        icon: FolderLock,
        title: "Subject Level Security",
        description:
            "Learners can only view approved subjects while authorized faculty manage updates and learning resources.",
    },
    {
        icon: Lock,
        title: "Secure Data Sharing",
        description:
            "Controlled sharing options ensure confidential educational information remains protected.",
    },
];

export default function UserPermissionSection() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                        className="relative"
                    >

                        <div className="overflow-hidden w-full h-[480px] rounded-[36px] shadow-2xl bg-slate-100">

                            {/* Replace with your image */}

                            <Image
                                src="/images/security.webp"
                                alt="User Permissions"
                                width={800}
                                height={600}
                                className="h-full w-full object-cover"
                            />

                        </div>

                        <div className="absolute -bottom-8 left-8 rounded-[28px] bg-[#08111f] p-7 shadow-2xl">

                            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <ShieldCheck
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="text-3xl font-black text-white">

                                Role Based

                            </h3>

                            <p className="mt-2 text-slate-300">

                                Secure User Access

                            </p>

                        </div>

                    </motion.div>

                    {/* Content */}

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >

                        <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                            User Permissions

                        </span>

                        <h2 className="mt-6 text-5xl font-black leading-tight text-slate-900">

                            Secure Access
                            <br />

                            Through Intelligent
                            <span className="text-orange-500">

                                {" "}Role Management

                            </span>

                        </h2>

                        <p className="mt-8 text-lg leading-8 text-slate-600">

                            To further prevent unauthorized access to data,
                            Edovu LMS follows a comprehensive role-based access
                            model.

                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">

                            LMS Administrators define user roles, establish
                            permission hierarchies, configure sharing options
                            and restrict access levels to ensure every user
                            interacts only with approved information.

                        </p>

                        <div className="mt-10 rounded-3xl border border-orange-100 bg-orange-50 p-6">

                            <div className="flex items-start gap-4">

                                <CheckCircle2
                                    className="mt-1 text-orange-500"
                                    size={24}
                                />

                                <p className="leading-8 text-slate-700">

                                    Learners only have access to approved
                                    subjects, while administrators and faculty
                                    securely manage content, updates and
                                    institutional data.

                                </p>

                            </div>

                        </div>

                    </motion.div>

                </div>

                {/* Permission Cards */}

                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {permissions.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div
                                key={item.title}
                                whileHover={{ y: -10 }}
                                className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-2xl"
                            >

                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                    <Icon
                                        size={30}
                                        className="text-white"
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
    );
}