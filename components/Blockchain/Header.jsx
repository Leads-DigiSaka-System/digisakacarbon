"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Blocks,
  CheckCircle2,
  CircleDollarSign,
  FileLineChart,
  Leaf,
  ShieldCheck,
  Smartphone,
  Warehouse,
} from "lucide-react";
import { useEffect, useState } from "react";

const Stats = () => {
  const stats = [
    {
      value: 96.2,
      symbol: "%",
      label: "Traceability Rate",
      icon: CheckCircle2,
      decimals: 1,
    },
    {
      value: 920,
      symbol: "",
      label: "Palay Processed",
      suffix: "tonnes",
      icon: Warehouse,
    },
    {
      value: 17.45,
      symbol: "₱",
      label: "Average Farmgate Price",
      icon: CircleDollarSign,
      decimals: 2,
    },
    {
      value: 2.7,
      symbol: "",
      label: "Carbon Footprint",
      suffix: "kg per kg rice",
      icon: Leaf,
      decimals: 1,
    },
  ];

  const AnimatedCounter = ({ value, symbol, decimals = 0 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000;
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <span>
        {decimals === 0 ? Math.round(count) : count.toFixed(decimals)}
        {symbol}
      </span>
    );
  };

  return (
    <div className="grid grid-cols-2 gap-6 mt-12 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 bg-white shadow-md rounded-xl"
        >
          <div className="flex items-center justify-center mb-4">
            <stat.icon className="w-8 h-8 text-[#1B5E20]" />
          </div>
          <div className="text-center">
            <div className="text-2xl font-black text-[#1B5E20]">
              {stat.symbol && <span>{stat.symbol}</span>}
              <AnimatedCounter value={stat.value} decimals={stat.decimals} />
              {stat.suffix && (
                <span className="ml-1 text-lg">{stat.suffix}</span>
              )}
            </div>
            <div className="mt-1 text-sm font-medium text-[#424242]">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const Header = () => {
  return (
    <>
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-16 text-center lg:mb-20"
      >
        <div className="mb-8">
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
            <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
              Blockchain Technology
            </span>
          </Badge>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#228B22] bg-clip-text text-transparent mb-2">
              Digisaka{" "}
              <span className="bg-[#FFB300] bg-clip-text text-transparent">
                Trace
              </span>
            </span>
            <span className="text-transparent bg-gradient-to-r from-charcoal-gray to-dark-green bg-clip-text drop-shadow-md">
              Blockchain-Powered
            </span>
          </h1>
        </div>
        <div>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-5xl mx-auto">
            Ensuring transparency and traceability from seed to rice through
            immutable blockchain technology
          </p>
        </div>
        <Stats />
      </motion.div>

      {/* Overview Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mb-20 sm:mb-24 lg:mb-32"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <Badge className="px-4 py-2 mb-8 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
              <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
              <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase">
                Overview
              </span>
            </Badge>

            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#228B22] bg-clip-text text-transparent mb-2">
                What is Digisaka{" "}
                <span className="bg-[#FFB300] bg-clip-text text-transparent">
                  Trace
                </span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#424242]/80 max-w-3xl mx-auto leading-relaxed">
              A revolutionary blockchain-powered platform that brings complete
              transparency to the rice supply chain, tracking every grain from
              farm to your table with immutable, verifiable records.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Enhanced Phone Mockup Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center p-12"
            >
              <div className="relative">
                {/* Subtle background elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#228B22]/10 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-[#1B5E20]/10 rounded-full"></div>

                {/* Enhanced Phone Mockup */}
                <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl">
                  {/* Left Side Buttons - Enhanced */}
                  <div className="h-[32px] w-[3px] bg-gray-700 absolute -left-[17px] top-[72px] rounded-l-lg shadow-sm"></div>
                  <div className="h-[46px] w-[3px] bg-gray-700 absolute -left-[17px] top-[124px] rounded-l-lg shadow-sm"></div>
                  <div className="h-[46px] w-[3px] bg-gray-700 absolute -left-[17px] top-[178px] rounded-l-lg shadow-sm"></div>

                  {/* Right Side Button - Enhanced */}
                  <div className="h-[64px] w-[3px] bg-gray-700 absolute -right-[17px] top-[142px] rounded-r-lg shadow-sm"></div>

                  {/* Screen Area - Enhanced */}
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-gradient-to-br from-white to-gray-50 mx-auto flex items-center justify-center relative">
                    <div className="absolute inset-1 rounded-[1.8rem] overflow-hidden bg-white shadow-inner">
                      <video
                        className="w-full h-full "
                        autoPlay
                        loop
                        muted
                        playsInline
                      >
                        <source
                          src="/videos/digisakatracedemo.mp4"
                          type="video/mp4"
                        />
                        {/* Enhanced Fallback */}
                        <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-[#228B22]/5 to-[#1B5E20]/5">
                          <Smartphone className="w-12 h-12 text-[#228B22] mb-3" />
                          <p className="text-sm text-[#1B5E20] font-medium text-center">
                            Digisaka Trace Demo
                          </p>
                          <p className="text-xs text-[#424242]/70 mt-1">
                            Video not supported
                          </p>
                        </div>
                      </video>
                    </div>
                  </div>

                  {/* Subtle reflection effect */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>

            {/* Features Grid - Keep Original 4 Features */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {[
                {
                  icon: Blocks,
                  title: "Blockchain-Powered Platform",
                  description:
                    "Advanced rice supply chain traceability system built on secure blockchain technology",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Integration",
                  description:
                    "Seamlessly integrated with Digisaka mobile app for efficient and accurate data collection",
                },
                {
                  icon: FileLineChart,
                  title: "Complete Traceability",
                  description:
                    "Track every step from farm to consumer with permanent, immutable blockchain records",
                },
                {
                  icon: ShieldCheck,
                  title: "Data Integrity",
                  description:
                    "Tamper-proof system ensures complete data security and verification across the supply chain",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative p-8 overflow-hidden transition-all duration-300 transform bg-white shadow-md rounded-xl"
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-3 transition-colors duration-300 rounded-lg">
                        <item.icon className="w-6 h-6 text-[#1B5E20]" />
                      </div>
                      <h3 className="ml-4 text-xl font-bold text-[#1B5E20] group-hover:translate-x-1 transition-transform duration-300">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base font-medium text-[#424242]/90 leading-relaxed  transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Header;
