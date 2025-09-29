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
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.3, duration: 0.6, ease: "easeInOut" },
      }}
      className="py-16 px-6 md:px-12 bg-[#1e1e22]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-12">
          {/* FORM */}
          <div className="xl:w-1/2 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-8 bg-neutral-900 rounded-2xl shadow-lg border border-neutral-800">
              <h3 className="text-3xl font-bold text-white">
                Let&apos;s <span className="text-accent">work together</span>
              </h3>
              <p className="text-neutral-400">
                I’m available for freelance opportunities and collaborations.
              </p>

              {/* INPUTS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 outline-none border border-neutral-700 focus:border-accent transition-colors"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 outline-none border border-neutral-700 focus:border-accent transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 outline-none border border-neutral-700 focus:border-accent transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 outline-none border border-neutral-700 focus:border-accent transition-colors"
                />
              </div>

              {/* SELECT */}
              <select className="w-full p-3 rounded-lg bg-neutral-800 text-white outline-none border border-neutral-700 focus:border-accent transition-colors">
                <option value="">Select a service</option>
                <option value="web">Web Development</option>
                <option value="uiux">UI/UX Design</option>
                <option value="logo">Logo Design</option>
              </select>

              {/* TEXTAREA */}
              <textarea
                className="w-full h-[180px] p-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 outline-none border border-neutral-700 resize-none focus:border-accent transition-colors"
                placeholder="Type your message here"
              />

              {/* BUTTON */}
              <button
                type="submit"
                className="w-44 py-3 rounded-lg bg-accent text-black font-semibold shadow-md hover:bg-accent/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none">
            <ul className="flex flex-col gap-8 w-full">
              {info.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-6 p-3 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-accent transition-colors"
                >
                  <div className="w-14 h-14 xl:w-16 xl:h-16 bg-neutral-800 text-accent rounded-lg flex items-center justify-center">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  
                  <div>
                    <p className="text-neutral-400">{item.title}</p>
                    <h3 className="text-lg md:text-xl font-medium text-white">
                      {item.description}
                    </h3>
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
