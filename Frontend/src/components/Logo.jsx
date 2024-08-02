import React from "react";
import logoimage from "../assets/images/logo.png";
function Logo({ width = "100px" }) {
  return (
    <div>
      <img src={logoimage} alt="Logo" style={{ width }} />
    </div>
  );
}

export default Logo;
