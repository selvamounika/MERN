import React from "react";

function Projects() {
  const containerStyle = {
    padding: "20px",
    background: "#001d3d", // Match the dark background color from the image
    color: "white", // White text for better contrast
  };

  const projectTitleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#00ff88", // Green color for the title to match the "Experience" section
    textAlign: "center",
    marginBottom: "20px",
  };

  const cardStyle = {
    background: "#002a5b", // Darker card background
    borderRadius: "8px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Subtle shadow for elevation
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#00ff88", // Green for card titles
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#a6a6a6", // Grayish text for descriptions
  };

  return (
    <div style={containerStyle}>
      <h2 style={projectTitleStyle}>PROJECTS</h2>
      <div style={cardStyle}>
        <h3 style={titleStyle}>HERBOMANIA</h3>
        <p style={descriptionStyle}>
        The Virtual Herbal Garden project for SIH 2024, which was shortlisted in the internal college hackathon. The
platform aimed to create an immersive and interactive experience to explore medicinal plants used in AYUSH
systems like Ayurveda, Siddha, and Homeopathy.
Tech stack: Unity, Blender, MongoDB

        </p>
      </div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>ORGANIFY</h3>
        <p style={descriptionStyle}>
        I pitched the Organify app, an innovative solution presented during an ideathon event, which reimagines the organ
transplant process using drone technology. Organify streamlines organ delivery between hospitals and donors via
a user-friendly mobile interface. My presentation effectively conveyed the vision and potential impact of Organify,
demonstrating my ability to articulate novel solutions to societal challenges.
        </p>
      </div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>COLLEGE EVENT AGGREGATOR APP</h3>
        <p style={descriptionStyle}>
        Developed a mobile application to aggregate and streamline information about college events, providing students
with a centralized platform to discover, track, and participate in campus activities. It serves as a one-stop solution
for all event-related needs, providing users with easy access to event information, registration, reminders, and more.
Tech Stack: Flutter, Figma, MySQL
        </p>
      </div>
      <div style={cardStyle}>
        <h3 style={titleStyle}>NUTRITION
RECOMMENDATION SYSTEM
</h3>
        <p style={descriptionStyle}>
        The "Nutrition Recommendation System" addresses these challenges by combining
technology and nutrition science to deliver personalized dietary recommendations. By calculating
the BMI using simple user inputs such as height and weight, the system identifies the user's
nutritional category and provides food recommendations tailored to their specific needs. These
recommendations include diverse cuisines, ingredients, and preparation methods, ensuring that
users not only meet their nutritional goals but also enjoy their meals
        </p>
      </div>
    </div>
  );
}

export default Projects;
