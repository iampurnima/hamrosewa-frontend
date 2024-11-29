import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ServiceList from "./components/ServiceList";
// import BookingForm from "./components/BookingForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ExploreServices from "./pages/Services";
import ServiceProviderPage from "./pages/Provider";
import LanguageSelector from "./pages/Selector";
import "./App.css";

const App = () => {
    return (
      <Router>
        <div className="app">
          {/* Navbar Component */}
          <Navbar />
  
          {/* Main Content */}
          <main className="main-content">
            <Routes>
              {/* Define Routes for different pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ExploreServices />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/provider" element={<ServiceProviderPage />} />
              <Route path="/languages" element={<LanguageSelector />} />
            </Routes>
          </main>
  
          {/* Footer Component */}
          <Footer />
        </div>
      </Router>
    );
  };
  
  export default App;