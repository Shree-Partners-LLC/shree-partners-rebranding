import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import AIML from "./components/AIML";
import GenerativeAI from "./components/GenerativeAI";
import Cloud from "./components/Cloud";
import Travel from "./components/Travel";
import Healthcare from "./components/Healthcare";
import FinancialServices from "./components/FinancialServices";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ai-ml" element={<AIML />} />
        <Route path="/generative-ai" element={<GenerativeAI />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;