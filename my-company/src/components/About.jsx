import Navbar from "./Navbar";
import Footer from "./Footer"

function About() {
    return (
      <>
      <Navbar/>
      <div
        style={{
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'left',
        }}
      >
        <h1
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: '500',
            fontSize: '2.5rem',
            color: '#1a73e8',
            marginBottom: '20px',
          }}
        >
          About Us
        </h1>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.25rem',
            color: '#5f6368',
            lineHeight: '1.6',
          }}
        >
          Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy.
        </p>
      </div>
      <Footer/>
      </>
    );
  }
  
  export default About;
  