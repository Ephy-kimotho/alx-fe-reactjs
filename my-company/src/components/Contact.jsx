import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "20px",
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          textAlign: "left",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto, sans-serif",
            fontWeight: "500",
            fontSize: "2.5rem",
            color: "#1a73e8",
            marginBottom: "20px",
            textAlign:"center"
          }}
        >
          Contact Us
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              display: "block",
              width: "80%",
              padding: "10px",
              margin: "10px auto",
              borderRadius: "4px",
              border: "1px solid #dcdcdc",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1rem",
            }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              display: "block",
              width: "80%",
              padding: "10px",
              margin: "10px auto",
              borderRadius: "4px",
              border: "1px solid #dcdcdc",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1rem",
            }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              display: "block",
              width: "80%",
              padding: "10px",
              margin: "10px auto",
              borderRadius: "4px",
              border: "1px solid #dcdcdc",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1rem",
            }}
          />
          <button
            type="submit"
            style={{
              display:"block",
              backgroundColor: "#1a73e8",
              color: "#ffffff",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "Roboto, sans-serif",
              fontSize: "1rem",
              margin: "10px auto",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
