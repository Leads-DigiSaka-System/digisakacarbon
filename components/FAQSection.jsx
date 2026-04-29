"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Cpu } from "lucide-react";

const generalFaqs = [
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

const leadsAgriFaqs = [
  {
    question: "What is this system for?",
    answer:
      "A low-cost, field-deployable system for measuring methane (CH\u2084) in applications like agriculture, environmental monitoring, and carbon projects (MRV).",
  },
  {
    question: "What sensor does it use?",
    answer:
      "It uses a Figaro TGS2611 methane sensor, chosen for its low cost, availability, and suitability for ppm-level detection.",
  },
  {
    question: "How accurate is the system?",
    answer:
      "\u2022 Raw readings are not directly accurate\n\u2022 With proper calibration: ~0.5\u20131 ppm accuracy\n\u2022 Accuracy depends on calibration and environmental conditions",
  },
  {
    question: "What are its limitations?",
    answer:
      "\u2022 Sensitive to humidity, temperature, and other gases\n\u2022 Requires periodic calibration\n\u2022 Lower accuracy than laboratory instruments",
  },
  {
    question: "How is measurement reliability ensured?",
    answer:
      "\u2022 Controlled airflow\n\u2022 Temperature and humidity monitoring and control\n\u2022 Closed chamber for consistent sampling\n\u2022 Standard gas calibration",
  },
];

const FaqGroup = ({ icon: Icon, eyebrow, title, subtitle, items, idPrefix }) => (
  <div className="mb-16 last:mb-0">
    <div className="flex flex-col items-start gap-3 mb-6 sm:flex-row sm:items-center sm:gap-4">
      <div className="flex items-center justify-center w-12 h-12 shadow-lg rounded-xl bg-gradient-to-br from-[#1B5E20] to-[#81C784] shadow-[#1B5E20]/20">
        <Icon className="w-6 h-6 text-white" strokeWidth={2.25} />
      </div>
      <div>
        <p className="text-xs font-bold tracking-widest text-[#228B22] uppercase">
          {eyebrow}
        </p>
        <h2 className="text-xl font-bold text-[#1B5E20] sm:text-2xl">{title}</h2>
        {subtitle && (
          <p className="mt-1 text-sm text-[#424242]/70 sm:text-base">{subtitle}</p>
        )}
      </div>
    </div>

    <Accordion type="single" collapsible className="w-full space-y-3">
      {items.map((faq, index) => (
        <AccordionItem
          key={`${idPrefix}-${index}`}
          value={`${idPrefix}-${index}`}
          className="overflow-hidden transition-all duration-300 bg-white/70 backdrop-blur-sm border border-[#1B5E20]/10 rounded-2xl shadow-sm hover:shadow-md hover:border-[#1B5E20]/25 data-[state=open]:shadow-lg data-[state=open]:border-[#228B22]/40 data-[state=open]:bg-white"
        >
          <AccordionTrigger className="px-5 py-4 sm:px-6 sm:py-5 hover:no-underline group">
            <div className="flex items-start w-full gap-4 text-left">
              <span className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-sm font-bold text-[#1B5E20] bg-[#FFF8E1] rounded-lg group-data-[state=open]:bg-gradient-to-br group-data-[state=open]:from-[#1B5E20] group-data-[state=open]:to-[#228B22] group-data-[state=open]:text-white transition-colors">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-semibold text-gray-900 sm:text-lg group-data-[state=open]:text-[#1B5E20]">
                {faq.question}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-5 pb-5 sm:px-6 sm:pb-6">
            <div className="pl-12 border-l-2 border-[#81C784]/40 ml-1.5">
              <p className="text-[15px] leading-relaxed text-[#424242] whitespace-pre-line sm:text-base">
                {faq.answer}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

const FAQSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15">
      {/* Decorative background blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-[#81C784]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-[28rem] h-[28rem] bg-[#FFF8E1]/60 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <Badge className="px-4 py-2 mb-5 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base">
            <div className="w-2.5 h-2.5 bg-[#228B22] rounded-full mr-3 animate-pulse"></div>
            <span className="text-sm font-bold text-[#1B5E20] tracking-wider uppercase">
              FAQ
            </span>
          </Badge>
          <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block pb-1.5 bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#81C784] bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="mt-3 text-lg sm:text-xl font-medium text-[#424242]/80">
            Everything you need to know about our GHG monitoring platform and
            field-deployed methane sensing hardware.
          </p>
        </div>

        {/* Groups */}
        <div className="max-w-4xl mx-auto">
          <FaqGroup
            icon={HelpCircle}
            eyebrow="Platform"
            title="General Questions"
            subtitle="About our GHG monitoring platform"
            items={generalFaqs}
            idPrefix="general"
          />

          <FaqGroup
            icon={Cpu}
            eyebrow="Hardware"
            title="LEADS Agri Low-Cost IoT-Based Methane Monitoring System"
            subtitle="Field-deployable CH₄ sensing hardware"
            items={leadsAgriFaqs}
            idPrefix="leads"
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
