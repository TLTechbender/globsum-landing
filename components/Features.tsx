"use client";
import { motion } from "framer-motion";
import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: "Support",
      description: "We are positioned in the industry as an engineering and systems integration support resource to the Government and private sectors.",
      icon: "/Engineer.webp",
      highlight: false
    },
    {
      title: "Our Goal",
      description: "Our goal in Global Summit Technologies has always been timely delivery of qualitative turnkey solutions and services that meet/exceed our customers' expectations.",
      icon: "/Engineer.webp",
      highlight: true
    },
    {
      title: "Global Strategy",
      description: "We strive hard to do better by our own internal standards of service. It is in line with the above commitment that we have established solid alliance and technical relationship with several reputable manufacturing",
      icon: "/Engineer.webp",
      highlight: false
    }
  ];

  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center text-center
        ${feature.highlight 
          ? 'bg-accent text-white' 
          : 'bg-white border-2 border-accent text-gray-900'
        }`}
    >
      <div className={`w-16 h-16 rounded-full overflow-hidden relative mb-6 ${feature.highlight ? 'border-2 border-white/30' : ''}`}>
        <Image 
          src={feature.icon} 
          alt={feature.title} 
          fill 
          className="object-cover"
          sizes="64px"
          quality={75}
        />
      </div>
      <h3 className={`font-display font-bold text-xl mb-4 uppercase tracking-wide ${feature.highlight ? 'text-white' : 'text-gray-900'}`}>
        {feature.title}
      </h3>
      <p className={`text-sm leading-relaxed ${feature.highlight ? 'text-white/90' : 'text-gray-600'}`}>
        {feature.description}
      </p>
    </motion.div>
  );
}
