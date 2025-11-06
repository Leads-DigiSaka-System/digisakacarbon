import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Contact = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <Navbar />

        <main className="relative flex-1">
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
