
import React, { useState } from "react";
// import axios from "axios"
import "./Provider.css";

const BecomeProvider = () => {
  const [serviceDetails, setServiceDetails] = useState({
    name: "",
    service: "",
    location: "",
    pricing: "",
    availability: "",
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setServiceDetails({
      ...serviceDetails,
      [name]: value,
    });
  };

  const handleRegister = () => {
    if (
      serviceDetails.name &&
      serviceDetails.service &&
      serviceDetails.location &&
      serviceDetails.pricing &&
      serviceDetails.availability
    ) {
      setIsRegistered(true);
    } else {
      alert("Please fill out all fields to register.");
    }
  };

  return (
    <div className="become-provider">
      <h1>Become a Service Provider</h1>
      {!isRegistered ? (
        <div className="register-section">
          <h2>Register Your Service</h2>
          <form className="provider-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={serviceDetails.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="service"
              placeholder="Service (e.g., Plumber)"
              value={serviceDetails.service}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="location"
              placeholder="Location (e.g., Kathmandu)"
              value={serviceDetails.location}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="pricing"
              placeholder="Pricing (e.g., $30/hour)"
              value={serviceDetails.pricing}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="availability"
              placeholder="Availability (e.g., Mon-Fri, 9 AM - 5 PM)"
              value={serviceDetails.availability}
              onChange={handleInputChange}
            />
            <button type="button" className="btn-register" onClick={handleRegister}>
              Register Your Service
            </button>
          </form>
        </div>
      ) : (
        <div className="provider-dashboard">
          <h2>Welcome, {serviceDetails.name}!</h2>
          <p>Service: {serviceDetails.service}</p>
          <p>Location: {serviceDetails.location}</p>
          <p>Pricing: {serviceDetails.pricing}</p>
          <p>Availability: {serviceDetails.availability}</p>

          <div className="business-growth">
            <h3>Grow Your Business</h3>
            <p>Gain more visibility, manage bookings, and promote your profile with paid features.</p>
            <button className="btn-promote">Promote Your Profile</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BecomeProvider;


// const ServiceProviderPage = () => {
//   const [providers, setProviders] = useState([]);
//   const [newProvider, setNewProvider] = useState({
//     user: "", // You will need to handle this with a dropdown or user selection
//     bio: "",
//     location: "",
//     services: [], // Add service category IDs
//     verified: false,
//     profile_picture: null, // For file upload
//     ratings: 0.0,
//   });

//   // Fetch data
//   const fetchProviders = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:8000/service-providers/");
//       setProviders(response.data);
//     } catch (error) {
//       console.error("Error fetching service providers:", error);
//     }
//   };

//   // Post data
//   const createProvider = async () => {
//     const formData = new FormData();
//     formData.append("user", newProvider.user);
//     formData.append("bio", newProvider.bio);
//     formData.append("location", newProvider.location);
//     formData.append("services", JSON.stringify(newProvider.services));
//     formData.append("verified", newProvider.verified);
//     formData.append("ratings", newProvider.ratings);
//     if (newProvider.profile_picture) {
//       formData.append("profile_picture", newProvider.profile_picture);
//     }

//     try {
//       await axios.post("http://127.0.0.1:8000/service-providers/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       fetchProviders(); // Refresh the list after creating
//     } catch (error) {
//       console.error("Error creating service provider:", error);
//     }
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createProvider();
//   };

//   // Fetch providers on component mount
//   useEffect(() => {
//     fetchProviders();
//   }, []);

//   return (
//     <div className="service-provider-page">
//       <h1>Service Providers</h1>

//       <div className="providers-list">
//         <h2>List of Providers</h2>
//         {providers.map((provider) => (
//           <div key={provider.id} className="provider-card">
//             <h3>{provider.user}</h3>
//             <p>Bio: {provider.bio}</p>
//             <p>Location: {provider.location}</p>
//             <p>Verified: {provider.verified ? "Yes" : "No"}</p>
//             <p>Rating: {provider.ratings}</p>
//             {provider.profile_picture && (
//               <img src={provider.profile_picture} alt="Profile" />
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="provider-form">
//         <h2>Add a New Provider</h2>
//         <form onSubmit={handleSubmit}>
//           <label>
//             Bio:
//             <textarea
//               value={newProvider.bio}
//               onChange={(e) => setNewProvider({ ...newProvider, bio: e.target.value })}
//             />
//           </label>
//           <label>
//             Location:
//             <input
//               type="text"
//               value={newProvider.location}
//               onChange={(e) => setNewProvider({ ...newProvider, location: e.target.value })}
//             />
//           </label>
//           <label>
//             Profile Picture:
//             <input
//               type="file"
//               onChange={(e) =>
//                 setNewProvider({ ...newProvider, profile_picture: e.target.files[0] })
//               }
//             />
//           </label>
//           <button type="submit">Add Provider</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ServiceProviderPage;
