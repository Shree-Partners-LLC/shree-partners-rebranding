import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ApplicationServices from "./pages/ApplicationServices";
import AiMl from "./pages/AiMl";
import DataManagement from "./pages/DataManagement";
import Enterprise from "./pages/Enterprise";
import TestAutomation from "./pages/TestAutomation";
import FullStackDevelopment from "./pages/FullStackDevelopment";
import Mobility from "./pages/Mobility"
import DigitalMarketing from "./pages/DigitalMarketing"
import Intranet from "./pages/Intranet"
import ProductEngineering from "./pages/ProductEngineering"
import DomainSpecific from "./pages/DomainSpecific"
import IntelligentRPA from "./pages/IntelligentRPA"
import Development from "./pages/Development"
import RealTimeAI from "./pages/RealTimeAI"
import DigitalAIConsulting from "./pages/DigitalAIConsulting"
import IOT from "./pages/IOT"
import BigDataSolutions from "./pages/BigDataSolutions"
import DataLakesDesign from "./pages/DataLakesDesign"
import DataScience from "./pages/DataScience"
import BusinessIntelligence from "./pages/BusinessIntelligence"
import NetworkOperationsCenter from "./pages/NetworkOperationsCenter"
import DataCenterOperations from "./pages/DataCenterOperations"
import CybersecurityThreatManagement from "./pages/CybersecurityThreatManagement"
import CloudManagement from "./pages/CloudManagement"
import DevOpsConsulting from "./pages/DevOpsConsulting"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/application-services" element={<ApplicationServices />} />

        <Route path="/ai-ml" element={<AiMl />} />

        <Route path="/data-management" element={<DataManagement />} />

        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/test-automation" element={<TestAutomation />} />
        <Route
          path="/full-stack-development"
          element={<FullStackDevelopment />}
        />
         <Route path="/mobility" element={<Mobility/>} />
         <Route path="/digital-marketing-collaboration" element={<DigitalMarketing/>}/>
         <Route path="/intranet-solutions" element={<Intranet/>}/>
         
         <Route path="/product-engineering" element={<ProductEngineering/>}/>
        
         <Route path="/domain-specific-nlp" element={<DomainSpecific/>}/>
         <Route path="/intelligent-rpa" element={<IntelligentRPA/>}/>
         <Route path="/machine-learning-deep-learning" element={<Development/>}/>
         <Route path="/real-time-ai-cloud-ivr" element={<RealTimeAI/>}/>
          <Route path="/digital-ai-consulting" element={<DigitalAIConsulting/>}/>
          <Route path="/iot-solutions" element={<IOT/>}/>
          <Route path="/big-data-solutions" element={<BigDataSolutions/>}/>
          <Route path="/data-lakes" element={<DataLakesDesign/>}/>
          <Route path="/data-science" element={<DataScience/>}/>
          <Route path="/business-intelligence" element={<BusinessIntelligence/>}/>
          <Route path="/network-operations" element={<NetworkOperationsCenter/>}/>
          <Route path="/data-center-operations" element={<DataCenterOperations/>}/>
          <Route path="/cybersecurity" element={<CybersecurityThreatManagement/>}/>
         <Route path="/cloud-management" element={<CloudManagement/>}/>
         <Route path="/devops" element={<DevOpsConsulting/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
