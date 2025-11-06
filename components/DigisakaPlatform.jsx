"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Interactive GIS",
    description:
      "Advanced geographic information system tools for precise field mapping and analysis",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    ),
  },
  {
    title: "Remote Sensing",
    description:
      "Real-time satellite imagery and data analysis for comprehensive crop monitoring",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    ),
  },
  {
    title: "Crop Monitoring",
    description:
      "Track crop health, growth stages, and environmental conditions in real-time",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
      />
    ),
  },
];

export default function DigisakaPlatform() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setError(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
            <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
              Our Platform
            </span>
          </Badge>
          <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
              Digisaka Platform
            </span>
          </h2>
          <p className="max-w-3xl -mt-1.5 mx-auto text-lg font-medium text-[#424242]/80 sm:text-xl">
            Web-Based Interactive GIS & Remote Sensing Software for
            Comprehensive Crop Monitoring
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 mb-16 md:grid-cols-3 lg:gap-12"
        >
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-md rounded-2xl">
              <div className="w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#228B22] to-[#1B5E20] flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-[#1B5E20]">
                {feature.title}
              </h3>
              <p className="text-sm text-[#424242]/90 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Platform Preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative w-full overflow-hidden border-3 rounded-xl border-light-green/30 shadow-lg bg-white/80 aspect-[16/9]"
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white/90">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 rounded-full border-t-forest-green border-r-forest-green/40 border-b-forest-green/20 border-l-forest-green/10 animate-spin"></div>
                <p className="text-sm font-semibold text-forest-green">
                  Loading Digisaka...
                </p>
              </div>
            </div>
          )}

          {/*
          {error ? (
            ...existing code...
          ) : (
            <iframe
              src="https://www.digisaka.com/"
              className="w-full h-full border-0"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          )}
          */}
          <a
            href="https://www.digisaka.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block w-full h-full relative"
          >
            <Image
              src="/images/digisaka_platform.png"
              alt="Digisaka Platform Preview"
              className="object-fill w-full h-full rounded-xl"
              width={2000}
              height={500}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-white text-forest-green font-bold text-lg sm:text-2xl px-6 py-3 rounded-xl border-2 border-forest-green/30">
                Click the image to explore the Digisaka platform
              </span>
            </div>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
