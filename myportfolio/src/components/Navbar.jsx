import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 7px",
    backgroundColor: "#001f3f",
    color: "white",
    position: "fixed",
    top: "0",
    width: "100%",
    zIndex: "1000",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const navLinksContainer = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    padding: "5px 10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  };

  const activeLinkStyle = {
    color: "#32CD32",
    textDecoration: "underline",
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle}>Selvamounika.K</div>
      <div style={navLinksContainer}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Home
        </NavLink>
        <NavLink
          to="/education"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Education
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Projects
        </NavLink>
        <NavLink
          to="/achievements"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Achievements
        </NavLink>
        <NavLink
          to="/skills"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Skills
        </NavLink>
        
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? { ...linkStyle, ...activeLinkStyle } : linkStyle)}
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
