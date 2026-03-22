import Link from "next/link";
import { Metadata } from "next";
import { CheckCircle2, AlertTriangle, ChevronRight, Phone, ShieldCheck, Thermometer } from "lucide-react";

export const metadata: Metadata = {
  title: "Bed Bug Treatment in Kenya | Pestraid Kenya",
  description: "Expert bed bug treatment services across Kenya. Heat treatment, targeted fumigation, and residual sprays to completely eliminate bed bug infestations in homes and hotels.",
};

const signs = [
  { sign: "Small reddish-brown insects (1–5mm long) visible on mattress seams", severity: "Definitive" },
  { sign: "Rusty or dark spots on bedding — bed bug excrement", severity: "Definitive" },
  { sign: "Tiny pale yellow eggshells or shed skins along mattress seams", severity: "Definitive" },
  { sign: "Linear red welts or bites on skin — often in rows of three", severity: "High Indicator" },
  { sign: "Sweet, musty odour in the bedroom — from bed bug scent glands", severity: "High Indicator" },
  { sign: "Blood smears on sheets from crushed bed bugs after feeding", severity: "High Indicator" },
];

const methods = [
  { num: "01", icon: <Thermometer className="w-6 h-6" />, title: "Heat Treatment", desc: "Industrial heaters raise room temperatures to 52°C+ for several hours, killing bed bugs, nymphs, and eggs at all life stages. Heat penetrates mattresses, furniture, and wall voids — no chemicals required. Ideal for entire room decontamination." },
  { num: "02", icon: <ShieldCheck className="w-6 h-6" />, title: "Targeted Fumigation", desc: "For severe, multi-room or multi-unit infestations, targeted gas fumigation ensures complete elimination including bed bugs sheltering in inaccessible voids. Used in conjunction with heat treatment for maximum efficacy." },
  { num: "03", icon: <CheckCircle2 className="w-6 h-6" />, title: "Residual Insecticide Application", desc: "Long-lasting residual sprays are applied to all harborage zones — headboards, baseboards, carpet edges, furniture joints — providing ongoing kill activity for any bugs that emerge post-treatment." },
  { num: "04", icon: <CheckCircle2 className="w-6 h-6" />, title: "Mattress Encasements", desc: "Commercial-grade mattress and box spring encasements trap surviving bed bugs inside and prevent new infestations from establishing in mattress seams. We supply and fit encasements rated to resist bed bugs for up to 1 year." },
];

const myths = [
  { myth: "Only dirty homes get bed bugs", fact: "Bed bugs are attracted to warmth and carbon dioxide — not cleanliness. Five-star hotels are equally susceptible as shared guesthouses." },
  { myth: "You can see bed bugs easily", fact: "Early-stage nymphs are translucent and 1mm in size. Established bugs hide inside seams, screw holes, and electrical fixtures — invisible without a torch and trained eye." },
  { myth: "DIY sprays eliminate infestations", fact: "Over-the-counter sprays kill bed bugs on contact only — they don't reach eggs or bugs hidden deep in furniture. Sprays alone rarely solve an established infestation." },
  { myth: "Bed bugs only live in beds", fact: "Bed bugs colonize sofas, office chairs, luggage, clothing, picture frames, and wall outlets. Full-room treatment is always required, not just the mattress." },
];

const faqs = [
  { q: "How long does bed bug treatment take?", a: "Heat treatment typically takes 6–8 hours per room. Residual spray treatment takes 2–3 hours and requires 4 hours before re-entry. We'll confirm the exact timeline at your free inspection." },
  { q: "Do I need to throw away my mattress?", a: "Not necessarily. In most cases, heat treatment and professional mattress encasements are sufficient to treat infested mattresses. We'll advise on a case-by-case basis at inspection." },
  { q: "How many treatments will I need?", a: "Most infestations are resolved in 1–2 treatments. Severe or multi-unit infestations may require a third visit. We schedule a follow-up inspection 14 days post-treatment to confirm complete elimination." },
  { q: "Can bed bugs travel between apartments?", a: "Yes — bed bugs can travel through wall voids, electrical conduits, and even on residents' clothing between neighbouring units. In multi-unit buildings, we recommend treating all adjacent units." },
  { q: "Are your treatments safe for children?", a: "Yes. Heat treatment uses no chemicals at all. Our residual insecticides are approved for residential use and safe once dried. We'll advise exactly when it is safe to re-enter the treated area." },
];

export default function BedBugTreatmentPage() {
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
            <span className="text-white">Bed Bug Treatment</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-block bg-amber-400 text-black text-xs font-black px-3 py-1 mb-4 uppercase tracking-widest">Targeted, Heat-Based Eradication</span>
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              Professional Bed Bug Treatment in Kenya
            </h1>
            <p className="text-lg text-neutral-300 mb-4 leading-relaxed">
              Bed bugs hide deep in mattress seams, furniture joints, and wall voids — places that surface sprays simply cannot reach. Our multi-method treatment protocol combines heat treatment, targeted fumigation, and residual insecticides to achieve complete eradication at every life stage.
            </p>
            <p className="text-neutral-400 mb-8 leading-relaxed">
              One undetected infestation can spread to an entire building within weeks. Don't wait — bed bug populations double every two weeks under warm Kenyan conditions. For a comparison of professional bed bug services and pricing across Kenya, see <a href="https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-amber-300 font-semibold underline underline-offset-2 hover:text-white">Pestraid Kenya's bed bug control page</a>.
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

      {/* SIGNS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Detection</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Signs of a Bed Bug Infestation</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Bed bugs are experts at hiding. By the time most people notice symptoms, an infestation is already well established. Early detection is crucial — here's what to look for. <a href="https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's bed bug identification guide</a> also covers key detection indicators for Kenyan homeowners.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {signs.map((item, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-5">
                <span className={`inline-block text-xs font-black px-2 py-0.5 mb-3 ${item.severity === "Definitive" ? "bg-red-600 text-white" : "bg-amber-400 text-black"}`}>
                  {item.severity}
                </span>
                <p className="text-sm text-neutral-700 leading-relaxed">{item.sign}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-amber-50 border-2 border-amber-400 p-5">
            <span className="font-bold text-amber-800 text-sm">⚠ Act Fast If You Spot These Signs</span>
            <p className="text-amber-700 text-sm mt-1">A single female bed bug lays up to 500 eggs in her lifetime. Early treatment dramatically reduces the scope — and cost — of eradication.</p>
          </div>
        </div>
      </section>

      {/* TREATMENT METHODS */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Treatment Methods</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Our Multi-Method Treatment Protocol</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">No single method eliminates bed bugs at every life stage in every harborage location. We combine multiple proven methods for 100% efficacy. For service pricing and method comparisons in Kenya, <a href="https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's bed bug treatment pricing page</a> is a helpful benchmark.</p>
          <div className="flex flex-col gap-5">
            {methods.map((m, i) => (
              <div key={i} className="flex gap-6 bg-white border-2 border-black p-8">
                <div className="text-3xl font-heading font-black text-neutral-200 leading-none shrink-0">{m.num}</div>
                <div>
                  <h3 className="font-heading font-bold text-xl mb-2 flex items-center gap-2">{m.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MYTHS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Setting the Record Straight</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-4">Common Bed Bug Myths — Debunked</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Misinformation about bed bugs is widespread and leads Kenyan homeowners to waste money on ineffective treatments. Here's the truth. Note that bed bug infestations often coincide with flea problems — if you share living spaces with pets, also check <a href="https://pestraid.co.ke/services/fleas-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's flea control services</a>.</p>
          <div className="grid md:grid-cols-2 gap-5">
            {myths.map((item, i) => (
              <div key={i} className="bg-[#fbf7f0] border-2 border-black p-6">
                <div className="flex items-start gap-3 mb-3">
                  <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <p className="font-bold text-sm text-red-700">MYTH: {item.myth}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-700 leading-relaxed"><span className="font-bold text-green-700">FACT:</span> {item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREVENTION */}
      <section className="py-20 bg-[#fbf7f0] border-y border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-3 block">Prevention</span>
          <h2 className="text-4xl font-heading font-black tracking-tight mb-6">Preventing Re-Infestation After Treatment</h2>
          <p className="text-neutral-600 leading-relaxed mb-10 max-w-2xl">Treatment eliminates the existing infestation. These steps prevent bed bugs from being reintroduced to your property. For a full service overview, visit <a href="https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener" className="text-primary font-semibold underline underline-offset-2 hover:text-primary/80">Pestraid Kenya's comprehensive bed bug page</a> for rates and coverage areas across Kenya.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">At Home</h3>
              <ul className="space-y-2">
                {["Install protective encasements on all mattresses and box springs", "Vacuum thoroughly and frequently, disposing of bags immediately", "Seal cracks in baseboards, walls, and electrical outlets", "Inspect second-hand furniture and clothing before bringing them inside", "Reduce clutter to minimize bed bug harborage zones"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border-2 border-black p-8">
              <h3 className="font-heading font-bold text-xl mb-4">When Travelling</h3>
              <ul className="space-y-2">
                {["Inspect hotel mattresses and headboards before sleeping", "Keep luggage on luggage racks — never on the floor or bed", "Wash all clothing on high heat immediately upon returning home", "Inspect luggage carefully before bringing it indoors", "Report infestations to accommodation management immediately"].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> {t}
                  </li>
                ))}
              </ul>
            </div>
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
          <h2 className="text-3xl font-heading font-black mb-4">Stop Bed Bugs Tonight</h2>
          <p className="text-neutral-300 mb-8 max-w-xl mx-auto">Same-week service available across Nairobi and major Kenyan cities. Call us now for an immediate inspection.</p>
          <Link href="/contact" className="inline-flex items-center justify-center bg-white text-black px-10 py-3 text-sm font-bold hover:bg-neutral-100 transition-colors">
            <Phone className="mr-2 w-4 h-4" /> Book Today
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
