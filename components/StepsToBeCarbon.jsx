"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronDown, WavesLadder } from "lucide-react";
import { Badge } from "@/components/ui/badge";


const steps = [
    {
        id: 1,
        title: "Step 1",
        bullets: [
            "Introduction to farmer groups with LGUs and NIA regional office",
            "Drone mapping for site overview and initial assessment",
        ],
        image: "/images/step1.jpg",
        alt: "step 1 image",
    },
    {
        id: 2,
        title: "Step 2",
        bullets: [
            "Project feasibility, design and application to Joint Crediting Mechanism (JCM)",
            "Digisaka app training, installation of MRV sensors",
        ],
        image: "/images/landing-3.jpg",
        alt: "step 2 image",
    },
    {
        id: 3,
        title: "Step 3",
        bullets: [
            "MRV system (ground-based and large-scale) monitoring",
            "Digisaka app data entries, geo-tagging, blockchain logs along the cropping season",
        ],
        image: "/images/awd.jpg",
        alt: "step 3 image",
    },
    {
        id: 4,
        title: "Step 4",
        bullets: [
            "Online selling of credits (voluntary carbon market)",
            "Low carbon rice packaging/branding and selling",
        ],
        image: "/images/low-carbon-rice.jpg",
        alt: "step 4 image",
    },
];

const StepsToBeCarbon = () => {
    return (
        <section className="relative w-full py-16 overflow-hidden sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-light-gray/30 via-white to-cream/30">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ amount: 0.2 }}
                transition={{ duration: 0.5 }}
                className="mb-12 text-center sm:mb-8"
            >
                <Badge className="px-4 py-2 mb-4 text-sm font-bold bg-white border-2 shadow-md text-forest-green border-forest-green/30 sm:mb-6 sm:px-6 sm:py-3 sm:text-base">
                    <WavesLadder className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
                    Step by Step
                </Badge>
                <h2 className="mb-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl sm:mb-6">
                    <span className="text-transparent bg-gradient-to-r from-dark-green to-forest-green bg-clip-text drop-shadow-md">
                        Steps To Be Low Carbon
                    </span>
                </h2>
                <p className="max-w-3xl mx-auto text-base font-semibold leading-relaxed sm:text-lg lg:text-xl text-charcoal-gray/85">
                    Easy Steps to be a low carbon farm in your Municipality
                </p>
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 py-4 lg:py-6">
                <div className="grid grid-cols-1 gap-8 xl:grid-cols-4">
                    {steps.map((step, idx) => (
                        <div key={step.id} className="relative overflow-visible z-10">
                            {/* xl and up: Image with overlay card */}
                            <div className="hidden xl:block relative aspect-[5/3]">
                                {/* Inner wrapper clips only the image to rounded corners */}
                                <div className="absolute inset-0 overflow-hidden rounded-2xl ">
                                    <Image
                                        src={step.image}
                                        alt={step.alt}
                                        fill
                                        priority={idx === 0}
                                        className="object-cover"
                                    />
                                </div>

                                {/* Overlay Step Card - positioned below center with left margin */}
                                <div className="absolute z-10 left-5 right-6 xl:right-0.5 xl:top-[75%] bottom-3">
                                    <div className="relative h-full rounded-xl bg-forest-green text-white p-4 sm:p-5 pr-6 border border-forest-green/20 shadow-none min-h-[12rem]">
                                        <h3 className="mb-2 text-base font-extrabold sm:text-lg">{step.title}</h3>
                                        <ul className="list-disc pl-5 space-y-1.5 sm:text-sm font-medium leading-relaxed">
                                            {step.bullets.map((b, i) => (
                                                <li key={i}>{b}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right arrow between cards on xl */}
                                {idx < steps.length - 1 && (
                                    <div className="hidden xl:block absolute -right-[30px] top-[60%] -translate-y-1/2 z-50 pointer-events-none" aria-hidden>
                                        <ChevronRight className="w-7 h-7 text-forest-green" />
                                    </div>
                                )}
                            </div>

                            {/* below xl: Simple step card only (no image/overlay) */}
                            <div className="xl:hidden">
                                <div className="rounded-xl bg-forest-green text-white p-4 sm:p-5 border border-forest-green/20 shadow-none">
                                    <h3 className="mb-2 text-base font-extrabold sm:text-lg">{step.title}</h3>
                                    <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm font-medium leading-relaxed">
                                        {step.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Down arrow between cards on < xl */}
                                {idx < steps.length - 1 && (
                                    <div className="flex justify-center xl:hidden mt-4" aria-hidden>
                                        <ChevronDown className="w-6 h-6 text-forest-green" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepsToBeCarbon;