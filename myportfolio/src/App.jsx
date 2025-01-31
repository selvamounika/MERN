import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import CustomCursor from "./components/Customecursor"; // Include your custom cursor component

// 404 Page Component
function NotFound() {
  return (
    <div style={{ padding: "50px", textAlign: "center", fontSize: "24px" }}>
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you're looking for does not exist.</p>
    </div>
  );
}

// Dynamic Page Title
function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Home | Selvamounika Portfolio",
      "/projects": "Projects | Selvamounika Portfolio",
      "/education": "Education | Selvamounika Portfolio",
      "/achievements": "Achievements | Selvamounika Portfolio",
      "/skills": "Skills | Selvamounika Portfolio",
      "/certifications": "Certifications | Selvamounika Portfolio",
      "/contact": "Contact | Selvamounika Portfolio",
    };

    document.title = pageTitles[location.pathname] || "Selvamounika Portfolio";
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <DynamicTitle />
      <CustomCursor /> {/* Custom Cursor for all pages */}
      <Navbar /> {/* Navbar stays fixed across all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
}

export default App;
