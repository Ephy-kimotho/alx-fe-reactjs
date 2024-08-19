import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
    return (
      <>
      <Navbar/>
      <div
        style={{
          padding: '20px',
          maxWidth: '800px',
          margin: '0 auto',
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
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
          Welcome to Our Company
        </h1>
        <p
          style={{
            fontFamily: 'Roboto, sans-serif',
            fontSize: '1.25rem',
            color: '#5f6368',
            lineHeight: '1.6',
          }}
        >
          We are dedicated to delivering excellence in all our services.
        </p>
      </div>
      <Footer/>
      </>
    );
  }
  
  export default Home;
  