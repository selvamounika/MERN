import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #001f3f, #4ca1af)",
    color: "#32CD32",
    padding: "100px",
    textAlign: "center",
     transition: "color 0.3s ease",
  };

  const headingStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    marginBottom: "20px",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const contactListStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0 0 30px",
    fontSize: "18px",
    lineHeight: "2.5",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  };

  const formStyle = {
    background: "white",
    color: "black",
    borderRadius: "10px",
    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)",
    padding: "50px",
    width: "100%",
    maxWidth: "500px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    color: "white",
    background: "#32CD32",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  };

  const buttonHoverStyle = {
    background: "#28a745",
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log("Message Sent:", formData);
    setFormData({ name: "", email: "", message: "" }); // Reset the form
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Get in Touch</h1>
      <ul style={contactListStyle}>
        <li>
          <span role="img" aria-label="phone">📞</span> Phone: 
          <a href="tel:+7539964915" style={linkStyle}> 7539964915</a>
        </li>
        <li>
          <span role="img" aria-label="email">📧</span> Email: 
          <a href="mailto:ksmounika84@gmail.com" style={linkStyle}> ksmounika84@gmail.com</a>
        </li>
        <li>
          <span role="img" aria-label="linkedin">🔗</span> LinkedIn: 
          <a href="https://www.linkedin.com/in/selvamounika-k-018ab1283/" style={linkStyle} target="_blank" rel="noopener noreferrer">
            Selvamounika K
          </a>
        </li>
        <li>
          <span role="img" aria-label="github">💻</span> GitHub: 
          <a href="https://github.com/selvamounika" style={linkStyle} target="_blank" rel="noopener noreferrer">
            Selvamounika GitHub
          </a>
        </li>
      </ul>

      <div style={formStyle}>
        {!formSubmitted ? (
          <>
            <h2 style={{ marginBottom: "20px" }}>Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                style={inputStyle}
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <input
                style={inputStyle}
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <textarea
                style={{ ...inputStyle, height: "100px" }}
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <button
                type="submit"
                style={buttonStyle}
                onMouseOver={(e) => (e.target.style.background = "#28a745")}
                onMouseOut={(e) => (e.target.style.background = "#32CD32")}
              >
                Send Message
              </button>
            </form>
          </>
        ) : (
          <h2>Thank you for your message! We'll get back to you soon.</h2>
        )}
      </div>
    </div>
  );
}

export default Contact;
