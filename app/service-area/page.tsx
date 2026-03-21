import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Control Service Areas in Kenya | Exterminate",
  description: "Exterminate provides pest control and fumigation services across Kenya — Nairobi (Westlands, Karen, Langata), Mombasa, Kisumu, Nakuru, Eldoret, and more.",
};

const areas = [
  {
    city: "Nairobi",
    type: "Headquarters",
    districts: ["Westlands", "Karen", "Langata", "Eastleigh", "Runda", "Kasarani", "Embakasi", "South B", "South C", "Kilimani"],
    desc: "Our main operations hub. Nairobi accounts for the majority of our residential and commercial pest control work — termite pressure is especially high in older timber-frame homes in Karen, Runda, and Langata.",
  },
  {
    city: "Mombasa",
    type: "Coastal Operations",
    districts: ["Nyali", "Bamburi", "Likoni", "Diani", "Kiembeni"],
    desc: "The coastal humidity creates aggressive termite and cockroach conditions. We operate regular spray programme routes in Mombasa for hotels, restaurants, and food processing businesses.",
  },
  {
    city: "Kisumu",
    type: "Western Kenya",
    districts: ["Milimani", "Kondele", "Nyalenda", "Mamboleo"],
    desc: "The lake region climate drives mosquito and ant activity. We provide fumigation and rodent control for warehouses, schools, and healthcare facilities in Kisumu and Kisii.",
  },
  {
    city: "Nakuru",
    type: "Rift Valley",
    districts: ["Nakuru Town", "Lanet", "Bahati", "Kabarak"],
    desc: "Agricultural activity in the Rift Valley drives rodent pressure. We service grain stores, flower farms, and residential properties across Nakuru County.",
  },
  {
    city: "Eldoret",
    type: "North Rift",
    districts: ["Eldoret Town", "Huruma", "Langas"],
    desc: "We cover commercial and institutional pest management for schools, hospitals, and food businesses in Eldoret and the broader Uasin Gishu County.",
  },
  {
    city: "Thika",
    type: "Industrial & Residential",
    districts: ["Thika Town", "Blue Post", "Makongeni"],
    desc: "Thika's industrial zones require compliance-grade pest management. We serve food processing plants, textile companies, and residential estates in Thika.",
  },
];

export default function ServiceAreaPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-3 block">Coverage</span>
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
            Pest Control Service Areas Across Kenya
          </h1>
          <p className="text-lg text-neutral-300">
            From Nairobi's upscale estates to Mombasa's coastal hotels, we deploy certified pest control technicians wherever you need us. No matter your location in Kenya, we can help.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#fbf7f0] border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-black tracking-tight mb-6">Why Location Matters in Pest Control</h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-4">
            Kenya's diverse geography — from humid coastal cities to the cool central highlands and arid northern counties — means pest pressures vary significantly by region. A coastal hotel in Mombasa faces different challenges than a Nairobi apartment block or a Nakuru grain store.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Our regional teams are trained for area-specific pest profiles. Our Nairobi crews are experts in subterranean termite control, while our coastal teams specialise in humidity-driven cockroach and mosquito management. For areas where specialised knowledge matters, we also partner with providers like <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Pestraid Kenya</a> to ensure every client gets the best expertise available.
          </p>
        </div>
      </section>

      {/* Area Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area) => (
              <div key={area.city} className="border-2 border-black bg-[#fbf7f0] flex flex-col hover:-translate-y-1 transition-transform">
                <div className="p-6 border-b-2 border-black flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl leading-tight">{area.city}</h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">{area.type}</span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-4 flex-grow">
                  <p className="text-neutral-600 text-sm leading-relaxed">{area.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {area.districts.map((d) => (
                      <span key={d} className="text-xs bg-white border border-black px-2 py-1 font-medium">{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside listed areas */}
      <section className="py-16 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-heading font-bold mb-4">Not in the List? We Likely Still Cover You.</h2>
          <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            Our service coverage is expanding continuously. If your county or town is not listed above, please call us — we can confirm availability and dispatch a technician in most cases within 2–5 business days. For <a href="https://pestraid.co.ke/services/snake-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">snake control services in Kenya</a> outside urban areas, we also recommend consulting regional specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254710907628" className="inline-flex h-14 items-center justify-center bg-primary text-white px-10 text-base font-bold hover:bg-primary/90">
              <Phone className="mr-2 w-4 h-4" /> Call +254 710 907 628
            </a>
            <Link href="/contact" className="inline-flex h-14 items-center justify-center border-2 border-black text-black px-8 text-sm font-bold hover:bg-black hover:text-white transition-colors">
              Send a Message <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
