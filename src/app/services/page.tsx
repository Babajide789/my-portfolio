"use client";

import { motion } from "framer-motion";
import { 
  Code, 
  Monitor,
  Layout, 
  Users 
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "I build modern, fast, and responsive web applications using cutting-edge technologies like React.js, Next.js, and Tailwind CSS. My focus is on clean code, smooth performance, and scalable architecture that grows with your business.",
    icon: Code,
  },
  {
    number: "02",
    title: "Frontend Engineering",
    description:
      "I specialize in translating designs into functional, pixel-perfect code. With expertise in React, TypeScript, and responsive design, I deliver interfaces that are not only visually stunning but also accessible and highly interactive.",
    icon: Monitor,
  },
  {
    number: "03",
    title: "Prototyping & Product Design",
    description:
      "From ideas to clickable prototypes, I help visualize products before they’re built. Using tools like Figma, I design and test user flows, making sure your product vision translates into an experience users love.",
    icon: Layout,
  },
  {
    number: "04",
    title: "Consulting & Collaboration",
    description:
      "Whether you’re a startup looking to establish an online presence or a team in need of design-dev collaboration, I provide tailored solutions, technical insight, and creative support to help you move faster.",
    icon: Users,
  },
];

export default function Services() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 text-gray-900 bg-[#1e1e22]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            My <span className="text-accent">Services</span>
          </motion.h2>

          {/* ACCENT UNDERLINE */}
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 mx-auto max-w-2xl text-center leading-relaxed text-white/70 text-lg"
          >
            Here are the main areas where I can help bring your ideas to life.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-2xl shadow-lg hover:shadow-2xl transition bg-gray-50"
            >
              <div className="flex items-center mb-6">
                <service.icon className="w-10 h-10 text-black-600 mr-4" />
                <span className="text-3xl font-bold text-white-300">
                  {service.number}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
