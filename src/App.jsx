import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/services/Home";
import ApplicationServices from "./components/services/ApplicationServices";
import AiMl from "./components/services/AiMl";
import DataManagement from "./components/services/DataManagement";
import Enterprise from "./components/services/Enterprise";
import TestAutomation from "./components/services/TestAutomation";
import FullStackDevelopment from "./components/services/FullStackDevelopment";
import Mobility from "./components/services/Mobility"
import DigitalMarketing from "./components/services/DigitalMarketing"
import Intranet from "./components/services/Intranet"
import ProductEngineering from "./components/services/ProductEngineering"
import DomainSpecific from "./components/services/DomainSpecific"
import IntelligentRPA from "./components/services/IntelligentRPA"
import Development from "./components/services/Development"
import RealTimeAI from "./components/services/RealTimeAI"
import DigitalAIConsulting from "./components/services/DigitalAIConsulting"
import IOT from "./components/services/IOT"
import BigDataSolutions from "./components/services/BigDataSolutions"
import DataLakesDesign from "./components/services/DataLakesDesign"
import DataScience from "./components/services/DataScience"
import BusinessIntelligence from "./components/services/BusinessIntelligence"
import NetworkOperationsCenter from "./components/services/NetworkOperationsCenter"
import DataCenterOperations from "./components/services/DataCenterOperations"
import CybersecurityThreatManagement from "./components/services/CybersecurityThreatManagement"
import CloudManagement from "./components/services/CloudManagement"
import DevOpsConsulting from "./components/services/DevOpsConsulting"

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
