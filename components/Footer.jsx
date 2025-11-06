"use client";
import { useState } from "react";
import Image from "next/image";

const Footer = () => {
  // Partner logos state
  const [partners, setPartners] = useState([
    {
      src: "/images/serca.svg",
      alt: "SEARCA",
      name: "SEARCA",
      className: "",
    },
    {
      src: "/images/IRRI.svg",
      alt: "IRRI",
      name: "IRRI",
      className: "",
    },
    {
      src: "/images/sojitz.svg",
      alt: "Sojitz",
      name: "Sojitz",
      className: "",
    },
    {
      src: "/images/rynan.svg",
      alt: "Rynan",
      name: "Rynan",
      className: "bg-white",
    },
    {
      src: "/images/nia-logo.svg",
      alt: "NIA",
      name: "NIA",
      className: "",
    },
  ]);

  return (
    <footer className="relative overflow-hidden text-white bg-gradient-to-br from-dark-green via-forest-green to-dark-green">
      {/* Enhanced footer decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(129,199,132,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(255,179,0,0.15),transparent_50%)]"></div>

      <div className="container relative z-10 px-4 py-8 mx-auto md:px-6">
        {/* Partners label */}
        <h2 className="mb-4 text-xs font-semibold tracking-wider text-center uppercase text-green-100/90 sm:text-sm">
          In partnership with
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
          {partners.map((partner, idx) => (
            <div
              key={partner.name + idx}
              className="flex flex-col items-center justify-center w-16 h-20 sm:w-20 sm:h-24"
            >
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-lg overflow-hidden">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={48}
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="w-full mt-2 text-[10px] sm:text-xs font-medium text-green-100 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Copyright and Proudly Filipino */}
        <div className="flex flex-col items-center justify-center gap-4 pt-6 mt-6 text-center border-t sm:flex-row border-green-600/50">
          <p className="text-xs font-medium text-green-100 sm:text-sm">
            © 2025 LEADS GHG. All rights reserved.
          </p>
          <span className="hidden text-green-600 sm:block">•</span>
          <div className="flex items-center">
            <span className="text-xs font-medium text-green-100 sm:text-sm">
              Proudly Filipino 🇵🇭
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
