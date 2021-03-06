import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function Header() {
  const headerStyle = {
    backgroundColor: "#0000CD",
    color: "#fff",
    padding: "10px 15px",
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", lineHeight: "1.447em", margin: "0px" }}>
        Abena's Todo App
      </h1>
    </header>
  );
}

export default Header;
