function Footer() {
    return (
      <footer
        style={{
          backgroundColor: '#f1f1f1',
          padding: '20px',
          textAlign: 'center',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          fontFamily: 'Roboto, sans-serif',
          color: '#5f6368',
          maxWidth:"800px",
          margin:"20px auto"
        }}
      >
        <p style={{ margin: '0', fontSize: '0.875rem' }}>
          &copy; {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    );
  }
  
  export default Footer;
  