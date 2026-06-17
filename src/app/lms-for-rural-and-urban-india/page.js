"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Wifi,
  Smartphone,
  Download,
  Languages,
  Building2,
  BrainCircuit,
  BarChart3,
  Layers3,
  ArrowRight,
} from "lucide-react";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import NEPInfrastructureSection from "@/components/RuralLMS/NEPInfrastructureSection";
import DigitalGovernanceSection from "@/components/RuralLMS/DigitalGovernanceSection";
import PersonalizedLearningSection from "@/components/RuralLMS/PersonalizedLearningSection";
import IntelligentTutoringSection from "@/components/RuralLMS/IntelligentTutoringSection";
import HybridLMSSection from "@/components/RuralLMS/HybridLMSSection";
import VernacularIntegrationSection from "@/components/RuralLMS/VernacularIntegrationSection";
import NationalIntegrationSection from "@/components/RuralLMS/NationalIntegrationSection";

const rural = [
  {
    icon: Wifi,
    title: "Low-Bandwidth Optimization",
    desc: "Learning content loads efficiently even in areas with limited internet connectivity.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Learning",
    desc: "Access courses, assessments and recordings directly from smartphones.",
  },
  {
    icon: Download,
    title: "Offline Learning Support",
    desc: "Download learning materials for uninterrupted offline learning.",
  },
  {
    icon: Languages,
    title: "Local Language Support",
    desc: "Enable learning in regional languages for better accessibility.",
  },
];

const urban = [
  {
    icon: Building2,
    title: "Smart Campus Integration",
    desc: "Connect learning systems with modern digital infrastructure.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Powered Learning Analytics",
    desc: "Advanced reporting and performance insights.",
  },
  {
    icon: Layers3,
    title: "Hybrid Learning Environment",
    desc: "Combine classroom and online education seamlessly.",
  },
  {
    icon: BarChart3,
    title: "Enterprise Scalability",
    desc: "Support thousands of concurrent users across campuses.",
  },
];

export default function RuralUrbanLMSPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section className="relative overflow-hidden bg-[#08111f] px-5 py-24 text-white">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />
          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">

            <div>
              <span className="inline-flex rounded-full border border-orange-400/30 bg-orange-500/10 px-4 py-2 text-xs font-bold tracking-[0.25em] text-orange-200 uppercase">
                LMS for Rural & Urban India
              </span>

              <h1 className="mt-6 text-5xl lg:text-6xl font-black leading-tight">
                Bridging the Educational Divide
              </h1>

              <p className="mt-6 text-lg text-slate-300 leading-8">
                Edovu Learn provides flexible LMS solutions designed for both
                technologically advanced urban institutions and
                resource-constrained rural learning environments.
              </p>

              {/* <button className="mt-10 rounded-full bg-orange-500 px-7 py-4 font-bold flex items-center gap-2">
                Request Demo <ArrowRight size={18}/>
              </button> */}
            </div>

            <motion.div whileHover={{scale:1.02}}>
              {/* <div className="overflow-hidden rounded-[32px] shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80"
                  alt="Education"
                  width={900}
                  height={700}
                  className="w-full h-full object-cover"
                />
              </div> */}
            </motion.div>
          </div>
        </section>
        
           <section className="relative overflow-hidden bg-[#fff] px-5 py-14 sm:px-6 lg:px-8">
        
              {/* Background */}
        
              <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500/20 blur-[120px]" />
        
              <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />
        
              <div className="relative mx-auto max-w-7xl">
        
                <div className="grid items-center gap-16 lg:grid-cols-2">
        
                  {/* IMAGE */}
        
                  <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
        
                    <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl">
        
                      <Image
                        src="/ruralImages/rural-1.webp"
                        alt="Students Learning"
                        width={800}
                        height={700}
                        className="h-full w-full object-cover"
                      />
        
                    </div>
        
                    {/* Floating Card */}
        
                    <div className="absolute -bottom-8 left-8 rounded-[28px] border border-orange-400/20 bg-[#0f1729]/90 p-6 backdrop-blur-2xl shadow-2xl">
        
                      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-400">
        
                        <BrainCircuit size={32} className="text-white" />
        
                      </div>
        
                      <h2 className="text-4xl font-black text-white">
        
                        AI
        
                      </h2>
        
                      <p className="mt-1 text-sm text-slate-300">
        
                        Powered Learning Experience
        
                      </p>
        
                    </div>
        
                  </motion.div>
        
                  {/* CONTENT */}
        
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    viewport={{ once: true }}
                  >
        
                    <span className="inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-300">
        
                      Smart LMS Platform
        
                    </span>
        
                    <h2 className="mt-6 text-4xl font-black leading-tight text-black lg:text-5xl">
        
                    From Villages to 
                      <br />
                   Smart Cities, Learning
                   <br/>Never Stops
        
                    </h2>
        
                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
        
                     Empowering schools, colleges, and learners across rural and urban India with accessible, secure, and AI-powered learning experiences.
        
                    </p>
        
                    {/* Feature Box */}
{/*         
                    <div className="mt-10 rounded-[28px] border border-white/10 bg-black/5 p-7 backdrop-blur-xl">
        
                      <div className="grid gap-5">
        
                        <div className="flex items-center gap-4">
        
                          <div className="rounded-xl bg-orange-600/10 p-3 text-orange-600">
        
                            <BookOpen size={22} />
        
                          </div>
        
                          <div>
        
                            <h4 className="font-bold text-black">
        
                              Unlimited Courses & Live Classes
        
                            </h4>
        
                            <p className="text-sm text-slate-600">
        
                              One platform for every learning experience.
        
                            </p>
        
                          </div>
        
                        </div>
        
                        <div className="flex items-center gap-4">
        
                          <div className="rounded-xl bg-teal-600/10 p-3 text-teal-600">
        
                            <GraduationCap size={22} />
        
                          </div>
        
                          <div>
        
                            <h4 className="font-bold text-black">
        
                              Student Progress Tracking
        
                            </h4>
        
                            <p className="text-sm text-slate-600">
        
                              Analytics, reports and personalized insights.
        
                            </p>
        
                          </div>
        
                        </div>
        
                        <div className="flex items-center gap-4">
        
                          <div className="rounded-xl bg-orange-600/10 p-3 text-orange-600">
        
                            <Sparkles size={22} />
        
                          </div>
        
                          <div>
        
                            <h4 className="font-bold text-black">
        
                              AI Teacher & AI Mentor
        
                            </h4>
        
                            <p className="text-sm text-slate-600">
        
                              24/7 intelligent assistance for every learner.
        
                            </p>
        
                          </div>
        
                        </div>
        
                      </div>
        
                    </div> */}
        
                  </motion.div>
        
                </div>
        
              </div>
        
            </section>  

        <section className="px-5 py-24">
          <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">

            <div className="rounded-[32px] bg-[#08111f] p-10 text-white">
              <h2 className="text-4xl font-black mb-8">Rural India</h2>

              <div className="space-y-6">
                {rural.map((item)=>{
                  const Icon=item.icon;
                  return(
                    <div key={item.title} className="flex gap-5">
                      <div className="rounded-2xl bg-orange-500/10 p-4">
                        <Icon className="text-orange-400"/>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-slate-300 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-10 shadow-xl">
              <h2 className="text-4xl font-black mb-8">Urban India</h2>

              <div className="space-y-6">
                {urban.map((item)=>{
                  const Icon=item.icon;
                  return(
                    <div key={item.title} className="flex gap-5">
                      <div className="rounded-2xl bg-orange-100 p-4">
                        <Icon className="text-orange-500"/>
                      </div>
                      <div>
                        <h3 className="font-bold text-xl">{item.title}</h3>
                        <p className="text-slate-600 mt-2">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

          </div>
        </section>

          {/* NEW SECTIONS */}

    <NEPInfrastructureSection />

    <DigitalGovernanceSection />

    <PersonalizedLearningSection />

    <IntelligentTutoringSection />

    <HybridLMSSection />

    <VernacularIntegrationSection />

    <NationalIntegrationSection />

        

        <section className="px-5 pb-24 mt-12">
          <div className="mx-auto max-w-7xl rounded-[36px] bg-gradient-to-r from-[#08111f] to-[#122038] p-14 text-center text-white">
            <h2 className="text-5xl font-black">Impact</h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-300">
              Edovu Learn helps institutions deliver equitable education
              regardless of geography, infrastructure or economic conditions.
            </p>

            <div className="mt-14 grid gap-6 md:grid-cols-3 ">
              {[
                ["35K+","Learners"],
                // ["120+","Institutions"],
                ["98%","Satisfaction"],
                ["24/7","Cloud Access"],
              ].map(([v,l])=>(
                <div key={l} className="rounded-3xl border border-white/10 bg-white/5 p-8">
                  <div className="text-5xl font-black text-orange-400">{v}</div>
                  <div className="mt-3 text-slate-300">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
