import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
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
      {formData.name && <p className="entered-name">Hii {formData.name}</p>}
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

        <button type="submit" className="registration-button">Register</button>
      </form>
        
      </div>
  );
}
