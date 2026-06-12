import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FeatureCard from "@/components/FeatureCard";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <PageHero
          eyebrow="Our services"
          title="Ed tech services that connect learning delivery with daily academic operations."
          description="We help institutions deploy LMS, ERP, digital content, analytics, integrations, and training programs with a practical implementation approach."
        />
        <Reveal as="section" className="px-5 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Solutions"
              title="One partner for platform, content, and adoption"
              description="Choose the modules you need today and grow into a complete digital campus ecosystem."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <FeatureCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
