"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const marketPartners = [
  {
    name: "Jollibee Foods Corporation / Foundation",
    logo: "/images/jolibee.png",
    description:
      "Leading food service company committed to sustainable sourcing",
    gradient: "from-[#228B22] via-[#81C784] to-[#1B5E20]",
  },
  {
    name: "Kadiwa ng Pangulo",
    logo: "/images/kadiwa.jpg",
    description: "Government initiative supporting local farmers and consumers",
    gradient: "from-[#FFB300] via-[#FFEB3B] to-[#FFC107]",
  },
  {
    name: "Major Supermarket Chains",
    logo: "/images/supermarket-logo.svg",
    description:
      "Retail partners bringing sustainable rice to consumers nationwide",
    gradient: "from-[#228B22] via-[#81C784] to-[#1B5E20]",
  },
  {
    name: "Export Markets",
    logo: "/images/export-logo.svg",
    description:
      "International buyers seeking sustainable, traceable rice products",
    gradient: "from-[#FFB300] via-[#FFEB3B] to-[#FFC107]",
  },
];

export default function LowCarbonMarket() {
  return (
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div className="flex justify-center md:mb-4">
        <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
          <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
          <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
            Market Access
          </span>
        </Badge>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto mb-20 text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between lg:gap-12 xl:px-16"
      >
        <div className="lg:max-w-2xl">
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#228B22] bg-clip-text text-transparent">
              Where Does Low-Carbon
            </span>
            <span className="block bg-gradient-to-r from-[#FFB300] to-[#FFC107] bg-clip-text text-transparent">
              Rice Go?
            </span>
          </h2>
          <p className="mt-8 text-lg font-medium leading-relaxed text-[#424242]/80 sm:text-xl">
            Our sustainable rice doesn&apos;t just help the planet—it goes to
            real markets and buyers. Current and target partners include:
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
          <div className="relative w-full h-[300px] lg:w-[450px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/images/low-carbon-rice.png"
              alt="Low Carbon Rice"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 450px"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Partners Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 mx-auto lg:grid-cols-2 max-w-7xl"
      >
        {marketPartners.map((partner, index) => (
          <div
            key={index}
            className="overflow-hidden bg-white shadow-lg rounded-2xl"
          >
            <div className="p-8">
              <div className="flex items-center gap-6">
                <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-xl">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 96px) 100vw, 96px"
                  />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-[#1B5E20]">
                    {partner.name}
                  </h3>
                  <p className="text-[#424242]/90">{partner.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl p-8 mx-auto mt-12 text-center bg-white shadow-lg rounded-2xl"
      >
        <p className="text-lg font-semibold text-[#1B5E20]">
          These buyers reward climate-smart practices and promote responsible
          sourcing.
        </p>
      </motion.div>
    </div>
  );
}
