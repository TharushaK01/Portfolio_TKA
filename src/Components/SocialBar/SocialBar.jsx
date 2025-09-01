import React from "react";
import "./SocialBar.css";
import git from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import medium from "../../assets/medium.svg";
import x from "../../assets/x.svg";

const SocialBar = () => {
  return (
    <div className="social-bar">
      <ul>
        <li><a href="#"><img src={git} alt="GitHub" /></a></li>
        <li><a href="#"><img src={linkedin} alt="LinkedIn" /></a></li>
        <li><a href="#"><img src={medium} alt="Medium" /></a></li>
        <li><a href="#"><img src={x} alt="X" /></a></li>
      </ul>
    </div>
  );
};

export default SocialBar;
