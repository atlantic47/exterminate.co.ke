import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const posts: Record<string, {
  title: string;
  meta: string;
  date: string;
  readTime: string;
  category: string;
  content: React.ReactNode;
}> = {
  "how-to-identify-termite-infestation-kenya": {
    title: "How to Identify a Termite Infestation in Your Kenyan Home",
    meta: "Learn to identify termite infestations in Kenya. Warning signs, species breakdown, and when to call a professional — from Kenya's pest control experts.",
    date: "March 2026",
    readTime: "6 min read",
    category: "Termite Control",
    content: (
      <>
        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
          Every year, Kenyan homeowners lose billions of shillings to termite damage — most of it completely preventable. The challenge is that termites work silently, hidden inside walls, beneath floors, and within wooden structures. By the time visible damage appears, the infestation has often been active for months or even years.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Knowing what to look for is your first line of defence. This guide explains the most reliable warning signs of termite activity in Kenyan properties, what they mean, and when you should call a professional pest controller immediately.
        </p>

        <h2 className="text-3xl font-heading font-black mt-10 mb-4">The Most Common Termite Species in Kenya</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Before examining the signs, it helps to understand which termites you're dealing with. In Kenya, two main species are responsible for the vast majority of property damage:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            { name: "Macrotermes (Mound Termites)", desc: "Found widely across Kenya, these termites build large mound nests and create extensive underground tunnel networks. They are active year-round but most visible during the rainy season." },
            { name: "Coptotermes (Subterranean Termites)", desc: "The most destructive species in urban Nairobi and Mombasa. They tunnel underground to reach timber and can hollow out wooden beams entirely while the surface appears intact." },
          ].map((s, i) => (
            <div key={i} className="border-2 border-black p-6 bg-[#fbf7f0]">
              <h3 className="font-heading font-bold text-lg mb-2">{s.name}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-heading font-black mt-10 mb-4">7 Warning Signs of Termite Infestation</h2>
        <div className="flex flex-col gap-4 mb-8">
          {[
            { sign: "Mud Tubes Along Walls or Foundations", detail: "Subterranean termites build pencil-thin mud tubes (typically 6–12mm wide) to travel between their nest and food source. These appear on walls, foundations, and wooden skirting boards. Finding an active mud tube is a definitive sign of infestation." },
            { sign: "Hollow-Sounding Timber", detail: "Tap on wooden structures — door frames, floor beams, skirting boards, and furniture. A distinctly hollow sound indicates termites have consumed the interior, leaving only a paper-thin outer shell." },
            { sign: "Discarded Wings Near Windowsills", detail: "Flying termites (alates) swarm during rainy season to establish new colonies. After landing, they shed their wings. Finding piles of small, symmetrical wings near light sources or windowsills indicates recent swarming activity nearby." },
            { sign: "Tight-Fitting Doors and Windows", detail: "As termites consume and damage wooden door frames and window surrounds, the moisture from their tunnelling warps the timber. Doors or windows that suddenly become difficult to open can be a sign of termite structural damage." },
            { sign: "Bubbling or Blistering Paint", detail: "When termites tunnel close to a painted surface, they create moisture that causes the paint to bubble or blister in a pattern that resembles water damage. Inspect your walls carefully — particularly older painted wood surfaces." },
            { sign: "Frass (Termite Droppings)", detail: "Drywood termites push their faecal pellets (frass) out of small exit holes. These appear as tiny cylindrical pellets, often cream or brown in colour, found piled on surfaces beneath wooden structures." },
            { sign: "Visible Termites at Night", detail: "If you see white, soft-bodied insects inside your walls, under flooring, or within wooden furniture — particularly after uncovering damaged material — these are worker termites. They avoid light and are rarely seen until infestation is severe." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 border-2 border-black p-6 bg-white">
              <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-heading font-bold mb-1">{item.sign}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-heading font-black mt-10 mb-4">When to Call a Professional</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          If you observe any of the above signs — particularly mud tubes or hollow-sounding timber — do not attempt to treat the infestation yourself. Over-the-counter termite sprays only kill surface termites; they do not penetrate the colony. Improper treatment can cause the colony to scatter, making professional treatment harder and more expensive.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Contact a certified pest control specialist immediately. You can reach out to dedicated <a href="https://www.termitescontrolservices.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">termite control services</a> for an expert assessment. In Nairobi, Mombasa, and across Kenya, you can reach us at Exterminate Pests Kenya for a free inspection. For pricing comparisons and an independent view, <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Pestraid Kenya's termite control page</a> is an excellent resource.
        </p>

        <div className="bg-[#fbf7f0] border-2 border-black p-8 mt-10">
          <h3 className="font-heading font-bold text-xl mb-4">Key Takeaways</h3>
          <ul className="space-y-3">
            {[
              "Mud tubes are the most reliable indicator of active subterranean termites",
              "Hollow-sounding timber means termites have been active inside the wood for an extended period",
              "Swarming season in Kenya coincides with the start of the rainy season",
              "Annual professional inspections are the best form of prevention",
              "Never attempt DIY treatment — it scatters colonies and complicates professional treatment",
            ].map((t, i) => (
              <li key={i} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span className="text-neutral-700">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 p-8 bg-primary text-white">
          <h3 className="font-heading font-bold text-2xl mb-3">Book a Free Termite Inspection</h3>
          <p className="text-neutral-300 mb-5 text-sm">Our certified technicians will inspect your property at no charge and provide a full written assessment.</p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-white text-black px-8 text-sm font-bold hover:bg-neutral-100">
            Book Now — Free of Charge
          </Link>
        </div>
      </>
    ),
  },

  "fumigation-preparation-guide-kenya": {
    title: "The Complete Fumigation Preparation Guide for Kenyan Properties",
    meta: "Step-by-step fumigation preparation guide for Kenya. What to do before, during, and after fumigation to ensure safety and maximum treatment effectiveness.",
    date: "March 2026",
    readTime: "8 min read",
    category: "Fumigation",
    content: (
      <>
        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
          Fumigation is one of the most effective pest control methods available — but its success depends enormously on proper preparation. A poorly prepared property can render a fumigation treatment up to 40% less effective, and in some cases, create unnecessary safety risks.
        </p>
        <p className="text-neutral-600 leading-relaxed mb-8">
          This guide — written specifically for Kenyan homeowners and property managers — walks you through every step you need to take before, during, and after a professional fumigation treatment.
        </p>

        <h2 className="text-3xl font-heading font-black mt-10 mb-6">Before the Fumigation: What You Must Do</h2>
        <div className="flex flex-col gap-4 mb-8">
          {[
            { step: "1", title: "Seal or remove all food items", detail: "Place all loose food — including dry goods, spices, and snacks — in airtight sealed bags or remove them from the property entirely. This includes pet food. Any exposed food must be discarded after treatment." },
            { step: "2", title: "Remove medication and personal care products", detail: "Medicines, vitamins, cosmetics, and toiletries should be placed in sealed bags or removed from the treatment area." },
            { step: "3", title: "Evacuate all people and animals", detail: "All occupants — including children, elderly residents, and pets (including birds and aquarium fish) — must leave the property before treatment begins and must not return until you have received written re-entry clearance from our team." },
            { step: "4", title: "Open all interior doors, drawers, and cupboards", detail: "Gas must penetrate all areas of the property. Leave every internal door, cabinet, wardrobe, drawer, and room door open so fumigant can circulate freely." },
            { step: "5", title: "Turn off all gas appliances and pilot lights", detail: "Switch off gas stoves, geysers, and any other gas-powered appliances. Pilot lights must be extinguished to prevent any interaction with fumigant gases." },
            { step: "6", title: "Arrange accommodation for 6–24 hours", detail: "Most fumigation treatments require the property to remain sealed for 6–24 hours. Arrange accommodation in advance, especially if you have small children or require refrigeration for medication." },
          ].map((item) => (
            <div key={item.step} className="flex gap-6 border-2 border-black p-6 bg-[#fbf7f0]">
              <div className="shrink-0 w-10 h-10 bg-primary text-white flex items-center justify-center font-heading font-black">{item.step}</div>
              <div>
                <h3 className="font-heading font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-heading font-black mt-10 mb-4">After the Fumigation: Re-Entry and Post-Treatment Care</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Never re-enter the property until your pest control provider has issued a written re-entry clearance certificate. Our team uses calibrated gas detectors to verify that fumigant levels have dropped to safe limits before issuing clearance.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Ventilate the property by opening all windows and doors for 2–4 hours after re-entry",
            "Wipe down all food preparation surfaces, cutlery, and utensils before use",
            "Wash bed linens and clothing left in the treated space as a precaution",
            "Dispose of any food items that were not properly sealed before treatment",
            "Contact us immediately if you observe any continued pest activity",
            "Keep re-entry clearance certificate for insurance or compliance records",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-neutral-200 p-4">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span className="text-sm text-neutral-700">{item}</span>
            </div>
          ))}
        </div>

        <p className="text-neutral-600 leading-relaxed mb-6">
          For context on what KEBS-compliant fumigation standards look like in Kenya, and for alternative pricing options, visit <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">Pestraid Kenya</a> — one of Kenya's most reputable pest control providers.
        </p>

        <div className="mt-10 p-8 bg-primary text-white">
          <h3 className="font-heading font-bold text-2xl mb-3">Ready to Book a Fumigation?</h3>
          <p className="text-neutral-300 mb-5 text-sm">Our team will walk you through the full preparation process and provide a written checklist before treatment day.</p>
          <Link href="/services/general-fumigation" className="inline-flex h-12 items-center justify-center bg-white text-black px-8 text-sm font-bold hover:bg-neutral-100">
            View Fumigation Service
          </Link>
        </div>
      </>
    ),
  },

  "pest-control-during-rainy-season-kenya": {
    title: "Why Kenya's Rainy Season Is Peak Pest Season — And What to Do About It",
    meta: "Kenya's rainy seasons trigger termite swarms, cockroach surges, and mosquito breeding. Here's how to protect your home before the rains arrive.",
    date: "February 2026",
    readTime: "7 min read",
    category: "Prevention",
    content: (
      <>
        <p className="text-lg text-neutral-600 leading-relaxed mb-6">
          If you live in Kenya, you know that the rains come twice a year — the long rains from March to May, and the short rains from October to December. What you may not immediately realise is that these periods are also peak seasons for pest activity across the country.
        </p>
        <h2 className="text-3xl font-heading font-black mt-10 mb-4">Why Do Pests Increase During Rainy Season?</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          Rain increases soil moisture, which drives subterranean termites to swarm and establish new colonies. It creates standing water — perfect breeding grounds for mosquitoes. It pushes rodents indoors seeking dry shelter, and the increased humidity triggers explosive cockroach reproduction in kitchens and drains.
        </p>
        <h2 className="text-3xl font-heading font-black mt-10 mb-4">Termite Swarms After Rain</h2>
        <p className="text-neutral-600 leading-relaxed mb-6">
          One of the most visible pest events in Kenya is the swarming of winged termites (alates) immediately after the first heavy rains of the season. If you see clouds of winged insects around your lights in the evening during rainy season — particularly if they leave piles of shed wings — there is a termite colony nearby. For detailed <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">termite control services in Kenya</a>, consult a specialist promptly.
        </p>
        <h2 className="text-3xl font-heading font-black mt-10 mb-4">What To Do Before Each Rainy Season</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {[
            "Book a pre-season inspection to identify existing infestations before they worsen",
            "Clear gutters and drains to eliminate standing water near the property",
            "Seal gaps around pipes, cables, and foundations before termite swarming season",
            "Store firewood away from the property walls to avoid providing termite access",
            "Treat standing water in gardens with larvicide before mosquito eggs hatch",
            "Schedule residual cockroach treatment before the humidity increase",
          ].map((tip, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-neutral-200 p-4">
              <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
              <span className="text-sm text-neutral-700">{tip}</span>
            </div>
          ))}
        </div>
        <p className="text-neutral-600 leading-relaxed">
          Also consider the flea risk during wet months. Fleas thrive in moist environments, and pet owners should be especially vigilant. Read about <a href="https://pestraid.co.ke/services/fleas-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline font-semibold">flea control services in Kenya</a> to understand treatment options available around rainy season.
        </p>
        <div className="mt-10 p-8 bg-primary text-white">
          <h3 className="font-heading font-bold text-2xl mb-3">Book a Pre-Season Inspection</h3>
          <p className="text-neutral-300 mb-5 text-sm">Don't wait for the rains to arrive. Act before peak pest season and protect your property with a preventive inspection.</p>
          <Link href="/contact" className="inline-flex h-12 items-center justify-center bg-white text-black px-8 text-sm font-bold hover:bg-neutral-100">
            Contact Our Team
          </Link>
        </div>
      </>
    ),
  },

  "bed-bug-myths-kenya": {
    title: "5 Bed Bug Myths Kenyan Homeowners Still Believe (And the Facts)",
    meta: "Bed bug myths busted for Kenyan homeowners. Learn the truth about bed bug infestations, treatments, and prevention from Kenya's certified pest control experts.",
    date: "January 2026",
    readTime: "5 min read",
    category: "Bed Bugs",
    content: (
      <>
        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
          Bed bugs are one of the most feared and misunderstood pests in Kenya. Misconceptions about how they spread, who gets them, and how to eliminate them lead many homeowners to delay treatment — making the infestation far worse and more expensive to resolve.
        </p>
        <div className="flex flex-col gap-6 mb-8">
          {[
            { myth: "MYTH 1: Only Dirty Homes Get Bed Bugs", fact: "Bed bugs are not attracted to dirt or poor hygiene. They are attracted to carbon dioxide and body heat — meaning they can infest any home, hotel room, or office where humans sleep or rest. Five-star hotels and clean, well-maintained Nairobi apartments are just as vulnerable as neglected properties." },
            { myth: "MYTH 2: You Can See the Infestation Before It Gets Bad", fact: "Bed bugs are nocturnal, photophobic (avoiding light), and expert hiders. They flatten their bodies to fit into gaps 1–2mm wide — mattress seams, wall joints, and electrical outlets. Most people don't discover an infestation until they begin experiencing bite reactions, by which time there can already be hundreds of bugs in the room." },
            { myth: "MYTH 3: Cheaper DIY Sprays Work Just as Well", fact: "Over-the-counter insecticides kill bed bugs on direct contact — but do nothing to eggs or bugs hidden in inaccessible areas. Many Kenyan bed bug populations have also developed resistance to pyrethroid-based sprays (the most common active ingredient in retail products). Professional fumigation or residual treatment is required for genuine elimination." },
            { myth: "MYTH 4: Bed Bugs Only Live in Beds", fact: "Bed bugs will colonise any harbouring site near a human sleeping or resting area — sofas, chairs, curtains, electrical sockets, skirting boards, and even behind wall art. A thorough professional treatment addresses all harbouring sites, not just the mattress." },
            { myth: "MYTH 5: One Treatment Is Always Enough", fact: "Bed bug eggs can be resistant to some insecticides and may hatch after the initial treatment. This is why professional providers — including ourselves and trusted specialists like those at <a href='https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/' class='text-blue-600 underline font-semibold' target='_blank'>Pestraid Kenya's bed bug service</a> — recommend a follow-up inspection 14 days after initial treatment." },
          ].map((item, i) => (
            <div key={i} className="border-2 border-black bg-[#fbf7f0]">
              <div className="border-b-2 border-black p-4 bg-red-50">
                <p className="font-heading font-bold text-lg text-red-700">{item.myth}</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-neutral-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.fact }} />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 p-8 bg-primary text-white">
          <h3 className="font-heading font-bold text-2xl mb-3">Suspect Bed Bugs? Act Now.</h3>
          <p className="text-neutral-300 mb-5 text-sm">The longer you wait, the larger the infestation grows. Contact our team for a fast, discreet inspection.</p>
          <Link href="/services/bed-bug-treatment" className="inline-flex h-12 items-center justify-center bg-white text-black px-8 text-sm font-bold hover:bg-neutral-100">
            Bed Bug Treatment Service
          </Link>
        </div>
      </>
    ),
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Article Not Found" };
  return { title: post.title, description: post.meta };
}

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#fbf7f0] border-b-4 border-black py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-sm font-bold text-neutral-500 hover:text-black">Blog</Link>
            <ChevronRight className="w-4 h-4 text-neutral-400" />
            <span className="text-sm font-bold text-black">{post.category}</span>
          </div>
          <span className="inline-block border-2 border-black px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">{post.category}</span>
          <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-neutral-500">
            <span className="font-medium">{post.date}</span>
            <span>·</span>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {post.content}
        </div>
      </article>

      {/* Related Links */}
      <section className="py-12 bg-[#fbf7f0] border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="font-heading font-bold text-xl mb-4">Related Reading & Services</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Termite Control", href: "/services/termite-control" },
              { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
              { label: "General Fumigation", href: "/services/general-fumigation" },
              { label: "Rodent Control", href: "/services/rodent-control" },
              { label: "More Blog Articles", href: "/blog" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 border-2 border-black px-4 py-2 text-sm font-bold hover:bg-black hover:text-white transition-colors">
                {l.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
