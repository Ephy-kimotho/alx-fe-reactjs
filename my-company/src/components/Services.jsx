import Footer from "./Footer";
import Navbar from "./Navbar";

function Services() {
  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "20px",
          maxWidth: "800px",
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
          }}
        >
          Our Services
        </h1>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: "0",
          }}
        >
          <li
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.25rem",
              color: "#5f6368",
              lineHeight: "1.6",
              padding: "10px 0",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            Technology Consulting
          </li>
          <li
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.25rem",
              color: "#5f6368",
              lineHeight: "1.6",
              padding: "10px 0",
              borderBottom: "1px solid #e0e0e0",
            }}
          >
            Market Analysis
          </li>
          <li
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.25rem",
              color: "#5f6368",
              lineHeight: "1.6",
              padding: "10px 0",
            }}
          >
            Product Development
          </li>
        </ul>
      </div>
      <Footer/>
    </>
  );
}

export default Services;
