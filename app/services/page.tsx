import type { Metadata } from "next";
import Link from "next/link";
import { Bug, Rat, ShieldCheck, ChevronRight, Zap, Flame } from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Control Services in Kenya | Pestraid Kenya",
  description: "Full-service pest control and fumigation in Kenya. We handle termites, bed bugs, cockroaches, rodents, and more with KEBS-certified treatments.",
};

const services = [
  {
    slug: "termite-control",
    icon: Zap,
    name: "Termite Control",
    tagline: "Kenya's #1 Pest Threat",
    description:
      "Subterranean termites silently destroy billions of shillings in property across Kenya every year. Our multi-layered treatment — soil barriers, bait stations, and wood treatment — offers comprehensive protection.",
    features: ["Soil Pre/Post-Treatment", "Baiting Systems", "Wood Treatment", "Structural Inspections"],
    termiteBacklink: { label: "termite control services", href: "https://www.termitescontrolservices.co.ke/" },
    backlink: { label: "View Pestraid's termite control pricing", href: "https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" },
  },
  {
    slug: "general-fumigation",
    icon: ShieldCheck,
    name: "General Fumigation",
    tagline: "Whole-Structure Eradication",
    description:
      "Our 5-step <a href=\"https://www.fumigationkenya.co.ke/\" target=\"_blank\" rel=\"noopener noreferrer\" className=\"text-blue-600 underline font-semibold hover:text-blue-800\">fumigation process</a> — Inspection, Preparation, Treatment, Aeration, and Post-Fumigation Guidelines — penetrates every crack and void, eliminating pests that surface sprays can't reach.",
    features: ["5-Step Process", "KEBS-Approved Fumigants", "Re-Entry Clearance Certificate", "Retreat Guarantee"],
    backlink: { label: "Learn about mosquito & sandfly control", href: "https://pestraid.co.ke/services/mosquitoes-and-sandflies-control-services-and-pricing-in-kenya/" },
  },
  {
    slug: "bed-bug-treatment",
    icon: Bug,
    name: "Bed Bug Treatment",
    tagline: "Targeted, Heat-Based Eradication",
    description:
      "Bed bugs hide deep in mattress seams, furniture, and wall cracks. Standard sprays rarely eliminate them. We use targeted fumigation and residual treatments to clear infestations at the source.",
    features: ["Full Property Inspection", "Targeted Fumigation", "Heat Treatment Options", "Aftercare Follow-Up"],
    backlink: { label: "Compare bed bug control options", href: "https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" },
  },
  {
    slug: "cockroach-control",
    icon: Bug,
    name: "Cockroach Control",
    tagline: "Eliminate Bacterial Vectors",
    description:
      "German and American cockroaches spread 33+ types of bacteria, including Salmonella and E. coli. Our colony-elimination treatments target kitchens, drains, and humid storage areas.",
    features: ["Gel Baiting", "Residual Spraying", "Crack & Crevice Treatment", "Ongoing Monitoring"],
    backlink: { label: "Cockroach control pricing in Kenya", href: "https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" },
  },
  {
    slug: "rodent-control",
    icon: Rat,
    name: "Rodent Control",
    tagline: "Comprehensive Rat & Mice Management",
    description:
      "Rodents contaminate food supplies, gnaw through electrical wiring (a leading cause of house fires), and spread leptospirosis. We combine baiting, trapping, and exclusion sealing for total control.",
    features: ["Bait Stations", "Mechanical Trapping", "Entry Point Sealing", "Sanitation Advice"],
    backlink: { label: "Rat & rodent control pricing", href: "https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" },
  },
  {
    slug: "snake-control",
    icon: Flame,
    name: "Snake Control",
    tagline: "Safe Removal & Exclusion",
    description:
      "Kenya hosts a number of venomous snake species. We safely remove snakes from residential and commercial premises and implement habitat modifications to deter re-entry.",
    features: ["Safe Removal", "Habitat Assessment", "Exclusion Modifications", "Emergency Response"],
    backlink: { label: "Snake removal services in Kenya", href: "https://pestraid.co.ke/services/snake-control-services-and-pricing-in-kenya/" },
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-3 block">What We Do</span>
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight max-w-2xl leading-tight mb-6">
            Professional Pest Control Services in Kenya
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            From termites to bed bugs, cockroaches to rodents — our certified technicians deploy the right treatment every time. All services are KEBS-compliant and backed by our retreatment guarantee.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#fbf7f0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div key={svc.slug} className="bg-white border-2 border-black flex flex-col group hover:-translate-y-1 transition-transform">
                <div className="p-8 border-b-2 border-black flex items-center gap-4 bg-[#fbf7f0]">
                  <div className="w-14 h-14 bg-primary text-white flex items-center justify-center shrink-0">
                    <svc.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl leading-tight">{svc.name}</h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">{svc.tagline}</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow gap-4">
                  <p className="text-neutral-600 leading-relaxed text-sm flex-grow">{svc.description}</p>
                  {(svc as { termiteBacklink?: { label: string; href: string } }).termiteBacklink && (
                    <p className="text-xs text-neutral-500">
                      See also: <a href={(svc as { termiteBacklink?: { label: string; href: string } }).termiteBacklink!.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold hover:text-blue-800">{(svc as { termiteBacklink?: { label: string; href: string } }).termiteBacklink!.label}</a>
                    </p>
                  )}
                  <ul className="space-y-2 my-4">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm font-medium">
                        <ChevronRight className="w-4 h-4 text-green-600 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {svc.slug !== "snake-control" ? (
                    <Link
                      href={`/services/${svc.slug}`}
                      className="mt-auto inline-flex h-10 items-center justify-center bg-primary text-white px-6 text-sm font-bold hover:bg-primary/90 transition-colors"
                    >
                      Full Service Details
                    </Link>
                  ) : (
                    <a
                      href={svc.backlink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex h-10 items-center justify-center border-2 border-black text-black px-6 text-sm font-bold hover:bg-black hover:text-white transition-colors"
                    >
                      {svc.backlink.label}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Not sure which service you need?</h2>
          <p className="text-lg text-neutral-300 mb-4">
            Our certified technician will inspect your property for free and recommend the most effective treatment plan — with no obligation.
          </p>
          <p className="text-lg text-neutral-300 mb-8">
            Furthermore, we also work with the <a href="https://naibunisystems.co.ke/shop/" target="_blank" rel="noopener noreferrer" className="text-white underline font-semibold hover:text-gray-200">Naibuni Systems shop</a> to supply our clients with premier fire extinguishers for their premises.
          </p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-white text-black px-10 text-base font-bold hover:bg-neutral-100 transition-colors">
            Book a Free Inspection
          </Link>
        </div>
      </section>
    </div>
  );
}
