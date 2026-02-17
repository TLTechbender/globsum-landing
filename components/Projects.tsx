"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      category: "Solar Powered Systems",
      title: "UI/ Rice University",
      description:
        "Supply and Installation of 30KVA Solar Powered Systems for the University of Ibadan/ Rice University Texas.",
      image: "/rice.webp",
      location: "Ibadan, Nigeria / Texas, USA",
    },
    {
      category: "CCTV & IP Telephony",
      title: "The Fragrance Resorts",
      description:
        "Supply and Installation of CCTV and IP Telecoms for The Fragrance Resorts, Ibadan.",
      image: "/ilaji.webp",
      location: "Ibadan, Nigeria",
    },
    {
      category: "Communication Towers",
      title: "Ilaji Hotels & Resorts",
      description:
        "Supply and Installation of Communication Towers and Accesories for Ilaji Hotels and Resorts, Ibadan.",
      image: "/Engineer.webp",
      location: "Ibadan, Nigeria",
    },
    {
      category: "Security Systems",
      title: "NBC Guest House",
      description:
        "Supply and Installation of intercom, CCTV, Fire alarm and Wireless LAN for the Nigerian Baptist Convention, Oyo",
      image: "/nbc.webp",
      location: "Oyo, Nigeria",
    },
    {
      category: "Wireless LAN",
      title: "Ace Mall",
      description:
        "Supply and Installation of mall wide Wireless LAN for Ace Mall, Bodija, Ibadan",
      image: "/ace.webp",
      location: "Ibadan, Nigeria",
    },
    {
      category: "Software Development",
      title: "Obafemi Awolowo University",
      description:
        "Design and Development of University Document Management Software",
      image: "/oau.webp",
      location: "Ile-Ife, Nigeria",
    },
  ];

  return (
    <section id="projects" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="text-accent font-bold tracking-wider uppercase text-sm mb-3 block">
            Recent Projects
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-900 leading-tight">
            Our <span className="text-accent">Completed Projects</span>
          </h2>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              {/* Image Side */}
              <div className="w-full md:w-1/2 relative group">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute -inset-4 bg-accent/5 rounded-[2.5rem] transform ${index % 2 === 1 ? "rotate-3" : "-rotate-3"} transition-transform duration-500 group-hover:rotate-0`}
                />
                <div className="relative h-[300px] md:h-[400px] w-full rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>

                  {/* Category Badge on Image */}
                  <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-gray-900 shadow-lg">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2">
                <h3 className="font-display font-bold text-3xl md:text-4xl text-gray-900 mb-6">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-500">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <span className="font-medium">{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
