"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Termite Control", href: "/services/termite-control" },
      { label: "General Fumigation", href: "/services/general-fumigation" },
      { label: "Bed Bug Treatment", href: "/services/bed-bug-treatment" },
      { label: "Cockroach Control", href: "/services/cockroach-control" },
      { label: "Rodent Control", href: "/services/rodent-control" },
    ],
  },
  { label: "Service Areas", href: "/service-area" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-black/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary text-primary-foreground font-heading font-bold text-xl">
              E
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight">Exterminate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div 
                  key={link.href} 
                  className="relative group"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-primary transition-colors rounded"
                    aria-expanded={servicesOpen}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-52 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className={`block px-4 py-2.5 text-sm font-medium hover:bg-[#fbf7f0] transition-colors border-b border-neutral-100 last:border-b-0 ${pathname === child.href ? "text-primary font-bold" : ""}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium hover:text-primary transition-colors rounded ${pathname === link.href ? "font-bold underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+254710907628"
              className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              +254 710 907 628
            </a>
            <Link
              href="/contact"
              className="hidden md:inline-flex h-9 items-center justify-center bg-primary text-primary-foreground px-5 text-sm font-bold hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-black hover:bg-black hover:text-white transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm bg-white border-l-2 border-black flex flex-col md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b-2 border-black">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <div className="flex h-7 w-7 items-center justify-center rounded-sm bg-primary text-primary-foreground font-heading font-bold text-base">
              E
            </div>
            <span className="font-heading font-bold text-lg tracking-tight">Exterminate</span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-9 h-9 border-2 border-black hover:bg-black hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer nav links */}
        <nav className="flex flex-col flex-1 overflow-y-auto py-2">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.href}>
                <button
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex items-center justify-between w-full px-5 py-3.5 text-sm font-bold border-b border-neutral-100 hover:bg-[#fbf7f0] transition-colors"
                >
                  {link.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="bg-[#fbf7f0] border-b border-neutral-200">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 pl-8 pr-5 py-3 text-sm font-medium border-b border-neutral-100 last:border-b-0 hover:text-primary transition-colors ${pathname === child.href ? "text-primary font-bold" : "text-neutral-700"}`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-3.5 text-sm font-bold border-b border-neutral-100 hover:bg-[#fbf7f0] transition-colors ${pathname === link.href ? "text-primary" : ""}`}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Drawer footer CTA */}
        <div className="px-5 py-5 border-t-2 border-black flex flex-col gap-3">
          <a
            href="tel:+254710907628"
            className="flex items-center justify-center gap-2 h-11 border-2 border-black text-sm font-bold hover:bg-black hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            +254 710 907 628
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center h-11 bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </>
  );
}
