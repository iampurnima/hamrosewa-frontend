import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <img src={service.image} alt={service.title} className="service-image" />
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <button className="service-btn">Learn More</button>
    </div>
  );
};

export default ServiceCard;
