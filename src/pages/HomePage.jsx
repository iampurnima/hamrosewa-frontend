import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./HomePage.css";
import heroImage from "../assets/sewalogo.png"; // Add a hero image to your project
import { testApi } from "../constants/apiRoutes";

const HomePage = () => {
  const navigate = useNavigate();
  const [dummydata, setDummydata] = useState(null); // Correctly initialize state with parentheses

  const fetchData = async () => {
    try {
      const response = await axios.get(testApi); // Use testApi as a string directly
      setDummydata(response.data); // Save the response data to state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Hamro Sewa</h1>
          <p>Your one-stop platform for trusted local services!</p>
          <div className="cta-buttons">
            <button className="primary" onClick={() => navigate("/languages")}>
              Language
            </button>
            <button
              className="cta-primary"
              onClick={() => navigate("/Services")}
            >
              Explore Services
            </button>
            <button
              className="cta-secondary"
              onClick={() => navigate("/Provider")}
            >
              Become a Provider
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Connecting people with services" />
        </div>
      </section>

      <section className="features">
        <h2>Why Choose Hamro Sewa?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Trusted Providers</h3>
            <p>Connect with verified service providers you can rely on.</p>
          </div>
          <div className="feature-item">
            <h3>Wide Range of Services</h3>
            <p>From household help to medical aid, find it all in one place.</p>
          </div>
          <div className="feature-item">
            <h3>Accessible Everywhere</h3>
            <p>Catering to urban and rural areas with equal dedication.</p>
          </div>
        </div>
      </section>

      <section className="api-data">
        <h2>Test API Response</h2>
        {dummydata ? (
          <pre>{JSON.stringify(dummydata, null, 2)}</pre>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </div>
  );
};

export default HomePage;
