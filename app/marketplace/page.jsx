import Footer from "../../components/Footer";
import MarketplaceBlockchain from "../../components/MarketplaceBlockchain";
import Navbar from "../../components/Navbar";

const Marketplace = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <Navbar />

        <main className="relative flex-1">
          <MarketplaceBlockchain />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Marketplace;
