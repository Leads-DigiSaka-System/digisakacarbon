"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  BarChart3,
  Target,
  Gauge,
  MessageSquare,
  Shield,
  Droplets,
  TrendingUp,
  MonitorSmartphone,
  Satellite,
  MonitorDot,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection } from "../app/page";
import { motion } from "framer-motion";
import Image from "next/image";

const initialFeatures = [
  {
    id: 1,
    title: "Dual Monitoring Approach",
    subtitle: "Ground-based precision meets remote sensing scale.",
    icon: BarChart3,
    cardTitle: "Ground-Based Monitoring",
    gradient: "from-forest-green via-light-green to-dark-green",

    checkmarkGradient: "from-forest-green via-light-green to-dark-green",
    items: [
      "IoT-enabled sensors for real-time data collection on methane (CH₄) and carbon dioxide (CO₂) emissions",
      "Field-level tracking of essential agricultural practices such as Alternate Wetting and Drying (AWD), tillage, and residue management",
      "Gold-Standard Calibration: Our remote sensing methodologies are validated using gas chromatography, flux towers, and in-field emission sampling",
      "Collaboration with national and international research partners to ensure the highest accuracy",
    ],
  },
  {
    id: 2,
    title: "Sensors",
    subtitle: "Description.",
    icon: Target,
    cardTitle: "Remote Sensing Integration",
    gradient: "from-golden-yellow via-yellow-400 to-yellow-500",

    checkmarkGradient: "from-golden-yellow via-yellow-400 to-yellow-500",
    items: [
      "Satellite imagery and AI-powered data analysis to provide spatial and temporal insights on farming practices and emissions",
      "High-resolution mapping ensures every hectare is accounted for",
      "We rely on satellite imagery, UAV data and machine learning models to analyze agricultural variables",
      "Our AI-driven system minimizes uncertainty from low-quality data inputs, avoiding the 'garbage in, garbage out' problem",
    ],
  },
];

const Features = () => {
  const [features] = useState(initialFeatures);
  return (
    <AnimatedSection
      id="services"
      className="relative w-full py-16 overflow-hidden sm:py-20 md:py-24 lg:py-32 "
    >
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center mb-12 space-y-6 text-center sm:space-y-8 sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <MonitorDot className="w-5 h-5 mr-2 text-forest-green" />
            <span className="text-sm font-bold tracking-wider uppercase text-forest-green letter-spacing-wide">
              Dual Monitoring Approach
            </span>
          </Badge>
          <div className="">
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block mb-2 pb-1 text-transparent bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#2E7D32] bg-clip-text drop-shadow-md">
                Advanced Agricultural
              </span>
              <span className="text-transparent bg-gradient-to-r from-charcoal-gray to-dark-green bg-clip-text drop-shadow-md">
                Monitoring Solutions
              </span>
            </h2>
          </div>
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-4xl mx-auto">
              Comprehensive emission tracking and agricultural practice
              monitoring through ground-based precision sensors and remote
              sensing technology.
            </p>
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-12 mx-auto sm:gap-16 lg:gap-20 md:grid-cols-2 max-w-7xl">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col h-full space-y-6 sm:space-y-8"
            >
              {/* Card */}
              <div className="flex-1">
                <Card className="relative flex flex-col h-full overflow-hidden transition-all duration-500 bg-white border-0 shadow-xl group rounded-3xl">
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 opacity-0 bg-white`}
                  ></div>
                  <CardHeader className="relative z-10 pt-6 pb-4 text-center sm:pb-6 sm:pt-8 lg:pt-10">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 sm:w-18 lg:w-20 sm:h-18 lg:h-20 sm:mb-6 lg:mb-8">
                      {feature.id === 1 ? (
                        <MonitorSmartphone className="h-8 w- text-forest-green sm:w-9 lg:w-10 sm:h-9 lg:h-10" />
                      ) : (
                        <Satellite className="w-8 h-8 text-forest-green sm:w-9 lg:w-10 sm:h-9 lg:h-10" />
                      )}
                    </div>
                    <CardTitle className="mb-3 text-xl font-black sm:text-2xl lg:text-3xl text-dark-green sm:mb-4">
                      {feature.cardTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex-1 pb-6 sm:pb-8 lg:pb-10">
                    <ul className="space-y-3 sm:space-y-4">
                      {feature.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start group/item"
                        >
                          <div className="flex-shrink-0 mr-3 sm:mr-4">
                            {feature.id === 1 ? (
                              <>
                                {itemIndex === 0 && (
                                  <MonitorSmartphone className="w-5 h-5 text-forest-green" />
                                )}
                                {itemIndex === 1 && (
                                  <Target className="w-5 h-5 text-forest-green" />
                                )}
                                {itemIndex === 2 && (
                                  <Gauge className="w-5 h-5 text-forest-green" />
                                )}
                                {itemIndex === 3 && (
                                  <Shield className="w-5 h-5 text-forest-green" />
                                )}
                              </>
                            ) : (
                              <>
                                {itemIndex === 0 && (
                                  <Satellite className="w-5 h-5 text-forest-green" />
                                )}
                                {itemIndex === 1 && (
                                  <Target className="w-5 h-5 text-forest-green" />
                                )}
                                {itemIndex === 2 && (
                                  <BarChart3 className="w-5 h-5 text-forest-green" />
                                )}
                                {itemIndex === 3 && (
                                  <Shield className="w-5 h-5 text-forest-green" />
                                )}
                              </>
                            )}
                          </div>
                          <span className="text-sm font-semibold leading-relaxed transition-colors text-charcoal-gray sm:text-base">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sensor Technologies Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-20 sm:mt-24 lg:mt-32"
        >
          {/* Header */}
          <div className="flex flex-col items-center justify-center mb-12 space-y-6 text-center sm:space-y-8 sm:mb-16">
            <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block mb-2 pb-1 text-transparent bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#2E7D32] bg-clip-text drop-shadow-md">
                Our Sensor
              </span>
              <span className="text-transparent bg-gradient-to-r from-charcoal-gray to-dark-green bg-clip-text drop-shadow-md">
                Technologies
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-lg font-semibold sm:text-xl text-charcoal-gray/80">
              Cutting-edge hardware solutions designed for precision monitoring
              in challenging agricultural environments.
            </p>
          </div>

          {/* MethanEye™ PY100 - Image Left, Description Right */}
          <div className="grid items-center gap-12 mb-20 lg:grid-cols-2">
            <div className="aspect-[4/3] relative overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/methaneye.png"
                alt="MethanEye™ PY100 methane monitoring system"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-dark-green">
                  MethanEye™ PY100
                </h3>
                <p className="text-base font-medium text-charcoal-gray/80">
                  Autonomous methane monitoring system with automatic chamber
                  operation and real-time data transmission.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Gauge className="flex-shrink-0 w-5 h-5 mt-1 text-forest-green" />
                  <p className="text-base font-medium text-charcoal-gray/90">
                    Smart methane monitoring with high-accuracy sensors
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MessageSquare className="flex-shrink-0 w-5 h-5 mt-1 text-forest-green" />
                  <p className="text-base font-medium text-charcoal-gray/90">
                    4G data transmission to mobile devices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="flex-shrink-0 w-5 h-5 mt-1 text-forest-green" />
                  <p className="text-base font-medium text-charcoal-gray/90">
                    Supports climate change mitigation and sustainable
                    agriculture
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AWD Sensor - Description Left, Image Right */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-dark-green">
                  AWD+ of Rynan Technologies
                </h3>
                <p className="text-base font-medium text-charcoal-gray/80">
                  Precision water level monitoring for Alternate Wetting and
                  Drying practices, optimizing water usage while reducing
                  methane emissions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Droplets className="flex-shrink-0 w-5 h-5 mt-1 text-forest-green" />
                  <p className="text-base font-medium text-charcoal-gray/90">
                    Submersible water level detection (±1mm accuracy)
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Gauge className="flex-shrink-0 w-5 h-5 mt-1 text-forest-green" />
                  <p className="text-base font-medium text-charcoal-gray/90">
                    Soil moisture and temperature monitoring
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <TrendingUp className="flex-shrink-0 w-5 h-5 mt-1 text-forest-green" />
                  <p className="text-base font-medium text-charcoal-gray/90">
                    Reduces water usage by 15-30%
                  </p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/3] relative overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/awd.jpg"
                alt="AWD Sensor for water level monitoring"
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Features;
