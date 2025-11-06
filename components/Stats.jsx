"use client";
import { Badge } from "@/components/ui/badge";
import { Globe, Layers, Map, PhilippinePesoIcon, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="relative w-full py-16 overflow-hidden sm:py-20 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-forest-green to-dark-green"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(255,179,0,0.2),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(129,199,132,0.2),transparent_50%)]"></div>

      {/* Enhanced decorative grid */}
      <div className="absolute inset-0 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
            backgroundSize: "30px 30px sm:50px 50px",
          }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold text-white border-2 shadow-lg bg-white/15 border-white/40 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            <Zap className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
            Driving Agricultural Innovation
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6 drop-shadow-lg">
            Measurable Impact Across
            <br />
            <span className="text-transparent bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text drop-shadow-md">
              The Philippines & Beyond
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base font-semibold leading-relaxed text-green-100 sm:text-lg lg:text-xl">
            Transforming agriculture through data-driven solutions and
            sustainable practices
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4"
        >
          {[
            {
              number: "₱7M",
              label: "Financing Facilitated",
              icon: PhilippinePesoIcon,
            },
            {
              number: "500k",
              label: "Hectares Visualized",
              icon: Map,
            },
            {
              number: "3",
              label: "Provinces Covered",
              icon: Globe,
            },
            {
              number: "5",
              label: "Project Types",
              icon: Layers,
            },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="p-4 transition-all duration-500 rounded-3xl bg-white/15 hover:bg-white/25">
                <div className="flex items-center justify-center mx-auto mb-3 sm:mb-4 lg:mb-6">
                  <stat.icon
                    className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  />
                </div>
                <div className="mb-2 text-3xl font-black text-white transition-colors sm:text-4xl lg:text-6xl sm:mb-3 group-hover:text-golden-yellow drop-shadow-xl">
                  {stat.number}
                </div>
                <div className="text-xs font-bold text-green-100 sm:text-sm lg:text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Stats;
