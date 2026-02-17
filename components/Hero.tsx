"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
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
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-start overflow-hidden">
      {/* Sliding Background Images */}
      <div className="absolute inset-0 z-0 h-full overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
        
        <div className="slide-track flex h-full">
          <div className="w-screen h-full flex-shrink-0 relative">
            <Image src="/Engineer.webp" alt="Modern IT Business Team" fill className="object-cover" priority sizes="100vw" quality={80} />
          </div>
          <div className="w-screen h-full flex-shrink-0 relative">
            <Image src="/hero-bg.jpg" alt="Technology Background" fill className="object-cover" sizes="100vw" quality={75} />
          </div>
          <div className="w-screen h-full flex-shrink-0 relative">
            <Image src="/hero-bg1.jpg" alt="Business Background" fill className="object-cover" sizes="100vw" quality={75} />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col pt-40 md:pt-52 pb-20">
        
        {/* Main Text Content */}
        <div className="max-w-3xl mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold font-display text-white leading-[1.1] mb-6"
          >
            Empowering Businesses Through <br />
            <span className="text-white">Intelligent Technology</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg text-gray-200 mb-10 max-w-xl leading-relaxed"
          >
            Since 2003, Global Summit Technologies has delivered reliable, scalable, and future-ready IT solutions built on experience, innovation, and strategic industry partnerships.
          </motion.p>
          
          <motion.button 
            onClick={scrollToContact}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-accent hover:bg-[#d63f47] text-white px-7 py-3.5 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-accent/50 flex items-center gap-3 cursor-pointer"
          >
            Let's Build Your Solution
            <span className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
