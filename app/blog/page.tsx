import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Pest Control Blog | Pestraid Kenya — Expert Tips & Guides",
  description: "Educational pest control articles for Kenyan homeowners and businesses. Learn about termites, bed bugs, fumigation, rodents, and more from Kenya's pest control experts.",
};

const posts = [
  {
    slug: "how-to-identify-termite-infestation-kenya",
    title: "How to Identify a Termite Infestation in Your Kenyan Home",
    excerpt: "Termites are called 'silent destroyers' for a reason. This guide covers the key warning signs Kenyan homeowners must look for — from mud tubes to discarded wings — and explains why early detection can save you hundreds of thousands of shillings.",
    category: "Termite Control",
    readTime: "6 min read",
    date: "March 2026",
  },
  {
    slug: "fumigation-preparation-guide-kenya",
    title: "The Complete Fumigation Preparation Guide for Kenyan Properties",
    excerpt: "Booked a fumigation? Here's exactly what you need to do before the technicians arrive. This step-by-step guide covers everything from food storage and pet evacuation to post-treatment ventilation — so your treatment is as safe and effective as possible.",
    category: "Fumigation",
    readTime: "8 min read",
    date: "March 2026",
  },
  {
    slug: "pest-control-during-rainy-season-kenya",
    title: "Why Kenya's Rainy Season Is Peak Pest Season — And What to Do About It",
    excerpt: "Kenya's long rains (March–May) and short rains (October–December) are more than just weather events — they trigger explosive pest activity. Learn why termites swarm after rainfall, why cockroaches proliferate in wet conditions, and how to protect your property before the season hits.",
    category: "Prevention",
    readTime: "7 min read",
    date: "February 2026",
  },
  {
    slug: "bed-bug-myths-kenya",
    title: "5 Bed Bug Myths Kenyan Homeowners Still Believe (And the Facts)",
    excerpt: "Bed bugs are one of the most misunderstood pests in Kenya. From the myth that they only infest dirty homes to the belief that candles or essential oils will kill them — we debunk the most dangerous misconceptions and explain what actually works.",
    category: "Bed Bugs",
    readTime: "5 min read",
    date: "January 2026",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-primary text-white py-24">
        <div className="container mx-auto px-4 md:px-6">
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-3 block">Knowledge Base</span>
          <h1 className="text-5xl md:text-6xl font-heading font-black tracking-tight leading-tight mb-6 max-w-3xl">
            Pest Control Education for Kenyan Homeowners & Businesses
          </h1>
          <p className="text-lg text-neutral-300 max-w-2xl">
            We believe the best pest control is informed pest control. Our articles are written by certified pest management professionals — practical, science-backed, and specific to Kenya's climate and pest landscape.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#fbf7f0]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col bg-white border-2 border-black hover:-translate-y-1 transition-transform">
                <div className="p-8 border-b-2 border-black bg-[#fbf7f0] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-black border-2 border-black px-3 py-1">{post.category}</span>
                  <span className="text-xs text-neutral-500 font-medium">{post.date}</span>
                </div>
                <div className="p-8 flex flex-col flex-grow gap-4">
                  <h2 className="font-heading font-bold text-2xl group-hover:underline leading-snug">{post.title}</h2>
                  <p className="text-neutral-600 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </div>
                    <span className="inline-flex items-center text-sm font-bold group-hover:text-amber-600 transition-colors">
                      Read Article <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6 max-w-xl">
          <h2 className="text-3xl font-heading font-black mb-4">Need Help With a Pest Problem Now?</h2>
          <p className="text-neutral-300 mb-8">Our blog covers general advice — but for a specific infestation, nothing replaces a certified inspection. Book yours for free today.</p>
          <Link href="/contact" className="inline-flex h-14 items-center justify-center bg-white text-black px-10 text-base font-bold hover:bg-neutral-100">
            Book a Free Inspection
          </Link>
        </div>
      </section>
    </div>
  );
}
