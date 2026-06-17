"use client";

import { motion } from "framer-motion";
import {
    ShieldCheck,
    Lock,
    Globe,
    Database,
    CheckCircle2,
} from "lucide-react";

const encryptionData = [
    {
        icon: Globe,
        title: "Encrypting Data in Transit",
        subtitle: "HTTPS / SSL / TLS",
        description:
            "Communication between the web server and the user's browser is secured using HTTPS and SSL/TLS protocols, preventing interception, modification or theft of sensitive information.",
        points: [
            "Secure browser-to-server communication",
            "Protection against eavesdropping",
            "Prevents malicious interception",
            "Ensures data integrity",
        ],
        color: "orange",
    },
    {
        icon: Database,
        title: "Encrypting Data at Rest",
        subtitle: "RSA Encryption",
        description:
            "Sensitive information stored on servers, browsers or third-party services is encrypted using RSA algorithms to prevent unauthorized access, alteration or deletion.",
        points: [
            "RSA encrypted storage",
            "Secure server databases",
            "Protection against unauthorized access",
            "Improved compliance & trust",
        ],
        color: "cyan",
    },
];

export default function DataEncryptionSection() {
    return (
        <section className="relative overflow-hidden bg-[#08111f] py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/15 blur-[140px]" />

            <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <div className="text-center">

                    <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">

                        Data Encryption

                    </span>

                    <h2 className="mt-6 text-5xl font-black text-white">

                        Enterprise Grade

                        <span className="text-orange-400">

                            {" "}Data Protection

                        </span>

                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

                        Edovu LMS protects sensitive educational data through
                        multiple layers of encryption, ensuring privacy,
                        confidentiality and secure communication across every
                        interaction.

                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-10 lg:grid-cols-2">

                    {encryptionData.map((item) => {

                        const Icon = item.icon;

                        return (

                            <motion.div

                                key={item.title}

                                initial={{ opacity: 0, y: 30 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{ duration: .6 }}

                                viewport={{ once: true }}

                                className="group rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/20 hover:bg-white/10"

                            >

                                <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl ${
                                    item.color === "orange"
                                        ? "bg-gradient-to-br from-orange-500 to-orange-400"
                                        : "bg-gradient-to-br from-cyan-500 to-cyan-400"
                                }`}>

                                    <Icon
                                        size={38}
                                        className="text-white"
                                    />

                                </div>

                                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">

                                    {item.subtitle}

                                </span>

                                <h3 className="mt-6 text-3xl font-black text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-6 text-lg leading-8 text-slate-300">

                                    {item.description}

                                </p>

                                <div className="mt-8 space-y-4">

                                    {item.points.map((point) => (

                                        <div
                                            key={point}
                                            className="flex items-start gap-3"
                                        >

                                            <CheckCircle2
                                                size={20}
                                                className={`mt-1 ${
                                                    item.color === "orange"
                                                        ? "text-orange-400"
                                                        : "text-cyan-400"
                                                }`}
                                            />

                                            <p className="text-slate-300">

                                                {point}

                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </motion.div>

                        );

                    })}

                </div>

                {/* Bottom Banner */}

                <div className="mt-20 rounded-[36px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

                    <div className="grid items-center gap-10 lg:grid-cols-2">

                        <div>

                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">

                                <ShieldCheck
                                    size={30}
                                    className="text-white"
                                />

                            </div>

                            <h3 className="text-4xl font-black text-white">

                                Privacy by Design

                            </h3>

                            <p className="mt-6 text-lg leading-8 text-slate-300">

                                By implementing encryption for web applications,
                                Edovu LMS enhances privacy, confidentiality,
                                integrity, authenticity and user trust while
                                maintaining compliance with international
                                security standards.

                            </p>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">

                            <div className="rounded-3xl bg-white/5 p-6">

                                <Lock
                                    className="mb-4 text-orange-400"
                                    size={30}
                                />

                                <h4 className="font-bold text-white">

                                    Secure Access

                                </h4>

                            </div>

                            <div className="rounded-3xl bg-white/5 p-6">

                                <ShieldCheck
                                    className="mb-4 text-orange-400"
                                    size={30}
                                />

                                <h4 className="font-bold text-white">

                                    Data Integrity

                                </h4>

                            </div>

                            <div className="rounded-3xl bg-white/5 p-6">

                                <Globe
                                    className="mb-4 text-orange-400"
                                    size={30}
                                />

                                <h4 className="font-bold text-white">

                                    Secure Communication

                                </h4>

                            </div>

                            <div className="rounded-3xl bg-white/5 p-6">

                                <Database
                                    className="mb-4 text-orange-400"
                                    size={30}
                                />

                                <h4 className="font-bold text-white">

                                    Protected Storage

                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}