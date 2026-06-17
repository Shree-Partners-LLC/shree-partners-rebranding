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
        <Route path="/privacy_policy" element={<Privacy_Policy />} />
        <Route path="/cookie_policy" element={<Cookie_Policy />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;