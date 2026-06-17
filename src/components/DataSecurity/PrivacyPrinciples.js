"use client";

import { motion } from "framer-motion";
import {
    UserCog,
    Lock,
    ShieldCheck,
    FileCheck,
    Eye,
    Trash2,
} from "lucide-react";

const principles = [
    {
        title: "User Control Over Personal Data",
        description:
            "Edovu LMS empowers users to manage their personal information by providing complete control over how their data is accessed and maintained.",
        icon: UserCog,
        color: "orange",
        points: [
            {
                icon: Eye,
                text: "Access and review personal information anytime",
            },
            {
                icon: FileCheck,
                text: "Update and correct account details securely",
            },
            {
                icon: Trash2,
                text: "Manage or remove personal information when required",
            },
        ],
    },
    {
        title: "Protection Against Unauthorized Access",
        description:
            "Enterprise-grade security measures ensure sensitive educational and personal data remains protected from unauthorized access and cyber threats.",
        icon: Lock,
        color: "teal",
        points: [
            {
                icon: ShieldCheck,
                text: "Advanced encryption for secure data protection",
            },
            {
                icon: Lock,
                text: "Authentication protocols for verified access",
            },
            {
                icon: FileCheck,
                text: "Continuous monitoring to prevent data breaches",
            },
        ],
    },
];

export default function PrivacyPrinciples() {
    return (
        <section className="relative overflow-hidden bg-white py-24">

            <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                <div className="text-center">

                    <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-600">

                        Privacy Principles

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-slate-900">

                        Security Built Around

                        <span className="text-orange-500">

                            {" "}Trust & Control

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                        At its core, data privacy in Edovu LMS revolves around
                        user control over personal data and safeguarding
                        information against unauthorized access.

                    </p>

                </div>

                <div className="mt-16 grid gap-8 lg:grid-cols-2">

                    {principles.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}

                                transition={{
                                    duration: .6,
                                }}

                                viewport={{
                                    once: true,
                                }}

                                className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg"

                            >

                                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl ${item.color === "orange"
                                        ? "bg-orange-100 text-orange-600"
                                        : "bg-teal-100 text-teal-600"
                                    }`}>

                                    <Icon size={40} />

                                </div>

                                <h3 className="text-3xl font-black text-slate-900">

                                    {item.title}

                                </h3>

                                <p className="mt-5 text-lg leading-8 text-slate-600">

                                    {item.description}

                                </p>

                                <div className="mt-10 space-y-5">

                                    {item.points.map((point) => {

                                        const PointIcon = point.icon;

                                        return (

                                            <div
                                                key={point.text}
                                                className="flex items-start gap-4"
                                            >

                                                <div className={`rounded-xl p-3 ${item.color === "orange"
                                                        ? "bg-orange-50 text-orange-600"
                                                        : "bg-teal-50 text-teal-600"
                                                    }`}>

                                                    <PointIcon size={18} />

                                                </div>

                                                <p className="flex-1 text-base leading-7 text-slate-600">

                                                    {point.text}

                                                </p>

                                            </div>

                                        );

                                    })}

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}