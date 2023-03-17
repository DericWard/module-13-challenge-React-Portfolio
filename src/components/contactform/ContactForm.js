import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission
      const { name, email, message } = formData;
      const mailtoUrl = `mailto:dericwardl@hotmail.com?subject=New message from ${name}&body=${message}%0D%0A%0D%0AFrom:%20${email}`;
      window.location.href = mailtoUrl;

    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
  
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    );
  };
  
  export default ContactForm;
  