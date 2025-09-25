"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Always working non stop",
    href: "/services/web-development",
  },
  {
    num: "02",
    title: "UI/UX",
    description: "Always working non stop",
    href: "/services/ui-ux",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Always working non stop",
    href: "/services/logo-design",
  },
  {
    num: "04",
    title: "SEO",
    description: "Always working non stop",
    href: "/services/seo",
  },
];

export default function Services() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-8 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.6, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group p-6 rounded-xl shadow-md bg-white hover:shadow-lg transition-shadow duration-500"
            >
              {/* TOP */}
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-gray-200 group-hover:text-accent transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-accent/10 group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-accent text-2xl group-hover:text-white transition-colors duration-500" />
                </Link>
              </div>

              {/* HEADING */}
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>

              {/* DESCRIPTION */}
              <p className="text-gray-600">{service.description}</p>

              {/* BORDER */}
              <div className="border-b border-gray-200 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
