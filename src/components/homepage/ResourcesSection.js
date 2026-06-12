"use client";

import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { resources } from "@/data/site";

export default function ResourcesSection() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Resources"
          title="Guides & Toolkits"
          description="Knowledge resources for institutions adopting digital education."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {resources.map((resource, index) => (
            <Reveal
              key={resource.title}
              delay={index * 0.05}
              hover
              className="group relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-7 shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-100 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />
              <span className="inline-flex rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-1.5 text-xs font-bold text-white">{resource.type}</span>
              <h3 className="mt-5 text-2xl font-black text-slate-900">{resource.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{resource.description}</p>
              <div className="mt-6 font-semibold text-orange-500">Read Guide →</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
