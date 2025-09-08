import React from "react";
import { Link } from "react-router-dom";
import "./WebFolio.css";
import Pramodya_Mobile from "../../../assets/Pramodya_Mobile.webp";
import Amre from "../../../assets/Amre.webp";
import Cargo_Ton from "../../../assets/Cargo_Ton.webp";
import Cargo_Ton2 from "../../../assets/Cargo_Ton2.webp";
import Groopy from "../../../assets/groopy.webp";
import Port from "../../../assets/oldprotfoio.webp";
import Frank from "../../../assets/frankchawe.webp";
import AG from "../../../assets/Agproducts.webp";
import HD from "../../../assets/HDCamera.webp";
import Closet from "../../../assets/closetenvee.webp";
import Golden from "../../../assets/goldenlush.webp";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    img: Cargo_Ton,
    title: "Cargo Ton Website",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    img: Cargo_Ton2,
    title: "Cargo Ton Website",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    img: Groopy,
    title: "Cargo Ton Website",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    // The "Port" image is now positioned directly after "Groopy"
    img: Port,
    title: "Cargo Ton Website",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    img: Frank,
    title: "Cargo Ton Website",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    img: Golden,
    title: "Golden Lush",
    tech: ["React.js", "JavaScript (ES6+)", "HTML5", "Tailwind"],
    github: "#",
    live: "#",
  },
  // 👉 You can add more projects here
];

const wordpressProjects = [
  {
    img: Pramodya_Mobile,
    title: "Pramodya Mobile",
    tech: ["WordPress", "Elementor", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    img: HD,
    title: "HDCameraUSA",
    tech: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
    {
    img: Closet,
    title: "Closet Envee",
    tech: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
      {
    img: Closet,
    title: "Closet Envee",
    tech: ["WordPress", "WooCommerce", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
  // 👉 add more WordPress projects here
];


const WebflowProjects = [
  {
    img: Amre,
    title: "Amre",
    tech: ["WordPress", "Elementor", "PHP", "MySQL"],
    github: "#",
    live: "#",
  },

  // 👉 add more WordPress projects here
];

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
              {projects.map((project, index) => (
                <div className="box" key={index}>
                  <img src={project.img} alt={project.title} />
                  <div className="overlay">
                    <h3>{project.title}</h3>
                    <ul>
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>
                    <div className="icon">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <FaGithub className="webdev-icon" />
                      </a>
                      <a href={project.live} target="_blank" rel="noreferrer">
                        <FaExternalLinkAlt className="webdev-icon" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


  {/* 🔽 NEW SECTION FOR WORDPRESS */}
  <h2>WordPress Webfolio</h2>
  <div className="card-area">
    <div className="wrapper">
      <div className="box-area">
        {wordpressProjects.map((project, index) => (
          <div className="box" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <ul>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="icon">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="webdev-icon" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="webdev-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>




  {/* 🔽 NEW SECTION FOR WEBFLOW */}
  <h2>Webflow Webfolio</h2>
  <div className="card-area">
    <div className="wrapper">
      <div className="box-area">
        {wordpressProjects.map((project, index) => (
          <div className="box" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="overlay">
              <h3>{project.title}</h3>
              <ul>
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
              <div className="icon">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub className="webdev-icon" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt className="webdev-icon" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>



      </div>
    </div>
  );
};

export default WebFolio;