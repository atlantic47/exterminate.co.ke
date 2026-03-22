import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Award, Users, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Pestraid Kenya | Professional Pest Control Kenya",
  description: "Learn about Pestraid Kenya — our mission, our approach, and why we're trusted by thousands of homes and businesses across Kenya for professional pest control.",
};

const pillars = [
  { Icon: Award, title: "Training & Certification", desc: "Every technician on our team is formally trained and certified in pesticide handling, integrated pest management, and safety protocols. We never deploy untrained sub-contractors." },
  { Icon: ShieldCheck, title: "Transparency in Products", desc: "We exclusively use KEBS-approved, WHO-compliant treatments. Every chemical we apply is documented and disclosed — we will never use banned or unregistered substances." },
  { Icon: Users, title: "Client-Centered Service", desc: "From the initial inspection to the post-treatment follow-up, we communicate clearly at every stage. We provide written briefings, safety guidance, and re-entry clearance certificates." },
  { Icon: CheckCircle2, title: "Guaranteed Results", desc: "We stand behind our work. If pests return within the warranty period, we come back — free of charge. Our retreatment guarantee is unconditional and in writing." },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-3 block">Our Story</span>
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
            Protecting Kenyan Homes & Businesses Since Day One
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            Pestraid Kenya | Fumigation and Pest Control Services Company Nairobi Kenya was founded on a simple belief: Kenyans deserve access to professional-grade pest control that is honest, effective, and genuinely affordable — not corner-cutting, not guesswork.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#fbf7f0]">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">
                Our Mission: Education-First Pest Control
              </h2>
              <p className="text-neutral-600 leading-relaxed text-lg mb-4">
                We believe the most effective pest control begins with understanding. Kenya's tropical climate — warm temperatures, high humidity, and two annual rainy seasons — creates near-ideal breeding conditions for termites, rodents, cockroaches, and more. Most homeowners don't realise the extent of the risk until an infestation takes hold.
              </p>
              <p className="text-neutral-600 leading-relaxed text-lg mb-4">
                Our approach starts with education. Our technicians don't just treat — they explain the biology of the pest, the cause of the infestation, and how to prevent recurrence. We create informed clients, not dependency.
              </p>
              <p className="text-neutral-600 leading-relaxed text-lg">
                We collaborate with leading players in Kenya's pest control industry. We recommend trusted specialists like <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Pestraid Kenya</a> when situations require specialised equipment or regional expertise we cannot immediately deploy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "3,000+", label: "Properties Treated" },
                { num: "120+", label: "Happy Clients This Year" },
                { num: "100%", label: "KEBS-Compliant Treatments" },
                { num: "7 Days", label: "A Week, We Are Available" },
              ].map((stat, i) => (
                <div key={i} className="bg-white border-2 border-black p-6 text-center hover:-translate-y-1 transition-transform">
                  <p className="font-heading font-black text-3xl mb-1">{stat.num}</p>
                  <p className="text-sm text-neutral-500 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 bg-white border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-3 block text-center">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-12 text-center">The Four Pillars We Are Built On</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="border-2 border-black p-8 bg-[#fbf7f0] flex gap-6 hover:-translate-y-1 transition-transform">
                <div className="shrink-0 w-12 h-12 bg-primary text-white flex items-center justify-center">
                  <p.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{p.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Areas */}
      <section className="py-16 bg-[#fbf7f0]">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Serving All of Kenya</h2>
          <p className="text-neutral-600 text-sm mb-8 max-w-2xl mx-auto">
            Our teams are deployed across Nairobi (Westlands, Karen, Langata, Eastleigh, Kikuyu), Mombasa, Kisumu, Nakuru, Eldoret, Thika, and surrounding areas. Wherever you are in Kenya, we have you covered.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Karen", "Westlands", "Langata", "Kikuyu"].map((city) => (
              <span key={city} className="border-2 border-black px-4 py-2 text-sm font-bold bg-white hover:bg-black hover:text-white transition-colors cursor-default">
                {city}
              </span>
            ))}
          </div>
          <Link href="/service-area" className="inline-flex h-12 items-center justify-center bg-primary text-white px-8 text-sm font-bold hover:bg-primary/90">
            View Full Service Area Map <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-xl">
          <h2 className="text-3xl font-heading font-black mb-4">Ready to Work With Us?</h2>
          <p className="text-neutral-300 mb-8">Book a free property inspection and let our certified team build a pest management plan tailored to your specific needs.</p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-white text-black px-10 text-base font-bold hover:bg-neutral-100">
            Contact Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
