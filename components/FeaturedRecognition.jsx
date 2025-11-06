"use client";
import { AnimatedSection } from "../app/page";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const FeaturedRecognition = () => {
  return (
    <AnimatedSection className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-light-gray/20 via-white to-cream/30">
      {/* Media Recognition Section */}
      {/* <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-golden-yellow border-golden-yellow/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            Media Recognition
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
              Featured In
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base font-semibold sm:text-lg lg:text-xl text-charcoal-gray/85">
            Recognition from leading industry publications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid max-w-6xl gap-8 mx-auto sm:gap-10 lg:gap-12"
        >
          {[
            {
              publication: "Carbon Herald",
              quote:
                "GHG innovative platform breathes new life into Digisaka Carbon Credits projects. They transform complex data into engaging and understandable formats.",

              logo: "/images/carbon-herald-logo.jpg",
            },
            {
              publication: "Carbon Pulse",
              quote:
                "A new tool using remote sensing data and artificial intelligence (AI) to bring carbon projects to life hopes to rebuild trust in credits by making projects more accessible.",

              logo: "/images/carbon-pulse-logo.jpg",
            },
            {
              publication: "International Business Times",
              quote:
                "It's all about commoditizing crystal-clear, comprehensible data on Digisaka Carbon Credits and projects in a way that's increasing people's attention capabilities.",

              logo: "/images/IBT-logo.jpg",
            },
          ].map((feature, index) => (
            <div key={index}>
              <Card className="overflow-hidden transition-all duration-500 border-0 shadow-xl group bg-gradient-to-br from-white via-cream/20 to-white rounded-3xl">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                    <div
                      className={`w-20 sm:w-24 h-20 sm:h-24 rounded-2xl flex items-center justify-center flex-shrink-0 p-3 sm:p-4`}
                    >
                      <img
                        src={feature.logo}
                        alt={`${feature.publication} logo`}
                        className={`object-contain w-full h-full filter brightness-[1.15] contrast-[1.1] 
                                                    ${
                                                      feature.publication ===
                                                      "Carbon Pulse"
                                                        ? "scale-150 max-w-[100px] sm:max-w-[120px]"
                                                        : "max-w-[80px] sm:max-w-[100px]"
                                                    }`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-3 text-xl font-black sm:text-2xl text-dark-green sm:mb-4">
                        {feature.publication}
                      </h3>
                      <blockquote className="text-base italic font-semibold leading-relaxed sm:text-lg text-charcoal-gray/95">
                        &quot;{feature.quote}&quot;
                      </blockquote>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div> */}

      {/* SEARCA News Section */}
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            Latest News
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
              Read articles that featured us
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base font-semibold sm:text-lg lg:text-xl text-charcoal-gray/85">
            Stay informed with our latest developments and initiatives
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid max-w-6xl gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-2"
        >
          {[
            {
              title: "Low carbon rice farming promoted in Laguna",
              date: "2 July 2025",
              author: "Shielo Pasahol",
              url: "https://www.searca.org/news/low-carbon-rice-farming-promoted-laguna",
              image:
                "https://www.searca.org/images/news/2025/07/low-carbon-rice-farming-promoted-laguna-01.jpg",
            },
            {
              title:
                "SEARCA and partners engage stakeholders in pushing low-carbon rice farming solutions",
              date: "6 May 2025",
              author: "Stella Faye Estrella",
              url: "https://www.searca.org/news/searca-partners-engage-stakeholders-pushing-low-carbon-rice-farming-solutions",
              image:
                "https://www.searca.org/images/news/2025/05/searca-partners-engage-stakeholders-pushing-low-carbon-rice-farming-solutions-01.jpg",
            },
            {
              title:
                "SEARCA gauges rice stakeholder perspectives, promotion of rice straw management intensified",
              date: "18 March 2025",
              author: "Shielo Pasahol",
              url: "https://www.searca.org/news/searca-gauges-rice-stakeholder-perspectives-promotion-of-rice-straw-management-intensified",
              image:
                "https://www.searca.org/images/news/2025/03/searca-gauges-rice-stakeholder-perspectives-promotion-of-rice-straw-management-intensified-01a.jpg",
            },
            {
              title:
                "SEARCA, LEADS Agri partner for adaptive and low-carbon agriculture",
              date: "11 March 2025",
              author: "Leah Lyn Domingo",
              url: "https://www.searca.org/news/searca-leads-agri-partner-adaptive-low-carbon-agriculture",
              image:
                "https://www.searca.org/images/news/2025/03/searca-leads-agri-partner-adaptive-low-carbon-agriculture-01.jpg",
            },
          ].map((news, index) => (
            <div key={index} className="h-full">
              <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 border-0 shadow-lg group bg-gradient-to-br from-white via-cream/10 to-white rounded-2xl">
                <div className="w-full h-48 overflow-hidden bg-gradient-to-br from-forest-green/5 to-light-green/10">
                  <div
                    className="w-full h-full transition-transform duration-300 bg-center bg-cover group-hover:scale-105"
                    style={{ backgroundImage: `url(${news.image})` }}
                  />
                </div>
                <CardContent className="flex flex-col flex-1 p-6">
                  <a
                    href={news.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col flex-1"
                  >
                    <h3 className="mb-2 text-lg font-bold transition-colors duration-300 text-dark-green group-hover:text-forest-green sm:text-xl">
                      {news.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-auto text-sm text-charcoal-gray/70">
                      <span className="font-medium">{news.author}</span>
                      <span>•</span>
                      <span>{news.date}</span>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedRecognition;
