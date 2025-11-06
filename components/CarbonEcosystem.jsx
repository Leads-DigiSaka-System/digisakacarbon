"use client";
import { Badge } from "@/components/ui/badge";
import { Network } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CarbonEcosystem() {
  return (
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center"
      >
        <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
          <Network className="w-4 h-4 mr-2 sm:w-5 sm:h-5" />
          <span className="text-sm font-bold tracking-wider uppercase text-forest-green letter-spacing-wide">
            Core Components
          </span>
        </Badge>
        <h2 className="mb-8 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
            Digisaka Carbon
          </span>
          <span className="block pb-1.5 bg-gradient-to-r from-[#FFB300] to-[#FFC107] bg-clip-text text-transparent">
            Ecosystem
          </span>
        </h2>
      </motion.div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Description Column */}
          <div className="flex-1 space-y-6">
            <p className="text-lg font-semibold leading-relaxed sm:text-xl text-charcoal-gray/90">
              The Digisaka Carbon Ecosystem integrates cutting-edge technology
              with sustainable agriculture practices to create a comprehensive
              carbon credit generation and monitoring system.
            </p>
            <p className="text-base leading-relaxed sm:text-lg text-charcoal-gray/80">
              Our ecosystem connects farmers, technology, and carbon markets
              through three key components:
            </p>
            <ul className="space-y-4 text-base sm:text-lg text-charcoal-gray/80">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-forest-green">1.</span>
                <span>
                  Methane Reduction Interventions through smart farming
                  practices
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-forest-green">2.</span>
                <span>
                  Carbon Credit Monetization via blockchain and marketplace
                  integration
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-forest-green">3.</span>
                <span>
                  MRV Services with advanced monitoring and verification systems
                </span>
              </li>
            </ul>
          </div>

          {/* Diagram Column */}
          <div className="">
            <div className="relative overflow-hidden max-w-[500px] shadow-md aspect-square rounded-3xl">
              <Image
                src="/images/carbonecosystemdiagram.jpg"
                alt="Digisaka Carbon Ecosystem Diagram"
                className="object-cover w-full h-full"
                width={500}
                height={100}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
