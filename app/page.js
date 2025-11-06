"use client";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Partnership from "../components/Partnership";
import Stats from "../components/Stats";
import Solution from "../components/Solution";
import ValueProposition from "../components/ValueProposition";
import FeaturedProjects from "../components/FeaturedProjects";
import FeaturedRecognition from "../components/FeaturedRecognition";
import StepsToBeCarbon from "../components/StepsToBeCarbon";


export const AnimatedSection = ({ children, className = "" }) => {
  return <div className={className}>{children}</div>;
};

const page = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />

      <div className="relative flex flex-col flex-1">

        <div className="fixed inset-0 pointer-events-none -z-10">

          <div className="absolute w-48 h-48 rounded-full top-20 left-4 sm:w-64 sm:h-64 bg-gradient-to-r from-light-green/10 via-forest-green/5 to-golden-yellow/5 "></div>
          <div className="absolute w-64 h-64 rounded-full bottom-20 right-4 sm:w-72 sm:h-72 bg-gradient-to-r from-golden-yellow/10 via-yellow-400/5 to-forest-green/5 "></div>

        </div>

        <main className="relative flex-1">
          <Hero />
          <Stats />
          <StepsToBeCarbon />
          <Partnership />
          <Solution />
          <ValueProposition />
          <FeaturedProjects />
          <FeaturedRecognition />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default page;
