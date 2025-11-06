"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const QRCodeDemo = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isScanning, setIsScanning] = useState(false);

  const mockData = {
    farmer: {
      name: "Isabela Rice Farmers",
      location: "Isabela, Philippines",
      status: "Organic Certified",
    },
    product: {
      variety: "Premium Dinorado Rice",
      harvest: "July 15, 2025",
      batch: "BTC-2025-001",
    },
    sustainability: {
      carbon: "2.7 kg CO₂/kg",
      water: "1,250 L/kg",
      rating: "Excellent",
    },
    trace: {
      origin: "Isabela Farm",
      mill: "ABC Rice Mill",
      store: "Local Mart Cubao",
    },
  };

  const tabs = [
    { name: "Farm", icon: "👨‍🌾", key: "farmer" },
    { name: "Product", icon: "🌾", key: "product" },
    { name: "Green", icon: "🌱", key: "sustainability" },
    { name: "Track", icon: "🔍", key: "trace" },
  ];

  const startScanning = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 2000);
  };

  const renderContent = () => {
    const data = mockData[tabs[activeTab].key];

    if (isScanning) {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-[#1B5E20] rounded-lg relative animate-pulse">
            <div className="absolute inset-2 border-2 border-[#1B5E20] animate-scan" />
          </div>
          <p className="text-sm font-medium text-[#1B5E20] animate-pulse">
            Scanning...
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center mb-4 space-x-3">
          <span className="text-3xl">{tabs[activeTab].icon}</span>
          <div>
            <h4 className="font-bold text-[#1B5E20] text-sm">
              {Object.values(data)[0]}
            </h4>
            <p className="text-xs text-gray-600">{Object.values(data)[1]}</p>
          </div>
        </div>

        <div className="space-y-3">
          {Object.entries(data)
            .slice(2)
            .map(([key, value]) => (
              <div key={key} className="p-3 bg-[#1B5E20]/5 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#1B5E20] capitalize">
                    {key}:
                  </span>
                  <span className="text-xs font-bold">{value}</span>
                </div>
              </div>
            ))}
        </div>

        <div className="p-3 mt-4 border border-green-200 rounded-lg bg-green-50">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-green-700">
              Blockchain Verified
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid gap-6 lg:gap-12 xl:grid-cols-2">
      {/* Responsive Mobile Mockup */}
      <div className="relative flex justify-center order-2 xl:order-1">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[300px]"
        >
          {/* Phone Frame - Now truly responsive */}
          <div className="relative bg-gray-800 rounded-[2rem] p-2 shadow-2xl aspect-[9/19]">
            {/* Side buttons */}
            <div className="absolute w-1 h-8 bg-gray-800 rounded-l-lg -left-1 top-16" />
            <div className="absolute w-1 h-12 bg-gray-800 rounded-l-lg -left-1 top-28" />
            <div className="absolute w-1 h-16 bg-gray-800 rounded-r-lg -right-1 top-32" />

            {/* Screen */}
            <div className="bg-white rounded-[1.5rem] h-full flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-white border-b border-gray-100">
                <h3 className="font-bold text-[#1B5E20] text-sm">Digisaka</h3>
                <span className="text-xs text-gray-500">
                  {new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              {/* Content Area */}
              <div className="flex flex-col flex-1 p-4">
                {/* Tabs */}
                <div className="flex mb-4 space-x-1">
                  {tabs.map((tab, idx) => (
                    <button
                      key={tab.name}
                      onClick={() => setActiveTab(idx)}
                      className={`flex-1 py-2 px-2 rounded-lg text-xs font-medium transition-all ${
                        activeTab === idx
                          ? "bg-[#1B5E20] text-white"
                          : "bg-gray-100 text-[#1B5E20]"
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-sm">{tab.icon}</span>
                        <span className="mt-1 text-xs">{tab.name}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderContent()}
                  </motion.div>
                </div>

                {/* Bottom instruction */}
                <div className="mt-4 text-center">
                  <p className="mb-3 text-xs text-gray-500">
                    {isScanning ? "Retrieving data..." : "Tap to scan QR code"}
                  </p>
                  <button
                    onClick={startScanning}
                    disabled={isScanning}
                    className="w-full bg-[#1B5E20] text-white py-3 rounded-lg font-medium text-sm hover:bg-[#1B5E20]/90 transition-colors disabled:opacity-50"
                  >
                    {isScanning ? "Scanning..." : "Scan QR Code"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Simple legend */}
        <div className="absolute text-center -translate-x-1/2 -bottom-16 left-1/2">
          <p className="max-w-xs text-sm text-gray-600">
            Scan QR codes for instant product verification
          </p>
        </div>
      </div>

      {/* Information Categories - Original detailed version */}
      <div className="order-1 xl:order-2">
        <h3 className="text-xl sm:text-2xl font-bold text-[#1B5E20] mb-4 sm:mb-6">
          Scan Results Include:
        </h3>
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
          {[
            {
              icon: "👨‍🌾",
              title: "Farmer Information",
              items: [
                "Farmer group details",
                "Location information",
                "Farming practices",
                "Certifications",
              ],
            },
            {
              icon: "🌾",
              title: "Product Details",
              items: [
                "Rice variety",
                "Production methods",
                "Harvest date",
                "Milling information",
              ],
            },
            {
              icon: "♻️",
              title: "Sustainability Data",
              items: [
                "Carbon footprint metrics",
                "Water usage data",
                "Sustainable practices",
                "Environmental impact",
              ],
            },
            {
              icon: "🔍",
              title: "Supply Chain Journey",
              items: [
                "Geographic origin",
                "Processing locations",
                "Distribution path",
                "Quality verifications",
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 transition-all duration-300 bg-white shadow-md sm:p-6 rounded-xl"
            >
              <div className="flex items-center mb-3 sm:mb-4">
                <span className="mr-2 text-xl sm:mr-3 sm:text-2xl">
                  {category.icon}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-[#1B5E20]">
                  {category.title}
                </h4>
              </div>
              <ul className="space-y-1 sm:space-y-2">
                {category.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-2 text-[#424242]/90"
                  >
                    <span className="w-1.5 h-1.5 mt-1.5 sm:mt-2 bg-[#228B22] rounded-full flex-shrink-0" />
                    <span className="text-xs font-medium sm:text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const QRCode = () => {
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
                Consumer Interface
              </span>
            </Badge>
            <h2 className="mb-8 text-3xl font-black text-[#1B5E20] sm:text-4xl">
              QR Scan Results
            </h2>
            <p className="text-lg text-[#424242]/90 max-w-3xl mx-auto">
              When consumers scan QR codes on rice packages, they instantly
              access comprehensive product information and traceability data
            </p>
          </div>

          <QRCodeDemo />
        </div>
      </motion.div>
    </>
  );
};

export default QRCode;
