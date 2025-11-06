"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const SupplyChainActors = () => {
  const actors = [
    {
      name: "Farmers",
      icon: "🌱",
      points: [
        "Pre-season planning data",
        "In-season monitoring",
        "Post-harvest entries",
        "Carbon-smart practice verification",
      ],
    },
    {
      name: "Millers",
      icon: "🌾",
      points: [
        "Milling records and output tracking",
        "Moisture content monitoring",
        "Batch processing verification",
      ],
    },
    {
      name: "Traders",
      icon: "🚚",
      points: [
        "Purchase volume and pricing",
        "Source verification",
        "Distribution tracking",
      ],
    },
    {
      name: "Retailers/Buyers",
      icon: "🏪",
      points: ["Final sale records", "Consumer interface through QR codes"],
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="px-4 mx-auto mb-20 max-w-7xl sm:px-6 lg:px-8 sm:mb-24 lg:mb-32"
      >
        {/* Header Section */}
        <div className="mb-16 text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="px-4 py-2 mb-8 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
              <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
              <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase">
                Ecosystem
              </span>
            </Badge>
          </motion.div>

          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#228B22] bg-clip-text text-transparent mb-2">
              Supply Chain Actors
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#424242]/80 max-w-3xl mx-auto leading-relaxed"
          >
            Connecting every stakeholder from farm to table through our
            comprehensive blockchain platform
          </motion.p>
        </div>

        {/* Main Content: Two Column Layout */}
        <div className="grid grid-cols-1 gap-12 mb-20 lg:grid-cols-2 lg:gap-16 lg:mb-24">
          {/* Description Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 space-y-8 lg:order-1"
          >
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#1B5E20] mb-6 leading-tight">
                Complete Supply Chain Visibility
              </h3>
              <p className="text-lg text-[#424242]/90 leading-relaxed mb-8">
                Digisaka Trace provides end-to-end visibility of the rice supply
                chain, connecting every stakeholder from farm to table through
                our blockchain platform.
              </p>
            </div>

            <div className="space-y-6">
              {[
                "Real-time tracking of rice movement from farmers to retailers",
                "Verified data collection at each transition point",
                "Quality assurance and certification tracking",
                "Carbon footprint monitoring throughout the process",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start group"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-[#228B22] rounded-full flex items-center justify-center mr-4 mt-0.5 transition-transform duration-200">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#424242]/90 font-medium leading-relaxed">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Diagram Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 transform rounded-2xl rotate-1"></div>
              <div className="relative bg-white rounded-2xl h-[600px] p-8 shadow-md border border-[#228B22]/10">
                <Image
                  src="/images/diagram1.png"
                  width={600}
                  height={600}
                  alt="Supply chain diagram showing the flow from farmers to retailers"
                  className="w-full h-full rounded-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Actors Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {actors.map((actor, index) => (
            <motion.div
              key={actor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 transition-all duration-300 bg-white border border-gray-100 shadow-md rounded-2xl"
            >
              <div className="relative">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 mr-4 rounded-xl">
                    <span className="text-2xl">{actor.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#1B5E20] leading-tight">
                    {actor.name}
                  </h3>
                </div>

                {/* Points */}
                <ul className="space-y-3">
                  {actor.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-2 h-2 bg-[#228B22] rounded-full mt-2 mr-3"></div>
                      <span className="text-sm font-medium text-[#424242]/90 leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SupplyChainActors;
