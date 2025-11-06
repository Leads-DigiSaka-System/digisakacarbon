"use client";;
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Globe } from "lucide-react";
import { AnimatedSection } from "../app/page";
import { motion } from "framer-motion";


const Solution = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // If IntersectionObserver isn't available, load immediately as a fallback
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.01 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection className="relative w-full py-16 overflow-hidden sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-cream/30 via-white to-light-gray/20">
      {/* Enhanced background decorations */}

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="grid items-center gap-12 mx-auto lg:gap-16 lg:grid-cols-2 max-w-7xl">
          {/* Enhanced Content Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-2 space-y-6 sm:space-y-8 lg:order-1"
          >
            <div className="space-y-4 sm:space-y-6">
              <Badge className="px-4 py-2 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:px-6 sm:py-3 sm:text-base w-fit">
                <Globe className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
                Revolutionary Approach
              </Badge>

              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
                  AN UNFAMILIAR
                </span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-golden-yellow to-yellow-400 bg-clip-text drop-shadow-md">
                  SOLUTION
                </span>
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 w-1.5 h-full bg-gradient-to-b from-forest-green via-golden-yellow to-forest-green rounded-full"></div>
                  <h3 className="pl-4 mb-4 text-2xl font-black sm:text-3xl lg:text-4xl text-dark-green sm:pl-8">
                    GHG
                  </h3>
                </div>

                <p className="text-base font-semibold leading-relaxed sm:text-lg lg:text-xl text-charcoal-gray/95">
                  Our visualization platform animates Digisaka Carbon Credits
                  projects and their impacts, in an engaging and digestible
                  format to restore trust in carbon markets and drive investment
                  in nature.
                </p>

                <div className="p-6 border-2 shadow-xl bg-gradient-to-r from-cream/60 to-light-green/15 rounded-3xl sm:p-8 border-light-green/30">
                  <p className="text-base font-semibold leading-relaxed sm:text-lg text-charcoal-gray/90">
                    Our innovative platform transforms traditional PDF documents
                    (such as Project Design Documents) into a dynamic,
                    immersive, and transparent visualization tool that
                    accelerates understanding and engagement.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Map Placeholder Side */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div
                ref={containerRef}
                className="relative w-full h-[450px] overflow-hidden shadow-md sm:h-[500px] lg:h-[600px] xl:h-[700px] rounded-2xl border-3 border-light-green/30"
              >
                {isVisible ? (
                  <div className="relative w-full h-full">
                    <iframe
                      src="https://digisaka.app/map"
                      className="w-full h-full border-0 rounded-b-lg"
                      title="Digisaka Interactive Map"
                      allowFullScreen
                      tabIndex={-1}
                      loading="lazy"
                      onLoad={() => setIsIframeLoaded(true)}
                    />

                    {/* Pulsing skeleton overlay while iframe is loading */}
                    {!isIframeLoaded && (
                      <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl">
                        <div className="text-center">
                          <div className="w-20 h-20 mb-3 rounded-full bg-light-green/30 animate-pulse mx-auto shadow-lg" />
                          <p className="text-sm font-medium text-charcoal-gray/80">Loading map…</p>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-gradient-to-r from-white to-cream/50 rounded-2xl">
                    <div className="text-center">
                      <div className="w-12 h-12 mb-3 rounded-full animate-pulse bg-light-green/30 mx-auto" />
                      <p className="text-sm font-medium text-charcoal-gray/80">Loading map preview…</p>
                    </div>
                  </div>
                )}
                {/* <Image src='/images/map-png.png' width='500' height='500' className='h-full w-full' /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Solution;
