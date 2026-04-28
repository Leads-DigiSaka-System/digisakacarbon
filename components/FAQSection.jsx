"use client";
// import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is GHG and how does it work?",
      answer:
        "GHG (Greenhouse Gas) is a comprehensive platform designed to measure, report, and verify greenhouse gas emissions. Our system utilizes advanced technologies and methodologies to help organizations track their carbon footprint accurately and efficiently.",
    },
    {
      question: "How accurate are the emission measurements?",
      answer:
        "Our emission measurements are highly accurate, following international standards and protocols. We employ state-of-the-art sensors and data analytics to ensure precise measurements with a margin of error of less than 2%.",
    },
    {
      question: "What types of organizations can benefit from this platform?",
      answer:
        "Our platform is designed to serve a wide range of organizations, including industrial facilities, agricultural operations, commercial buildings, and government institutions. Any organization looking to monitor and reduce their environmental impact can benefit from our solutions.",
    },
    {
      question: "How can I get started with implementing GHG monitoring?",
      answer:
        "Getting started is simple. Contact our team through the website, and we'll guide you through the implementation process, including initial assessment, system setup, and training for your team.",
    },
    {
      question: "What support and training do you provide?",
      answer:
        "We provide comprehensive support and training, including 24/7 technical assistance, regular system updates, and personalized training sessions for your team. Our experts are always available to help you maximize the benefits of our platform.",
    },
    {
      question: "Can the platform help with regulatory compliance?",
      answer:
        "Yes, our platform is designed to meet various regulatory requirements and reporting standards. We regularly update our system to comply with international greenhouse gas reporting protocols, making it easier for organizations to meet their compliance obligations.",
    },
    {
      question: "What kind of reporting and analytics features are available?",
      answer:
        "Our platform offers comprehensive reporting tools including real-time dashboards, customizable reports, trend analysis, and predictive analytics. You can generate detailed emissions reports, track progress towards reduction goals, and identify areas for improvement.",
    },
    {
      question: "Is the data secure and how is it protected?",
      answer:
        "We take data security seriously. Our platform employs enterprise-grade encryption, secure cloud storage, and regular security audits. All data is backed up regularly, and we comply with international data protection standards to ensure your information remains confidential and secure.",
    },
      {
        question: "What is this project and what problem does it solve?",
        answer:
          "This is a low-cost, field-deployable methane (CH\u2084) monitoring system designed for agricultural applications under LEADS AGRI. It continuously measures methane concentration in the field, timestamps data with logs environmental context (temperature, humidity) all from a solar-powered, autonomous unit that can be deployed with minimal infrastructure.",
      },
      {
        question: "What is the target of deployment environment?",
        answer:
          "Outdoor agricultural fields in the Philippine climate \u2014 hot, humid, and often without grid power access. The system is designed to operate continuously using a solar panel with a LiFePO4 battery, making it fully off-grid capable.",
      },
      {
        question: "What methane sensor is used and why?",
        answer:
          "The Figaro TGS2611-E00 is used. It's a catalytic-type MEMS gas sensor specifically tuned for methane detection. Key reasons for selection:\n\u2022 Low cost compared to NDIR or laser-based alternatives\n\u2022 The -E00 variant includes an ethanol filter, reducing false positives from alcohol vapors common in agricultural settings\n\u2022 Well-documented sensitivity curves for CH\u2084 calibration\n\u2022 Outputs an analog voltage, compatible with an external ADC",
      },
      {
        question: "How does the system stay powered in the field?",
        answer:
          "A solar panel charges a 12V LiFePO4 battery through a charge controller. LiFePO4 chemistry is chosen for its long cycle life, flat discharge curve, and thermal stability \u2014 important in high-ambient-temperature Philippine field conditions. The power chain then steps this down through the LM2596 buck converter and HT7550 LDO to a stable 5V for the electronics.",
      },
      {
        question: "What PCB design features were added for reliability?",
        answer:
          "Added features in PCB to ensure the reliability are:\n\u2022 GND stitching vias \u2014 Added across the board to reduce ground plane impedance and improve EMI shielding\n\u2022 Copper pour \u2014 Solid ground fill on both layers for better thermal and electrical performance\n\u2022 No-connect markers \u2014 Added to all unused pins to suppress false DRC errors\n\u2022 Part value verification \u2014 Confirmed all resistor/capacitor values match BOM intent.",
      },
      {
        question: "How is data collected and stored?",
        answer:
          "The Raspberry Pi Zero runs a Python data-logging loop that reads methane (via ADS1115), temperature and humidity (SI7021), and timestamps each reading using the DS3231 RTC. Data is written to local storage (SD card). The DS3231's battery-backed oscillator ensures timestamps remain accurate even after power interruptions critical for field deployments where power cycling may occur.",
      },
      {
        question: "What is the full component list?",
        answer:
          "The IoT-Based: Low-Cost Methane Sensor includes:\n\u2022 MCU Raspberry Pi Zero \u2014 runs Python firmware\n\u2022 Sensor TGS2611-E00 \u2014 methane detection\n\u2022 Sensor SI7021 \u2014 temperature & humidity (I2C)\n\u2022 ADC ADS1115 \u2014 16-bit, 4-channel analog-to-digital converter (I2C)\n\u2022 RTC DS3231 \u2014 precision real-time clock (I2C)\n\u2022 Power 12V LiFePO4 battery + 100W Solar Panel + Charge Controller\n\u2022 Power LM2596 buck converter (12V \u2192 ~5.5V)\n\u2022 Power HT7550 LDO (\u2192 stable 5V for RPi)\n\u2022 Power TL431 shunt reference for ADC voltage reference\n\u2022 Logic BSS138 MOSFET \u2014 I2C level shifting (5V \u2194 3.3V)\n\u2022 Wiring 10AWG cable for battery connections",
      },
    ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15 overflow-hidden">
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
        {/* Replace motion.div with div */}
        <div>
          {/* Replace motion.div with div */}
          <div className="mb-12 text-center">
            <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
              <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3"></div>
              <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase letter-spacing-wide">
                FAQ
              </span>
            </Badge>
            <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h1>
            <p className="text-lg -mt-1.5 sm:text-xl lg:text-2xl font-semibold text-[#424242]/85 max-w-4xl mx-auto">
              Find answers to common questions about our GHG monitoring platform
            </p>
          </div>
          {/* Replace motion.div with div */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="mb-4 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-50/50">
                    <span className="text-lg font-medium text-left text-gray-900">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-600 whitespace-pre-line">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
