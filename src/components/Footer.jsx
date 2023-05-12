import React from "react";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>CopyRight © {currentYear} </p>
    </footer>
  );
}

export default Footer;
