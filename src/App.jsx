import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ApplicationServices from "./pages/ApplicationServices";
import AiMl from "./pages/AiMl";
import DataManagement from "./pages/DataManagement";
import Enterprise from "./pages/Enterprise";
import TestAutomation from "./pages/TestAutomation";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
