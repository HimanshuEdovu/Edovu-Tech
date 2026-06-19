"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Autoplay,
    EffectCoverflow,
} from "swiper/modules";

import {
    ChevronLeft,
    ChevronRight,
    X,
    MonitorSmartphone,
} from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const features = [
    "AI Learning",
    "Live Classes",
    "Assessments",
    "Analytics",
    "ERP",
    "Attendance",
    "Certificates",
    "Reports",
];

export default function LMSShowcaseSlider() {
        const [selectedImage, setSelectedImage] = useState(null);


    const lmsImages = [

    {
        image: "/lmsImages/lms-1.png",
        title: "AI Dashboard",
    },

    {
        image: "/lmsImages/lms-2.png",
        title: "Student Portal",
    },

    {
        image: "/lmsImages/lms-3.png",
        title: "",
    },
    {
        image: "/lmsImages/lms-4.png",
        title: "",
    },
    {
        image: "/lmsImages/lms-5.png",
        title: "",
    },
    {
        image: "/lmsImages/lms-6.png",
        title: "ERP System",
    },
    {
        image: "/lmsImages/lms-7.png",
        title: "",
    },
    {
        image: "/lmsImages/lms-8.png",
        title: "",
    },
    {
        image: "/lmsImages/lms-9.png",
        title: "",
    },

];
    useEffect(() => {

    const handleKeyDown = (e) => {

        if (!selectedImage) return;

        if (e.key === "Escape") {
            setSelectedImage(null);
        }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);

}, [selectedImage]);


    return (

        <section className="relative overflow-hidden bg-white py-24">

            {/* Background */}

            <div className="absolute left-0 top-0 h-[450px] w-[450px] rounded-full bg-orange-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="relative mx-auto max-w-7xl px-5">

                {/* Heading */}

                <motion.div

                    initial={{ opacity: 0, y: 30 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .7 }}

                    className="mx-auto max-w-4xl text-center"

                >

                    <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">

                        <MonitorSmartphone size={14} />

                        Product Experience

                    </span>

                    <h2 className="mt-7 text-5xl font-black leading-tight text-slate-900 lg:text-6xl">

                        Designed For Every

                        <span className="block text-orange-500">

                            Learning Journey

                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">

                        Explore beautifully crafted interfaces that bring together learning, assessments, collaboration, analytics, and academic administration into one unified platform.

                    </p>

                </motion.div>

                {/* Feature Chips */}

            

                {/* Custom Navigation */}

                <div className="mt-4 flex items-center justify-center gap-5">

                    <button className="lms-prev flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition hover:border-orange-300 hover:text-orange-500">

                        <ChevronLeft size={24} />

                    </button>

                    <button className="lms-next flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg transition hover:border-orange-300 hover:text-orange-500">

                        <ChevronRight size={24} />

                    </button>

                </div>

                {/* Swiper Starts Below */}
                <div className="mt-16">

                    <Swiper

                        modules={[
                            Navigation,
                            Pagination,
                            Autoplay,
                            EffectCoverflow,
                        ]}

                        effect="coverflow"

                        grabCursor={true}

                        centeredSlides={true}

                        loop={true}

                        slidesPerView={"auto"}

                        navigation={{
                            prevEl: ".lms-prev",
                            nextEl: ".lms-next",
                        }}

                        pagination={{
                            clickable: true,
                        }}

                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}

                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 180,
                            modifier: 1,
                            scale: .88,
                            slideShadows: false,
                        }}

                       breakpoints={{

    320: {
        slidesPerView: 1.05,
    },

    768: {
        slidesPerView: 1.15,
    },

    1024: {
        slidesPerView: 1.3,
    },

    1400: {
        slidesPerView: 1.45,
    },

    1700: {
        slidesPerView: 1.55,
    },

}}

                        className="pb-16"

                    >

                        {lmsImages.map((image, index) => (

                            <SwiperSlide

                                key={index}

                                // className="!w-[88%] lg:!w-[75%]"

                            >

                                <motion.div

                                    whileHover={{

                                        y: -10,

                                    }}

                                    transition={{

                                        duration: .3,

                                    }}

                                    onClick={() => setSelectedImage(image.image)}

                                    className="group cursor-pointer"

                                >

                                    {/* Browser Mockup */}

                                    <div className="overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-2xl transition-all duration-500 group-hover:shadow-orange-200/40">

                                        {/* Browser Top */}

                                        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-6 py-4">

                                            <div className="h-3 w-3 rounded-full bg-red-400" />

                                            <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                            <div className="h-3 w-3 rounded-full bg-green-400" />

                                        </div>

                                        {/* Image */}

                                        <div className="relative bg-slate-100">

                                            <Image

                                                src={image.image}

                                                alt={`LMS ${index}`}

                                                width={1600}

                                                height={1000}

                                                className="h-auto w-full object-contain transition duration-700 group-hover:scale-[1.02]"

                                            />

                                            {/* Overlay */}

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                                        </div>

                                    </div>

                                </motion.div>

                            </SwiperSlide>

                        ))}

                    </Swiper>

                </div>

                {/* Modal Starts Below */}
                {/* Premium Image Modal */}

                <AnimatePresence>

                    {selectedImage && (

                        <motion.div

                            initial={{ opacity: 0 }}

                            animate={{ opacity: 1 }}

                            exit={{ opacity: 0 }}

                            transition={{ duration: .25 }}

                            onClick={() => setSelectedImage(null)}

                            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-6"

                        >

                            <motion.div

                                initial={{
                                    scale: .92,
                                    opacity: 0,
                                }}

                                animate={{
                                    scale: 1,
                                    opacity: 1,
                                }}

                                exit={{
                                    scale: .92,
                                    opacity: 0,
                                }}

                                transition={{
                                    duration: .3,
                                }}

                                onClick={(e) => e.stopPropagation()}

                                className="relative w-full max-w-7xl"

                            >

                                {/* Close Button */}

                                <button

                                    onClick={() => setSelectedImage(null)}

                                    className="absolute -right-4 -top-4 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white text-slate-800 shadow-2xl transition hover:scale-110 hover:text-orange-500"

                                >

                                    <X size={26} />

                                </button>

                                {/* Browser Frame */}

                                <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,.45)]">

                                    {/* Browser Header */}

                                    <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-50 px-6 py-4">

                                        <div className="h-3 w-3 rounded-full bg-red-400" />

                                        <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                        <div className="h-3 w-3 rounded-full bg-green-400" />

                                    </div>

                                    {/* Image */}

                                    <div className="relative flex max-h-[85vh] items-center justify-center bg-slate-100 p-4 lg:p-8">

                                        <Image

                                            src={selectedImage}

                                            alt="LMS Preview"

                                            width={2200}

                                            height={1400}

                                            className="max-h-[80vh] w-auto rounded-xl object-contain"

                                            priority

                                        />

                                    </div>

                                </div>

                            </motion.div>

                        </motion.div>

                    )}

                </AnimatePresence>
            </div>

        </section>

    );

}