import React from "react";

function Achievements() {
  const sectionStyle = {
    padding: "200px",
    backgroundColor: "#001d3d",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#00ff88",
  };

  const cardStyle = {
    background: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    padding: "40px",
    width: "500px",
    height:"50px",
    margin: "10px auto",
    transition: "transform 0.3s, box-shadow 0.3s",
  };

  const cardTextStyle = {
    fontSize: "1rem",
    color: "#555",
  };

  return (
    <section id="achievements" style={sectionStyle}>
      <h2 style={headingStyle}>Achievements</h2>
      <div style={cardStyle}>
        <p style={cardTextStyle}>
        Solved 350+ problems in LEETCODE 2024
        </p>
      </div>
      <div style={cardStyle}>
        <p style={cardTextStyle}>
        Secured 2nd place in an Internal Coding Contest-Wake up and Code 2024

        </p>
      </div>
      <div style={cardStyle}>
        <p style={cardTextStyle}>
        Secured 2nd place in Project Expo by creating a college event aggregator app 2024
        </p>
      </div>
      <div style={cardStyle}>
        <p style={cardTextStyle}>
        Ideathon: Shortlisted in Top 20 out of 160+teams organised by Delhi Technological University. 2024
        </p>
      </div>
      <div style={cardStyle}>
        <p style={cardTextStyle}>
        Certificate in Advanced English: Scored 159 out 210 C1 Level offered by Cambridge University. 2023
        </p>
      </div>
      <div style={cardStyle}>
        <p style={cardTextStyle}>
        Disciplinary Award: Bagged 2 disciplinary awards at SSVM World School. 2023
        </p>
      </div>
    </section>
  );
}

export default Achievements;
