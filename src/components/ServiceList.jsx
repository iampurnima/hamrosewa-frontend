import React from "react";
import "./ServiceList.css";

const services = [
  { id: 1, name: "Electrician", description: "Fix electrical issues quickly." },
  { id: 2, name: "Plumber", description: "Get plumbing tasks done efficiently." },
  { id: 3, name: "Cleaner", description: "Professional cleaning services." },
];

const ServiceList = () => {
  return (
    <div className="service-list">
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <h3>{service.name}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
