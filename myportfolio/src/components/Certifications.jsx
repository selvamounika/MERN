import React from "react";

function Certifications() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "40px",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "white",
    minHeight: "100vh",
  };

  const cardStyle = {
    width: "300px",
    padding: "20px",
    background: "white",
    color: "#333",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    position: "relative",
  };

  const titleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "12px",
    color: "#2a5298",
  };

  const yearStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#777",
    marginBottom: "10px",
  };

  const iconStyle = {
    position: "absolute",
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "50px",
    height: "50px",
    background: "#2a5298",
    color: "white",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={containerStyle}>
      {/* Achievement 1 */}
      <div style={cardStyle}>
        <div style={iconStyle}>🌟</div>
        <h3 style={titleStyle}>350+ Problems Solved on LeetCode</h3>
        <p style={yearStyle}>2024</p>
        <p>Demonstrated strong problem-solving and algorithmic thinking by solving over 350 problems on LeetCode.</p>
      </div>

      {/* Achievement 2 */}
      <div style={cardStyle}>
        <div style={iconStyle}>🏆</div>
        <h3 style={titleStyle}>2nd Place - Internal Coding Contest</h3>
        <p style={yearStyle}>2024</p>
        <p>Secured 2nd place in the "Wake Up and Code" contest, showcasing exceptional coding skills and speed.</p>
      </div>

      {/* Achievement 3 */}
      <div style={cardStyle}>
        <div style={iconStyle}>📱</div>
        <h3 style={titleStyle}>2nd Place - Project Expo</h3>
        <p style={yearStyle}>2024</p>
        <p>Created a college event aggregator app, earning recognition for innovation and teamwork.</p>
      </div>

      {/* Achievement 4 */}
      <div style={cardStyle}>
        <div style={iconStyle}>💡</div>
        <h3 style={titleStyle}>Top 20 - Ideathon</h3>
        <p style={yearStyle}>2024</p>
        <p>Shortlisted in the Top 20 out of 160+ teams at the Ideathon organized by Delhi Technological University.</p>
      </div>

      {/* Achievement 5 */}
      <div style={cardStyle}>
        <div style={iconStyle}>🎓</div>
        <h3 style={titleStyle}>Certificate in Advanced English</h3>
        <p style={yearStyle}>2023</p>
        <p>Achieved a C1 Level in Advanced English by scoring 159 out of 210 in a test offered by Cambridge University.</p>
      </div>

      {/* Achievement 6 */}
      <div style={cardStyle}>
        <div style={iconStyle}>🏅</div>
        <h3 style={titleStyle}>Disciplinary Awards</h3>
        <p style={yearStyle}>2023</p>
        <p>Received 2 disciplinary awards at SSVM World School for exceptional behavior and conduct.</p>
      </div>
    </div>
  );
}

export default Certifications;
