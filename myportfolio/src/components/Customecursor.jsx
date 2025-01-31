import React, { useEffect } from "react";

function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");

    // Inline styles for the custom cursor
    Object.assign(cursor.style, {
      position: "fixed",
      width: "15px",
      height: "15px",
      background: "#32CD32", // Your unique color
      borderRadius: "50%",
      pointerEvents: "none",
      zIndex: "10000",
      transition: "transform 0.1s ease-out",
      transform: "scale(1)",
    });

    document.body.appendChild(cursor);

    const onMouseMove = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseDown = () => {
      cursor.style.transform = "scale(0.8)";
    };

    const onMouseUp = () => {
      cursor.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.body.removeChild(cursor);
    };
  }, []);

  return null;
}

export default CustomCursor;
