import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function footer() {
  const footerStyle = {
    backgroundColor: "#0000CD",
    color: "#fff",
    padding: "10px 15px",
  };

  return (
    <header style={footerStyle}>
      <h1 style={{ fontSize: "14px", lineHeight: "1.447em", margin: "0px" }}>
        Abena's Project 3
      </h1>
    </header>
  );
}

export default footer;
