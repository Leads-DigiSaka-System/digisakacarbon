import BlockchainInfo from "../../components/BlockchainInfo";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Blockchain = () => {
  return (
    <>
      <div className="relative min-h-screen bg-white">
        <Navbar />

        <main className="relative flex-1">
          <BlockchainInfo />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blockchain;
