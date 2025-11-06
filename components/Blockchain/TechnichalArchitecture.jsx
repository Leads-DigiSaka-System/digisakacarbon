"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  CloudCog,
  Database,
  FileJson,
  Fingerprint,
  Key,
  QrCode,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

const TechnichalArchitecture = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-20 sm:mb-24 lg:mb-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="px-4 py-2 mb-8 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
              <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
              <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase">
                Architecture
              </span>
            </Badge>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#228B22] bg-clip-text text-transparent mb-2">
                Technical Architecture
              </span>
            </h1>
          </div>

          {/* System Architecture Diagram */}
          <div className="grid gap-8 mb-12 lg:grid-cols-2">
            {/* Diagram Placeholder */}
            <div className="relative h-[400px]  rounded-xl p-4">
              <Image
                src={"/images/diagram2.png"}
                width={400}
                height={400}
                className="object-cover w-full"
                alt="diagram 2 imge"
              />
            </div>

            {/* Smart Contract Features */}
            <div className="p-8 bg-white shadow-md rounded-xl">
              <h3 className="text-2xl font-bold text-[#1B5E20] mb-6">
                Smart Contract Features
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    icon: Key,
                    title: "Role-Based Access",
                    description:
                      "Secure actor registration and permissions management",
                  },
                  {
                    icon: Database,
                    title: "Batch Tracking",
                    description:
                      "Complete lifecycle tracking from creation to delivery",
                  },
                  {
                    icon: Fingerprint,
                    title: "Ownership Verification",
                    description:
                      "Secure transfer and ownership validation system",
                  },
                  {
                    icon: CloudCog,
                    title: "Automated Updates",
                    description:
                      "Real-time status updates across the supply chain",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start p-4 rounded-lg hover:bg-[#1B5E20]/5 transition-colors duration-300"
                  >
                    <div className="p-2 rounded-lg ">
                      <feature.icon className="w-5 h-5 text-[#1B5E20]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-[#1B5E20] mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-[#424242]/90">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Integration Points */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Smartphone,
                title: "Mobile App Integration",
                description: "Digisaka mobile app for seamless data collection",
              },
              {
                icon: Database,
                title: "Centralized Database",
                description:
                  "Secure off-chain storage for efficient data management",
              },
              {
                icon: FileJson,
                title: "IPFS Storage",
                description: "Decentralized storage for metadata and documents",
              },
              {
                icon: QrCode,
                title: "QR Code System",
                description: "Easy access to product information for consumers",
              },
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl "
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg ">
                    <point.icon className="w-6 h-6 text-[#1B5E20]" />
                  </div>
                  <h3 className="ml-4 text-lg font-bold text-[#1B5E20]">
                    {point.title}
                  </h3>
                </div>
                <p className="text-sm font-medium text-[#424242]/90">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default TechnichalArchitecture;
