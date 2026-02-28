import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    city: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
    console.log(formData);
  };

  return (
    <div className="registration-container">
      <h2 className="registration-title">Registration Form</h2>

      {formData.city && (
        <p className="entered-name">Your city is  {formData.city} </p>
      )}

      <form onSubmit={handleSubmit} className="registration-form">

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          className="registration-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="registration-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="registration-input"
        />

        <div>
          <select
            name="city"
            value={formData.city}
            className="input"
            onChange={handleChange}
          >
            <option value="">Select your city</option>
            <option value="loni">loni</option>
            <option value="nagpur">nagpur</option>
            <option value="pune">pune</option>
            <option value="mumbai">mumbai</option>
            <option value="chennai">chennai</option>
          </select>
        </div>

        <button type="submit" className="registration-button">
          Register
        </button>

      </form>

    </div>
  );
}