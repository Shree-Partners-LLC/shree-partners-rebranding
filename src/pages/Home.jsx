import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import ProofBand from "../components/ProofBand";
import HowWeWork from "../components/HowWeWork";
import Industries from "../components/Industries";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <ProofBand />
      <HowWeWork />
      <Industries />
      <About />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;