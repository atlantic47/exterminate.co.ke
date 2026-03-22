import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pestraid Kenya | Professional Pest Control in Kenya",
  description: "Kenya's premier pest control and fumigation service. Protecting your home and business from termites, bed bugs, rodents, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased min-h-screen flex flex-col font-sans bg-background text-foreground`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#111] text-white py-12">
      <div className="container mx-auto px-4 md:px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center bg-white text-black font-heading font-bold text-xl rounded-sm">
              E
            </div>
            <span className="font-heading font-bold text-xl tracking-tight">Exterminate Pests Kenya</span>
          </div>
          <p className="text-neutral-400 text-sm">
            Professional pest control and fumigation services across Kenya. Protecting your property, your health, and your peace of mind.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading font-bold mb-2">Company</h3>
          <a href="/about" className="text-sm text-neutral-400 hover:text-white transition-colors">About Us</a>
          <a href="/services" className="text-sm text-neutral-400 hover:text-white transition-colors">Our Services</a>
          <a href="/service-area" className="text-sm text-neutral-400 hover:text-white transition-colors">Service Areas</a>
          <a href="/blog" className="text-sm text-neutral-400 hover:text-white transition-colors">Blog</a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading font-bold mb-2">Services</h3>
          <a href="/services/termite-control" className="text-sm text-neutral-400 hover:text-white transition-colors">Termite Control</a>
          <a href="/services/bed-bug-treatment" className="text-sm text-neutral-400 hover:text-white transition-colors">Bed Bug Treatment</a>
          <a href="/services/cockroach-control" className="text-sm text-neutral-400 hover:text-white transition-colors">Cockroach Control</a>
          <a href="/services/rodent-control" className="text-sm text-neutral-400 hover:text-white transition-colors">Rodent Control</a>
          <a href="/services/general-fumigation" className="text-sm text-neutral-400 hover:text-white transition-colors">Fumigation</a>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-heading font-bold mb-2">Contact</h3>
          <p className="text-sm text-neutral-400">Phone: +254 710 907 628</p>
          <p className="text-sm text-neutral-400">Nairobi, Kenya</p>
          <a href="/contact" className="mt-2 inline-flex h-9 items-center justify-center bg-white text-black px-4 text-sm font-medium transition-colors hover:bg-neutral-200 w-fit">
            Get a Quote
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-neutral-500">© 2026 Exterminate Pests Kenya. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="text-xs text-neutral-500 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-xs text-neutral-500 hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
