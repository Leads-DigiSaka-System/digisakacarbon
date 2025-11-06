"use client";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

// Dummy marketplace data
const marketplaceData = [
  {
    id: 1,
    image: "https://www.philrice.gov.ph/wp-content/uploads/2024/12/negros.jpg",
    title: "Climate-Smart Rice Farming - Luzon",
    location: "Nueva Ecija, Philippines",
    avgPrice: 12.5,
    creditsAvailable: 2450,
  },
  {
    id: 2,
    image: "https://www.philrice.gov.ph/wp-content/uploads/2024/12/negros.jpg",
    title: "Sustainable Agriculture Project - Mindanao",
    location: "Davao del Sur, Philippines",
    avgPrice: 15.75,
    creditsAvailable: 1890,
  },
  {
    id: 3,
    image: "https://www.philrice.gov.ph/wp-content/uploads/2024/12/negros.jpg",
    title: "Organic Rice Cultivation - Visayas",
    location: "Iloilo, Philippines",
    avgPrice: 11.25,
    creditsAvailable: 3200,
  },
  {
    id: 4,
    image: "https://www.philrice.gov.ph/wp-content/uploads/2024/12/negros.jpg",
    title: "Carbon Sequestration Rice Fields",
    location: "Pangasinan, Philippines",
    avgPrice: 13.9,
    creditsAvailable: 1650,
  },
  {
    id: 5,
    image: "https://www.philrice.gov.ph/wp-content/uploads/2024/12/negros.jpg",
    title: "Regenerative Farming Initiative",
    location: "Camarines Sur, Philippines",
    avgPrice: 14.3,
    creditsAvailable: 2780,
  },
  {
    id: 6,
    image: "https://www.philrice.gov.ph/wp-content/uploads/2024/12/negros.jpg",
    title: "Smart Water Management Project",
    location: "Laguna, Philippines",
    avgPrice: 16.8,
    creditsAvailable: 1420,
  },
];

// Low carbon rice products data
const lowCarbonRiceData = [
  {
    id: 1,
    image: "/images/low-carbon-rice.png",
    title: "Low Carbon Bigas",
    location: "Nueva Ecija, Philippines",
    price: 65.0,
    weight: "1kg",
    description: "Mababang Carbono Bigas - Long Grain Brown Rice",
    features: [
      "6,500 - Litang tulog na nabarvas",
      "50% - max kaunting CO2 emission",
      "20% - dagdag kita sa mos nagsasaka",
    ],
  },
  {
    id: 2,
    image: "/images/low-carbon-rice.png",
    title: "Premium Low Carbon Bigas",
    location: "Laguna, Philippines",
    price: 75.0,
    weight: "1kg",
    description: "Premium Mababang Carbono Bigas - Special Grade",
    features: [
      "7,000 - Litang tulog na nabarvas",
      "55% - max kaunting CO2 emission",
      "25% - dagdag kita sa mos nagsasaka",
    ],
  },
];

// Tooltip component
const Tooltip = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };

    if (isVisible && isMobile) {
      document.addEventListener("touchstart", handleClickOutside);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isVisible, isMobile]);

  const handleInteraction = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <div
        onMouseEnter={() => !isMobile && setIsVisible(true)}
        onMouseLeave={() => !isMobile && setIsVisible(false)}
        onClick={handleInteraction}
        onTouchEnd={handleInteraction}
        className="select-none cursor-help"
        role="button"
        tabIndex={0}
        aria-label="Show tooltip"
      >
        {children}
      </div>

      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#1B5E20] text-white text-xs leading-tight rounded-lg shadow-md z-50 border border-[#228B22]/20 w-48 sm:w-56 text-center">
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#1B5E20]"></div>
          <span className="block">{content}</span>
        </div>
      )}
    </div>
  );
};

export default function MarketplaceBlockchain() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15 overflow-hidden">
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="mb-8">
            <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
              <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
              <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
                Blockchain Marketplace
              </span>
            </Badge>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
                Marketplace
              </span>
            </h1>
          </div>
          <div>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-4xl mx-auto">
              Discover and purchase verified carbon credits from climate-smart
              agriculture projects across the Philippines.
            </p>
          </div>
        </div>

        {/* Enhanced Tabs Section */}
        <Tabs defaultValue="carbon-credits" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="h-auto p-1.5 bg-white/80 backdrop-blur-sm border-2 border-forest-green/20 rounded-2xl">
              <TabsTrigger
                value="carbon-credits"
                className="relative px-6 py-3.5 text-base font-bold rounded-xl transition-all duration-300
                         data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest-green data-[state=active]:to-dark-green 
                         data-[state=active]:text-white data-[state=active]:shadow-md
                         data-[state=inactive]:text-forest-green/70 data-[state=inactive]:hover:bg-forest-green/10"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 12L11 14L15 10M20.618 5.984C17.45 2.817 12.55 2.817 9.382 5.984L8 7.366V6C8 5.448 7.552 5 7 5C6.448 5 6 5.448 6 6V10C6 10.552 6.448 11 7 11H11C11.552 11 12 10.552 12 10C12 9.448 11.552 9 11 9H9.634L11.016 7.618C13.39 5.244 17.61 5.244 19.984 7.618C22.358 9.992 22.358 14.212 19.984 16.586C17.61 18.96 13.39 18.96 11.016 16.586L9.602 15.172C9.21 14.78 8.574 14.78 8.182 15.172C7.79 15.564 7.79 16.2 8.182 16.592L9.596 18.006C11.174 19.584 13.326 20.373 15.478 20.373C17.63 20.373 19.782 19.584 21.36 18.006C24.516 14.85 24.516 9.14 21.36 5.984H20.618Z" />
                  </svg>
                  Carbon Credits
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="low-carbon-rice"
                className="relative px-6 py-3.5 text-base font-bold rounded-xl transition-all duration-300
                         data-[state=active]:bg-gradient-to-r data-[state=active]:from-forest-green data-[state=active]:to-dark-green 
                         data-[state=active]:text-white data-[state=active]:shadow-md
                         data-[state=inactive]:text-forest-green/70 data-[state=inactive]:hover:bg-forest-green/10"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 8a3 3 0 10-3-3M9 16a3 3 0 103 3M9 8a3 3 0 11-3 3M15 16a3 3 0 113-3M12 3c.866 0 1.5.897 1.5 2s-.634 2-1.5 2-1.5-.897-1.5-2 .634-2 1.5-2zM12 17c.866 0 1.5.897 1.5 2s-.634 2-1.5 2-1.5-.897-1.5-2 .634-2 1.5-2z" />
                  </svg>
                  Low Carbon Rice
                </div>
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent
            value="carbon-credits"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            {/* Existing Carbon Credits Grid */}
            <div className="grid gap-6 mx-auto md:grid-cols-2 xl:grid-cols-3 sm:gap-8 lg:gap-10 max-w-7xl">
              {marketplaceData.map((project) => (
                <div key={project.id} className="group">
                  <div className="flex flex-col h-full overflow-hidden bg-white border-0 shadow-md rounded-3xl">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden sm:h-52 lg:h-56">
                      {/* Placeholder label */}
                      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-md border bg-amber-100 text-amber-900 border-amber-300/70 shadow-sm">
                          Placeholder image
                        </span>
                      </div>
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} (placeholder image)`}
                        width={500}
                        height={500}
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-grow p-6 sm:p-8">
                      {/* Title and Location - Flex grow to take available space */}
                      <div className="flex-grow">
                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-[#1B5E20] mb-3 leading-tight">
                          {project.title}
                        </h3>

                        {/* Location */}
                        <div className="flex items-center mb-6">
                          <svg
                            className="w-5 h-5 text-[#228B22] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-base font-semibold text-[#424242]/85">
                            {project.location}
                          </span>
                        </div>
                      </div>

                      {/* Fixed height section for price, credits, and button */}
                      <div className="mt-auto">
                        {/* AVG Price */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <span className="text-sm font-bold text-[#424242]/75 mr-2">
                              AVG Price
                            </span>
                            <Tooltip content="This is the median average price of all open sell orders for this project">
                              <svg
                                className="w-4 h-4 text-[#228B22] flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </Tooltip>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-black text-[#1B5E20]">
                              ${project.avgPrice.toFixed(2)}
                            </span>
                            <span className="text-sm font-semibold text-[#424242]/75 ml-1">
                              /credit
                            </span>
                          </div>
                        </div>

                        {/* Credits Available */}
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-sm font-bold text-[#424242]/75">
                            Credits Available
                          </span>
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-[#228B22] rounded-full mr-2"></div>
                            <span className="text-lg font-black text-[#228B22]">
                              {project.creditsAvailable.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        {/* Buy Button */}
                        <Button className="w-full h-10 sm:h-12 lg:h-10 px-4 sm:px-6 lg:px-4 text-sm sm:text-base lg:text-sm font-black bg-gradient-to-r from-[#FFB300] via-[#FFEB3B] to-[#FFB300] text-[#1B5E20] rounded-2xl shadow-sm border-2 border-[#FFEB3B]/50 transition-all duration-300">
                          Buy Ecocredits
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="low-carbon-rice"
            className="mt-0 focus-visible:outline-none focus-visible:ring-0"
          >
            <div className="grid gap-6 mx-auto md:grid-cols-2 xl:grid-cols-3 sm:gap-8 lg:gap-10 max-w-7xl">
              {lowCarbonRiceData.map((product) => (
                <div key={product.id} className="group">
                  <div className="flex flex-col h-full overflow-hidden bg-white border-0 shadow-md rounded-3xl">
                    {/* Product Image */}
                    <div className="relative h-48 overflow-hidden sm:h-52 lg:h-56">
                      {/* Placeholder label */}
                      <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <span className="px-2 py-1 text-[10px] font-bold uppercase rounded-md border bg-amber-100 text-amber-900 border-amber-300/70 shadow-sm">
                          Placeholder image
                        </span>
                      </div>
                      <img
                        src={product.image}
                        alt={`${product.title} (placeholder image)`}
                        className="object-contain w-full h-full p-4"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex flex-col flex-grow p-6 sm:p-8">
                      <div className="flex-grow">
                        <h3 className="text-xl sm:text-2xl font-black text-[#1B5E20] mb-3 leading-tight">
                          {product.title}
                        </h3>

                        <div className="flex items-center mb-4">
                          <svg
                            className="w-5 h-5 text-[#228B22] mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span className="text-base font-semibold text-[#424242]/85">
                            {product.location}
                          </span>
                        </div>

                        <p className="text-sm text-[#424242]/85 mb-4">
                          {product.description}
                        </p>

                        <div className="mb-6 space-y-2">
                          {product.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center">
                              <div className="w-1.5 h-1.5 bg-[#228B22] rounded-full mr-2"></div>
                              <span className="text-sm font-medium text-[#424242]/85">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-sm font-bold text-[#424242]/75">
                            Price ({product.weight})
                          </span>
                          <span className="text-2xl font-black text-[#1B5E20]">
                            ₱{product.price.toFixed(2)}
                          </span>
                        </div>

                        <Button className="w-full h-10 sm:h-12 lg:h-10 px-4 sm:px-6 lg:px-4 text-sm sm:text-base lg:text-sm font-black bg-gradient-to-r from-[#FFB300] via-[#FFEB3B] to-[#FFB300] text-[#1B5E20] rounded-2xl shadow-sm border-2 border-[#FFEB3B]/50 transition-all duration-300">
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Info Section */}
        <div className="mt-16 text-center lg:mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="relative p-6 border-2 shadow-lg bg-white/95 rounded-2xl sm:p-8 border-white/40 ">
                <p className="text-base sm:text-lg font-semibold text-[#424242]/90 leading-relaxed">
                  All carbon credits are verified through our{" "}
                  <span className="font-black text-[#1B5E20] bg-[#81C784]/15 px-2 py-1 rounded-lg">
                    LEADS MRV Framework
                  </span>{" "}
                  and backed by blockchain technology for transparency and
                  traceability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
