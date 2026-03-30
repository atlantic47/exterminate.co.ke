import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, AlertTriangle, ChevronRight, Phone, Bug } from "lucide-react";

export const metadata: Metadata = {
  title: "Cockroach Control in Kenya | Pestraid Kenya",
  description: "Professional cockroach control services across Kenya. Gel baiting, residual sprays, and crack-and-crevice treatments to eliminate German and American cockroach infestations.",
};

const diseases = [
  "Salmonellosis — food poisoning from Salmonella bacteria carried on cockroach bodies",
  "Dysentery — acute diarrhoea caused by pathogens deposited on food contact surfaces",
  "Gastroenteritis — stomach infection spread through cockroach droppings and shed skins",
  "Typhoid fever — Salmonella Typhi transmitted through contaminated food and water",
  "Asthma and allergies — cockroach allergens are a leading trigger of childhood asthma in Kenya",
  "E. coli infections — from cockroaches foraging through sewage and then onto kitchen surfaces",
];

const treatmentProcess = [
  { step: "01", title: "Full Property Inspection", desc: "We conduct a systematic inspection of all cockroach harborage zones — kitchen units, plumbing voids, electrical panels, appliance motors, drains, and storerooms. We identify the species (German or American), map infestation hotspots, and document entry points." },
  { step: "02", title: "Gel Bait Application", desc: "Gel bait is placed in precise micro-dots at cockroach activity points. Cockroaches are attracted to the bait, consume it, return to the harbourage, and die — where other cockroaches then consume the contaminated bodies, creating a lethal cascade through the population." },
  { step: "03", title: "Residual Insecticide Treatment", desc: "We apply long-lasting residual insecticides to all surface areas where cockroaches travel, including skirting boards, behind appliances, shelf undersides, and drainage channels. The residual effect continues killing cockroaches for weeks after application." },
  { step: "04", title: "Crack and Crevice Treatment", desc: "Targeted application of insecticide dust or gel into wall cracks, junction gaps, and structural voids where cockroaches shelter. This reaches populations that surface treatments cannot access." },
  { step: "05", title: "Drain and Sewer Treatment", desc: "German cockroaches exploit drainage systems as highways between properties. We treat drains and sewer access points with appropriate insecticide formulations to break this transmission route." },
  { step: "06", title: "Follow-Up Inspection", desc: "We return 2–3 weeks post-treatment to assess efficacy, address any residual activity, and provide recommendations for structural proofing to prevent re-infestation." },
];

const prevention = [
  { area: "Kitchen", tips: ["Store all food in sealed containers — never in open bags or bowls", "Clean up food spills and crumbs immediately", "Empty bins daily and use bins with tight-fitting lids", "Clean behind and beneath refrigerators and cookers regularly"] },
  { area: "Plumbing", tips: ["Fix all leaking taps, pipes, and drainage issues promptly", "Seal gaps around pipework where it enters walls", "Check under sinks weekly for moisture accumulation", "Ensure all drain covers are in place and intact"] },
  { area: "Structure", tips: ["Seal cracks in walls, skirting boards, and floor junctions", "Install door sweeps on external doors", "Caulk gaps around electrical switches and plugs", "Reduce clutter in storerooms and below sinks"] },
];

const faqs = [
  { q: "What is the difference between German and American cockroaches?", a: "German cockroaches (small, tan) are the most common kitchen pest — they breed rapidly and are highly resistant to many pesticides. American cockroaches (large, reddish-brown) typically enter from drains and sewers. Treatment methods differ between species, which is why professional identification at inspection is essential." },
  { q: "How quickly will I see results after treatment?", a: "Gel bait results are typically visible within 3–5 days as cockroach activity increases before collapsing. Full population elimination usually occurs within 2–4 weeks depending on infestation severity." },
  { q: "How many treatments will I need?", a: "Most infestations are resolved in 1–2 treatments. Severe or long-standing commercial infestations may require an ongoing monthly programme. We'll advise the appropriate schedule at your free inspection." },
  { q: "Is cockroach treatment safe for food preparation areas?", a: "Yes. Our gel bait formulations are approved for use in food handling environments. We apply treatments carefully to avoid food contact surfaces and provide clear guidance on when surfaces can be used again." },
  { q: "Why do cockroaches keep coming back?", a: "Re-infestation typically occurs through untreated entry points such as drain pipes, service ducts, and structural gaps. Long-term control requires both chemical treatment and structural proofing — we provide detailed recommendations for both." },
];

export default function CockroachControlPage() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Cockroach Control</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400 text-black text-xs font-black px-3 py-1 mb-4 uppercase tracking-widest">Eliminate Bacterial Vectors</span>
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              Professional Cockroach Control Services in Kenya
            </h1>
            <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
              German and American cockroaches spread 33+ types of bacteria across Kenyan kitchens, restaurants, and food storage facilities every night. They contaminate food, trigger asthma attacks, and are increasingly resistant to over-the-counter sprays.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Our colony-elimination approach uses professional gel baiting, residual insecticides, and targeted crack-and-crevice treatments to wipe out entire populations — not just the few you can see. For a full breakdown of cockroach control costs in Kenya, see <a href="https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-amber-300 font-semibold underline underline-offset-2 hover:text-white">Pestraid Kenya's cockroach control pricing guide</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
                <Phone className="mr-2 w-4 h-4" /> Get a Free Quote
              </Link>
              <a href="tel:+254710907628" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                Call +254 710 907 628
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HEALTH RISKS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">The Health Risk</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Why Cockroaches Are a Serious Public Health Hazard</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Cockroaches are not merely a nuisance — they are vectors for serious disease. A single cockroach foraging through sewage and then across your kitchen worktop can deposit hundreds of pathogenic bacteria. In Kenyan urban environments, the consequences are severe. <a href="https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's cockroach control service</a> provides detailed information on the health risks and professional treatment options available.</p>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Cockroach infestations have been directly linked to repeated disease outbreaks in Nairobi's food service industry, shared residences, and schools. Controlling them is a public health obligation, not just a comfort matter. Kitchens with cockroach problems frequently also struggle with houseflies — <a href="https://pestraid.co.ke/services/houseflies-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's housefly control service</a> is a recommended addition for commercial food handling environments.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diseases.map((d, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#fbf7f0] border-2 border-black p-5">
                <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-700 leading-relaxed">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT PROCESS */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Our Process</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Our 6-Step Cockroach Elimination Process</h2>
          <p className="text-neutral-600 leading-relaxed mb-12 max-w-2xl">Effective cockroach control requires a systematic, multi-method approach. Surface sprays alone never achieve lasting control — here's how we do it properly. Compare this process with the approach at <a href="https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's professional cockroach elimination service</a>. Comprehensive property hygiene also limits damp spaces, reducing the need for extensive <a href="https://moldguardkenya.co.ke/services" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold remediation services</a> around affected areas.</p>
          <div className="flex flex-col gap-5">
            {treatmentProcess.map((s, i) => (
              <div key={i} className="flex gap-6 bg-white border-2 border-black p-8">
                <div className="text-3xl font-heading font-black text-neutral-200 leading-none shrink-0">{s.step}</div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Prevention</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Preventing Cockroach Re-Infestation</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Treatment eliminates your current infestation. These structural and hygiene measures prevent cockroaches from returning. For spider pest problems that sometimes share harborage zones with cockroaches, <a href="https://pestraid.co.ke/services/spider-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's spider control service</a> covers treatment across all major Kenyan cities. Keeping these environments properly ventilated is also crucial to avoid fungal damage, which can be addressed through professional <a href="https://moldguardkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold removal interventions</a>.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {prevention.map((area, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-8">
                <Bug className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-heading font-bold text-lg mb-4">{area.area}</h3>
                <ul className="space-y-2">
                  {area.tips.map((tip, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="w-3 h-3 text-green-600 shrink-0 mt-0.5" /> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-black tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border-2 border-black p-6">
                <h3 className="font-heading font-bold text-base mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-black mb-4">Ready to Eliminate Cockroaches for Good?</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Same-week service available across Nairobi, Mombasa, Kisumu, and surrounding areas. Book a free property inspection today.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-10 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
            <Phone className="mr-2 w-4 h-4" /> Book Now
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h3 className="font-heading font-bold text-lg mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "General Fumigation", href: "/services/general-fumigation" },
              { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
              { label: "Rodent Control", href: "/services/rodent-control" },
              { label: "Termite Control", href: "/services/termite-control" },
              { label: "All Services", href: "/services" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="inline-flex items-center gap-1 border-2 border-black px-4 py-2 text-sm font-bold hover:bg-black hover:text-white transition-colors">
                {link.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
