import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
    const [booking, setBooking] = useState({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setBooking({ ...booking, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/bookings/", booking)
            .then(() => {
                setSuccess(true);
                alert("Booking Successful");
            })
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="user" onChange={handleChange} placeholder="User ID" />
            <input name="provider" onChange={handleChange} placeholder="Provider ID" />
            <input name="service" onChange={handleChange} placeholder="Service ID" />
            <button type="submit">Book</button>
            {success && <p>Booking was successful!</p>}
        </form>
    );
};

export default BookingForm;
