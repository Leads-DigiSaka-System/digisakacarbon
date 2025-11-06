"use client";

import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, DollarSign, LineChart, Globe } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { AnimatedSection } from "../app/page";
import { motion } from "framer-motion";

const cardData = [
  {
    title: "Project Developers",
    description:
      "Visualise your project to better communicate project impact and jump-start credit sales",
    items: [
      {
        text: "Boost marketing efforts via best-in-class visualization",
        icon: LineChart,
      },
      {
        text: "Take the obscurity out of sales conversations to fast-track financing",
        icon: BarChart3,
      },
      {
        text: "Generate price premiums through improved understanding",
        icon: DollarSign,
      },
    ],
    gradient: "from-forest-green via-light-green to-dark-green",
    iconColor: "text-white",
  },
  {
    title: "Corporate Buyers",
    description:
      "Visualise your project to better communicate project impact and jump-start credit sales",
    items: [
      {
        text: "Engage employees and customers through enhanced visualization",
        icon: Users,
      },
      {
        text: "Measure carbon impact — not just at point of sale, but on an ongoing basis",
        icon: BarChart3,
      },
      {
        text: "Leverage objective earth observation tools to pressure test carbon claims",
        icon: Globe,
      },
    ],
    gradient: "from-golden-yellow via-yellow-400 to-yellow-500",
    iconColor: "text-dark-green",
  },
];

const ValueProposition = () => {
  return (
    <AnimatedSection className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-light-gray/20 via-white to-cream/30">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-golden-yellow border-golden-yellow/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            <Users className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
            Client Value Proposition
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
              Providing Value For
            </span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-charcoal-gray to-dark-green bg-clip-text drop-shadow-md">
              Our Clients
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid max-w-6xl gap-8 mx-auto sm:gap-10 lg:gap-12 md:grid-cols-2"
        >
          {cardData.map((card, index) => (
            <div key={index}>
              <Card className="h-full overflow-hidden transition-all duration-500 border-0 shadow-xl group bg-gradient-to-br from-white via-cream/20 to-white rounded-3xl">
                <CardHeader className="pt-6 pb-4 sm:pb-6 sm:pt-8 lg:pt-10">
                  <div className="flex items-center gap-4 mb-4 sm:mb-6">
                    <div className="flex items-center justify-center">
                      {card.title === "Project Developers" ? (
                        <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-forest-green" />
                      ) : (
                        <Users className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-golden-yellow" />
                      )}
                    </div>
                    <CardTitle className="text-xl font-black sm:text-2xl lg:text-3xl text-dark-green">
                      {card.title.split(" ").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </CardTitle>
                  </div>
                  <CardDescription className="mb-6 text-base font-semibold leading-relaxed sm:text-lg text-charcoal-gray/85">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6 sm:pb-8 lg:pb-10">
                  <ul className="space-y-3 sm:space-y-4">
                    {card.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4">
                        <item.icon className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 text-forest-green" />
                        <span className="text-sm font-semibold leading-relaxed text-charcoal-gray/95 sm:text-base">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ValueProposition;
