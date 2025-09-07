import React from "react";
import { Link } from "react-router-dom";
import "./WebFolio.css";
import Pramodya_Mobile from "../../../assets/Pramodya_Mobile.webp";
import Amre from "../../../assets/Amre.webp";
import Cargo_Ton from "../../../assets/Cargo_Ton.webp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const WebFolio = () => {
  return (
    <div className="webdeveopments">
      <div className="webdev">
        <h1>Web Development</h1>
        <ul className="webdev-list">
          <li>React</li>
          <li>Angular</li>
          <li>Next.js</li>
          <li>Spring Boot</li>
          <li>Node.js</li>
          <li>Java Script</li>
          <li>Python</li>
          <li>Java</li>
          <li>C#</li>
          <li>Bootstrap</li>
          <li>MongoDB</li>
          <li>MySQL</li>
          <li>Firebase</li>
          <li>PostgreSQL</li>
          <li>WordPress</li>
          <li>Webflow</li>
          <li>Shopify</li>
          <li>AdobeXD</li>
          <li>Figma</li>
        </ul>
      </div>
      <div className="Dynamic_Webfolio">
        <h2>Dynamic Webfolio</h2>
        <div className="card-area">
          <div className="wrapper">
            <div className="box-area">
              <div className="box">
                <img src={Pramodya_Mobile} alt="Cargo Ton Website" />
                <div className="overlay">
                  <h3>Cargo Ton Website</h3>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5</li>
                    <li>Tailwind</li>
                  </ul>
                  <div className="icon">
                    <FaGithub className="webdev-icon" />
                    <FaExternalLinkAlt className="webdev-icon" />
                  </div>
                </div>
              </div>
              <div className="box">
                <img src={Amre} alt="Cargo Ton Website" />
                <div className="overlay">
                  <h3>Cargo Ton Website</h3>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5</li>
                    <li>Tailwind</li>
                  </ul>
                  <div className="icon">
                    <FaGithub className="webdev-icon" />
                    <FaExternalLinkAlt className="webdev-icon" />
                  </div>
                </div>
              </div>
              <div className="box">
                <img src={Cargo_Ton} alt="Cargo Ton Website" />
                <div className="overlay">
                  <h3>Cargo Ton Website</h3>
                  <ul>
                    <li>React.js</li>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5</li>
                    <li>Tailwind</li>
                  </ul>
                  <div className="icon">
                    <FaGithub className="webdev-icon" />
                    <FaExternalLinkAlt className="webdev-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFolio;