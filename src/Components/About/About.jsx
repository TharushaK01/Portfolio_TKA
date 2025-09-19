import React from "react";
import "./About.css";
import OrbitingSkills from "../../Components/About/OrbitingSkills";

import Experience from "../../Components/About/Experience";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <div className="about-section">
          <div className="about-para">
            <p>
              I’m a versatile Full-Stack Developer and Digital Designer
              passionate about building scalable web applications and creative
              brands. Skilled in React, Next.js, Angular, Node.js, Spring Boot,
              Laravel, WordPress, and Webflow. I create responsive, user-focused
              solutions. With experience in UI/UX design, branding, and SEO
              optimization, I blend technical expertise and creativity to
              deliver impactful digital experiences
            </p>
          </div>
          {/* 
                    <div className="skills-right">
                        <div className="about-skill"><p>React</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Angular</p><hr style={{width:"80%"}}/></div>
                        <div className="about-skill"><p>Node.js</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Spring Boot</p><hr style={{width:"60%"}}/></div>
                        <div className="about-skill"><p>Laravel</p><hr style={{width:"70%"}}/></div>
                        <div className="about-skill"><p>Word Press</p><hr style={{width:"90%"}}/></div>
                        <div className="about-skill"><p>Webflow</p><hr style={{width:"80%"}}/></div>    
                    </div>
                 </div>  */}
          <div className="about-skills">
            <div className="skills-left">
              <h3>Skills</h3>
            </div>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <OrbitingSkills />
           <Experience />
        </div>


        {/* <div className="about-work-experiences">
          <h3>Professional Experience</h3>
          <div className="professional-experience">
            <div className="experience-left">
              <h4>Web Developer Intern</h4>
              <h5>Web Market Florida SEO, USA | Remote</h5>
            </div>
            <div className="experience-right">
              <h4>01. 2025 to 07. 2025</h4>
              <div className="experience-point">
                <li>
                  <p>
                    Developed multiple websites using <span>WordPress</span>,
                    leveraging <span>Divi and Elementor </span>theme builders to
                    create responsive, user-friendly interfaces.
                  </p>
                </li>
              </div>
              <div className="experience-point">
                <li>
                  <p>
                    Enhanced proficiency in{" "}
                    <span>HTML, CSS, JavaScript, and PHP</span> to implement
                    custom design and functionality
                  </p>
                </li>
              </div>
              <div className="experience-point">
                <li>
                  <p>
                    Acquired knowledge in <span>SEO</span> best practices to
                    improve site visibility and search rankings.
                  </p>
                </li>
              </div>
              <div className="experience-point">
                <li>
                  <p>
                    Focused on website performance optimization, including
                    understanding and improving{" "}
                    <span>
                      LCP (Largest Contentful Paint) and CLS (Cumulative Layout
                      Shift)
                    </span>{" "}
                    metrics for better user experience and Core Web Vitals
                    compliance.
                  </p>
                </li>
              </div>
            </div>
          </div>
          <div className="professional-experience">
            <div className="experience-left">
              <h4>Creative Marketing Designer & Social Media Manager</h4>
              <h5>
                Infinity Journery Advisor, Habarana, <br />
                Sri Lanka.
              </h5>
            </div>
            <div className="experience-right">
              <h4>05. 2023 to Present</h4>
              <div className="experience-point">
                <li>
                  <p>
                    Successfully managed and optimized the company’s{" "}
                    <span>social media platforms,</span> increasing engagement
                    and brand visibility.
                  </p>
                </li>
              </div>
              <div className="experience-point">
                <li>
                  <p>
                    Designed compelling visual content using{" "}
                    <span>
                      Adobe Photoshop, Illustrator, Premiere Pro, and After
                      Effects
                    </span>{" "}
                    to enhance brand identity and audience reach.
                  </p>
                </li>
              </div>
              <div className="experience-point">
                <li>
                  <p>
                    <span>
                      Planned, created, and executed social media campaigns
                    </span>{" "}
                    aligned with marketing objectives to drive customer
                    interaction and conversions.
                  </p>
                </li>
              </div>
              <div className="experience-point">
                <li>
                  <p>
                    Managed{" "}
                    <span>
                      paid social media ad campaigns, monitoring performance
                      metrics
                    </span>{" "}
                    and implementing strategies to maximize ROI.
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className="about-education">
          <h3>Education</h3>
          <div className="education">
            <div className="education-left">
              <h4>Bachelor of Science (Hons) in Computer Sciences.</h4>
              <h5>Sabaragamuwa University of Sri Lanka</h5>
            </div>
            <div className="education-right">
              <h4>2020 to 2025</h4>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
