import React, { useState } from "react";
import "./Services.css";

const ExploreServices = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [review, setReview] = useState("");
  const [ratings, setRatings] = useState(0);

  // Sample services
  const services = [
    { id: 1, name: "Plumber", location: "Kathmandu", provider: "Raj" },
    { id: 2, name: "Home Tutor", location: "Pokhara", provider: "Sita" },
    { id: 3, name: "Electrician", location: "Biratnagar", provider: "Krishna" },
    // Add more services as necessary
  ];

  const handleSearch = () => {
    console.log(`Searching for: ${searchQuery}`);
  };

  const handleBook = (service) => {
    setSelectedService(service);
  };

  const handleReview = () => {
    console.log(`Review for ${selectedService.provider}: ${review}, Rating: ${ratings}`);
    setReview("");
    setRatings(0);
  };

  return (
    <div className="explore-services">
      <h1>Explore Services</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search for services (e.g., Plumber in Kathmandu)"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="btn-search" onClick={handleSearch}>Search</button>
      </div>

      <div className="service-list">
        <h2>Available Services</h2>
        {services
          .filter((service) => service.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((service) => (
            <div className="service-card" key={service.id}>
              <h3>{service.name} - {service.location}</h3>
              <p>Provider: {service.provider}</p>
              <button onClick={() => handleBook(service)} className="btn-book">
                Book This Service
              </button>
            </div>
          ))}
      </div>

      {selectedService && (
        <div className="booking-section">
          <h2>Book Service: {selectedService.name}</h2>
          <p>Provider: {selectedService.provider}</p>
          <div className="rating-section">
            <h3>Rate the Service</h3>
            <input
              type="number"
              value={ratings}
              onChange={(e) => setRatings(Math.min(5, Math.max(0, e.target.value)))}
              min="0"
              max="5"
              placeholder="Rating (0-5)"
            />
          </div>
          <div className="review-section">
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Write your review here..."
            />
            <button className="btn-review" onClick={handleReview}>
              Submit Review
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExploreServices;
