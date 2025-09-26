"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build modern, fast, and responsive websites tailored to user needs.",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX",
    description:
      "I design intuitive user interfaces and experiences that feel natural.",
    href: "/services/ui-ux",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "I create clean and memorable logos that represent your brand identity.",
    href: "/services/logo-design",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "I optimize websites for search engines to improve visibility and ranking.",
    href: "/services/seo",
  },
];

export default function Services() {
  return (
    <section className="relative min-h-[88vh] flex flex-col justify-center py-20 bg-[#1e1e22]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold text-secondary">
            My <span className="text-secondary">Services</span>
          </h1>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 max-w-2xl mx-auto leading-relaxed text-white/70">
            Here are the main areas where I can help bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-between gap-6 p-8 rounded-2xl shadow-md bg-card hover:shadow-xl transition-all duration-500 group border"
            >
              {/* TOP */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold">{service.num}</div>
                <Link
                  href={service.href}
                  className="w-14 h-14 rounded-full bg-accent/10 flex justify-center items-center transition-all duration-500 group-hover:bg-accent hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-xl" />
                </Link>
              </div>

              {/* HEADING */}
              <h2 className="text-xl md:text-2xl font-bold">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="leading-relaxed group-hover:text-foreground transition-colors duration-500">
                {service.description}
              </p>

              {/* BORDER LINE */}
              <div className="border-t mt-4"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
