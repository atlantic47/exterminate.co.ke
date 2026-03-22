import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Pestraid Kenya | Book Pest Control in Kenya",
  description: "Contact Pestraid Kenya for professional pest control services. Call, WhatsApp, or fill out our form for a free inspection. Serving all of Kenya.",
};

const faqs = [
  {
    q: "How much does fumigation cost in Kenya?",
    a: "Costs vary based on property size, pest type, and treatment method. We offer free site assessments so you receive an accurate, honest quote with no hidden charges. Call +254 710 907 628 to arrange your free estimate.",
  },
  {
    q: "Is fumigation safe for children and pets?",
    a: "Yes — when conducted by trained professionals following proper preparation and re-entry protocols. We provide a written safety briefing to every client and only issue formal re-entry clearance after verifying gas levels with calibrated equipment.",
  },
  {
    q: "How long does pest control treatment last?",
    a: "It depends on the pest and treatment type. Termite soil barriers can last 5–10 years. Residual cockroach and rodent treatments typically provide 3–6 months of protection. We recommend regular preventive inspections to maintain coverage.",
  },
  {
    q: "Can I stay in my house during fumigation?",
    a: "No — all occupants (including pets) must vacate during the fumigation period, which typically lasts 6 to 24 hours. Our team coordinates with you to minimise disruption and confirm re-entry timing in advance.",
  },
  {
    q: "Do you offer pest control outside Nairobi?",
    a: "Yes. We provide professional pest control and fumigation services across Kenya, including Mombasa, Kisumu, Nakuru, Eldoret, Thika, and surrounding areas. Contact us to confirm coverage in your specific location.",
  },
  {
    q: "What is the best termite treatment for Kenya?",
    a: "For most Kenyan properties, a combination of soil treatment and bait stations provides the most comprehensive termite protection. Our team will recommend the right approach for your specific property type and location after a free inspection.",
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-[#fbf7f0] border-b-4 border-black py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6">
              Let's Solve Your Pest Problem
            </h1>
            <p className="text-lg text-neutral-600">
              Whether you've spotted signs of termites, found bed bugs in your home, or simply want the security of a professional property inspection — our certified team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-[#fbf7f0] border-2 border-black p-8 drop-shadow-[6px_6px_0_rgba(17,17,17,1)]">
              <h2 className="font-heading font-bold text-2xl mb-6">Send Us a Message</h2>
              <form className="flex flex-col gap-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold" htmlFor="name">Full Name</label>
                    <input id="name" type="text" placeholder="e.g. Jane Mwangi" className="h-12 px-4 border-2 border-black bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold" htmlFor="phone">Phone / WhatsApp</label>
                    <input id="phone" type="tel" placeholder="+254 7XX XXX XXX" className="h-12 px-4 border-2 border-black bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold" htmlFor="email">Email Address</label>
                  <input id="email" type="email" placeholder="your@email.com" className="h-12 px-4 border-2 border-black bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold" htmlFor="service">Service Required</label>
                  <select id="service" className="h-12 px-4 border-2 border-black bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black">
                    <option value="">Select a service...</option>
                    <option>Termite Control</option>
                    <option>General Fumigation</option>
                    <option>Bed Bug Treatment</option>
                    <option>Cockroach Control</option>
                    <option>Rodent Control</option>
                    <option>General Inspection</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold" htmlFor="location">Location / Area</label>
                  <input id="location" type="text" placeholder="e.g. Westlands, Nairobi" className="h-12 px-4 border-2 border-black bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold" htmlFor="message">Message</label>
                  <textarea id="message" rows={4} placeholder="Describe your pest problem and any relevant details..." className="px-4 py-3 border-2 border-black bg-white text-sm focus:outline-none focus:ring-2 focus:ring-black resize-none"></textarea>
                </div>
                <button type="submit" className="h-14 bg-primary text-white font-bold text-base hover:bg-primary/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="font-heading font-bold text-2xl mb-4">Get in Touch Directly</h2>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Prefer to speak with someone now? Call or WhatsApp our team directly for fast assistance or to schedule a same-week inspection.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { Icon: Phone, label: "Phone / WhatsApp", value: "+254 710 907 628", href: "tel:+254710907628" },
                  { Icon: Mail, label: "Email", value: "info@pestraid.co.ke", href: "mailto:info@pestraid.co.ke" },
                  { Icon: MapPin, label: "Head Office", value: "Nairobi, Kenya", href: "/service-area" },
                  { Icon: Clock, label: "Operating Hours", value: "Monday – Sunday, 7am – 7pm", href: null },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 border-2 border-black p-5 bg-[#fbf7f0]">
                    <div className="w-12 h-12 bg-primary text-white flex items-center justify-center shrink-0">
                      <item.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-bold text-black hover:underline">{item.value}</a>
                      ) : (
                        <p className="font-bold text-black">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-2 border-black p-6 bg-[#fbf7f0]">
                <h3 className="font-heading font-bold mb-3">What Happens After You Contact Us?</h3>
                <ul className="space-y-3">
                  {[
                    "We confirm your booking within 2 hours",
                    "A certified technician visits for a free property inspection",
                    "You receive a written treatment plan and transparent quote",
                    "Treatment is scheduled at your convenience",
                    "You receive a post-treatment report and re-entry clearance",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#fbf7f0] border-t border-neutral-200">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black tracking-tight mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-2 border-black bg-white p-6">
                <h3 className="font-heading font-bold text-lg mb-2">{faq.q}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
