"use client";
import Header from "./Blockchain/Header";
import SupplyChainActors from "./Blockchain/SupplyChainActors";
import TechnichalArchitecture from "./Blockchain/TechnichalArchitecture";

export default function BlockchainInfo() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15 overflow-hidden">
      <div className="container relative z-10 px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-20 md:py-24 lg:py-32">
        <Header />

        {/* Supply Chain Actors Section */}
        <SupplyChainActors />

        {/* Technical Architecture Section */}
        <TechnichalArchitecture />

        {/* QR Code Interface Demo Section */}
        {/* <QRCode /> */}

        {/* Benefits & Impact Section */}
        {/* <BenefitsImpact /> */}
      </div>
    </section>
  );
}
