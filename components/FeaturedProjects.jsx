"use client";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatedSection } from "../app/page";
import { useMediaQuery } from "@/hooks/use-media-query";
import { motion } from "framer-motion";

const FeaturedProjects = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Use media query to detect mobile devices
  const isMobile = useMediaQuery("(max-width: 768px)");

  const updateSlideInfo = useCallback(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
  }, [api]);

  useEffect(() => {
    if (!api) return;

    // Update initial values
    updateSlideInfo();

    // Handle slide changes
    api.on("select", updateSlideInfo);

    // Cleanup
    return () => api.off("select", updateSlideInfo);
  }, [api, updateSlideInfo]);

  const projects = [
    {
      title: "Agricultural Drought Indicators",
      image: "/images/featured-1.png",
    },
    {
      title: "Crop Productivity and Stress",
      image: "/images/featured-2.png",
    },
    {
      title: "Rice yield Forecasts",
      image: "/images/featured-3.png",
    },
    {
      title: "Price Forecasts",
      image:
        "https://cdn.prod.website-files.com/6575d040b89a7f7c0f53b18a/661d3e78d81c45cb3355de29_Slide%201.png",
    },
  ];

  return (
    <AnimatedSection className="w-full py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream/30 via-white to-light-gray/20">
      <div className="container px-4 mx-auto md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
            <Award className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
            Showcase
          </Badge>
          <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
            <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
              Featured Projects
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-base font-semibold sm:text-lg lg:text-xl text-charcoal-gray/85">
            Discover our latest Digisaka Carbon Credits projects making real
            impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-7xl"
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              dragFree: isMobile,
              containScroll: "trimSnaps",
              skipSnaps: false,
            }}
          >
            <CarouselContent className="p-2 sm:p-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 sm:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                >
                  <div className="w-full h-full">
                    <Card className="h-full overflow-hidden transition-shadow duration-300 border-0 shadow-lg hover:shadow-xl group rounded-2xl sm:rounded-3xl">
                      {/* Enhanced Project Image with responsive heights */}
                      <div className="relative w-full h-40 overflow-hidden xs:h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          loading={index <= 2 ? "eager" : "lazy"}
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority={index <= 1}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 via-dark-green/10 to-transparent"></div>
                      </div>

                      <CardHeader className="p-4 sm:pt-6 sm:pb-4 sm:px-6 lg:pt-8 lg:pb-6">
                        <CardTitle className="text-lg font-black leading-tight sm:text-xl lg:text-2xl text-dark-green">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex -left-4 xl:-left-6" />
            <CarouselNext className="hidden lg:flex -right-4 xl:-right-6" />
          </Carousel>
          <div className="py-2 text-xs text-center sm:text-sm text-muted-foreground">
            Slide {current} of {count}
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default FeaturedProjects;
