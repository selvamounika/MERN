import React, { useState } from "react";

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");
  const [expandedSkill, setExpandedSkill] = useState(null); // Track which skill is expanded

  const containerStyle = {
    padding: "50px",
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    color: "white",
    textAlign: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    marginBottom: "30px",
    textShadow: "2px 2px 6px rgba(0, 0, 0, 0.5)",
  };

  const tabContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "40px",
  };

  const tabStyle = {
    padding: "20px 25px",
    margin: "0 10px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: "30px",
    border: "2px solid white",
    color: "white",
    transition: "all 0.3s ease",
  };

  const activeTabStyle = {
    ...tabStyle,
    background: "#32CD32",
    color: "#000",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    marginTop: "20px",
  };

  const cardStyle = {
    position: "relative",
    background: "linear-gradient(135deg, #4ca1af, #c4e0e5)",
    color: "#000",
    borderRadius: "15px",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.3)",
    overflow: "hidden",
    padding: "40px",
    textAlign: "center",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const hoverEffect = {
    transform: "scale(1.05)",
    boxShadow: "0 12px 20px rgba(0, 0, 0, 0.4)",
  };

  const cardTitleStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const detailsStyle = {
    marginTop: "10px",
    fontSize: "16px",
    textAlign: "left",
    lineHeight: "1.6",
    background: "#ffffff",
    padding: "10px",
    borderRadius: "8px",
    
    color: "#000",
  };

  const skills = {
    technical: [
      { name: "Languages", icon: "💻", details: ["C", "C++", "C#", "Python", "JavaScript", "HTML", "CSS"] },
      { name: "Core", icon: "🧩", details: ["Data Structures and Algorithms"] },
      { name: "Tools", icon: "🛠️", details: ["Unity", "Blender", "Flutter", "Figma", "GitHub", "Canva", "VScode"] },
    ],
    nonTechnical: [
      { name: "Creative Thinking", icon: "🎨", details: ["Mandala artist", "Videography", "Reel-making"] },
      { name: "Team Collaboration", icon: "🤝", details: ["Efficient team player", "Leadership skills"] },
      { name: "Time Management", icon: "⏳", details: ["Highly organized", "Deadline-focused"] },
      { name: "Problem-Solving", icon: "🧠", details: ["Logical thinker", "Innovative solutions"] },
    ],
  };

  const toggleSkillDetails = (index) => {
    setExpandedSkill(expandedSkill === index ? null : index);
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Skills</h2>
      <div style={tabContainerStyle}>
        <div
          style={activeTab === "technical" ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab("technical")}
        >
          Technical Skills
        </div>
        <div
          style={activeTab === "nonTechnical" ? activeTabStyle : tabStyle}
          onClick={() => setActiveTab("nonTechnical")}
        >
          Non-Technical Skills
        </div>
      </div>

      <div style={gridStyle}>
        {skills[activeTab].map((skill, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => (e.currentTarget.style = { ...cardStyle, ...hoverEffect })}
            onMouseLeave={(e) => (e.currentTarget.style = cardStyle)}
            onClick={() => toggleSkillDetails(index)}
          >
            <div style={cardTitleStyle}>
              {skill.icon} {skill.name}
            </div>
            {expandedSkill === index && (
              <div style={detailsStyle}>
                {Array.isArray(skill.details) ? (
                  <ul>
                    {skill.details.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{skill.details}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
