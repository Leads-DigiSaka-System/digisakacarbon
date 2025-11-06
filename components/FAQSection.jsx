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
                    <p className="text-gray-600">{faq.answer}</p>
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
