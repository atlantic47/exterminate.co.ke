import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, AlertTriangle, ChevronRight, Phone, ShieldCheck, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Termite Control in Kenya | Pestraid Kenya",
  description: "Professional termite control and prevention services across Kenya. Expert solutions for subterranean and drywood termites — soil barriers, baiting systems, wood treatments.",
};

const maintenanceSchedule = [
  { activity: "Inspect Bait Stations", frequency: "Every 3 months", purpose: "To check for termite activity and bait consumption" },
  { activity: "Replace Bait", frequency: "As needed", purpose: "To ensure continued effectiveness of the baiting system" },
  { activity: "Check for Termite Activity", frequency: "Every 6 months", purpose: "To monitor the overall effectiveness of the termite control strategy" },
];

const caulkTypes = [
  { type: "Silicone", durability: "High", resistance: "Yes" },
  { type: "Polyurethane", durability: "Medium", resistance: "Yes" },
  { type: "Acrylic", durability: "Low", resistance: "No" },
];

const woodBenefits = [
  { benefit: "Termite Resistance", desc: "Pressure-treated wood is highly resistant to termite damage." },
  { benefit: "Durability", desc: "It lasts longer than untreated wood, reducing the need for frequent replacements." },
  { benefit: "Cost-Effective", desc: "Though more expensive at first, it saves money over time by cutting down on maintenance costs." },
];

const landscapingTips = [
  { practice: "Remove debris and wood piles", benefit: "Reduces termite habitats and food sources" },
  { practice: "Maintain proper drainage", benefit: "Reduces moisture that attracts termites" },
  { practice: "Use termite-resistant plants", benefit: "Less likely to attract termites" },
];

const faqs = [
  { q: "What are the most common termite species found in Kenyan homes?", a: "In Kenya, homeowners often face subterranean and drywood termites. Subterranean termites are aggressive and use mud tubes to get into homes. Drywood termites live in wood and are harder to spot." },
  { q: "How does the Kenyan climate influence termite activity in our houses?", a: "Kenya's climate is perfect for termites all year. High humidity and warm weather help them breed fast. Rainy seasons bring more termites as they swarm to start new colonies." },
  { q: "What are the primary visual indicators that our home might have a termite problem?", a: "Look for sagging floors and wood that sounds hollow. Also, check for mud tubes and discarded wings near windows. These signs mean termites are trying to make a home in your house." },
  { q: "Why should we choose professional termite control over DIY methods?", a: "DIY methods might help for a while, but they don't solve the problem. We use Termidor and Sentricon for lasting protection. Our experts find and fix the problem, stopping termites for good." },
  { q: "How should we prepare our property for a professional termite inspection?", a: "Clear the way to all foundation areas and crawl spaces. Tell us about any wood damage or insect activity. This helps us focus on the most important areas." },
  { q: "What is the difference between chemical soil barriers and baiting systems?", a: "Soil barriers use liquid termiticides around your home. Baiting systems use stations that termites carry back to their colony. We often use both, depending on your home's needs." },
  { q: "Can managing moisture around our home really help deter termites?", a: "Yes, it can. Termites love moisture. Fixing leaks and improving ventilation makes your home less appealing to them." },
  { q: "Are there eco-friendly or natural methods to prevent termite infestations?", a: "Yes, we offer green solutions. We use nematodes and fungi that eat termites. Botanical repellents and essential oils also help protect wood." },
  { q: "How do we know if a pest control partner is reputable in Kenya?", a: "Check if they're licensed by the Pest Control Products Board (PCPB). Look at their guarantees and read reviews. A good partner will be open about their methods and provide detailed reports." },
  { q: "Is termite treatment safe for our family and pets?", a: "Safety is our main concern. We handle chemicals carefully to keep your family and pets safe. We'll tell you when it's safe to go back inside." },
  { q: "What steps should we take to handle repairs after an infestation is cleared?", a: "After termites are gone, check your home's structure. Replace damaged wood with treated timber. Seal gaps and cracks to keep pests out." },
];

export default function TermiteControlPage() {
  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-medium">
            <Link href="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white">Termite Control</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400 text-black text-xs font-black px-3 py-1 mb-4 uppercase tracking-widest">Kenya's #1 Pest Threat</span>
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              Effective Termite Control Solutions for Homeowners
            </h1>
            <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
              In Kenya, wood-eating pests are a big threat to our homes. If you suspect an infestation, hiring seasoned <a href="https://www.termitescontrolservices.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-semibold">termite control services</a> can save you from costly repairs and restore peace of mind.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              Protecting our homes starts with local knowledge and care. By keeping our buildings strong, we can avoid expensive damage. A professional termite inspection is key to catching infestations early.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex h-13 items-center justify-center bg-white text-black px-8 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
                <Phone className="mr-2 w-4 h-4" /> Book a Free Inspection
              </Link>
              <a href="tel:+254710907628" className="inline-flex h-13 items-center justify-center border-2 border-white text-white px-8 py-3 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                Call +254 710 907 628
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="py-14 bg-[#fbf7f0] border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h2 className="text-xl font-heading font-black mb-6">Key Takeaways</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "Identify the specific risks wood-eating insects pose to Kenyan structures.",
              "Learn to spot early warning signs of a hidden infestation.",
              "Understand why regular professional assessments are vital for home safety.",
              "Implement effective barriers to stop pests from entering your foundation.",
              "Discover how proactive maintenance reduces long-term repair expenses.",
              "Choose reliable methods to protect your wooden furniture and supports.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border-2 border-black p-4">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-700 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UNDERSTANDING THE THREAT */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">The Threat</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Understanding the Termite Threat in Kenya</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Kenya's climate and geography are perfect for termites. Homeowners need to know the risks. Termites are a big problem in Kenya — they damage homes and buildings. The warm weather and wet and dry seasons help termites all year. For a detailed breakdown of treatment costs and service options, <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's termite control pricing page</a> is a helpful reference for Kenyan homeowners.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="bg-[#fbf7f0] border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Common Termite Species Found in Kenyan Homes</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">In Kenyan homes, you'll find subterranean termites and drywood termites. Subterranean termites are very destructive. They live underground and eat wood and other cellulose materials. Drywood termites infest dry wood and can damage a lot without being noticed for a long time.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">It's important to know about these termites. Subterranean termites use mud tubes to get to food. Drywood termites can directly infest wooden structures.</p>
            </div>
            <div className="bg-[#fbf7f0] border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Why Kenyan Climates Favour Termite Activity</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Kenya's climate is great for termites. The warm weather and humidity are perfect for them. Places with lots of rain and moisture are even better for termites because they help colonies grow. Such humid conditions are also a leading cause of fungal spread, which is why securing professional <a href="https://moldguardkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold management strategies</a> is often necessary.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Kenya's geography and climate make termites common everywhere. Homeowners need to understand this to protect their homes from termites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNS OF INFESTATION */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Know The Signs</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Identifying Signs of Termite Infestation</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Termite activity can be sneaky, but there are clear signs to look for. Spotting these early helps avoid expensive fixes.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Visual Indicators of Structural Damage</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">One clear sign of termites is structural damage. Look for sagging floors or ceilings, doors that stick, and cracks in walls and foundations. Regular inspections can catch these problems early.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Termites eat wood and other cellulose, weakening your home. If you see these signs, act fast to stop more damage.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["Sagging floors or ceilings", "Doors that stick", "Cracks in walls", "Hollow-sounding wood"].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white border border-neutral-200 p-3 text-xs text-neutral-700">
                    <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Detecting Mud Tubes and Swarmers</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Termites use mud tubes to move between their colonies and food. These tubes show up on walls, foundations, and more. Flying termites, or swarmers, also indicate termite activity. They fly out in big numbers during warm, humid weather.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Finding mud tubes and swarmers needs a sharp eye and regular checks. If you spot them, call a pro for help.</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["Mud tubes on walls", "Discarded wings near windows", "Swarmers outdoors", "Frass (termite droppings)"].map((s, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white border border-neutral-200 p-3 text-xs text-neutral-700">
                    <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0" /> {s}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Professional Services</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Professional Termite Control Services</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">In Kenya, <a href="https://www.termitescontrolservices.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">professional termite control services</a> are key to protecting homes from termite damage. Termites can cause serious harm to buildings if not treated quickly and correctly. Our services offer detailed solutions that fit your property's unique needs. You can also compare professional service offerings at <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's professional termite treatment service</a> to understand the range of specialist options available in Kenya.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">The Importance of Expert Assessment</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Getting an expert assessment is the first step in fighting termite infestations. Professionals can spot termite signs that you might miss. They check your property thoroughly to find out how bad the problem is.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Expert assessors can tell you what kind of termite you have, how bad the problem is, and the best way to fix it. This info is key to making sure the treatment works well and is safe.</p>
            </div>
            <div className="border-2 border-black p-8">
              <CheckCircle2 className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Benefits of Professional Intervention</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Choosing professional termite control has many advantages over doing it yourself. Professionals have access to better treatments, including new technologies and products.</p>
              <ul className="space-y-2">
                {[
                  "Targeted treatments that are good for the environment",
                  "Stopping future problems with a full property check",
                  "Keeping your property safe with ongoing checks and care",
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PREPARING FOR INSPECTION */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Preparation</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Preparing Your Home for Inspection</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">A well-prepared home is key for a successful termite inspection. It helps inspectors find problems quickly. Homeowners should focus on two main steps.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Clearing Access to Foundation Areas</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Inspectors need to see your home's foundation clearly. This means clearing any debris, vegetation, or obstructions around it.</p>
              <ul className="space-y-2">
                {[
                  "Trim trees and shrubs to make a clear path around the foundation.",
                  "Remove any debris, like wood piles or leaves, touching the home.",
                  "Make sure crawl spaces and attics are easy to get into.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Documenting Areas of Concern</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">It's good to document any areas of your home that might have termites. This includes noting any mud tubes, swarmers, or damaged wood. This helps the inspector know where to look first.</p>
              <ul className="space-y-2">
                {[
                  "Take clear, well-lit photos of any termite activity or damage.",
                  "Write down the location and details of the issue.",
                  "Share this info with the termite inspector before or during the inspection.",
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

      {/* SOIL TREATMENT BARRIERS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Treatment Method 1</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Implementing Soil Treatment Barriers</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Creating a barrier in the soil around homes is a top method for termite control. It stops termites from getting to the house. Soil treatment means putting chemicals in the soil around and under a home, creating a barrier that termites can't cross. This approach is widely used by specialists across Kenya — <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya details their soil treatment methods and pricing</a> for residential and commercial properties.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-[#fbf7f0] border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">How Chemical Barriers Work</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Chemical barriers are made by putting termiticides in the soil. These can be repellent or non-repellent. Repellent termiticides keep termites away. Non-repellent termiticides let termites through but kill them.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">The success depends on the termiticide, how well it's applied, and the soil type. Proper application is key for a strong barrier.</p>
            </div>
            <div className="bg-[#fbf7f0] border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Application Techniques for Perimeter Defence</h3>
              <ul className="space-y-3">
                {[
                  "Drilling into the soil around the home to apply termiticide.",
                  "Trenching around the foundation for a continuous barrier.",
                  "Treating soil beneath slabs and other entry points.",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-600 text-sm mt-4 leading-relaxed">Regular checks and upkeep are needed to keep the barrier working well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* BAITING SYSTEMS */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Treatment Method 2</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Utilizing Baiting Systems for Colony Elimination</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Baiting systems are a focused way to fight termites. They aim to kill the whole termite colony by using bait stations around your home's edges. Bait stations draw termites to the bait, which they then take back to their colony — leading to colony elimination.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Strategic Placement of Bait Stations</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Where you put bait stations is very important. They should be near where termites are most active — usually around your home's edges and where termites have been seen before. Finding the best spots requires knowing how termites behave and looking for signs like mud tubes and discarded wings.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Monitoring and Replacing Bait Components</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">It's important to keep an eye on your bait stations. A well-kept baiting system is essential for controlling termites.</p>
            </div>
          </div>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-2 border-black text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Maintenance Activity</th>
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Frequency</th>
                  <th className="px-4 py-3 text-left font-bold">Purpose</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceSchedule.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="px-4 py-3 font-bold border-r border-neutral-200">{row.activity}</td>
                    <td className="px-4 py-3 text-neutral-600 border-r border-neutral-200">{row.frequency}</td>
                    <td className="px-4 py-3 text-neutral-600">{row.purpose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WOOD TREATMENTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Treatment Method 3</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Applying Wood Treatments and Preservatives</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Using wood treatments and preservatives is key in fighting termites. These steps help protect homes from termite damage.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Surface Treatments for Exposed Timber</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Surface treatments are applied directly to the wood to keep it safe from termites. This method is great for wood that's easy for termites to reach.</p>
              <div className="bg-[#fbf7f0] border-2 border-black p-4">
                <p className="font-bold text-sm mb-2">Types of Surface Treatments:</p>
                <ul className="space-y-1">
                  {["Borate-based treatments", "Pyrethroid-based treatments", "Permethrin-based treatments"].map((t, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="w-3 h-3 text-green-600" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Pressure-Treated Wood for New Construction</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">For new buildings, pressure-treated wood is a smart choice. It's treated with preservatives that keep termites away.</p>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black text-sm">
                  <thead>
                    <tr className="bg-primary text-white text-xs">
                      <th className="px-3 py-2 text-left border-r border-black">Benefit</th>
                      <th className="px-3 py-2 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {woodBenefits.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="px-3 py-2 font-bold border-r border-neutral-200 text-xs">{row.benefit}</td>
                        <td className="px-3 py-2 text-neutral-600 text-xs">{row.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOISTURE MANAGEMENT */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Prevention</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Managing Moisture to Deter Termites</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Moisture management is key to keeping termites away from your home. Termites love moist places, so controlling moisture is vital. Make sure your home doesn't have water leaks or drainage problems.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Fixing Leaking Pipes and Drainage Issues</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Start by checking your plumbing system often. Look for leaks like water spots, warped floors, or sounds of running water when all faucets are off. Fixing leaks quickly is important.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Drainage issues must also be fixed. Make sure water flows away from your home's foundation. Clogged drains or bad grading can cause water to gather, attracting termites.</p>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Improving Ventilation in Crawl Spaces</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">The crawl space under your home is another key area for moisture control. Better ventilation in crawl spaces reduces moisture. Make sure your crawl space has enough vents for air to move. Keeping this area dry prevents wooden structures from decaying and curtails conditions that require <a href="https://moldguardkenya.co.ke/services" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold removal services</a>.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Also, think about using vapor barriers to stop moisture from the soil. Check your crawl space for moisture or water often and fix any problems right away. Effective moisture management makes your home less appealing to termites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEALING ENTRY POINTS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Exclusion</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Sealing Entry Points and Structural Gaps</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">To keep your home safe from termites, sealing entry points and gaps is key. Termites can sneak in through tiny openings. Sealing these gaps stops termites from getting in and also reduces moisture — which attracts termites.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Caulking Cracks in Foundations</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Focus on sealing your home's foundation first. Cracks in the foundation let termites in. Caulking these cracks is a simple way to keep them out. Use a strong caulk that can handle the weather.</p>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black text-sm">
                  <thead>
                    <tr className="bg-primary text-white text-xs">
                      <th className="px-3 py-2 text-left border-r border-black">Caulk Type</th>
                      <th className="px-3 py-2 text-left border-r border-black">Durability</th>
                      <th className="px-3 py-2 text-left">Termite Resistance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {caulkTypes.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="px-3 py-2 font-bold border-r border-neutral-200 text-xs">{row.type}</td>
                        <td className="px-3 py-2 text-neutral-600 border-r border-neutral-200 text-xs">{row.durability}</td>
                        <td className={`px-3 py-2 font-bold text-xs ${row.resistance === "Yes" ? "text-green-700" : "text-red-600"}`}>{row.resistance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Installing Screens and Barriers</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Also, put screens and barriers around vents, windows, and other openings. These can keep termites out very well. Make sure these screens and barriers are made to resist termites.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">They should fit well to avoid gaps. Check them often to keep them working. By caulking and installing screens and barriers, you make your home much safer from termites.</p>
              <div className="mt-4 bg-amber-50 border-2 border-amber-400 p-4">
                <p className="text-sm font-bold text-amber-800">💡 Pro Tip</p>
                <p className="text-sm text-amber-700 mt-1">Check your foundation often for cracks or damage and fix them quickly to keep your home safe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATURAL / ECO-FRIENDLY */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Green Solutions</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Natural and Eco-Friendly Prevention Methods</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">In Kenya, homeowners are turning to green solutions for termite control. These methods are good for the planet and keep termites away.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-8">
              <Leaf className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-heading font-bold text-xl mb-4">Using Nematodes and Fungi</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Nematodes are a natural way to fight termites. They are applied to the soil and can greatly reduce termite larvae. Some fungi, like <em>Metarhizium anisopliae</em>, can also kill termites by causing a deadly disease.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Using nematodes and fungi is safe for the environment and people. It's a great choice for those who care about the planet.</p>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <Leaf className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-heading font-bold text-xl mb-4">Essential Oils and Botanical Repellents</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Essential oils and botanical repellents are also eco-friendly options. Oils like tea tree and neem oil can keep termites away. They can be used around homes to block termite entry.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Botanical repellents, made from plants, are another natural choice. Plant extracts can be used to treat soil and wood, making them less appealing to termites. By choosing these green methods, Kenyan homeowners can protect their homes while also helping the environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTING A PARTNER */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Choosing A Provider</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Selecting the Right Pest Control Partner</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Finding a good pest control partner is key to keeping your home termite-free. With many choices, knowing what to look for is important. You want a company that is effective, reliable, and trustworthy. For snake-related pest threats that often accompany termite-damaged environments, <a href="https://pestraid.co.ke/services/snake-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya also offers professional snake control services across Kenya</a> — a useful complement when dealing with multiple pest pressures on your property.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fbf7f0] border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Verifying Licensing and Certification</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">First, check if the pest control company is licensed and certified. A good company will have the right licenses and certifications for Kenya. This means they have the training and skills for termite control.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Verify their credentials by checking with authorities or asking for proof of certification.</p>
            </div>
            <div className="bg-[#fbf7f0] border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Evaluating Service Guarantees and Reviews</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Also, look at the service guarantees the company offers. A company that backs its work will have guarantees. Look for guarantees that cover future termite problems.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Reading reviews from past customers is also helpful. Reviews on different platforms can give you a good idea of the company's performance and customer satisfaction. The goal is to find a company that not only solves the current termite problem but also prevents future ones.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHEMICAL VS NON-CHEMICAL */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Methods Compared</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Understanding Chemical vs. Non-Chemical Solutions</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">There are two main ways to fight termites: chemical and non-chemical methods. Each has its own good and bad points. The right choice depends on how bad the infestation is, what you care about the environment, and what you prefer.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Pros and Cons of Synthetic Pesticides</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Synthetic pesticides are common for termite control because they work well. They kill termites fast. But, they can be harmful to people and pets if not used right.</p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-bold text-green-700 mb-2">Advantages</p>
                  <ul className="space-y-1 text-neutral-600">
                    <li>• They kill termites quickly</li>
                    <li>• They are easy to find and use</li>
                    <li>• They work against many types of termites</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-red-600 mb-2">Disadvantages</p>
                  <ul className="space-y-1 text-neutral-600">
                    <li>• Can be dangerous to health</li>
                    <li>• They harm the environment</li>
                    <li>• Can make termites harder to kill</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Effectiveness of Physical Barriers</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Physical barriers are a non-chemical way to stop termites. They can be made from things like stainless steel mesh or crushed granite. They protect for a long time without chemicals — great when a building is being built.</p>
              <div>
                <p className="font-bold text-sm mb-2">Advantages of physical barriers:</p>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-600" /> They protect for a long time</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-600" /> They don't use chemicals</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-green-600" /> They're good when a building is being built</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LONG-TERM PROTECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Long-Term Care</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Maintaining Long-Term Termite Protection</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Keeping your home safe from termites is key in places like Kenya. Termite control is not just a one-time thing. It's an ongoing effort that needs regular checks and upkeep to keep your home safe. For long-term protection, mix regular inspections with smart landscaping.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Scheduling Annual Inspections</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Annual checks are essential for termite protection. They help us spot termites early, stopping them from causing big damage. We look closely at your home's foundation, walls, and other high-risk areas.</p>
              <div className="bg-[#fbf7f0] border-2 border-black p-4">
                <p className="font-bold text-sm mb-2">Benefits of Annual Inspections:</p>
                <ul className="space-y-2">
                  {["Early detection of termite activity", "Prevention of extensive property damage", "Identification of moisture issues that may attract termites"].map((b, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-neutral-700">
                      <CheckCircle2 className="w-3 h-3 text-green-600" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Landscaping Tips to Keep Termites Away</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Landscaping is also key in keeping termites away. Make sure trees, shrubs, and other plants are at least a foot from your home's foundation.</p>
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-black text-sm">
                  <thead>
                    <tr className="bg-primary text-white text-xs">
                      <th className="px-3 py-2 text-left border-r border-black">Landscaping Practice</th>
                      <th className="px-3 py-2 text-left">Termite Prevention Benefit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {landscapingTips.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                        <td className="px-3 py-2 font-bold border-r border-neutral-200 text-xs">{row.practice}</td>
                        <td className="px-3 py-2 text-neutral-600 text-xs">{row.benefit}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY DURING TREATMENT */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Safety</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Safety Precautions During Treatment</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Keeping family members and pets safe is our top priority during termite treatment. We take great care to protect our clients and their pets. Our safety steps help reduce risks during treatment.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Protecting Pets and Family Members</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">We ask everyone to leave the house during treatment. This is because the chemicals used can be harmful if not handled right.</p>
              <ul className="space-y-2">
                {[
                  "Make sure all family and pets stay away from the treated area.",
                  "Take out food, water, and dishes from treated zones.",
                  "Move aquariums and pet cages out of the way.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">Handling Chemicals Responsibly</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Our team knows how to handle termite control chemicals safely. We follow strict safety rules to avoid accidents.</p>
              <ul className="space-y-2">
                {[
                  "Our technicians wear personal protective equipment (PPE).",
                  "We apply chemicals carefully to avoid exposure.",
                  "We dispose of chemical containers the right way.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <blockquote className="mt-4 border-l-4 border-primary pl-4 italic text-sm text-neutral-500">
                "At our company, safety is not just a protocol; it's a commitment."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* POST TREATMENT REPAIRS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Post-Treatment</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Handling Post-Treatment Repairs</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">After a termite treatment, it's key to check for damage. This ensures your home's structural integrity is safe. Termites can harm your home's structure, making it unsafe and less valuable. So, it's important to find and fix all damaged areas.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Assessing Structural Integrity After Infestation</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Checking your home's structural integrity means looking at termite damage. Look for:</p>
              <ul className="space-y-2">
                {["Damaged or hollow-sounding wood", "Mud tubes or tunnels on walls or ceilings", "Discarded termite wings or frass", "Unexplained changes such as sagging floors or uneven surfaces"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Replacing Damaged Wood and Materials</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">After checking, replace any damaged wood and materials. This might mean:</p>
              <ul className="space-y-2">
                {["Removing and replacing damaged wooden beams or joists", "Replacing infested insulation or other materials", "Treating the affected area with a wood preservative to prevent future infestations"].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
              <p className="text-neutral-600 text-sm mt-4 leading-relaxed">It's best to hire a professional for these repairs. They ensure the work is done right and safely. By taking these steps, you can make your home safe and valuable again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONCLUSION */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-black tracking-tight mb-6">Conclusion</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Keeping homes safe from termites is key in Kenya, where the climate helps termites thrive. We've looked at ways to stop termites and control them — including knowing the threat, spotting signs, and using barriers, baits, and managing moisture.</p>
          <p className="text-neutral-600 leading-relaxed mb-4">Homeowners can lower the risk of termite damage by using a full plan for control. We stress the need for constant protection — regular checks and upkeep to keep homes strong.</p>
          <p className="text-neutral-600 leading-relaxed mb-4">Termite control is not just a one-time job. It's an ongoing fight that needs constant attention and action. By focusing on prevention and getting help from pest experts when needed, homeowners can protect their homes and enjoy peace of mind.</p>
          <p className="text-neutral-600 leading-relaxed mb-4">For additional reference on termite treatment approaches and current servicing rates in Kenya, visit the <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya termite control and pricing guide</a> — a trusted resource for Kenyan property owners making pest management decisions.</p>
          <p className="text-neutral-600 leading-relaxed mb-8">We also work with the <a href="https://naibunisystems.co.ke/shop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Naibuni Systems shop</a> to provide excellent fire extinguishers alongside your structural pest protection.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-primary text-white px-8 text-sm font-bold hover:bg-primary/90">
              <Phone className="mr-2 w-4 h-4" /> Book a Free Inspection
            </Link>
            <Link href="/services" className="inline-flex h-12 items-center justify-center border-2 border-black text-black px-8 text-sm font-bold hover:bg-black hover:text-white transition-colors">
              All Services <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
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

      {/* RELATED SERVICES */}
      <section className="py-12 bg-[#fbf7f0] border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h3 className="font-heading font-bold text-lg mb-4">Related Services</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "General Fumigation", href: "/services/general-fumigation" },
              { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
              { label: "Rodent Control", href: "/services/rodent-control" },
              { label: "Cockroach Control", href: "/services/cockroach-control" },
              { label: "All Services", href: "/services" },
              { label: "Service Areas", href: "/service-area" },
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
