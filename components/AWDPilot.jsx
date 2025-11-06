"use client";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const scaleTargets = [
  {
    metric: "5,000",
    unit: "hectares",
    timeframe: "2025–2026",
    description: "Target area for AWD implementation",
  },
  {
    metric: "5",
    unit: "provinces",
    timeframe: "Initial rollout",
    description: "Laguna, Quezon, Mindoro, Isabela, Nueva Ecija",
  },
  {
    metric: "100+",
    unit: "developers",
    timeframe: "Growing network",
    description: "Community of Carbon Developers",
  },
  {
    metric: "2",
    unit: "standards",
    timeframe: "Certification targets",
    description: "Verra and Gold Standard compliance",
  },
];

export default function AWDPilot() {
  return (
    <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-20 text-center">
        <Badge className="px-4 py-2 mb-4 text-sm font-bold border border-[#228B22]/20 bg-[#228B22]/5 text-[#228B22] sm:px-6 sm:py-3 sm:text-base">
          <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
          <span className="text-sm font-bold tracking-wider uppercase letter-spacing-wide">
            Scaling Impact
          </span>
        </Badge>
        <h2 className="mb-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
          <span className="block text-[#1B5E20]">From Pilot to</span>
          <span className="block text-[#FFB300]">Nationwide Scale</span>
        </h2>
        <p className="mt-8 text-lg font-medium leading-relaxed text-gray-600 sm:text-xl">
          Digisaka&apos;s AWD Pilot in Pila, Laguna demonstrates how methane
          reduction and MRV services can scale across the Philippines.
        </p>
      </div>

      {/* Scale Targets Grid */}
      <div className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 max-w-7xl">
        {scaleTargets.map((target, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white border border-gray-100 hover:border-[#228B22]/20 rounded-2xl transition-all duration-300 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="text-center">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-black text-[#228B22] group-hover:scale-110 transition-transform duration-300">
                    {target.metric}
                  </span>
                  <span className="text-xl font-bold text-gray-900">
                    {target.unit}
                  </span>
                </div>
                <p className="mt-2 text-sm font-medium text-gray-500">
                  {target.timeframe}
                </p>
                <p className="mt-4 text-base font-medium text-gray-600">
                  {target.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pilot Location */}
      <div className="max-w-3xl mx-auto mt-16">
        <div className="group overflow-hidden bg-white border border-gray-100 hover:border-[#228B22]/20 rounded-2xl transition-all duration-300 hover:shadow-lg">
          <div className="flex flex-col items-center gap-6 p-6 md:flex-row">
            <div className="relative flex-shrink-0 w-full h-48 overflow-hidden rounded-xl md:w-64 bg-gray-50">
              <Image
                src="/images/laguna.jpg"
                alt="Pila, Laguna Rice Fields"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Pilot Success in Pila, Laguna
              </h3>
              <p className="text-gray-600">
                Our successful pilot in Pila demonstrates the effectiveness of
                our MRV approach and sets the foundation for nationwide
                expansion. Through community engagement and technological
                innovation, we&apos;re ready to scale our impact across the
                Philippines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
