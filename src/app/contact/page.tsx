"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+234) 703 016 8883",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "yahayababajide@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lagos, Nigeria",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-10"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-10">
          {/* FORM */}
          <div className="xl:w-1/2 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-8 bg-[#27272c] rounded-xl">
              <h3 className="text-3xl font-semibold text-accent">
                Let&apos;s work together
              </h3>
              <p className="text-white/60">I am available to work</p>

              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 rounded-md bg-[#1e1e22] text-white outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 rounded-md bg-[#1e1e22] text-white outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 rounded-md bg-[#1e1e22] text-white outline-none focus:ring-2 focus:ring-accent"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 rounded-md bg-[#1e1e22] text-white outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              {/* SELECT */}
              <select className="w-full p-3 rounded-md bg-[#1e1e22] text-white outline-none focus:ring-2 focus:ring-accent">
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="logo">Logo Design</option>
              </select>

              {/* TEXTAREA */}
              <textarea
                className="w-full h-[200px] p-3 rounded-md bg-[#1e1e22] text-white outline-none resize-none focus:ring-2 focus:ring-accent"
                placeholder="Type your message here"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-40 py-3 rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-14 h-14 xl:w-16 xl:h-16 bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl font-medium">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
