"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, Building2, Users, Mail, Phone, User } from "lucide-react";
export default function DemoModal({ open, onClose }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        institution: "",
        type: "",
        students: "",
        message: "",
    });
    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [open]);
    const c = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const s = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
        }, 1200);
    };
    const i =
        "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400";
    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        onClick={onClose}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.96,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4"
                    >
                        <div
  onClick={(e) => e.stopPropagation()}
  className="relative w-full max-w-3xl overflow-hidden rounded-[36px] border border-white/10 bg-[#08111f] shadow-2xl"
>
                        <div className="absolute -left-16 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[120px]" />
                        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-teal-500/20 blur-[120px]" />
                        <button
                            onClick={onClose}
                            className="absolute right-2 top-2 rounded-full bg-white/10 p-2 text-white"
                        >
                            <X size={18} />
                        </button>
                        {!success ? (
                            <div className="grid lg:grid-cols-[320px_1fr]">
                                <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-8 text-white">
                                    <Calendar size={42} />
                                    <h2 className="mt-6 text-4xl font-black">Book a Demo</h2>
                                    <p className="mt-4">
                                        See how Edovu LMS transforms institutions.
                                    </p>
                                </div>
                                <form onSubmit={s} className="space-y-4 p-9">
                                    <input
                                        name="name"
                                        onChange={c}
                                        placeholder="Full Name"
                                        className={i}
                                        required
                                    />
                                    <input
                                        name="phone"
                                        onChange={c}
                                        placeholder="Phone Number"
                                        className={i}
                                        required
                                    />
                                    <input
                                        name="email"
                                        onChange={c}
                                        placeholder="Official Email"
                                        className={i}
                                        required
                                    />
                                    <input
                                        name="institution"
                                        onChange={c}
                                        placeholder="Institution"
                                        className={i}
                                    />
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <select name="type" className={i}>
                                            <option className="text-black">School</option>
                                            <option className="text-black">College</option>
                                            <option className="text-black">University</option>
                                        </select>
                                        <input
                                            name="students"
                                            onChange={c}
                                            placeholder="Students"
                                            className={i}
                                        />
                                    </div>
                                    <textarea
                                        rows="4"
                                        name="message"
                                        onChange={c}
                                        className={i}
                                        placeholder="Requirements"
                                    />
                                    <button
                                        disabled={loading}
                                        className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-400 py-4 font-bold text-white"
                                    >
                                        {loading ? "Scheduling..." : "Book My Free Demo"}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="p-14 text-center text-white">
                                <h2 className="text-4xl font-black">Demo Request Received</h2>
                                <p className="mt-4 text-slate-300">
                                    We'll contact you within 24 hours.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-8 rounded-full bg-orange-500 px-8 py-3"
                                >
                                    Close
                                </button>
                            </div>
                        )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
