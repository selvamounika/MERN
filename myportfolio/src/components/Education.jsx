import React from "react";

function Education() {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "200px",
    background: "#001d3d", // Dark blue background to match the portfolio style
    color: "white",
  };

  const cardStyle = {
    width: "1000px",
    height: "600px", // Ensures square shape
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#002a5b", // Darker card background
    borderRadius: "40px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    textAlign: "center",
    padding: "10px",
    overflow: "hidden",
  };

  const titleStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#00ff88", // Green for titles
    marginBottom: "10px",
  };

  const descriptionStyle = {
    fontSize: "16px",
    color: "#a6a6a6", // Grayish text for descriptions
  };
  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover", // Ensures the image fits nicely in the container
  };


  return (
    <div style={containerStyle}>
      {/* 10th Card */}
      <div style={cardStyle}>
      <img
          src="https://tse2.mm.bing.net/th?id=OIP.ZEh0NXDyn-MMZjmWE7cpJAAAAA&pid=Api&P=0&h=180" // Replace with your image URL
          alt="12th Grade School"
          style={imageStyle}
        />
        <h3 style={titleStyle}>SECONDARY SCHOOLING</h3>
        <p style={descriptionStyle}>VIVEK VIDHYA MANDIR</p>
        <p style={descriptionStyle}>77/2A 83/2, Solavampalayam Post, Kinathukadavu, Coimbatore </p>
        <p style={descriptionStyle}>Year: 2020</p>
        <p style={descriptionStyle}>Percentage: 98%</p>
      </div>

      {/* 12th Card */}
      <div style={cardStyle}>
      <img
          src="https://yellowslate.sgp1.cdn.digitaloceanspaces.com/schools/169442865332630084364feededa19de1694428654.jpg" // Replace with your image URL
          alt="12th Grade School"
          style={imageStyle}
        />
        <h3 style={titleStyle}>SENIOR SECONDARY SCHOOLING</h3>
        <p style={descriptionStyle}>SSVM WORLD SCHOOL</p>
        <p style={descriptionStyle}>SSVM Institutions
Sf No 72/2 Vaigai Nagar,
Pattanam, Singanallur to Vellalore Road,
Coimbatore - 641 016.
Tamil Nadu, India. .</p>
        <p style={descriptionStyle}>Year: 2022</p>
        <p style={descriptionStyle}>Percentage: 85.8%</p>
      </div>

      {/* College Card */}
      <div style={cardStyle}>
      <img
          src="https://tse1.mm.bing.net/th?id=OIP.BSQcegKC6ANWRNazhuvu5AAAAA&pid=Api&P=0&h=180" // Replace with your image URL
          alt="12th Grade School"
          style={imageStyle}
        />
        <h3 style={titleStyle}>College</h3>
        <p style={descriptionStyle}>SRI ESHWAR COLLEGE OF ENGINEERING</p>
        <p style={descriptionStyle}>B.Tech Artificial Intelligence and Data Science </p>
        <p style={descriptionStyle}>Kondampatti [Post], Vadasithur (via), Coimbatore </p>
        <p style={descriptionStyle}>Year: 2023-2027</p>
        <p style={descriptionStyle}>CGPA: 8.55</p>
      </div>
    </div>
  );
}

export default Education;
