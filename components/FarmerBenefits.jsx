"use client";
import { Badge } from "@/components/ui/badge";
import { Wheat, LineChart, Users, Globe2, Smartphone } from "lucide-react";
import { motion } from "framer-motion";

const benefitSteps = [
  {
    title: "Low-Carbon Practices",
    icon: LineChart,
    practices: [
      "Alternate Wetting and Drying (AWD)",
      "Direct seeding",
      "Avoiding crop residue burning",
    ],
    gradient: "from-[#228B22] via-[#81C784] to-[#1B5E20]",
  },
  {
    title: "Join Pilot Projects",
    icon: Users,
    content: "Support sustainable farming over multi-year cycles",
    gradient: "from-[#FFB300] via-[#FFEB3B] to-[#FFC107]",
    iconColor: "text-[#1B5E20]",
  },
  {
    title: "Community Impact",
    icon: Globe2,
    content:
      "Encourage others to participate, amplifying the collective impact",
    gradient: "from-[#228B22] via-[#81C784] to-[#1B5E20]",
  },
  {
    title: "Digital Integration",
    icon: Smartphone,
    content:
      "Use Digisaka and receive payments via GCash and other digital wallets",
    gradient: "from-[#FFB300] via-[#FFEB3B] to-[#FFC107]",
    iconColor: "text-[#1B5E20]",
  },
];

export default function FarmerBenefits() {
  return (
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center"
      >
        <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
          <Wheat className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
          <span className="text-sm font-bold tracking-wider uppercase text-forest-green letter-spacing-wide">
            Farmer Benefits
          </span>
        </Badge>
        <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
            How Can Farmers
          </span>
          <span className="block bg-gradient-to-r from-[#FFB300] to-[#FFC107] bg-clip-text text-transparent">
            Benefit?
          </span>
        </h2>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-[#424242]/80 font-medium">
          Join the carbon credit ecosystem and create sustainable value
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl"
      >
        {benefitSteps.map((step, index) => (
          <div
            key={index}
            className="p-6 transition-transform duration-300 transform bg-white shadow-xl sm:p-8 rounded-3xl"
          >
            <div className="flex flex-col h-full">
              <step.icon className="w-8 h-8 mb-6 sm:w-10 sm:h-10 text-forest-green" />
              <h3 className="mb-4 text-xl font-bold text-dark-green">
                {step.title}
              </h3>
              {step.practices ? (
                <ul className="space-y-2">
                  {step.practices.map((practice, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-[#228B22] mt-1 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-[#424242]/90">{practice}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-charcoal-gray/90">{step.content}</p>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
