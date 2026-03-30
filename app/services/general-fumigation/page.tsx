import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, AlertTriangle, ChevronRight, Phone, ShieldCheck, Leaf, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "General Fumigation Services in Kenya | Pestraid Kenya",
  description: "Professional whole-structure fumigation services across Kenya. KEBS-approved fumigants, re-entry clearance certificates, and retreatment guarantees for homes and businesses.",
};

const steps = [
  { num: "01", title: "Initial Property Inspection", desc: "Our certified technician visits your property to assess the infestation level, identify pest species, and determine the most effective fumigation approach. We document all findings and provide a transparent treatment plan before any work begins." },
  { num: "02", title: "Pre-Fumigation Preparation", desc: "We guide you through all necessary preparation steps — sealing food items, removing pets, covering plants, and vacating the property. Our team handles the tent or gas sealing setup to ensure full containment of fumigant gases." },
  { num: "03", title: "Fumigation Treatment", desc: "Using KEBS-approved fumigants, we apply the appropriate gas or liquid treatment to penetrate every corner, crack, and void in your property. Our technicians monitor fumigant levels throughout the process to ensure effective pest elimination." },
  { num: "04", title: "Aeration and Ventilation", desc: "After the required exposure period, we systematically ventilate the property using industrial fans and monitoring equipment. We measure gas concentrations with calibrated instruments to ensure they fall to safe re-entry levels." },
  { num: "05", title: "Post-Fumigation Clearance", desc: "We issue a written re-entry clearance certificate once gas levels are confirmed safe. Our team conducts a final walkthrough, provides aftercare guidance, and schedules a follow-up inspection to confirm complete pest elimination." },
];

const faqs = [
  { q: "How long does fumigation take?", a: "Most residential fumigations take between 6 and 24 hours depending on the property size, pest type, and infestation severity. We'll give you a precise timeline during your free property inspection." },
  { q: "Can I stay in my house during fumigation?", a: "No — all occupants including pets must vacate the property during the fumigation period. Our team will confirm the exact duration and coordinate a convenient re-entry time with you in advance." },
  { q: "Is fumigation safe for children and pets?", a: "Yes, when conducted by trained professionals following proper re-entry protocols. We use calibrated equipment to verify safe gas levels before issuing a re-entry clearance certificate." },
  { q: "What pests does fumigation eliminate?", a: "Whole-structure fumigation is effective against termites, bed bugs, cockroaches, stored-product pests, and other insects that standard surface sprays cannot reach. It's particularly effective for deep-seated infestations." },
  { q: "Do you use KEBS-approved fumigants?", a: "Yes. All our fumigants are approved by Kenya Bureau of Standards and the Pest Control Products Board (PCPB). We maintain strict compliance with Kenyan health and safety regulations throughout every treatment." },
  { q: "Will pests come back after fumigation?", a: "Fumigation eliminates existing infestations thoroughly. However, re-infestation is possible over time without preventive measures. We recommend our regular inspection programme and provide guidance on sealing entry points after treatment." },
];

export default function GeneralFumigationPage() {
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
            <span className="text-white">General Fumigation</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400 text-black text-xs font-black px-3 py-1 mb-4 uppercase tracking-widest">Whole-Structure Eradication</span>
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              General Fumigation Services for Total Pest Eradication
            </h1>
            <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
              When surface sprays aren't enough, whole-structure fumigation reaches every crack, void, and hidden space where pests shelter and breed. Our KEBS-compliant fumigation process is the gold standard for complete property decontamination in Kenya.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              We handle everything from the initial inspection to the post-treatment re-entry clearance certificate — giving you documented proof that your property is safe. For context on pest control pricing across Kenya, <a href="https://pestraid.co.ke/" target="_blank" rel="noopener" className="text-amber-300 font-semibold underline underline-offset-2 hover:text-white">Pestraid Kenya</a> is one of Kenya's established pest control providers with published service guides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
                <Phone className="mr-2 w-4 h-4" /> Book a Free Inspection
              </Link>
              <a href="tel:+254710907628" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                Call +254 710 907 628
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FUMIGATION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Why Fumigation</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">When Is Whole-Structure Fumigation Necessary?</h2>
          <p className="text-neutral-600 leading-relaxed mb-6 max-w-3xl">Standard sprays treat surfaces. Fumigation treats everything. Gas fumigants penetrate deep into wall voids, wooden beams, furniture cavities, and subfloor spaces that contact insecticides can never reach. It's the only method that guarantees 100% exposure of a property's interior. For properties also dealing with mosquito or sandfly pressure alongside fumigation needs, <a href="https://pestraid.co.ke/services/mosquitoes-and-sandflies-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's mosquito and sandfly control service</a> outlines the available treatment options across Kenya.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {[
              { title: "Drywood Termite Infestations", desc: "Colonies living inside wooden structures that soil treatments cannot reach." },
              { title: "Severe Bed Bug Outbreaks", desc: "Heat-resistant populations that have spread to wall cavities and furniture frames." },
              { title: "Widespread Cockroach Colonization", desc: "German or American cockroaches that have infiltrated wall voids and kitchen units." },
              { title: "Stored-Product Pest Infestations", desc: "Grain weevils, flour beetles, and moth larvae in food storage facilities." },
              { title: "Pre-Occupation Decontamination", desc: "Clearing new properties or those with unknown infestation histories before occupation." },
              { title: "Ongoing IPM Programmes", desc: "Scheduled fumigation as part of an integrated pest management contract." },
            ].map((item, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-6 hover:-translate-y-1 transition-transform">
                <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 STEP PROCESS */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Our Process</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Our 5-Step Fumigation Process</h2>
          <p className="text-neutral-600 leading-relaxed mb-12 max-w-2xl">Every fumigation job follows a structured protocol to ensure complete pest elimination and maximum safety for your family, staff, and property. Properties treated for stored-product pests (grain weevils, flour beetles) should also consider addressing housefly populations — <a href="https://pestraid.co.ke/services/houseflies-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's housefly control service</a> covers treatment for food storage and processing environments across Kenya. Eliminating pervasive dampness that attracts these pests is also vital, making professional <a href="https://moldguardkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold remediation assessments</a> an excellent preventative measure.</p>
          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 bg-white border-2 border-black p-8 hover:-translate-y-0.5 transition-transform">
                <div className="text-4xl font-heading font-black text-neutral-200 leading-none shrink-0">{step.num}</div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFETY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Safety & Compliance</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Safety, Compliance, and Your Clearance Certificate</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">All our fumigation treatments comply with Kenya's Pest Control Products Board (PCPB) regulations and Kenya Bureau of Standards (KEBS) fumigant approval requirements. Safety is never negotiated — it is built into every step of our process. For spider infestations that sometimes emerge from structural fumigation, <a href="https://pestraid.co.ke/services/spider-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's spider control service</a> is a useful follow-up treatment to consider. Similarly, moisture buildup behind walls left after extensive treatments might need managing through expert <a href="https://moldguardkenya.co.ke/services" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold removal services</a>.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck className="w-8 h-8 text-primary" />, title: "PCPB Licensed Technicians", desc: "Every member of our fumigation team holds a valid PCPB operator licence and undergoes regular safety training updates." },
              { icon: <FlaskConical className="w-8 h-8 text-primary" />, title: "KEBS-Approved Fumigants Only", desc: "We exclusively use fumigants that have passed Kenya Bureau of Standards approval and are safe for residential and commercial use." },
              { icon: <Leaf className="w-8 h-8 text-green-600" />, title: "Written Re-Entry Clearance", desc: "You receive a formal re-entry clearance certificate — documented proof that your property meets safe gas concentration levels before re-occupation." },
            ].map((item, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-8 hover:-translate-y-1 transition-transform">
                {item.icon}
                <h3 className="font-heading font-bold text-lg mt-4 mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPARATION CHECKLIST */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Preparation</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">How to Prepare Your Property for Fumigation</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Proper preparation is essential to ensure the fumigation is both effective and safe. Our technician will walk you through the exact steps at your pre-treatment inspection. For flea treatment needs that may arise after fumigation in pet-owning households, also review <a href="https://pestraid.co.ke/services/fleas-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's flea control service and pricing</a>.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Before You Leave the Property</h3>
              <ul className="space-y-3">
                {[
                  "Store all food, medicines, and consumables in sealed bags or remove from the property",
                  "Remove or cover all houseplants and aquariums",
                  "Secure all pets and arrange for them to stay elsewhere during treatment",
                  "Open all internal doors, drawers, and cupboards to allow gas circulation",
                  "Turn off all gas appliances and pilot lights",
                  "Collect any items you'll need during the treatment period",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">After You Return</h3>
              <ul className="space-y-3">
                {[
                  "Do not re-enter until you have received the written re-entry clearance certificate",
                  "Open all windows and doors for additional ventilation upon return",
                  "Wipe down all food contact surfaces before use",
                  "Discard any food items not properly sealed during treatment",
                  "Follow the post-treatment report guidance provided by our technician",
                  "Schedule your follow-up inspection as recommended",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-heading font-black mb-4">Our Retreatment Guarantee</h2>
          <p className="text-neutral-300 leading-relaxed mb-8 max-w-2xl mx-auto">If pests return within the guaranteed period after your fumigation treatment, we return and retreat at no additional cost. No questions asked. That's our commitment to you.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-10 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
            Get a Free Quote <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#fbf7f0]">
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

      {/* RELATED */}
      <section className="py-12 bg-white border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h3 className="font-heading font-bold text-lg mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Termite Control", href: "/services/termite-control" },
              { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
              { label: "Cockroach Control", href: "/services/cockroach-control" },
              { label: "Rodent Control", href: "/services/rodent-control" },
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
