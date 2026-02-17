"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'voice':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      );
    case 'ups':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      );
    case 'cctv':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
      );
    case 'network':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg>
      );
    case 'hardware':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
      );
    case 'training':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
      );
    case 'software':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      );
    case 'archiving':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
      );
    default:
      return null;
  }
};

interface Service {
  title: string;
  description: string;
  type: string;
  details: string;
  features: string[];
  trust: string;
}

const servicesData: Service[] = [
  {
    title: "Voice & Data Solutions",
    description: "Installation and configuration of enterprise voice and data solutions",
    type: "voice",
    details: "Our enterprise voice and data solutions provide seamless communication infrastructure for businesses of all sizes. We design, implement, and maintain robust systems that keep your team connected.",
    features: [
      "VoIP phone systems installation",
      "Structured cabling networks",
      "PBX system setup",
      "Unified communications",
      "24/7 technical support"
    ],
    trust: "Trusted by leading enterprises across Nigeria with over 20 years of experience in telecommunications infrastructure."
  },
  {
    title: "UPS & Inverters",
    description: "We install solar powered inverters and Uninterrupted Power Supply",
    type: "ups",
    details: "Never worry about power outages again. Our UPS and solar inverter solutions ensure your business operations run smoothly 24/7, protecting your equipment and data.",
    features: [
      "Solar inverter installation",
      "UPS system setup",
      "Power backup solutions",
      "Energy efficiency consulting",
      "Maintenance contracts"
    ],
    trust: "We have powered over 500 businesses across Nigeria, ensuring uninterrupted operations even during grid failures."
  },
  {
    title: "CCTV Installation",
    description: "We install CCTV cameras for security and surveillance",
    type: "cctv",
    details: "Protect your property with state-of-the-art CCTV surveillance systems. Our solutions provide round-the-clock monitoring, remote viewing, and high-quality recording.",
    features: [
      "IP & analog camera systems",
      "Remote mobile monitoring",
      "Motion detection alerts",
      "Cloud & local storage",
      "Integration with alarm systems"
    ],
    trust: "Certified security experts with installations in banks, hotels, and government facilities throughout Nigeria."
  },
  {
    title: "Network Infrastructure",
    description: "Building network infrastructure with ethernet, wireless and fibre optics",
    type: "network",
    details: "We build scalable, high-speed network infrastructure that forms the backbone of your digital operations. From office LANs to wide-area networks, we've got you covered.",
    features: [
      "Fiber optic cabling",
      "Wireless network setup",
      "Network security solutions",
      "Server room setup",
      "Network monitoring"
    ],
    trust: "Our networks power over 200 organizations, from small businesses to large corporations with 1000+ users."
  },
  {
    title: "Hardware Sales",
    description: "We sell the best hardware products",
    type: "hardware",
    details: "We supply genuine enterprise-grade hardware from trusted manufacturers. Get the right equipment for your needs with expert advice and warranty support.",
    features: [
      "Servers & storage solutions",
      "Workstations & laptops",
      "Networking equipment",
      "Printers & peripherals",
      "Genuine parts & accessories"
    ],
    trust: "Authorized reseller for leading brands with genuine products and manufacturer warranties."
  },
  {
    title: "ICT Training",
    description: "Information & Communication Technology and Certification Training",
    type: "training",
    details: "Empower your team with industry-recognized IT certifications and skills. Our training programs are designed to bridge the skills gap in your organization.",
    features: [
      "Cisco certification courses",
      "Microsoft certification training",
      "CompTIA certifications",
      "Custom corporate training",
      "Online & in-person options"
    ],
    trust: "We've trained over 5,000 professionals who have gone on to successful careers in IT across Nigeria and abroad."
  },
  {
    title: "Software Development",
    description: "Developing POS software and customized websites",
    type: "software",
    details: "From point-of-sale systems to custom web applications, we build software solutions tailored to your business needs. Modern, scalable, and user-friendly.",
    features: [
      "POS system development",
      "Custom web applications",
      "E-commerce solutions",
      "Mobile app development",
      "Software maintenance"
    ],
    trust: "We've delivered 200+ custom software solutions, with many clients seeing ROI within the first year of deployment."
  },
  {
    title: "Electronic Archiving",
    description: "Installation of electronic document management systems (DMS)",
    type: "archiving",
    details: "Transform your document management with our electronic archiving solutions. Organize, secure, and retrieve documents instantly with our DMS installation.",
    features: [
      "Document digitization",
      "Cloud storage integration",
      "OCR search capabilities",
      "Access control & security",
      "Automated workflows"
    ],
    trust: "Helping organizations go paperless since 2005, saving clients an average of 40% on document management costs."
  }
];

function ServiceModal({ service, isOpen, onClose }: { service: Service | null; isOpen: boolean; onClose: () => void }) {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-70 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Fixed Header */}
        <div className="flex-shrink-0 p-6 pb-0">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center text-accent">
              <ServiceIcon type={service.type} />
            </div>
            <h3 className="font-display font-bold text-2xl text-gray-900">{service.title}</h3>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 pt-4">
          <p className="text-gray-600 leading-relaxed mb-6">
            {service.details}
          </p>

          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-4">What&apos;s Included</h4>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-r from-accent/10 to-blue-50 p-5 rounded-2xl">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F3525A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Why Trust Us?</h4>
                <p className="text-gray-600 text-sm">{service.trust}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fixed Footer */}
        <div className="flex-shrink-0 p-6 pt-4 flex flex-col sm:flex-row gap-4 border-t border-gray-100">
          <a 
            href="#contact" 
            onClick={onClose}
            className="flex-1 bg-accent hover:bg-red-600 text-white py-3 px-6 rounded-full font-bold text-center transition-colors"
          >
            Get a Quote
          </a>
          <button 
            onClick={onClose}
            className="flex-1 border-2 border-gray-200 hover:border-accent text-gray-700 py-3 px-6 rounded-full font-bold transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section id="services" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              Our Services
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight mb-6">
              We provide the best <span className="text-accent">ICT services</span> for you!
            </h2>
            <p className="text-gray-600 text-lg">
              Here at Global Summit Technologies, we build network infrastructure and offer ICT complementary services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {servicesData.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-2xl transition-all duration-300 group border-[0.6px] border-gray-200 hover:border-accent cursor-pointer"
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <ServiceIcon type={service.type} />
                </div>
                
                <h3 className="font-display font-bold text-xl text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="flex items-center text-accent text-sm font-bold mt-auto group-hover:underline decoration-2 underline-offset-4">
                  Learn more 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2 group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {selectedService && (
          <ServiceModal 
            service={selectedService} 
            isOpen={!!selectedService} 
            onClose={() => setSelectedService(null)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}
