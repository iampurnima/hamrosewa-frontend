import React, { useState } from "react";
import "./language.css";

const LanguageSelector = () => {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: {
      heading: "Welcome to Our Website",
      description: "Explore our services and find what you need.",
      button: "Explore Services",
    },
    np: {
      heading: "हाम्रो वेबसाइटमा स्वागत छ",
      description: "हाम्रा सेवाहरू अन्वेषण गर्नुहोस् र तपाईंलाई आवश्यक पर्ने कुरा पत्ता लगाउनुहोस्।",
      button: "सेवाहरू अन्वेषण गर्नुहोस्",
    },
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  const content = translations[language];

  return (
    <div className="language-selector">
      <div className="language-options">
        <h2>Select Your Language</h2>
        <button
          className={`lang-button ${language === "en" ? "active" : ""}`}
          onClick={() => handleLanguageChange("en")}
        >
          English
        </button>
        <button
          className={`lang-button ${language === "np" ? "active" : ""}`}
          onClick={() => handleLanguageChange("np")}
        >
          नेपाली
        </button>
      </div>

      <div className="content">
        <h1>{content.heading}</h1>
        <p>{content.description}</p>
        <button className="btn-explore">{content.button}</button>
      </div>
    </div>
  );
};

export default LanguageSelector;
