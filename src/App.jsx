import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import RightsNavigator from "./pages/RightsNavigator.jsx";
import RTIAssistant from "./pages/RTIAssistant.jsx";
import SchemeFinder from "./pages/SchemeFinder.jsx";

// This is the main App component.
// It shows the Navbar and Footer on every page,
// and switches the middle content based on the URL.
function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rights-navigator" element={<RightsNavigator />} />
        <Route path="/rti-assistant" element={<RTIAssistant />} />
        <Route path="/scheme-finder" element={<SchemeFinder />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
