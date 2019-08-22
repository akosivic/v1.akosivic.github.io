import React from "react";
import "./scrollbutton.css";

const Scrollbutton = ({ targetSection, text }) => {
  return (
    <a href={`#${targetSection}`}>
      <span />Scroll
    </a>
  );
};

export default Scrollbutton;
