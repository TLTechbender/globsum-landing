"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact Us" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "features",
        "about",
        "services",
        "projects",
        "contact",
      ];

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 md:px-12 bg-white shadow-md text-gray-900">
        {/* Logo - Left */}
        <Link
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative h-10 w-32 md:h-12 md:w-40 z-50 flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="Global Summit Technologies"
            fill
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1 gap-8 font-medium text-sm tracking-wide">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative py-1 group">
                <span
                  className={`transition-colors ${isActive ? "text-accent" : "hover:text-accent"}`}>
                  {link.label}
                </span>
                <span
                  className={`absolute left-0 bottom-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* CTA - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="bg-accent hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wide transition-all shadow-lg hover:shadow-accent/40 flex items-center gap-2">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          <div className="relative w-6 h-5">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                mobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : "w-6"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-gray-900 transition-all duration-300 ${
                mobileMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "top-full"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-60 bg-white rounded-t-3xl shadow-2xl transition-transform duration-500 ease-out md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}>
        <div className="px-8 py-10">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="relative text-2xl font-bold text-gray-900 py-2"
                  style={{ transitionDelay: `${index * 50}ms` }}>
                  <span
                    className={`transition-colors ${isActive ? "text-accent" : ""}`}>
                    {link.label}
                  </span>
                  {isActive && (
                    <span className="absolute left-0 bottom-0 h-1 w-8 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}

            <Link
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="mt-4 bg-accent text-white px-6 py-4 rounded-full font-bold text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
