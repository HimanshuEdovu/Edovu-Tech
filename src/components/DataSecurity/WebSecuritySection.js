"use client";

import { motion } from "framer-motion";
import {
    Shield,
    ShieldCheck,
    Globe2,
    KeyRound,
    Bot,
    CheckCircle2,
} from "lucide-react";

const securityFeatures = [
    {
        icon: Shield,
        title: "DDoS Mitigation",
        description:
            "Dedicated DDoS mitigation services sit between servers and the public Internet, filtering malicious traffic and preventing attacks from overwhelming applications.",
    },
    {
        icon: ShieldCheck,
        title: "Web Application Firewall (WAF)",
        description:
            "Advanced Web Application Firewalls identify and block known vulnerabilities, malicious requests and emerging threats before they reach the application.",
    },
    {
        icon: Globe2,
        title: "DNSSEC Protection",
        description:
            "DNS Security Extensions ensure web application traffic is safely routed to legitimate servers, protecting users from interception and on-path attacks.",
    },
    {
        icon: KeyRound,
        title: "Encryption Certificate Management",
        description:
            "Private keys, certificate renewals and certificate revocations are securely managed to maintain uninterrupted SSL/TLS protection.",
    },
    {
        icon: Bot,
        title: "Bot Management",
        description:
            "Intelligent bot detection distinguishes automated traffic from genuine users and blocks malicious bots while allowing legitimate access.",
    },
];

export default function WebSecuritySection() {
    return (<>
        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/10 blur-[120px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        Web Application Security

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">

                        Multi-Layer

                        <span className="text-orange-400">

                            {" "}Application Protection

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

                        Edovu LMS follows enterprise-grade web security
                        practices designed to protect learners, institutions,
                        administrators and educational data from modern cyber
                        threats.

                    </p>

                </div>

                {/* Security Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {securityFeatures.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                whileHover={{
                                    y: -10,
                                }}

                                className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30 hover:bg-white/10"

                            >

                                <div className="mb-6 flex h-18 w-18 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 p-5 shadow-xl shadow-orange-500/20">

                                    <Icon
                                        size={34}
                                        className="text-white"
                                    />

                                </div>

                                <h3 className="text-2xl font-black text-white">

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

        </section>
        <section className="relative overflow-hidden bg-[#fff] mb-24 ">
                    {/* Bottom Banner */}

                <div className="mt-20 max-w-7xl m-auto bg-[#08111f]  rounded-[40px] border border-white/10 p-10 backdrop-blur-xl">

                    <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

                        <div>

                            <span className="rounded-full bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                                Enterprise Security

                            </span>

                            <h3 className="mt-6 text-4xl font-black text-white">

                                Designed To Protect Every
                                <span className="text-orange-400">

                                    {" "}Learning Journey

                                </span>

                            </h3>

                            <p className="mt-6 text-lg leading-8 text-slate-300">

                                From intelligent traffic filtering to encrypted
                                communication and bot detection, Edovu LMS
                                continuously protects educational platforms
                                against evolving cyber threats.

                            </p>

                        </div>

                        <div className="grid gap-5">

                            {[
                                "Advanced DDoS Protection",
                                "Web Application Firewall (WAF)",
                                "DNSSEC Enabled Infrastructure",
                                "Managed SSL/TLS Certificates",
                                "AI Powered Bot Detection",
                            ].map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-4 rounded-2xl bg-white/5 p-4"
                                >

                                    <CheckCircle2
                                        size={22}
                                        className="text-orange-400"
                                    />

                                    <span className="text-lg text-slate-200">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>
        </section>
   </>
    );
}