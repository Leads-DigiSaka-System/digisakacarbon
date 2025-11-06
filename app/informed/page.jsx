"use client";
import CarbonCredits from "../../components/CarbonCredits";
import CarbonEcosystem from "../../components/CarbonEcosystem";
import ClimateSmartAgriculture from "../../components/ClimateSmartAgriculture";
import FarmerBenefits from "../../components/FarmerBenefits";
import Footer from "../../components/Footer";
import LowCarbonMarket from "../../components/LowCarbonMarket";
import Navbar from "../../components/Navbar";

const Services = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <Navbar />

        <main className="relative flex-1">
          <section className="relative min-h-screen bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15 overflow-hidden">
            <ClimateSmartAgriculture />
            <CarbonCredits />
            <FarmerBenefits />
            <CarbonEcosystem />
            <LowCarbonMarket />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Services;
