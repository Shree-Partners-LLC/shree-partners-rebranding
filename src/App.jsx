import {Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import DiscoveryCall from "./pages/DiscoveryCall";
import TravelHospitality from "./pages/TravelHospitality";
import Banking from "./pages/Banking";
import Healthcare from "./pages/Healthcare";
import Logistics from "./pages/Logistics";
import InsuranceClaims from "./pages/InsuranceClaims";
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discovery-call" element={<DiscoveryCall />} />
      <Route path="/travel-hospitality" element={<TravelHospitality />} />
      <Route path="/insurance-claims" element={<InsuranceClaims />} />
      <Route path="/banking" element={<Banking />} />
      <Route path="/healthcare" element={<Healthcare />} />
      <Route path="/logistics" element={<Logistics />} />
    </Routes>
    <Footer/>
    </>
  );
}
export default App;
