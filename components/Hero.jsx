"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Leaf,
  Shield,
  Sparkles,
  Sprout,
  Star,
  Sun,
  TreePine,
  TrendingDown,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="relative w-full py-12 overflow-hidden sm:py-20 md:py-24 lg:py-32 xl:py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-cream/40 to-light-green/15" />

        {/* Enhanced decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute w-2 h-2 rounded-full shadow-lg top-1/4 left-1/4 sm:w-3 sm:h-3 bg-gradient-to-r from-golden-yellow to-yellow-400 animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-forest-green to-light-green rounded-full animate-ping delay-1000 shadow-lg"></div>
          <div className="absolute top-1/2 left-3/4 w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-light-green to-forest-green rounded-full animate-ping delay-500 shadow-lg"></div>
        </div>

        <div className="container relative z-10 px-4 mx-auto md:px-6">
          <div className="grid items-center gap-8 lg:gap-12 xl:gap-20 lg:grid-cols-2">
            <div className="flex flex-col justify-center order-2 space-y-6 sm:space-y-8 lg:order-1">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Badge className="bg-white text-dark-green border-2 border-light-green/40 px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                    <Image
                      src="/images/philippines.svg"
                      alt="Philippine Flag"
                      width={16}
                      height={16}
                      className="object-contain w-3 h-3 mr-1 sm:mr-2 sm:w-4 sm:h-4"
                    />
                    All-Filipino Innovation
                  </Badge>
                  <div className="flex gap-1.5">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-golden-yellow to-yellow-400 rounded-full animate-bounce shadow-sm"></div>
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-forest-green to-light-green rounded-full animate-bounce delay-100 shadow-sm"></div>
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gradient-to-r from-light-green to-forest-green rounded-full animate-bounce delay-200 shadow-sm"></div>
                  </div>
                </div>

                <h1 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="text-transparent bg-gradient-to-r from-[#1B5E20] via-[#228B22] to-[#2E7D32] bg-clip-text drop-shadow-lg">
                    Good Yield,
                  </span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#2E7D32] via-[#FFA000] to-[#FFB300] bg-clip-text drop-shadow-lg">
                    Less Carbon,
                  </span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-[#FFB300] via-[#FFA000] to-[#2E7D32] bg-clip-text drop-shadow-lg">
                    More Income
                  </span>
                </h1>

                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-0 w-1 sm:w-1.5 h-full bg-gradient-to-b from-golden-yellow via-yellow-400 to-forest-green rounded-full shadow-lg"></div>
                  <p className="max-w-[650px] text-base sm:text-lg lg:text-xl leading-relaxed text-charcoal-gray/95 font-semibold pl-4 sm:pl-8">
                    Empowering Climate-Smart Agriculture with an all-Filipino
                    Innovation. We help farmers adapt and monitor their
                    sustainable farming practices for{" "}
                    <span className="font-black text-transparent text-forest-green bg-gradient-to-r from-forest-green to-dark-green bg-clip-text">
                      Digisaka Carbon Credits
                    </span>
                    .
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-5">
                <div>
                  <Button
                    size="lg"
                    className="w-full h-12 px-6 text-base font-black transition-all duration-300 shadow-md sm:w-auto sm:h-14 lg:h-16 sm:px-8 lg:px-10 sm:text-lg bg-gradient-to-r from-golden-yellow via-yellow-400 to-golden-yellow hover:from-yellow-400 hover:via-golden-yellow hover:to-yellow-400 text-dark-green hover:shadow-md rounded-2xl border-3 border-yellow-300/50 hover:border-yellow-300"
                  >
                    <Sparkles className="w-4 h-4 mr-2 sm:mr-3 sm:h-5 sm:w-5" />
                    Sample Projects
                    <ArrowRight className="w-4 h-4 ml-2 sm:ml-3 sm:h-5 sm:w-5" />
                  </Button>
                </div>
                <div>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full h-12 px-6 text-base font-black transition-all duration-300 shadow-md sm:w-auto sm:h-14 lg:h-16 sm:px-8 lg:px-10 sm:text-lg border-3 border-forest-green text-forest-green hover:bg-gradient-to-r hover:from-forest-green hover:to-dark-green hover:text-white rounded-2xl hover:shadow-md"
                  >
                    <TreePine className="w-4 h-4 mr-2 sm:mr-3 sm:h-5 sm:w-5" />
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:items-center sm:gap-8 sm:pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-golden-yellow text-golden-yellow drop-shadow-md" />
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-xs font-black sm:ml-3 sm:text-sm text-charcoal-gray">
                    Trusted by Filipino farmers
                  </span>
                </div>
                <div className="hidden w-px h-6 sm:block bg-gradient-to-b from-charcoal-gray/30 to-transparent"></div>
                <div className="flex items-center gap-2 text-xs font-black sm:text-sm text-charcoal-gray">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-forest-green" />
                  Research-backed solutions
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Replace motion.div with div */}

                <div className="relative w-64 sm:w-80 md:w-96 lg:w-[400px] xl:w-[450px] h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[450px] rounded-full bg-gradient-to-br from-white/95 via-cream/80 to-light-green/30 border-3 border-light-green/50 shadow-lg drop-shadow-2xl flex items-center justify-center group">
                  {/* Static green glow layers */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-forest-green/20 via-light-green/10 to-transparent"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-transparent via-light-green/15 to-forest-green/25"></div>

                  {/* Enhanced border glow */}
                  <div className="absolute inset-0 border-4 rounded-full border-light-green/30 bg-gradient-to-r from-light-green/5 via-forest-green/10 to-light-green/5"></div>

                  {/* Small decorative dots */}
                  <div className="absolute inset-0">
                    <div className="absolute w-1.5 h-1.5 bg-golden-yellow/40 rounded-full top-[25%] left-[10%] animate-pulse"></div>
                    <div className="absolute w-1.5 h-1.5 bg-forest-green/40 rounded-full top-[75%] right-[10%] animate-pulse delay-300"></div>
                    <div className="absolute w-1.5 h-1.5 bg-light-green/40 rounded-full top-[50%] right-[15%] animate-pulse delay-700"></div>
                  </div>

                  {/* Main inner circle */}
                  <div className="w-[90%] h-[90%] rounded-full bg-gradient-to-br from-white to-cream/90 shadow-inner flex items-center justify-center relative overflow-hidden border border-light-green/20 group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Subtle radial gradient background */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,theme(colors.light-green.DEFAULT/0.05),transparent_70%)]"></div>
                    {/* Enhanced inner decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-light-green/8 to-forest-green/12"></div>
                    {/* Replace motion.div with div */}
                    <div className="relative z-10">
                      <Sprout className="w-24 h-24 sm:w-32 md:w-40 lg:w-44 xl:w-48 sm:h-32 md:h-40 lg:h-44 xl:h-48 text-forest-green drop-shadow-md animate-sprout-pulse" />
                    </div>

                    {/* Replace motion.div with div */}
                    <div className="absolute w-3 h-3 border border-yellow-300 rounded-full shadow-md top-8 sm:top-12 md:top-16 left-8 sm:left-12 md:left-16 sm:w-4 sm:h-4 bg-gradient-to-r from-golden-yellow to-yellow-400" />
                    <div className="absolute w-2 h-2 border rounded-full shadow-md bottom-8 sm:bottom-12 md:bottom-16 right-8 sm:right-12 md:right-16 sm:w-3 sm:h-3 bg-gradient-to-r from-light-green to-forest-green border-light-green" />
                  </div>
                </div>

                {/* Replace motion.div with div */}
                <div className="absolute flex items-center justify-center w-16 h-16 shadow-md -top-4 sm:-top-6 md:-top-8 -right-4 sm:-right-6 md:-right-8 sm:w-20 md:w-24 sm:h-20 md:h-24 rounded-2xl bg-gradient-to-br from-golden-yellow via-yellow-400 to-golden-yellow border-3 border-yellow-300/60 animate-float-slow">
                  <TrendingDown className="w-8 h-8 sm:w-10 md:w-12 sm:h-10 md:h-12 text-dark-green drop-shadow-md" />
                </div>

                <div className="absolute flex items-center justify-center shadow-md -bottom-3 sm:-bottom-4 md:-bottom-6 -left-3 sm:-left-4 md:-left-6 w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-2xl bg-gradient-to-br from-light-green via-forest-green to-dark-green border-3 border-light-green/60 animate-float-slower">
                  <Leaf className="text-white w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 drop-shadow-md" />
                </div>

                <div className="absolute flex items-center justify-center w-12 h-12 border-2 shadow-md top-1/2 -left-6 sm:-left-8 md:-left-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl bg-gradient-to-br from-cream to-white border-light-green/40 animate-float-slowest">
                  <Sun className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-golden-yellow drop-shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
