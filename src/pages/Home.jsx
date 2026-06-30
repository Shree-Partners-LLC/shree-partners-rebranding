import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import AgenticFlow from "../components/AgenticFlow";
import FeatureBand from "../components/FeatureBand";
import Industries from "../components/Industries";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <AgenticFlow />
      <FeatureBand />
      <Industries />
      <CTA />
    </>
  );
}

export default Home;