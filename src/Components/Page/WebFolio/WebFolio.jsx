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
        <div className="folio">
          <div className="card">
            <img src={Pramodya_Mobile} alt="Pramodya Mobile" />
            <div className="card-links">
              <a
                href="https://github.com/username/project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://liveproject.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>

          <div className="card">
            <img src={Amre} alt="Amre" />
            <div className="card-links">
              <a
                href="https://github.com/username/project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://liveproject.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>

          <div className="card">
            <img src={Cargo_Ton} alt="Cargo_Ton" />
            <div className="card-links">
              <a
                href="https://github.com/username/project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://liveproject.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebFolio;
