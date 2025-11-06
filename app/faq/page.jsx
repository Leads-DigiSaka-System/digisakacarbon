import FAQSection from "../../components/FAQSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const FAQ = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <Navbar />

        <main className="relative flex-1">
          <FAQSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default FAQ;
