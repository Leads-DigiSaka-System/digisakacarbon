"use client";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const BenefitsImpact = () => {
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
                Impact
              </span>
            </Badge>
            <h2 className="mb-8 text-3xl font-black text-[#1B5E20] sm:text-4xl">
              Benefits & Impact
            </h2>
            <p className="text-lg text-[#424242]/90 max-w-3xl mx-auto">
              Digisaka Trace delivers measurable benefits across the entire rice
              supply chain
            </p>
          </div>

          {/* Impact Categories */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Environmental Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl">🌍</span>
                <h3 className="ml-4 text-xl font-bold text-[#1B5E20]">
                  Environmental Impact
                </h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#424242]">
                      Carbon Reduction
                    </span>
                    <span className="text-lg font-bold text-[#1B5E20]">
                      40%
                    </span>
                  </div>
                  <div className="w-full bg-[#1B5E20]/10 rounded-full h-2">
                    <div
                      className="bg-[#1B5E20] h-2 rounded-full"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#424242]">
                      Water Conservation
                    </span>
                    <span className="text-lg font-bold text-[#1B5E20]">
                      30%
                    </span>
                  </div>
                  <div className="w-full bg-[#1B5E20]/10 rounded-full h-2">
                    <div
                      className="bg-[#1B5E20] h-2 rounded-full"
                      style={{ width: "30%" }}
                    />
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Reduced chemical fertilizer usage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Improved soil health metrics
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Economic Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl">💰</span>
                <h3 className="ml-4 text-xl font-bold text-[#1B5E20]">
                  Economic Benefits
                </h3>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#1B5E20]/5 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#1B5E20] mb-1">
                      25%
                    </div>
                    <div className="text-sm text-[#424242]">
                      Income Increase
                    </div>
                  </div>
                  <div className="p-4 bg-[#1B5E20]/5 rounded-lg text-center">
                    <div className="text-2xl font-bold text-[#1B5E20] mb-1">
                      15%
                    </div>
                    <div className="text-sm text-[#424242]">Price Premium</div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Direct market access opportunities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Reduced transaction costs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Premium pricing for verified products
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Social Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl">🤝</span>
                <h3 className="ml-4 text-xl font-bold text-[#1B5E20]">
                  Social Impact
                </h3>
              </div>
              <div className="space-y-6">
                <div className="p-4 bg-[#1B5E20]/5 rounded-lg">
                  <div className="flex items-center mb-3 space-x-3">
                    <div className="p-2 bg-[#1B5E20]/10 rounded-full">
                      <span className="text-xl">👨‍🌾</span>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-[#1B5E20]">
                        5,000+
                      </div>
                      <div className="text-sm text-[#424242]">
                        Farmers Empowered
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Enhanced food security measures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Improved farmer livelihoods
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 mt-2 bg-[#1B5E20] rounded-full flex-shrink-0 mr-2" />
                    <span className="text-sm text-[#424242]">
                      Community development initiatives
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Key Statistics */}
          <div className="grid gap-6 mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "5,000+",
                label: "Farmers Onboarded",
                icon: "👨‍🌾",
              },
              {
                value: "30,000",
                label: "Hectares Tracked",
                icon: "🌾",
              },
              {
                value: "₱25M+",
                label: "Additional Income Generated",
                icon: "💰",
              },
              {
                value: "40%",
                label: "Carbon Footprint Reduction",
                icon: "🌱",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 text-center bg-white shadow-md rounded-xl"
              >
                <span className="block mb-3 text-2xl">{stat.icon}</span>
                <div className="text-2xl font-bold text-[#1B5E20] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[#424242]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BenefitsImpact;
