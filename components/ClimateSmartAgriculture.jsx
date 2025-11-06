"use client";
import { Badge } from "@/components/ui/badge";
import { Sprout } from "lucide-react";
import { motion } from "framer-motion";

const pillarsData = [
  {
    title: "Productivity",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
      />
    ),
    content: "Improve or stabilize crop yields and increase farmers' incomes.",
  },
  {
    title: "Adaptation",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
      />
    ),
    content:
      "Help farms become more resilient to droughts, floods, and extreme weather.",
  },
  {
    title: "Mitigation",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    ),
    content:
      "Reduce greenhouse gas emissions and enhance carbon storage through sustainable practices.",
  },
];

export default function ClimateSmartAgriculture() {
  return (
    <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
      {/* Main Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center sm:mb-12"
      >
        <div className="mb-12 ">
          <Badge className="px-4 py-2 mb-6 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <Sprout className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
            <span className="text-sm font-bold tracking-wider uppercase text-forest-green letter-spacing-wide">
              Understanding CSA
            </span>
          </Badge>
          <div>
            <h1 className="text-2xl font-black leading-tight tracking-tight sm:text-3xl md:text-4xl lg:text-6xl">
              <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent mb-1">
                What is Climate-Smart
              </span>
              <span className="text-transparent bg-gradient-to-r from-charcoal-gray to-dark-green bg-clip-text drop-shadow-md">
                Agriculture?
              </span>
            </h1>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative">
            <div className="relative p-4 border-2 shadow-md bg-gradient-to-br from-dark-green via-forest-green to-dark-green rounded-xl sm:p-6 lg:p-8 border-white/40">
              <div className="max-w-5xl mx-auto">
                <p className="text-base font-semibold leading-relaxed sm:text-lg text-white/95">
                  Climate-Smart Agriculture (CSA) is a{" "}
                  <span className="font-black text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text">
                    transformative approach
                  </span>{" "}
                  that tackles both food security and climate change.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Three Pillars Section */}
      <div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black leading-[0.9] mb-4 tracking-tight">
            <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
              The Three Pillars
            </span>
          </h2>
          <p className="text-base sm:text-lg font-semibold text-[#424242]/85 max-w-4xl mx-auto">
            Built on a foundation of sustainability and innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-4 mx-auto md:grid-cols-2 lg:grid-cols-3 sm:gap-6 max-w-7xl"
        >
          {pillarsData.map((pillar, index) => (
            <div key={index}>
              <div className="h-full p-6 overflow-hidden bg-white shadow-xl sm:p-8 rounded-2xl">
                <div className="flex flex-col h-full">
                  <div className="flex items-start mb-4">
                    <svg
                      className={`w-8 h-8 sm:w-10 sm:h-10 text-forest-green flex-shrink-0`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {pillar.icon}
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-black sm:text-2xl text-dark-green">
                    {pillar.title}
                  </h3>
                  <p className="text-base font-semibold leading-relaxed text-charcoal-gray/90">
                    {pillar.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
