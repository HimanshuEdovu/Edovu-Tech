"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Sparkles,
  BarChart3,
  Cloud,
  GraduationCap,
  ShieldCheck,
  Gamepad2,
  ClipboardCheck,
  MonitorSmartphone,
  ScanSearch,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Adaptive Learning",
    desc: "AI personalizes content and pacing for every learner.",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: Sparkles,
    title: "AI Auto Counseling",
    desc: "Smart recommendations based on strengths and interests.",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: BarChart3,
    title: "Learning Analytics",
    desc: "Track engagement and performance with real-time insights.",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: ClipboardCheck,
    title: "Automated Grading",
    desc: "Reduce faculty workload with instant evaluation.",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: Cloud,
    title: "AI Content Authoring",
    desc: "Generate quizzes, notes and learning material faster.",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: Gamepad2,
    title: "Gamification",
    desc: "Badges, rewards and leaderboards increase engagement.",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: ShieldCheck,
    title: "AI Proctored Exams",
    desc: "Maintain exam integrity with intelligent monitoring.",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: MonitorSmartphone,
    title: "Interactive Learning",
    desc: "Live activities and collaboration improve retention.",
    color: "from-teal-500 to-teal-400",
  },
  {
    icon: GraduationCap,
    title: "AR / VR Learning",
    desc: "Immersive education experiences for modern classrooms.",
    color: "from-orange-500 to-orange-400",
  },
  {
    icon: ScanSearch,
    title: "Auto Class Monitoring",
    desc: "Attendance, activity and alerts handled automatically.",
    color: "from-teal-500 to-teal-400",
  },
];

export default function AiFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#08111f] px-5 py-14 sm:px-6 lg:px-8">
      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]" />
      <div className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full bg-teal-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:.7}}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
            AI Powered Features
          </span>

          <h2 className="mt-6 text-4xl font-black text-white lg:text-6xl">
            The Intelligence Behind
            <br />
            Every Learning Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Edovu LMS combines artificial intelligence, automation and analytics
            to create personalized, engaging and scalable education experiences.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {features.map((item,index)=>{
            const Icon=item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{delay:index*0.05,duration:.5}}
                whileHover={{y:-8}}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/5 blur-3xl transition group-hover:scale-125" />
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color}`}>
                  <Icon className="h-7 w-7 text-white"/>
                </div>

                <h3 className="text-lg font-black text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-16 rounded-[36px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-teal-500 shadow-2xl">
              <BrainCircuit className="h-10 w-10 text-white"/>
            </div>

            <h3 className="text-3xl font-black text-white">
              Edovu AI Engine
            </h3>

            <p className="mt-4 max-w-3xl text-slate-300 leading-8">
              One intelligent platform that automates learning, assessments,
              analytics, content generation, classroom monitoring and student
              engagement—helping institutions deliver better outcomes with less
              administrative effort.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
