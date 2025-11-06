"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Users,
  BarChart3,
  CircleDollarSign,
  Shield,
  MonitorDot,
  FlaskRound,
  GraduationCap,
  Building2,
  Sprout,
} from "lucide-react";

const validationData = [
  {
    title: "Scientific Validation",
    icon: ClipboardCheck,
    points: [
      {
        icon: FlaskRound,
        text: "All monitored variables, from GHG emissions to water use and soil health, are measured using methods validated by peer-reviewed research.",
      },
      {
        icon: GraduationCap,
        text: (
          <>
            Our in-house scientific team ensures all protocols align with
            international{" "}
            <span className="font-black text-[#1B5E20] bg-[#81C784]/15 px-2 py-1 rounded-lg">
              Digisaka Carbon Credits
            </span>{" "}
            standards.
          </>
        ),
      },
    ],
  },
  {
    title: "Collaborative Expertise",
    icon: Users,
    points: [
      {
        icon: Building2,
        text: "Partnerships with government agencies, academic institutions, and global research networks reinforce the credibility of our methodologies.",
      },
      {
        icon: Sprout,
        text: "We integrate local knowledge and indigenous farming techniques, ensuring that the technology is not only data-driven but also contextually relevant to the realities of Filipino agriculture.",
      },
    ],
  },
];

const whyItMattersData = [
  {
    icon: BarChart3,
    content: (
      <>
        Our monitoring ensures{" "}
        <span className="font-black text-[#1B5E20] bg-[#81C784]/15 px-2 py-1 rounded-lg">
          accuracy, timeliness, and spatial detail
        </span>
        , critical for validating Digisaka Carbon Credits.
      </>
    ),
  },
  {
    icon: CircleDollarSign,
    content: (
      <>
        Farmers gain access to{" "}
        <span className="font-black text-[#228B22] bg-[#81C784]/15 px-2 py-1 rounded-lg">
          carbon markets
        </span>{" "}
        with the confidence that their practices meet global standards.
      </>
    ),
  },
  {
    icon: Shield,
    content: (
      <>
        Verified data fosters{" "}
        <span className="font-black text-[#1B5E20] bg-[#81C784]/15 px-2 py-1 rounded-lg">
          trust among investors, buyers, and regulators
        </span>
        .
      </>
    ),
  },
];

export default function FrameworkBehind() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
        {/* Main Framework Behind Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center sm:mb-24 lg:mb-32"
        >
          <div className="mb-10">
            <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
              <MonitorDot className="w-5 h-5 mr-2 text-forest-green" />
              <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
                Framework Overview
              </span>
            </Badge>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent mb-2">
                Framework
              </span>
              <span className="text-transparent bg-gradient-to-r from-charcoal-gray to-dark-green bg-clip-text drop-shadow-md">
                Behind
              </span>
            </h1>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="relative shadow-md bg-gradient-to-br from-dark-green via-forest-green to-dark-green rounded-[2rem] p-8 sm:p-10 lg:p-12 xl:p-16 border-2 border-white/40 ">
                <div className="max-w-5xl mx-auto">
                  <p className="mb-8 text-lg font-semibold leading-relaxed sm:text-xl lg:text-2xl text-white/95">
                    The{" "}
                    <span className="font-black text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text">
                      LEADS MRV Framework
                    </span>{" "}
                    provides a structured approach to accreditation and
                    verification for carbon credits in climate-smart rice
                    farming.
                  </p>

                  <p className="mb-8 text-base font-semibold leading-relaxed sm:text-lg lg:text-xl text-white/90">
                    It incorporates{" "}
                    <span className="font-black text-yellow-300">
                      remote sensing, IoT-based GHG monitoring, and AI-driven
                      analytics
                    </span>{" "}
                    to systematically track key farming practices such as water
                    management (AWD), tillage, crop rotation, and residue
                    handling.
                  </p>

                  <div className="pt-8 border-t-2 border-white/20">
                    <p className="text-base font-semibold leading-relaxed sm:text-lg text-white/85">
                      Developed in collaboration with{" "}
                      <span className="px-2 py-1 font-black text-yellow-300 rounded-lg bg-white/10">
                        SEARCA
                      </span>{" "}
                      and international certifiers, the framework follows a
                      multi-tiered verification process to align with global
                      carbon market standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Verified and Research-Backed Practices Section */}
        <div className="mb-20 sm:mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] mb-8 tracking-tight">
              <span className="block bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent mb-2">
                Verified and Research-Backed
              </span>
              <span className="block bg-gradient-to-r from-[#FFB300] to-[#FFEB3B] bg-clip-text text-transparent">
                Practices
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-3xl mx-auto">
              A foundation of science and collaboration.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 mx-auto lg:grid-cols-2 lg:gap-12 max-w-7xl"
          >
            {validationData.map((card, index) => (
              <div key={index}>
                <div className="h-full overflow-hidden bg-white shadow-xl rounded-3xl">
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-col items-center mb-8 text-center">
                      <div className="mb-4">
                        <div className="flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-2xl">
                          <card.icon className="w-8 h-8 lg:w-10 lg:h-10 text-forest-green" />
                        </div>
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1B5E20] leading-tight">
                        {card.title}
                      </h3>
                    </div>
                    <div className="space-y-6">
                      {card.points.map((point, pointIndex) => (
                        <div
                          key={pointIndex}
                          className="flex items-start space-x-4"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <point.icon className="w-5 h-5 text-forest-green" />
                          </div>
                          <p className="text-base sm:text-lg font-semibold text-[#424242]/90 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Why It Matters Section */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[0.9] mb-8 tracking-tight">
              <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent mb-2">
                Why It Matters
              </span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-4xl mx-auto -mt-1.5">
              From farms to carbon markets, trust is in the details.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-10 max-w-7xl"
          >
            {whyItMattersData.map((card, index) => (
              <div
                key={index}
                className={index === 2 ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <div className="h-full overflow-hidden bg-white shadow-xl rounded-3xl">
                  <div className="p-8 sm:p-10">
                    <div className="flex items-center justify-center mb-6 w-14 h-14 lg:w-16 lg:h-16 rounded-2xl">
                      <card.icon className="w-7 h-7 lg:w-8 lg:h-8 text-forest-green" />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold text-[#424242]/90 leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
