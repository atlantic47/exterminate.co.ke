"use client";

import Link from "next/link";
import {
  ShieldCheck, Bug, Home, Building2, CheckCircle2,
  Leaf, FlaskConical, Info, ChevronRight, Phone,
} from "lucide-react";

const pestTable = [
  { pest: "Cockroaches", entry: "Gaps under doors, kitchen vents", signs: "Visible roaches, egg shells, droppings" },
  { pest: "Rodents", entry: "Holes in walls, gaps around pipes", signs: "Nests, gnaw marks, droppings" },
  { pest: "Termites", entry: "Cracks in foundations, near wood", signs: "Mud tubes, damaged wood, swarmers" },
];

const termiteStrategies = [
  { strategy: "Soil Treatment", desc: "Applying termiticides to the soil around foundations", effectiveness: "High" },
  { strategy: "Baits", desc: "Using bait stations to attract and kill termites", effectiveness: "Moderate" },
  { strategy: "Physical Barriers", desc: "Installing physical barriers to prevent termite entry", effectiveness: "High" },
];

const bedBugStrategies = [
  { challenge: "Bed Bug Outbreaks", strategies: "Inspection, Chemical Treatment, Cleaning, Specialized Equipment" },
  { challenge: "Seasonal Pest Migrations", strategies: "Sealing Entry Points, Maintaining Cleanliness, Preventive Measures" },
];

const faqs = [
  {
    q: "Why should we hire professional extermination services in Kenya rather than attempting DIY methods?",
    a: "Professional extermination services are better because Kenya has unique environmental factors. These factors lead to fast pest growth. Experts, like those with the Pest Control Products Board (PCPB), know how to use strong chemicals safely. They also use Integrated Pest Management (IPM) strategies that work better than DIY solutions.",
  },
  {
    q: "What are the most common household and commercial pests we should be aware of?",
    a: "Common pests include cockroaches, ants, and rodents. In cities like Nairobi and Mombasa, bed bugs and seasonal pests are also common. Knowing these pests helps us create effective treatment plans.",
  },
  {
    q: "How can we identify early warning signs of an infestation on our property?",
    a: "Look for droppings, chewed wiring, or discarded wings. A thorough check of the perimeter is key. Spotting these signs early helps prevent big problems later.",
  },
  {
    q: "What sanitation practices should we follow before an extermination treatment?",
    a: "Clean floors deeply, secure belongings, and store food in airtight containers. This preparation helps our treatments reach pests effectively.",
  },
  {
    q: "How do we vet licensed pest control providers in Kenya?",
    a: "Check their credentials with the Pest Control Products Board. Look at service agreements and guarantees. Make sure they offer follow-up visits and use legal products.",
  },
  {
    q: "What is Integrated Pest Management (IPM), and why do we use it?",
    a: "IPM combines chemical and non-chemical methods for sustainable pest control. It uses biological controls and habitat changes to reduce environmental impact and control pests long-term.",
  },
  {
    q: "How do we ensure the safety of our pets during a chemical application?",
    a: "We follow strict ventilation and re-entry rules. Keep pets and vulnerable people away from treated areas. Follow the time on the pesticide label to avoid exposure.",
  },
  {
    q: "Are there eco-friendly alternatives to traditional chemical pesticides?",
    a: "Yes, we use natural repellents and physical barriers. These methods are effective and less harmful. Sealing entry points also helps keep pests out.",
  },
  {
    q: "How can we manage termite risks in new Kenyan construction projects?",
    a: "Use preventative soil treatments for foundations. This creates a barrier against termites. It's crucial for protecting buildings in termite-prone areas.",
  },
  {
    q: "What steps can we take to control mosquitoes and other vector-borne pests?",
    a: "Remove standing water and install screens on windows and doors. These steps help control mosquitoes and reduce disease risks.",
  },
  {
    q: "What is the best way to maintain long-term pest prevention?",
    a: "Consistency is key. Regular inspections and sealing gaps are essential. This approach prevents small issues from becoming big problems.",
  },
  {
    q: "How should we navigate the regulatory standards for pest control in Kenya?",
    a: "Understand pesticide labeling and usage guidelines. We follow Kenyan health and safety laws. This ensures our pest control solutions are legal and ethical.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* ─── HERO ─── */}
      <section className="bg-primary text-white py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              Extermination Services in Kenya: Effective Pest Control
            </h1>
            <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
              Keeping a clean and safe space is a top priority for every property owner. We know that tropical climates often attract unwanted pests that harm health and assets. Whether you need ongoing preventative pest control or a one-time <a href="https://www.fumigationkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-semibold">comprehensive fumigation service</a> to reset your property, working with local experts remains the best way to keep your environment secure.
            </p>
            <p className="text-neutral-300 mb-8 leading-relaxed">
              Professional help ensures local bug or rodent issues vanish quickly. We believe high-quality extermination services provide the peace of mind needed to run a firm or enjoy a home. Whether inspecting your foundations or baiting kitchens, partnering with a trusted <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline font-semibold">pest control provider in Kenya</a> is your best defense against structural and sanitary threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-white text-black px-10 text-base font-bold hover:bg-neutral-100 transition-colors">
                Get a Quote
              </Link>
              <Link href="/services" className="inline-flex h-14 items-center justify-center border-2 border-white text-white px-8 text-sm font-bold hover:bg-white hover:text-black transition-colors">
                Our Services <ChevronRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── KEY TAKEAWAYS ─── */}
      <section className="py-16 bg-[#fbf7f0] border-b border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-2xl font-heading font-black tracking-tight mb-2">Key Takeaways</h2>
          <p className="text-neutral-500 text-sm mb-8">What you can expect from professional extermination services in Kenya.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Professional solutions protect residential and commercial properties from health risks.",
              "Reliable methods are necessary to manage pests within tropical environments effectively.",
              "Modern techniques help eliminate infestations without damaging the property or assets.",
              "Hiring experts provides peace of mind and ensures long-term safety.",
              "Understanding available local options helps owners choose the right management plan.",
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border-2 border-black p-4 hover:-translate-y-1 transition-transform">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-700 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PEST LANDSCAPE ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">The Pest Landscape</span>
              <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Understanding the Pest Landscape in Kenya</h2>
              <p className="text-neutral-600 leading-relaxed mb-6">Knowing about pests in Kenya is key for good pest control. Kenya's varied environment has many pests that can harm homes, businesses, and public areas.</p>

              <h3 className="font-heading font-bold text-xl mb-3">Common Household and Commercial Pests</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">In Kenya, many pests bother homes and businesses. These include cockroaches, rodents, ants, bed bugs, and termites. Cockroaches and rodents are especially bad because they spread diseases and damage property. Additionally, properties close to natural habitats frequently encounter reptiles, making humane <a href="https://pestraid.co.ke/services/snake-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">snake control services</a> an essential safety measure.</p>

              <h3 className="font-heading font-bold text-xl mb-3">Environmental Factors Influencing Pest Activity</h3>
              <p className="text-neutral-600 leading-relaxed mb-2">Environmental factors greatly affect pests in Kenya. Climate, temperature, and humidity are important. For example, rainy seasons bring more mosquitoes, while dry times make rodents seek shelter inside.</p>
              <p className="text-neutral-600 leading-relaxed">To manage pests in Kenya, it's important to understand these factors. Knowing when pests are active helps prevent infestations.</p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-heading font-bold text-xl">Assessing Your Property for Infestation Risks</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Being proactive is key for property owners to protect their homes and businesses. Regular inspections help spot potential issues early.</p>
              <div className="bg-[#fbf7f0] border-2 border-black p-6">
                <h4 className="font-heading font-bold mb-3">Identifying Early Warning Signs</h4>
                <ul className="space-y-2">
                  {[
                    "Unusual noises or movements in walls or ceilings",
                    "Visible pest droppings or eggs",
                    "Nests or hives in or around the property",
                    "Damage to furniture, wiring, or other structural elements",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Bug className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[#fbf7f0] border-2 border-black p-6">
                <h4 className="font-heading font-bold mb-3">Conducting a Thorough Perimeter Inspection</h4>
                <p className="text-sm text-neutral-600 mb-3">Examine your property's outside for entry points and pest signs. Check for:</p>
                <ul className="space-y-2">
                  {[
                    "Gaps around windows, doors, and foundations",
                    "Overgrown vegetation or debris that could attract pests",
                    "Moisture issues that could lead to pest infestations",
                  ].map((s, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Pest Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-2 border-black text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Pest Type</th>
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Common Entry Points</th>
                  <th className="px-4 py-3 text-left font-bold">Signs of Infestation</th>
                </tr>
              </thead>
              <tbody>
                {pestTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fbf7f0]"}>
                    <td className="px-4 py-3 font-bold border-r border-neutral-200">{row.pest}</td>
                    <td className="px-4 py-3 text-neutral-600 border-r border-neutral-200">{row.entry}</td>
                    <td className="px-4 py-3 text-neutral-600">{row.signs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-neutral-400 mt-2">Understanding these points helps owners prevent pest problems.</p>
          </div>
        </div>
      </section>

      {/* ─── PREPARING YOUR PROPERTY ─── */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Pre-Treatment</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Preparing Your Home or Business for Treatment</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">To get the most out of pest control, you need to prepare well. We know that getting ready is key to a successful treatment. It helps stop pests from coming back.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-8 hover:-translate-y-1 transition-transform">
              <Home className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Sanitation Practices Before Extermination</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">One key step is to follow good sanitation practices. Clean your place well, throw away trash, and get rid of clutter. Poor waste management immediately attracts flying insects, which may suddenly necessitate intense <a href="https://pestraid.co.ke/services/houseflies-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">houseflies control services</a> to sanitize your kitchen and dining areas. Keeping areas thoroughly clean also manages hidden moisture, minimizing the likelihood of needing professional <a href="https://moldguardkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold remediation</a>.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Make sure to clean counters, sweep and mop floors. Kitchens and bathrooms should be spotless. Cleanliness helps the treatment work better.</p>
            </div>
            <div className="bg-white border-2 border-black p-8 hover:-translate-y-1 transition-transform">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Securing Personal Belongings and Food Supplies</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">It's also crucial to secure personal belongings and food supplies. Store food in sealed containers. Cover or remove food from the treatment area. Protect your stuff from chemicals.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Ask your clients to cover toys, utensils, and other items. This makes the treatment safer and more effective.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SELECTING PROFESSIONAL SERVICES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Choosing Wisely</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Selecting Professional Extermination Services in Kenya</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-2xl">Choosing the right partner is key for effective pest control. While basic extermination handles many issues, severe cases often require you to consult <a href="https://www.fumigationkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">specialized fumigation services in Kenya</a> who hold the correct certifications. With many providers out there, picking the right one ensures your needs are met safely and efficiently.</p>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">For your overall safety, we also work with the <a href="https://naibunisystems.co.ke/shop/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Naibuni Systems shop</a> to ensure our clients have reliable access to fire extinguishers and equipment.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Vetting Licensed Pest Control Providers</h3>
              <p className="text-neutral-600 text-sm mb-4">When looking for licensed pest control providers, several things matter. First, make sure they are licensed by the relevant Kenyan authorities.</p>
              <ul className="space-y-3">
                {[
                  { label: "Licensure", detail: "Verify their license with the relevant authorities." },
                  { label: "Experience", detail: "Assess their experience in handling your specific pest issue." },
                  { label: "Reputation", detail: "Check for customer reviews and testimonials." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-l-4 border-primary pl-4">
                    <div>
                      <span className="font-bold text-sm">{item.label}: </span>
                      <span className="text-sm text-neutral-600">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Evaluating Service Agreements and Guarantees</h3>
              <p className="text-neutral-600 text-sm mb-4">It's also important to evaluate the service agreements and guarantees offered. Look for providers that offer guarantees on their services.</p>
              <ul className="space-y-3">
                {[
                  { label: "Service Scope", detail: "Ensure it covers your pest control needs." },
                  { label: "Guarantees", detail: "Opt for providers offering retreatment guarantees." },
                  { label: "Follow-up Services", detail: "Check for follow-up services to ensure the issue is fully resolved." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 border-l-4 border-primary pl-4">
                    <div>
                      <span className="font-bold text-sm">{item.label}: </span>
                      <span className="text-sm text-neutral-600">{item.detail}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── IPM ─── */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">IPM</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Implementing Integrated Pest Management Strategies</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">In Kenya, managing pests well means using a method called integrated pest management (IPM). IPM mixes different ways to control pests in a way that's good for the environment and lasts long.</p>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">IPM is more than just getting rid of pests. It's about knowing the ecosystem and using many ways to stop pests from coming back. This includes figuring out the pest, knowing its life cycle, and then using a mix of methods to control it.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-8">
              <FlaskConical className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Combining Chemical and Non-Chemical Methods</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">IPM uses both chemical and non-chemical methods. Chemical methods use pesticides, which can work but also have risks. Non-chemical methods include keeping things clean, keeping pests out, and using physical barriers. Addressing environmental humidity is also critical, and integrating expert <a href="https://moldguardkenya.co.ke/services" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline hover:text-primary/80">mold control services</a> will ensure a completely healthy property framework.</p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-neutral-500">
                "The goal of IPM is to manage pests in a way that works well and is sustainable." — pest management experts
              </blockquote>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <Leaf className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">The Role of Biological Controls in Local Settings</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Biological controls are key in IPM. They use living things or their products to control pests. For example, introducing natural predators or parasites, or using pathogens that harm the pest. In Kenya, using natural predators to control pests is a good and lasting method. We also use botanical repellents and other non-chemical ways to keep pests away.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TARGETED TREATMENT PLANS ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Our Approach</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Executing Targeted Treatment Plans</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">In pest control, a targeted approach is key to managing infestations well. We know that each pest needs its own strategy. A detailed assessment is vital to create a plan that fits the specific needs.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Bug className="w-5 h-5 text-primary" /> Addressing Cockroach and Ant Infestations
              </h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Cockroaches and ants cause immense stress and severe health risks due to food contamination. Because roaches have grown highly resistant to store-bought sprays, deploying targeted <a href="https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">cockroaches control services</a> that utilize professional-grade insect growth regulators and gel baits is the only proven method to eradicate the colony completely.</p>
              <ul className="space-y-2">
                {[
                  "Identifying and sealing entry points to prevent re-infestation",
                  "Using baits and traps specifically designed for these pests",
                  "Implementing sanitation practices to make the area less appealing to pests",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-neutral-500 mt-4">
                "A clean environment is key to preventing cockroach and ant infestations."
              </blockquote>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" /> Managing Rodent Control in Urban Environments
              </h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Rodents are a challenge in cities because they adapt so easily and breed fast. When DIY traps predictably fall short, property owners typically must rely on <a href="https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">comprehensive rat and rodents control services</a> to clear the infestation entirely by securely baiting and trapping. We also seal all entry points to stop rodents — they can squeeze through remarkably tiny openings.</p>
              <div className="bg-[#fbf7f0] border-2 border-black p-4">
                <blockquote className="italic text-sm text-neutral-600">
                  "Rodent control is not just about eliminating the current population but also about preventing future infestations through proactive measures."
                </blockquote>
              </div>
              <p className="text-neutral-600 text-sm mt-4 leading-relaxed">We also use humane traps and repellents to manage rodent populations responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SAFETY ─── */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Safety First</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Ensuring Safety During and After Chemical Application</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">The safety of people and pets is paramount when applying pest control chemicals. This is especially true when undergoing structural <a href="https://www.fumigationkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">fumigation procedures</a>, which involve highly concentrated treatments that require strict evacuation and aeration protocols. Because these applications must dissipate safely before re-entry, following expert safety guidelines is non-negotiable.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-8">
              <ShieldCheck className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Protecting Pets and Vulnerable Family Members</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Pets and people who are young or old are more at risk from chemicals, so keeping them away from the area until safety clears is pivotal.</p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">However, pets themselves often introduce biting parasites indoors. Addressing this safely requires tailored <a href="https://pestraid.co.ke/services/fleas-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">fleas control services</a> that won't harm your pets but will break the flea life cycle right in carpets and bedding. It's crucial to remove any pet food, water, and toys from the floor beforehand to prevent accidental chemical exposure.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Furthermore, we also work with <a href="https://naibunisystems.co.ke/product-category/fire-suppression-systems/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Naibuni Systems</a> to integrate advanced fire suppression systems for comprehensive structural protection.</p>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <Info className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="font-heading font-bold text-xl mb-3">Ventilation and Re-entry Protocols</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Good air flow is vital after using chemicals to get rid of any leftover smells or particles. We recommend opening windows and using fans to help air move around.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Before going back into the treated area, look for any instructions left by the pest control team. They might tell you to wait a certain amount of time or check for a special sign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ECO-FRIENDLY ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Green Solutions</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Utilizing Natural and Eco-Friendly Alternatives</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">We're looking into natural and eco-friendly ways to fight pests. As worries about chemical pesticides grow, more people are choosing green pest control methods. Botanical repellents are a big part of natural pest control.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Botanical Repellents and Their Efficacy</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Botanical repellents use natural ingredients like essential oils from plants. For example, citronella oil keeps mosquitoes at bay, while peppermint oil keeps ants and rodents away. They work by releasing smells that pests don't like.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">A study found lemongrass oil is great against mosquitoes, which spread diseases. How well botanical repellents work depends on the pest and the plant used, but many have shown they can really help with common pests.</p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-3">Physical Barriers and Exclusion Techniques</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Another good way to fight pests is with physical barriers and exclusion methods. This means sealing up all entry points to keep pests out. Physical barriers can be as simple as using caulk to block cracks or installing door sweeps to keep rodents out.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Using materials like steel wool or hardware cloth can also keep pests out for good. By finding and sealing their entry points, you can lower the chance of an infestation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TERMITE RISKS ─── */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Construction</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-4">Managing Termite Risks in Kenyan Construction</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">In Kenyan construction, it's vital to manage termite risks to keep buildings safe and strong. Termites, especially subterranean termites, can harm buildings a lot if not stopped. Knowing the risks and using good management strategies helps prevent damage.</p>
          <p className="text-neutral-600 leading-relaxed mb-6 max-w-3xl">Signs of termite activity include mud tubes traversing masonry walls and discarded swarmer wings near windowsills. Given the massive structural destruction they cause, immediately investing in professional <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">termites control services</a> is highly recommended upon seeing these indicators. Comprehensive soil treatments remain a major component of a successful defense strategy, directly preventing subterranean invasion into foundations.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-2 border-black text-sm mb-3">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Termite Management Strategy</th>
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Description</th>
                  <th className="px-4 py-3 text-left font-bold">Effectiveness</th>
                </tr>
              </thead>
              <tbody>
                {termiteStrategies.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
                    <td className="px-4 py-3 font-bold border-r border-neutral-200">{row.strategy}</td>
                    <td className="px-4 py-3 text-neutral-600 border-r border-neutral-200">{row.desc}</td>
                    <td className="px-4 py-3 font-bold text-green-700">{row.effectiveness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-neutral-400 mb-6">Understanding termite signs and using soil treatments can greatly lower termite damage risks. Scheduling regular checks with trusted <a href="https://www.termitescontrolservices.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">termite control specialists</a> is crucial for lasting protection.</p>
          <Link href="/services/termite-control" className="inline-flex h-12 items-center justify-center bg-primary text-white px-8 text-sm font-bold hover:bg-primary/90">
            Learn About Termite Control <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── MOSQUITOES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Vector-Borne Pests</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Controlling Mosquitoes and Vector-Borne Pests</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-3xl">Effective vector control is arguably the most critical aspect of keeping populations comprehensively safe in Kenya. Mosquitoes routinely spread diseases like malaria and chikungunya. Particularly for properties neighboring standing water, combining environmental management with professional <a href="https://pestraid.co.ke/services/mosquitoes-and-sandflies-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">mosquitoes and sandflies control services</a> establishes an essential barrier that breaks the transmission cycle immediately.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Eliminating Breeding Grounds Around the Property</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Getting rid of mosquito breeding spots is a smart move. Mosquitoes need water to breed. So, it's important to remove any standing water around your place.</p>
              <ul className="space-y-2">
                {[
                  "Check your property for water-collecting items like flowerpots, buckets, and clogged drains.",
                  "Empty or remove items that hold water, and make sure your gutters are clean.",
                  "Use larvicides in places where water can't be removed, like ponds or big containers.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <blockquote className="border-l-4 border-primary pl-4 italic text-sm text-neutral-500 mt-4">
                "Getting rid of breeding spots is a smart way to lower mosquito numbers and disease risks."
              </blockquote>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Installing Screens and Protective Barriers</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Installing screens and barriers is another way to keep mosquitoes out. This helps keep your home or business mosquito-free.</p>
              <ul className="space-y-2">
                {[
                  "Make sure all windows and doors have screens.",
                  "Fix any tears or holes in screens. Use door sweeps or weatherstripping to seal gaps under doors.",
                  "Outdoor mosquito repellents or mosquito traps can also help cut down on mosquitoes.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LONG-TERM PREVENTION ─── */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Prevention</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Maintaining Long-Term Pest Prevention</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Effective pest management needs regular checks and prevention steps. Keeping pests away is key for health and property safety. The saying "An ounce of prevention is worth a pound of cure" is true — regular inspections help spot problems early.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-3">Establishing a Routine Inspection Schedule</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Having a set schedule for inspections is crucial. We look for signs of pests like droppings or damage. This way, we can act fast to stop infestations.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Inspections should happen at least every three months. But, the timing can change based on the property's location and type. For example, places with termites might need more checks.</p>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-3">Sealing Entry Points and Structural Gaps</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">Sealing up entry points and gaps is highly critical, as even the smallest architectural openings allow persistent insects in. Thus, we systematically seal all cracks bordering windows, exterior doors, and structural vents.</p>
              <p className="text-neutral-600 text-sm leading-relaxed">Arachnids, for instance, easily slip through these crevices. If they establish webs indoors consistently, securing thorough <a href="https://pestraid.co.ke/services/spider-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">spider control services</a> will clear out the infestation, while comprehensive structural sealing effectively blocks their eventual return.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECIALIZED CHALLENGES ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Specialized Challenges</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Handling Specialized Pest Challenges</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Kenya faces many pest challenges that need more than just basic pest control. They require a deep understanding and specific strategies to manage and get rid of pests.</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-2 border-black text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="px-4 py-3 text-left font-bold border-r border-black">Pest Challenge</th>
                  <th className="px-4 py-3 text-left font-bold">Key Strategies</th>
                </tr>
              </thead>
              <tbody>
                {bedBugStrategies.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#fbf7f0]"}>
                    <td className="px-4 py-3 font-bold border-r border-neutral-200">{row.challenge}</td>
                    <td className="px-4 py-3 text-neutral-600">{row.strategies}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#fbf7f0] border-2 border-black p-6">
              <h3 className="font-heading font-bold text-lg mb-2">Dealing with Bed Bug Outbreaks</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Bed bugs multiply rapidly and reliably hide deep within tiny physical crevices. When dealing with an outbreak, immediately scheduling <a href="https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">specialized bed bugs control services</a> utilizing professional-grade fumigants or intense heat treatments is frequently the only functional way to break their resilient life cycle altogether. Subsequent prevention demands vigilant mattress isolation and consistent high-heat bedding washes.</p>
            </div>
            <div className="bg-[#fbf7f0] border-2 border-black p-6">
              <h3 className="font-heading font-bold text-lg mb-2">Managing Seasonal Pest Migrations</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">Seasons can bring pests into homes and businesses as they seek shelter from harsh weather. To stop pests from migrating, seal all entry points — gaps around windows, doors, and utility lines. Weatherstripping and caulk work well.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REGULATORY ─── */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Compliance</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-6">Navigating Regulatory Standards for Pest Control</h2>
          <p className="text-neutral-600 leading-relaxed mb-4 max-w-3xl">Understanding pest control in Kenya is complex. It requires knowing the rules that guide the industry. Following these rules is key to managing pests well. Kenya's rules aim to keep people safe and protect the environment.</p>
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Compliance with Kenyan Health and Safety Laws</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Kenya's health and safety laws are strict. Pest control services must follow these laws — from the Kenya Ministry of Health and the Pest Control Products Board.</p>
              <p className="text-neutral-600 text-sm mb-3">Compliance means:</p>
              <ul className="space-y-2">
                {[
                  "Using approved pesticides and equipment",
                  "Following safety protocols during application",
                  "Providing necessary training to personnel",
                  "Maintaining accurate records of pest control activities",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4">Understanding Pesticide Labeling and Usage</h3>
              <p className="text-neutral-600 text-sm mb-4 leading-relaxed">Pesticide labels and how they are used are very important. Labels tell us how to handle the product safely, how much to use, and any dangers.</p>
              <p className="text-neutral-600 text-sm mb-3">To follow the rules, pest control workers must:</p>
              <ul className="space-y-2">
                {[
                  "Read and follow label instructions carefully",
                  "Use personal protective equipment (PPE) as recommended",
                  "Apply pesticides in accordance with the labeled instructions",
                  "Dispose of containers and unused products properly",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONCLUSION ─── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h2 className="text-3xl font-heading font-black tracking-tight mb-6">Conclusion</h2>
          <p className="text-neutral-600 leading-relaxed mb-4">Effective pest management is key to keeping Kenyan properties safe and healthy. Throughout this guide, we've explored everything from basic preventative measures to situations that require <a href="https://www.fumigationkenya.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">professional fumigation services</a> for complete eradication. Understanding pests and correctly preparing your property for treatment is essential. Choosing a trusted pest control partner is crucial.</p>
          <p className="text-neutral-600 leading-relaxed mb-4">We talked about using both chemical and non-chemical methods. We also discussed using natural and eco-friendly options. Managing termite risks in buildings is another important step. In short, extermination services in Kenya are essential for a pest-free environment. By knowing the value of pest control and working with experts, we can keep our community safe and healthy.</p>
          <p className="text-neutral-600 leading-relaxed mb-8">Beyond pest control, we also work with <a href="https://naibunisystems.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Naibuni Systems</a>, providing you with top-quality fire extinguishers and containment systems for complete peace of mind.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-primary text-white px-10 text-base font-bold hover:bg-primary/90">
              <Phone className="mr-2 w-4 h-4" /> Contact Us
            </Link>
            <Link href="/services" className="inline-flex h-14 items-center justify-center border-2 border-black text-black px-8 text-sm font-bold hover:bg-black hover:text-white transition-colors">
              View All Services <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 bg-[#fbf7f0] border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block text-center">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-10 text-center">Frequently Asked Questions</h2>
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

    </div>
  );
}
