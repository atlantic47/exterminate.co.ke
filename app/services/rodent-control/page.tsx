import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, AlertTriangle, ChevronRight, Phone, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Rodent Control in Kenya | Pestraid Kenya",
  description: "Professional rat and mouse control services across Kenya. Baiting, trapping, exclusion sealing, and ongoing monitoring to eliminate and prevent rodent infestations.",
};

const diseases = [
  { name: "Leptospirosis", desc: "Spread through rat urine contaminating water, soil, and food — a leading cause of liver and kidney failure in Kenya." },
  { name: "Salmonellosis", desc: "Food poisoning bacteria deposited on food contact surfaces as rodents forage through kitchens and storerooms overnight." },
  { name: "Hantavirus", desc: "Transmitted through dried rodent urine and droppings — particularly dangerous in poorly ventilated storerooms and warehouses." },
  { name: "Rat-Bite Fever", desc: "Bacterial infection transmitted through bites or scratches, or through contact with rodent-contaminated food or water." },
  { name: "Murine Typhus", desc: "Spread through rodent-borne fleas — common in areas with high rat populations and poor sanitation." },
  { name: "Property Damage", desc: "Rodents gnaw through electrical wiring (causing fire risks), water pipes, structural timber, insulation, and stored goods." },
];

const managementApproach = [
  { num: "01", title: "Full Property Survey", desc: "We conduct a room-by-room inspection to map rodent activity: identifying droppings, gnaw marks, runways, entry points, and nesting sites. We determine the species (roof rat, Norway rat, or house mouse), population size, and severity level." },
  { num: "02", title: "Strategic Bait Station Placement", desc: "Tamper-resistant bait stations are placed along confirmed rodent runways, near entry points, and in harborage areas. Bait stations protect children, pets, and non-target wildlife from contact with rodenticide. We use anticoagulant rodenticides registered with Kenya's PCPB." },
  { num: "03", title: "Mechanical Trapping", desc: "Snap traps, live capture traps, and multi-catch devices are deployed in areas where bait stations alone are insufficient. Mechanical trapping provides rapid reduction in rodent populations and is particularly effective in food preparation areas." },
  { num: "04", title: "Entry Point Sealing (Exclusion)", desc: "We identify and seal all rodent entry points using pest-proof materials — steel wool, wire mesh, expandable foam with mesh reinforcement, and door sweeps. Rats can enter gaps as small as 12mm; mice through 6mm openings. Thorough exclusion is the only permanent solution." },
  { num: "05", title: "Sanitation Advisory", desc: "We provide a detailed written report outlining sanitation improvements, waste management practices, and structural changes that will make your property inhospitable to rodents. Good sanitation is essential — bait alone cannot maintain control without addressing attractants." },
  { num: "06", title: "Ongoing Monitoring Programme", desc: "For commercial properties and repeat infestation sites, we install permanent monitoring stations and schedule regular service visits to detect new activity early. Early detection prevents re-infestation from escalating." },
];

const warningSigns = [
  { sign: "Droppings", detail: "Fresh droppings are dark and moist; old droppings are dry and grey. Concentrated droppings indicate active nesting nearby." },
  { sign: "Gnaw Marks", detail: "Fresh gnaw marks are pale and light-coloured; older marks are dark and smooth. Look at skirting boards, cables, food packaging, and woodwork." },
  { sign: "Burrows", detail: "Norway rats dig burrows along walls, under decking, and in garden borders. Active burrows are clear of debris and cobwebs." },
  { sign: "Runways", detail: "Rodents follow fixed paths, leaving greasy smear marks along walls and floors — particularly visible on light-coloured surfaces." },
  { sign: "Nests", detail: "Shredded paper, fabric, insulation, and plant material in hidden corners of lofts, sub-floors, and wall voids indicate active nesting." },
  { sign: "Sounds", detail: "Scratching, scurrying, and gnawing noises in walls, ceilings, or loft spaces — particularly at night when rodents are most active." },
];

const faqs = [
  { q: "What is the most effective rodent control method?", a: "The most effective long-term solution combines bait stations to reduce the active population with structural exclusion to prevent new rodents from entering. Chemical control alone is never a permanent solution — new rodents will move in if the entry points remain open." },
  { q: "How fast do rodents breed in Kenya?", a: "A single female Norway rat can produce up to 6 litters per year, with 6–12 pups per litter. Under Kenya's warm climate, breeding is year-round with no seasonal slowdown. A small infestation can become a major problem within 6–8 weeks if left untreated." },
  { q: "Are rodenticides safe around children and pets?", a: "Our bait stations are tamper-resistant and designed to deny access to children and pets while remaining accessible to rodents. We'll advise on station placement to minimise any risk. We offer non-toxic trapping alternatives for properties with high foot traffic." },
  { q: "How do rats get into a building?", a: "Rats exploit gaps around pipework, drainage systems, cable entries, damaged air vents, gaps under doors, and cracks in foundations. Norway rats can enter gaps as small as 12mm in diameter — the size of a 10 shilling coin." },
  { q: "How long does rat control take?", a: "Significant population reduction is typically seen within 7–14 days of treatment. Complete eradication and closure of entry points takes 3–4 weeks. We schedule a follow-up visit to confirm success and address any residual activity." },
  { q: "Do you service commercial properties?", a: "Yes — we provide rodent control services for warehouses, food processing facilities, restaurants, hotels, hospitals, and commercial offices across Kenya. We can tailor an ongoing monitoring and control programme to meet HACCP and food safety compliance requirements." },
];

export default function RodentControlPage() {
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
            <span className="text-white">Rodent Control</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400 text-black text-xs font-black px-3 py-1 mb-4 uppercase tracking-widest">Comprehensive Rat & Mice Management</span>
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              Professional Rodent Control Services in Kenya
            </h1>
            <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
              Rodents contaminate food supplies, gnaw through electrical wiring, and spread leptospirosis — a disease that sends hundreds of Kenyans to hospital every year. They adapt quickly, breed rapidly, and are increasingly resistant to standard rodenticides.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              We combine baiting, trapping, and exclusion sealing to eliminate your current infestation and permanently close the entry points that will bring rodents back. Bait alone is not enough — permanent control requires exclusion. For a full overview of professional rat control services and pricing in Kenya, visit <a href="https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-amber-300 font-semibold underline underline-offset-2 hover:text-white">Pestraid Kenya's rodent control page</a>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
                <Phone className="mr-2 w-4 h-4" /> Book a Free Survey
              </Link>
              <a href="tel:+254710907628" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                Call +254 710 907 628
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Detection</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Warning Signs of a Rodent Infestation</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Rodents are nocturnal and secretive. Most infestations are well established by the time residents notice clear evidence. Knowing what to look for enables early intervention. <a href="https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's rat control service guide</a> also covers common signs and identification tips.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {warningSigns.map((item, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-6">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  <h3 className="font-heading font-bold text-base">{item.sign}</h3>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISEASE RISKS */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Health & Property Risks</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">The Real Cost of a Rodent Infestation</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Beyond the discomfort, rodent infestations carry serious financial, health, and structural consequences. In commercial settings, a rodent sighting can trigger immediate closure orders from public health authorities. Properties with active rodent problems are also at higher risk from snakes attracted by the food source — <a href="https://pestraid.co.ke/services/snake-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's snake control service</a> is a recommended complement to any rodent treatment programme. Eliminating rodent entryways often reveals damp patches which could foster fungal issues; a professional <a href="https://moldguardkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold assessment service</a> can evaluate these risks.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diseases.map((item, i) => (
              <div key={i} className="bg-white border-2 border-black p-6">
                <h3 className="font-heading font-bold text-base mb-2 text-red-700">{item.name}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANAGEMENT APPROACH */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Integrated Approach</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Our Integrated Rodent Management Approach</h2>
          <p className="text-neutral-600 leading-relaxed mb-12 max-w-2xl">We don't just put out bait and leave. True rodent management requires a structured, multi-stage approach that addresses the population, the entry points, and the attractants simultaneously. You can review how similar approaches work at <a href="https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's integrated rodent management service</a>. Sealing vulnerabilities sometimes requires clearing contaminated materials where moisture gathers, making integrated <a href="https://moldguardkenya.co.ke/services" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold remediation services</a> an important follow-up step.</p>
          <div className="flex flex-col gap-5">
            {managementApproach.map((s, i) => (
              <div key={i} className="flex gap-6 bg-[#fbf7f0] border-2 border-black p-8">
                <div className="text-3xl font-heading font-black text-neutral-200 leading-none shrink-0">{s.num}</div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{s.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Commercial Services</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Rodent Control for Commercial Properties</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Commercial properties face unique rodent challenges — high footfall, complex drainage systems, and the constant delivery of goods create ongoing re-infestation pressure. Our commercial programme provides the documentation and consistency required for food safety and health compliance. For current service rates across Kenya, <a href="https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's commercial rodent control pricing</a> provides a useful benchmark.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "HACCP-Compatible Service", desc: "Our commercial rodent control programmes provide the treatment records, service reports, and monitoring data required for HACCP food safety plans and health department audits." },
              { icon: <CheckCircle2 className="w-8 h-8 text-green-600" />, title: "Tamper-Resistant Bait Stations", desc: "All bait stations used in commercial settings are locked, tamper-resistant units that prevent access by staff, customers, and non-target animals — fully compliant with workplace safety regulations." },
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "Regular Monitoring Visits", desc: "Scheduled service visits maintain pressure on rodent populations before they can establish. We provide written service reports after every visit detailing activity levels, bait consumption, and recommendations." },
              { icon: <CheckCircle2 className="w-8 h-8 text-green-600" />, title: "Emergency Call-Out", desc: "For commercial clients on a service contract, we provide emergency response within 24 hours for urgent rodent sightings — minimising the risk of regulatory intervention or business disruption." },
            ].map((item, i) => (
              <div key={i} className="bg-white border-2 border-black p-8 flex gap-4">
                <div className="shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-black tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-6">
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
          <h2 className="text-3xl font-heading font-black mb-4">Book a Rodent Survey Today</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Our certified technicians will inspect your property, identify all entry points, and provide a detailed treatment and exclusion plan — at no cost and no obligation.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-10 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
            <Phone className="mr-2 w-4 h-4" /> Free Survey
          </Link>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 bg-[#fbf7f0] border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h3 className="font-heading font-bold text-lg mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Termite Control", href: "/services/termite-control" },
              { label: "General Fumigation", href: "/services/general-fumigation" },
              { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
              { label: "Cockroach Control", href: "/services/cockroach-control" },
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
