import DigisakaPlatform from "../../components/DigisakaPlatform";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import FrameworkBehind from "../../components/FrameworkBehind";
import Navbar from "../../components/Navbar";
import InfographicsSection from "../../components/InfographicsSection";

const Framework = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <Navbar />

        <main className="relative flex-1 bg-gradient-to-br from-white via-[#FFF8E1]/40 to-[#81C784]/15 overflow-hidden">
          <FrameworkBehind />
          <Features />
          <DigisakaPlatform />
          <InfographicsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Framework;
