import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DiscoveryCall from "./pages/DiscoveryCall";
import TravelHospitality from "./pages/TravelHospitality";
import Banking from "./pages/Banking";
import Healthcare from "./pages/Healthcare";
import Logistics from "./pages/Logistics";
import InsuranceClaims from "./pages/InsuranceClaims";

import Payer from "./pages/Payer";
import Provider from "./pages/Provider";
import PharmaAndLifeSciences from "./pages/PharmaAndLifeSciences";

import Airline from "./pages/Airline";
import Hospitality from "./pages/Hospitality";
import TravelManagementCompanies from "./pages/TravelManagementCompanies";

import Agents from "./pages/Agents";
import AI from "./pages/AI";
import Audits from "./pages/Audits";
import Legacy from "./pages/Legacy";

import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/discovery-call" element={<DiscoveryCall />} />
        <Route path="/travel-hospitality" element={<TravelHospitality />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/insurance-claims" element={<InsuranceClaims />} />
        <Route path="/logistics" element={<Logistics />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/industries/healthcare/payer" element={<Payer />} />

        <Route path="/industries/healthcare/provider" element={<Provider />} />

        <Route
          path="/industries/healthcare/pharma"
          element={<PharmaAndLifeSciences />}
        />

        <Route path="/industries/airline" element={<Airline />} />

        <Route path="/industries/hospitality" element={<Hospitality />} />

        <Route
          path="/industries/travel-management"
          element={<TravelManagementCompanies />}
        />

        <Route path="/agents" element={<Agents />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/audits" element={<Audits />} />
        <Route path="/legacy" element={<Legacy />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
