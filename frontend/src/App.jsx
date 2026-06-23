import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Privacy_Policy from "./components/Footer/Privacy_Policy";
import Cookie_Policy from "./components/Footer/Cookie_Policy";
import Sitemap from "./components/Footer/Sitemap";
import Contact from "./components/Contact/Contact";
import LifeAtShreePartners from "./components/Careers/LifeAtShreePartners";
import Brochures from "./components/Insights/Brochures";
import Blogs from "./components/Insights/Blogs";
import Blog1 from "./components/Insights/Blog1";
import Blog2 from "./components/Insights/Blog2";
import Blog3 from "./components/Insights/Blog3";
import AboutUs from "./components/About/About_Us";
import MissionAndVision from "./components/About/Mission_and_Vision";
import Alliances from "./components/About/Alliances";
import Leadership from "./components/About/Leadership";
import Healthcare from "./components/Industries/Healthcare/Healthcare";
import Payer from "./components/Industries/Healthcare/Payer";
import Provider from "./components/Industries/Healthcare/Provider";
import PharmaAndLifeSciences from "./components/Industries/Healthcare/PharmaAndLifeSciences";
import TravelAndHospitality from "./components/Industries/TravelAndHospitality/TravelAndHospitality";
import Airline from "./components/Industries/TravelAndHospitality/Airline";
import TravelManagement from "./components/Industries/TravelAndHospitality/TravelManagementCompanies";
import Hospitality from "./components/Industries/TravelAndHospitality/Hospitality";
import BankingAndFinance from "./components/Industries/BankingAndFinance";
import Insurance from "./components/Industries/Insurance";
import ProfessionalServices from "./components/Industries/ProfessionalServices";

import ApplicationServices from "./components/services/ApplicationServices";
import AiMl from "./components/services/AiMl";
import DataManagement from "./components/services/DataManagement";
import Enterprise from "./components/services/Enterprise";
import TestAutomation from "./components/services/TestAutomation";
import FullStackDevelopment from "./components/services/FullStackDevelopment";
import Mobility from "./components/services/Mobility";
import DigitalMarketing from "./components/services/DigitalMarketing";
import Intranet from "./components/services/Intranet";
import ProductEngineering from "./components/services/ProductEngineering";
import DomainSpecific from "./components/services/DomainSpecific";
import IntelligentRPA from "./components/services/IntelligentRPA";
import Development from "./components/services/Development";
import RealTimeAI from "./components/services/RealTimeAI";
import DigitalAIConsulting from "./components/services/DigitalAIConsulting";
import IOT from "./components/services/IOT";
import BigDataSolutions from "./components/services/BigDataSolutions";
import DataLakesDesign from "./components/services/DataLakesDesign";
import DataScience from "./components/services/DataScience";
import BusinessIntelligence from "./components/services/BusinessIntelligence";
import NetworkOperationsCenter from "./components/services/NetworkOperationsCenter";
import DataCenterOperations from "./components/services/DataCenterOperations";
import CybersecurityThreatManagement from "./components/services/CybersecurityThreatManagement";
import CloudManagement from "./components/services/CloudManagement";
import DevOpsConsulting from "./components/services/DevOpsConsulting";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/life_at_shree_partners"
          element={<LifeAtShreePartners />}
        />
        <Route path="/insights/brochures" element={<Brochures />} />
        <Route path="/insights/blogs" element={<Blogs />} />
        <Route path="/insights/blog1" element={<Blog1 />} />
        <Route path="/insights/blog2" element={<Blog2 />} />
        <Route path="/insights/blog3" element={<Blog3 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission-vision" element={<MissionAndVision />} />
        <Route path="/alliances" element={<Alliances />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route
          path="/industries/banking-finance"
          element={<BankingAndFinance />}
        />
        <Route path="/industries/insurance" element={<Insurance />} />
        <Route
          path="/industries/professional-services"
          element={<ProfessionalServices />}
        />
        <Route
          path="/industries/travel-hospitality"
          element={<TravelAndHospitality />}
        />
        <Route path="/industries/airline" element={<Airline />} />
        <Route
          path="/industries/travel-management"
          element={<TravelManagement />}
        />
        <Route path="/industries/hospitality" element={<Hospitality />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/payer" element={<Payer />} />
        <Route path="/industries/provider" element={<Provider />} />
        <Route path="/industries/pharma" element={<PharmaAndLifeSciences />} />
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/cookie_policy" element={<Cookie_Policy />} />
        <Route path="/sitemap" element={<Sitemap />} />

        <Route path="/application-services" element={<ApplicationServices />} />

        <Route path="/ai-ml" element={<AiMl />} />

        <Route path="/data-management" element={<DataManagement />} />

        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/test-automation" element={<TestAutomation />} />
        <Route
          path="/full-stack-development"
          element={<FullStackDevelopment />}
        />
        <Route path="/mobility" element={<Mobility />} />
        <Route
          path="/digital-marketing-collaboration"
          element={<DigitalMarketing />}
        />
        <Route path="/intranet-solutions" element={<Intranet />} />

        <Route path="/product-engineering" element={<ProductEngineering />} />

        <Route path="/domain-specific-nlp" element={<DomainSpecific />} />
        <Route path="/intelligent-rpa" element={<IntelligentRPA />} />
        <Route
          path="/machine-learning-deep-learning"
          element={<Development />}
        />
        <Route path="/real-time-ai-cloud-ivr" element={<RealTimeAI />} />
        <Route
          path="/digital-ai-consulting"
          element={<DigitalAIConsulting />}
        />
        <Route path="/iot-solutions" element={<IOT />} />
        <Route path="/big-data-solutions" element={<BigDataSolutions />} />
        <Route path="/data-lakes" element={<DataLakesDesign />} />
        <Route path="/data-science" element={<DataScience />} />
        <Route
          path="/business-intelligence"
          element={<BusinessIntelligence />}
        />
        <Route
          path="/network-operations"
          element={<NetworkOperationsCenter />}
        />
        <Route
          path="/data-center-operations"
          element={<DataCenterOperations />}
        />
        <Route
          path="/cybersecurity"
          element={<CybersecurityThreatManagement />}
        />
        <Route path="/cloud-management" element={<CloudManagement />} />
        <Route path="/devops" element={<DevOpsConsulting />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
