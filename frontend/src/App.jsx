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
// Healthcare
import Healthcare from "./components/Industries/Healthcare/Healthcare";
import Payer from "./components/Industries/Healthcare/Payer";
import Provider from "./components/Industries/Healthcare/Provider";
import PharmaAndLifeSciences from "./components/Industries/Healthcare/PharmaAndLifeSciences";

// Travel & Hospitality
import TravelAndHospitality from "./components/Industries/TravelAndHospitality/TravelAndHospitality";
import Airline from "./components/Industries/TravelAndHospitality/Airline";
import TravelManagement from "./components/Industries/TravelAndHospitality/TravelManagementCompanies";
import Hospitality from "./components/Industries/TravelAndHospitality/Hospitality";

// Other Industries
import BankingAndFinance from "./components/Industries/BankingAndFinance";
import Insurance from "./components/Industries/Insurance";
import ProfessionalServices from "./components/Industries/ProfessionalServices";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/life_at_shree_partners" element={<LifeAtShreePartners />} />
        <Route path="/insights/brochures" element={<Brochures />} />
        <Route path="/insights/blogs" element={<Blogs />} />
        <Route path="/insights/blog1" element={<Blog1 />} />
        <Route path="/insights/blog2" element={<Blog2 />} />
        <Route path="/insights/blog3" element={<Blog3 />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/mission-vision" element={<MissionAndVision />} />
        <Route path="/alliances" element={<Alliances />} />
        <Route path="/leadership" element={<Leadership />} />
        {/* Industries Main Pages */}
<Route path="/industries/banking-finance" element={<BankingAndFinance />} />
<Route path="/industries/insurance" element={<Insurance />} />
<Route path="/industries/professional-services" element={<ProfessionalServices />} />

{/* Travel & Hospitality */}
<Route path="/industries/travel-hospitality" element={<TravelAndHospitality />} />
<Route path="/industries/airline" element={<Airline />} />
<Route path="/industries/travel-management" element={<TravelManagement />} />
<Route path="/industries/hospitality" element={<Hospitality />} />

{/* Healthcare */}
<Route path="/industries/healthcare" element={<Healthcare />} />
<Route path="/industries/payer" element={<Payer />} />
<Route path="/industries/provider" element={<Provider />} />
<Route path="/industries/pharma" element={<PharmaAndLifeSciences />} />
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/cookie_policy" element={<Cookie_Policy />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;