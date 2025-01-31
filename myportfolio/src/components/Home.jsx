import React from "react";

function Home() {
  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #001d3d, #002a5b)", // Dark blue gradient
    color: "white",
    textAlign: "center",
    padding: "20px",
    flexWrap: "wrap",
  };

  const textContainerStyle = {
    flex: "1",
    padding: "20px",
    maxWidth: "600px",
  };

  const titleStyle = {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00ff88", // Green title to match your theme
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  };

  const subTitleStyle = {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#a6a6a6", // Light gray for readability
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.2)",
  };

  const imageContainerStyle = {
    flex: "5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "800px",
  };

  const imageStyle = {
    width: "300%",
    maxWidth: "500px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)", // Darker shadow for depth
  };

  return (
    <div style={containerStyle}>
      <div style={textContainerStyle}>
        <h1 style={titleStyle}>Welcome to My Portfolio</h1>
        <p style={subTitleStyle}>
        Every journey becomes a story waiting to be told, and I express these stories creatively by making engaging reels and capturing breathtaking moments through videography. Videography allows me to connect with people and places on a deeper level, preserving the essence of my experiences. Beyond my tech and creative pursuits, I am a mandala artist, captivated by the art of intricate designs and patterns. For me, creating mandalas is not just about aesthetics but also about mindfulness, balance, and finding peace in the details. Whether I’m unraveling the complexities of AI, embarking on adventures, or immersing myself in artistic expression, I am constantly inspired by the world’s diversity. My eclectic interests and creative outlook enable me to push boundaries, embrace innovation, and leave a meaningful impact wherever I go."
        </p>
      </div>
      <div style={imageContainerStyle}>
      <img src="image/mypic.png" alt="Your Name" style={imageStyle} />

      </div>
    </div>
  );
}

export default Home;
