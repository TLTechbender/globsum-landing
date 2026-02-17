"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/3"
          >
            <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
              About Us
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
              Building the Future of{" "}
              <span className="text-accent">IT Services</span>
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-accent mt-6"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-2/3 flex flex-col gap-8"
          >
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Our History
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Global Summit Technologies is a limited liability company
                registered in Nigeria to provide consultancy services in the
                area of Information and Communication Technology as her primary
                outlook. Registered in 2003 (RC: 495058) to provide unalloyed
                services in Information Technology, Global Summit Technologies
                is an offshoot of LivingSpring Consult Limited (RC: 249800) an
                I.T. Consulting outfit that has been in operation in Nigeria
                since 1994.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Goals & Vision
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                From inception, our goal in Global Summit Technologies has
                always been timely delivery of qualitative turnkey solutions and
                services that meet or exceed our customers' expectations. We
                strive hard to do better by our own internal standards of
                service.
              </p>
              <p className="text-gray-600 leading-relaxed">
                It is in line with the above commitment that we have established
                solid alliance and technical relationship with several reputable
                manufacturers.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative w-full h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl group"
        >
          <Image
            src="/About.png"
            alt="Global Summit Technologies Team"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>

          <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white max-w-2xl">
            <p className="text-lg md:text-xl font-medium border-l-4 border-accent pl-4">
              "Delivering reliable, scalable, and future-ready IT solutions."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
