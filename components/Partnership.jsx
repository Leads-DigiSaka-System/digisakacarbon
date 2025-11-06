"use client";
import { Badge } from "@/components/ui/badge";
import {
  FlaskRound,
  GraduationCap,
  Handshake,
  MapPin,
  MonitorDot,
  Sprout,
  Target,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { AnimatedSection } from "../app/page";
import { useState } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const Partnership = () => {
  const [partnerships] = useState([
    {
      id: "searca",
      name: "SEARCA Partnership",
      logo: "/images/serca.svg",
      image: "/images/Searca-partnership.jpg",
      items: [
        {
          text: "Capacity-building programs to empower agricultural stakeholders with knowledge and skills",
          icon: GraduationCap,
        },
        {
          text: "Pilot projects implementing climate-smart farming techniques",
          icon: Target,
        },
        {
          text: "Collaborative training initiatives to enhance sustainable agriculture practices",
          icon: Sprout,
        },
      ],
      gradient: "from-forest-green via-light-green to-dark-green",
      orderFirst: true,
    },
    {
      id: "irri",
      name: "IRRI Partnership",
      logo: "/images/IRRI.svg",
      image: "/images/IRRI-partnership.jpg",
      items: [
        {
          text: "Calibration of methane emission sensors for accurate greenhouse gas monitoring",
          icon: FlaskRound,
        },
        {
          text: "Field validation of sensor-based emissions tracking methodologies",
          icon: Target,
        },
        {
          text: "Integration of advanced sensor technologies to support climate-resilient agriculture",
          icon: MonitorDot,
        },
      ],
      gradient: "from-golden-yellow via-yellow-400 to-yellow-500",
      orderFirst: false,
    },
  ]);

  // Carousel images state
  const [carouselImages] = useState([
    {
      src: "/images/slider-7.jpg",
      alt: "Low Carbon Rice Farming",
    },
    {
      src: "/images/slider-2.jpg",
      alt: "Agricultural Innovation",
    },
    { src: "/images/slider-6.jpg", alt: "Sustainable Farming" },
    {
      src: "/images/slider-4.jpg",
      alt: "Climate Smart Agriculture",
    },
    {
      src: "/images/slider-5.jpg",
      alt: "Modern Farming Practices",
    },
  ]);

  const [projectSites] = useState([
    {
      id: "isabela",
      title: "San Mateo, Isabela",
      description:
        "San Mateo, Isabela is a key agricultural hub known for its extensive rice farming systems. Farmers in the area are integrating climate-smart practices such as Alternate Wetting and Drying (AWD) and precision fertilizer management to optimize yields while reducing methane emissions. With strong support from local cooperatives and research institutions, Isabela is pioneering data-driven solutions for carbon-neutral rice farming.",
      image: "/images/isabela.jpg",
    },
    {
      id: "laguna",
      title: "Sta. Maria, Laguna",
      description:
        "Located in the heart of Laguna's agricultural belt, Sta. Maria is advancing regenerative agriculture through low-emission rice cultivation and sustainable land use planning. Farmers here are leveraging multispectral drone imaging and AI-powered monitoring systems to optimize crop health and verify carbon sequestration efforts, making it a leading site for digital transformation in rice farming.",

      image: "/images/lagunaFarm.jpg",
    },
    {
      id: "nueva-ecija",
      title: "Sta. Rosa, Nueva Ecija",
      description:
        "As part of the country's rice granary, Sta. Rosa, Nueva Ecija is at the forefront of Digisaka Carbon Credits initiatives for rice farming. Farmers are piloting GHG measurement frameworks, including flux towers, IoT-based methane sensors, and UAV-assisted field assessments, to validate emissions reductions under sustainable rice practices. These efforts position Sta. Rosa as a crucial site for research-backed MRV (Monitoring, Reporting, and Verification) systems in Philippine agriculture.",
      image: "/images/starosaFarm1.jpg",
    },
  ]);

  return (
    <AnimatedSection
      id="partners"
      className="relative w-full py-16 overflow-hidden sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-light-gray/30 via-white to-cream/30"
    >
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        {/* Partners Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-golden-yellow border-golden-yellow/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            <Handshake className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
            Partners and Project Farms
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
              Strategic Partnerships
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base font-semibold leading-relaxed sm:text-lg lg:text-xl text-charcoal-gray/85">
            Advancing agricultural innovation through world-class collaboration
            and research partnerships.
          </p>
        </motion.div>

        {/* Partnerships */}
        {partnerships.map((partnership) => (
          <motion.div
            key={partnership.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="grid items-center gap-12 mb-20 lg:grid-cols-2"
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={partnership.logo}
                    alt={`${partnership.name} Logo`}
                    className="object-contain w-12 h-12 rounded-lg"
                  />
                  <h3 className="text-2xl font-black text-dark-green sm:text-3xl">
                    {partnership.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {partnership.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <item.icon className="w-5 h-5 text-forest-green" />
                      </div>
                      <span className="text-base font-semibold text-charcoal-gray/95 sm:text-lg">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={partnership.orderFirst ? "lg:order-first" : ""}>
              <div className="overflow-hidden shadow-lg rounded-2xl">
                <img
                  src={partnership.image}
                  alt={partnership.name}
                  className="object-cover w-full transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}

        {/* Project Sites Section - Seamlessly Connected */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            <MapPin className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
            Project Sites
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
              Pioneering Sustainable Agriculture
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base font-semibold sm:text-lg lg:text-xl text-charcoal-gray/85">
            Transforming farming communities across the Philippines
          </p>
        </motion.div>

        {/* Full-width Image Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="mx-auto max-w-7xl">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent>
                {carouselImages.map((image) => (
                  <CarouselItem
                    key={image.src}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="relative h-64 p-1">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full shadow-lg rounded-2xl"
                      />
                      <div className="absolute inset-1 rounded-2xl bg-gradient-to-t from-dark-green/30 via-transparent to-forest-green/10"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4 md:-left-6 lg:-left-8" />
              <CarouselNext className="hidden sm:flex -right-4 md:-right-6 lg:-right-8" />
            </Carousel>
          </div>
        </motion.div>

        {/* Project Sites Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectSites.map((site) => (
            <div key={site.id} className="space-y-4">
              <div className="relative overflow-hidden aspect-[4/3] rounded-2xl shadow-lg">
                <img
                  src={site.image}
                  alt={site.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-green/30 via-transparent to-forest-green/10"></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-forest-green" />
                  <h3 className="text-xl font-black text-dark-green sm:text-2xl">
                    {site.title}
                  </h3>
                </div>
                <p className="text-base font-semibold leading-relaxed text-charcoal-gray/95">
                  {site.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Partnership;
