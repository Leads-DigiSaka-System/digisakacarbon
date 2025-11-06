"use client";
import { Badge } from "@/components/ui/badge";
import { Sprout, ScrollText, CircleDollarSign, Zap } from "lucide-react";
import { motion } from "framer-motion";

const creditFeatures = [
  {
    title: "What are they?",
    icon: ScrollText,
    content:
      "Certificates earned for reducing greenhouse gas (GHG) emissions through verified sustainable practices.",
  },
  {
    title: "Earning Potential",
    icon: CircleDollarSign,
    amount: "₱1,000 - ₱1,600",
    content: "per hectare for every ton of GHG emissions avoided",
  },
];

export default function CarbonCredits() {
  return (
    <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <Sprout className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
            <span className="text-sm font-bold tracking-wider uppercase text-forest-green letter-spacing-wide">
              Carbon Finance
            </span>
          </Badge>
          <h1 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
              Understanding
            </span>
            <span className="block -mt-1.5 bg-gradient-to-r from-[#FFB300] to-[#FFC107] bg-clip-text text-transparent">
              Carbon Credits
            </span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Main Explanation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-[#1B5E20] to-forest-green rounded-3xl p-8 sm:p-10 shadow-md transform transition-transform duration-300"
          >
            <div className="flex flex-col justify-center h-full">
              <p className="mb-6 text-xl font-semibold leading-relaxed sm:text-2xl text-white/90">
                Carbon credits are certificates earned by individuals or
                organizations for reducing greenhouse gas (GHG) emissions. In
                agriculture, these credits are gained by adopting verified
                sustainable practices that help the environment. Low Carbon practices can avoid as much as 3-5 tons /ha of carbon emissions.
              </p>
              <div className="mt-auto">
                <div className="inline-flex items-center p-4 bg-white/10 rounded-2xl">
                  <Zap className="w-6 h-6 mr-3 text-yellow-300 sm:w-8 sm:h-8" />
                  <p className="font-medium text-white/85">
                    Creating a new income stream alongside harvest
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {creditFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-lg rounded-2xl sm:p-8"
              >
                <div className="flex items-center mb-4">
                  <feature.icon className="w-8 h-8 mr-4 sm:w-10 sm:h-10 text-forest-green" />
                  <h3 className="text-xl font-bold sm:text-2xl text-dark-green">
                    {feature.title}
                  </h3>
                </div>
                <div className="pl-12 sm:pl-14">
                  {feature.amount && (
                    <p className="mb-2 text-2xl font-black sm:text-3xl text-forest-green">
                      {feature.amount}
                    </p>
                  )}
                  <p className="font-medium text-charcoal-gray/90">
                    {feature.content}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
